import { useState } from 'react';
import practice from '../data/english-editing-practice.json';

type Language = 'en' | 'ru';
const groups = [
  { id: 'tense', en: 'Tense, aspect and future reference', ru: 'Время, аспект и выражение будущего' },
  { id: 'punctuation', en: 'Punctuation', ru: 'Пунктуация' },
  { id: 'confusable', en: 'Commonly confused words', ru: 'Слова, которые часто путают' },
  { id: 'agreement', en: 'Subject–verb agreement', ru: 'Согласование подлежащего и сказуемого' },
];

export function EnglishEditingPractice({ language = 'en' }: { language?: Language }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const lang = language;
  const t = (en: string, ru: string) => lang === 'ru' ? ru : en;
  return (
    <section className="mt-8 space-y-4" aria-labelledby="english-editing-title">
      <h2 id="english-editing-title" className="text-xl font-semibold">{practice.title[lang]}</h2>
      <p>{practice.intro[lang]}</p>
      <p className="text-sm">{t('Your draft answers stay on this page while it is open. Copy anything you want to keep before leaving.', 'Черновики остаются на этой странице, пока она открыта. Перед уходом скопируй то, что хочешь сохранить.')}</p>
      {groups.map(group => (
        <section key={group.id} className="space-y-3" aria-labelledby={`editing-group-${group.id}`}>
          <h3 id={`editing-group-${group.id}`} className="font-semibold">{group[lang]}</h3>
          {practice.tasks.filter(task => task.group === group.id).map(task => (
            <article key={task.id} className="bg-bg-secondary border border-border rounded-md p-4 space-y-3">
              <p lang="en">{task.prompt}</p>
              <label className="block text-sm" htmlFor={`editing-${task.id}`}>{t('Your complete corrected sentence', 'Твоё полное исправленное предложение')}</label>
              <textarea id={`editing-${task.id}`} lang="en" rows={2} maxLength={2000} value={answers[task.id] ?? ''} onChange={event => setAnswers(current => ({ ...current, [task.id]: event.target.value }))} className="w-full rounded border border-border bg-bg-primary p-2" />
              <details>
                <summary className="cursor-pointer font-semibold">{t('Answer, reason and acceptable variants', 'Ответ, объяснение и допустимые варианты')}</summary>
                <p lang="en" className="mt-2 font-medium">{task.answer}</p>
                <p className="mt-2">{task.reason[lang]}</p>
                {task.variants.length > 0 && <ul className="list-disc pl-6 space-y-2 mt-2">{task.variants.map((variant, index) => <li key={index}><span lang="en">{variant.en}</span>{lang === 'ru' && <p>{variant.ru}</p>}</li>)}</ul>}
              </details>
            </article>
          ))}
        </section>
      ))}
    </section>
  );
}
