import { useId } from 'react';
import { mathMockGapsEn } from './content';
import { mathMockGapsRu } from './russian';
import { mathGapSources } from './sources';
import type { Figure, Table } from './types';

function DataTable({table}:{table:Table}) {
  return <div className="overflow-x-auto my-4"><table className="w-full border-collapse text-sm">
    <caption className="text-left font-semibold mb-2">{table.caption}</caption>
    <thead><tr>{table.headings.map(h=><th scope="col" className="border border-border p-2 text-left" key={h}>{h}</th>)}</tr></thead>
    <tbody>{table.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=>j===0?<th scope="row" className="border border-border p-2 text-left" key={j}>{cell}</th>:<td className="border border-border p-2" key={j}>{cell}</td>)}</tr>)}</tbody>
  </table></div>;
}

const captions:Record<Figure,{en:string;ru:string}>={
  pyramid:{en:'Regular square pyramid: a = 6 cm; perpendicular h = 4 cm; face slant s = 5 cm. Dashed height ends at the base centre; slant ends at an edge midpoint. Schematic, not to scale.',ru:'Правильная четырёхугольная пирамида: a = 6 см, высота h = 4 см, апофема s = 5 см. Пунктирная высота идёт к центру основания, апофема — к середине стороны. Схема не в масштабе.'},
  cone:{en:'Right cone: r = 3 cm, perpendicular h = 4 cm, slant s = 5 cm. Schematic, not to scale.',ru:'Прямой конус: r = 3 см, высота h = 4 см, образующая s = 5 см. Схема не в масштабе.'},
  sphere:{en:'Sphere with centre O and radius 3 cm; the dashed ellipse indicates an equatorial section in perspective.',ru:'Сфера с центром O и радиусом 3 см; пунктирный эллипс условно показывает экваториальное сечение.'},
  composite:{en:'A hemisphere of radius 3 cm is attached to a cylinder of radius 3 cm and height 4 cm. The dashed join is internal; the bottom is exposed. Schematic, not to scale.',ru:'Полушарие радиуса 3 см присоединено к цилиндру того же радиуса и высоты 4 см. Пунктирный стык внутри тела, нижнее основание снаружи. Схема не в масштабе.'},
  sss:{en:'AB = AD, CB = CD and AC is shared. Correspondence A ↔ A, B ↔ D, C ↔ C. The proof uses these equalities, not the apparent symmetry.',ru:'AB = AD, CB = CD, AC — общая сторона. Соответствие A ↔ A, B ↔ D, C ↔ C. Доказательство опирается на равенства, а не на видимую симметрию.'},
  similarity:{en:'D is inside AB and E inside AC; DE is parallel to BC. AB = 12 cm, AD = 8 cm, AC = 9 cm. Correspondence ADE ~ ABC. Schematic, not to scale.',ru:'D внутри AB, E внутри AC, DE ∥ BC. AB = 12 см, AD = 8 см, AC = 9 см. Соответствие ADE ~ ABC. Схема не в масштабе.'},
  dilation:{en:'Centre C(1, −1), point P(3, 2), image P′(5, 5), scale factor 2. The three points lie on the same ray from C.',ru:'Центр C(1; −1), точка P(3; 2), образ P′(5; 5), коэффициент 2. Точки лежат на одном луче из C.'},
  tree:{en:'Three red and two blue counters, two draws without replacement. First branches R 3/5 and B 2/5; after R: R 2/4, B 2/4; after B: R 3/4, B 1/4. Paths RR, RB, BR, BB.',ru:'Три красные и две синие фишки, два выбора без возвращения. Сначала К 3/5, С 2/5; после К: К 2/4, С 2/4; после С: К 3/4, С 1/4. Пути КК, КС, СК, СС.'},
  scatter:{en:'Points (1,2), (2,4), (3,6) and y = 2x. The mean point is (2,4). Axes show data coordinates; the line is displayed only around the observed range.',ru:'Точки (1;2), (2;4), (3;6) и y = 2x. Средняя точка (2;4). Оси показывают координаты; прямая изображена вблизи наблюдаемого диапазона.'},
};
export function MathGapFigure({kind,language}:{kind:Figure;language:'en'|'ru'}) {
 const id=useId().replace(/:/g,'');const ru=language==='ru';const unit=ru?'см':'cm';const red=ru?'К':'R',blue=ru?'С':'B';
 const label=(x:number,y:number,t:string)=><text x={x} y={y} fill="#233d50" fontSize="17">{t}</text>;
 return <figure className="my-4 border border-border rounded-lg p-3 print:break-inside-avoid">
 <svg viewBox="0 0 520 320" className="w-full h-auto max-w-xl mx-auto" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
 <title id={`${id}-title`}>{kind}</title><desc id={`${id}-desc`}>{captions[kind][language]}</desc>
 <g stroke="#385f78" strokeWidth="2" fill="none">
 {kind==='pyramid'&&<><path d="M100 240L230 285L420 215L290 180ZM100 240L255 35L230 285M255 35L420 215M255 35L290 180"/><path d="M255 35V232M255 35L325 250M255 232L325 250" strokeDasharray="6 5"/><path d="M255 220l12 4v12"/>{label(265,140,`h = 4 ${unit}`)}{label(330,155,`s = 5 ${unit}`)}{label(280,300,`a = 6 ${unit}`)}{label(270,255,`3 ${unit}`)}</>}
 {kind==='cone'&&<><ellipse cx="260" cy="260" rx="150" ry="35"/><path d="M110 260L260 35L410 260M260 35V260M260 260H410"/><path d="M260 247h13v13"/>{label(270,150,`h = 4 ${unit}`)}{label(356,145,`s = 5 ${unit}`)}{label(300,283,`r = 3 ${unit}`)}</>}
 {kind==='sphere'&&<><circle cx="260" cy="160" r="120"/><ellipse cx="260" cy="160" rx="120" ry="35" strokeDasharray="6 5"/><path d="M260 160H380"/>{label(240,150,'O')}{label(285,150,`r = 3 ${unit}`)}</>}
 {kind==='composite'&&<><path d="M130 140A130 110 0 0 1 390 140V270M130 140V270"/><ellipse cx="260" cy="270" rx="130" ry="30"/><ellipse cx="260" cy="140" rx="130" ry="30" strokeDasharray="6 5"/><path d="M260 140H390"/>{label(280,130,`r = 3 ${unit}`)}{label(400,225,`h = 4 ${unit}`)}{label(160,310,ru?'Дно включено':'Bottom included')}</>}
 {kind==='sss'&&<><path d="M80 160L250 35L420 160L250 285ZM80 160H420"/>{label(55,165,'A')}{label(245,25,'B')}{label(430,165,'C')}{label(245,310,'D')}{label(90,80,'AB = AD')}{label(310,80,'CB = CD')}{label(190,150,ru?'AC общая':'AC shared')}</>}
 {kind==='similarity'&&<><path d="M110 35L55 275H470ZM73 195H350"/>{label(95,25,'A')}{label(30,295,'B')}{label(475,295,'C')}{label(48,195,'D')}{label(355,193,'E')}{label(5,105,'AD = 8')}{label(185,215,'DE ∥ BC')}{label(280,125,'AC = 9')}{label(90,302,'AB = 12')}</>}
 {kind==='dilation'&&<><path d="M60 225H475M90 285V20M140 265L340 25" stroke="#87969b"/>{[[140,265],[240,145],[340,25]].map(([x,y],i)=><circle cx={x} cy={y} r="5" fill="#385f78" key={i}/>)}{label(155,280,'C(1,−1)')}{label(250,155,'P(3,2)')}{label(345,45,'P′(5,5)')}{label(420,288,'x')}{label(55,30,'y')}</>}
 {kind==='tree'&&<><path d="M30 160L175 85L360 35M175 85L360 125M30 160L175 235L360 205M175 235L360 290"/>{label(60,100,`${red} 3/5`)}{label(60,245,`${blue} 2/5`)}{label(215,43,`${red} 2/4`)}{label(215,128,`${blue} 2/4`)}{label(215,202,`${red} 3/4`)}{label(215,295,`${blue} 1/4`)}{label(385,40,red+red)}{label(385,130,red+blue)}{label(385,210,blue+red)}{label(385,295,blue+blue)}</>}
 {kind==='scatter'&&<><path d="M110 260H470M110 260V25" stroke="#87969b"/><path d="M150 230L390 50"/>{[[190,200],[270,140],[350,80]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="5" fill="#385f78"/>{label(x-5,293,String(i+1))}{label(40,y+5,String((i+1)*2))}</g>)}{label(360,60,'y = 2x')}{label(280,160,ru?'средняя (2;4)':'mean (2,4)')}{label(475,288,'x')}{label(45,23,'y')}</>}
 </g></svg><figcaption className="text-sm mt-2">{captions[kind][language]}</figcaption></figure>;
}

