import {useTranslation} from 'react-i18next';
import {findFormulaTeaching,formulaById,type FormulaTeaching as Entry} from '../../content/formulaTeaching';
import { useOnce } from './OnceScope';
import './formula-teaching.css';
export function FormulaTeaching({id,text='',showFormula=true}:{id?:string;text?:string;showFormula?:boolean}){
 const {i18n}=useTranslation();const lang=i18n.language.startsWith('ru')?'ru':'en';const ru=lang==='ru';
 const found:Entry[]=id?[formulaById(id)].filter((item):item is Entry=>Boolean(item)):findFormulaTeaching(text);
 const first=useOnce(found.map(entry=>`formula:${entry.id}`));
 const entries=found.filter((_,index)=>first[index]);
 if(!entries.length)return null;
 return <div className="formula-teaching-list">{entries.map(entry=><section className="formula-teaching" data-formula-id={entry.id} key={entry.id} aria-label={entry.title[lang]}><h4>{entry.title[lang]}</h4>{showFormula&&<p className="formula-teaching-expression">{entry.formula[lang]}</p>}<dl><div><dt>{ru?'Обозначения и единицы':'Symbols and units'}</dt><dd>{entry.symbols[lang]}</dd></div><div><dt>{ru?'Смысл':'Meaning'}</dt><dd>{entry.meaning[lang]}</dd></div><div><dt>{ru?'Разобранный пример':'Worked example'}</dt><dd>{entry.example[lang]}</dd></div><div><dt>{ru?'Когда применять':'When to use it'}</dt><dd>{entry.condition[lang]}</dd></div></dl></section>)}</div>;
}
