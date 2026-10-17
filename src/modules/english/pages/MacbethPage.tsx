import { useTranslation } from 'react-i18next';
import { ScrollText, AlertCircle } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { Link, useSearchParams } from 'react-router-dom';
import scenes from '../data/macbeth-scenes.json';
import './macbeth.css';

export function MacbethPage() {
  const { t, i18n } = useTranslation('english');
  const [params, setParams] = useSearchParams();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const ru = lang === 'ru';
  const rawAct = Number(params.get('act') || 1);
  const act = Number.isInteger(rawAct) && rawAct >= 1 && rawAct <= 5 ? rawAct : 1;
  const themes = (t('macbethPage.themes.items', { returnObjects: true }) as string[]) ?? [];
  const quotes = (t('macbethPage.keyQuotes.items', { returnObjects: true }) as string[]) ?? [];

  return (
    <div className="macbeth-study" lang={lang}>
      <style media="print" data-macbeth-print-layout>{'@page { size: A4; margin: 12mm; }'}</style>
      <TopicHero title={t('macbethPage.title')} intro={t('macbethPage.intro')} icon={<ScrollText size={28} />} />

      <div className="mt-6 flex items-start gap-3 bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-clay)', borderLeftWidth: '4px' }}>
        <AlertCircle size={18} className="text-accent-clay shrink-0 mt-0.5" />
        <p className="text-sm">{t('macbethPage.notice')}</p>
      </div>

      <SectionHeading>{t('macbethPage.themes.title')}</SectionHeading>
      <ul className="space-y-2">
        {themes.map((item, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{item}</li>
        ))}
      </ul>

      <SectionHeading>{ru ? 'Изученные сцены: прочитай, объясни, примени' : 'Studied scenes: read, explain, apply'}</SectionHeading>
      <p>{ru ? 'Школьный архив за 9 класс задаёт 27 эпизодов. Ниже — авторские объяснения четырёх направлений анализа в каждом и новые задания с разбором. Это прежний материал, а не подтверждённый перечень для нового экзамена. Возможны другие доказательные интерпретации.' : 'The archived G9 booklet establishes 27 scene contexts. Each receives four authored analysis focuses and a new task with an explained response. This is previous study, not a confirmed checklist for a new exam. Other evidence-based interpretations are possible.'}</p>
      <p className="my-4"><Link className="underline" to="/grade9/e-macbeth-3-2">{ru ? 'Отдельный разбор 3.2: команды задания, ecstasy и шесть упражнений →' : 'Passage workshop 3.2: command terms, ecstasy and six tasks →'}</Link></p>
      <nav aria-label={ru ? 'Акты Macbeth' : 'Macbeth acts'} className="flex flex-wrap gap-3 my-6 print:hidden">
        {[1,2,3,4,5].map(n => <button key={n} className="border border-border rounded px-4 py-2" aria-pressed={act === n} onClick={() => setParams(previous => { const next = new URLSearchParams(previous); next.set('act', String(n)); return next; })}>{ru ? 'Акт' : 'Act'} {n}</button>)}
        <button className="border border-border rounded px-4 py-2" onClick={() => window.print()}>{ru ? 'Печать выбранного акта' : 'Print selected act'}</button>
      </nav>
      <h2 className="text-2xl my-5">{ru ? 'Акт' : 'Act'} {act}</h2>
      {scenes.filter(scene => scene.act === act).map(scene => <section className="macbeth-scene border border-border rounded-lg p-4 md:p-6 my-6" key={scene.id} id={scene.id}>
        <h3 className="text-xl mb-3">{act}.{scene.scene} · {scene.title[lang]}</h3>
        <p className="mb-4">{scene.context[lang]}</p>
        {scene.analysis.map((item, index) => <div className="macbeth-focus my-4" key={item.anchor}>
          <h4 className="font-semibold">{index + 1}. {item.focus[lang]}</h4>
          <p className="text-sm mt-1"><a href={item.source} target="_blank" rel="noreferrer" className="underline">{ru ? 'Опорные слова первичного текста' : 'Primary-text anchor'}: <span lang="en">{item.anchor}</span> ↗</a></p>
          <p className="mt-2">{item.text[lang]}</p>
        </div>)}
        <div className="macbeth-task border-t border-border pt-4 mt-5">
          <h4 className="font-semibold">{ru ? 'Попробуй самостоятельно' : 'Try independently'}</h4>
          <p className="my-2">{scene.practice.prompt[lang]}</p>
          <p className="text-sm text-text-secondary print:hidden">{ru ? 'Сначала напиши ответ на бумаге. Затем открой пример и проверь связь тезиса с доказательством; формулировку не нужно воспроизводить дословно.' : 'Write your response on paper first. Then check how the example connects its claim to evidence; you do not need to reproduce its wording.'}</p>
          <details className="mt-3"><summary>{ru ? 'Возможный ответ и объяснение' : 'Possible response and explanation'}</summary><p className="mt-3">{scene.practice.answer[lang]}</p></details>
          <div className="macbeth-print-answer hidden"><h4>{ru ? 'Возможный ответ' : 'Possible response'}</h4><p>{scene.practice.answer[lang]}</p></div>
        </div>
      </section>)}
      <aside className="border border-border rounded p-4 my-6">
        <h3 className="font-semibold mb-3">{ru ? 'Как обоснованы объяснения' : 'How the explanations are grounded'}</h3>
        <p>{ru ? 'Сюжетные детали и опорные выражения проверены по английскому первичному тексту Folger; ссылка в каждом блоке открывает точную сцену. Разборы написаны для этого пособия. Русские объяснения формулируют ход рассуждения самостоятельно; исследование 2023 года ниже даёт критический контекст вины, самообмана и власти, но не подтверждает напрямую каждую деталь сцены. Оценки героев и разные трактовки не выдаются за бесспорные факты.' : 'Plot details and anchors were checked against the primary English Folger text; each block links to its precise scene. The close readings were authored for this guide. Russian explanations develop the reasoning in natural Russian; the 2023 Russian study below supplies critical context on guilt, self-deception and power, rather than direct support for every scene detail. Character judgements and interpretations are distinguished from established facts.'}</p>
        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li><a className="underline" href="https://www.folger.edu/explore/shakespeares-works/macbeth/read/" target="_blank" rel="noreferrer">Shakespeare, Macbeth · Folger Shakespeare Library</a></li>
          <li><a className="underline" href="https://www.shakespeareswords.com/Public/GlossaryHeadword.aspx?headwordId=9610" target="_blank" rel="noreferrer">David &amp; Ben Crystal · ecstasy · Macbeth III.ii.22</a> — {ru ? 'словарное значение; нумерация строк зависит от издания' : 'historical word sense; line numbering varies by edition'}</li>
          <li><a className="underline" href="https://philology-journal.ru/article/phil20230316/fulltext" target="_blank" rel="noreferrer">Стрельникова, Чернова, Тарасова (2023), с. 2107–2109</a> — {ru ? 'самостоятельное русское исследование: контекст, не построчный комментарий' : 'original Russian critical context, not a line-by-line commentary'}</li>
        </ul>
        <p className="mt-3">{ru ? 'Для сравнения с фильмом сначала посмотри конкретную версию и запиши время фрагмента. Крупность плана, музыка, паузы и жесты не выводятся из печатной пьесы. Здесь не утверждается, что школьный клип был просмотрен.' : 'For a film comparison, first watch the specified version and record the clip time. Shot size, music, pauses and gestures cannot be inferred from the printed play. This guide does not claim that the school clip has been viewed.'}</p>
      </aside>

      <SectionHeading>{t('macbethPage.keyQuotes.title')}</SectionHeading>
      <ul className="space-y-2">
        {quotes.map((q, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm font-serif italic">{q}</li>
        ))}
      </ul>
    </div>
  );
}
