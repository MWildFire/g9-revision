import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {applyReplacements,blockCompletionKey,dayMinutes,dueReviews,freshPlan,loadStudyState,normalizePlan,recallPriority,recordRetrieval,remainingPastBlocks} from '../src/modules/revision-plan/model.ts';
const plan=JSON.parse(fs.readFileSync('src/data/revision-plan.json'));
const sessions=JSON.parse(fs.readFileSync('src/data/study-sessions.json'));
const practice=JSON.parse(fs.readFileSync('src/data/chemistry-practice-portions.json'));
test('overdue recall is deferred on every protected Saturday, without losing it on Sunday',()=>{
 const state=freshPlan();state.completed.one='2026-10-11';
 const days=[{date:'2026-10-11',recall:5,blocks:[{id:'one',topics:['p-atom'],minutes:25}]} ,...plan.days.filter(d=>d.date>'2026-10-11')];
 for(const date of ['2026-10-17','2026-10-24','2026-10-31','2026-11-07']){const q=dueReviews(days,plan.topics,state,date);assert.ok(q.some(x=>x.overdue));assert.ok(q.every(x=>!x.due));}
 assert.ok(dueReviews(days,plan.topics,state,'2026-10-18').some(x=>x.due));
});
test('a subject retains retrieval before its own exam, within its existing exam-week block',()=>{
 const state=freshPlan();state.completed.mathstudy='2026-11-08';state.completed.biostudy='2026-11-08';
 const days=[{date:'2026-11-08',recall:0,blocks:[{id:'mathstudy',topics:['m-core'],minutes:25},{id:'biostudy',topics:['b-cells'],minutes:25}]},...plan.days.filter(d=>d.date>'2026-11-08')];
 const q=dueReviews(days,plan.topics,state,'2026-11-12');const m=q.find(x=>x.topic.id==='m-core'),b=q.find(x=>x.topic.id==='b-cells');assert.deepEqual(m.dates,['2026-11-09','2026-11-12']);assert.equal(m.due,true);assert.ok(b.dates.every(d=>d<'2026-11-10'));assert.equal(b.due,false);
});
test('specific weak diagnostics and parent confidence change priority without declaring untested work secure',()=>{
 const state=freshPlan();state.confidence['c-atoms']='green';const part={id:'c-atoms-practice-1',parentTopic:'c-atoms',subject:'chemistry'};assert.equal(recallPriority(part,state),'green');state.diagnostics={one:{date:'2026-10-18',topicId:'c-atoms',sessionId:part.id,questionId:'chem-scope-01',outcome:'retry',evidence:'I confused isotopes and ions; checked the answer.'}};assert.equal(recallPriority(part,state),'red');assert.equal(recallPriority({id:'b-cells',subject:'biology'},state),'unassessed');
 const days=[{date:'2026-10-11',recall:5,blocks:[{id:'c',topics:['c-atoms'],minutes:25},{id:'b',topics:['b-cells'],minutes:25}]},...plan.days.filter(d=>d.date>'2026-10-11')];state.completed.c='2026-10-16';state.completed.b='2026-10-16';state.confidence['b-cells']='red';assert.equal(dueReviews(days,plan.topics,state,'2026-10-18')[0].topic.id,'b-cells');
});
test('one click records one actual retrieval and cannot tick several missed intervals',()=>{
 const state=freshPlan(),dates=['2026-10-12','2026-10-15','2026-10-22'];const next=recordRetrieval(state,'c-atoms',dates,'2026-10-18');assert.equal(next.completed['review:c-atoms:2026-10-12'],'2026-10-18');assert.equal(next.completed['review:c-atoms:2026-10-15'],undefined);assert.equal(next.completed['retrieval:c-atoms:2026-10-18'],'2026-10-18');assert.deepEqual(recordRetrieval(next,'c-atoms',dates,'2026-10-18'),next);assert.deepEqual(state.completed,{});
});
test('an exact existing practice portion replaces a named flexible block without erasing displaced work',()=>{
 const state=loadStudyState(null),day=plan.days.find(d=>d.date==='2026-11-06'),part=practice[0];state.replacements={'chemistry-partial':part.id};const changed=applyReplacements(day,state,[...sessions,...practice]);assert.deepEqual(changed.blocks.map(b=>b.id),day.blocks.map(b=>b.id));assert.ok(dayMinutes(changed,false)<=dayMinutes(day,false));const block=changed.blocks.find(b=>b.id==='chemistry-partial');assert.equal(block.sessions[0],part.id);assert.equal(block.minutes,35);assert.notEqual(blockCompletionKey(block),block.id);state.completed[blockCompletionKey(block)]='2026-11-06';assert.equal(state.completed['chemistry-partial'],undefined);assert.equal(day.blocks.find(b=>b.id==='chemistry-partial').paper,'chemistry');
 const old=plan.days.find(d=>d.date==='2026-11-03');state.replacements[old.blocks[0].id]=part.id;assert.deepEqual(applyReplacements(old,state,[part]).blocks,old.blocks);
});
test('remaining work uses actual records; malformed new state cannot fabricate a checked attempt',()=>{
 const state=loadStudyState(null);assert.deepEqual(Object.keys(state.completed).sort(),['study:atomic-models','study:atomic-structure','study:isotopes']);const rest=remainingPastBlocks(plan.days,state,'2026-10-18');assert.ok(rest.length>0);const first=rest[0];state.completed[first.block.id]='2026-10-18';assert.equal(remainingPastBlocks(plan.days,state,'2026-10-18').length,rest.length-1);
 const normalized=normalizePlan({notes:'keep',diagnostics:{bad:{date:'2026-02-30',questionId:'x',topicId:'x',outcome:'secure',evidence:'x'},empty:{date:'2026-10-18',questionId:'x',topicId:'x',outcome:'secure',evidence:''}},replacements:[],scienceContext:'invented'});assert.deepEqual(normalized.diagnostics,{});assert.equal(normalized.scienceContext,undefined);assert.equal(normalized.notes,'keep');
});
