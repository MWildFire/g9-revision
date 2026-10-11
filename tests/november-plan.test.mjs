import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,statSync} from 'node:fs';
import ts from 'typescript';
import {activeBlocks,dayMinutes,dubaiToday,dueReviews,freshPlan,normalizePlan,shiftedDate,validDate,FIRST_EXAM,READY_BY} from '../src/modules/revision-plan/model.ts';
const plan=JSON.parse(readFileSync(new URL('../src/data/revision-plan.json',import.meta.url)));
const cache=new Map();
function load(name){if(cache.has(name))return cache.get(name);const source=readFileSync(new URL(`../src/modules/november/${name}.ts`,import.meta.url),'utf8');const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;const module={exports:{}};new Function('require','module','exports',compiled)(dep=>load(dep.replace('./','')),module,module.exports);cache.set(name,module.exports);return module.exports;}
const {practice,supplements}=load('content');const {papers}=load('papers');const {listening}=load('listening');
test('daily sequence reaches the confirmed exam week without adding Saturday workload',()=>{
 assert.equal(FIRST_EXAM,'2026-11-09');assert.equal(READY_BY,'2026-11-04');assert.equal(plan.days.length,34);
 for(let i=0;i<plan.days.length;i++){
  const day=plan.days[i];assert.ok(validDate(day.date));if(i)assert.equal((Date.parse(day.date)-Date.parse(plan.days[i-1].date))/86400000,1);
  assert.ok(dayMinutes(day,true)<=150,`${day.date} exceeds 2.5 hours including lessons`);
  if(new Date(day.date+'T12:00:00Z').getUTCDay()===6){assert.equal(day.rest,true);assert.equal(dayMinutes(day,true),0);}
 }
 assert.equal(plan.days[0].date,'2026-10-11');assert.equal(plan.days.at(-1).date,'2026-11-13');
 assert.deepEqual(plan.exams.map(e=>e.date),['2026-11-09','2026-11-10','2026-11-11','2026-11-12','2026-11-13']);
});
test('every scheduled topic has an internal lesson and substantial solved practice',()=>{
 const topics=new Set(plan.topics.map(t=>t.id));assert.equal(topics.size,41);
 for(const day of plan.days)for(const block of day.blocks){assert.ok(block.minutes>0);for(const id of block.topics)assert.ok(topics.has(id),id);}
 for(const topic of plan.topics){assert.equal(topic.route,`/november/${topic.id}`);assert.ok(practice[topic.id],topic.id);if(topic.id==='f-listen')continue;assert.ok(practice[topic.id].length>0);for(const q of practice[topic.id])for(const lang of ['en','ru']){assert.ok(q.prompt[lang].length>25,`${topic.id}: prompt`);assert.ok(q.answer[lang].length>20,`${topic.id}: solution`);}}
 for(const sections of Object.values(supplements))for(const section of sections)for(const lang of ['en','ru'])assert.ok(section.body[lang].length>250,'New explanations should develop the concept');
});
test('Arabic is opt-in and existing tutor blocks count in daily workload',()=>{
 const day=plan.days.find(d=>d.date==='2026-10-12');assert.ok(day.blocks.some(b=>b.lesson));assert.equal(dayMinutes(day,true)-dayMinutes(day,false),15);
 assert.ok(activeBlocks(day,false).every(b=>!b.optional));
 for(const date of ['2026-10-13','2026-10-14','2026-10-16'])assert.ok(plan.days.find(d=>d.date===date).blocks.filter(b=>b.lesson).reduce((n,b)=>n+b.minutes,0)>=120);
});
test('recall follows actual completion, merges Saturday dates and records recalled items',()=>{
 const days=[{date:'2026-10-11',phase:'x',title:{en:'x',ru:'x'},recall:5,blocks:[{id:'one',topics:['p-atom'],minutes:25,task:{en:'x',ru:'x'}}]}];const state=freshPlan();state.completed.one='2026-10-16';
 let queue=dueReviews(days,plan.topics,state,'2026-10-18');assert.equal(queue.length,1);assert.equal(queue[0].lastStudied,'2026-10-16');assert.deepEqual(queue[0].dates,['2026-10-18','2026-10-20','2026-10-27']);assert.equal(queue[0].due,true);
 state.completed['review:p-atom:2026-10-18']='2026-10-18';queue=dueReviews(days,plan.topics,state,'2026-10-18');assert.equal(queue[0].due,false);assert.deepEqual(queue[0].dates,['2026-10-20','2026-10-27']);
 delete state.completed.one;assert.deepEqual(dueReviews(days,plan.topics,state,'2026-10-18'),[]);
 assert.equal(shiftedDate('2026-10-16',1),'2026-10-18');
});
test('malformed state is contained and Dubai date handles the UTC boundary',()=>{
 for(const bad of [null,[],12,{completed:[],confidence:[],notes:null}])assert.deepEqual(normalizePlan(bad),freshPlan());
 const state=normalizePlan({completed:{good:'2026-10-11',bad:'2026-02-30'},confidence:{one:'green',two:'magic'},notes:'x'.repeat(13000),arabic:1});assert.deepEqual(state.completed,{good:'2026-10-11'});assert.deepEqual(state.confidence,{one:'green'});assert.equal(state.notes.length,12000);assert.equal(state.arabic,false);
 assert.equal(dubaiToday(new Date('2026-10-10T20:00:00Z')),'2026-10-11');assert.equal(validDate('2026-02-30'),false);
});
test('three original rehearsals each total 100 with all four criteria; listening is locally packaged',()=>{
 assert.equal(papers.length,3);for(const paper of papers){assert.equal(paper.questions.reduce((n,q)=>n+q.marks,0),100);assert.deepEqual(paper.questions.map(q=>q.criterion),['A','B','C','D']);for(const q of paper.questions)for(const lang of ['en','ru'])assert.ok(q.answer[lang].length>300);}
 assert.equal(listening.length,2);for(const track of listening){assert.equal(track.questions.reduce((n,q)=>n+q.marks,0),10);assert.ok(track.transcript.length>400);assert.ok(statSync(new URL(`../public/audio/french-${track.id}.mp3`,import.meta.url)).size>10000);}
});
test('worked quantitative answers retain important unit and model checks',()=>{
 assert.ok(practice['p-matter'][0].answer.en.includes('71000'));assert.ok(practice['c-quantity'][0].answer.en.includes('80%'));assert.ok(practice['c-quantity'][0].answer.en.includes('56%'));assert.ok(practice['b-plants'][0].answer.en.includes('4.71'));assert.ok(practice['b-cells'].at(-1).answer.en.includes('cm⁻¹'));assert.ok(practice['b-nervous'].at(-1).answer.en.includes('0.179'));
});
