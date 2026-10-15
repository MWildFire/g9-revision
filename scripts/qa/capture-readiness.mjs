// A capture is evidence only after the requested route, locale and content settle.
export class CaptureIncomplete extends Error {
  constructor(reasons) { super(`capture_incomplete: ${reasons.join(', ')}`); this.name = 'CaptureIncomplete'; this.reasons = reasons; }
}
export function readinessProblems(state, expected) {
  const reasons = [];
  if (state.route !== expected.route) reasons.push('wrong_route');
  if (state.lang !== expected.lang) reasons.push('wrong_locale');
  if (!state.h1 || (expected.h1 && state.h1 !== expected.h1)) reasons.push('wrong_h1');
  if (state.loading) reasons.push('loader');
  if (!state.fontsReady || !state.assetsReady) reasons.push('assets_pending');
  if (state.blocks < (expected.minBlocks ?? 1)) reasons.push('blocks_pending');
  for (const text of expected.texts ?? []) if (!state.text.includes(text)) reasons.push(`missing_text:${text}`);
  for (const id of expected.formulas ?? []) if (!state.formulas.includes(id)) reasons.push(`missing_formula:${id}`);
  return reasons;
}
// Runs inside page.evaluate after print media is selected. Scrollable screen
// equations must fit their printed box because paper cannot scroll.
export function findClippedPrintFormulas() {
  const root = document.querySelector('#root') ?? document.body;
  return [...root.querySelectorAll('.formula-teaching-expression')]
    .filter(el => el.getBoundingClientRect().width > 0 && el.scrollWidth > el.clientWidth + 2)
    .map(el => ({ id:el.closest('[data-formula-id]')?.getAttribute('data-formula-id'), text:el.textContent, overflow:el.scrollWidth-el.clientWidth }));
}
export async function readCaptureState(page) {
  return page.evaluate(() => {
    const root = document.querySelector('#root') ?? document.body;
    root.querySelectorAll('details').forEach(details => { details.open = true; });
    const visible = el => el.checkVisibility ? el.checkVisibility({ checkVisibilityCSS: true }) : !!el.getClientRects().length;
    const h1 = [...root.querySelectorAll('h1')].find(visible)?.textContent.replace(/\s+/g, ' ').trim() ?? '';
    const blocks = [...root.querySelectorAll('p,li,dd,dt,figcaption,td,th,h1,h2,h3,h4,summary,blockquote,label')].filter(visible);
    const loading = [...root.querySelectorAll('[role="status"],[aria-busy="true"]')].some(el => visible(el) && /load|загруз|загружа/i.test(el.textContent)) || /^(Loading[….]*|Загрузка[….]*)$/m.test(root.innerText);
    const headings = [...root.querySelectorAll('h1,h2,h3,h4,summary')].filter(visible).map(el => el.textContent.trim());
    const formulas = [...root.querySelectorAll('[data-formula-id]')].map(el => el.dataset.formulaId);
    return { route: location.hash.slice(1) || '/', lang: document.documentElement.lang, h1, loading,
      blocks: blocks.length, text: root.innerText, formulas,
      fontsReady: document.fonts.status === 'loaded', assetsReady: [...document.images].every(img => img.complete && img.naturalWidth > 0),
      // Live simulator values may change; section structure and layout must settle.
      signature: JSON.stringify([h1, headings, formulas, blocks.length, Math.round(root.getBoundingClientRect().height)]) };
  });
}
export async function waitForCaptureReady(page, expected, { timeout = 15000, stable = 500, poll = 100, read = readCaptureState } = {}) {
  if (!expected.h1) throw new CaptureIncomplete(['missing_expected_h1']);
  const deadline = Date.now() + timeout;
  let since = 0, signature, reasons = ['not_observed'];
  while (Date.now() < deadline) {
    const state = await read(page);
    reasons = readinessProblems(state, expected);
    if (!reasons.length) {
      if (signature !== state.signature) { signature = state.signature; since = Date.now(); }
      if (Date.now() - since >= stable) return { status: 'ready', h1: state.h1, blocks: state.blocks, formulas: state.formulas, stableMs: Date.now() - since };
    } else { signature = undefined; since = 0; }
    await new Promise(resolve => setTimeout(resolve, poll));
  }
  throw new CaptureIncomplete(reasons.length ? reasons : ['layout_unstable']);
}
