import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const read=p=>readFileSync(p,'utf8');
const json=l=>JSON.parse(read(`src/i18n/${l}/biology.json`));
const types=read('src/content/formulaTypes.ts');
const cards=read('src/content/chemBioFormulaTeaching.ts').replace("import {f} from './formulaTypes';",'');
const code=ts.transpileModule(types+'\n'+cards,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {chemBioFormulaTeaching}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
test('mitochondrial respiration card teaches aerobic equation and example in both languages',()=>{
 const c=chemBioFormulaTeaching.find(x=>x.id==='respiration-equation');
 for(const l of ['en','ru']){
  assert.match(c.formula[l],/6O₂/); assert.match(c.example[l],/oxygen|кислород/);
  assert.doesNotMatch(c.formula[l]+c.example[l],/C₂H₅OH|C₃H₅O₃/);
 }
});
test('cloning percentages include multiplication by 100 and equality',()=>{
 const s=read('src/modules/november/content.ts');
 assert.match(s,/4 ÷ 200 × 100 = 2/);assert.match(s,/3 ÷ 300 × 100 = 1/);
 assert.doesNotMatch(s,/5 × (?:60|35) —/);
});
test('osmosis example does not present an invented potato concentration as measured fact',()=>{
 for(const l of ['en','ru']){
 const x=json(l).cells.sections.transport.detailed.osmosisPractical.examples[1];
 assert.doesNotMatch(x,/0[.,]3|[+−]4/);
 assert.match(x,/zero|нул/);
 }
});
test('unverified egg lifespan is not a universal fixed 24 hours',()=>{
 for(const l of ['en','ru']) assert.doesNotMatch(json(l).cells.sections.specialised.detailed.egg.tip,/24/);
});
test('variation example is concrete and distinct from its rule',()=>{
 for(const l of ['en','ru']) assert.match(json(l).genetics.sections.variation.detailed.sources.examples[0],/pea|горох/i);
});
test('plant graph instruction gives the line card a relevant bilingual context',()=>{
 const s=read('src/modules/november/biologyTeaching.ts').split("'b-plants':[")[1].split("'b-disease'")[0];
 assert.match(s,/gradient.*graph|graph.*gradient/);
 assert.match(s,/угловой коэффициент/i);
 assert.match(s,/6 mm\/min/);assert.match(s,/6 мм\/мин/);
});
