import {FormulaTeaching} from '../../content/FormulaTeaching';
import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { reactionVolume } from '../../../definitions/chemistryModels';

export function ReactionRateGraph() {
  const { i18n } = useTranslation();
  const ru = i18n.language.startsWith('ru');
  const id = useId().replace(/:/g, '');
  const x = (time: number) => 90 + 7.1 * time;
  const y = (volume: number) => 320 - 4.7 * volume;
  const curve = (k: number) => Array.from({ length: 61 }, (_, time) => `${time ? 'L' : 'M'}${x(time)},${y(reactionVolume(time, k))}`).join(' ');
  const title = ru ? 'Скорость и конечный объём газа' : 'Rate and final volume of gas';
  const description = ru
    ? 'Две модельные кривые зависимости объёма газа от времени: более крутая растёт в начале быстрее. Обе кривые выходят на уровень 50 см³, потому что расходуется одинаковое количество реагента, находящегося в недостатке (limiting reactant). Это модель: она не учитывает утечки и побочные реакции, а измеренных точек на графике нет.'
    : 'Two model curves of gas volume against time: the steeper one rises faster at the start. Both level off at 50 cm³, because the same amount of limiting reactant is used up. This is a model: it assumes no leaks and no side reactions, and no measured points are shown.';
  return <><figure className="bg-bg-secondary border border-border rounded-md p-4 my-4">
    <div className="definition-diagram-viewport min-w-0" role="region" tabIndex={0} aria-label={title}>
    <svg style={{ width: '100%', maxWidth: 'none', height: 'auto' }} viewBox="0 0 620 430" role="img" aria-labelledby={`${id}-title ${id}-desc`} className="w-full max-w-[700px] mx-auto">
      <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{description}</desc>
      <rect x="90" y="55" width="426" height="265" fill="#fafcfb"/>
      {[0,10,20,30,40,50].map(v => <g key={v}><path d={`M90 ${y(v)}H516`} stroke="#d9e2e5"/><text x="79" y={y(v)+5} textAnchor="end" fontSize="15" fill="#243e50">{v}</text></g>)}
      {[0,10,20,30,40,50,60].map(t => <g key={t}><path d={`M${x(t)} 320v6`} stroke="#243e50"/><text x={x(t)} y="346" textAnchor="middle" fontSize="15" fill="#243e50">{t}</text></g>)}
      <path d="M90 48V320H531" fill="none" stroke="#243e50" strokeWidth="2"/>
      <path d={`M90 ${y(50)}H516`} stroke="#8a6072" strokeDasharray="4 4"/>
      <path d={curve(.05)} fill="none" stroke="#276b93" strokeWidth="3"/>
      <path d={curve(.10)} fill="none" stroke="#946129" strokeWidth="3" strokeDasharray="9 4"/>
      <text x="306" y="377" textAnchor="middle" fontSize="17" fill="#243e50">{ru ? 'Время, с' : 'Time / s'}</text>
      <text transform="translate(30 200) rotate(-90)" textAnchor="middle" fontSize="17" fill="#243e50">{ru ? 'Объём газа, см³' : 'Gas volume / cm³'}</text>
      <text x="95" y="33" fontSize="15" fill="#243e50">{ru ? 'Предел: 50 см³' : 'Limit: 50 cm³'}</text>
      <path d="M85 408h35" stroke="#276b93" strokeWidth="3"/><text x="130" y="413" fontSize="15" fill="#243e50">{ru ? 'медленнее' : 'slower'}</text>
      <path d="M330 408h35" stroke="#946129" strokeWidth="3" strokeDasharray="9 4"/><text x="375" y="413" fontSize="15" fill="#243e50">{ru ? 'быстрее' : 'faster'}</text>
    </svg>
    </div>
    <figcaption className="text-sm"><strong>{title}.</strong> {description} {ru ? 'На более крутой кривой объём в начале растёт быстрее: наклон касательной при t = 0 даёт скорость в этот момент.' : 'On the steeper curve the gas volume rises faster at the start: the slope of the tangent at t = 0 gives the rate at that moment.'}</figcaption>
  </figure><FormulaTeaching id="rate"/></>;
}
