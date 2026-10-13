# P-p-energy — энергия, работа, мощность, давление (силы и энергия)
- готово: 14.10 02:12 GST · лейн P
- пункты: изменено 126 / оставлено 136 / удалено 0 (всего 262); ручные правки: `src/components/simulations/physics/WorkPower.tsx`, `PressureSim.tsx`, `FluidPressure.tsx` — подписи единиц для русского (Н, Дж, Вт, кг, м, с, м², кг/м³) через `i18n.language`, по образцу соседних подписей файла; `src/content/formulaTeaching.ts` — восемь карточек из ветки (nucleons, momentum, hooke, work, mechanical-energy, efficiency, density, pressure); `scripts/content/lib.mjs` — правило `terms.*.alt` → term (Q12.4, пункт 1)
- EN источники: Paul Morris, *Physics for the IB MYP 4&5: By Concept* (Hodder), страницы — в выписке SOURCES батча (вне репозитория) · RU источники: «Открытая физика» (physics.ru); РЭШ 7 класс — не проверено
- ревью: FIX→OK (механика, правило 9: единицы в симуляциях RU исправлены, триггер карточки изотопов «N = A» убран из ветки; на RU-страницах батча английских блоков не осталось); визуальная проверка: замечания fixer закрыты
- локальная проверка: content:lint 0 ошибок (одно предупреждение: английский термин в alt на RU-странице — по замыслу TermCard, решение keep с обоснованием) · npm test ✓ (98/98) · build ✓ · render-audit 12 просмотров, 0 failed (EN/RU, desktop/mobile)
- открыто: карточка newton на всех страницах батча оставлена без изменений (Q12.4, пункт 2)
