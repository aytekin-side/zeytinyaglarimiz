#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

node scripts/mirror-brand-assets.mjs
node scripts/build-brand-websites.mjs
node scripts/build-brand-locations.mjs
node scripts/build-topic-clusters.mjs
node scripts/build-rehber.mjs
node scripts/build-brand-scene-media.mjs || true
python3 scripts/fill-brand-scene-fallbacks.py
node scripts/build-brand-pages.mjs
node scripts/sync-root-brand-counts.mjs
