import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import type { DefinitionReview, DefinitionText } from './definitionReview';
import './definition-support.css';

function wrap(text: string, maximum = 37): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.trim().split(/\s+/)) {
    if (line && line.length + word.length + 1 > maximum) { lines.push(line); line = ''; }
    if (word.length > maximum) {
      if (line) { lines.push(line); line = ''; }
      for (let index = 0; index < word.length; index += maximum) {
        const part = word.slice(index, index + maximum);
        if (part.length === maximum) lines.push(part); else line = part;
      }
    } else line += (line ? ' ' : '') + word;
  }
  if (line) lines.push(line);
  return lines;
}

export function DefinitionDiagram({ visual, language }: { visual: NonNullable<DefinitionReview['visual']>; language: 'en' | 'ru' }) {
  const id = useId().replace(/:/g, '');
  const text = (value: DefinitionText) => value[language];
  const rows = visual.items.map(item => ({ label: wrap(text(item.label), 32), detail: item.detail ? wrap(text(item.detail), 39) : [] }));
  let cursor = 12;
  const positioned = rows.map(row => {
    const height = 25 + row.label.length * 23 + row.detail.length * 20;
    const y = cursor;
    cursor += height + (visual.kind === 'flow' ? 39 : 17);
    return { ...row, y, height };
  });
  const height = Math.max(cursor - 5, 80);
  return <figure className={`definition-diagram definition-diagram-${visual.kind}`}>
    <div className="definition-diagram-viewport" tabIndex={0} role="region" aria-label={language === 'ru' ? 'Схема. На узком экране прокручивается по горизонтали.' : 'Diagram. Scroll horizontally on a narrow screen.'}>
    <svg viewBox={`0 0 420 ${height}`} role="img" aria-labelledby={`${id}-title ${id}-description`}>
      <title id={`${id}-title`}>{text(visual.title)}</title>
      <desc id={`${id}-description`}>{text(visual.caption)} {visual.items.map(item => `${text(item.label)}: ${item.detail ? text(item.detail) : ''}`).join('; ')}</desc>
      {positioned.map((row, index) => <g key={index}>
        <rect x="12" y={row.y} width="396" height={row.height} rx="8" fill={index % 2 ? '#eef0e6' : '#e8eff3'} stroke="#8b9ca4" strokeWidth="1.5"/>
        <text x="28" y={row.y + 29} fill="#233d50" fontSize="18" fontWeight="650">{row.label.map((line, lineIndex) => <tspan key={lineIndex} x="28" dy={lineIndex ? 23 : 0}>{line}</tspan>)}</text>
        {row.detail.length > 0 && <text x="28" y={row.y + 30 + row.label.length * 23} fill="#354c5c" fontSize="16">{row.detail.map((line, lineIndex) => <tspan key={lineIndex} x="28" dy={lineIndex ? 20 : 0}>{line}</tspan>)}</text>}
        {visual.kind === 'flow' && index < positioned.length - 1 && <path d={`M210 ${row.y + row.height + 7}v20m-6 -6 6 6 6 -6`} stroke="#35566c" strokeWidth="2" fill="none"/>}
      </g>)}
    </svg>
    </div>
    <figcaption><strong>{text(visual.title)}.</strong> {text(visual.caption)}</figcaption>
  </figure>;
}

export function DefinitionSupport({ review, language }: { review?: DefinitionReview | null; language?: 'en' | 'ru' }) {
  const { i18n } = useTranslation();
  const lang = language ?? (i18n.language.startsWith('ru') ? 'ru' : 'en');
  if (!review || typeof review !== 'object' || !Array.isArray(review.sources)) return null;
  const text = (value: DefinitionText | undefined) => value?.[lang] ?? '';
  const ru = lang === 'ru';
  return <div className="definition-support" lang={lang}>
    <p className="definition-equivalents"><span lang="en">{review.englishTerm}</span><span aria-hidden="true"> · </span><span lang="ru">{review.russianTerm}</span></p>
    {review.explanation && <p>{text(review.explanation)}</p>}
    {review.contrast && <p className="definition-contrast"><strong>{ru ? 'Не путать:' : 'Distinguish:'}</strong> {text(review.contrast)}</p>}
    {review.model && <p className="definition-model"><strong>{ru ? 'Область применения:' : 'Scope of the model:'}</strong> {text(review.model)}</p>}
    {review.visual && <DefinitionDiagram visual={review.visual} language={lang}/>}
    {review.sources.length > 0 && <details className="definition-sources"><summary>{ru ? 'Источники и формулировка' : 'Sources and wording'}</summary><p>{ru ? 'Определение и объяснение изложены своими словами по указанным источникам. Язык источника отмечен рядом со ссылкой; русский текст не выдаётся за опубликованную цитату.' : 'The definition and explanation are authored paraphrases of the sources below. Each source’s language is shown; translated wording is not presented as a published quotation.'}</p><ul>{review.sources.map((source, index) => <li key={`${source.url}-${index}`}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a> <span className="definition-source-language">{source.language.toUpperCase()}</span><span className="definition-source-section">{source.section}</span></li>)}</ul></details>}
  </div>;
}
