import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

const CHAMBER_IDS = ['ra', 'rv', 'la', 'lv'] as const;
const VESSEL_IDS = ['vc', 'pa', 'pv', 'ao'] as const;
const CHAMBERS = {
  ra: { x:40, y:265, h:50, initials:'RA', oxygenated:false },
  rv: { x:40, y:165, h:55, initials:'RV', oxygenated:false },
  la: { x:290, y:165, h:55, initials:'LA', oxygenated:true },
  lv: { x:290, y:265, h:50, initials:'LV', oxygenated:true },
} as const;
const VESSELS = {
  vc: { x:40, y:360, h:35, initials:'VC', oxygenated:false },
  pa: { x:40, y:90, h:35, initials:'PA', oxygenated:false },
  pv: { x:290, y:90, h:35, initials:'PV', oxygenated:true },
  ao: { x:290, y:360, h:35, initials:'AO', oxygenated:true },
} as const;
// Blood-flow order, not anatomical vessel placement. Arrow ends meet each node.
const FLOW = [
  { from:'body', to:'vc', d:'M170 442 H95 V395', oxygenated:false },
  { from:'vc', to:'ra', d:'M95 360 V315', oxygenated:false },
  { from:'ra', to:'rv', d:'M95 265 V220', oxygenated:false },
  { from:'rv', to:'pa', d:'M95 165 V125', oxygenated:false },
  { from:'pa', to:'lungs', d:'M95 90 V32 H170', oxygenated:false },
  { from:'lungs', to:'pv', d:'M270 32 H345 V90', oxygenated:true },
  { from:'pv', to:'la', d:'M345 125 V165', oxygenated:true },
  { from:'la', to:'lv', d:'M345 220 V265', oxygenated:true },
  { from:'lv', to:'ao', d:'M345 315 V360', oxygenated:true },
  { from:'ao', to:'body', d:'M345 395 V442 H270', oxygenated:true },
];

