import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseExamDate, getExamDate, setExamDate, EXAM_DATE_STORAGE_KEY } from '../src/config/examDate.ts';
import { loadState, saveState, STORAGE_KEY } from '../src/lib/storage.ts';
const values = new Map();
globalThis.window = { localStorage: { getItem:k=>values.get(k)??null, setItem:(k,v)=>values.set(k,v), removeItem:k=>values.delete(k) }, dispatchEvent:()=>true };
test('no fabricated date and no June countdown migration',()=>{
  values.clear(); values.set('g9-exam-date','2026-06-15'); assert.equal(getExamDate(),null);
  setExamDate('2026-10-19'); const date=getExamDate(); assert.equal(date.getMonth(),9); assert.equal(date.getDate(),19);
  setExamDate(''); assert.equal(getExamDate(),null);
});
test('date validation rejects rollover and survives denied storage',()=>{
  for(const s of ['2026-02-30','2026-13-01','bad','2026-2-1','']) assert.equal(parseExamDate(s),null);
  assert.ok(parseExamDate('2028-02-29'));
  const previous=window.localStorage;
  Object.defineProperty(window,'localStorage',{configurable:true,get(){throw Error('denied')}});
  assert.equal(getExamDate(),null); assert.doesNotThrow(()=>setExamDate('2026-10-20')); assert.deepEqual(loadState().timetable,{entries:[]});
  Object.defineProperty(window,'localStorage',{configurable:true,value:previous});
});
test('malformed nested state cannot crash planner or progress',()=>{
  for(const data of [null,[],{progress:null,timetable:null,french:null,activeRecall:null},{progress:{math:null},timetable:{entries:[null,{}, {subjectId:'unknown'}]}}]){
    values.set(STORAGE_KEY,JSON.stringify(data)); const state=loadState();assert.ok(state.progress);assert.deepEqual(state.timetable.entries,[]);assert.ok(state.french);assert.ok(state.activeRecall);
  }
});
test('valid old progress and recall survive normalization',()=>{
 const state={progress:{math:{'number-systems':{viewed:true,completed:true}}},timetable:{entries:[{id:'x',date:'2026-10-01',subjectId:'math',topicId:'number-systems',completed:true}]},french:{level:'capable'},activeRecall:{rivers:{one:'my own explanation'}}};
 values.set(STORAGE_KEY,JSON.stringify(state));const actual=loadState();assert.deepEqual(actual.progress,state.progress);assert.deepEqual(actual.timetable,state.timetable);assert.deepEqual(actual.activeRecall,state.activeRecall);assert.equal(actual.french.level,'capable');
});
test('fresh defaults do not share mutable nested state',()=>{
 values.clear(); const one=loadState();one.progress.math={};one.timetable.entries.push({id:'leak'});assert.deepEqual(loadState().progress,{});assert.deepEqual(loadState().timetable.entries,[]);
});
test('all new material has bilingual text, answers and valid provenance; no October certainty',()=>{
 const data=JSON.parse(readFileSync(new URL('../src/data/mocks.json',import.meta.url)));
 const sourceIds=new Set(data.sources.map(s=>s.id));const ids=new Set();
 for(const lesson of data.lessons){assert.ok(!ids.has(lesson.id));ids.add(lesson.id);for(const value of [lesson.title,lesson.question,lesson.answer,...lesson.paragraphs,...lesson.checks]){assert.ok(value.en.length>0);assert.match(value.ru,/[А-Яа-я]/);}for(const id of lesson.sources)assert.ok(sourceIds.has(id));assert.ok(['g9','g9-10','myp'].includes(lesson.scope));}
 for(const row of data.coverage){for(const id of row.sources)assert.ok(sourceIds.has(id));if(row.route.startsWith('/mocks/'))assert.ok(ids.has(row.route.split('/')[2]));}
 assert.equal(data.lessons.length,18);
});
