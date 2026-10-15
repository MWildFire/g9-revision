import test from 'node:test';
import assert from 'node:assert/strict';
import { waitForCaptureReady, CaptureIncomplete } from '../scripts/qa/capture-readiness.mjs';
const expected = { route:'/lesson?part=core', lang:'ru', h1:'Урок', minBlocks:3, texts:['Важное объяснение'], formulas:['line'] };
const ready = { route:expected.route, lang:'ru', h1:'Урок', blocks:4, loading:false, text:'Важное объяснение', formulas:['line'], fontsReady:true, assetsReady:true, signature:'complete' };
const opts = read => ({ read, timeout:55, stable:10, poll:2 });
for (const [name, mutation, reason] of [
 ['delayed lazy module',{loading:true},'loader'],
 ['stale heading from previous route',{h1:'Старый урок'},'wrong_h1'],
 ['wrong locale',{lang:'en'},'wrong_locale'],
 ['unfinished main block',{text:''},'missing_text:Важное объяснение'],
 ['missing formula',{formulas:[]},'missing_formula:line'],
 ['wrong part link',{route:'/lesson'},'wrong_route'],
 ['unfinished fonts',{fontsReady:false},'assets_pending'],
]) test(`capture rejects ${name} at timeout`, async () => {
 await assert.rejects(waitForCaptureReady(null,expected,opts(async()=>({...ready,...mutation}))), e=>e instanceof CaptureIncomplete && e.reasons.includes(reason));
});
test('capture waits through delayed lazy content, then requires a stable ready DOM',async()=>{
 let calls=0;
 const result=await waitForCaptureReady(null,expected,opts(async()=>++calls<4?{...ready,loading:true}:ready));
 assert.equal(result.status,'ready');assert.ok(calls>=7);assert.ok(result.stableMs>=10);
});
test('continuously changing layout times out instead of passing',async()=>{
 let n=0;await assert.rejects(waitForCaptureReady(null,expected,opts(async()=>({...ready,signature:String(n++)}))),/layout_unstable/);
});
test('capture refuses a route without an expected heading',async()=>{
 await assert.rejects(waitForCaptureReady(null,{...expected,h1:undefined},opts(async()=>ready)),/missing_expected_h1/);
});
