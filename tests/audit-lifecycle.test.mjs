import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {withDeadline,persistAuditReport} from '../scripts/qa/audit-lifecycle.mjs';

test('a browser close promise that never settles cannot hold the audit indefinitely', async () => {
  await assert.rejects(withDeadline(() => new Promise(() => {}), 'browser_close', 20), /browser_close_timeout/);
  assert.equal(await withDeadline(() => Promise.resolve('closed'), 'browser_close', 20), 'closed');
});
test('capture progress survives a failed close without becoming a complete audit', () => {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'qa-lifecycle-'));
  try {
    const file=path.join(dir,'report.json');
    const report={expectedDenominator:2,loopCompleted:false,fatalError:'context_close_timeout',cleanupErrors:[],results:[{status:'captured',fail:false}]};
    persistAuditReport(file,report);
    const saved=JSON.parse(fs.readFileSync(file));
    assert.equal(saved.complete,false);assert.equal(saved.denominator,1);assert.equal(saved.results[0].status,'captured');
    const missing=persistAuditReport(file,{...report,loopCompleted:true,fatalError:null});assert.equal(missing.complete,false);
    const captured=persistAuditReport(file,{...report,loopCompleted:true,fatalError:null,results:[...report.results,{status:'capture_incomplete',fail:true}]});
    assert.equal(captured.complete,true);assert.equal(captured.incomplete,1);assert.equal(captured.results[1].fail,true);
  } finally {fs.rmSync(dir,{recursive:true});}
});
