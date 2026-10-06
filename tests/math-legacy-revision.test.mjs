import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
function load(file) {
  const compiled = ts.transpileModule(readFileSync(new URL(file, import.meta.url), 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText;
  const mod = { exports: {} };
  new Function('exports', 'module', compiled)(mod.exports, mod);
  return mod.exports;
}
const { classifyNumber, groupedPercentile, schoolQuartiles, chordGeometry, scientificNotation } = load('../src/definitions/math-legacy-models.ts');
const { ALL_MATH_PROBLEMS } = load('../src/modules/math/data/practiceProblems.ts');
const near = (a,b,e=1e-9) => assert.ok(Math.abs(a-b)<e, `${a} != ${b}`);
const locale = lang => JSON.parse(readFileSync(new URL(`../src/i18n/${lang}/math.json`, import.meta.url), 'utf8'));

test('number-set classification respects exact input and perfect squares', () => {
  for (const x of ['√4','√9','√16','2√9','9007199254740993']) assert.equal(classifyNumber(x).N,true,x);
  for (const x of ['0√2','√0','-4','0','-6/3']) { assert.equal(classifyNumber(x).Z,true,x); assert.equal(classifyNumber(x).N,false,x); }
  for (const x of ['√2','-3√12','π','-e']) { assert.equal(classifyNumber(x).R,true,x); assert.equal(classifyNumber(x).Q,false,x); }
  for (const x of ['3/2','1.00000000000000000001','9007199254740993.1']) { assert.equal(classifyNumber(x).Q,true,x); assert.equal(classifyNumber(x).Z,false,x); }
  assert.equal(classifyNumber('1/0').explanationKey,'divisionByZero');
  for (const x of ['3abc','√-1','Infinity','√1000001']) assert.equal(classifyNumber(x).R,false,x);
});

test('grouped percentile interpolation includes first interval and skips empty intervals', () => {
  const points=[{x:0,y:0},{x:10,y:5},{x:15,y:20},{x:20,y:40},{x:25,y:48},{x:30,y:50}];
  near(groupedPercentile(points,1),1);
  near(groupedPercentile(points,25),12.5);
  near(groupedPercentile(points,50),16.25);
  near(groupedPercentile(points,75),19.375);
  assert.equal(groupedPercentile([{x:0,y:0},{x:10,y:0}],50),null);
  near(groupedPercentile([{x:0,y:0},{x:10,y:0},{x:20,y:10}],50),15);
});

test('quartile convention is consistent with both worked examples and modified whiskers', () => {
  const q=schoolQuartiles([2,5,7,8,10,11,14,17,20]);
  assert.deepEqual([q.q1,q.median,q.q3,q.iqr],[6,10,15.5,9.5]);
  const out=schoolQuartiles([1,2,3,4,5,6,100]);
  assert.deepEqual(out.outliers,[100]); assert.equal(out.max,6);
  assert.deepEqual([schoolQuartiles([7]).q1,schoolQuartiles([7]).q3],[7,7]);
});

test('intersecting-chord drawing is actually concyclic and its lengths match the sliders', () => {
  for (const [ap,pb,cp] of [[6,4,8],[1,10,1],[10,1,10],[2.5,4.5,7]]) {
    const g=chordGeometry(ap,pb,cp);
    near(ap*pb,cp*g.pd);
    for (const p of g.points) near(Math.hypot(p.x-g.centre.x,p.y-g.centre.y),g.radius);
    near(Math.hypot(g.points[0].x,g.points[0].y),ap);
    near(Math.hypot(g.points[3].x,g.points[3].y),g.pd);
  }
});

test('scientific notation stays normalised after rounding and at finite extremes', () => {
  for (const value of [384000,-0.00057,9.99999999999,Number.MIN_VALUE,Number.MAX_VALUE]) {
    const n=scientificNotation(value); assert.ok(Number.isFinite(n.a)); assert.ok(Math.abs(n.a)>=1&&Math.abs(n.a)<10); assert.ok(Number.isInteger(n.exponent));
  }
});

test('corrected practice roots satisfy the original rational equation; statistical results agree', () => {
  for (const x of [(3+Math.sqrt(17))/2,(3-Math.sqrt(17))/2]) near(1/x+1/(x+1),0.5);
  const get=id=>ALL_MATH_PROBLEMS.find(p=>p.id===id);
  assert.equal(ALL_MATH_PROBLEMS.length,68);
  for (const lang of ['en','ru']) {
    assert.match(get('m-fa-ext-3')[lang].answer,/3±√17/);
    assert.match(get('m-sp-2')[lang].answer,/9\.5/);
    assert.match(get('m-sp-ric-1')[lang].answer,/16\.25/);
    assert.match(get('m-sp-ric-1')[lang].answer,/6\.875/);
    assert.match(get('m-fa-ext-1')[lang].answer,/−3/);
  }
});

test('all existing legacy definition cards expose bilingual terminology and section sources', () => {
  for (const lang of ['en','ru']) {
    const d=locale(lang);let count=0;
    for (const group of [d.extras.proofs.detailed,...['numberSystems','functionsAlgebra','sequences','geometryTrig','statsProb'].map(k=>d[k].subTopicsDetailed)]) {
      for (const item of Object.values(group)) {
        count++;assert.ok(item.rule.length>70);assert.ok(item.review.englishTerm&&item.review.russianTerm);
        assert.ok(item.review.contrast.en&&item.review.contrast.ru);
        assert.ok(item.review.sources.length>0);
        for (const source of item.review.sources) { assert.match(source.url,/^https:\/\//); assert.ok(source.section); assert.ok(['en','ru'].includes(source.language)); }
      }
    }
    assert.equal(count,51);
    assert.match(d.numberSystems.subTopicsDetailed.surdsSimplify.rule,/\|a\|/);
    assert.match(d.functionsAlgebra.subTopicsDetailed.exponential.rule,/A·bˣ/);
    assert.ok(d.statsProb.subTopicsDetailed.boxPlots.review.model[lang]);
  }
});
