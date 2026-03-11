import { readFileSync } from 'node:fs';
import {
  BRAND_LOGO_AUDIT_REPORT_PATH,
  BRAND_LOGO_BASELINE_PATH
} from './lib/brand-data.mjs';

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

const modeIndex = process.argv.indexOf('--mode');
const mode = modeIndex >= 0 ? process.argv[modeIndex + 1] : 'regression';
const audit = readJson(BRAND_LOGO_AUDIT_REPORT_PATH);
const baseline = readJson(BRAND_LOGO_BASELINE_PATH);

const currentByKey = new Map((audit.issues || []).map((issue) => [issue.key, issue]));
const baselineKeys = new Set(baseline.issueKeys || []);
const regressions = (audit.issues || []).filter((issue) => !baselineKeys.has(issue.key));
const resolved = [...baselineKeys].filter((key) => !currentByKey.has(key));

const payload = {
  mode,
  summary: audit.summary,
  regressions: regressions.map((issue) => ({ slug: issue.slug, issue: issue.issue })),
  resolvedCount: resolved.length
};

if (mode === 'strict') {
  if ((audit.summary?.issueCount || 0) > 0) {
    console.error(JSON.stringify(payload, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

if (regressions.length > 0) {
  console.error(JSON.stringify(payload, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(payload, null, 2));
