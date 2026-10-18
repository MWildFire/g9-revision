import workshops from '../data/writing-workshops.json';

type Language = 'en' | 'ru';
type Props = { topicId: string; language?: Language };

/** Uses the actual November topic IDs; the caller owns placement in NovemberModule. */
export function WritingWorkshops({ topicId, language = 'en' }: Props) {
  const lang = language;
  const models = workshops.models.filter(model => model.topicId === topicId);
  if (models.length === 0) return null;
  const t = (en: string, ru: string) => lang === 'ru' ? ru : en;
  return (
    <section className="nov-panel space-y-4" aria-labelledby={`writing-workshops-${topicId}`}>
      <h2 id={`writing-workshops-${topicId}`}>{workshops.title[lang]}</h2>
      <p>{workshops.notice[lang]}</p>
      {models.map(model => (
        <article key={model.id} className="border border-border rounded-md p-4 space-y-3">
          <h3>{model.title[lang]}</h3>
          <p>{model.prompt[lang]}</p>
          <dl className="space-y-2 text-sm">
            <div><dt className="font-semibold">{t('Audience', 'Адресат')}</dt><dd>{model.audience[lang]}</dd></div>
            <div><dt className="font-semibold">{t('Purpose', 'Цель')}</dt><dd>{model.purpose[lang]}</dd></div>
            <div><dt className="font-semibold">{t('Register', 'Регистр')}</dt><dd>{model.register[lang]}</dd></div>
          </dl>
          <p className="text-sm">{model.timing[lang]}</p>
          <details>
            <summary className="cursor-pointer font-semibold">{t('Read the complete English model', 'Открыть полный образец на английском')}</summary>
            <div className="space-y-4 mt-3">
              {model.paragraphs.map((paragraph, index) => (
                <p key={`${model.id}-text-${index}`} lang="en" className="whitespace-pre-wrap leading-relaxed">{paragraph.text}</p>
              ))}
            </div>
            <p className="text-sm mt-3">{t('Word count', 'Число слов')}: {model.wordCount.excludingDirections} {t('excluding stage directions', 'без ремарок')}; {model.wordCount.includingDirections} {t('including them', 'с ремарками')}. {model.wordCount.convention[lang]}</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">{t('Study the paragraph / beat choices', 'Разобрать абзацы и такты')}</summary>
            <ol className="list-decimal pl-6 space-y-3 mt-3">
              {model.paragraphs.map((paragraph, index) => <li key={`${model.id}-note-${index}`}>{paragraph.annotation[lang]}</li>)}
            </ol>
          </details>
          <h4 className="font-semibold">{t('Other defensible choices', 'Другие обоснованные решения')}</h4>
          <ul className="list-disc pl-6 space-y-2">{model.alternatives.map((alternative, index) => <li key={index}>{alternative[lang]}</li>)}</ul>
          <h4 className="font-semibold">{t('Authored self-review prompts', 'Авторские вопросы для самопроверки')}</h4>
          <p className="text-sm">{workshops.rubricNote[lang]}</p>
          <ul className="space-y-2">
            {model.selfReview.map((check, index) => <li key={`${model.id}-${index}`}><label className="flex gap-2 items-start" style={{display:'flex',alignItems:'flex-start',gap:8,breakInside:'avoid'}}><input type="checkbox" className="mt-1" style={{width:16,flexShrink:0,display:'inline-block'}} /><span><strong>{check.criterion}:</strong> {check.question[lang]}</span></label></li>)}
          </ul>
        </article>
      ))}
      {topicId === workshops.script.topicId && (
        <article className="border border-border rounded-md p-4 space-y-3">
          <h3>{workshops.script.title[lang]}</h3>
          <p>{workshops.script.setup[lang]}</p>
          <details>
            <summary className="cursor-pointer font-semibold">{t('Perform the seven-turn scene', 'Открыть сцену из семи реплик')}</summary>
            <ol className="space-y-3 mt-3" lang="en">
              {workshops.script.turns.map((turn, index) => <li key={index}>{'direction' in turn && turn.direction && <p className="italic">{turn.direction}</p>}<p><strong>{turn.speaker}:</strong> {turn.line}</p></li>)}
            </ol>
          </details>
          <p>{workshops.script.commentary[lang]}</p>
          <p>{workshops.script.transfer[lang]}</p>
        </article>
      )}
    </section>
  );
}
