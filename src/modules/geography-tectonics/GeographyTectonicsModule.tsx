import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, Check, ClipboardList, Mountain, Printer, Search } from 'lucide-react';
import { lessons } from './lessons';
import { checklist, glossary, sources } from './reference';
import { TectonicVisual } from './Visuals';
import { parseStudyState, STUDY_KEY, type StudyState } from './model';
import type { Bilingual, Lesson, Question } from './types';
import './tectonics.css';

const BASE = '/geography-tectonic-hazards';
const questions = lessons.flatMap(lesson => lesson.questions);

function useText() {
  const { i18n } = useTranslation();
  const ru = i18n.language.startsWith('ru');
  return { ru, t: (en: string, russian: string) => ru ? russian : en, txt: (value: Bilingual) => ru ? value.ru : value.en };
}

type Store = {
  state: StudyState;
  warning: boolean;
  answer: (id: string, answer: string) => void;
  toggle: (id: string) => void;
};

function useStudyStore(): Store {
  const [initial] = useState(() => {
    try { return { state: parseStudyState(localStorage.getItem(STUDY_KEY)), warning: false }; }
    catch { return { state: parseStudyState(null), warning: true }; }
  });
  const [state, setState] = useState(initial.state);
  const [warning, setWarning] = useState(initial.warning);
  useEffect(() => {
    try { localStorage.setItem(STUDY_KEY, JSON.stringify(state)); setWarning(false); }
    catch { setWarning(true); }
  }, [state]);
  return {
    state, warning,
    answer: (id, value) => setState(current => ({ ...current, answers: { ...current.answers, [id]: value } })),
    toggle: id => setState(current => ({ ...current, completed: current.completed.includes(id) ? current.completed.filter(value => value !== id) : [...current.completed, id] })),
  };
}

function SourceList({ ids, compact = false }: { ids?: string[]; compact?: boolean }) {
  const { t, txt } = useText();
  const selected = ids ? sources.filter(source => ids.includes(source.id)) : sources;
  return <ul className={`tectonic-sources ${compact ? 'compact' : ''}`}>
    {selected.map(source => <li key={source.id}>
      <a href={source.url} target="_blank" rel="noreferrer">{source.title}<span aria-hidden="true"> ↗</span><span className="sr-only"> {t('(opens in a new tab)', '(откроется в новой вкладке)')}</span></a>
      {!compact && <p>{txt(source.purpose)}</p>}
      <span className="tectonic-print-url">{source.url}</span>
    </li>)}
  </ul>;
}

function QuestionCard({ question, number, store }: { question: Question; number: number; store: Store }) {
  const { t, txt } = useText();
  const topic = lessons.find(lesson => lesson.id === question.topic);
  const inputId = `tectonic-answer-${question.id}`;
  return <article className="tectonic-question">
    <div className="tectonic-question-meta"><span>{String(number).padStart(2, '0')}</span>{topic && <Link to={`${BASE}/${topic.id}`}>{txt(topic.title)}</Link>}</div>
    <h3>{txt(question.prompt)}</h3>
    <label htmlFor={inputId}>{t('Your explanation', 'Твоё объяснение')}</label>
    <textarea id={inputId} value={store.state.answers[question.id] ?? ''} onChange={event => store.answer(question.id, event.target.value)} rows={4} placeholder={t('Explain the process, add evidence, then link back to the question…', 'Объясни процесс, приведи доказательство и свяжи вывод с вопросом…')} />
    <div className="tectonic-question-tools">
      <details><summary>{t('Need a hint?', 'Нужна подсказка?')}</summary><p>{txt(question.hint)}</p></details>
      <details className="tectonic-solution"><summary>{t('Check the key points', 'Проверить ключевые пункты')}</summary><p className="tectonic-small">{t('Compare your reasoning with these points. Equivalent accurate explanations are also valid.', 'Сравни свои рассуждения с этими пунктами. Другие точные объяснения также допустимы.')}</p><ol>{question.marking.map((point, index) => <li key={index}>{txt(point)}</li>)}</ol></details>
    </div>
  </article>;
}

