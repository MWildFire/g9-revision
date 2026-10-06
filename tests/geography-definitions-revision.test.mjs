import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { hydrographModel } from '../src/components/simulations/geography/hydrographModel.ts';
const read = p => readFileSync(new URL('../'+p, import.meta.url),'utf8');
const locales = Object.fromEntries(['en','ru'].map(l => [l,JSON.parse(read(`src/i18n/${l}/geography.json`))]));
function detailed(o,path='') {
  const out=[];
  if(o && typeof o==='object') {
    if(typeof o.name==='string' && typeof o.rule==='string')out.push({path,...o});
    for(const [k,v] of Object.entries(o))if(k!=='review')out.push(...detailed(v,`${path}.${k}`));
  }
  return out;
}
test('all 97 legacy cards retain bilingual terms, a comparison and specific sources',()=>{
  const en=detailed(locales.en),ru=detailed(locales.ru);
  assert.equal(en.length,97);assert.deepEqual(en.map(x=>x.path),ru.map(x=>x.path));
  for(const card of [...en,...ru]){
    assert.ok(card.rule.length>35,card.path);assert.ok(card.review.englishTerm);assert.ok(card.review.russianTerm);
    for(const l of ['en','ru'])assert.ok(card.review.contrast[l].length>15,card.path);
    assert.ok(card.review.sources.length);
    for(const s of card.review.sources){assert.ok(new URL(s.url).protocol==='https:');assert.ok(s.section);assert.ok(['en','ru'].includes(s.language));}
  }
});
test('river processes distinguish erosion target and solution from transport',()=>{
  const e=locales.en.rivers.sections;
  assert.match(e.erosion.detailed.abrasion.rule,/bed|bank/);
  assert.match(e.erosion.detailed.attrition.rule,/particle|fragment/);
  assert.match(e.transportation.detailed.solution.rule,/dissolved/i);
  assert.match(e.erosion.detailed.attrition.review.model.en,/Research literature/);
});
test('hydrograph displayed lag equals separation of rainfall and discharge peaks without clipping',()=>{
  for(const rain of [5,50,100])for(const saturation of [0,40,100])for(const urban of [0,30,100]){
    const m=hydrographModel(rain,saturation,urban);
    assert.ok(Math.abs(m.peakTime-m.rainPeakTime-m.lagTime)<1e-10);
    const highest=m.points.reduce((a,b)=>a.y>b.y?a:b);
    assert.ok(Math.abs(highest.x-m.peakTime)<1e-10);
    assert.ok(Math.abs(highest.y-m.peakDischarge)<1e-10);
    assert.ok(m.points.every(p=>p.y>=m.baseFlow && p.y<=250));
    assert.ok(m.points.filter(p=>p.x<=4).every(p=>p.y===m.baseFlow));
  }
});
test('no rainfall produces base flow regardless of impermeability or saturation',()=>{
  for(const saturation of [0,100])for(const urban of [0,100]){
    const m=hydrographModel(0,saturation,urban);
    assert.equal(m.peakDischarge,m.baseFlow);assert.ok(m.points.every(p=>p.y===m.baseFlow));
  }
});
test('physical teaching diagrams provide accessible labels and state modelling limits',()=>{
  for(const file of ['RiverProcesses','BradshawModel','StormHydrograph','EnsoToggle','ButlerModel','AtmosphericCirculation']){
    const source=read(`src/components/simulations/geography/${file}.tsx`);
    assert.match(source,/role="img"/);assert.match(source,/aria-label=/);
  }
  assert.match(read('src/components/simulations/geography/BradshawModel.tsx'),/not measurements/);
  assert.match(read('src/components/simulations/geography/EnsoToggle.tsx'),/does not guarantee/);
  assert.doesNotMatch(read('src/modules/geography/pages/ResourceReliancePage.tsx'),/crisis inevitable/);
});
test('all 40 tectonic glossary reviews use accessed detailed pages and separate translations',()=>{
 const source=read('src/modules/geography-tectonics/definition-reviews.ts');
 const reviews=JSON.parse(source.split(' = ')[1].trim().replace(/;$/,''));
 assert.equal(Object.keys(reviews).length,40);
 for(const v of Object.values(reviews)){assert.ok(v.contrast.en);assert.ok(v.contrast.ru);assert.ok(v.sources.length);}
 assert.doesNotMatch(source,/fema_p749|volcano-hazards-program-glossary|zemletryaseniya/);
 assert.match(reviews.Ductility.contrast.en,/permanently deformed/);
});
