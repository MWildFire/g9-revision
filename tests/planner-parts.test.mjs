import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {blockIsComplete,completedSessionDates,dayMinutes,dueReviews,loadStudyState,normalizePlan,partCompletionKey,partMinutes,remainingPastBlocks,togglePlanPart} from '../src/modules/revision-plan/model.ts';
const read=p=>JSON.parse(fs.readFileSync(p));
const plan=read('src/data/revision-plan.json'),old=read('tests/fixtures/plan-skeleton.json');
const portions=[...read('src/data/additional-practice-portions.json'),...read('src/data/english-school-practice-portions.json')];
const blocks=plan.days.flatMap(d=>d.blocks).filter(b=>b.parts?.some(p=>portions.some(s=>s.id===p.sessionId))),parts=blocks.flatMap(b=>b.parts);
const sessionParts=id=>parts.filter(p=>p.sessionId===id);
const toggleAll=(state,rows,date)=>rows.reduce((s,p)=>togglePlanPart(plan.days,s,p.id,date),state);

test('nine selected existing English portions conserve every phase, question and route in seven bounded windows',()=>{
 assert.equal(blocks.length,7);assert.equal(parts.length,36);assert.equal(new Set(parts.map(p=>p.id)).size,36);
 assert.equal(new Set(parts.map(p=>p.sessionId)).size,9);
 let total=0;
 for(const id of new Set(parts.map(p=>p.sessionId))){
  const portion=portions.find(p=>p.id===id);assert.ok(portion,id);
  const phases={};for(const p of sessionParts(id)){
   for(const[phase,n]of Object.entries(p.phaseMinutes)){assert.ok(n>0);phases[phase]=(phases[phase]??0)+n;total+=n;}
   assert.deepEqual(p.practiceIds,portion.practiceIds);assert.equal(p.route,`/november/${portion.topic}?part=${id}`);
   assert.ok(p.instruction.en&&p.instruction.ru);
  }
  assert.deepEqual(phases,portion.timing,id);
 }
 assert.equal(total,350);
 assert.equal(blocks.reduce((n,b)=>n+(b.capacityMinutes??b.minutes),0),370);
 for(const b of blocks)assert.ok(b.parts.reduce((n,p)=>n+partMinutes(p),0)<=b.minutes);
 const script=sessionParts('school-script-transfer-practice');
 assert.equal(plan.days.find(d=>d.blocks.some(b=>b.parts?.some(p=>p.id===script.find(p=>p.phaseMinutes.attempt).id))).date,'2026-11-03');
 assert.equal(plan.days.find(d=>d.blocks.some(b=>b.parts?.some(p=>p.id===script.find(p=>p.phaseMinutes.check).id))).date,'2026-11-04');
});

test('all original block identities and science budgets remain; reserves are real, not capacity counted twice',()=>{
 for(const previous of old.days){const day=plan.days.find(d=>d.date===previous.date);
  assert.equal(day.recall,previous.recall);
  for(const b of previous.blocks){const current=day.blocks.find(x=>x.id===b.id);assert.ok(current);for(const key of ['id','minutes','topics','sessions'])assert.deepEqual(current[key],b[key],b.id+':'+key);}
  if(new Date(day.date+'T12:00:00Z').getUTCDay()===6)assert.equal(dayMinutes(day,true),0);
  assert.ok(dayMinutes(day,true)<=150);
 }
 assert.equal(dayMinutes(plan.days.find(d=>d.date==='2026-11-03'),true),148);
 assert.equal(dayMinutes(plan.days.find(d=>d.date==='2026-11-04'),true),145);
 const science=plan.days.flatMap(d=>d.blocks).filter(b=>['biology-full','biology-correct','physics-partial','chemistry-partial'].includes(b.id));
 assert.equal(science.reduce((n,b)=>n+b.minutes,0),270);
 assert.equal(science[0].paper,'biology');assert.deepEqual(science[2].paperQuestions,['phy-A','phy-C']);assert.deepEqual(science[3].paperQuestions,['chem-A','chem-C']);
});

