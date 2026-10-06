import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BookOpen, Check, ArrowRight, Printer, Sigma } from 'lucide-react';
import { lessons, questions, glossary, tierLabels, commandTerms } from './content';
import { parseStudyState, STUDY_KEY, type StudyState } from './model';
import type { Lesson, Tier } from './types';
import { CoordinateVisual, InequalityVisual, VennVisual } from './Visuals';
import './math-term-one.css';

const BASE = '/math-term-1-2026';
const tiers: Tier[] = ['start', 'core', 'recap', 'extended'];
type Store = { state: StudyState; warning: boolean; toggle: (id: string) => void; answer: (id: string, value: string) => void };

function useStudy(): Store {
  const [initial] = useState(() => {
    try { return { state: parseStudyState(localStorage.getItem(STUDY_KEY)), warning: false }; }
    catch { return { state: parseStudyState(null), warning: true }; }
  });
  const [state, setState] = useState(initial.state);
  const [warning, setWarning] = useState(initial.warning);
  useEffect(() => { try { localStorage.setItem(STUDY_KEY, JSON.stringify(state)); setWarning(false); } catch { setWarning(true); } }, [state]);
  return { state, warning,
    toggle: id => setState(previous => ({ ...previous, reviewed: previous.reviewed.includes(id) ? previous.reviewed.filter(item => item !== id) : [...previous.reviewed, id] })),
    answer: (id, value) => setState(previous => ({ ...previous, answers: { ...previous.answers, [id]: value } })),
  };
}

function TierBadge({ tier }: { tier: Tier }) { return <span className={`mathrev-badge ${tier}`}>{tierLabels[tier]}</span>; }

function Overview({ store }: { store: Store }) {
  const [tier, setTier] = useState('core');
  const core = lessons.filter(lesson => lesson.tier === 'core');
  const reviewed = core.filter(lesson => store.state.reviewed.includes(lesson.id)).length;
  const shown = lessons.filter(lesson => tier === 'all' || lesson.tier === tier);
  return <>
    <section className="mathrev-hero"><div><p className="mathrev-eyebrow">Grade 10 · Term 1 · English study guide</p><h1>Think clearly.<br/>Show your mathematics.</h1><p className="mathrev-lead">Assessment 1 revision: understand the language, follow the reasoning, then try it yourself.</p><div className="mathrev-actions"><Link className="mathrev-button" to={`${BASE}/proof-and-generalisation`}>Start the core lessons <ArrowRight size={17}/></Link><Link className="mathrev-button secondary" to={`${BASE}/practice`}>Try the practice</Link></div></div><div className="mathrev-hero-art" aria-hidden="true"><span>Δy / Δx</span><svg viewBox="0 0 240 150"><path d="M20 130H225M35 145V15" stroke="currentColor" strokeWidth="1"/><path d="M48 110L200 30M48 110H200V30" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="48" cy="110" r="5" fill="currentColor"/><circle cx="200" cy="30" r="5" fill="currentColor"/></svg><span>A ∩ B &nbsp; · &nbsp; ∴</span></div></section>
    <div className="mathrev-stats"><div><strong>6</strong><span>Standard core topics</span></div><div><strong>9</strong><span>Previous-study recaps</span></div><div><strong>38</strong><span>Original practice questions</span></div></div>
    <section className="mathrev-panel mathrev-scope"><h2>What to prioritise</h2><p>The school’s <strong>G10 Standard Assessment 1</strong> checklist was checked on 6 October 2026. Start with the six current objectives below. The source separately lists <strong>Previous studies</strong> and marks three Term 1 topics <strong>Extended</strong>; those remain separate here.</p><p>This is an original learning guide based on that scope. The checklist does not establish a test date, paper format or mark allocation.</p><Link to={`${BASE}/checklist`}>See the complete scope and revision checklist →</Link></section>
    <section className="mathrev-routine"><div><h2>A focused revision route</h2><ol><li>Read the <Link to={`${BASE}/mathematical-language`}>language guide</Link> and command terms.</li><li>Work through the six Standard core topics.</li><li>Attempt each question before revealing its explanation.</li><li>Use Previous studies to revisit gaps; open Extended if assigned.</li></ol></div><div className="mathrev-progress"><strong>{reviewed} / {core.length}</strong><span>Core topics reviewed</span><progress value={reviewed} max={core.length} aria-label="Core topics reviewed"/><small>A review tick records your work, not a test score.</small></div></section>
    <div className="mathrev-section-head"><h2>Your lessons</h2><label>Show topics<select aria-label="Show topics" value={tier} onChange={event => setTier(event.target.value)}>{tiers.map(value => <option key={value} value={value}>{tierLabels[value]}</option>)}<option value="all">All topics</option></select></label></div>
    <p className="mathrev-small" role="status">Showing {shown.length} of {lessons.length} lessons.</p>
    <div className="mathrev-grid">{shown.map(lesson => <Link className="mathrev-card" key={lesson.id} to={`${BASE}/${lesson.id}`}><div className="mathrev-card-top"><TierBadge tier={lesson.tier}/>{store.state.reviewed.includes(lesson.id) && <span className="mathrev-check"><Check size={15}/>Reviewed</span>}</div><h3>{lesson.title}</h3><p>{lesson.intro}</p><span className="mathrev-card-link">Open lesson <ArrowRight size={16}/></span></Link>)}</div>
    <div className="mathrev-bottom-links"><Link to={`${BASE}/reference`}><BookOpen size={18}/>English glossary & command terms</Link><Link to={`${BASE}/print`}><Printer size={18}/>Printable study guide</Link></div>
  </>;
}

