// Rebuilds docs/content-revision/glossary.json (used by lint.mjs) from the table in GLOSSARY.md.
// Row format: | English | Русский | stems, comma-separated | — rows whose third column starts with "—" are not checked.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib.mjs';
const md = fs.readFileSync(path.join(ROOT, 'docs/content-revision/GLOSSARY.md'), 'utf8');
const terms = [];
for (const line of md.split('\n')) {
  const cells = line.split('|').slice(1, -1).map(c => c.trim());
  if (cells.length !== 3 || cells[0] === 'English' || /^-+$/.test(cells[0]) || cells[2].startsWith('—')) continue;
  terms.push({ en: cells[0], ru: cells[2].split(',').map(s => s.trim()).filter(Boolean), term: cells[1] });
}
fs.writeFileSync(path.join(ROOT, 'docs/content-revision/glossary.json'), JSON.stringify({ note: 'generated from GLOSSARY.md by scripts/content/build-glossary.mjs', terms }, null, 2) + '\n');
console.log(`glossary.json: ${terms.length} checked terms`);
