import { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lesson } from './types';

type Visual = NonNullable<Lesson['visual']>;
type Boundary = 'constructive' | 'subduction' | 'collision' | 'conservative';
const boundaryKeys: Boundary[] = ['constructive', 'subduction', 'collision', 'conservative'];

export function TectonicVisual({ kind, fixed = false }: { kind: Visual; fixed?: boolean }) {
  const { i18n } = useTranslation();
  const t = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  const uid = useId().replace(/:/g, '');
  const arrow = `${uid}-arrow`;
  const [boundary, setBoundary] = useState<Boundary>(boundaryKeys.includes(kind as Boundary) ? kind as Boundary : 'constructive');
  const isBoundary = boundaryKeys.includes(kind as Boundary);
  const selected = isBoundary ? fixed ? kind as Boundary : boundary : kind;
  const labels: Record<Visual, string> = {
    earth: t('Inside Earth', 'Внутреннее строение Земли'),
    constructive: t('Divergent / constructive', 'Расхождение / конструктивная'),
    subduction: t('Convergent / subduction', 'Сближение / субдукция'),
    collision: t('Continental collision', 'Коллизия континентов'),
    conservative: t('Transform / conservative', 'Сдвиг / консервативная'),
    earthquake: t('From a fault to surface shaking', 'От разлома к сотрясению поверхности'),
    volcano: t('Volcano anatomy and hazard pathways', 'Строение вулкана и пути опасных потоков'),
    risk: t('Why the same hazard can have different impacts', 'Почему одна опасность приводит к разным последствиям'),
  };
  const captions: Record<Visual, string> = {
    earth: t('Crust and uppermost rigid mantle form the lithosphere. Beneath it, the asthenosphere is mostly solid rock that deforms slowly. The outer core is liquid; the inner core is solid. Rings show order, not accurate thickness.', 'Кора и жёсткая верхняя часть мантии образуют литосферу. Под ней астеносфера состоит преимущественно из твёрдых пород, которые медленно деформируются. Внешнее ядро жидкое, внутреннее — твёрдое. Кольца показывают порядок слоёв, а не их точную толщину.'),
    constructive: t('Plates move apart. Hot mantle rises and partially melts as pressure falls; magma forms new oceanic crust. Shallow earthquakes accompany faulting. Arrows show relative motion, not measured speed.', 'Плиты расходятся. Горячее вещество мантии поднимается и частично плавится при снижении давления; магма создаёт новую океаническую кору. Разломы сопровождаются неглубокими землетрясениями. Стрелки показывают направление относительного движения, а не скорость.'),
    subduction: t('Denser oceanic lithosphere bends beneath another plate. Water released by the slab helps the overlying mantle melt; magma can rise to a volcanic arc. Earthquake depths generally increase along the descending slab. The slab does not simply melt through friction.', 'Более плотная океаническая литосфера погружается под другую плиту. Вода, выделяемая погружающейся плитой, облегчает плавление вышележащей мантии; магма может подняться к вулканической дуге. Глубина очагов обычно увеличивается вдоль погружающейся плиты. Плита не просто плавится из-за трения.'),
    collision: t('After intervening oceanic lithosphere has been consumed, buoyant continental crust collides, shortens and thickens. Fold mountains and earthquakes form. Typical continental collision does not create a subduction-style volcanic arc.', 'После погружения разделявшей их океанической литосферы континенты сталкиваются. Континентальная кора сжимается и утолщается: возникают складчатые горы и землетрясения. Для типичной континентальной коллизии вулканическая дуга субдукционного типа не характерна.'),
    conservative: t('Plan view: plates slide past one another. Locked sections store strain until sudden slip causes an earthquake. Lithosphere is neither created nor destroyed; transform motion itself does not produce a volcanic arc.', 'Вид сверху: плиты скользят вдоль друг друга. Заблокированные участки накапливают деформацию; внезапный сдвиг вызывает землетрясение. Литосфера не создаётся и не уничтожается; само сдвиговое движение не создаёт вулканическую дугу.'),
    earthquake: t('The focus (hypocentre) is the point where rupture begins; the epicentre is directly above it at the surface. Waves spread from the rupture. This cross-section is schematic: rupture extends across an area of the fault.', 'Очаг (гипоцентр) — точка начала разрыва. Эпицентр расположен прямо над ней на поверхности. От разрыва распространяются волны. Разрез условный: разрыв охватывает площадь вдоль разлома.'),
    volcano: t('Ash can travel far downwind. Fast, hot pyroclastic density currents and water-rich lahars can follow valleys. Lava has a different speed and reach. This sketch shows possible hazards, not a forecast for a real volcano.', 'Пепел может уноситься далеко по ветру. Быстрые горячие пирокластические потоки и насыщенные водой лахары могут двигаться по долинам. У лавы другая скорость и дальность распространения. Схема показывает возможные опасности, а не прогноз извержения.'),
    risk: t('Risk depends on the hazard and who or what is exposed, their vulnerability and capacity to cope. Reducing exposure or vulnerability can reduce losses without changing plate movement. This is a thinking framework, not a numerical prediction formula.', 'Риск зависит от опасного явления, подверженных воздействию людей и объектов, их уязвимости и способности справиться с последствиями. Снижение подверженности или уязвимости уменьшает потери, не меняя движения плит. Это схема рассуждения, а не формула численного прогноза.'),
  };
  const line = (x1: number, y1: number, x2: number, y2: number) => <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#174f4b" strokeWidth="5" markerEnd={`url(#${arrow})`} />;
  return (
    <figure className="tectonic-figure">
      <div className="tectonic-figure-heading"><span>{t('VISUAL EXPLAINER', 'НАГЛЯДНАЯ СХЕМА')}</span><h3>{labels[selected]}</h3></div>
      {isBoundary && !fixed && <fieldset className="tectonic-boundary-controls">
        <legend>{t('Compare plate boundaries', 'Сравни границы плит')}</legend>
        <div>{boundaryKeys.map(value => <button type="button" key={value} aria-pressed={selected === value} onClick={() => setBoundary(value)}>{labels[value]}</button>)}</div>
      </fieldset>}
      {selected === 'volcano' && <div className="tectonic-volcano-anatomy">
        <h4>{t('Read the cross-section', 'Прочитай разрез')}</h4>
        <div className="tectonic-diagram-scroll" role="region" tabIndex={0} aria-label={t('Scrollable volcano cross-section', 'Прокручиваемая схема строения вулкана')}>
          <svg viewBox="0 0 760 410" role="img" aria-labelledby={`${uid}-anatomy-title ${uid}-anatomy-desc`} className="tectonic-diagram">
            <title id={`${uid}-anatomy-title`}>{t('Numbered volcano cross-section', 'Разрез вулкана с нумерацией')}</title>
            <desc id={`${uid}-anatomy-desc`}>{t('A magma reservoir connects to a central conduit and main vent. A crater lies around the main vent. Layers build the cone; a side branch leads to a secondary vent. Dykes cut layers, while a sill runs parallel to them. The numbered key follows the image.', 'Магматический резервуар соединён с центральным каналом и главным жерлом. Кратер окружает главное жерло. Конус построен из слоёв; боковая ветвь ведёт к боковому жерлу. Дайки пересекают слои, силл залегает параллельно. Под схемой приведена расшифровка номеров.')}</desc>
            <rect x="25" y="292" width="710" height="108" fill="#d6b79a" />
            <path d="M45 292 L170 260 L331 91 L355 118 L381 91 L548 260 L715 292Z" fill="#ab8e70" />
            <path d="M138 268 L332 122 L355 139 L381 122 L578 268 M96 282 L335 158 L359 173 L385 158 L653 282 M212 250 L339 194 L361 207 L388 194 L500 250" fill="none" stroke="#795e48" strokeWidth="5" />
            <path d="M344 121 L346 340 L368 340 L369 121Z" fill="#ca632f" />
            <ellipse cx="357" cy="356" rx="55" ry="33" fill="#ca632f" /><ellipse cx="357" cy="354" rx="39" ry="21" fill="#df8a44" />
            <path d="M359 237 L414 204 L481 224" fill="none" stroke="#ca632f" strokeWidth="11" />
            <path d="M350 315 L295 276 L260 225" fill="none" stroke="#ca632f" strokeWidth="9" />
            <path d="M368 320 L477 320" fill="none" stroke="#ca632f" strokeWidth="9" />
            <path d="M330 99 Q301 140 279 169 Q251 199 242 223" fill="none" stroke="#b54121" strokeWidth="10" />
            <path d="M351 90 L350 71 Q330 36 365 29 Q393 12 410 41 Q448 23 453 55 Q476 32 507 62 L547 62" fill="none" stroke="#a4ada6" strokeWidth="18" strokeLinecap="round" />
            <path d="M188 65 L326 95 M91 167 L261 183 M91 245 L238 255 M205 344 L288 284 M235 382 L306 366 M520 345 L464 322 M610 220 L480 224 M570 156 L369 161 M514 98 L372 115 M590 39 L489 57" stroke="#174f4b" strokeWidth="2" fill="none" />
            {[[1,170,65],[2,75,167],[3,75,245],[4,187,344],[5,216,382],[6,538,345],[7,628,220],[8,588,156],[9,532,98],[10,608,39]].map(([n,x,y]) => <g key={n}><circle cx={x} cy={y} r="15" fill="#174f4b" /><text x={x} y={y + 5} textAnchor="middle" style={{ fill: '#fff', fontSize: 14, fontWeight: 700 }}>{n}</text></g>)}
          </svg>
        </div>
        <ol className="tectonic-diagram-key">{[
          t('Crater: depression around the main vent', 'Кратер: углубление вокруг главного жерла'),
          t('Lava flow at the surface', 'Лавовый поток на поверхности'),
          t('Layers of lava and fragmental deposits', 'Слои лавы и обломочных отложений'),
          t('Dyke: intrusion across rock layers', 'Дайка: внедрение поперёк слоёв пород'),
          t('Magma reservoir below the surface', 'Магматический резервуар под поверхностью'),
          t('Sill: intrusion parallel to layers', 'Силл: внедрение параллельно слоям'),
          t('Secondary vent fed by a branch', 'Боковое жерло, питаемое ответвлением'),
          t('Central conduit: main magma pathway', 'Центральный канал: основной путь магмы'),
          t('Main vent: opening at the surface', 'Главное жерло: выход на поверхность'),
          t('Ash cloud carried away by wind', 'Облако пепла, переносимое ветром'),
        ].map((text, index) => <li key={index}>{text}</li>)}</ol>
        <p className="tectonic-small">{t('A simplified cross-section: real magma storage may contain crystals and several connected regions, and intrusions do not always erupt.', 'Упрощённый разрез: реальные магматические области могут содержать кристаллы и состоять из нескольких связанных зон; внедрения не всегда выходят на поверхность.')}</p>
        <h4>{t('Trace the hazards', 'Проследи распространение опасностей')}</h4>
      </div>}
      {selected === 'risk' ? <div className="tectonic-risk-grid" role="group" aria-label={labels.risk}>
        {[
          [t('HAZARD', 'ОПАСНОСТЬ'), t('How strong? Where? How often?', 'Какой силы? Где? Как часто?'), t('Magnitude, depth, duration; ground conditions', 'Магнитуда, глубина, длительность; грунты')],
          [t('EXPOSURE', 'ПОДВЕРЖЕННОСТЬ'), t('Who and what is in harm’s way?', 'Кто и что находится в опасной зоне?'), t('People, homes, roads, hospitals', 'Люди, дома, дороги, больницы')],
          [t('VULNERABILITY', 'УЯЗВИМОСТЬ'), t('How easily can they be harmed?', 'Насколько легко причинить ущерб?'), t('Weak buildings, poverty, limited access', 'Непрочные здания, бедность, ограниченный доступ')],
          [t('CAPACITY', 'СПОСОБНОСТЬ СПРАВИТЬСЯ'), t('What can reduce the losses?', 'Что позволяет уменьшить потери?'), t('Preparation, safe design, effective response', 'Подготовка, безопасное строительство, эффективное реагирование')],
        ].map(([title, question, text], index) => <div key={title}><span className="tectonic-risk-number">0{index + 1}</span><h4>{title}</h4><strong>{question}</strong><p>{text}</p></div>)}
      </div> : <div className="tectonic-diagram-scroll" role="region" tabIndex={0} aria-label={t('Scrollable labelled diagram', 'Прокручиваемая схема с подписями')}>
        <svg viewBox="0 0 760 350" role="img" aria-labelledby={`${uid}-title ${uid}-description`} className="tectonic-diagram">
          <title id={`${uid}-title`}>{labels[selected]}</title><desc id={`${uid}-description`}>{captions[selected]}</desc>
          <defs><marker id={arrow} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L6,3 L0,6" fill="#174f4b" /></marker></defs>
          {selected === 'earth' && <>
            <circle cx="215" cy="175" r="144" fill="#765947" /><circle cx="215" cy="175" r="134" fill="#cc8663" /><circle cx="215" cy="175" r="86" fill="#e8b26c" /><circle cx="215" cy="175" r="42" fill="#f9ddaa" />
            <path d="M 207,32 L 417,32" stroke="#174f4b" strokeWidth="2" /><text x="429" y="38">{t('Crust', 'Кора')}</text>
            <path d="M 300,103 L 417,103" stroke="#174f4b" strokeWidth="2" /><text x="429" y="109">{t('Mantle — mostly solid', 'Мантия — в основном твёрдая')}</text>
            <path d="M 274,198 L 417,198" stroke="#174f4b" strokeWidth="2" /><text x="429" y="204">{t('Outer core — liquid', 'Внешнее ядро — жидкое')}</text>
            <path d="M 221,175 L 386,284 L 417,284" stroke="#174f4b" strokeWidth="2" fill="none" /><text x="429" y="290">{t('Inner core — solid', 'Внутреннее ядро — твёрдое')}</text>
          </>}
          {selected === 'constructive' && <>
            <rect x="20" y="90" width="720" height="235" rx="12" fill="#edbba0" />
            <path d="M20 115 L315 115 L361 146 L348 192 L20 192Z M740 115 L445 115 L399 146 L412 192 L740 192Z" fill="#6f8f89" />
            <path d="M351 320 L353 236 L368 194 L374 150 L386 150 L392 194 L407 236 L409 320Z" fill="#c76031" />
            <path d="M351 147 Q380 95 409 147" fill="none" stroke="#c76031" strokeWidth="9" />
            {line(288,65,160,65)}{line(472,65,600,65)}{line(380,280,380,220)}
            <text x="40" y="158">{t('Oceanic lithosphere', 'Океаническая литосфера')}</text><text x="484" y="158">{t('Oceanic lithosphere', 'Океаническая литосфера')}</text>
            <text x="440" y="255">{t('Rising mantle / magma', 'Подъём мантии / магмы')}</text>
            <path d="M383 127 L420 100 L558 100" fill="none" stroke="#174f4b" strokeWidth="2" /><text x="429" y="90">{t('New crust at the ridge', 'Новая кора у хребта')}</text>
          </>}
          {selected === 'subduction' && <>
            <rect x="20" y="123" width="720" height="202" rx="10" fill="#edbba0" /><path d="M20 109 L280 109 L434 224 L500 271 L478 299 L412 252 L264 142 L20 142Z" fill="#6f8f89" />
            <path d="M325 114 L483 114 L521 65 L566 114 L740 114 L740 191 L426 191Z" fill="#ab8c65" />
            <path d="M449 231 Q477 203 484 171 Q485 140 520 91" fill="none" stroke="#c76031" strokeWidth="12" />
            <path d="M525 61 C500 25 552 23 538 44 C574 20 587 59 551 63" fill="#aab4b0" />
            {line(95,70,215,70)}{line(683,70,585,70)}
            <text x="42" y="179">{t('Oceanic plate', 'Океаническая плита')}</text><text x="530" y="172">{t('Overriding plate', 'Верхняя плита')}</text>
            <path d="M281 112 L316 47 L432 47" stroke="#174f4b" strokeWidth="2" fill="none" /><text x="321" y="34">{t('Trench', 'Жёлоб')}</text>
            <text x="524" y="226">{t('Magma rises', 'Магма поднимается')}</text>
            <path d="M423 256 L334 299 L95 299" stroke="#174f4b" strokeWidth="2" fill="none" /><text x="42" y="288">{t('Descending slab', 'Погружающаяся плита')}</text>
            {[ [320,146], [354,173], [386,201], [420,228], [462,261] ].map(([x,y]) => <circle key={x} cx={x} cy={y} r="5" fill="#ac3f25" />)}
          </>}
          {selected === 'collision' && <>
            <rect x="20" y="155" width="720" height="170" rx="10" fill="#edbba0" />
            <path d="M20 144 L232 144 L299 98 L330 125 L371 63 L417 115 L446 89 L511 144 L740 144 L740 215 L509 215 L420 282 L348 282 L262 215 L20 215Z" fill="#ab8c65" />
            <path d="M20 177 L228 177 Q286 156 322 184 Q371 138 413 184 Q455 152 518 177 L740 177" stroke="#6f5a41" strokeWidth="4" fill="none" />
            {line(86,90,227,90)}{line(674,90,533,90)}
            <text x="50" y="255">{t('Continental crust', 'Континентальная кора')}</text><text x="495" y="255">{t('Continental crust', 'Континентальная кора')}</text>
            <text x="285" y="35">{t('Fold mountains', 'Складчатые горы')}</text><text x="266" y="316">{t('Thickened crustal root', 'Утолщённый корень гор')}</text>
          </>}
          {selected === 'conservative' && <>
            <rect x="35" y="30" width="680" height="290" rx="10" fill="#e8cfaa" />
            <path d="M35 30 H426 L325 320 H35Z" fill="#8faea6" /><path d="M426 30 L325 320" stroke="#934929" strokeWidth="7" />
            <path d="M60 225 H358 M391 132 H687" stroke="#fffaf1" strokeWidth="8" />
            {line(253,89,205,246)}{line(506,254,555,95)}
            <text x="62" y="65">{t('Plate A', 'Плита A')}</text><text x="610" y="291">{t('Plate B', 'Плита B')}</text>
            <path d="M378 165 L617 205" stroke="#174f4b" strokeWidth="2" /><text x="487" y="236">{t('Transform fault', 'Трансформный разлом')}</text>
            <text x="48" y="343">{t('Plan view · white line = offset surface feature', 'Вид сверху · белая линия = смещённый объект поверхности')}</text>
          </>}
          {selected === 'earthquake' && <>
            <rect x="25" y="94" width="710" height="230" rx="10" fill="#e7ccb0" /><line x1="25" y1="95" x2="735" y2="95" stroke="#688d7e" strokeWidth="8" />
            <path d="M227 324 L405 95" stroke="#7a614e" strokeWidth="6" />
            {[43,80,117].map(r => <circle key={r} cx="307" cy="218" r={r} stroke="#c5653b" strokeWidth="2" opacity=".6" fill="none" />)}
            <line x1="307" y1="218" x2="307" y2="95" stroke="#174f4b" strokeDasharray="6 5" strokeWidth="2" />
            <circle cx="307" cy="218" r="9" fill="#b84821" /><circle cx="307" cy="95" r="7" fill="#174f4b" />
            <text x="235" y="53">{t('Epicentre', 'Эпицентр')}</text><path d="M306 65 V87" stroke="#174f4b" strokeWidth="2" />
            <path d="M319 220 H465" stroke="#174f4b" strokeWidth="2" /><text x="481" y="227">{t('Focus / hypocentre', 'Очаг / гипоцентр')}</text>
            <text x="516" y="138">{t('Ground surface', 'Поверхность')}</text><text x="451" y="298">{t('Seismic waves', 'Сейсмические волны')}</text><text x="132" y="307">{t('Fault', 'Разлом')}</text>
          </>}
          {selected === 'volcano' && <>
            <path d="M25 295 L185 270 L334 120 L352 140 L372 120 L538 270 L735 295Z" fill="#a98b6c" />
            <path d="M331 125 L323 78 Q299 48 331 40 Q348 13 371 39 Q420 23 415 57 Q455 33 486 57 Q528 37 551 61 L666 63" fill="none" stroke="#9ca7a3" strokeWidth="22" strokeLinecap="round" />
            {[490,527,568,610,650].map((x, i) => <path key={x} d={`M${x} 82 l-12 ${35+i*4}`} stroke="#697c79" strokeWidth="3" strokeDasharray="5 5" />)}
            {line(453,20,644,20)}
            <path d="M339 150 Q292 216 249 253" fill="none" stroke="#c14f25" strokeWidth="11" />
            <path d="M385 170 Q450 252 530 283" fill="none" stroke="#7b6357" strokeWidth="23" strokeLinecap="round" />
            <path d="M309 228 Q239 284 110 310" fill="none" stroke="#547e85" strokeWidth="12" />
            <text x="571" y="153">{t('Ashfall', 'Пеплопад')}</text><text x="83" y="196">{t('Lava', 'Лава')}</text><path d="M144 199 L280 223" stroke="#174f4b" strokeWidth="2" />
            <text x="473" y="220">{t('Pyroclastic flow', 'Пирокластический поток')}</text><path d="M546 234 L496 260" stroke="#174f4b" strokeWidth="2" />
            <text x="41" y="344">{t('Lahar: water + volcanic debris', 'Лахар: вода + вулканический материал')}</text>
          </>}
        </svg>
      </div>}
      {selected !== 'risk' && <p className="tectonic-diagram-hint">{t('On a small screen, swipe the diagram sideways to read every label.', 'На небольшом экране прокручивай схему вбок, чтобы прочитать все подписи.')}</p>}
      <figcaption>{captions[selected]} <strong>{t('Schematic; not to scale.', 'Условная схема; масштаб не соблюдён.')}</strong></figcaption>
    </figure>
  );
}