function Overview({ store }: { store: Store }) {
  const { t, txt } = useText();
  const completed = lessons.filter(lesson => store.state.completed.includes(lesson.id)).length;
  return <>
    <section className="tectonic-hero">
      <div className="tectonic-eyebrow"><Mountain size={17} aria-hidden="true" />{t('GEOGRAPHY · REVISION PACK', 'ГЕОГРАФИЯ · ПОДГОТОВКА')}</div>
      <h1>{t('Tectonic hazards', 'Тектонические опасности')}</h1>
      <p className="tectonic-lead">{t('Understand the moving Earth. Explain why disasters differ. Build a well-supported geographical argument.', 'Пойми, как движутся плиты. Объясни различия между катастрофами. Научись обосновывать географические выводы.')}</p>
      <div className="tectonic-hero-links"><Link className="tectonic-button" to={`${BASE}/${lessons[0]?.id}`}>{t('Start with the foundations', 'Начать с основ')}<ArrowRight size={17} /></Link><Link className="tectonic-button secondary" to={`${BASE}/practice`}>{t('Test your understanding', 'Проверить понимание')}</Link></div>
      <div className="tectonic-stats"><div><strong>{lessons.length}</strong><span>{t('detailed lessons', 'подробных тем')}</span></div><div><strong>{questions.length}</strong><span>{t('practice questions', 'вопросов для практики')}</span></div><div><strong>EN / RU</strong><span>{t('complete language versions', 'полные языковые версии')}</span></div></div>
    </section>
    <section className="tectonic-scope-note"><BookOpen size={22} aria-hidden="true" /><div><h2>{t('Your checklist, explained in full', 'Полное раскрытие учебного списка')}</h2><p>{t('This independent study pack follows the supplied Tectonic Hazards revision checklist. It combines processes, impacts, case studies, management and argument writing. The practice is original learning material; the checklist does not establish a test date, paper format or grading scale.', 'Этот самостоятельный учебный раздел составлен по предоставленному списку Tectonic Hazards. Здесь объединены процессы, последствия, конкретные примеры, меры управления и построение аргумента. Практика создана для подготовки; список не устанавливает дату контрольной, формат работы или шкалу оценок.')}</p></div></section>
    <section className="tectonic-progress-section">
      <div><h2>{t('Your route through the topic', 'Твой маршрут по теме')}</h2><p>{t('Read → explain aloud → practise → check → revisit.', 'Прочитай → объясни вслух → потренируйся → проверь → повтори.')}</p></div>
      <div className="tectonic-progress"><span>{t('Topics reviewed', 'Темы повторены')}: <strong>{completed} / {lessons.length}</strong></span><progress value={completed} max={lessons.length} aria-label={t('Topics reviewed', 'Повторённые темы')} /></div>
    </section>
    <div className="tectonic-lesson-grid">{lessons.map((lesson, index) => <Link className="tectonic-lesson-card" key={lesson.id} to={`${BASE}/${lesson.id}`}>
      <div className="tectonic-card-top"><span>{String(index + 1).padStart(2, '0')}</span>{store.state.completed.includes(lesson.id) && <span className="tectonic-reviewed"><Check size={14} />{t('Reviewed', 'Повторено')}</span>}</div>
      <h3>{txt(lesson.title)}</h3><p>{txt(lesson.intro)}</p><span className="tectonic-card-link">{t('Open lesson', 'Открыть тему')}<ArrowRight size={16} /></span>
    </Link>)}</div>
    <section className="tectonic-panel tectonic-checklist"><div className="tectonic-section-title"><ClipboardList size={24} /><h2>{t('Checklist coverage', 'Покрытие учебного списка')}</h2></div><p>{t('Every checklist point links to its relevant lesson or lessons. Use this as your final revision audit.', 'Каждый пункт связан с соответствующей темой или несколькими темами. Используй таблицу для итоговой проверки подготовки.')}</p>
      <div className="tectonic-table-wrap"><table><caption className="sr-only">{t('Revision checklist and matching lessons', 'Список для повторения и соответствующие темы')}</caption><thead><tr><th scope="col">№</th><th scope="col">{t('I can…', 'Я могу…')}</th><th scope="col">{t('Study here', 'Где повторить')}</th></tr></thead><tbody>{checklist.map(item => <tr key={item.id}><td>{item.id}</td><td>{txt(item.text)}</td><td>{lessons.filter(lesson => lesson.checklist.includes(item.id)).map(lesson => <Link key={lesson.id} to={`${BASE}/${lesson.id}`}>{txt(lesson.title)}</Link>)}</td></tr>)}</tbody></table></div>
    </section>
    <section className="tectonic-review-routine"><h2>{t('Turn reading into recall', 'Преврати чтение в запоминание')}</h2><ol><li>{t('Draw a boundary from memory and label movement, crust and hazards.', 'Нарисуй границу плит по памяти: подпиши движение, кору и опасности.')}</li><li>{t('Explain one causal chain using “because”, “therefore” and “however”.', 'Объясни одну причинную цепочку со словами «потому что», «следовательно», «однако».')}</li><li>{t('Use a named case study and explain what the evidence shows, not just the number.', 'Используй конкретный пример и объясни значение факта, а не только назови число.')}</li><li>{t('Answer without notes. Check the model points, then improve your explanation.', 'Ответь без подсказок. Сверь ключевые пункты и улучши объяснение.')}</li></ol><Link to={`${BASE}/print`} className="tectonic-text-link"><Printer size={17} />{t('Open the complete printable guide', 'Открыть весь материал для печати')}</Link></section>
  </>;
}

