import { useId } from 'react';

/** Original dot plot: same scatter, different systematic offset. */
export function MeasurementComparison({ language }: { language: 'en' | 'ru' }) {
  const id = useId().replace(/:/g, '');
  const ru = language === 'ru';
  const x = (value: number) => 45 + (value - 98) * 72;
  const title = ru ? 'Одинаковый разброс, разное смещение' : 'Same scatter, different offset';
  const caption = ru
    ? 'Опорный объём 100 мл. В обоих наборах результаты близки друг к другу; второй набор смещён примерно на +2 мл. Малый разброс не гарантирует точность.'
    : 'Reference volume: 100 mL. Readings cluster equally closely in both sets; the second set is offset by about +2 mL. Small scatter does not guarantee accuracy.';
  return <figure className="definition-diagram my-7">
    <div className="definition-diagram-viewport" tabIndex={0} role="region" aria-label={ru ? 'Графики измерений. На узком экране прокручиваются по горизонтали.' : 'Measurement plots. Scroll horizontally on a narrow screen.'}>
    <svg viewBox="0 0 440 270" style={{ minWidth: 440 }} role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{caption} A: 99.9, 100, 100.1 mL. B: 101.9, 102, 102.1 mL.</desc>
      <line x1={x(100)} x2={x(100)} y1="20" y2="218" stroke="#386641" strokeDasharray="5 4" strokeWidth="2"/>
      <text x={x(100)+7} y="24" fontSize="14" fill="#285332">100 {ru ? 'мл — опорное' : 'mL — reference'}</text>
      {[[99.9, 100, 100.1], [101.9, 102, 102.1]].map((values, i) => {
        const y = 100 + i * 103;
        return <g key={i}>
          <text x="20" y={y-35} fontSize="17" fill="#233d50">{i === 0 ? (ru ? 'A: рядом с опорным значением' : 'A: close to the reference') : (ru ? 'B: устойчивое смещение' : 'B: consistent offset')}</text>
          <line x1={x(98)} x2={x(103)} y1={y} y2={y} stroke="#233d50"/>
          {[98,99,100,101,102,103].map(v=><g key={v}><line x1={x(v)} x2={x(v)} y1={y} y2={y+5} stroke="#233d50"/><text x={x(v)} y={y+24} textAnchor="middle" fill="#233d50" fontSize="14">{v}</text></g>)}
          {values.map((v,j)=><circle key={j} cx={x(v)} cy={y-10} r="4.5" fill={i ? '#875428' : '#285b7b'}/>)}
        </g>;
      })}
      <text x="220" y="257" textAnchor="middle" fontSize="16" fill="#233d50">{ru ? 'Измеренный объём, мл' : 'Measured volume, mL'}</text>
    </svg></div><figcaption><strong>{title}.</strong> {caption}</figcaption>
  </figure>;
}
