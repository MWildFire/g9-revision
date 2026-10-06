import { useId } from 'react';
import { useTranslation } from 'react-i18next';

/** Enlarging a merged image cannot recover two unresolved objects. */
export function MicroscopyResolution() {
  const { i18n } = useTranslation();
  const ru = i18n.language.startsWith('ru');
  const id = useId().replace(/:/g, '');
  const labels = ru ? {
    title: 'Увеличение и разрешение', a: 'Две близкие точки', b: 'Больше размер', c: 'Выше разрешение',
    ad: 'Изображения перекрылись', bd: 'Точки всё ещё слиты', cd: 'Две точки различимы',
    caption: 'Схема одного и того же объекта. Простое увеличение слитого пятна не восстанавливает детали. Более высокое разрешение позволяет различить две точки. Размеры условны.',
  } : {
    title: 'Magnification and resolution', a: 'Two nearby points', b: 'Larger image', c: 'Better resolution',
    ad: 'Their images overlap', bd: 'Still unresolved', cd: 'Two points distinguished',
    caption: 'A schematic of the same object. Enlarging a merged spot does not recover detail. Better resolution distinguishes the two points. Sizes are illustrative.',
  };
  return <figure className="bg-bg-secondary border border-border rounded-md p-4 my-4">
    <div className="definition-diagram-viewport" role="region" tabIndex={0} aria-label={labels.title}>
    <svg style={{ minWidth: 700, maxWidth: 'none' }} viewBox="0 0 720 235" role="img" aria-labelledby={`${id}-title ${id}-desc`} className="w-full">
      <title id={`${id}-title`}>{labels.title}</title>
      <desc id={`${id}-desc`}>{labels.caption}</desc>
      <defs><radialGradient id={`${id}-spot`}><stop offset="0" stopColor="#326685" stopOpacity=".9"/><stop offset="1" stopColor="#326685" stopOpacity="0"/></radialGradient></defs>
      {[0, 1, 2].map(i => <rect key={i} x={8 + i * 240} y="8" width="224" height="210" rx="9" fill="#f3f6f7" stroke="#b6c6cf"/>)}
      <g fill={`url(#${id}-spot)`}><circle cx="108" cy="105" r="32"/><circle cx="132" cy="105" r="32"/><circle cx="341" cy="105" r="51"/><circle cx="379" cy="105" r="51"/></g>
      <g fill="#326685"><circle cx="578" cy="105" r="10"/><circle cx="622" cy="105" r="10"/></g>
      {[labels.a, labels.b, labels.c].map((label, i) => <text key={i} x={120 + i * 240} y="39" textAnchor="middle" fontSize="17" fontWeight="600" fill="#243e50">{label}</text>)}
      {[labels.ad, labels.bd, labels.cd].map((label, i) => <text key={i} x={120 + i * 240} y="190" textAnchor="middle" fontSize="15" fill="#243e50">{label}</text>)}
    </svg>
    </div>
    <figcaption className="text-sm"><strong>{labels.title}.</strong> {labels.caption}</figcaption>
  </figure>;
}
