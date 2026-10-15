import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { formatTimeTick } from '../src/components/simulations/physics/timeTicks.ts';
import { isSingleLocusCross, singleLocusOutcomes } from '../src/definitions/biologyModels.ts';
const read=p=>fs.readFileSync(p,'utf8');
test('short terminal-velocity intervals have distinct monotonic localized tick labels',()=>{
 for(const ticks of [[0,0.4,0.8,1.2,1.6,2],[0,0.02,0.04,0.06,0.08,0.1],[0,20,40,60]]) for(const lang of ['en','ru']) {
  const labels=ticks.map(x=>formatTimeTick(x,lang));assert.equal(new Set(labels).size,ticks.length);
  assert.deepEqual(labels.map(x=>Number(x.replace(',','.'))),ticks);
 }
 assert.equal(formatTimeTick(0.4,'ru'),'0,4');assert.equal(formatTimeTick(0.4,'en'),'0.4');
});
test('the Punnett model retains every outcome and rejects mixed loci without the unrelated formula card',()=>{
 assert.deepEqual(singleLocusOutcomes('Bb','Bb').flat().sort(),['BB','Bb','Bb','bb']);
 assert.equal(isSingleLocusCross('Bb','Aa'),false);
 assert.doesNotMatch(read('src/components/simulations/biology/PunnettSquare.tsx'),/FormulaTeaching/);
});
test('plant embedding uses just the shared photosynthesis lesson; full page keeps biotechnology',()=>{
 const lib=read('src/modules/november/LibraryTheory.tsx');
 assert.match(lib,/plants: page\('biology'.*'PhotosynthesisLesson'\)/);
 const page=read('src/modules/biology/pages/PhotosynthesisPage.tsx');
 const lesson=page.split('export function PhotosynthesisLesson()')[1];
 assert.match(page,/<PhotosynthesisLesson\s*\/>/);assert.match(page,/biotechItems/);
 assert.doesNotMatch(lesson,/biotech|BiologyTopicLayout/);assert.match(lesson,/PROCESS_KEYS/);
 // Plant transport and potometer teaching remains outside the shared embed.
 const teaching=read('src/modules/november/biologyTeaching.ts');
 assert.match(teaching,/potometer/);assert.match(teaching,/6 mm\/min/);assert.match(teaching,/6 мм\/мин/);
});
test('biology notice separates review from enrichment and other extras retain their defaults',()=>{
 const layout=read('src/components/content/ExtrasLayout.tsx');
 assert.match(layout,/notice\?\.title \?\? noticeTitle/);assert.match(layout,/notice\?\.text \?\? noticeText/);
 assert.match(read('src/modules/biology/pages/BiologyExtrasPage.tsx'),/notice=\{/);
 for(const lang of ['en','ru']) {
  const bio=JSON.parse(read(`src/i18n/${lang}/biology.json`));
  assert.match(bio.extras.notice.text,/homeostasis|гомеостаз/);
 }
});
test('normalized glossary has unique meanings and retains both clinical-trial labels and every stem',()=>{
 const md=read('docs/content-revision/GLOSSARY.md');const terms=JSON.parse(read('docs/content-revision/glossary.json')).terms;
 for(const [term,stem] of [['deuterium','дейтери'],['vaccination','вакцинац'],['clinical trial','клиническ']]) {
  const rows=terms.filter(x=>x.en===term);assert.equal(rows.length,1);assert.ok(rows[0].ru.includes(stem));
  assert.equal(md.split('\n').filter(x=>x.startsWith(`| ${term} |`)).length,1);
 }
 const trial=terms.find(x=>x.en==='clinical trial');assert.match(trial.term,/исследование/);assert.match(trial.term,/испытание/);
 const keys=terms.map(x=>x.en.toLowerCase().trim().replace(/\s+/g,' '));assert.equal(new Set(keys).size,keys.length);
});
