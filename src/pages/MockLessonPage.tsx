import {FormulaTeaching} from '../components/content/FormulaTeaching';
import { RichText } from '../components/content/RichText';
import { SubjectScope } from '../components/content/SubjectScope';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import data from '../data/mocks.json';
import { DefinitionSupport } from '../components/content/DefinitionSupport';
import type { DefinitionReview } from '../components/content/definitionReview';
import { MeasurementComparison } from '../components/content/MeasurementComparison';
// Sources of a topic (school lists, public framework pages) stay in mocks.json for the authors
// and are not shown to the student.
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
  return <SubjectScope subject={lesson.subject}><Container className="max-w-3xl mx-auto px-4 md:px-6 py-10 [overflow-wrap:anywhere]" lang={lang}>
    <Link to="/mocks" className="text-sm underline">← {t('nav.mocks')}</Link>
    <h1 className="font-serif text-3xl md:text-4xl mt-7 mb-6">{lesson.title[lang]}</h1>
    <div className="space-y-4 leading-relaxed">{lesson.paragraphs.map((p,i)=><section key={i}><RichText text={p[lang]}/><FormulaTeaching text={p[lang]}/></section>)}</div>
    {reviews.length > 0 && <section className="space-y-5 mt-8"><h2 className="font-serif text-2xl">{ru ? 'Понятия и различия' : 'Concepts and distinctions'}</h2>{reviews.map((review, index) => <DefinitionSupport key={index} review={review} language={lang}/>)}</section>}
    {lesson.id === 'science-investigation' && <MeasurementComparison language={lang}/>}
    <section className="bg-bg-secondary border border-border rounded-xl p-6 my-8">
      <h2 className="font-serif text-2xl mb-4">{ru ? 'Попробуй самостоятельно' : 'Try it yourself'}</h2>
      <p className="mb-5">{lesson.question[lang]}</p>
      <details className="border-t border-border pt-4"><summary className="cursor-pointer font-medium">{ru ? 'Разбор и ответ' : 'Worked solution'}</summary><RichText className="mt-4 leading-relaxed" text={lesson.answer[lang]}/></details>
    </section>
    <section className="mb-8"><h2 className="font-serif text-xl mb-3">{ru ? 'Проверь себя' : 'Self-check'}</h2><ul className="list-disc pl-5 space-y-2">{lesson.checks.map((c,i)=><li key={i}>{c[lang]}</li>)}</ul></section>
  </Container></SubjectScope>;
}