export function MathMockGaps({lessonId,language}:{lessonId:string;language:'en'|'ru'}) {
 const blocks=(language==='ru'?mathMockGapsRu:mathMockGapsEn)[lessonId];const ru=language==='ru';
 if(!blocks)return null;
 return <section className="my-8 space-y-6" lang={language} aria-label={ru?'Разобранные примеры и самостоятельная практика':'Worked examples and independent practice'}>
 {blocks.map(block=>{
  const sources=<ul className="list-disc pl-5 space-y-2">{block.sourceKeys.map(key=>{const source=mathGapSources[key];return <li key={key}><a className="underline" href={source.url} lang={source.language} target="_blank" rel="noreferrer">{source.title}</a> ({source.language.toUpperCase()})<p data-qa-allow-repeat="shared-bibliographic-locator">{source.section}</p></li>;})}</ul>;
  return <article className="border border-border rounded-xl p-4 md:p-6" key={block.id} id={`math-gap-${block.id}`}>
   <h3 className="font-serif text-xl mb-3">{block.title}</h3><p>{block.explanation}</p>
   {block.figure&&<MathGapFigure kind={block.figure} language={language}/>}{block.table&&<DataTable table={block.table}/>}
   <h4 className="font-semibold mt-4">{ru?'Разобранный пример':'Worked example'}</h4><ol className="list-decimal pl-5 space-y-2 mt-2">{block.worked.map((step,i)=><li key={i}>{step}</li>)}</ol>
   <h4 className="font-semibold mt-5">{ru?'Теперь самостоятельно':'Now try independently'}</h4><p>{block.attempt}</p>{block.attemptTable&&<DataTable table={block.attemptTable}/>}
   <details className="mt-3 border-t border-border pt-3"><summary className="cursor-pointer font-semibold">{ru?'Разбор и проверка':'Solution and checks'}</summary><ol className="list-decimal pl-5 space-y-2 mt-2">{block.solution.map((step,i)=><li key={i}>{step}</li>)}</ol></details>
   <details className="mt-4 text-sm print:hidden"><summary className="cursor-pointer">{ru?'Источники и границы применения':'Sources and scope'}</summary>{sources}</details>
   <div className="hidden print:block text-sm mt-4"><h4>{ru?'Источники и границы применения':'Sources and scope'}</h4>{sources}</div>
  </article>;
 })}</section>;
}
