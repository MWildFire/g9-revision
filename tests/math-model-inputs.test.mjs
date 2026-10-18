import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
function load(file) {
  const compiled = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText;
  const mod = { exports: {} };
  new Function('exports', 'module', compiled)(mod.exports, mod);
  return mod.exports;
}
const math = load('src/lib/math.ts');
const models = load('src/definitions/math-legacy-models.ts');

function widget(file, language = 'en') {
  const state = [];
  let cursor = 0;
  const jsx = (type, props) => ({ type, props });
  const react = {
    useState(initial) {
      const index = cursor++;
      if (!(index in state)) state[index] = typeof initial === 'function' ? initial() : initial;
      return [state[index], next => { state[index] = typeof next === 'function' ? next(state[index]) : next; }];
    },
    useMemo: compute => compute(),
  };
  const source = fs.readFileSync(path.join(root, 'src/components/simulations/math', file), 'utf8');
  const compiled = ts.transpileModule(source, { fileName: file, compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  const mod = { exports: {} };
  const require = dependency => {
    if (dependency === 'react') return react;
    if (dependency === 'react/jsx-runtime') return { jsx, jsxs: jsx, Fragment: 'fragment' };
    if (dependency === 'react-i18next') return { useTranslation: () => ({ t: key => key, i18n: { language } }) };
    if (dependency.endsWith('/lib/math')) return math;
    if (dependency.endsWith('/definitions/math-legacy-models')) return models;
    return new Proxy({}, { get: (_, name) => String(name) });
  };
  new Function('require', 'module', 'exports', compiled)(require, mod, mod.exports);
  const component = mod.exports[file.replace('.tsx', '')];
  return { render: () => { cursor = 0; return component(); }, state };
}
function nodes(tree) {
  if (!tree || typeof tree !== 'object') return [];
  if (Array.isArray(tree)) return tree.flatMap(nodes);
  return [tree, ...nodes(tree.props?.children)];
}
function text(tree) {
  if (tree == null || typeof tree === 'boolean') return '';
  if (typeof tree !== 'object') return String(tree);
  if (Array.isArray(tree)) return tree.map(text).join('');
  return text(tree.props?.children);
}
function inputChange(view, value, index = 0) {
  const input = nodes(view.render()).filter(node => node.type === 'input' || node.type === 'textarea')[index];
  assert.ok(input, 'actual widget input exists');
  input.props.onChange({ target: { value } });
  return view.render();
}

test('dataset parser validates whole tokens and never computes a partially valid dataset', () => {
  for (const input of ['3/4 1/2', '12abc 7', '1e 7', '0x10 7', 'NaN 7', 'Infinity 7', '1e309 7', '1e-999 7']) {
    const parsed = math.parseDatasetInput(input);
    assert.ok(parsed.invalidTokens.length > 0, input);
    assert.deepEqual(parsed.values, [], input);
    assert.deepEqual(math.parseDataset(input), [], input);
  }
  assert.deepEqual(math.parseDataset(' .75; -2, +3.5 1e2 10e1 0.5 '), [-2, 0.5, 0.75, 3.5, 100, 100]);
  assert.deepEqual(math.parseDataset(''), []);
  assert.deepEqual(math.parseDataset('0e-999 0'), [0, 0]);
});

test('school medians avoid finite overflow and preserve subnormal equal observations', () => {
  for (const value of [1e308, -1e308, Number.MAX_VALUE, -Number.MAX_VALUE, Number.MIN_VALUE, -Number.MIN_VALUE]) {
    const q = models.schoolQuartiles([value, value]);
    assert.equal(q.median, value);
    assert.deepEqual([q.q1, q.q3, q.iqr], [value, value, 0]);
  }
  assert.equal(models.schoolQuartiles([-1e308, 1e308]).median, 0);
  assert.equal(models.schoolQuartiles([Number.MIN_VALUE, Number.MIN_VALUE * 2]).median, Number.MIN_VALUE * 2);
  assert.equal(models.schoolQuartiles([1e308, 1e308, 1e308, 1e308]).q1, 1e308);
});

test('standard-form utility remains normalised at rounding and floating-point boundaries', () => {
  assert.deepEqual(math.toStandardForm(9.9999999996), { a: 1, exponent: 1 });
  assert.deepEqual(math.toStandardForm(-9.9999999996), { a: -1, exponent: 1 });
  for (const value of [Number.MIN_VALUE, Number.MAX_VALUE, -Number.MIN_VALUE, -Number.MAX_VALUE, 384000, 0.00045]) {
    const result = math.toStandardForm(value);
    assert.ok(Number.isFinite(result.a) && Math.abs(result.a) >= 1 && Math.abs(result.a) < 10);
    assert.ok(Number.isInteger(result.exponent));
    assert.deepEqual(result, models.scientificNotation(value));
  }
  assert.deepEqual(math.toStandardForm(0), { a: 0, exponent: 0 });
});

test('whole-number inputs preserve exponent meaning and reject rounded fractions and unsafe integers', () => {
  for (const [literal, expected] of [['1e2', 100], ['10e1', 100], ['1e3', 1000], ['100.0', 100], ['1.00e2', 100]]) {
    assert.equal(math.parseIntegerInput(literal, 1, 1000), expected, literal);
  }
  for (const value of ['', '1e', '2.5', '-1', '1001', '1.00000000000000000001', '1e-999', '9007199254740993']) {
    assert.equal(math.parseIntegerInput(value, 1, 1000), null, value);
  }
  assert.equal(math.parseIntegerInput('9007199254740990.9', 0), null);
});

test('actual BoxPlot input handler rejects bad data visibly and shows the finite large median', () => {
  for (const language of ['en', 'ru']) {
    const view = widget('BoxPlotBuilder.tsx', language);
    for (const value of ['3/4 1/2', '12abc 7']) {
      const tree = inputChange(view, value);
      assert.ok(nodes(tree).some(n => n.props?.role === 'alert'));
      assert.equal(nodes(tree).some(n => n.type === 'svg'), false);
    }
    const tree = inputChange(view, '1e308 1e308');
    const median = nodes(tree).find(n => n.props?.label === 'simulations.boxPlot.median');
    assert.equal(median.props.value, '1e+308');
    assert.equal(nodes(tree).some(n => n.props?.role === 'alert'), false);
    for (const n of nodes(tree)) for (const key of ['x', 'x1', 'x2', 'cx', 'width']) {
      if (typeof n.props?.[key] === 'number') assert.ok(Number.isFinite(n.props[key]), key);
    }
    const largeSpread = inputChange(view, '-1e308 1e308');
    assert.ok(nodes(largeSpread).some(n => n.props?.role === 'alert'));
    assert.equal(nodes(largeSpread).some(n => n.type === 'svg'), false);
  }
});

test('actual surd input handler evaluates integer exponent literals without truncating', () => {
  const view = widget('SurdSimplifier.tsx');
  for (const [literal, value] of [['1e2', 100], ['10e1', 100], ['1e3', 1000]]) {
    const tree = inputChange(view, literal);
    assert.ok(text(tree).includes(`√${value} =`));
    assert.equal(nodes(tree).some(n => n.props?.role === 'alert'), false);
  }
  for (const literal of ['', '1.5', '0', '1001']) {
    const tree = inputChange(view, literal);
    assert.ok(nodes(tree).some(n => n.props?.role === 'alert'));
    assert.equal(text(tree).includes(' = √('), false);
  }
});

test('actual cumulative-frequency handler keeps full numeric literals and withholds invalid totals', () => {
  const view = widget('CumulativeFrequency.tsx');
  for (const [literal, expectedTotal] of [['1e2', 145], ['10e1', 145], ['1e3', 1045]]) {
    const tree = inputChange(view, literal);
    assert.equal(view.state[0][0].freq, literal);
    assert.equal(nodes(tree).find(n => n.type === 'LineChart').props.data.at(-1).y, expectedTotal);
    assert.equal(nodes(tree).some(n => n.props?.role === 'alert'), false);
  }
  for (const literal of ['1.5', '-1', '', String(Number.MAX_SAFE_INTEGER)]) {
    const tree = inputChange(view, literal);
    assert.ok(nodes(tree).some(n => n.props?.role === 'alert'));
    assert.equal(nodes(tree).some(n => n.type === 'LineChart'), false);
  }
});
