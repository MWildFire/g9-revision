// Refuses to publish text that must not reach the public repository: the student's and teachers' names,
// the school, private paths. The patterns are NOT stored in tracked files (that would publish them): they live
// in .git/info/privacy-patterns.txt of the main checkout (shared by all worktrees, never pushed),
// one JavaScript regular expression per line (# = comment).
//   node scripts/content/privacy-check.mjs --staged     staged changes + the commit message in $G9_COMMIT_MSG
//   node scripts/content/privacy-check.mjs [base-ref]   every commit since base-ref (default origin/main):
//                                                       added lines AND commit messages
// Exit 7 when a forbidden text is found; 0 when clean or when the private file is absent (with a warning).
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const git = args => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 512 * 1024 * 1024 });
const file = process.env.G9_PRIVACY_PATTERNS ?? path.join(path.resolve(git(['rev-parse', '--git-common-dir']).trim()), 'info', 'privacy-patterns.txt');
if (!fs.existsSync(file)) { console.log(`privacy check skipped: ${file} not found`); process.exit(0); }
const patterns = fs.readFileSync(file, 'utf8').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#')).map(l => new RegExp(l, 'u'));
const hits = [];
const check = (where, text) => { for (const re of patterns) if (re.test(text)) { hits.push(`${where}: ${text.slice(0, 160)}`); return; } };
const scanDiff = (diff, label) => {
  let current = '';
  for (const line of diff.split('\n')) {
    if (line.startsWith('+++ ')) { current = line.slice(6); continue; }
    if (line.startsWith('+') && !line.startsWith('+++')) check(`${label}${current}`, line.slice(1));
  }
};

if (process.argv[2] === '--staged') {
  scanDiff(git(['diff', '--cached', '--unified=0', '--no-color']), '');
  for (const line of (process.env.G9_COMMIT_MSG ?? '').split('\n')) check('commit message', line);
} else {
  const base = process.argv[2] ?? 'origin/main';
  const commits = git(['rev-list', '--reverse', `${base}..HEAD`]).split('\n').filter(Boolean);
  for (const sha of commits) {
    const short = sha.slice(0, 7);
    for (const line of git(['log', '-1', '--format=%B', sha]).split('\n')) check(`${short} commit message`, line);
    scanDiff(git(['show', '--format=', '--unified=0', '--no-color', sha]), `${short} `);
  }
}
if (hits.length) {
  console.log(`PRIVACY: ${hits.length} line(s) contain a name, the school or a private path — replace them before publishing:`);
  for (const h of hits.slice(0, 40)) console.log('  ' + h);
  process.exit(7);
}
console.log('privacy check: clean');