function LessonBody({ lesson, print = false }: { lesson: Lesson; print?: boolean }) {
  const { t, txt } = useText();
  return <>
    {lesson.visual && <TectonicVisual key={`${lesson.id}-${print}`} kind={lesson.visual} fixed={print} />}
    <div className="tectonic-prose-sections">{lesson.sections.map((section, index) => <section className="tectonic-prose-section" key={index}><h2>{txt(section.title)}</h2><p>{txt(section.text)}</p></section>)}</div>
    <section className="tectonic-facts"><h2>{t('The essentials to remember', 'Главное для запоминания')}</h2><ul>{lesson.keyFacts.map((fact, index) => <li key={index}>{txt(fact)}</li>)}</ul></section>
    <section className="tectonic-worked"><span className="tectonic-eyebrow">{t('WORKED EXAMPLE', 'РАЗОБРАННЫЙ ПРИМЕР')}</span><h2>{txt(lesson.example.question)}</h2><ol>{lesson.example.steps.map((step, index) => <li key={index}><span>{index + 1}</span><p>{txt(step)}</p></li>)}</ol></section>
    <section className="tectonic-pitfalls"><h2>{t('Avoid these mistakes', 'Избегай этих ошибок')}</h2><ul>{lesson.pitfalls.map((pitfall, index) => <li key={index}>{txt(pitfall)}</li>)}</ul></section>
    <section className="tectonic-lesson-sources"><h2>{t('Evidence and further explanation', 'Источники и дополнительные объяснения')}</h2><SourceList ids={lesson.sourceIds} compact /></section>
  </>;
}

