import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
export function buildDigest(dir) {
  const hash = createHash('sha256');
  const visit = rel => { for (const name of fs.readdirSync(path.join(dir,rel)).sort()) { const file = path.join(rel,name); if (file === '.qa-build.json') continue; if (fs.statSync(path.join(dir,file)).isDirectory()) visit(file); else { hash.update(file); hash.update(fs.readFileSync(path.join(dir,file))); } } };
  visit(''); return hash.digest('hex');
}
export function verifySourceRevision(root, sha) {
  const actual = execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
  if (actual !== sha) throw new Error('wrong_source_revision');
  if (execFileSync('git',['status','--porcelain','--untracked-files=normal'],{cwd:root,encoding:'utf8'}).trim()) throw new Error('dirty_source');
  return actual;
}
export function sourceDigest(root) {
  const files = execFileSync('git',['ls-files','-z'],{cwd:root,encoding:'utf8'}).split('\0').filter(Boolean).sort();
  const hash = createHash('sha256');
  for (const file of files) { hash.update(file); hash.update('\0'); hash.update(fs.readFileSync(path.join(root,file))); }
  return hash.digest('hex');
}
export function verifyBuiltRevision(root, dist, sha) {
  verifySourceRevision(root, sha);
  const file = path.join(dist,'.qa-build.json');
  if (!fs.existsSync(file)) throw new Error('missing_build_manifest: run npm run qa:build after committing changes');
  const manifest = JSON.parse(fs.readFileSync(file,'utf8'));
  if (manifest.sha !== sha || manifest.sourceDigest !== sourceDigest(root)) throw new Error('stale_build_source');
  if (manifest.digest !== buildDigest(dist)) throw new Error('modified_build');
  return { sha, digest:manifest.digest, sourceDigest:manifest.sourceDigest };
}
export async function startAuditServer({ dist, port, sha, root=path.dirname(dist) }) {
  if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('An explicit allowed --port is required');
  if (!/^[a-f0-9]{40}$/.test(sha ?? '')) throw new Error('An exact --build-sha is required');
  const identity = verifyBuiltRevision(root,dist,sha);
  const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.woff2':'font/woff2', '.mp3':'audio/mpeg' };
  const server = createServer((req,res)=>{
    const url=new URL(req.url,'http://localhost');
    if(url.pathname==='/__qa_identity'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify(identity));return;}
    const rel=decodeURIComponent(url.pathname).replace(/^\/g9-revision\/?/,'').replace(/^\//,'')||'index.html';
    const file=path.resolve(dist,rel);
    if(!file.startsWith(path.resolve(dist)+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.statusCode=404;res.end('Not found');return;}
    res.setHeader('Content-Type',types[path.extname(file)]??'application/octet-stream');res.setHeader('Cache-Control','no-store');fs.createReadStream(file).pipe(res);
  });
  await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(port,'127.0.0.1',resolve);});
  const base=`http://127.0.0.1:${port}/g9-revision/#`;
  const observed=await (await fetch(`http://127.0.0.1:${port}/__qa_identity`)).json();
  if(observed.digest!==identity.digest||observed.sha!==sha){server.close();throw new Error('wrong_build_identity');}
  return { server, base, identity };
}