test('legacy parent and study ticks preserve history but never complete or hide newly introduced parts',()=>{
 const state=loadStudyState(null),block=blocks[0];state.completed[block.id]='2026-10-20';state.completed['study:genre-letter-practice']='2026-10-19';state.notes='Keep my history';state.confidence['e-purpose']='green';
 const migrated=normalizePlan(JSON.parse(JSON.stringify(state)));
 assert.deepEqual(migrated,state);assert.equal(blockIsComplete(block,migrated),false);
 const backlog=remainingPastBlocks(plan.days,migrated,'2026-10-22').find(r=>r.block.id===block.id);
 assert.equal(backlog.block.parts.length,block.parts.length);
 assert.equal(completedSessionDates(plan.days,migrated,'2026-10-22')['e-purpose-core'],'2026-10-20');
 assert.equal(completedSessionDates(plan.days,migrated,'2026-10-22')['e-analysis-full-practice'],undefined);
 assert.equal(Object.keys(migrated.completed).filter(k=>k.startsWith('plan-part:')).length,0);
});

test('continuation only completes after all actual phases and undo restores its distinct prior record',()=>{
 const original=loadStudyState(null);original.completed['v2:2026-10-20-1']='2026-10-20';original.completed['study:genre-letter-practice']='2026-10-19';original.diagnostics={one:{date:'2026-10-19',questionId:'genre-letter',topicId:'e-purpose',outcome:'retry',evidence:'Need a specific request.'}};
 const rows=sessionParts('genre-letter-practice');
 let state=toggleAll(original,rows.filter(p=>p.phaseMinutes.read||p.phaseMinutes.example),'2026-10-20');
 assert.equal(state.completed['study:genre-letter-practice'],'2026-10-19');
 state=toggleAll(state,rows.filter(p=>p.phaseMinutes.attempt||p.phaseMinutes.check),'2026-10-28');
 assert.equal(state.completed['study:genre-letter-practice'],'2026-10-28');assert.deepEqual(state.diagnostics,original.diagnostics);
 assert.equal(state.confidence['e-purpose'],undefined);
 assert.ok(!remainingPastBlocks(plan.days,state,'2026-11-01').some(r=>r.block.parts?.some(p=>p.sessionId==='genre-letter-practice')));
 const roundTrip=normalizePlan(JSON.parse(JSON.stringify(state)));
 state=togglePlanPart(plan.days,roundTrip,rows.find(p=>p.phaseMinutes.attempt).id,'2026-11-01');
 assert.equal(state.completed['study:genre-letter-practice'],'2026-10-19');assert.equal(state.completed['v2:2026-10-20-1'],'2026-10-20');
 assert.equal(remainingPastBlocks(plan.days,state,'2026-11-02').flatMap(r=>r.block.parts??[]).filter(p=>p.sessionId==='genre-letter-practice').length,1);
 assert.deepEqual(original.completed,{'study:atomic-structure':'2026-10-11','study:isotopes':'2026-10-11','study:atomic-models':'2026-10-11','v2:2026-10-20-1':'2026-10-20','study:genre-letter-practice':'2026-10-19'});
});

test('reading and a final check out of order do not invent study, mastery or retrieval; a later independent study survives undo',()=>{
 const rows=sessionParts('school-script-transfer-practice');let state=loadStudyState(null);
 state=toggleAll(state,rows.filter(p=>p.phaseMinutes.read||p.phaseMinutes.check),'2026-11-04');
 assert.equal(state.completed['study:school-script-transfer-practice'],undefined);
 const topic={...plan.topics.find(t=>t.id==='e-creative'),id:'school-script-transfer-practice',parentTopic:'e-creative'};
 assert.deepEqual(dueReviews(plan.days,[topic],state,'2026-11-05'),[]);
 state=toggleAll(state,rows.filter(p=>p.phaseMinutes.example||p.phaseMinutes.attempt),'2026-11-05');
 assert.equal(state.completed['study:school-script-transfer-practice'],'2026-11-05');
 assert.equal(dueReviews(plan.days,[topic],state,'2026-11-06')[0].lastStudied,'2026-11-05');
 state.completed['study:school-script-transfer-practice']='2026-11-06';
 state=togglePlanPart(plan.days,state,rows[0].id,'2026-11-06');assert.equal(state.completed['study:school-script-transfer-practice'],'2026-11-06');
 assert.deepEqual(state.diagnostics,undefined);assert.deepEqual(state.confidence,{});
});

