import { useTranslation } from 'react-i18next';
/** Authored mechanism sketch: no distance, time or particle size is to scale. */
export function RiverProcesses() {
  const { i18n } = useTranslation();
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  return <figure className="my-4 rounded-lg border border-border p-4">
    <div role="region" tabIndex={0} aria-label={l("Scrollable diagram. Use horizontal arrow keys to read all labels.", "Прокручиваемая схема. Используй стрелки влево и вправо, чтобы прочитать все подписи.")} className="min-w-0 max-w-full overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><svg style={{ minWidth: 780 }} viewBox="0 0 660 235" role="img" aria-label={l('Abrasion wears the bed or bank; attrition chips the transported particles.', 'Истирание обломками разрушает дно или берег; истирание самих обломков уменьшает и округляет наносы.')} className="w-full">
      <title>{l('What gets worn away?', 'Что именно разрушается?')}</title>
      <text x="20" y="24" fontSize="16" fill="currentColor">{l('Abrasion: load → bed / bank', 'Abrasion: наносы → дно / берег')}</text>
      <text x="350" y="24" fontSize="16" fill="currentColor">{l('Attrition: particle ↔ particle', 'Attrition: обломок ↔ обломок')}</text>
      <path d="M20 140 H310 V175 H20 Z" fill="#9e806d" opacity=".4" />
      <path d="M30 137 L90 140 L105 149 L120 140 H305" stroke="#885f47" fill="none" strokeWidth="3" />
      <path d="M50 87 L73 74 L91 97 L77 125 L51 114 Z" fill="#778c91" />
      <path d="M100 91 H210 l-12 -6 M210 91 l-12 6" stroke="#248294" fill="none" strokeWidth="3" />
      <path d="M366 107 L387 80 L415 93 L419 121 L389 135 Z M435 96 L452 73 L477 90 L481 123 L457 130 Z" fill="#778c91" />
      <path d="M416 98 l20 20 M418 118 l17 -23" stroke="#b45d39" strokeWidth="2" />
      <path d="M498 105 H540 l-10 -5 M540 105 l-10 5" stroke="#248294" fill="none" strokeWidth="2" />
      <ellipse cx="565" cy="94" rx="16" ry="12" fill="#778c91" /><ellipse cx="603" cy="117" rx="15" ry="12" fill="#778c91" />
      <circle cx="554" cy="135" r="3" fill="#778c91" /><circle cx="593" cy="82" r="3" fill="#778c91" />
      <text x="20" y="198" fontSize="13" fill="currentColor">{l('Scraping / impact removes channel material.', 'Удары и трение удаляют материал русла.')}</text>
      <text x="350" y="198" fontSize="13" fill="currentColor">{l('Collisions produce smaller, rounder load.', 'Столкновения дробят и округляют наносы.')}</text>
      <text x="20" y="225" fontSize="12" fill="currentColor">{l('Schematic; both processes can occur together.', 'Условная схема; оба процесса могут идти одновременно.')}</text>
    </svg></div>
    <figcaption className="text-sm text-text-muted">{l('Hydraulic action acts through the force of water; solution dissolves soluble minerals. Weathering changes rock in place; erosion removes material.', 'Гидравлическое воздействие связано с силой воды; растворение переводит растворимые вещества в раствор. Выветривание изменяет породу на месте; эрозия удаляет материал.')}</figcaption>
  </figure>;
}
