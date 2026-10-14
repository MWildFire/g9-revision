# L-f-language — грамматика и времена (французский)
- готово: 14.10 05:48 GST · лейн L
- пункты: изменено 7 (инструмент content:apply, из 11 пунктов); оставлено 4; удалено 0. Ручные правки после ревью — см. ниже.
- ручные правки: `src/modules/french/data/frenchData.ts` (новые таблицы спряжения: IMPARFAIT_TENSE, CONDITIONNEL_TENSE, PLUS_QUE_PARFAIT_TENSE, FUTUR_PROCHE_TENSE — по 3–4 глагола на время; формы проверены скриптом по правилам (0 расхождений); GRAMMAR_RULES articles — титулы без «vs»; плюс правки RU-глоссов и употребления); `src/modules/french/pages/TensesPage.tsx` (четыре новые секции; вводная строка; подписи «Сложное прошедшее», «Простое будущее», EN «Compound past»); `src/modules/november/content.ts` (практика f-language[0]: субъюнктив заменён на futur simple — «Je pense que nous ferons attention»); `src/modules/november/otherTeaching.ts` (заголовки и формулировки RU); `src/definitions/french.ts` (FRENCH_REVIEWS.past: russianTerm без скобок, englishTerm «Compound past»).
- EN источники: по таблице L-f-listen (passé composé — Foxford, открыто; imparfait, conditionnel, plus-que-parfait, futur proche — по выдаче РЭШ 5073/5936/7210/2133 и стандартной грамматике); РЭШ не открывается через WebFetch; «нет источника» — где указано.
- ревью: FIX (MAJOR 7, minor) → исправлено; проверка дельты: VERDICT OK (все пункты закрыты).
- локальная проверка: `npm test` ✓ (98 из 98) · `build` ✓ · render-audit 0 failed (EN/RU, mobile, 16 видов).
- риск, принятый на уровне батча (решение Claude): сверка с учебником по EN-STANDARD §1 не выполнена (нет доступных образцов, §3.3); таблицы спряжения — по правилам языка, проверены скриптом, но не по учебнику.
- открыто:
  1. Subjonctif: в батч не входит (вне программы G9 по решению проекта); упоминается только как контраст в правиле «même si».
  2. Plus-que-parfait и imparfait — объяснения в notes таблиц, отдельного раздела нет (достаточно для справочника).
  3. Русские термины «сложное прошедшее», «имперфект», «давнопрошедшее» — очередь RU-проверки (лейн L).
  4. Журнал `changes/L-f-language.jsonl` не содержит ручных правок — перечислены выше.
  5. Закрыт пункт MAJOR-4 из `L-f-listen` (справочник не покрывал imparfait, conditionnel, plus-que-parfait, futur proche).