function LessonBody({ lesson, print = false }: { lesson: Lesson; print?: boolean }) {
  return <>
    <section className="mathrev-panel mathrev-goals"><h2>By the end, I can…</h2><ul>{lesson.goals.map(goal => <li key={goal}>{goal}</li>)}</ul></section>
    {lesson.visual === 'coordinate' && <CoordinateVisual/>}{lesson.visual === 'inequality' && <InequalityVisual/>}{lesson.visual === 'venn' && <VennVisual fixed={print}/>}
    <section className="mathrev-terms"><h2>Know the words</h2><dl>{lesson.terms.map(term => <div key={term.term}><dt>{term.term}</dt><dd><p>{term.meaning}</p><span>{term.example}</span></dd></div>)}</dl></section>
    {lesson.sections.map(section => <section className="mathrev-prose" key={section.title}><h2>{section.title}</h2><p>{section.text}</p>{section.formula && <div className="mathrev-formula">{section.formula}</div>}</section>)}
    <section className="mathrev-worked"><p className="mathrev-eyebrow">Worked example</p><h2>{lesson.example.prompt}</h2><ol>{lesson.example.steps.map((step, index) => <li key={index}>{step}</li>)}</ol></section>
    <section className="mathrev-pitfalls"><h2>Common mistakes</h2><ul>{lesson.pitfalls.map(pitfall => <li key={pitfall}>{pitfall}</li>)}</ul></section>
    {lesson.drFrost && <p className="mathrev-small">School checklist · Dr Frost topic codes: {lesson.drFrost}. Use the school-provided access route for those exercises.</p>}
  </>;
}

function QuestionCard({ question, store }: { question: typeof questions[number]; store: Store }) {
  const lesson = lessons.find(item => item.id === question.lessonId)!;
  return <article className="mathrev-question"><div className="mathrev-question-meta"><Link to={`${BASE}/${lesson.id}`}>{lesson.title}</Link><TierBadge tier={lesson.tier}/></div><h3>{question.prompt}</h3><label htmlFor={`answer-${question.id}`}>Your working and answer</label><textarea id={`answer-${question.id}`} rows={3} value={store.state.answers[question.id] ?? ''} onChange={event => store.answer(question.id, event.target.value)} placeholder="Try it first. Explain each important step."/><details className="mathrev-hint"><summary>Need a hint?</summary><p>{question.hint}</p></details><details className="mathrev-solution"><summary>Check the explanation</summary><ol>{question.steps.map((step, index) => <li key={index}>{step}</li>)}</ol></details></article>;
}

