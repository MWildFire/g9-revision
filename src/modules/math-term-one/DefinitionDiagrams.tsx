import { CoordinateVisual, InequalityVisual, VennVisual } from './Visuals';
export function DefinitionDiagram({ kind, language = 'en' }: { kind: string; language?: 'en' | 'ru' }) {
  const t = (en: string, ru: string) => language === 'ru' ? ru : en;
  if (kind === 'coordinate') return <CoordinateVisual language={language}/>;
  if (kind === 'inequality') return <InequalityVisual language={language}/>;
  if (kind === 'venn') return <VennVisual language={language}/>;
  const captions: Record<string, string> = {
    fraction: t('A fraction shows how many equal parts of a whole are taken. This picture shows only one case: a positive fraction below one.', 'Дробь показывает, сколько равных частей целого взято. На рисунке только один случай: положительная дробь меньше единицы.'),
    algebra: t('The expression 4x − 3 is not an equation yet. It becomes one when you set it equal to another expression, such as 9.', 'Выражение 4x − 3 ещё не уравнение. Оно становится уравнением, когда его приравнивают к другому выражению, например, к 9.'),
    circle: t('Both shapes are bounded by the same 90° arc. The segment is the sector minus the triangle.', 'Обе фигуры ограничены одной дугой 90°. Сегмент — это сектор без треугольника.'),
    optimisation: t('The shaded area holds every choice that meets the constraints x ≥ 0, y ≥ 0, x ≤ 4 and x + y ≤ 6. The best choice lies at a vertex of the area.', 'Закрашенная область содержит все наборы, которые выполняют ограничения x ≥ 0, y ≥ 0, x ≤ 4 и x + y ≤ 6. Наилучший набор лежит в вершине области.'),
    function: t('Each input has exactly one arrow. Here −2 and 2 share the output 4.', 'У каждого входа ровно одна стрелка. Здесь −2 и 2 имеют общий выход 4.'),
    quadratic: t('For y = (x − 2)² − 3, the vertex is (2, −3). The roots 2 ± √3 are numbers, while the x-intercepts are points (2 ± √3, 0).', 'Для y = (x − 2)² − 3 вершина — точка (2; −3). Корни 2 ± √3 — это числа, а пересечения с осью x — точки (2 ± √3; 0).'),
    triangle: t('Drawn to scale. For the angle θ, tan θ = opposite / adjacent = 6/8.', 'Нарисовано в масштабе. Для угла θ: tg θ = противолежащий / прилежащий = 6/8.'),
  };
  return <figure className="mathrev-figure mathrev-definition-figure" lang={language}>
    <div className="mathrev-diagram-canvas" tabIndex={0} role="group" aria-label={t('Labelled diagram', 'Схема с подписями')}>
    <svg viewBox="0 0 600 350" role="img" aria-label={captions[kind]}>
      <g fill="#243342" fontFamily="system-ui, sans-serif" fontSize="16">
      {kind === 'fraction' && <>
        <text x="300" y="35" textAnchor="middle" fontSize="20">{t('One whole', 'Одно целое')}</text>
        {[0, 1, 2, 3, 4].map(i => <rect key={i} x={80 + i * 88} y="65" width="88" height="65" fill={i < 3 ? '#83aec6' : '#faf7f1'} stroke="#234e69" strokeWidth="2"/>)}
        <text x="300" y="157" textAnchor="middle" fontSize="20">{t('3 selected · 5 equal parts', 'Выбраны 3 из 5 равных частей')}</text>
        <text x="125" y="225" fontSize="35" textAnchor="middle">3</text><path d="M98 240H153" stroke="#243342" strokeWidth="2"/><text x="125" y="280" fontSize="35" textAnchor="middle">5</text>
        <path d="M167 210H232M167 268H232" stroke="#9e532f" strokeWidth="2"/>
        <text x="245" y="215" fontSize="20">{t('Numerator: selected parts', 'Числитель: взятые доли')}</text>
        <text x="245" y="273" fontSize="20">{t('Denominator: parts per whole', 'Знаменатель: доли в целом')}</text>
        <text x="300" y="325" textAnchor="middle" fontSize="20">{t('3/5 = 3 ÷ 5 = 0.6', '3/5 = 3 ÷ 5 = 0,6')}</text>
      </>}
      {kind === 'algebra' && <>
        <text x="300" y="35" textAnchor="middle">{t('Expression: 4x − 3', 'Выражение: 4x − 3')}</text>
        <rect x="115" y="57" width="145" height="65" rx="8" fill="#dce9ef"/><rect x="345" y="57" width="145" height="65" rx="8" fill="#f5dfcf"/>
        <text x="185" y="99" fontSize="30" textAnchor="middle">4x</text><text x="302" y="99" fontSize="27">+</text><text x="417" y="99" fontSize="30" textAnchor="middle">(−3)</text>
        <text x="185" y="150" textAnchor="middle">{t('Term', 'Слагаемое')}</text><text x="417" y="150" textAnchor="middle">{t('Constant term', 'Свободный член')}</text>
        <text x="185" y="205" textAnchor="middle" fontSize="28">4 × x</text>
        <path d="M167 216L117 245M215 216L265 245" stroke="#234e69" strokeWidth="2"/>
        <text x="115" y="270" textAnchor="middle">{t('Coefficient 4', 'Коэффициент 4')}</text><text x="280" y="270" textAnchor="middle">{t('Variable x', 'Переменная x')}</text>
        <text x="190" y="308" textAnchor="middle">{t('4 and x are factors', '4 и x — множители')}</text>
        <text x="445" y="215" textAnchor="middle">{t('Equation', 'Уравнение')}</text><text x="445" y="250" textAnchor="middle" fontSize="23">4x − 3 = 9</text>
        <text x="445" y="287" textAnchor="middle">{t('Solution: x = 3', 'Решение: x = 3')}</text>
      </>}
      {kind === 'circle' && <>
        <text x="145" y="30" textAnchor="middle">{t('Sector', 'Сектор')}</text><text x="425" y="30" textAnchor="middle">{t('Segment', 'Сегмент')}</text>
        <circle cx="145" cy="155" r="90" fill="none" stroke="#8796a0"/><circle cx="425" cy="155" r="90" fill="none" stroke="#8796a0"/>
        <path d="M145 155V65A90 90 0 0 1 235 155Z" fill="#93b4ca" stroke="#234e69" strokeWidth="3"/>
        <path d="M425 65A90 90 0 0 1 515 155Z" fill="#edc1a1" stroke="#9e532f" strokeWidth="3"/>
        <path d="M425 65V155H515" fill="none" stroke="#8796a0" strokeDasharray="4 4"/>
        <circle cx="145" cy="155" r="3"/><circle cx="425" cy="155" r="3"/>
        <text x="123" y="176">O</text><text x="402" y="176">O</text><text x="127" y="107">r</text><text x="187" y="179">r</text>
        <text x="175" y="90">{t('minor arc', 'меньшая дуга')}</text><text x="455" y="90">{t('minor arc', 'меньшая дуга')}</text>
        <text x="456" y="165" transform="rotate(45 456 165)">{t('chord', 'хорда')}</text>
        <text x="145" y="290" textAnchor="middle">A = πr²/4</text><text x="425" y="290" textAnchor="middle">A = πr²/4 − r²/2</text>
      </>}
      {kind === 'optimisation' && <>
        <path d="M60 285H285M60 300V35" fill="none" stroke="#243342" strokeWidth="2"/>
        <path d="M60 285H200V215L60 75Z" fill="#dce9ef" stroke="#234e69" strokeWidth="2"/>
        <path d="M130 110L246.6667 285" fill="none" stroke="#9e532f" strokeWidth="2" strokeDasharray="6 4"/>
        {[0, 2, 4, 6].map(n => <g key={n}><text x={60 + n * 35} y="310" textAnchor="middle">{n}</text><text x="43" y={290 - n * 35} textAnchor="end">{n}</text></g>)}
        <text x="285" y="310">x</text><text x="37" y="37">y</text><circle cx="200" cy="215" r="6" fill="#9e532f"/><text x="208" y="210">(4, 2)</text>
        <text x="340" y="70">{t('Constraints', 'Ограничения')}</text><text x="340" y="100">x ≥ 0, y ≥ 0</text><text x="340" y="125">x ≤ 4, x + y ≤ 6</text>

        <text x="150" y="335" textAnchor="middle">{t('Dashed: 3x + 2y = 16', 'Пунктир: 3x + 2y = 16')}</text>
      </>}
      {kind === 'function' && <>
        <text x="135" y="45" textAnchor="middle">{t('Domain', 'Область определения')}</text><text x="455" y="45" textAnchor="middle">{t('Range', 'Множество значений')}</text><text x="300" y="88" textAnchor="middle">f(x) = x²</text>
        <ellipse cx="135" cy="190" rx="65" ry="120" fill="#dce9ef"/><ellipse cx="455" cy="190" rx="65" ry="120" fill="#f5dfcf"/>
        <g fontSize="26" textAnchor="middle"><text x="135" y="128">−2</text><text x="135" y="198">0</text><text x="135" y="268">2</text><text x="455" y="153">4</text><text x="455" y="233">0</text></g>
        <path d="M168 120L420 145L408 137M420 145L407 150M168 190L420 225L408 217M420 225L407 230M168 260L420 145L406 145M420 145L412 157" fill="none" stroke="#234e69" strokeWidth="2"/>
      </>}
      {kind === 'triangle' && <>
        <path d="M100 270H420V30Z" fill="#e7eff3" stroke="#234e69" strokeWidth="3"/><path d="M403 270V253H420" fill="none" stroke="#9e532f" strokeWidth="2"/>
        <text x="260" y="307" textAnchor="middle">{t('adjacent = 8', 'прилежащий = 8')}</text><text x="430" y="150">{t('opposite = 6', 'противолежащий = 6')}</text>
        <text x="207" y="135" transform="rotate(-36.87 207 135)">{t('hypotenuse = 10', 'гипотенуза = 10')}</text>
        <path d="M145 270A45 45 0 0 0 136 243" fill="none" stroke="#9e532f" strokeWidth="2"/><text x="159" y="259">θ</text>
      </>}
      {kind === 'quadratic' && <>
        <path d="M55 140H520M130 310V25" fill="none" stroke="#8796a0" strokeWidth="1.5"/><path d="M290 35V315" stroke="#9e532f" strokeDasharray="5 5"/>
        <path d="M90 10Q290 510 490 10" fill="none" stroke="#234e69" strokeWidth="3"/>
        <circle cx="290" cy="260" r="5" fill="#9e532f"/>
        <circle cx="151.44" cy="140" r="5" fill="#234e69"/><circle cx="428.56" cy="140" r="5" fill="#234e69"/>
        <text x="300" y="280">(2, −3)</text><text x="110" y="160">0</text><text x="117" y="267">−3</text><text x="278" y="160">2</text><text x="438" y="160">4</text><text x="302" y="47">x = 2</text><text x="495" y="164">x</text><text x="112" y="35">y</text><text x="145" y="130" textAnchor="end">2 − √3</text><text x="435" y="130">2 + √3</text>
      </>}
      </g>
    </svg></div>{kind === 'optimisation' && <div className="mt-3 space-y-1 text-sm">
      <p>{t('Objective function', 'Целевая функция')}: <span className="whitespace-nowrap">P = 3x + 2y</span></p>
      <p>{t('Optimal choice: (4, 2)', 'Оптимальный набор: (4; 2)')}</p>
      <p>{t('Maximum value: 16', 'Максимум: 16')}</p>
    </div>}<figcaption>{captions[kind]}</figcaption>
  </figure>;
}
