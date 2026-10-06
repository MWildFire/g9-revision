import { DefinitionSupport } from '../../components/content/DefinitionSupport';
import type { Term } from './types';
import { DefinitionDiagram } from './DefinitionDiagrams';

export function TermDefinition({ term, language = 'en', illustration = false }: { term: Term; language?: 'en' | 'ru'; illustration?: boolean }) {
  const local = language === 'ru' ? term.ru : term;
  const other = language === 'ru' ? term : term.ru;
  return <><dt>{local.term}<span className="mathrev-translation-label" lang={language === 'en' ? 'ru' : 'en'}>{other.term}</span></dt><dd>
    <p>{local.meaning}</p><p className="mathrev-term-example"><strong>{language === 'ru' ? 'Пример: ' : 'Example: '}</strong>{local.example}</p>
    <p className="mathrev-source-note">{language === 'ru'
      ? term.russianEvidence === 'independently-checked' ? 'Авторские определения и примеры; понятие также сверено с указанным русским учебным источником.' : 'Авторская русская адаптация проверенного английского материала; это не цитата из русского учебника.'
      : term.russianEvidence === 'independently-checked' ? 'Original explanations and examples; The concept was also checked in Russian against the listed Russian educational source.' : 'Russian text is an authored adaptation of the checked English material, not a quotation from a Russian textbook.'}</p>
    <DefinitionSupport review={term.review} language={language}/>
    <details className="mathrev-other-language"><summary>{language === 'en' ? 'По-русски' : 'In English'}</summary><div lang={language === 'en' ? 'ru' : 'en'}><p>{other.meaning}</p><p>{other.example}</p><p>{term.review.contrast[language === 'en' ? 'ru' : 'en']}</p></div></details>
    {illustration && term.diagram && <details className="mathrev-term-illustration"><summary>{language === 'ru' ? 'Схема с подписями' : 'Labelled illustration'}</summary><DefinitionDiagram kind={term.diagram} language={language}/></details>}
  </dd></>;
}
