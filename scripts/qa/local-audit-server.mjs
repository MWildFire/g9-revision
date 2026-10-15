import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
export function buildDigest(dir) {
  const hash = createHash('sha256');
  const visit = rel => { for (const name of fs.readdirSync(path.join(dir,rel)).sort()) { const file = path.join(rel,name); if (fs.statSync(path.join(dir,file)).isDirectory()) visit(file); else { hash.update(file); hash.update(fs.readFileSync(path.join(dir,file))); } } };
  visit(''); return hash.digest('hex');
}
export async function startAuditServer({ dist, port, sha }) {
  if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('An explicit allowed --port is required');
  if (!/^[a-f0-9]{40}$/.test(sha ?? '')) throw new Error('An exact --build-sha is required');
  const identity = { sha, digest:buildDigest(dist) };
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