function LessonPage({ store }: { store: Store }) {
  const { lessonId } = useParams();
  const { t, txt } = useText();
  const index = lessons.findIndex(lesson => lesson.id === lessonId);
  const lesson = lessons[index];
  if (!lesson) return <NotFound />;
  const complete = store.state.completed.includes(lesson.id);
  return <article className="tectonic-lesson">
    <header className="tectonic-lesson-heading"><p className="tectonic-eyebrow">{t('LESSON', 'ТЕМА')} {String(index + 1).padStart(2, '0')} / {lessons.length}</p><h1>{txt(lesson.title)}</h1><p className="tectonic-lead">{txt(lesson.intro)}</p><p className="tectonic-small">{t('Checklist points', 'Пункты списка')}: {lesson.checklist.join(', ')}</p></header>
    <LessonBody lesson={lesson} />
    <section className="tectonic-lesson-practice"><h2>{t('Explain it yourself', 'Объясни самостоятельно')}</h2><p>{t('Try each question before opening the hint or key points.', 'Сначала ответь на вопрос, затем открывай подсказку или ключевые пункты.')}</p>{lesson.questions.map((question, number) => <QuestionCard key={question.id} question={question} number={number + 1} store={store} />)}</section>
    <div className="tectonic-lesson-end"><button className={`tectonic-button ${complete ? 'secondary' : ''}`} type="button" aria-pressed={complete} onClick={() => store.toggle(lesson.id)}><Check size={18} />{complete ? t('Reviewed — click to revisit', 'Повторено — вернуть к повторению') : t('Mark this topic reviewed', 'Отметить тему повторённой')}</button><p>{t('A tick records your review, not a test score.', 'Отметка фиксирует повторение, а не результат теста.')}</p></div>
    <nav className="tectonic-pagination" aria-label={t('Adjacent lessons', 'Соседние темы')}>{index > 0 ? <Link to={`${BASE}/${lessons[index - 1].id}`}><span>← {t('Previous', 'Назад')}</span>{txt(lessons[index - 1].title)}</Link> : <Link to={BASE}>← {t('Overview', 'Обзор')}</Link>}{index < lessons.length - 1 ? <Link to={`${BASE}/${lessons[index + 1].id}`}><span>{t('Next', 'Далее')} →</span>{txt(lessons[index + 1].title)}</Link> : <Link to={`${BASE}/practice`}>{t('Practise all topics', 'Практика по всем темам')} →</Link>}</nav>
  </article>;
}

