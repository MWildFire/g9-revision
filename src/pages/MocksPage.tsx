import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import data from '../data/mocks.json';

// Russian noun after a number: 1 результат, 2 результата, 5 результатов, 21 результат.
const ruResults = (n: number) => {
  const d = n % 10, t = n % 100;
  if (d === 1 && t !== 11) return 'результат';
  if (d >= 2 && d <= 4 && (t < 12 || t > 14)) return 'результата';
  return 'результатов';
};

export function MocksPage() {
  const { i18n, t } = useTranslation('common');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const ru = lang === 'ru';
  const [params] = useSearchParams();
  const initialSubject = params.get('subject');
  const [subject, setSubject] = useState(initialSubject && data.coverage.some(r => r.subject === initialSubject) ? initialSubject : 'all');
  const [query, setQuery] = useState('');
  const [addedOnly, setAddedOnly] = useState(false);
  const scopes: Record<string, string> = ru ? { g9: 'Школьный Grade 9', 'g9-10': 'Список Grade 9+10 без даты', myp: 'Рамка MYP', check: 'Нужно уточнить' } : { g9: 'School Grade 9', 'g9-10': 'Undated Grade 9+10 list', myp: 'MYP framework', check: 'Needs confirmation' };
  const visible = data.coverage.filter(r => (subject === 'all' || r.subject === subject) && (!addedOnly || r.detail === 'added') && `${r.title.en} ${r.title.ru}`.toLowerCase().includes(query.toLowerCase()));
  const subjectName = (s: string) => s === 'skills' ? (ru ? 'Общие навыки MYP' : 'MYP skills') : t(`subjects.${s}`);
  return <main className="max-w-6xl mx-auto px-4 md:px-6 py-10">
    <Link to="/" className="text-sm underline">← {t('nav.hub')}</Link>
    <header className="my-8 max-w-3xl">
      <Link to="/revision-plan" className="inline-block rounded-lg bg-accent-sage px-5 py-3 mb-6">{ru ? 'Моки 9–13 ноября: актуальный план и полный курс →' : '9–13 November mocks: current plan and complete course →'}</Link>
      <p className="text-sm text-text-secondary mb-3">{ru ? 'ПРЕДМЕТНАЯ БИБЛИОТЕКА' : 'SUBJECT LIBRARY'}</p>
      <h1 className="font-serif text-4xl mb-4">{ru ? 'Карта подготовки к пробным экзаменам MYP (mocks)' : 'Your MYP mock revision map'}</h1>
      <p className="text-text-secondary">{ru ? 'Начни с тем из Grade 9. Карта связывает школьные списки, готовые блоки и новые задания. Метки показывают основание включения темы, а не вероятность вопроса на экзамене.' : 'Start with Grade 9. This map connects school lists, existing lessons and new practice. Labels identify the source of a topic, not the probability of an exam question.'}</p>
    </header>
    <section className="mb-8 border border-border rounded-xl p-5">
      <h2 className="font-serif text-xl mb-3">{ru ? 'Как работать с материалами' : 'How to use the materials'}</h2>
      <ol className="list-decimal pl-5 space-y-2 text-sm">
        <li>{ru ? 'Проверь старую тему без подсказок и вслух объясни, как рассуждаешь.' : 'Try an existing topic without notes and explain your reasoning aloud.'}</li>
        <li>{ru ? 'Открой новый блок, чтобы закрыть пробел: реши задание, затем раскрой разбор.' : 'Use a new lesson to fill a gap, attempt its question, then reveal the solution.'}</li>
        <li>{ru ? 'Чередуй вопросы на знание понятий и фактов с анализом данных, исследованием, аргументацией и задачами в незнакомом контексте.' : 'Alternate knowledge recall with data analysis, investigation, argument and unfamiliar applications.'}</li>
        <li>{ru ? 'Запиши ошибку и повтори похожее задание позже. Для времени и формата полного пробного экзамена используй указания учителя.' : 'Record the error and retry a similar problem later. Use teacher instructions for full mock timing and format.'}</li>
      </ol>
    </section>
    <div className="flex flex-wrap gap-4 items-end mb-6">
      <label className="text-sm">{ru ? 'Предмет' : 'Subject'}<select className="block border border-border rounded-md bg-bg-secondary p-2 mt-1" value={subject} onChange={e=>setSubject(e.target.value)}>
        <option value="all">{ru ? 'Все предметы' : 'All subjects'}</option>
        {[...new Set(data.coverage.map(r=>r.subject))].map(s=><option key={s} value={s}>{subjectName(s)}</option>)}
      </select></label>
      <label className="text-sm flex-1 min-w-48">{ru ? 'Поиск темы' : 'Find a topic'}<input className="block w-full border border-border rounded-md bg-bg-secondary p-2 mt-1" value={query} onChange={e=>setQuery(e.target.value)} /></label>
      <label className="text-sm py-2"><input type="checkbox" checked={addedOnly} onChange={e=>setAddedOnly(e.target.checked)} className="mr-2" />{ru ? 'Только новые блоки' : 'New lessons only'}</label>
    </div>
    <p className="text-sm text-text-secondary mb-3" aria-live="polite">{visible.length} {ru ? ruResults(visible.length) : (visible.length === 1 ? 'result' : 'results')}</p>
    <div className="grid md:grid-cols-2 gap-4">
      {visible.map(row=><article key={row.id} className="border border-border rounded-lg bg-bg-secondary p-5">
        <p className="text-xs text-text-secondary mb-2">{subjectName(row.subject)} · {scopes[row.scope]}</p>
        <h2 className="font-serif text-lg mb-3"><Link to={row.route} className="hover:underline">{row.title[lang]}</Link></h2>
        <Link to={row.route} className="inline-block mt-3 text-sm underline">{ru ? 'Открыть материал' : 'Open material'} →</Link>
      </article>)}
    </div>
    {!visible.length && <p>{ru ? 'По этим фильтрам ничего не найдено.' : 'No topics match these filters.'}</p>}
  </main>;
}
