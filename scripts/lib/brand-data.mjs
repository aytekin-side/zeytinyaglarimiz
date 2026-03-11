import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ROOT = path.resolve(__dirname, '..', '..');
export const BRANDS_PATH = path.join(ROOT, 'brands.js');
export const BRAND_MEDIA_PATH = path.join(ROOT, 'brand-media.js');
export const BRAND_ASSETS_MANIFEST_PATH = path.join(ROOT, 'data', 'brand-assets-manifest.json');
export const BRAND_LOGO_REGISTRY_PATH = path.join(ROOT, 'data', 'brand-logo-registry.json');
export const BRAND_LOGO_AUDIT_REPORT_PATH = path.join(ROOT, 'data', 'brand-logo-audit-report.json');
export const BRAND_LOGO_BASELINE_PATH = path.join(ROOT, 'data', 'brand-logo-baseline.json');

function loadVmVariable(filePath, variableName) {
  const source = fs.readFileSync(filePath, 'utf8');
  const sandbox = { console, URL };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\n;globalThis.__exported = ${variableName};`, sandbox);
  return sandbox.__exported;
}

export function loadBrands() {
  return loadVmVariable(BRANDS_PATH, 'brands');
}

export function loadBrandMedia() {
  return loadVmVariable(BRAND_MEDIA_PATH, 'brandMedia');
}

export function readJsonIfExists(filePath, fallback = null) {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function loadBrandAssetsManifest() {
  return readJsonIfExists(BRAND_ASSETS_MANIFEST_PATH, { generatedAt: null, brands: [], failures: [] });
}

export function loadBrandLogoRegistry() {
  return readJsonIfExists(BRAND_LOGO_REGISTRY_PATH, { generatedAt: null, brands: [] });
}
