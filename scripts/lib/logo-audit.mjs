import fs from 'node:fs';
import path from 'node:path';
import {
  ROOT,
  loadBrands,
  loadBrandMedia,
  loadBrandAssetsManifest,
  loadBrandLogoRegistry
} from './brand-data.mjs';

const PLACEHOLDER_PATTERNS = [
  /<text\s+x=/i,
  /font-family="Georgia, 'Times New Roman'/i,
  /fill="#F5F1E8"/i,
  />NV</i
];

function toAbsoluteAssetPath(relPath) {
  return path.join(ROOT, relPath);
}

function normalizeSourceUrl(value) {
  return String(value || '').trim();
}

function isRemoteUrl(value) {
  return /^https?:\/\//i.test(String(value || '').trim());
}

function detectPlaceholderLogo(logoPath) {
  if (!logoPath || path.extname(logoPath).toLowerCase() !== '.svg') {
    return false;
  }

  const absolutePath = toAbsoluteAssetPath(logoPath);
  if (!fs.existsSync(absolutePath)) {
    return false;
  }

  try {
    const content = fs.readFileSync(absolutePath, 'utf8');
    return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(content));
  } catch {
    return false;
  }
}

function getIssueType({ logoPath, logoExists, placeholder }) {
  if (!logoPath) return 'missing';
  if (!logoExists) return 'missing-file';
  if (placeholder) return 'placeholder';
  return '';
}

function buildManifestMap(assetManifest) {
  return new Map((assetManifest?.brands || []).map((entry) => [String(entry.id), entry]));
}

function buildRegistryMap(existingRegistry) {
  return new Map((existingRegistry?.brands || []).map((entry) => [String(entry.id), entry]));
}

export function buildLogoAuditSnapshot() {
  const brands = loadBrands();
  const brandMedia = loadBrandMedia();
  const assetManifest = loadBrandAssetsManifest();
  const existingRegistry = loadBrandLogoRegistry();

  const manifestMap = buildManifestMap(assetManifest);
  const registryMap = buildRegistryMap(existingRegistry);

  const registry = brands.map((brand) => {
    const media = brandMedia[String(brand.id)] || {};
    const manifestEntry = manifestMap.get(String(brand.id)) || {};
    const previous = registryMap.get(String(brand.id)) || {};
    const logoPath = String(brand.image || media.logo || previous.logoPath || '').trim();
    const absoluteLogoPath = logoPath ? toAbsoluteAssetPath(logoPath) : '';
    const logoExists = Boolean(absoluteLogoPath && fs.existsSync(absoluteLogoPath));
    const placeholder = detectPlaceholderLogo(logoPath);
    const issue = getIssueType({ logoPath, logoExists, placeholder });
    const logoSourceMeta = manifestEntry.logoSource || {};
    const manifestSourceUrl = normalizeSourceUrl(logoSourceMeta.finalUrl || logoSourceMeta.source || '');
    const effectiveSourceUrl = isRemoteUrl(previous.logoSourceUrl)
      ? normalizeSourceUrl(previous.logoSourceUrl)
      : (isRemoteUrl(manifestSourceUrl) ? manifestSourceUrl : '');
    const effectiveSourceType = effectiveSourceUrl
      ? normalizeSourceUrl(previous.logoSourceType || logoSourceMeta.sourceType || '')
      : '';
    const status = issue === 'missing' || issue === 'missing-file'
      ? 'missing'
      : issue === 'placeholder'
        ? 'needs-review'
        : 'verified';

    return {
      id: brand.id,
      slug: brand.slug,
      name: brand.name,
      website: String(brand.website || '').trim(),
      logoPath,
      logoExists,
      logoSourceUrl: effectiveSourceUrl,
      logoSourcePage: normalizeSourceUrl(previous.logoSourcePage || brand.website || ''),
      logoSourceType: effectiveSourceType,
      status,
      detectedIssue: issue,
      verifiedAt: previous.verifiedAt || (status === 'verified' ? new Date().toISOString().slice(0, 10) : ''),
      notes: previous.notes || ''
    };
  });

  const issues = registry
    .filter((entry) => entry.detectedIssue)
    .map((entry) => ({
      id: entry.id,
      slug: entry.slug,
      name: entry.name,
      issue: entry.detectedIssue,
      logoPath: entry.logoPath,
      website: entry.website,
      logoSourcePage: entry.logoSourcePage,
      key: `${entry.slug}|${entry.detectedIssue}`
    }));

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      totalBrands: registry.length,
      verifiedCount: registry.filter((entry) => entry.status === 'verified').length,
      needsReviewCount: registry.filter((entry) => entry.status === 'needs-review').length,
      missingCount: issues.filter((entry) => entry.issue === 'missing').length,
      missingFileCount: issues.filter((entry) => entry.issue === 'missing-file').length,
      placeholderCount: issues.filter((entry) => entry.issue === 'placeholder').length,
      issueCount: issues.length
    },
    issues,
    brands: registry
  };
}
