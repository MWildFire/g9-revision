import { useId } from 'react';
import { useTranslation } from 'react-i18next';

type DiagramKind = 'motion' | 'energy' | 'electricity' | 'waves';
/** Original schematic drawings: geometry conveys the comparison, text supplies equivalent access. */
export function PhysicsConceptDiagram({ kind }: { kind: DiagramKind }) {
  const { i18n } = useTranslation();
  const ru = i18n.language.startsWith('ru');
  const id = useId().replace(/:/g, '');
  const t = (en: string, russian: string) => ru ? russian : en;
  const titles = {
    motion: t('One journey: path and displacement', 'Одна поездка: путь и перемещение'),
    energy: t('Temperature, energy and heat transfer', 'Температура, энергия и теплопередача'),
    electricity: t('Current passes through; voltage is across', 'Ток проходит через; напряжение — между'),
    waves: t('Amplitude and wavelength measure different directions', 'Амплитуда и длина волны: разные направления'),
  };
  const captions = {
    motion: t('Travel 3 m east, then 4 m north in 7 s. Distance = 7 m; displacement magnitude = 5 m. Average speed = 1 m/s; average velocity has magnitude 5/7 m/s and points along the start-to-finish arrow.', 'Пройди 3 м на восток и 4 м на север за 7 с. Путь = 7 м; модуль перемещения = 5 м. Средняя путевая скорость = 1 м/с; средняя векторная скорость имеет модуль 5/7 м/с и направлена вдоль стрелки от начала к концу.'),
    energy: t('Both samples are liquid water at 60 °C. The larger sample has more internal energy relative to the same reference state. Neither transfers net heat to the other at equal temperature. Energy flows by heating from hot to cool when there is a temperature difference.', 'Оба образца — жидкая вода при 60 °C. У большего образца больше внутренней энергии относительно одинакового состояния отсчёта. При равной температуре между ними нет результирующей теплопередачи. При разности температур энергия передаётся от горячего тела холодному.'),
    electricity: t('The ammeter is in series and measures charge per second. The voltmeter is in parallel across the resistor and measures energy transferred per coulomb. This is an ideal DC circuit; the voltmeter draws negligible current.', 'Амперметр включён последовательно и измеряет заряд за секунду. Вольтметр включён параллельно резистору и измеряет энергию на кулон. Это идеальная цепь постоянного тока: током через вольтметр пренебрегаем.'),
    waves: t('This snapshot shows displacement on a transverse string. Amplitude A runs from equilibrium to a crest; wavelength λ runs from one crest to the next. The string oscillates vertically while the wave travels horizontally. The drawing is not a particle trajectory.', 'Это мгновенный снимок поперечной волны на струне. Амплитуда A — от равновесия до гребня; длина волны λ — от гребня до соседнего гребня. Струна колеблется вертикально, волна идёт горизонтально. Рисунок не является траекторией частицы.'),
  };
  return <figure className="my-5 rounded-lg border border-border p-4 bg-bg-secondary">
    <h3 className="font-semibold mb-3">{titles[kind]}</h3>
    <div className="definition-diagram-viewport" tabIndex={0} role="region" aria-label={t('Physics diagram. Scroll horizontally on a narrow screen.', 'Физическая схема. На узком экране прокручивается по горизонтали.')}>
    <svg viewBox="0 0 600 270" role="img" aria-labelledby={`${id}-title ${id}-desc`} className="w-full" style={{ minWidth: 500, color: 'var(--color-text-primary)' }}>
      <title id={`${id}-title`}>{titles[kind]}</title><desc id={`${id}-desc`}>{captions[kind]}</desc>
      <defs><marker id={`${id}-arrow`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto-start-reverse"><path d="M0 0 L7 3.5 L0 7Z" fill="currentColor" /></marker></defs>
      <g fontSize="17" fill="currentColor" fontFamily="system-ui, sans-serif">
        {kind === 'motion' && <>
          <path d="M100 230 L220 230 L220 70" fill="none" stroke="#397a90" strokeWidth="4" markerEnd={`url(#${id}-arrow)`} />
          <path d="M100 230 L220 70" fill="none" stroke="currentColor" strokeWidth="3" markerEnd={`url(#${id}-arrow)`} />
          <circle cx="100" cy="230" r="5" /><circle cx="220" cy="70" r="5" />
          <text x="40" y="246">{t('Start','Начало')}</text><text x="230" y="55">{t('Finish','Конец')}</text>
          <text x="120" y="260">{t('3 m east','3 м на восток')}</text><text x="235" y="155">{t('4 m north','4 м на север')}</text>
          <text x="103" y="167" transform="rotate(-53 103 167)">{t('displacement 5 m','перемещение 5 м')}</text>
          <path d="M200 230 L200 210 L220 210" fill="none" stroke="currentColor" />
          <text x="35" y="28">{t('Same start and finish; different measurements','Одни начальная и конечная точки — разные величины')}</text>
        </>}
        {kind === 'energy' && <>
          <path d="M60 80 V190 H185 V80 M240 45 V190 H405 V45" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M62 115 H183 V188 H62Z M242 70 H403 V188 H242Z" fill="#83bdca" opacity="0.6" />
          <text x="80" y="148">200 mL</text><text x="294" y="135">1 L</text>
          <text x="87" y="219">60 °C</text><text x="297" y="219">60 °C</text>
          <text x="445" y="73">{t('Hot','Горячее')}</text><text x="445" y="222">{t('Cool','Холодное')}</text>
          <path d="M480 90 V190" stroke="currentColor" strokeWidth="3" markerEnd={`url(#${id}-arrow)`} />
          <text x="496" y="148">Q</text>
        </>}
        {kind === 'electricity' && <>
          <path d="M100 100 V80 H180 V125 H210 M250 125 H300 M380 125 H500 V230 H100 V155" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M75 100 H125 M85 155 H115" stroke="currentColor" strokeWidth="4" />
          <text x="52" y="95">+</text><text x="52" y="165">−</text>
          <circle cx="230" cy="125" r="20" fill="var(--color-bg-secondary)" stroke="currentColor" strokeWidth="2" /><text x="223" y="131">A</text>
          <rect x="300" y="112" width="80" height="26" fill="var(--color-bg-secondary)" stroke="currentColor" strokeWidth="2" /><text x="328" y="164">R</text>
          <path d="M290 125 V65 H320 M360 65 H390 V125" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="340" cy="65" r="20" fill="var(--color-bg-secondary)" stroke="currentColor" strokeWidth="2" /><text x="333" y="71">V</text>
          <path d="M150 110 H190" stroke="currentColor" strokeWidth="2" markerEnd={`url(#${id}-arrow)`} /><text x="147" y="92">I</text>
          <text x="180" y="259">{t('I = ΔQ/Δt       V = ΔE/Q','I = ΔQ/Δt       U = ΔE/Q')}</text>
        </>}
        {kind === 'waves' && <>
          <path d="M35 145 H565" stroke="currentColor" strokeDasharray="5 5" /><text x="40" y="177">{t('equilibrium','равновесие')}</text>
          <path d="M35 145 Q90 15 145 145 T255 145 T365 145 T475 145 T585 145" fill="none" stroke="#397a90" strokeWidth="4" />
          <path d="M90 145 V80" stroke="currentColor" strokeWidth="2" markerStart={`url(#${id}-arrow)`} markerEnd={`url(#${id}-arrow)`} /><text x="102" y="122">A</text>
          <path d="M90 50 H310" stroke="currentColor" strokeWidth="2" markerStart={`url(#${id}-arrow)`} markerEnd={`url(#${id}-arrow)`} /><text x="195" y="37">λ</text>
          <path d="M365 224 H530" stroke="currentColor" strokeWidth="2" markerEnd={`url(#${id}-arrow)`} /><text x="340" y="254">{t('wave travel','распространение')}</text>
        </>}
      </g>
    </svg></div>
    <figcaption className="text-sm text-text-secondary mt-2">{captions[kind]}</figcaption>
  </figure>;
}
