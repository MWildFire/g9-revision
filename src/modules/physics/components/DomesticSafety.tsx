import {useTranslation} from 'react-i18next';
import {PracticeQuestions} from '../../../components/content/PracticeQuestions';
import {domesticSafety as d,DOMESTIC_SAFETY_QUESTIONS} from '../data/domesticSafety';

export function DomesticSafety({includePractice=true}:{includePractice?:boolean}){
  const {i18n}=useTranslation();const lang=i18n.language.startsWith('ru')?'ru':'en';const ru=lang==='ru';
  return <section id="domestic-conductors" className="my-8 space-y-4 rounded-lg border border-border bg-bg-secondary p-5">
    <h2 className="font-serif text-2xl">{d.title[lang]}</h2><p>{d.scope[lang]}</p>
    <div className="overflow-x-auto print:overflow-visible" tabIndex={0} role="region" aria-label={ru?'Рабочие и защитные проводники':'Working and protective conductors'}><table className="w-full min-w-[32rem] print:min-w-0 text-sm"><colgroup><col style={{width:'15%'}}/><col style={{width:'22%'}}/><col style={{width:'63%'}}/></colgroup><thead><tr><th className="text-left p-2">{ru?'Провод':'Conductor'}</th><th className="text-left p-2">{ru?'Цвет':'Colour'}</th><th className="text-left p-2">{ru?'Функция и условие':'Role and condition'}</th></tr></thead><tbody>{d.conductors.map(c=><tr key={c.id} className="border-t border-border"><th className="p-2 text-left">{c.id}</th><td className="p-2">{c.colour[lang]}</td><td className="p-2">{c.role[lang]}</td></tr>)}</tbody></table></div>
    <figure><div className="overflow-x-auto print:overflow-visible"><svg role="img" aria-label={d.caption[lang]} viewBox="0 0 700 340" className="w-full min-w-[36rem] print:min-w-0 rounded border border-border bg-bg-primary" style={{color:'var(--color-text-primary)'}}>
      <rect x="440" y="70" width="210" height="150" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="545" y="95" textAnchor="middle" fill="currentColor" fontSize="17">{ru?'Металлический корпус':'Metal case'}</text>
      <path d="M50 130 H180 M220 130 H280 M320 130 H480 M600 130 H660 V260 H50" fill="none" stroke="currentColor" strokeWidth="3"/>
      <rect x="180" y="119" width="40" height="22" fill="var(--color-bg-secondary)" stroke="currentColor" strokeWidth="2"/>
      <text x="200" y="112" textAnchor="middle" fill="currentColor" fontSize="17">F</text>
      <path d="M280 130 L320 130" stroke="currentColor" strokeWidth="3"/><circle cx="280" cy="130" r="3" fill="currentColor"/><circle cx="320" cy="130" r="3" fill="currentColor"/>
      <text x="300" y="112" textAnchor="middle" fill="currentColor" fontSize="17">S</text>
      <rect x="480" y="115" width="120" height="30" fill="var(--color-bg-secondary)" stroke="currentColor" strokeWidth="2"/>
      <text x="540" y="136" textAnchor="middle" fill="currentColor" fontSize="16">{ru?'Нагрузка':'Load'}</text>
      <path d="M50 300 H545 V220" fill="none" stroke="currentColor" strokeWidth="3"/>
      <circle cx="545" cy="220" r="4" fill="currentColor"/>
      <path d="M460 130 V200 H545 V220" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 5"/>
      <text x="470" y="184" fill="currentColor" fontSize="15">{ru?'Пробой':'Fault'}</text>
      <text x="20" y="136" fill="currentColor" fontSize="20">L</text><text x="20" y="266" fill="currentColor" fontSize="20">N</text><text x="12" y="306" fill="currentColor" fontSize="20">PE</text>
      <text x="58" y="50" fill="currentColor" fontSize="17">{ru?'F: предохранитель; S: выключатель (замкнут)':'F: fuse; S: switch (closed)'}</text>
    </svg></div><figcaption className="text-sm mt-2">{d.caption[lang]}</figcaption></figure>
    <p>{d.fault[lang]}</p><h3 className="font-semibold">{ru?'Разобранный пример':'Worked comparison'}</h3><p>{d.worked[lang]}</p>
    {includePractice&&<PracticeQuestions questions={DOMESTIC_SAFETY_QUESTIONS}/>}
    <details className="text-sm"><summary>{ru?'Источники и границы модели':'Sources and model limits'}</summary><ul>{d.sources.map(s=><li key={s.url} className="my-2"><a className="underline" href={s.url} target="_blank" rel="noreferrer">{s.title}</a><p>{s.note[lang]}</p></li>)}</ul></details>
  </section>;
}