test('two known ability checks occupy existing subject budgets without silently completing displaced cores',()=>{
 const geo=plan.days.find(d=>d.date==='2026-10-19').blocks.find(b=>b.id==='study:g-tectonics-core');
 const science=plan.days.find(d=>d.date==='2026-10-25').blocks.find(b=>b.id==='study:s-c-core');
 assert.equal(geo.parts.reduce((n,p)=>n+partMinutes(p),0),35);assert.equal(science.parts.reduce((n,p)=>n+partMinutes(p),0),30);
 const divergent=geo.parts.filter(p=>p.sessionId==='geo-geo-tect-02-practice'),spring=science.parts.filter(p=>p.sessionId==='diagnostic-spring-energy-diagnostic');
 assert.equal(divergent.reduce((n,p)=>n+partMinutes(p),0),25);assert.equal(spring.reduce((n,p)=>n+partMinutes(p),0),25);
 assert.deepEqual(divergent.find(p=>p.phaseMinutes.attempt).practiceIds,['constructive-q2']);assert.deepEqual(spring.find(p=>p.phaseMinutes.attempt).practiceIds,['spring-energy-diagnostic']);
 let state=toggleAll(loadStudyState(null),[...geo.parts,...science.parts],'2026-10-25');
 assert.equal(state.completed['study:geo-geo-tect-02-practice'],'2026-10-25');assert.equal(state.completed['study:diagnostic-spring-energy-diagnostic'],'2026-10-25');
 assert.equal(state.completed['study:g-tectonics-core'],undefined);assert.equal(state.completed['study:s-c-core'],undefined);
 assert.equal(state.completed['study:s-c/analyse'],undefined);assert.equal(state.diagnostics,undefined);
});

test('case attempt9/check5 reuses existing recall, stays in backlog and cannot offer a second generic recall',()=>{
 const days=plan.days.filter(d=>d.recallParts?.length),rows=days.flatMap(d=>d.recallParts);
 assert.deepEqual(days.map(d=>[d.date,d.recall]),[['2026-11-02',5],['2026-11-03',5],['2026-11-04',5]]);
 assert.equal(rows.reduce((n,p)=>n+(p.phaseMinutes.attempt??0),0),9);assert.equal(rows.reduce((n,p)=>n+(p.phaseMinutes.check??0),0),5);
 assert.ok(rows.every(p=>p.recordStudy===false&&p.practiceIds[0]==='vulnerability'));
 let state=loadStudyState(null);state.completed['study:g-tectonics-core']='2026-10-19';state.completed['study:c-atoms-core']='2026-10-19';
 const topic={...plan.topics.find(t=>t.id==='c-atoms'),id:'c-atoms-core'};
 for(const day of days)assert.ok(dueReviews(plan.days,[topic],state,day.date).every(r=>!r.due));
 assert.equal(remainingPastBlocks(plan.days,state,'2026-11-05').flatMap(r=>r.block.parts??[]).filter(p=>rows.some(x=>x.id===p.id)).length,3);
 state=toggleAll(state,rows,'2026-11-05');assert.equal(state.completed['study:g-tectonics-core'],'2026-10-19');
 state=togglePlanPart(plan.days,state,rows[0].id,'2026-11-05');
 assert.equal(remainingPastBlocks(plan.days,state,'2026-11-06').flatMap(r=>r.block.parts??[]).filter(p=>rows.some(x=>x.id===p.id)).length,1);
 assert.equal(state.diagnostics,undefined);
});
