#!/usr/bin/env python3
import concurrent.futures
import json
import re
import warnings
from datetime import datetime, timedelta, timezone
from pathlib import Path

warnings.filterwarnings("ignore", message="urllib3 v2 only supports OpenSSL")

import requests

ROOT = Path(__file__).resolve().parent.parent
INPUT_PATH = ROOT / "data" / "brand-websites.json"
OUTPUT_PATH = ROOT / "data" / "brand-websites-iframe.json"
MANIFEST_PATH = ROOT / "data" / "brand-website-embed-manifest.json"
TTL_DAYS = 30
MAX_WORKERS = 12
TIMEOUT = (8, 12)
USER_AGENT = "Mozilla/5.0 (compatible; CodexIframeProbe/1.0; +https://zeytinyaglarimiz.com)"


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def cache_is_fresh(entry: dict) -> bool:
    checked_at = entry.get("checkedAt")
    if not checked_at:
        return False
    try:
        checked_time = datetime.fromisoformat(checked_at.replace("Z", "+00:00"))
    except ValueError:
        return False
    return checked_time >= datetime.now(timezone.utc) - timedelta(days=TTL_DAYS)


def parse_frame_ancestors(csp: str):
    if not csp:
        return []
    match = re.search(r"frame-ancestors\s+([^;]+)", csp, re.IGNORECASE)
    if not match:
        return []
    return [token.strip() for token in match.group(1).split() if token.strip()]


def frame_ancestors_allow(tokens):
    if not tokens:
        return True
    lowered = [token.lower() for token in tokens]
    if "'none'" in lowered:
        return False
    if "*" in lowered or "https:" in lowered or "http:" in lowered:
        return True
    return any("zeytinyaglarimiz.com" in token for token in lowered)


def x_frame_options_allow(xfo: str):
    if not xfo:
        return True
    lowered = xfo.lower()
    if "deny" in lowered or "sameorigin" in lowered:
        return False
    if "allow-from" in lowered:
        return "zeytinyaglarimiz.com" in lowered
    return True


def probe_site(site: dict):
    now = datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")
    url = site["url"]
    result = {
        "name": site["name"],
        "slug": site["slug"],
        "url": url,
        "checkedAt": now,
        "embeddable": False,
        "reason": "unknown",
    }
    try:
        response = requests.get(
            url,
            allow_redirects=True,
            timeout=TIMEOUT,
            headers={"User-Agent": USER_AGENT},
        )
        content_type = response.headers.get("content-type", "")
        xfo = response.headers.get("x-frame-options", "")
        csp = response.headers.get("content-security-policy", "")
        frame_ancestors = parse_frame_ancestors(csp)
        embeddable = (
            response.status_code < 400
            and "html" in content_type.lower()
            and x_frame_options_allow(xfo)
            and frame_ancestors_allow(frame_ancestors)
        )
        reason = "ok"
        if response.status_code >= 400:
            reason = f"http-{response.status_code}"
        elif "html" not in content_type.lower():
            reason = "not-html"
        elif not x_frame_options_allow(xfo):
            reason = f"x-frame-options:{xfo or 'blocked'}"
        elif not frame_ancestors_allow(frame_ancestors):
            reason = f"frame-ancestors:{' '.join(frame_ancestors)}"

        result.update(
            {
                "embeddable": embeddable,
                "reason": reason,
                "status": response.status_code,
                "finalUrl": str(response.url),
                "contentType": content_type,
                "xFrameOptions": xfo,
                "frameAncestors": frame_ancestors,
            }
        )
    except requests.RequestException as exc:
        result["reason"] = type(exc).__name__
        result["error"] = str(exc)
    return result


def main():
    sites = load_json(INPUT_PATH, [])
    cached_manifest = {
        entry["url"]: entry
        for entry in load_json(MANIFEST_PATH, [])
        if isinstance(entry, dict) and "url" in entry
    }

    fresh = []
    to_probe = []
    for site in sites:
        cached = cached_manifest.get(site["url"])
        if cached and cache_is_fresh(cached):
            fresh.append(cached)
        else:
            to_probe.append(site)

    probed = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        for result in executor.map(probe_site, to_probe):
            probed.append(result)

    manifest_map = {entry["url"]: entry for entry in fresh}
    for entry in probed:
        manifest_map[entry["url"]] = entry

    manifest = []
    iframe_sites = []
    for site in sites:
        info = manifest_map.get(site["url"])
        if not info:
            continue
        manifest.append(
            {
                "id": site["id"],
                "name": site["name"],
                "slug": site["slug"],
                "url": site["url"],
                "region": site["region"],
                "category": site["category"],
                **{k: v for k, v in info.items() if k not in {"name", "slug", "url"}},
            }
        )
        if info.get("embeddable"):
            iframe_sites.append(site)

    OUTPUT_PATH.write_text(
        f"{json.dumps(iframe_sites, ensure_ascii=False, indent=2)}\n",
        encoding="utf-8",
    )
    MANIFEST_PATH.write_text(
        f"{json.dumps(manifest, ensure_ascii=False, indent=2)}\n",
        encoding="utf-8",
    )

    print(
        f"Generated {len(iframe_sites)} iframe-safe websites "
        f"(probed {len(probed)}, cached {len(fresh)})"
    )


if __name__ == "__main__":
    main()
