import {FormulaTeaching} from '../../components/content/FormulaTeaching';
import {atomicFormulaIds} from '../physics-september/formulaPlacement';
import { lazy, Suspense, type ComponentType } from 'react';
import { useTranslation } from 'react-i18next';
import { loadSubjectTranslations } from '../../i18n';
import { MockLessonPage } from '../../pages/MockLessonPage';
import { getPack } from '../math-term-one/localisation';
import { LessonBody as MathLessonBody } from '../math-term-one/MathTermOneModule';
import { LessonBody as GeographyLessonBody, visualVariant } from '../geography-tectonics/GeographyTectonicsModule';
import { lessons as geographyLessons } from '../geography-tectonics/lessons';
import { lessons as atomicLessons } from '../physics-september/lessons';
import { VisualLab } from '../physics-september/Visuals';
import { RichText } from '../../components/content/RichText';

const page = (subject: string, loader: () => Promise<Record<string, unknown>>, name: string) => lazy(async () => {
  const [, module] = await Promise.all([loadSubjectTranslations(subject), loader()]);
  return { default: module[name] as ComponentType };
});
const pages = {
  energy: page('physics', () => import('../physics/pages/ForcesEnergyPage'), 'ForcesEnergyPage'),
  forces: page('physics', () => import('../physics/pages/ForceMotionPage'), 'ForceMotionPage'),
  electric: page('physics', () => import('../physics/pages/ElectricityPage'), 'ElectricityPage'),
  waves: page('physics', () => import('../physics/pages/WavesOpticsPage'), 'WavesOpticsPage'),
  atoms: page('chemistry', () => import('../chemistry/pages/AtomsPeriodicPage'), 'AtomsPeriodicPage'),
  bonds: page('chemistry', () => import('../chemistry/pages/BondingPage'), 'BondingPage'),
  quantity: page('chemistry', () => import('../chemistry/pages/StoichiometryPage'), 'StoichiometryPage'),
  changes: page('chemistry', () => import('../chemistry/pages/ReactionsPage'), 'ReactionsPage'),
  acids: page('chemistry', () => import('../chemistry/pages/AcidsBasesPage'), 'AcidsBasesPage'),
  chemEnergy: page('chemistry', () => import('../chemistry/pages/EnergyPage'), 'EnergyPage'),
  rates: page('chemistry', () => import('../chemistry/pages/RatesPage'), 'RatesPage'),
  air: page('chemistry', () => import('../chemistry/pages/AtmospherePage'), 'AtmospherePage'),
  chemExtra: page('chemistry', () => import('../chemistry/pages/ChemistryExtrasPage'), 'ChemistryExtrasPage'),
  cells: page('biology', () => import('../biology/pages/CellsPage'), 'CellsPage'),
  body: page('biology', () => import('../biology/pages/BodySystemsPage'), 'BodySystemsPage'),
  plants: page('biology', () => import('../biology/pages/PhotosynthesisPage'), 'PhotosynthesisPage'),
  disease: page('biology', () => import('../biology/pages/ImmunePage'), 'ImmunePage'),
  evolution: page('biology', () => import('../biology/pages/GeneticsPage'), 'GeneticsPage'),
  environment: page('biology', () => import('../biology/pages/EcologyPage'), 'EcologyPage'),
  biotech: page('biology', () => import('../biology/pages/BiologyExtrasPage'), 'BiologyExtrasPage'),
  rivers: page('geography', () => import('../geography/pages/RiversPage'), 'RiversPage'),
  tourism: page('geography', () => import('../geography/pages/TourismPage'), 'TourismPage'),
  resources: page('geography', () => import('../geography/pages/ResourceReliancePage'), 'ResourceReliancePage'),
  atmosphere: page('geography', () => import('../geography/pages/AtmosphericHazardsPage'), 'AtmosphericHazardsPage'),
  fieldwork: page('geography', () => import('../geography/pages/FieldworkPage'), 'FieldworkPage'),
  statistics: page('math', () => import('../math/pages/StatsProbPage'), 'StatsProbPage'),
  textTypes: page('english', () => import('../english/pages/TextTypesPage'), 'TextTypesPage'),
  devices: page('english', () => import('../english/pages/DevicesPage'), 'DevicesPage'),
  reading: page('english', () => import('../english/pages/ReadingPage'), 'ReadingPage'),
  frGrammar: page('french', () => import('../french/pages/GrammarPage'), 'GrammarPage'),
  frTenses: page('french', () => import('../french/pages/TensesPage'), 'TensesPage'),
  frText: page('french', () => import('../french/pages/TextTypesPage'), 'TextTypesPage'),
  frVocab: page('french', () => import('../french/pages/VocabPage'), 'VocabPage'),
  arabic: page('arabic', () => import('../arabic/pages/GrammarPage'), 'GrammarPage'),
};
const reading: Record<string, (keyof typeof pages)[]> = {
  'p-energy':['energy'], 'p-forces':['forces','energy'], 'p-electric':['electric'], 'p-waves':['waves'],
  'c-atoms':['atoms'], 'c-bonds':['bonds'], 'c-quantity':['quantity'], 'c-changes':['changes','acids','chemExtra'],
  'c-energy':['chemEnergy'], 'c-rates':['rates','chemExtra'], 'c-air':['air'],
  'b-cells':['cells'], 'b-nutrition':['body'], 'b-transport':['body'], 'b-respiration':['body'],
  'b-plants':['plants'], 'b-disease':['disease'], 'b-evolution':['evolution'], 'b-environment':['environment'],
  'b-earlier':['body','evolution'], 'b-nervous':['body'], 'b-hormones':['body','biotech'], 'b-biotech':['biotech'],
  'g-previous':['rivers','tourism','resources','atmosphere','fieldwork'], 'm-data':['statistics'],
  'e-analysis':['reading','devices'], 'e-creative':['textTypes'], 'e-purpose':['textTypes'],
  'f-language':['frGrammar','frTenses'], 'f-write':['frText','frVocab'], 'a-language':['arabic'],
};
const names: Record<string,[string,string]> = {
  energy:['Energy, work and forces','Энергия, работа и силы'], forces:['Motion and Newton’s laws','Движение и законы Ньютона'], electric:['Electric circuits','Электрические цепи'], waves:['Waves and optics','Волны и оптика'],
  atoms:['Atoms and the periodic table','Атомы и периодическая система'], bonds:['Bonding and structure','Связи и строение'], quantity:['Chemical quantities','Количество вещества'], changes:['Chemical reactions','Химические реакции'], acids:['Acids, bases and salts','Кислоты, основания и соли'], chemExtra:['Redox, electrochemistry and equilibrium','ОВР, электрохимия и равновесие'], chemEnergy:['Energy changes','Энергия реакций'], rates:['Reaction rates','Скорость реакций'], air:['Atmosphere','Атмосфера'],
  cells:['Cells and transport','Клетки и мембранный транспорт'], body:['Human body systems','Системы органов человека'], plants:['Photosynthesis and plant transport','Фотосинтез и транспорт у растений'], disease:['Health and immunity','Здоровье и иммунитет'], evolution:['Inheritance and evolution','Наследственность и эволюция'], environment:['Ecology and human impacts','Экология и влияние человека'], biotech:['Biotechnology and regulation','Биотехнологии и регуляция'],
  rivers:['Rivers','Реки'], tourism:['Tourism','Туризм'], resources:['Resources','Ресурсы'], atmosphere:['Atmospheric hazards','Атмосферные опасности'], fieldwork:['Fieldwork','Полевые исследования'], statistics:['Statistics and probability','Статистика и вероятность'],
  textTypes:['Text types and examples','Типы текстов и примеры'], reading:['Reading and analysis','Чтение и анализ'], devices:['Writer’s choices','Средства выразительности'], frGrammar:['French grammar','Французская грамматика'], frTenses:['French tenses','Времена во французском'], frText:['French text types','Французские типы текстов'], frVocab:['French vocabulary','Французская лексика'], arabic:['Arabic grammar','Арабская грамматика'],
};
export function LibraryTheory({id,selected}: {id:string;selected?:string[]}) {
  const {i18n} = useTranslation(); const lang = i18n.language.startsWith('ru') ? 'ru' : 'en'; const ru = lang === 'ru';
  if (id === 'p-atom') return <div className="nov-library">{atomicLessons.filter(l=>!selected||selected.includes(l.id)).map((lesson,index) => <details key={lesson.id} open={index===0}><summary>{lesson.title[lang]}</summary><p>{lesson.intro[lang]}</p>{lesson.visual && <VisualLab kind={lesson.visual}/ >}{lesson.sections.map((s,i)=><section key={i}><h3>{s.title[lang]}</h3><RichText text={s.text[lang]}/>{atomicFormulaIds(lesson.id,i).map(id=><FormulaTeaching key={id} id={id}/>)}</section>)}{lesson.examples.map((e,i)=><section key={i}><h3>{e.question[lang]}</h3><ol>{e.steps.map((s,j)=><li key={j}>{s[lang]}</li>)}</ol></section>)}<ul>{lesson.pitfalls.map((p,i)=><li key={i}>{p[lang]}</li>)}</ul></details>)}</div>;
  if (id === 'g-tectonics') {
    // Each diagram (kind + variant) and its swipe hint appear once per page; the full volcano diagram (case study) repeats forms and anatomy.
    const shownVisuals = new Set<string>(); let hintShown = false;
    return <div className="tectonic nov-library">{geographyLessons.map((lesson,index)=>{
      const kind = lesson.visual; const variant = visualVariant(lesson.id); const keys = kind === 'volcano' && variant === 'full' ? ['volcano:forms', 'volcano:anatomy'] : kind ? [`${kind}:${variant}`] : []; const showVisual = keys.length > 0 && keys.every(k => !shownVisuals.has(k)); if (showVisual) keys.forEach(k => shownVisuals.add(k));
      const showHint = showVisual && !hintShown; if (showHint) hintShown = true;
      return <details key={lesson.id} open={index===0}><summary>{lesson.title[lang]}</summary><GeographyLessonBody lesson={lesson} showVisual={showVisual} showHint={showHint}/></details>;
    })}</div>;
  }
  if (['m-core','m-algebra','m-geometry'].includes(id)) {
    const pack = getPack(lang); const chosen = pack.lessons.filter(l => selected ? selected.includes(l.id) : id === 'm-core' ? ['start','core'].includes(l.tier) : id === 'm-algebra' ? ['functions','quadratic-graphs','quadratic-equations','sequences','formulae-and-fractions','proportion-and-graphs'].includes(l.id) : ['right-triangles','trigonometry','circles'].includes(l.id));
    return <div className="mathrev nov-library">{chosen.filter(l=>!selected||selected.includes(l.id)).map((lesson,index)=><details key={lesson.id} open={index===0}><summary>{lesson.title}</summary><p>{lesson.intro}</p><MathLessonBody lesson={lesson} embedded/>{(!selected?lesson.questions:[]).map((q,i)=><section key={i}><h3>{q.prompt}</h3><details><summary>{ru?'Разбор решения':'Worked solution'}</summary><ol>{q.steps.map((s,j)=><li key={j}>{s}</li>)}</ol></details></section>)}</details>)}</div>;
  }
  if (id === 'p-matter' || id.startsWith('s-')) return <MockLessonPage embeddedId={id === 'p-matter' ? 'states-thermal' : 'science-investigation'}/>;
  return <div className="nov-library">{(reading[id]??[]).map((key,index)=>{ const Component=pages[key]; return <details key={key} open={index===0}><summary>{names[key][ru?1:0]}</summary><Suspense fallback={<p role="status">{ru?'Загружаю урок…':'Loading lesson…'}</p>}><Component/></Suspense></details>; })}</div>;
}
