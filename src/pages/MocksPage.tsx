import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import data from '../data/mocks.json';

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
      <p className="text-sm text-text-secondary mb-3">GRADE 10 · OCTOBER 2026</p>
      <h1 className="font-serif text-4xl mb-4">{ru ? 'Карта подготовки к MYP mocks' : 'Your MYP mock revision map'}</h1>
      <p className="text-text-secondary">{ru ? 'Начните с тем Grade 9. Карта связывает школьные списки, существующие уроки и новые материалы. Метки показывают основание включения темы, а не вероятность вопроса на экзамене.' : 'Start with Grade 9. This map connects school lists, existing lessons and new practice. Labels identify the source of a topic, not the probability of an exam question.'}</p>
    </header>
    <section className="rounded-xl border border-border bg-bg-secondary p-5 mb-8 space-y-2">
      <h2 className="font-serif text-xl">{ru ? 'Что подтверждено — и чего пока не хватает' : 'What we know — and what is still missing'}</h2>
      <p className="text-sm">{ru ? 'Октябрь указан как ориентир подготовки. Точные даты, предметный scope, уровни Mathematics Standard/Extended и French, а также включение IDL должны быть подтверждены школой. Единого обязательного списка тем «IB Grade 9» нет: школа определяет последовательность в рамках MYP.' : 'October is the user-reported window. The school must confirm exact dates, subject scope, Mathematics Standard/Extended, French level and any IDL mock. IB does not prescribe one universal Grade 9 topic sequence: schools structure learning within MYP.'}</p>
      <p className="text-sm">{ru ? 'Школьные списки 2025–26 — исторические источники. Список Grade 9+10 не датирован. Ни одна строка пока не помечена «подтверждено для октября». Задания в новых блоках — авторская практика, не реальные вопросы IB.' : 'The 2025–26 school lists are historical; the Grade 9+10 list is undated. No row is labelled confirmed for October. Exercises in the new lessons are original practice, not real IB questions.'}</p>
      <p className="text-sm">{ru ? 'Полнота карты не равна полноте учебника: строки «Материал есть» указывают ближайший раздел и могут требовать углубления. Реальные аудиозаписи, полный пробный вариант и актуальные школьные markschemes остаются пробелами.' : 'Map coverage is not textbook completeness: existing-content rows point to the closest section and may need more depth. Genuine listening audio, a complete timed mock and current school markschemes remain gaps.'}</p>
    </section>
    <div className="grid sm:grid-cols-3 gap-3 mb-8">
      {[pair(`${data.coverage.length} entries`, `${data.coverage.length} строк карты`), pair(`${data.lessons.length} new lessons`, `${data.lessons.length} новых блоков`), pair(`${data.sources.length} sources checked`, `${data.sources.length} проверенных источников`)].map(x => <div key={x.en} className="rounded-lg border border-border p-4 font-medium">{x[lang]}</div>)}
    </div>
    <section className="mb-8 border border-border rounded-xl p-5">
      <h2 className="font-serif text-xl mb-3">{ru ? 'Как работать с материалами' : 'How to use the materials'}</h2>
      <ol className="list-decimal pl-5 space-y-2 text-sm">
        <li>{ru ? 'Проверьте старую тему без подсказок; объясните ход решения вслух.' : 'Try an existing topic without notes and explain your reasoning aloud.'}</li>
        <li>{ru ? 'Откройте новый блок для пробела, решите задание, затем раскройте ответ.' : 'Use a new lesson to fill a gap, attempt its question, then reveal the solution.'}</li>
        <li>{ru ? 'Чередуйте знания с анализом данных, исследованием, аргументацией и задачами в незнакомом контексте.' : 'Alternate knowledge recall with data analysis, investigation, argument and unfamiliar applications.'}</li>
        <li>{ru ? 'Запишите ошибку и повторите похожее задание позже. Для времени и формата полного mock используйте указания учителя.' : 'Record the error and retry a similar problem later. Use teacher instructions for full mock timing and format.'}</li>
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
    <p className="text-sm text-text-secondary mb-3" aria-live="polite">{visible.length} {ru ? 'результатов' : 'results'}</p>
    <div className="grid md:grid-cols-2 gap-4">
      {visible.map(row=><article key={row.id} className="border border-border rounded-lg bg-bg-secondary p-5">
        <p className="text-xs text-text-secondary mb-2">{subjectName(row.subject)} · {scopes[row.scope]}</p>
        <h2 className="font-serif text-lg mb-3"><Link to={row.route} className="hover:underline">{row.title[lang]}</Link></h2>
        <p className="text-xs mb-2">{row.detail === 'added' ? (ru ? 'Новый блок · объяснение, практика, ответ' : 'New lesson · explanation, practice, solution') : (ru ? 'Материал есть · глубина требует проверки по scope' : 'Existing section · depth needs a scope check')}</p>
        <p className="text-xs text-text-secondary">{ru ? 'Основание: ' : 'Evidence: '}{row.sources.map(id=><button type="button" key={id} className="underline mr-2 text-left" onClick={()=>document.getElementById(`source-${id}`)?.scrollIntoView({behavior:'smooth'})}>{data.sources.find(s=>s.id===id)?.title}</button>)}</p>
        <Link to={row.route} className="inline-block mt-3 text-sm underline">{ru ? 'Открыть материал' : 'Open material'} →</Link>
      </article>)}
    </div>
    {!visible.length && <p>{ru ? 'По этому фильтру ничего не найдено.' : 'No topics match these filters.'}</p>}
    <section className="mt-12">
      <h2 className="font-serif text-2xl mb-4">{ru ? 'Источники и границы проверки' : 'Sources and verification limits'}</h2>
      <p className="text-sm text-text-secondary mb-5">{ru ? 'Проверено 28.09.2026. Школьные файлы прочитаны локально; оригиналы и коды доступа не опубликованы. Публичные краткие документы IB описывают рамку; у старых буклетов могут быть исторические экзаменационные схемы. Актуальные требования школы и сессии имеют приоритет.' : 'Checked 28 September 2026. School files were read locally; originals and access codes are not published. Public IB briefs describe the framework; older briefs may retain historical assessment blueprints. Current school and session instructions take precedence.'}</p>
      <ul className="space-y-3 text-sm">{data.sources.map(s=><li id={`source-${s.id}`} key={s.id} className="scroll-mt-24 border-l-2 border-border pl-3">
        {'url' in s ? <a href={s.url} target="_blank" rel="noreferrer" className="underline">{s.title}</a> : <span>{s.title}</span>}
        <span className="block text-xs text-text-secondary">{s.kind==='school' ? (ru ? 'Локальный школьный источник; не подтверждает scope октября' : 'Local school source; does not confirm October scope') : (ru ? 'Публичный официальный источник' : 'Public official source')}</span>
      </li>)}</ul>
    </section>
  </main>;
}
function pair(en: string, ru: string) { return {en,ru}; }
