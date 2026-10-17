// Exhaustive changed-surface inventory, deliberately NOT an atomic-claim audit.
// Includes inherited changes against the public base, not just the last commit.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';
const [base, output] = process.argv.slice(2);
if (!base || !output) throw Error('Usage: review-inventory.mjs PUBLIC_BASE OUTPUT');
const git = (...args) => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 30e6, stdio:['ignore','pipe','pipe'] });
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const files = git('diff', '--name-only', base, '--', 'src', 'public').trim().split('\n').filter(Boolean);
const rows = [];
function leaves(value, pointer = '') {
  if (typeof value === 'string') return [[pointer, value]];
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, child]) => leaves(child, pointer + '/' + key.replaceAll('~', '~0').replaceAll('/', '~1')));
}
function literals(file, text) {
  const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, file.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const found = [];
  function visit(node) {
    if (ts.isStringLiteralLike(node) || ts.isJsxText(node) || ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) {
      const value = node.text.trim();
      if (value) found.push({ value, line: ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1, syntax: ts.SyntaxKind[node.kind] });
    }
    ts.forEachChild(node, visit);
  }
  visit(ast); return found;
}
for (const file of files) {
  let previous = ''; try { previous = git('show', base + ':' + file); } catch { /* newly added */ }
  if (!fs.existsSync(file)) { rows.push({file, kind:'deleted_surface', status:'review_required'}); continue; }
  const bytes = fs.readFileSync(file);
  if (file.endsWith('.json')) {
    const old = new Map(previous ? leaves(JSON.parse(previous)) : []);
    for (const [pointer, text] of leaves(JSON.parse(bytes.toString()))) if (old.get(pointer) !== text) rows.push({file, pointer, text, sha256:hash(text), kind:'json_string_leaf', status:'unclassified_occurrence_not_atomic_claim'});
  } else if (/\.[cm]?[tj]sx?$/.test(file)) {
    // Multiset subtraction preserves additional duplicate occurrences. It cannot
    // establish semantic equivalence or the number of claims inside a sentence.
    const remaining = new Map();
    for (const item of literals(file, previous)) remaining.set(item.value, (remaining.get(item.value) || 0) + 1);
    for (const item of literals(file, bytes.toString())) {
      const n = remaining.get(item.value) || 0;
      if (n) remaining.set(item.value, n - 1);
      else rows.push({file,...item,sha256:hash(item.value),kind:'typescript_literal_occurrence',status:'unclassified_occurrence_not_atomic_claim'});
    }
  } else rows.push({file,kind:/\.(mp3|wav|ogg)$/.test(file)?'audio':/\.(svg|png|jpg|webp)$/.test(file)?'diagram_or_image':'other_changed_surface',bytes:bytes.length,sha256:hash(bytes),status:'render_or_listening_review_required'});
}
fs.mkdirSync(path.dirname(output), {recursive:true});
fs.writeFileSync(output, JSON.stringify({schema:1, public_base:base, head:git('rev-parse','HEAD').trim(), working_diff_sha256:hash(git('diff',base)), denominator_warning:'Occurrences include metadata, duplicates, code and compound passages. No count here is a count of atomic claims or verified coverage. Manual assertion/source and objective ledgers are separate. Unchanged public surfaces are outside this delta inventory.', files, counts:rows.reduce((a,r)=>(a[r.kind]=(a[r.kind]||0)+1,a),{}),rows},null,2)+'\n');
console.log(JSON.stringify({files:files.length,occurrences:rows.length,output}));
