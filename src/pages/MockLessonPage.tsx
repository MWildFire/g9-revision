import {FormulaTeaching} from '../components/content/FormulaTeaching';
import { RichText } from '../components/content/RichText';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import data from '../data/mocks.json';
import { DefinitionSupport } from '../components/content/DefinitionSupport';
import type { DefinitionReview } from '../components/content/definitionReview';
import { MeasurementComparison } from '../components/content/MeasurementComparison';
export function MockLessonPage({ embeddedId }: { embeddedId?: string } = {}) {
  const params = useParams();
  const lessonId = embeddedId ?? params.lessonId;
  const { i18n, t } = useTranslation('common');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const ru = lang === 'ru';
  const lesson = data.lessons.find(l=>l.id===lessonId);
  const Container = embeddedId ? 'div' : 'main';
  if (!lesson) return <Container className="max-w-3xl mx-auto p-8"><p>{ru ? 'Блок не найден.' : 'Lesson not found.'}</p><Link to="/mocks" className="underline">{t('nav.mocks')}</Link></Container>;
  const reviews = ('definitionReviews' in lesson ? lesson.definitionReviews : []) as DefinitionReview[];
  const showProvenance = !('hideProvenance' in lesson && lesson.hideProvenance);
  return <Container className="max-w-3xl mx-auto px-4 md:px-6 py-10 [overflow-wrap:anywhere]" lang={lang}>
    <Link to="/mocks" className="text-sm underline">← {t('nav.mocks')}</Link>
    {showProvenance && <p className="text-xs text-text-secondary mt-7">{lesson.scope === 'g9' ? (ru ? 'Основание: школьный Grade 9' : 'Source: school Grade 9') : lesson.scope === 'g9-10' ? (ru ? 'Основание: недатированный список Grade 9+10' : 'Source: undated Grade 9+10 list') : (ru ? 'Общая подготовка MYP' : 'General MYP preparation')}</p>}
    <h1 className="font-serif text-3xl md:text-4xl mt-3 mb-6">{lesson.title[lang]}</h1>
    {showProvenance && <p className="text-sm text-text-secondary mb-7">{ru ? 'Авторский учебный материал. Актуальный ноябрьский состав тем указан в плане подготовки.' : 'Original study material. Current November scope is recorded in the daily preparation plan.'}</p>}
    <div className="space-y-4 leading-relaxed">{lesson.paragraphs.map((p,i)=><section key={i}><RichText text={p[lang]}/><FormulaTeaching text={p[lang]}/></section>)}</div>
    {reviews.length > 0 && <section className="space-y-5 mt-8"><h2 className="font-serif text-2xl">{ru ? 'Понятия и различия' : 'Concepts and distinctions'}</h2>{reviews.map((review, index) => <DefinitionSupport key={index} review={review} language={lang}/>)}</section>}
    {lesson.id === 'science-investigation' && <MeasurementComparison language={lang}/>}
    <section className="bg-bg-secondary border border-border rounded-xl p-6 my-8">
      <h2 className="font-serif text-2xl mb-4">{ru ? 'Попробуйте самостоятельно' : 'Try it yourself'}</h2>
      <p className="mb-5">{lesson.question[lang]}</p>
      <details className="border-t border-border pt-4"><summary className="cursor-pointer font-medium">{ru ? 'Разбор и ответ' : 'Worked solution'}</summary><RichText className="mt-4 leading-relaxed" text={lesson.answer[lang]}/></details>
    </section>
    <section className="mb-8"><h2 className="font-serif text-xl mb-3">{ru ? 'Проверьте себя' : 'Self-check'}</h2><ul className="list-disc pl-5 space-y-2">{lesson.checks.map((c,i)=><li key={i}>{c[lang]}</li>)}</ul></section>
    {showProvenance && <section className="border-t border-border pt-5"><h2 className="text-sm font-medium mb-2">{ru ? 'Основание выбора темы' : 'Why this topic is included'}</h2>
      {lesson.sources.map(id=>{const s=data.sources.find(s=>s.id===id)!;return <p key={id} className="text-sm mb-2">{'url' in s ? <a href={s.url} target="_blank" rel="noreferrer" className="underline">{s.title}</a> : s.title}</p>;})}
      <p className="text-xs text-text-secondary">{ru ? 'Список источников подтверждает тему или навык. Объяснения и примеры составлены для этого сайта; это не официальный markscheme.' : 'Sources establish the topic or skill. Explanations and examples were written for this site and are not official markschemes.'}</p>
    </section>}
  </Container>;
}