export function HeartDiagram() {
  const { t, i18n } = useTranslation('biology');
  const ru=i18n.language.startsWith('ru');
  const [active, setActive] = useState<string | null>(null);
  const marker=useId().replace(/:/g,'');
  const group=(id:string)=>CHAMBER_IDS.includes(id as typeof CHAMBER_IDS[number])?'chambers':'vessels';
  const label=(id:string)=>id==='body'?(ru?'Ткани тела':'Body tissues'):id==='lungs'?(ru?'Лёгкие':'Lungs'):t(`simulations.heartDiagram.${group(id)}.${id}.label`);
  const node=(id:string,c:{x:number;y:number;h:number;initials:string;oxygenated:boolean})=>{
    const colour=c.oxygenated?'#ad3838':'#537d9e';
    return <g key={id} role="button" tabIndex={0} aria-label={label(id)} aria-pressed={active===id}
      onMouseEnter={()=>setActive(id)} onFocus={()=>setActive(id)} onClick={()=>setActive(id)}
      onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();setActive(id);}} style={{cursor:'pointer'}}>
      <rect x={c.x} y={c.y} width={110} height={c.h} rx={8} fill={colour} fillOpacity={active === id ? 0.35 : 0.15} stroke={colour} strokeWidth={active===id?3:1.5}/>
      <text x={c.x+55} y={c.y+c.h/2+5} textAnchor="middle" fontSize={16} fontWeight={600} fill="var(--color-text-primary)">{c.initials}</text>
    </g>;
  };
  return <SimulationPanel title={t('simulations.heartDiagram.title')} description={t('simulations.heartDiagram.description')}>
    <p className="text-sm text-text-secondary mb-3">{ru?'Схема движения крови: расположение сосудов, размеры камер и толщина их стенок условны. Левая сторона сердца показана справа.':'Blood-flow schematic: vessel positions, chamber sizes and wall thicknesses are not anatomical. The left side of the heart is shown on the right.'}</p>
    <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4 items-start">
      <div className="definition-diagram-viewport min-w-0" role="region" tabIndex={0} aria-label={t('simulations.heartDiagram.title')}>
        <svg style={{minWidth:440,maxWidth:'none'}} role="group" aria-label={t('simulations.heartDiagram.title')} viewBox="0 0 440 480" className="w-full bg-bg-tertiary/30 rounded-md border border-border">
          <title>{t('simulations.heartDiagram.title')}</title><desc>{t('simulations.heartDiagram.description')}</desc>
          <defs>{[false,true].map(oxygenated=><marker key={String(oxygenated)} id={`${marker}-${oxygenated?'red':'blue'}`} viewBox="0 0 10 10" refX={9} refY={5} markerWidth={7} markerHeight={7} orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill={oxygenated?'#ad3838':'#537d9e'}/></marker>)}</defs>
          {FLOW.map(edge=><path key={edge.from} data-heart-flow={`${edge.from}-${edge.to}`} d={edge.d} fill="none" stroke={edge.oxygenated?'#ad3838':'#537d9e'} strokeWidth={2.5} markerEnd={`url(#${marker}-${edge.oxygenated?'red':'blue'})`}><title>{label(edge.from)} → {label(edge.to)}</title></path>)}
          {CHAMBER_IDS.map(id=>node(id,CHAMBERS[id]))}
          {VESSEL_IDS.map(id=>node(id,VESSELS[id]))}
          {[{id:'lungs',y:10},{id:'body',y:420}].map(({id,y})=><g key={id}><rect x={170} y={y} width={100} height={44} rx={8} fill="var(--color-bg-secondary)" stroke="var(--color-text-secondary)"/><text x={220} y={y+27} textAnchor="middle" fontSize={13} fill="var(--color-text-primary)">{label(id)}</text></g>)}
          <text x={106} y={246} fontSize={12} fill="var(--color-text-secondary)">AV</text><text x={356} y={246} fontSize={12} fill="var(--color-text-secondary)">AV</text>
          <text x={106} y={150} fontSize={12} fill="var(--color-text-secondary)">SL</text><text x={356} y={342} fontSize={12} fill="var(--color-text-secondary)">SL</text>
        </svg>
      </div>
      <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm min-h-[200px]">
        <div aria-live="polite">{active?<><p className="font-medium text-base mb-1">{label(active)}</p><p className="text-text-secondary">{t(`simulations.heartDiagram.${group(active)}.${active}.desc`)}</p></>:<p className="text-text-muted italic">{t('simulations.heartDiagram.hoverHint')}</p>}</div>
        <div className="mt-4 pt-3 border-t border-border space-y-2 text-xs text-text-muted">
          <p><strong>RA</strong> {label('ra')}, <strong>RV</strong> {label('rv')}</p>
          <p><strong>LA</strong> {label('la')}, <strong>LV</strong> {label('lv')}</p>
          <p><strong>VC</strong> {label('vc')}, <strong>PA</strong> {label('pa')}, <strong>PV</strong> {label('pv')}, <strong>AO</strong> {label('ao')}</p>
          <p><strong>AV</strong> {ru?'предсердно-желудочковые клапаны: трёхстворчатый справа, митральный слева.':'atrioventricular valves: tricuspid on the right, mitral on the left.'}</p>
          <p><strong>SL</strong> {ru?'полулунные клапаны: у выхода в лёгочную артерию и аорту.':'semilunar valves: at the exits into the pulmonary artery and aorta.'}</p>
          <p>{ru?'Клапаны препятствуют обратному току крови.':'Valves prevent blood flowing backwards.'}</p>
          <p className="text-[#537d9e]">{t('simulations.heartDiagram.deoxygenated')}</p><p className="text-[#ad3838]">{t('simulations.heartDiagram.oxygenated')}</p>
          <p>{t('simulations.heartDiagram.doubleCirc')}</p>
        </div>
      </div>
    </div>
    <p className="text-sm mt-3">{ru?'Ткани тела → полые вены → правое предсердие → правый желудочек → лёгочная артерия → лёгкие → лёгочные вены → левое предсердие → левый желудочек → аорта → ткани тела.':'Body tissues → venae cavae → right atrium → right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta → body tissues.'}</p>
    <DefinitionSupport review={t('simulations.heartDiagram.review',{returnObjects:true}) as DefinitionReview}/>
  </SimulationPanel>;
}