function LessonPage({ store }: { store: Store }) {
  const { lessonId } = useParams();
  const index = lessons.findIndex(item => item.id === lessonId);
  const lesson = lessons[index];
  if (!lesson) return <NotFound/>;
  const reviewed = store.state.reviewed.includes(lesson.id);
  return <article><header className="mathrev-lesson-heading"><TierBadge tier={lesson.tier}/><h1>{lesson.title}</h1><p className="mathrev-lead">{lesson.intro}</p></header><LessonBody lesson={lesson}/><section className="mathrev-practice-section"><h2>Your turn</h2><p>Try both questions before checking the explanations. Correct your working after comparing it.</p>{questions.filter(question => question.lessonId === lesson.id).map(question => <QuestionCard key={question.id} question={question} store={store}/>)}</section><button className="mathrev-button" type="button" aria-pressed={reviewed} onClick={() => store.toggle(lesson.id)}><Check size={18}/>{reviewed ? 'Reviewed — mark for another look' : 'Mark this topic reviewed'}</button><nav className="mathrev-pagination" aria-label="Adjacent lessons"><Link to={index > 0 ? `${BASE}/${lessons[index - 1].id}` : BASE}>← {index > 0 ? lessons[index - 1].title : 'Overview'}</Link><Link to={index < lessons.length - 1 ? `${BASE}/${lessons[index + 1].id}` : `${BASE}/practice`}>{index < lessons.length - 1 ? lessons[index + 1].title : 'Practice'} →</Link></nav></article>;
}

