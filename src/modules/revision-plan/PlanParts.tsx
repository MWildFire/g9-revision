import {Link} from 'react-router-dom';
import {partCompletionKey,partMinutes,type PlanPart,type PlanState} from './model';

const phaseNames={read:{en:'Read',ru:'Объяснение'},example:{en:'Model',ru:'Образец'},attempt:{en:'Independent attempt',ru:'Самостоятельная работа'},check:{en:'Check and correct',ru:'Сверка и исправление'}};
export function PlanParts({parts,state,lang,onToggle,print=false}:{parts:PlanPart[];state:PlanState;lang:'en'|'ru';onToggle?:(id:string)=>void;print?:boolean}){
 return <ol className="space-y-3 mt-3" data-plan-parts>{parts.map(part=>{
  const checked=!!state.completed[partCompletionKey(part)];
  const phases=Object.entries(part.phaseMinutes).map(([phase,minutes])=>`${phaseNames[phase as keyof typeof phaseNames][lang]} ${minutes}`).join(' · ');
  return <li className="border-l-2 border-border pl-3 break-inside-avoid" key={part.id} data-plan-part={part.id}>
   <label className="flex gap-3 items-start">{print?<span>{checked?'[x]':'[ ]'}</span>:onToggle&&<input type="checkbox" className="mt-1 shrink-0" checked={checked} onChange={()=>onToggle(part.id)}/>}
    <span><span className="block font-medium">{part.title[lang]}</span><span className="block text-sm">{phases} · {partMinutes(part)} {lang==='ru'?'мин':'min'}</span></span>
   </label>
   <p className="text-sm mt-1">{part.instruction[lang]}</p>
   <Link className="text-sm underline" to={part.route}>{lang==='ru'?'Открыть эту порцию →':'Open this portion →'}</Link>
  </li>;
 })}</ol>;
}
