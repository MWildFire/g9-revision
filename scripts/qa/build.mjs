// A capture build is made only from a clean committed checkout, then sealed.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { buildDigest, sourceDigest, verifySourceRevision } from './local-audit-server.mjs';

const root = process.cwd();
const sha = execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
verifySourceRevision(root,sha);
const source = sourceDigest(root);
const dist = path.join(root,'dist');
// Vite empties dist for this build. Never seal a failed or concurrent source edit.
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
verifySourceRevision(root,sha);
if (sourceDigest(root) !== source) throw new Error('source_changed_during_build');
const manifest = { version:1, sha, sourceDigest:source, digest:buildDigest(dist), builtAt:new Date().toISOString() };
fs.writeFileSync(path.join(dist,'.qa-build.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Verified capture build: ${sha}`);
