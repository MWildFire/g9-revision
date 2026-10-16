import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { loadTs } from '../scripts/content/lib.mjs';
import { collectProgress, encodeProgress, decodeProgress, applyProgress } from '../src/lib/transfer.ts';
const lessons=JSON.parse(fs.readFileSync('src/modules/grade9/lessons.json','utf8'));
const scope=JSON.parse(fs.readFileSync('src/modules/grade9/biology-scope.json','utf8'));
const {findFormulaTeaching}=loadTs('src/content/formulaTeaching.ts');
test('biological concentration gradients cannot attach the straight-line card even with graph context',()=>{
 for(const text of ['A concentration gradient drives diffusion; plot a graph of concentration against time.','An electrochemical gradient crosses the membrane; the line shows the concentration.','Water moves down a water-potential gradient.']) assert.ok(!findFormulaTeaching(text,'biology').some(c=>c.id==='line'));
 assert.ok(findFormulaTeaching('The gradient of a distance–time graph gives speed.','physics').some(c=>c.id==='line'));
 assert.ok(findFormulaTeaching('concentration gradient; y = mx + c','biology').some(c=>c.id==='line'),'an explicit mathematical equation remains available');
});
test('the original 79 subtopics retain distinct current and earlier-year groups without claiming mastery',()=>{
 assert.equal(scope.length,16);assert.equal(scope.reduce((a,x)=>a+x.count,0),79);
 assert.equal(scope.filter(x=>x.earlierYear).length,3);
 assert.equal(scope.filter(x=>!x.earlierYear).reduce((a,x)=>a+x.count,0),63);
});
test('new recall transfers with existing progress without modifying older values',()=>{
 const before=new Map([['g9-grade9-recall-v1','{"g-floods":true}'],['g9-november-plan-2026-v1','{"notes":"keep"}'],['other','private']]);
 const storage=map=>({get length(){return map.size;},key:i=>[...map.keys()][i]??null,getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v)});
 const p=decodeProgress(encodeProgress(collectProgress(storage(before))));const after=new Map();assert.equal(applyProgress(storage(after),p),2);
 assert.equal(after.get('g9-grade9-recall-v1'),before.get('g9-grade9-recall-v1'));assert.equal(after.get('g9-november-plan-2026-v1'),before.get('g9-november-plan-2026-v1'));assert.ok(!after.has('other'));
});
test('every new exercise and source has a stable complete bilingual address',()=>{
 const ids=lessons.flatMap(l=>[l.id,...l.practice.map(q=>q.id)]);assert.equal(ids.length,new Set(ids).size);
 const sources=JSON.parse(fs.readFileSync('src/modules/grade9/sources.json','utf8'));
 for(const l of lessons){for(const id of l.sources)assert.ok(sources[id],`${l.id}: ${id}`);for(const row of l.model.rows)for(const c of row)assert.ok(c.en&&c.ru);for(const q of l.practice)for(const lang of ['en','ru'])assert.ok(q.prompt[lang]&&q.answer[lang]);}
});