function Practice({ store }: { store: Store }) {
  const { t, txt } = useText();
  const [topic, setTopic] = useState('all');
  const [search, setSearch] = useState('');
  const [unanswered, setUnanswered] = useState(false);
  const displayed = questions.filter(question => (topic === 'all' || question.topic === topic) && (!unanswered || !store.state.answers[question.id]?.trim()) && `${txt(question.prompt)} ${txt(lessons.find(lesson => lesson.id === question.topic)?.title ?? { en: '', ru: '' })}`.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
  const answered = questions.filter(question => store.state.answers[question.id]?.trim()).length;
  return <><p className="tectonic-eyebrow">{t('ACTIVE RECALL', 'АКТИВНОЕ ПОВТОРЕНИЕ')}</p><h1>{t('Question bank', 'Банк вопросов')}</h1><p className="tectonic-lead">{t('Explain causes, apply knowledge and evaluate evidence. Use the key points to strengthen your answer.', 'Объясняй причины, применяй знания и оценивай доказательства. Используй ключевые пункты для улучшения ответа.')}</p><p className="tectonic-note">{t('Your answers are shared between lesson pages and this question bank. They stay in this browser; no account or upload is used.', 'Ответы общие для страниц тем и банка вопросов. Они остаются в этом браузере; аккаунт и отправка данных не используются.')}</p>
    <div className="tectonic-filter-panel"><label>{t('Topic', 'Тема')}<select value={topic} onChange={event => setTopic(event.target.value)}><option value="all">{t('All topics', 'Все темы')}</option>{lessons.map(lesson => <option key={lesson.id} value={lesson.id}>{txt(lesson.title)}</option>)}</select></label><label><span><Search size={15} aria-hidden="true" />{t('Search questions', 'Поиск вопросов')}</span><input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder={t('For example: tsunami', 'Например: цунами')} /></label><label className="tectonic-checkbox"><input type="checkbox" checked={unanswered} onChange={event => setUnanswered(event.target.checked)} />{t('Only unanswered', 'Только без ответа')}</label></div>
    <p className="tectonic-result-count" role="status">{t('Showing', 'Показано')}: {displayed.length} / {questions.length} · {t('Answers written', 'Записано ответов')}: {answered}</p>
    {displayed.length ? displayed.map((question, index) => <QuestionCard key={question.id} question={question} number={index + 1} store={store} />) : <div className="tectonic-panel"><h2>{t('No questions match these filters', 'По этим условиям вопросов нет')}</h2><button className="tectonic-button secondary" onClick={() => { setTopic('all'); setSearch(''); setUnanswered(false); }}>{t('Clear filters', 'Сбросить фильтры')}</button></div>}
  </>;
}

function Glossary() {
  const { t, txt } = useText();
  return <section className="tectonic-glossary"><h2>{t('Geographical vocabulary', 'Географические термины')}</h2><p>{t('Learn the English term alongside its meaning so you can use it accurately in an answer.', 'Запоминай английский термин вместе с его значением, чтобы правильно использовать его в ответе.')}</p><dl>{glossary.map((item, index) => <div key={index}><dt>{txt(item.term)}<span>{t(item.term.ru, item.term.en)}</span></dt><dd>{txt(item.definition)}</dd></div>)}</dl></section>;
}

function Reference() {
  const { t } = useText();
  return <><p className="tectonic-eyebrow">{t('KEEP THE REASONING CLEAR', 'РАССУЖДАЙ ПОСЛЕДОВАТЕЛЬНО')}</p><h1>{t('Revision guide & sources', 'Памятка и источники')}</h1><p className="tectonic-lead">{t('Precise vocabulary, connected explanations and balanced judgments.', 'Точные термины, причинные связи и взвешенные выводы.')}</p>
    <section className="tectonic-panel"><h2>{t('Choose the right kind of answer', 'Выбери нужный тип ответа')}</h2><div className="tectonic-command-grid">
      {[
        [t('Describe', 'Описать'), t('Say what happens or identify a pattern. Give accurate characteristics, locations or data.', 'Укажи, что происходит, или опиши закономерность. Приведи точные характеристики, местоположение или данные.')],
        [t('Explain', 'Объяснить'), t('Show how or why. Connect a cause to a process and then a consequence.', 'Покажи, как или почему это происходит. Свяжи причину с процессом, а процесс — с последствием.')],
        [t('Compare', 'Сравнить'), t('Use the same dimensions for both cases. State similarities and differences with evidence.', 'Используй одинаковые основания для обоих примеров. Укажи сходства и различия с доказательствами.')],
        [t('Discuss / evaluate', 'Обсудить / оценить'), t('Consider more than one factor or perspective, weigh the evidence and reach a qualified judgment.', 'Рассмотри несколько факторов или точек зрения, взвесь доказательства и сделай вывод с оговорками.')],
      ].map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="tectonic-facts"><h2>{t('Build an explanation that earns its conclusion', 'Построй объяснение, из которого следует вывод')}</h2><ol><li>{t('Make a clear claim that directly answers the question.', 'Сформулируй чёткий тезис, который прямо отвечает на вопрос.')}</li><li>{t('Add a process, a named example or specific evidence.', 'Добавь объяснение процесса, конкретный пример или точный факт.')}</li><li>{t('Explain why that evidence supports the claim.', 'Объясни, почему этот факт подтверждает тезис.')}</li><li>{t('Consider a limitation, another factor or a contrasting case.', 'Рассмотри ограничение, другой фактор или противоположный пример.')}</li><li>{t('Return to the question with a justified judgment, not “it depends” alone.', 'Вернись к вопросу и сделай обоснованный вывод, не ограничиваясь словами «это зависит».')}</li></ol></section>
    <Glossary />
    <section className="tectonic-panel"><h2>{t('Sources behind the explanations', 'Источники объяснений')}</h2><p>{t('The supplied checklist sets the scope. The sources below support scientific processes, terminology and case-study evidence. Learning prose, examples, questions and diagrams were written for this pack.', 'Предоставленный список задаёт содержание. Источники ниже подтверждают научные процессы, термины и факты конкретных событий. Объяснения, примеры, вопросы и схемы созданы для этого учебного раздела.')}</p><p className="tectonic-small">{t('Repeated wording in the checklist is grouped into one coverage entry. The source spelling “calders” is interpreted as “calderas”.', 'Повторяющаяся формулировка исходного списка объединена в один пункт покрытия. Написание «calders» в источнике интерпретировано как «calderas» — кальдеры.')}</p><SourceList /></section>
    <p className="tectonic-note">{t('Case-study estimates can vary by source and date. Keep the measure, reporting date and source with a figure; never compare different measures as though they were identical.', 'Оценки последствий событий могут различаться в зависимости от источника и даты. Запоминай, что именно измеряет число, дату оценки и источник; не сравнивай разные показатели как одинаковые.')}</p>
  </>;
}

function PrintGuide() {
  const { t, txt, ru } = useText();
  const [includeAnswers, setIncludeAnswers] = useState(false);
  return <div className="tectonic-print-view" lang={ru ? 'ru' : 'en'}>
    <div className="tectonic-print-toolbar tectonic-no-print"><div><p>{t('The entire guide is below. Choose EN or RU in the page header before printing.', 'Ниже весь материал. Перед печатью выбери EN или RU в шапке страницы.')}</p><label className="tectonic-checkbox"><input type="checkbox" checked={includeAnswers} onChange={event => setIncludeAnswers(event.target.checked)} />{t('Include practice answer points', 'Добавить ключевые пункты ответов')}</label></div><button className="tectonic-button" type="button" onClick={() => window.print()}><Printer size={18} />{t('Print / save PDF', 'Печать / сохранить PDF')}</button></div>
    <header className="tectonic-print-cover"><p className="tectonic-eyebrow">{t('GEOGRAPHY · COMPLETE REVISION GUIDE', 'ГЕОГРАФИЯ · ПОЛНЫЙ МАТЕРИАЛ ДЛЯ ПОВТОРЕНИЯ')}</p><h1>{t('Tectonic hazards', 'Тектонические опасности')}</h1><p className="tectonic-lead">{t('Processes · impacts · case studies · management · reasoned judgments', 'Процессы · последствия · примеры · управление · обоснованные выводы')}</p><p>{lessons.length} {t('lessons', 'тем')} · {questions.length} {t('practice questions', 'вопросов для практики')} · {ru ? 'Русский' : 'English'}</p><p>{t('Independent study material based on the supplied revision checklist. No school assessment format or grade boundary is inferred.', 'Самостоятельный учебный материал по предоставленному списку тем. Формат школьного оценивания и границы оценок не предполагаются.')}</p><h2>{t('Contents', 'Содержание')}</h2><ol>{lessons.map(lesson => <li key={lesson.id}><a href={`#print-${lesson.id}`} onClick={event => { event.preventDefault(); document.getElementById(`print-${lesson.id}`)?.scrollIntoView(); }}>{txt(lesson.title)}</a></li>)}</ol></header>
    {lessons.map((lesson, index) => <article key={lesson.id} id={`print-${lesson.id}`} className="tectonic-print-lesson"><p className="tectonic-eyebrow">{t('LESSON', 'ТЕМА')} {index + 1}</p><h1>{txt(lesson.title)}</h1><p className="tectonic-lead">{txt(lesson.intro)}</p><LessonBody lesson={lesson} print /><section className="tectonic-print-practice"><h2>{t('Check your understanding', 'Проверь понимание')}</h2>{lesson.questions.map((question, number) => <div key={question.id} className="tectonic-print-question"><h3>{number + 1}. {txt(question.prompt)}</h3>{includeAnswers ? <ol>{question.marking.map((point, i) => <li key={i}>{txt(point)}</li>)}</ol> : <div className="tectonic-writing-lines" aria-label={t('Space for an answer', 'Место для ответа')} />}</div>)}</section></article>)}
    <section className="tectonic-print-reference"><Reference /></section>
  </div>;
}

function NotFound() {
  const { t } = useText();
  return <section className="tectonic-panel"><h1>{t('Topic not found', 'Тема не найдена')}</h1><p>{t('Choose a lesson from the topic list.', 'Выбери тему из списка.')}</p><Link className="tectonic-button" to={BASE}>{t('Back to overview', 'Вернуться к обзору')}</Link></section>;
}

export function GeographyTectonicsModule() {
  const store = useStudyStore();
  const { t, txt, ru } = useText();
  const location = useLocation();
  const navigate = useNavigate();
  const printing = location.pathname === `${BASE}/print`;
  const currentLesson = lessons.find(lesson => location.pathname === `${BASE}/${lesson.id}`);
  const nav = [
    { path: BASE, title: t('Overview', 'Обзор') },
    { path: `${BASE}/practice`, title: t('Question bank', 'Банк вопросов') },
    { path: `${BASE}/reference`, title: t('Revision guide', 'Памятка') },
    { path: `${BASE}/print`, title: t('Print all', 'Всё для печати') },
  ];
  useEffect(() => {
    document.title = `${currentLesson ? txt(currentLesson.title) + ' | ' : ''}${t('Tectonic hazards | MYP Revision', 'Тектонические опасности | MYP Revision')}`;
    return () => { document.title = 'MYP Revision Hub'; };
  }, [ru, currentLesson?.id]);
  return <div className="tectonic-course" lang={ru ? 'ru' : 'en'}>
    <div className="tectonic-course-top tectonic-no-print"><Link to="/">← {t('Study hub', 'Учебный хаб')}</Link><span>{t('Geography · Tectonic hazards', 'География · Тектонические опасности')}</span><Link to="/geography">{t('All geography', 'Вся география')} →</Link></div>
    <nav className="tectonic-topnav tectonic-no-print" aria-label={t('Tectonic hazards preparation', 'Подготовка по тектоническим опасностям')}>{nav.map(item => <NavLink key={item.path} to={item.path} end className={({ isActive }) => isActive ? 'active' : ''}>{item.title}</NavLink>)}</nav>
    <div className={`tectonic-layout ${printing ? 'tectonic-full-width' : ''}`}>
      {!printing && <aside className="tectonic-sidebar tectonic-no-print"><p className="tectonic-eyebrow">{t('THE STUDY ROUTE', 'МАРШРУТ ПОДГОТОВКИ')}</p><nav aria-label={t('Geography lessons', 'Темы по географии')}>{lessons.map((lesson, index) => <NavLink key={lesson.id} to={`${BASE}/${lesson.id}`} className={({ isActive }) => isActive ? 'active' : ''}><span className="tectonic-sidebar-number">{String(index + 1).padStart(2, '0')}</span><span>{txt(lesson.title)}</span>{store.state.completed.includes(lesson.id) && <Check size={15} aria-label={t('Reviewed', 'Повторено')} />}</NavLink>)}</nav><Link to={`${BASE}/practice`} className="tectonic-sidebar-practice"><ClipboardList size={18} />{t('Practise every topic', 'Практика по всем темам')}</Link></aside>}
      <main className="tectonic-main">
        {!printing && <label className="tectonic-mobile-select tectonic-no-print">{t('Jump to a topic', 'Перейти к теме')}<select value={currentLesson?.id ?? ''} onChange={event => navigate(event.target.value ? `${BASE}/${event.target.value}` : BASE)}><option value="">{t('Overview', 'Обзор')}</option>{lessons.map((lesson, index) => <option value={lesson.id} key={lesson.id}>{index + 1}. {txt(lesson.title)}</option>)}</select></label>}
        <p className={`tectonic-storage-note tectonic-no-print ${store.warning ? 'warning' : ''}`} role={store.warning ? 'status' : undefined}>{store.warning ? t('Browser storage is unavailable. You can keep studying, but answers and ticks will not survive closing this page.', 'Хранилище браузера недоступно. Ты можешь продолжать подготовку, но ответы и отметки не сохранятся после закрытия страницы.') : t('Answers and review ticks are saved in this browser.', 'Ответы и отметки о повторении сохраняются в этом браузере.')}</p>
        <Routes><Route index element={<Overview store={store} />} /><Route path="practice" element={<Practice store={store} />} /><Route path="reference" element={<Reference />} /><Route path="print" element={<PrintGuide />} /><Route path=":lessonId" element={<LessonPage store={store} />} /><Route path="*" element={<NotFound />} /></Routes>
      </main>
    </div>
  </div>;
}
