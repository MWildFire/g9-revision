import { useTranslation } from 'react-i18next';
import { frenchPhotoAlt } from '../../november/languageG9Rehearsals';

/** Entirely original SVG; no stock photo, identifiable person or external asset. */
export function FrenchG9PhotoStimulus() {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  return (
    <figure className="nov-panel">
      <svg viewBox="0 0 900 500" role="img" aria-label={frenchPhotoAlt[lang]} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="500" fill="#e9f3f0" />
        <rect x="390" y="65" width="470" height="320" rx="8" fill="#e1cba8" stroke="#514c43" strokeWidth="3" />
        <rect x="570" y="235" width="110" height="150" fill="#657c77" />
        <rect x="420" y="120" width="95" height="80" fill="#accbd1" stroke="#514c43" strokeWidth="3" />
        <rect x="735" y="120" width="95" height="80" fill="#accbd1" stroke="#514c43" strokeWidth="3" />
        <text x="625" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="30" fill="#293c39">ÉCOLE</text>
        <path d="M0 385H900V500H0Z" fill="#c8d8b8" />
        <path d="M540 385H710L840 500H445Z" fill="#d4c6ac" />
        <path d="M112 200V393" stroke="#735746" strokeWidth="23" />
        <circle cx="113" cy="145" r="72" fill="#7f9d75" /><circle cx="66" cy="205" r="48" fill="#7f9d75" /><circle cx="160" cy="205" r="48" fill="#7f9d75" />
        <path d="M30 352H165M40 376H155M49 376V410M144 376V410" stroke="#735746" strokeWidth="12" />
        <rect x="180" y="130" width="205" height="105" rx="6" fill="#fff7e7" stroke="#514c43" strokeWidth="3" />
        <text x="282" y="161" textAnchor="middle" fontFamily="sans-serif" fontSize="19" fill="#293c39">COLLECTE DE LIVRES</text>
        <text x="282" y="199" textAnchor="middle" fontFamily="sans-serif" fontSize="24" fill="#293c39">SAMEDI · 10 H</text>
        <path d="M202 235V370M365 235V370" stroke="#735746" strokeWidth="6" />
        {/* Four pupils, deliberately schematic. */}
        <circle cx="280" cy="285" r="22" fill="#936f52" /><path d="M280 312V378M280 333L248 350M280 333L320 345M280 378L260 428M280 378L298 428" stroke="#5b747e" strokeWidth="16" fill="none" strokeLinecap="round" />
        <rect x="302" y="320" width="35" height="12" transform="rotate(10 302 320)" fill="#a75048" /><rect x="300" y="336" width="39" height="13" transform="rotate(10 300 336)" fill="#d2a641" />
        <circle cx="460" cy="280" r="22" fill="#b99472" /><path d="M460 308V375M460 327L423 358M460 327L485 357M460 375L441 428M460 375L481 428" stroke="#98614c" strokeWidth="16" fill="none" strokeLinecap="round" />
        <rect x="398" y="343" width="36" height="13" transform="rotate(20 398 343)" fill="#577b69" />
        <rect x="340" y="367" width="100" height="73" fill="#bd9b71" stroke="#514c43" strokeWidth="3" />
        <text x="390" y="411" textAnchor="middle" fontFamily="sans-serif" fontSize="20" fill="#293c39">LIVRES</text>
        <circle cx="665" cy="280" r="22" fill="#6e4d3e" /><path d="M665 308V375M665 327L632 350M665 327L701 354M665 375L649 427M665 375L683 427" stroke="#6f784c" strokeWidth="16" fill="none" strokeLinecap="round" />
        <circle cx="820" cy="280" r="22" fill="#cfaa8c" /><path d="M820 308V375M820 327L790 350M820 327L849 354M820 375L803 427M820 375L838 427" stroke="#7c6680" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path d="M842 348V368" stroke="#514c43" strokeWidth="4" /><rect x="827" y="365" width="30" height="39" rx="5" fill="#d3ad4f" stroke="#514c43" strokeWidth="2" />
        <g fill="none" stroke="#344b50" strokeWidth="4"><circle cx="700" cy="434" r="27" /><circle cx="780" cy="434" r="27" /><path d="M700 434L724 390L750 434H700L738 402L780 434M724 390H712M738 402L752 376H767" /></g>
      </svg>
      <figcaption className="mt-3 text-sm text-text-secondary">
        {lang === 'ru' ? 'Авторская иллюстрация для репетиции описания фото по архивному формату G9. Сцена вымышлена.' : 'Original illustration for picture-description practice in the archived G9 format. The scene is fictional.'}
      </figcaption>
      <details className="mt-3">
        <summary>{lang === 'ru' ? 'Текстовое описание изображения' : 'Text description of the image'}</summary>
        <p>{frenchPhotoAlt[lang]}</p>
      </details>
    </figure>
  );
}
