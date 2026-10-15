import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const biology=l=>JSON.parse(read(`src/i18n/${l}/biology.json`));
test('selective breeding is artificial selection, one method of broader breeding science',()=>{
 const ru=biology('ru').extras.biotech.items[0];
 assert.match(ru,/Искусственный отбор/);assert.match(ru,/методов селекции/);
 assert.match(biology('en').extras.biotech.items[0],/heritable/);
});
test('biology revision is not labelled entirely outside the syllabus',()=>{
 for(const l of ['en','ru']) assert.doesNotMatch(biology(l).extras.intro,/beyond|за рамками/);
 assert.match(biology('en').extras.intro,/revision/i);assert.match(biology('ru').extras.intro,/повторение/i);
});
test('photosynthetic algae are not described as having leaf mesophyll',()=>{
 const en=biology('en').photosynthesis.sections.process.detailed.location.rule;
 const ru=biology('ru').photosynthesis.sections.process.detailed.location.rule;
 assert.match(en,/In land plants/);assert.match(ru,/У наземных растений/);
});
test('photosynthesis introduction distinguishes matter from light energy',()=>{
 for(const l of ['en','ru']){
 const s=biology(l).photosynthesis.intro;assert.match(s,/CO₂/);assert.match(s,/water|вод/);assert.match(s,/energy|энерг/);
 assert.doesNotMatch(s,/food from light|пищу из света/);
 }
});
test('rounded potometer volume uses an approximation in both languages',()=>{
 const s=read('src/modules/november/content.ts');assert.match(s,/24 mm ≈ 18\.85 mm³/);assert.match(s,/24 мм ≈ 18,85 мм³/);
});
test('reproduction distinguishes two chromosome sets and avoids calling oestrogens one hormone',()=>{
 const s=read('src/modules/november/biologyTeaching.ts');assert.match(s,/zygote has a diploid set/);assert.match(s,/двойной \(диплоидный\) набор/);
 const c=read('src/modules/november/content.ts');assert.match(c,/основная группа женских половых гормонов/);assert.doesNotMatch(c,/эстрогены — главный женский/);
});
