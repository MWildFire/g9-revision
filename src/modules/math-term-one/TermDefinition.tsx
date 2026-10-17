import {FormulaTeaching} from '../../components/content/FormulaTeaching';
import { DefinitionSupport } from '../../components/content/DefinitionSupport';
import type { Term } from './types';
import { DefinitionDiagram } from './DefinitionDiagrams';

export function TermDefinition({ term, language = 'en', illustration = false }: { term: Term; language?: 'en' | 'ru'; illustration?: boolean }) {
  const local = language === 'ru' ? term.ru : term;
  const other = language === 'ru' ? term : term.ru;
  return <><dt>{local.term}<span className="mathrev-translation-label" lang={language === 'en' ? 'ru' : 'en'}>{other.term}</span></dt><dd>
    <p>{local.meaning}</p><p className="mathrev-term-example"><strong>{language === 'ru' ? 'Пример: ' : 'Example: '}</strong>{local.example}</p>
    {/* The term's canonical concept selects the card; locale only changes its teaching text. */}
    <FormulaTeaching text={term.meaning + ' ' + term.example}/>
    <DefinitionSupport review={term.review} language={language} formulaContext={[term.review?.explanation?.en,term.review?.contrast?.en,term.review?.model?.en].filter(Boolean).join(' ')}/>
    <details className="mathrev-other-language"><summary>{language === 'en' ? 'In Russian' : 'По-английски'}</summary><div lang={language === 'en' ? 'ru' : 'en'}><p>{other.meaning}</p><p>{other.example}</p>{term.review.contrast && <p>{term.review.contrast[language === 'en' ? 'ru' : 'en']}</p>}</div></details>
    {illustration && term.diagram && <details className="mathrev-term-illustration"><summary>{language === 'ru' ? 'Схема с подписями' : 'Labelled illustration'}</summary><DefinitionDiagram kind={term.diagram} language={language}/></details>}
  </dd></>;
}
