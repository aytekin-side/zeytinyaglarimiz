import fs from 'node:fs/promises';
import {
  BRAND_LOGO_AUDIT_REPORT_PATH,
  BRAND_LOGO_BASELINE_PATH,
  BRAND_LOGO_REGISTRY_PATH
} from './lib/brand-data.mjs';
import { buildLogoAuditSnapshot } from './lib/logo-audit.mjs';

const refreshBaseline = process.argv.includes('--refresh-baseline');

const snapshot = buildLogoAuditSnapshot();

await fs.writeFile(BRAND_LOGO_REGISTRY_PATH, `${JSON.stringify({ generatedAt: snapshot.generatedAt, brands: snapshot.brands }, null, 2)}\n`);
await fs.writeFile(BRAND_LOGO_AUDIT_REPORT_PATH, `${JSON.stringify({ generatedAt: snapshot.generatedAt, summary: snapshot.summary, issues: snapshot.issues }, null, 2)}\n`);

if (refreshBaseline) {
  await fs.writeFile(BRAND_LOGO_BASELINE_PATH, `${JSON.stringify({
    generatedAt: snapshot.generatedAt,
    issueKeys: snapshot.issues.map((issue) => issue.key),
    issues: snapshot.issues
  }, null, 2)}\n`);
}

console.log(JSON.stringify({
  registryPath: BRAND_LOGO_REGISTRY_PATH,
  auditReportPath: BRAND_LOGO_AUDIT_REPORT_PATH,
  refreshedBaseline: refreshBaseline,
  summary: snapshot.summary
}, null, 2));
