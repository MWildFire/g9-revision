import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const json = path => JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'));
const at = (object, path) => path.split('.').reduce((value, key) => value[key], object);
async function models(name) {
  const code = ts.transpileModule(readFileSync(new URL(`../src/definitions/${name}Models.ts`, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
}

test('all inventoried biology and chemistry blocks have bilingual definitions and section-level source notes', () => {
  for (const [subject, count] of [['biology', 113], ['chemistry', 73]]) {
    const manifest = json(`../src/definitions/${subject}ReviewManifest.json`);
    assert.equal(manifest.blocks.length, count);
    const en = json(`../src/i18n/en/${subject}.json`);
    const ru = json(`../src/i18n/ru/${subject}.json`);
    for (const { path, field } of manifest.blocks) {
      for (const locale of [en, ru]) {
        const block = at(locale, path);
        assert.ok(block[field].length > 30, path);
        assert.ok(block.review.englishTerm && block.review.russianTerm, path);
        assert.ok(block.review.contrast.en && block.review.contrast.ru, path);
        assert.ok(block.review.sources.length, path);
        for (const source of block.review.sources) {
          assert.match(source.url, /^https:\/\/[^/]+\/.+/);
          assert.ok(source.section.length > 10);
          assert.ok(['en', 'ru'].includes(source.language));
        }
      }
      assert.deepEqual(at(en, path).review, at(ru, path).review, path);
    }
    assert.ok(manifest.sourceLanguages.includes('en') && manifest.sourceLanguages.includes('ru'));
  }
});

test('legacy summaries agree with the expanded definitions', () => {
  for (const language of ['en', 'ru']) {
    const chemistry = json(`../src/i18n/${language}/chemistry.json`);
    for (const path of ['atmosphere.sections.climateChange', 'atmosphere.sections.pollutants', 'bonding.sections.comparison', 'energy.sections.types']) {
      const section = at(chemistry, path);
      for (const [key, value] of Object.entries(section.items)) if (section.detailed[key]) assert.equal(value, section.detailed[key].rule, `${path}.${key}`);
    }
    const biology = json(`../src/i18n/${language}/biology.json`);
    for (const key of ['nucleus', 'mitochondria', 'ribosome', 'membrane', 'cytoplasm', 'wall', 'chloroplast', 'vacuole']) {
      assert.equal(biology.simulations.cellDiagram.parts[key].desc, biology.cells.sections.structure.detailed[key].rule);
    }
  }
});

test('one-locus crosses reject mixed loci and give expected probabilities', async () => {
  const { isSingleLocusCross, singleLocusOutcomes } = await models('biology');
  assert.equal(isSingleLocusCross('Bb', 'bb'), true);
  for (const [a,b] of [['AB','ab'],['AA','bb'],['B','Bb'],['1B','Bb']]) {
    assert.equal(isSingleLocusCross(a,b), false);
    assert.deepEqual(singleLocusOutcomes(a,b), []);
  }
  assert.deepEqual(singleLocusOutcomes('Bb','Bb').flat().sort(), ['BB','Bb','Bb','bb']);
  assert.deepEqual(singleLocusOutcomes('bb','bb').flat(), ['bb','bb','bb','bb']);
});

test('pH classification never labels acid strength', async () => {
  const { pHClassification } = await models('chemistry');
  assert.equal(pHClassification(2), 'acidic');
  assert.equal(pHClassification(6), 'acidic');
  assert.equal(pHClassification(7), 'neutral');
  assert.equal(pHClassification(8), 'alkaline');
});

test('energy profiles keep the barrier above both endpoints and within the viewport', async () => {
  const { energyProfileGeometry } = await models('chemistry');
  for (const mode of ['exo','endo']) for (let activation=20; activation<=160; activation+=5) for (let magnitude=20; magnitude<=120; magnitude+=5) {
    const g = energyProfileGeometry(mode, activation, magnitude);
    assert.ok(g.activation > Math.max(0,g.deltaH));
    assert.ok(g.peakY < Math.min(g.reactantsY,g.productsY));
    for (const y of [g.peakY,g.reactantsY,g.productsY]) assert.ok(y >= 55 && y <= 225);
    assert.equal(Math.sign(g.productsY-g.reactantsY), mode === 'exo' ? 1 : -1);
  }
});

test('quantity conversions respect the physical domain and stated gas approximation', async () => {
  const { convertChemicalAmount, reactionVolume } = await models('chemistry');
  assert.equal(convertChemicalAmount('m-to-n',58.5,58.5),1);
  assert.equal(convertChemicalAmount('n-to-m',2,18),36);
  assert.equal(convertChemicalAmount('V-to-n',22.7,0),1);
  assert.equal(convertChemicalAmount('n-to-V',1,0),22.7);
  for (const mass of [0,-1,NaN,Infinity]) assert.equal(convertChemicalAmount('m-to-n',1,mass),null);
  for (const input of [-1,NaN,Infinity]) assert.equal(convertChemicalAmount('n-to-V',input,18),null);
  assert.equal(convertChemicalAmount('m-to-n',0,18),0);
  assert.equal(reactionVolume(0,.05),0);
  assert.ok(reactionVolume(20,.10)>reactionVolume(20,.05));
  assert.ok(Math.abs(reactionVolume(10000,.05)-reactionVolume(10000,.10))<1e-12);
});
