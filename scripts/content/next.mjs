// Usage: node scripts/content/next.mjs <S|P|C|B|G|M|L>
// Prints the lane queue in due-date order. A batch is done when docs/content-revision/done/<batch>.md exists.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadBatches } from './lib.mjs';
const manifest = loadBatches();
const lane = (process.argv[2] ?? '').toUpperCase();
if (!manifest.lanes[lane]) { console.error(`usage: next.mjs <${Object.keys(manifest.lanes).join('|')}>`); process.exit(2); }
const doneDir = path.join(ROOT, 'docs/content-revision/done');
const done = new Set(fs.existsSync(doneDir) ? fs.readdirSync(doneDir).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)) : []);
const queue = manifest.batches.map((b, i) => ({ ...b, i })).filter(b => b.lane === lane).sort((a, b) => a.due.localeCompare(b.due) || a.i - b.i);
const started = id => fs.existsSync(path.join(ROOT, 'content-work', id));
const next = queue.find(b => !done.has(b.id));
for (const b of queue) console.log(`${done.has(b.id) ? '✓' : b === next ? '→' : started(b.id) ? '…' : ' '} ${b.due}  ${b.id}  ${b.title}`);
console.log(next ? `\nNEXT: ${next.id}${started(next.id) ? ' (already started: continue from content-work/' + next.id + ')' : ''}` : '\nLANE DONE');
