// Usage: node scripts/content/apply.mjs <batch-id> [--dry-run]
// Applies content-work/<batch>/*.edits.jsonl to the real source files after lint passes,
// and appends the before/after log to docs/content-revision/changes/<batch>.jsonl.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, applyEdits, findBatch, readEdits, workDir } from './lib.mjs';

const [batchId, flag] = process.argv.slice(2);
if (!batchId) { console.error('usage: apply.mjs <batch-id> [--dry-run]'); process.exit(2); }
const batch = findBatch(batchId);
try { execFileSync(process.execPath, [path.join(ROOT, 'scripts/content/lint.mjs'), batchId], { stdio: 'inherit' }); }
catch { console.error('\nlint failed — fix the edits first; nothing was written.'); process.exit(1); }
const edits = readEdits(workDir(batch.id)).filter(e => !e.keep);
const { errors, log } = applyEdits(batch, edits, { dryRun: flag === '--dry-run' });
if (errors.length) { console.error('NOT APPLIED:\n' + errors.join('\n')); process.exit(1); }
const changes = log.filter(r => r.oldEn !== r.newEn || r.oldRu !== r.newRu);
if (flag !== '--dry-run') {
  const out = path.join(ROOT, 'docs/content-revision/changes');
  fs.mkdirSync(out, { recursive: true });
  const at = new Date().toISOString();
  fs.appendFileSync(path.join(out, `${batch.id}.jsonl`), changes.map(r => JSON.stringify({ at, ...r })).join('\n') + (changes.length ? '\n' : ''));
}
console.log(`${flag === '--dry-run' ? 'DRY RUN — ' : ''}${batch.id}: ${changes.length} texts changed/deleted.`);
console.log(`next: npm test && npm run build && npm run qa:render -- --batch ${batch.id}`);
