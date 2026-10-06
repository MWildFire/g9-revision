import { useTranslation } from 'react-i18next';
export function VolcanoForms() {
  const { i18n } = useTranslation();
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  return <figure className="tectonic-panel">
    <div className="tectonic-diagram-scroll" role="region" tabIndex={0} aria-label={l("Scrollable comparison of volcanic forms", "Прокручиваемое сравнение вулканических форм")}><svg className="tectonic-volcano-forms" viewBox="0 0 760 250" role="img" aria-label={l('Volcanic forms compared: broad shield, steep composite cone and a subsided caldera depression.', 'Сравнение вулканических форм: широкий щит, крутой слоистый конус и провальная впадина кальдеры.')}>
      <title>{l('Shield, composite volcano and caldera', 'Щитовой вулкан, стратовулкан и кальдера')}</title>
      <path d="M25 155 Q75 151 122 117 Q160 95 192 125 Q220 148 245 155 Z" fill="#bc9169" stroke="#795e48" strokeWidth="2" />
      <path d="M270 155 L363 40 L380 52 L395 40 L485 155 Z" fill="#bc9169" stroke="#795e48" strokeWidth="2" />
      <path d="M294 143 L365 65 L380 75 L397 65 L460 143 M316 140 L366 91 L380 104 L398 91 L439 140" stroke="#795e48" fill="none" strokeWidth="3" />
      <path d="M515 155 L555 98 L574 95 L584 126 L666 126 L677 94 L695 100 L737 155 Z" fill="#bc9169" stroke="#795e48" strokeWidth="2" />
      <path d="M625 65 V103 l-6 -11 M625 103 l6 -11" stroke="#246181" fill="none" strokeWidth="2" />
      <text x="135" y="186" textAnchor="middle" fill="currentColor" fontSize="16">{l('Shield volcano', 'Щитовой вулкан')}</text>
      <text x="380" y="186" textAnchor="middle" fill="currentColor" fontSize="16">{l('Composite / stratovolcano', 'Слоистый / стратовулкан')}</text>
      <text x="625" y="186" textAnchor="middle" fill="currentColor" fontSize="16">{l('Caldera', 'Кальдера')}</text>
      <text x="135" y="211" textAnchor="middle" fill="currentColor" fontSize="13">{l('Broad, gentle slopes', 'Широкие пологие склоны')}</text>
      <text x="380" y="211" textAnchor="middle" fill="currentColor" fontSize="13">{l('Layers; steeper cone', 'Слои; более крутой конус')}</text>
      <text x="625" y="211" textAnchor="middle" fill="currentColor" fontSize="13">{l('Subsidence / collapse', 'Проседание / обрушение')}</text>
    </svg></div>
    <figcaption>{l('Schematic profiles, not to a common scale. A shield is commonly built by fluid lava flows; a composite volcano contains successive lava and fragmental deposits. A caldera is a collapse depression and can occur on different volcano types, including shields. It is not simply another cone shape or any summit crater.', 'Условные профили без общего масштаба. Щит обычно создают потоки текучей лавы; стратовулкан содержит последовательные лавовые и обломочные отложения. Кальдера — впадина обрушения, возможная у разных типов вулканов, включая щитовые. Это не ещё одна форма конуса и не любой вершинный кратер.')}</figcaption>
  </figure>;
}