function Practice({ store }: { store: Store }) {
  const [tier, setTier] = useState('core');
  const [topic, setTopic] = useState('all');
  const [search, setSearch] = useState('');
  const [unanswered, setUnanswered] = useState(false);
  const shown = questions.filter(question => (tier === 'all' || question.tier === tier) && (topic === 'all' || question.lessonId === topic) && (!unanswered || !store.state.answers[question.id]?.trim()) && `${question.prompt} ${lessons.find(lesson => lesson.id === question.lessonId)?.title}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <><p className="mathrev-eyebrow">Try → check → improve</p><h1>Short practice</h1><p className="mathrev-lead">Original questions with hints and complete explanations. The Standard core is selected first.</p><p>Answers stay in this browser. Use paper for diagrams and longer calculations; record your conclusion here if useful.</p><div className="mathrev-filters"><label>Scope<select aria-label="Scope" value={tier} onChange={event => { setTier(event.target.value); setTopic('all'); }}>{tiers.map(value => <option key={value} value={value}>{tierLabels[value]}</option>)}<option value="all">All scopes</option></select></label><label>Topic<select aria-label="Topic" value={topic} onChange={event => setTopic(event.target.value)}><option value="all">All topics in this scope</option>{lessons.filter(lesson => tier === 'all' || lesson.tier === tier).map(lesson => <option key={lesson.id} value={lesson.id}>{lesson.title}</option>)}</select></label><label>Search questions<input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="For example: gradient"/></label><label className="mathrev-checkbox"><input type="checkbox" checked={unanswered} onChange={event => setUnanswered(event.target.checked)}/>Only unanswered</label></div><p role="status" className="mathrev-small">Showing {shown.length} of {questions.length} questions.</p>{shown.length ? shown.map(question => <QuestionCard key={question.id} question={question} store={store}/>) : <div className="mathrev-panel"><p>No questions match these filters.</p><button className="mathrev-button secondary" onClick={() => { setTier('all'); setTopic('all'); setSearch(''); setUnanswered(false); }}>Clear filters</button></div>}</>;
}

function Reference() {
  const [search, setSearch] = useState('');
  const shown = glossary.filter(term => `${term.term} ${term.meaning} ${term.example}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <><p className="mathrev-eyebrow">Mathematics in plain English</p><h1>Words & command terms</h1><p className="mathrev-lead">Use the precise term, understand what it means and see it in a small example.</p><section className="mathrev-panel"><h2>Common MYP mathematics prompts</h2><p>These are plain-English study explanations, not verbatim official definitions or a marking rubric. Follow the wording and instructions on your actual question.</p><div className="mathrev-command-grid">{commandTerms.map(([term, meaning, example]) => <div key={term}><h3>{term}</h3><p>{meaning}</p><small>{example}</small></div>)}</div></section><section className="mathrev-glossary"><h2>Search the glossary</h2><label>Term, meaning or example<input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="For example: feasible region"/></label><p role="status" className="mathrev-small">{shown.length} of {glossary.length} terms</p><dl>{shown.map(term => <div key={`${term.lessonId}-${term.term}`}><dt>{term.term}</dt><dd><p>{term.meaning}</p><p className="mathrev-term-example">{term.example}</p><Link to={`${BASE}/${term.lessonId}`}>Study this in context →</Link><TierBadge tier={term.tier}/></dd></div>)}</dl>{!shown.length && <p>No matching terms. Try a shorter word or clear the search.</p>}</section></>;
}

function Checklist({ store }: { store: Store }) {
  return <><p className="mathrev-eyebrow">Scope checked · 6 October 2026</p><h1>Revision checklist</h1><p className="mathrev-lead">Check each learning goal aloud, then attempt the lesson’s questions. Mark a topic reviewed when you have worked through it.</p><section className="mathrev-panel"><h2>How this guide matches the source</h2><p>The current school material is titled <strong>G10 standard topic list – Assessment 1</strong>. Its main objectives are proofs/generalizations; coordinate geometry, linear and simultaneous equations, number-line inequalities; and sets/Venn diagrams. A separate heading lists <strong>Previous studies</strong>. The Term 1 table explicitly labels linear programming, nonlinear inequalities and perpendicular lines <strong>Extended</strong>.</p><p>The school’s Key Vocabulary 1 is incorporated across the lessons and glossary. The language starter is an added study aid. Practice questions and explanations are newly written.</p><p>Book references in the source: <strong>MYP Book 4–5 Standard, chapter 2, pp. 104–136</strong> and <strong>chapter 4, pp. 220–233</strong>. Use your own school copy. The source does not independently confirm a test date or paper format.</p></section>{tiers.map(tier => <section key={tier} className="mathrev-checklist-group"><h2>{tierLabels[tier]}</h2>{lessons.filter(lesson => lesson.tier === tier).map(lesson => <article className="mathrev-checklist-item" key={lesson.id}><label className="mathrev-checkbox"><input type="checkbox" checked={store.state.reviewed.includes(lesson.id)} onChange={() => store.toggle(lesson.id)}/><strong>{lesson.title} reviewed</strong></label><ul>{lesson.goals.map(goal => <li key={goal}>{goal}</li>)}</ul><Link to={`${BASE}/${lesson.id}`}>Open lesson & practice →</Link></article>)}</section>)}</>;
}

function PrintGuide() {
  const [answers, setAnswers] = useState(false);
  const [tier, setTier] = useState('core');
  const shown = lessons.filter(lesson => tier === 'all' || lesson.tier === tier);
  return <><div className="mathrev-print-toolbar mathrev-panel"><h1>Print your study guide</h1><label>Include lessons<select aria-label="Include lessons" value={tier} onChange={event => setTier(event.target.value)}>{tiers.map(value => <option key={value} value={value}>{tierLabels[value]}</option>)}<option value="all">All 19 lessons</option></select></label><label className="mathrev-checkbox"><input type="checkbox" checked={answers} onChange={event => setAnswers(event.target.checked)}/>Include practice explanations</label><button type="button" className="mathrev-button" onClick={() => window.print()}><Printer size={17}/>Print / save as PDF</button><p>Worked examples are included. Practice explanations are optional. Your typed answers are not included.</p></div><header className="mathrev-print-title"><h1>Mathematics · Term 1</h1><p>{tier === 'all' ? 'Complete guide' : tierLabels[tier as Tier]} · Scope checked 6 October 2026</p><p>Original study material. Read the Standard, Previous studies and Extended labels carefully.</p></header>{shown.map(lesson => <article key={lesson.id} className="mathrev-print-lesson"><TierBadge tier={lesson.tier}/><h2 className="mathrev-print-lesson-title">{lesson.title}</h2><p>{lesson.intro}</p><LessonBody lesson={lesson} print/><h2>Practice</h2>{lesson.questions.map((question, index) => <div className="mathrev-print-question" key={index}><h3>{index + 1}. {question.prompt}</h3>{answers ? <ol>{question.steps.map((step, stepIndex) => <li key={stepIndex}>{step}</li>)}</ol> : <div className="mathrev-writing-lines" aria-label="Space for written working"/>}</div>)}</article>)}</>;
}

function NotFound() { return <><h1>Topic not found</h1><p>Choose a lesson from the overview.</p><Link to={BASE}>Back to mathematics overview →</Link></>; }

export function MathTermOneModule() {
  const store = useStudy();
  const location = useLocation();
  const navigate = useNavigate();
  const active = location.pathname.slice(BASE.length + 1);
  const print = active === 'print';
  useEffect(() => { document.title = `${lessons.find(lesson => lesson.id === active)?.title ?? 'Mathematics · Term 1'} | MYP Study Hub`; }, [active]);
  return <div className={`mathrev ${print ? 'mathrev-print-view' : ''}`} lang="en"><a className="mathrev-skip" href="#mathrev-content" onClick={event => { event.preventDefault(); document.getElementById('mathrev-content')?.focus(); }}>Skip to mathematics content</a><div className="mathrev-back"><Link to="/">← Study Hub</Link><Link to="/math">All mathematics materials</Link></div><div className="mathrev-layout"><aside className="mathrev-sidebar"><Link to={BASE} className="mathrev-brand"><Sigma size={24}/>Mathematics<span>Term 1 · Assessment 1</span></Link><nav aria-label="Mathematics lessons">{tiers.map(tier => <div key={tier}><p>{tierLabels[tier]}</p>{lessons.filter(lesson => lesson.tier === tier).map(lesson => <NavLink key={lesson.id} to={`${BASE}/${lesson.id}`}>{lesson.title}{store.state.reviewed.includes(lesson.id) && <Check size={14} aria-label="Reviewed"/>}</NavLink>)}</div>)}</nav></aside><div className="mathrev-main"><nav className="mathrev-topnav" aria-label="Mathematics sections">{[['', 'Overview'], ['/practice', 'Practice'], ['/reference', 'Words & commands'], ['/checklist', 'Checklist'], ['/print', 'Print']].map(([path, label]) => <NavLink end key={path} to={`${BASE}${path}`}>{label}</NavLink>)}</nav><label className="mathrev-mobile-select">Jump to a lesson<select aria-label="Jump to a lesson" value={lessons.some(lesson => lesson.id === active) ? active : ''} onChange={event => navigate(event.target.value ? `${BASE}/${event.target.value}` : BASE)}><option value="">Choose a lesson…</option>{tiers.map(tier => <optgroup key={tier} label={tierLabels[tier]}>{lessons.filter(lesson => lesson.tier === tier).map(lesson => <option key={lesson.id} value={lesson.id}>{lesson.title}</option>)}</optgroup>)}</select></label>{store.warning && <p className="mathrev-storage-warning" role="status">Browser storage is unavailable. You can study and type answers, but they may not be kept after leaving this page.</p>}<main id="mathrev-content" tabIndex={-1}><Routes><Route index element={<Overview store={store}/>}/><Route path="practice" element={<Practice store={store}/>}/><Route path="reference" element={<Reference/>}/><Route path="checklist" element={<Checklist store={store}/>}/><Route path="print" element={<PrintGuide/>}/><Route path=":lessonId" element={<LessonPage store={store}/>}/><Route path="*" element={<NotFound/>}/></Routes></main><p className="mathrev-storage-note">Study progress and practice answers are saved only in this browser. A review tick is not a mark.</p></div></div></div>;
}
