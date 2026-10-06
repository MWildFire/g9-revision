import { b, s, w, type Lesson } from "./types";
export const lessons: Lesson[] = [
  {
    id: "atomic-structure",
    title: b("Inside an atom", "Строение атома"),
    photoTopic: "Structure of an atom",
    visual: "atom",
    intro: b(
      "Separate the nucleus from the electron structure. Use charge, mass and scale to explain what changes when an atom becomes an ion.",
      "Разделяй ядро и электронную оболочку. Заряд, масса и масштаб помогают объяснить, что меняется при превращении атома в ион.",
    ),
    sections: [
      s(
        "Three particles, two regions",
        "Три частицы, две области",
        "A proton has relative charge +1 and relative mass approximately 1; a neutron has charge 0 and relative mass approximately 1. Both are in the nucleus. An electron has charge −1 and relative mass about 1/1836; electrons occupy energy levels around the nucleus. Almost all atomic mass is nuclear, but almost all atomic volume is outside the nucleus.",
        "Относительный заряд протона +1, масса примерно 1; заряд нейтрона 0, масса примерно 1. Они находятся в ядре. У электрона заряд −1 и масса около 1/1836; электроны занимают энергетические уровни вокруг ядра. Почти вся масса атома сосредоточена в ядре, а почти весь объём находится вне него.",
      ),
      s(
        "How small is small?",
        "Насколько мал атом?",
        "A typical atomic radius is of order 10⁻¹⁰ m, while a nuclear radius is of order 10⁻¹⁵–10⁻¹⁴ m; exact sizes depend on the element. Compare like quantities: radius with radius, not radius with diameter. Divide powers of ten by subtracting exponents. A school diagram exaggerates the nucleus enormously and is not to scale.",
        "Типичный радиус атома порядка 10⁻¹⁰ м, ядра — порядка 10⁻¹⁵–10⁻¹⁴ м; точные значения зависят от элемента. Сравнивай радиус с радиусом, а не с диаметром. При делении степеней десяти показатели вычитаются. На школьном рисунке ядро сильно увеличено относительно атома.",
      ),
      s(
        "Neutral atoms and ions",
        "Нейтральные атомы и ионы",
        "A neutral atom has equal proton and electron counts, so its charges cancel. Losing an electron produces a positive ion; gaining an electron produces a negative ion. Ordinary ionisation changes electrons, not protons or neutrons: the element and mass number stay the same. A +2 ion has two fewer electrons than protons, not two extra protons.",
        "У нейтрального атома одинаковое число протонов и электронов, поэтому заряды компенсируются. Потеря электрона даёт положительный ион, присоединение — отрицательный. Обычная ионизация меняет число электронов, а не протонов или нейтронов: элемент и массовое число сохраняются. У иона +2 на два электрона меньше, а не на два протона больше.",
      ),
      s(
        "Energy levels, excitation and ionisation",
        "Энергетические уровни, возбуждение и ионизация",
        "An electron can absorb a suitable amount of energy and move to a higher energy level. When it returns to a lower level, a photon carries away the energy difference. Excitation leaves the electron bound to the atom; ionisation removes it. Shell circles are a useful model of allowed energies, not photographs of tiny planets on known tracks.",
        "Электрон может поглотить подходящую порцию энергии и перейти на более высокий уровень. При переходе вниз разность энергий уносит фотон. При возбуждении электрон остаётся связан с атомом, при ионизации покидает его. Окружности оболочек — модель разрешённых энергий, а не фотография планет на точно известных орбитах.",
      ),
    ],
    formulas: ["net charge / e = protons − electrons", "1 nm = 10⁻⁹ m"],
    examples: [
      w(
        "An atom has 12 protons, 12 neutrons and 12 electrons. It loses two electrons. Describe the ion.",
        "У атома 12 протонов, 12 нейтронов и 12 электронов. Он теряет два электрона. Опиши ион.",
        b(
          "The nucleus is unchanged: 12 protons and 12 neutrons; mass number 24.",
          "Ядро не меняется: 12 протонов, 12 нейтронов, массовое число 24.",
        ),
        b(
          "Electrons = 12 − 2 = 10. Net relative charge = 12 − 10 = +2: Mg²⁺.",
          "Электронов 12 − 2 = 10. Относительный заряд 12 − 10 = +2: Mg²⁺.",
        ),
      ),
      w(
        "An atom has radius 1.0 × 10⁻¹⁰ m and its nucleus 5.0 × 10⁻¹⁵ m. How many times larger is the atomic radius?",
        "Радиус атома 1,0 × 10⁻¹⁰ м, ядра 5,0 × 10⁻¹⁵ м. Во сколько раз радиус атома больше?",
        b(
          "Ratio = (1.0 / 5.0) × 10⁻¹⁰⁻⁽⁻¹⁵⁾ = 0.2 × 10⁵.",
          "Отношение = (1,0 / 5,0) × 10⁻¹⁰⁻⁽⁻¹⁵⁾ = 0,2 × 10⁵.",
        ),
        b(
          "The ratio is 2.0 × 10⁴ = 20,000, with no unit. This is a length ratio, not a volume ratio.",
          "Ответ 2,0 × 10⁴ = 20 000, без единицы измерения. Это отношение длин, а не объёмов.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "The nucleus is positive, not neutral: neutrons do not cancel proton charge.",
        "Ядро положительное: нейтроны не компенсируют заряд протонов.",
      ),
      b(
        "Excitation is an electron change; radioactive decay is a nuclear change.",
        "Возбуждение связано с электронами; радиоактивный распад — с ядром.",
      ),
    ],
  },
  {
    id: "isotopes",
    title: b(
      "Atomic number, mass number and isotopes",
      "Атомный номер, массовое число и изотопы",
    ),
    photoTopic: "Mass number, atomic number and isotopes",
    visual: "atom",
    intro: b(
      "Read nuclide notation in both directions: from a symbol to particle counts and from counts to a symbol.",
      "Научись читать обозначение нуклида в обе стороны: находить частицы по записи и составлять запись по числу частиц.",
    ),
    sections: [
      s(
        "Read the two numbers",
        "Как читать два числа",
        "In the notation ¹⁴₆C, the upper number A = 14 counts nucleons: protons plus neutrons. The lower number Z = 6 counts protons and identifies the element. Neutron number N = A − Z = 8. The letter is the chemical symbol; the ion charge, if any, is written at the upper right, separate from A.",
        "В записи ¹⁴₆C верхнее число A = 14 — число нуклонов: протонов и нейтронов. Нижнее Z = 6 — число протонов, определяющее элемент. Число нейтронов N = A − Z = 8. Буква — символ элемента; заряд иона пишут справа сверху отдельно от A.",
      ),
      s(
        "Same element, different isotope",
        "Один элемент, разные изотопы",
        "Isotopes share Z but have different neutron counts and therefore different A. Carbon-12 and carbon-14 each contain six protons; they have six and eight neutrons respectively. Their neutral atoms have the same electron arrangement, so their chemical behaviour is very similar. Nuclear stability can be very different: an isotope may be stable or radioactive.",
        "У изотопов одинаковое Z, но разное число нейтронов и поэтому разное A. В углероде-12 и углероде-14 по шесть протонов, а нейтронов шесть и восемь. У нейтральных атомов одинаковое электронное строение и очень близкие химические свойства. Устойчивость ядер может сильно отличаться: изотоп бывает стабильным или радиоактивным.",
      ),
      s(
        "Isotope is not ion",
        "Изотоп — не ион",
        "Changing neutrons changes the isotope; changing electrons changes the ion charge; changing protons changes the element. A chlorine-35 ion and chlorine-37 ion can have the same charge but different neutron counts. Use three separate questions: which element (Z), which isotope (A), and which charge (protons minus electrons)?",
        "Изменение числа нейтронов меняет изотоп; электронов — заряд иона; протонов — элемент. Ионы хлора-35 и хлора-37 могут иметь одинаковый заряд, но разное число нейтронов. Задавай три отдельных вопроса: какой элемент (Z), какой изотоп (A), какой заряд (протоны минус электроны)?",
      ),
      s(
        "Mass number versus relative atomic mass",
        "Массовое число и относительная атомная масса",
        "A is a whole-number count for one nucleus. A periodic-table relative atomic mass is an abundance-weighted average for a mixture of isotopes and need not be a whole number. If abundance calculations are set, multiply each isotope mass by its fraction and add. This is useful supporting practice, not an extra topic promised by the photograph.",
        "A — целое число частиц одного ядра. Относительная атомная масса в таблице — среднее с учётом распространённости изотопов; она не обязана быть целой. Для такой задачи умножай массу каждого изотопа на его долю и складывай. Это полезное дополнение, но фотография не обещает отдельную задачу на среднюю массу.",
      ),
    ],
    formulas: ["A = Z + N", "N = A − Z", "electrons = Z − signed ion charge"],
    examples: [
      w(
        "Find the particles in ³⁷₁₇Cl⁻.",
        "Найди число частиц в ³⁷₁₇Cl⁻.",
        b(
          "Protons = 17. Neutrons = 37 − 17 = 20.",
          "Протонов 17. Нейтронов 37 − 17 = 20.",
        ),
        b(
          "A charge of −1 means one extra electron: 18 electrons. Check 17 − 18 = −1.",
          "Заряд −1 означает один дополнительный электрон: их 18. Проверка: 17 − 18 = −1.",
        ),
      ),
      w(
        "A mixture contains 75% mass-35 and 25% mass-37 atoms. Estimate its relative atomic mass.",
        "Смесь содержит 75% атомов с массовым числом 35 и 25% с числом 37. Оцени среднюю относительную массу.",
        b(
          "Use fractions: 0.75 × 35 + 0.25 × 37 = 35.5.",
          "Используй доли: 0,75 × 35 + 0,25 × 37 = 35,5.",
        ),
        b(
          "35.5 is an average, not a nucleus containing half a neutron. It lies between 35 and 37 and closer to the more common isotope.",
          "35,5 — среднее, а не ядро с половиной нейтрона. Оно лежит между 35 и 37 и ближе к более распространённому изотопу.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Do not subtract the electron count from A to find neutrons; subtract Z.",
        "Для числа нейтронов из A вычитай Z, а не число электронов.",
      ),
      b("Not all isotopes are radioactive.", "Не все изотопы радиоактивны."),
    ],
  },
  {
    id: "atomic-models",
    title: b("How the atomic model changed", "Как менялась модель атома"),
    photoTopic: "Development of the atomic model",
    visual: "scattering",
    intro: b(
      "A strong explanation connects an observation to a conclusion and shows why an older model could not explain the evidence.",
      "В хорошем объяснении наблюдение связано с выводом и показано, почему прежняя модель не объясняет данные.",
    ),
    sections: [
      s(
        "From indivisible spheres to electrons",
        "От неделимых шаров к электронам",
        "Dalton represented atoms as tiny particles characteristic of each element. Discovery of the electron showed that atoms contain smaller parts. Thomson’s plum-pudding model placed negative electrons within spread-out positive charge. It accounted for neutrality but had no small, dense nucleus.",
        "Дальтон представлял атомы маленькими частицами, характерными для каждого элемента. Открытие электрона показало, что в атоме есть более мелкие частицы. В модели Томсона отрицательные электроны находились в распределённом положительном заряде. Модель объясняла нейтральность, но не содержала маленького плотного ядра.",
      ),
      s(
        "What the foil experiment measured",
        "Что наблюдали в опыте с фольгой",
        "Geiger and Marsden, working with Rutherford, directed positively charged alpha particles at very thin metal foil. Most passed through with little deflection. A small fraction changed direction substantially; a very small fraction scattered backwards. These are observations. “The atom has a nucleus” is an inference from them. Thin foil makes repeated scattering less likely.",
        "Гейгер и Марсден под руководством Резерфорда направляли положительные альфа-частицы на очень тонкую металлическую фольгу. Большинство проходило почти прямо. Небольшая доля сильно отклонялась, очень малая доля летела назад. Это наблюдения. «У атома есть ядро» — вывод из них. Тонкая фольга уменьшает вероятность многократного рассеяния.",
      ),
      s(
        "Three observation → explanation links",
        "Три связи «наблюдение → объяснение»",
        "Most alpha particles pass through → most atomic volume is empty space. Rare strong deflections → positive charge is concentrated into a small region that repels positive alpha particles. Rare backscattering → this region is very dense and contains most of the mass, allowing a large momentum change. Diffuse positive charge would normally give small deflections and does not explain the rare large ones.",
        "Большинство частиц проходит → основная часть объёма атома пустая. Редкие сильные отклонения → положительный заряд сосредоточен в маленькой области, отталкивающей положительные альфа-частицы. Редкое обратное рассеяние → эта область очень плотная и содержит большую часть массы, позволяя резко изменить импульс частицы. Размазанный заряд обычно давал бы малые отклонения и не объясняет редкие большие.",
      ),
      s(
        "Bohr, Chadwick and the limits of a drawing",
        "Бор, Чедвик и границы рисунка",
        "Bohr introduced discrete electron energy levels, helping explain line spectra. Chadwick supplied evidence for neutrons, explaining nuclear mass not accounted for by protons alone. Models changed because of evidence, not simply because a newer scientist preferred a different picture. Modern quantum models do not give electrons fixed planetary trajectories; the shell model remains useful at this level.",
        "Бор ввёл дискретные уровни энергии электронов, что помогло объяснить линейчатые спектры. Чедвик получил свидетельства существования нейтронов: одних протонов недостаточно для объяснения массы ядра. Модели менялись из-за данных, а не из-за предпочтений нового учёного. В квантовой модели у электронов нет фиксированных планетарных траекторий; модель оболочек остаётся полезной на школьном уровне.",
      ),
    ],
    formulas: [],
    examples: [
      w(
        "A student says “most alpha particles bounced back, so the atom is solid”. Correct both parts.",
        "Ученик пишет: «Большинство альфа-частиц отлетело назад, значит атом сплошной». Исправь обе части.",
        b(
          "Most particles passed nearly straight through, so most atomic volume does not obstruct them.",
          "Большинство частиц прошло почти прямо: основная часть объёма атома не мешает им пройти.",
        ),
        b(
          "Only very few scattered backwards. This supports a tiny, dense nucleus rather than a solid atom.",
          "Назад рассеялись очень немногие. Это подтверждает маленькое плотное ядро, а не сплошной атом.",
        ),
      ),
      w(
        "Why was an electron-containing model still replaced after the foil experiment?",
        "Почему модель, уже содержащая электроны, всё равно заменили после опыта с фольгой?",
        b(
          "Having electrons explained some evidence, but diffuse positive charge could not account for rare very large alpha deflections.",
          "Электроны объясняли часть данных, но распределённый положительный заряд не объяснял редкие очень большие отклонения альфа-частиц.",
        ),
        b(
          "Concentrating charge and mass in a small nucleus explained both the many near-straight paths and the few strong deflections.",
          "Маленькое ядро с сосредоточенными зарядом и массой объясняло и множество прямых траекторий, и редкие сильные отклонения.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Rutherford’s scattering experiment did not discover the neutron.",
        "Нейтрон был открыт не в опыте Резерфорда.",
      ),
      b(
        "“Proved the model forever” is too strong: a model is supported within the evidence available.",
        "«Навсегда доказал модель» — слишком сильно: модель подтверждается доступными данными.",
      ),
    ],
  },
  {
    id: "radiation",
    title: b(
      "Radioactive decay and radiation",
      "Радиоактивный распад и излучение",
    ),
    photoTopic: "Radioactive decay and nuclear radiation",
    visual: "penetration",
    intro: b(
      "Identify radiation by what it is, what it does to matter and how far it penetrates. Keep the source, the emission and the detector reading distinct.",
      "Различай виды излучения по составу, действию на вещество и проникающей способности. Не смешивай источник, испускаемое излучение и показание детектора.",
    ),
    sections: [
      s(
        "An unstable nucleus changes",
        "Изменяется неустойчивое ядро",
        "Radioactive decay is a spontaneous nuclear transformation. An individual nucleus has a probability of decaying in a time interval; we cannot predict its exact decay time. A large population has a predictable average behaviour. Ordinary changes of temperature, pressure or chemical state do not substantially alter the school-level decay rate. An unstable nucleus may decay to another unstable nucleus, so a chain can follow.",
        "Радиоактивный распад — самопроизвольное превращение ядра. У отдельного ядра есть вероятность распасться за интервал времени; точный момент неизвестен. Большая совокупность имеет предсказуемое среднее поведение. Обычные изменения температуры, давления и химического состояния существенно не меняют рассматриваемую в школе скорость распада. Дочернее ядро тоже может быть нестабильным и распадаться дальше.",
      ),
      s(
        "Alpha, beta-minus, gamma and neutrons",
        "Альфа, бета-минус, гамма и нейтроны",
        "Alpha (α): a helium-4 nucleus, two protons and two neutrons; charge +2, mass number 4. Beta-minus (β⁻): a fast electron created in a nuclear neutron-to-proton transformation, not an electron falling out of a shell; charge −1, mass number 0. Gamma (γ): an electromagnetic photon emitted when a nucleus loses excitation energy; charge 0 and rest mass 0. A neutron has charge 0 and mass number 1; neutron emission is especially relevant to fission.",
        "Альфа (α) — ядро гелия-4: два протона и два нейтрона, заряд +2, массовое число 4. Бета-минус (β⁻) — быстрый электрон, рождающийся при превращении нейтрона в протон; он не выпадает из оболочки. Заряд −1, массовое число 0. Гамма (γ) — электромагнитный фотон, который испускается при снижении энергии возбуждённого ядра; заряд и масса покоя 0. Нейтрон имеет заряд 0, массовое число 1; особенно важен при делении.",
      ),
      s(
        "Ionisation and penetration",
        "Ионизация и проникающая способность",
        "Ionisation removes electrons from atoms or molecules. Alpha particles produce dense ionisation along a short path: a few centimetres in air, stopped by paper or the outer dead skin layer. Beta particles have a longer range and are typically stopped by a few millimetres of aluminium or suitable plastic. Gamma photons are uncharged and produce ionisation indirectly through charged particles released in interactions; they can be very penetrating. Thick lead or concrete reduces its intensity rather than guaranteeing zero transmission. Ranges depend on energy and material.",
        "Ионизация выбивает электроны из атомов или молекул. Альфа-частицы сильно ионизируют на коротком пути: обычно несколько сантиметров в воздухе; их задерживает бумага или наружный мёртвый слой кожи. Бета-частицы проходят дальше, их обычно задерживают несколько миллиметров алюминия или подходящий пластик. Гамма-фотоны не заряжены и вызывают ионизацию косвенно, через заряженные частицы, появляющиеся при взаимодействии; они способны глубоко проникать. Толстый свинец или бетон ослабляет его, а не гарантирует нулевое прохождение. Пробег зависит от энергии и вещества.",
      ),
      s(
        "What a detector actually measures",
        "Что измеряет детектор",
        "Activity is the expected rate of spontaneous nuclear decay in a source: 1 Bq means one decay per second on average. Actual counts fluctuate. Count rate is the number of detected events per second or minute. They are not generally equal: many emissions miss the detector or are not registered. A Geiger–Müller tube detects ionisation. Its reading includes background; maintain the same distance, geometry and counting time when comparing sources or absorbers.",
        "Активность — ожидаемое число самопроизвольных распадов источника за секунду: 1 Бк означает в среднем один распад/с. Реальный счёт случайно колеблется. Скорость счёта — число зарегистрированных событий за секунду или минуту. Обычно они не равны: часть излучения не попадает в детектор или не регистрируется. Счётчик Гейгера–Мюллера обнаруживает ионизацию. Показания включают фон; при сравнении источников и экранов сохраняй расстояние, геометрию и время измерения.",
      ),
      s(
        "Predict behaviour from charge",
        "Предсказывай поведение по заряду",
        "In an electric field, alpha and beta-minus particles bend in opposite directions; gamma rays are undeflected. Deflection also depends on momentum and mass, so charge alone does not give a numerical curvature. Gamma and X-rays are both electromagnetic radiation, distinguished chiefly by their origin; neither is a stream of charged nuclear particles.",
        "В электрическом поле альфа- и бета-минус-частицы отклоняются в противоположные стороны, гамма-лучи не отклоняются. Отклонение зависит также от импульса и массы: одного заряда недостаточно для расчёта кривизны. Гамма- и рентгеновское излучение — электромагнитные волны, различаемые прежде всего по происхождению; это не потоки заряженных ядерных частиц.",
      ),
    ],
    formulas: [
      "activity: 1 Bq = 1 decay / s",
      "count rate = counts ÷ time",
      "net count rate = total count rate − background count rate",
    ],
    examples: [
      w(
        "A detector records 930 counts in 30 s with a source and 90 counts in 30 s without it. Find the corrected count rate.",
        "С источником зарегистрировано 930 импульсов за 30 с, без него — 90 за 30 с. Найди скорость счёта без фона.",
        b(
          "Total rate = 930 / 30 = 31 counts s⁻¹; background = 90 / 30 = 3 counts s⁻¹.",
          "Полная скорость 930 / 30 = 31 имп/с; фон 90 / 30 = 3 имп/с.",
        ),
        b(
          "Net = 31 − 3 = 28 counts s⁻¹. This is not automatically the source activity in Bq.",
          "Без фона: 31 − 3 = 28 имп/с. Это не обязательно активность источника в Бк.",
        ),
      ),
      w(
        "An emission crosses paper but its detector signal falls to background after aluminium is inserted. Identify it and explain.",
        "Излучение проходит бумагу, но после алюминия сигнал падает до фона. Определи вид и объясни.",
        b(
          "This is consistent with beta radiation: paper does not stop it, but sufficient aluminium does.",
          "Это согласуется с бета-излучением: бумага его не задержала, достаточный слой алюминия задержал.",
        ),
        b(
          "The detector still counts background. One absorber test alone cannot establish every property or exclude all mixed sources.",
          "Счётчик продолжает регистрировать фон. Один опыт не определяет все свойства и не исключает любые смеси источников.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Beta-minus electrons originate in the decay, not the electron shells.",
        "Бета-минус-электрон возникает при распаде, а не выходит из оболочки.",
      ),
      b(
        "“Most penetrating” is not the same as “always most dangerous”. Exposure route matters.",
        "«Самое проникающее» не означает «всегда самое опасное»: важен путь воздействия.",
      ),
    ],
  },
  {
    id: "nuclear-equations",
    title: b("Balancing nuclear equations", "Уравнения ядерных реакций"),
    photoTopic: "Nuclear equations",
    visual: "equation",
    intro: b(
      "Conserve the total nucleon number and electric charge. Work with the two number lines before identifying a daughter element.",
      "Сохраняй суммарное число нуклонов и электрический заряд. Сначала уравняй два ряда чисел, затем определяй дочерний элемент.",
    ),
    sections: [
      s(
        "Two independent balances",
        "Два независимых баланса",
        "In the low-energy nuclear processes studied here, the upper numbers count nucleons and their totals balance. Energy, momentum and electric charge are also conserved; balancing A and charge alone does not prove a reaction can occur. The lower numbers represent charge in proton-charge units and must also balance. For a nucleus the lower number is Z; for an electron it is −1, not an “element with −1 protons”. A photon has 0 in both bookkeeping positions. Atomic electron shells are usually not drawn in these nuclear equations.",
        "В изучаемых низкоэнергетических ядерных процессах верхние числа считают нуклоны, и их суммы совпадают. Сохраняются также энергия, импульс и электрический заряд; один баланс A и заряда ещё не доказывает возможность реакции. Нижние числа обозначают заряд в единицах заряда протона: их суммы тоже совпадают. У ядра нижнее число равно Z, у электрона −1 — это не «элемент с −1 протоном». Для фотона оба числа 0. Электронные оболочки в таких уравнениях обычно не изображаются.",
      ),
      s(
        "Alpha decay: remove a helium nucleus",
        "Альфа-распад: отделяется ядро гелия",
        "An emitted alpha particle carries away two protons and two neutrons. The daughter has A − 4 and Z − 2. Its neutron count decreases by two. The parent becomes a different element because its proton count changes. Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. Do not subtract four from Z.",
        "Альфа-частица уносит два протона и два нейтрона. У дочернего ядра A − 4 и Z − 2. Число нейтронов уменьшается на два. Меняется элемент, потому что меняется число протонов. Пример: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. Из Z вычитают два, а не четыре.",
      ),
      s(
        "Beta-minus: a neutron becomes a proton",
        "Бета-минус: нейтрон превращается в протон",
        "In β⁻ decay a neutron transforms into a proton, an electron and an electron antineutrino. A stays fixed because one nucleon changes type; Z rises by one and N falls by one. The electron is created in the decay; it was not stored inside the nucleus. The full process includes the antineutrino, with zero nucleon number and zero charge; school balancing often omits it because it does not alter the two totals. Example: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̅ₑ.",
        "При β⁻-распаде нейтрон превращается в протон, электрон и электронное антинейтрино. A сохраняется: один нуклон меняет тип. Z увеличивается на один, N уменьшается на один. Электрон рождается при распаде, а не хранится заранее внутри ядра. Антинейтрино имеет нулевые заряд и число нуклонов; в школьной записи его часто опускают, поскольку оба баланса не меняются. Пример: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̅ₑ.",
      ),
      s(
        "Gamma: energy changes, element does not",
        "Гамма: меняется энергия, не элемент",
        "An excited nucleus (shown with *) emits a photon and drops to a lower energy state. A and Z remain unchanged: ⁹⁹₄₃Tc* → ⁹⁹₄₃Tc + γ is a schematic energy-state example. Gamma emission often follows another decay. A mixed sequence is solved one step at a time; two alpha and one beta-minus emissions give ΔA = −8 and ΔZ = −3.",
        "Возбуждённое ядро (обозначено *) испускает фотон и переходит в состояние с меньшей энергией. A и Z не меняются: ⁹⁹₄₃Tc* → ⁹⁹₄₃Tc + γ — схематический пример перехода между состояниями. Гамма-излучение часто следует за другим распадом. Цепочку решай по шагам: два альфа- и один бета-минус-распад дают ΔA = −8, ΔZ = −3.",
      ),
    ],
    formulas: [
      "α: (A, Z) → (A − 4, Z − 2)",
      "β⁻: (A, Z) → (A, Z + 1)",
      "γ: (A, Z) → (A, Z)",
    ],
    examples: [
      w(
        "Complete ²²⁶₈₈Ra → X + ⁴₂He.",
        "Дополни ²²⁶₈₈Ra → X + ⁴₂He.",
        b(
          "Upper balance: 226 = A + 4, so A = 222. Lower balance: 88 = Z + 2, so Z = 86.",
          "Верхний баланс: 226 = A + 4, значит A = 222. Нижний: 88 = Z + 2, значит Z = 86.",
        ),
        b(
          "Z = 86 identifies radon: X = ²²²₈₆Rn. Check 222 + 4 = 226 and 86 + 2 = 88.",
          "Z = 86 соответствует радону: X = ²²²₈₆Rn. Проверка: 222 + 4 = 226 и 86 + 2 = 88.",
        ),
      ),
      w(
        "A nucleus starts with A = 214 and Z = 82. It emits β⁻ then α. Find the final A, Z and neutron count.",
        "Ядро имеет A = 214, Z = 82. Оно испускает β⁻, затем α. Найди конечные A, Z и число нейтронов.",
        b(
          "After β⁻: A = 214, Z = 83. After α: A = 210, Z = 81.",
          "После β⁻: A = 214, Z = 83. После α: A = 210, Z = 81.",
        ),
        b(
          "Final neutron count = 210 − 81 = 129. Net change is ΔA = −4, ΔZ = −1.",
          "Нейтронов 210 − 81 = 129. Суммарное изменение ΔA = −4, ΔZ = −1.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "A negative beta particle leaving does not mean Z decreases: charge conservation makes Z increase.",
        "Вылет отрицательной бета-частицы не уменьшает Z: из сохранения заряда следует увеличение Z.",
      ),
      b(
        "Balanced numbers are necessary but do not prove a proposed reaction actually occurs.",
        "Баланс чисел необходим, но сам по себе не доказывает, что реакция происходит.",
      ),
    ],
  },
  {
    id: "half-life",
    title: b("Half-life and random decay", "Период полураспада и случайность"),
    photoTopic: "Half lives and random nature of decay",
    visual: "decay",
    intro: b(
      "Use repeated halving, graphs and background correction. Explain why a smooth population trend can arise from unpredictable individual events.",
      "Используй последовательное деление пополам, графики и поправку на фон. Объясняй, как из непредсказуемых отдельных событий возникает закономерность для большого числа ядер.",
    ),
    sections: [
      s(
        "What exactly halves?",
        "Что именно уменьшается вдвое?",
        "The half-life T½ is the time for the expected number of undecayed parent nuclei to fall to half, or for activity of that isotope to halve. Corrected count rate can stand in for activity if geometry and detector response remain fixed and daughter emissions do not distort the measurement. It is not the time for half the total mass of the object to disappear: daughter nuclei remain in the material.",
        "Период T½ — время уменьшения ожидаемого числа нераспавшихся родительских ядер вдвое или уменьшения активности данного изотопа вдвое. Скорость счёта без фона можно использовать вместо активности при неизменных геометрии и отклике детектора, если дочернее излучение не искажает измерение. Это не время исчезновения половины массы предмета: дочерние ядра остаются в веществе.",
      ),
      s(
        "Repeated halving and the remaining fraction",
        "Последовательное деление и оставшаяся доля",
        "After 0, 1, 2, 3 and 4 half-lives the remaining fractions are 1, 1/2, 1/4, 1/8 and 1/16. Find the number of half-lives n = elapsed time / half-life. Remaining = initial × (1/2)ⁿ. Decayed = initial − remaining. For a non-integer n, the exponential expression still gives the expected value. Round only the final result and keep time units consistent.",
        "После 0, 1, 2, 3 и 4 периодов остаются доли 1, 1/2, 1/4, 1/8 и 1/16. Число периодов n = прошедшее время / период. Остаток = начальное значение × (1/2)ⁿ. Распалось = начальное − остаток. Формула работает и для нецелого n, давая ожидаемое значение. Округляй только итог и согласовывай единицы времени.",
      ),
      s(
        "Read a graph correctly",
        "Как читать график",
        "First subtract the constant background level from the total count-rate curve. Select a corrected value R and find the later time at R/2; the time difference is a half-life. Repeat with a second pair of values to check. A decay curve falls rapidly at first and then more slowly because fewer parent nuclei remain. It is not a straight line: equal times remove equal fractions, not equal numbers.",
        "Сначала вычти постоянный фон из полной скорости счёта. Возьми значение R без фона и найди время, когда оно стало R/2; разность времён — период. Проверь другой парой точек. Сначала кривая спадает быстро, затем медленнее, потому что родительских ядер остаётся меньше. Это не прямая: за равные интервалы исчезает одинаковая доля, а не одинаковое число ядер.",
      ),
      s(
        "Random does not mean patternless",
        "Случайность не означает отсутствие закономерности",
        "A particular nucleus does not remember its age and is not “due to decay” after one half-life. A small sample may lose more or fewer than half its nuclei in one T½. Large samples usually lie closer to the predicted fraction in relative terms. Count readings fluctuate; average repeated readings or count for longer. Do not infer a changed half-life from a single small fluctuation.",
        "Ядро не помнит возраст и не «обязано распасться» через один период. В малом образце за T½ может распасться больше или меньше половины ядер. Большие образцы обычно ближе к ожидаемой доле в относительном выражении. Показания колеблются; усредняй повторы или считай дольше. Одна небольшая флуктуация не доказывает изменение периода.",
      ),
      s(
        "Work backwards and handle thresholds",
        "Обратные задачи и пороги",
        "If only 1/8 remains, three half-lives have elapsed. Divide elapsed time by three to find T½. To find a time below a threshold, keep halving until the required inequality is satisfied; “below 10” differs from “10 or less”. Extension: n = ln(initial/remaining) / ln 2. The simple model tends towards zero but never reaches exactly zero at a finite time; a real finite sample eventually can have no parent nuclei left.",
        "Если осталось 1/8, прошло три периода. Для T½ раздели прошедшее время на три. В задаче на порог дели пополам, пока не выполнится нужное неравенство: «меньше 10» отличается от «не больше 10». Дополнение: n = ln(начальное/остаток) / ln 2. Непрерывная модель стремится к нулю, но не достигает его за конечное время; в реальном конечном образце все родительские ядра могут распасться.",
      ),
    ],
    formulas: [
      "n = t / T½",
      "N(t) = N₀ × 2^(−t / T½)",
      "Rnet(t) = Rnet(0) × 2^(−t / T½)",
      "Rtotal(t) = Rnet(t) + Rbackground",
    ],
    examples: [
      w(
        "A source has T½ = 6 h and initial activity 960 Bq. Find activity and percentage decayed after 18 h.",
        "T½ = 6 ч, начальная активность 960 Бк. Найди активность и процент распавшихся ядер через 18 ч.",
        b(
          "n = 18 / 6 = 3. Activity: 960 → 480 → 240 → 120 Bq.",
          "n = 18 / 6 = 3. Активность: 960 → 480 → 240 → 120 Бк.",
        ),
        b(
          "Remaining fraction = 1/8 = 12.5%; decayed fraction = 87.5%. This percentage describes parent nuclei, not lost total mass.",
          "Осталось 1/8 = 12,5%; распалось 87,5%. Это доля родительских ядер, а не потерянной общей массы.",
        ),
      ),
      w(
        "Total rate falls from 164 to 44 counts/min in 12 min. Background is 4 counts/min. Find the half-life.",
        "Полная скорость падает со 164 до 44 имп/мин за 12 мин. Фон 4 имп/мин. Найди период.",
        b(
          "Corrected rates: 164 − 4 = 160 and 44 − 4 = 40 counts/min.",
          "Без фона: 164 − 4 = 160 и 44 − 4 = 40 имп/мин.",
        ),
        b(
          "160 → 80 → 40 takes two half-lives, so T½ = 12 / 2 = 6 min. Halving 164 directly would be wrong.",
          "160 → 80 → 40 — два периода. T½ = 12 / 2 = 6 мин. Делить пополам 164 без поправки было бы ошибкой.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Subtract background before using a ratio; add it back if the question asks for the total measured rate.",
        "Вычти фон до вычисления отношения; прибавь его обратно, если спрашивают полное показание.",
      ),
      b(
        "After two half-lives 25% remains, not 0%.",
        "Через два периода остаётся 25%, а не 0%.",
      ),
    ],
  },
  {
    id: "contamination",
    title: b(
      "Contamination, irradiation and hazards",
      "Загрязнение, облучение и опасность",
    ),
    photoTopic: "Radioactive contamination",
    visual: "contamination",
    intro: b(
      "Ask whether radioactive material moved onto or into the object, or whether only radiation reached it. This determines what happens after the source is removed.",
      "Определи, попало ли радиоактивное вещество на объект или внутрь него либо до него дошло только излучение. От этого зависит, что будет после удаления источника.",
    ),
    sections: [
      s(
        "Two different mechanisms",
        "Два разных механизма",
        "Irradiation is exposure to radiation from a source. Contamination is the unwanted presence of radioactive material on or inside an object. A sealed source can irradiate a person without transferring radioactive material. A spill of radioactive solution can contaminate a surface, which then becomes a source of radiation until the material is removed or decays. Contamination can therefore also cause irradiation.",
        "Облучение — воздействие излучения источника. Загрязнение — нежелательное присутствие радиоактивного вещества на объекте или внутри. Герметичный источник может облучать человека без переноса вещества. Пролитый радиоактивный раствор загрязняет поверхность; она остаётся источником, пока вещество не удалено или не распалось. Загрязнение поэтому также вызывает облучение.",
      ),
      s(
        "External versus internal exposure",
        "Внешнее и внутреннее воздействие",
        "An external alpha source is usually blocked by dead skin, but inhaled or swallowed alpha-emitting material can irradiate living tissue at very short range with dense ionisation. Gamma can reach internal organs from an external source. Beta may affect skin and can also be hazardous internally. A ranking such as “alpha is harmless” ignores location, activity, energy, exposure time and the tissues involved.",
        "Внешние альфа-частицы обычно задерживаются мёртвым слоем кожи. Но вдыхание или проглатывание альфа-излучающего вещества может вызвать сильную ионизацию живой ткани на малом расстоянии. Гамма-излучение достигает внутренних органов извне. Бета может повреждать кожу и быть опасной внутри. Фраза «альфа безвредна» игнорирует расположение, активность, энергию, время и затронутые ткани.",
      ),
      s(
        "Cell damage and sensible comparisons",
        "Повреждение клеток и корректное сравнение",
        "Ionising radiation can damage molecules including DNA. Cells may repair damage, die or undergo changes that increase cancer risk. Activity in Bq describes the source. Absorbed dose is energy deposited per unit mass, in Gy = J/kg. Equivalent dose applies radiation weighting; effective dose also applies tissue weighting. These weighted protection quantities use Sv and do not predict an individual’s exact risk. Equal activities do not necessarily imply equal biological risk. In school risk questions, use the given data and state missing information rather than inventing a medical threshold.",
        "Ионизирующее излучение может повреждать молекулы, включая ДНК. Клетка может восстановиться, погибнуть или измениться так, что возрастёт риск рака. Бк характеризует источник. Поглощённая доза — энергия, переданная единице массы; её единица Гр = Дж/кг. Эквивалентная доза учитывает вид излучения, эффективная — также вид ткани. Эти взвешенные величины радиационной защиты измеряют в Зв; они не предсказывают точный риск для отдельного человека. Одинаковая активность не означает одинаковый биологический риск. В учебной оценке используй данные задачи и называй недостающие сведения, а не придумывай медицинский порог.",
      ),
      s(
        "Protection must match the mechanism",
        "Защита должна соответствовать механизму",
        "For external exposure, shorter time, greater distance and suitable shielding generally reduce dose. To prevent contamination, containment and avoiding the transfer of radioactive material matter. Removing an external source ends that source’s direct irradiation, but does not remove material already deposited. Ordinary school examples of alpha, beta or gamma irradiation do not make an object radioactive; nuclear activation, especially by neutrons, is a separate process.",
        "Для внешнего облучения меньшие время, большее расстояние и подходящий экран обычно уменьшают дозу. От загрязнения защищает удержание вещества и предотвращение его переноса. Удаление внешнего источника прекращает его прямое воздействие, но не убирает уже осевшее вещество. В обычных школьных примерах облучение альфа-, бета- или гамма-излучением не делает предмет радиоактивным; активация, особенно нейтронами, — отдельный процесс.",
      ),
    ],
    formulas: ["dose = dose rate × exposure time (constant rate)"],
    examples: [
      w(
        "A sealed gamma source is moved away. A second bench has radioactive dust on it. Which can remain a source?",
        "Герметичный гамма-источник убрали. На другом столе осталась радиоактивная пыль. Какой стол может оставаться источником?",
        b(
          "The first bench was irradiated but not necessarily contaminated; removing the source ends its direct exposure.",
          "Первый стол облучался, но не обязательно загрязнился; удаление источника прекращает прямое облучение.",
        ),
        b(
          "The second bench contains radioactive atoms. Their decay continues, so the bench remains a source while contamination is present.",
          "На втором есть радиоактивные атомы. Они продолжают распадаться, поэтому стол остаётся источником, пока загрязнение сохраняется.",
        ),
      ),
      w(
        "Why can a weakly penetrating alpha emitter be a serious internal hazard?",
        "Почему слабо проникающий альфа-источник может быть серьёзно опасен внутри организма?",
        b(
          "The source is already next to living cells, so penetrating the skin is irrelevant.",
          "Источник уже рядом с живыми клетками, поэтому проникновение через кожу не требуется.",
        ),
        b(
          "Dense ionisation deposits energy over a short path and can damage nearby DNA. Actual risk still depends on dose and tissue.",
          "Сильная ионизация передаёт энергию на коротком пути и может повреждать ДНК рядом. Реальный риск зависит от дозы и ткани.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Radiation is not radioactive material that can be washed away.",
        "Излучение — не радиоактивное вещество, которое можно смыть.",
      ),
      b(
        "Shielding does not remove contamination or change the isotope’s half-life.",
        "Экран не удаляет загрязнение и не меняет период полураспада.",
      ),
    ],
  },
  {
    id: "background",
    title: b(
      "Background radiation and measurements",
      "Радиационный фон и измерения",
    ),
    photoTopic: "Background radiation",
    visual: "decay",
    intro: b(
      "A detector reading is a mixture of source and background events. Turn raw counts into comparable rates before drawing a conclusion.",
      "Показание детектора содержит события от источника и фона. Переводи числа импульсов в сопоставимые скорости, прежде чем делать вывод.",
    ),
    sections: [
      s(
        "Where background comes from",
        "Откуда берётся фон",
        "Natural sources include cosmic radiation, radioactive rocks and soil, radon gas and naturally occurring radioisotopes in living things. Human-related exposure includes medical imaging and small contributions from releases or fallout, depending on place and history. “Natural” describes origin, not harmlessness. Medical exposure is often listed with human-made exposure, though it is not normally part of the ambient room background measured by a school detector.",
        "Природные источники — космическое излучение, радиоактивные породы и почва, радон и природные радиоизотопы в живых организмах. К связанным с человеком воздействиям относятся медицинская диагностика и зависящие от места и истории выбросы или выпадения. «Природное» описывает происхождение, а не безвредность. Медицинское воздействие часто выделяют среди искусственных источников, но оно обычно не входит в комнатный фон школьного счётчика.",
      ),
      s(
        "Why locations differ",
        "Почему места отличаются",
        "Higher altitude generally gives greater cosmic exposure because there is less atmosphere above. Geology, building materials and ventilation affect radon-related background. Occupation and time spent in different environments also matter. A pie chart from one country and year is not a universal distribution; use the chart supplied in the question instead of memorising unsupported percentages.",
        "На большей высоте космическое воздействие обычно выше: сверху меньше атмосферы. Геология, строительные материалы и вентиляция влияют на фон от радона. Важны профессия и время в разных условиях. Диаграмма одной страны и года не универсальна: используй данные задачи вместо заучивания неподтверждённых процентов.",
      ),
      s(
        "Correct different counting intervals",
        "Поправка при разном времени счёта",
        "Measure background without the added source in the same location. Divide background counts by background time, and source-plus-background counts by their own time. Only then subtract the rates. Longer counting reduces relative random fluctuations. Keep the detector position and settings fixed; moving the source changes count rate without necessarily changing its activity.",
        "Измеряй фон без добавленного источника в том же месте. Раздели фоновые импульсы на время измерения фона, а импульсы с источником — на их собственное время. Только затем вычитай скорости. Длительный счёт уменьшает относительные случайные колебания. Положение и настройки детектора сохраняй: перемещение источника меняет счёт, но не обязательно активность.",
      ),
      s(
        "Dose units are not activity units",
        "Единицы дозы — не единицы активности",
        "Bq means decays per second. Counts/s describes a detector. Gy describes absorbed energy per kilogram. Sv is used for equivalent or effective dose with relevant weighting; mSv = 10⁻³ Sv and μSv = 10⁻⁶ Sv. For a constant dose rate, dose = rate × time, with matching units. These unit distinctions support comparisons; a count rate alone does not determine a person’s dose.",
        "Бк — распады в секунду. Имп/с — показатель детектора. Гр — поглощённая энергия на килограмм. Зв применяется для эквивалентной или эффективной дозы с соответствующими коэффициентами; мЗв = 10⁻³ Зв, мкЗв = 10⁻⁶ Зв. При постоянной мощности дозы доза = мощность × время с согласованными единицами. По одной скорости счёта нельзя найти дозу человека.",
      ),
      s(
        "Evaluate a small difference",
        "Как оценить небольшую разницу",
        "If one reading is slightly above another, random variation may explain the difference. Repeat and average before claiming an effect. A negative background-subtracted result near zero does not mean negative radioactivity: it can arise from fluctuations and should be interpreted as consistent with no detectable added signal within uncertainty. A full statistical significance calculation is beyond the core checklist.",
        "Если одно показание немного выше другого, разницу может объяснить случайность. Повтори и усредни измерения до вывода об эффекте. Отрицательный результат после вычитания фона около нуля не означает отрицательную радиоактивность: так проявляются флуктуации. Это может быть совместимо с отсутствием обнаружимого дополнительного сигнала в пределах неопределённости. Полный расчёт статистической значимости выходит за основной список.",
      ),
    ],
    formulas: [
      "Rnet = Ctotal / ttotal − Cbackground / tbackground",
      "1 Sv = 1,000 mSv = 1,000,000 μSv",
    ],
    examples: [
      w(
        "Background: 180 counts in 5 min. With source: 960 counts in 2 min. Find the net rate in counts/s.",
        "Фон: 180 импульсов за 5 мин. С источником: 960 за 2 мин. Найди чистую скорость в имп/с.",
        b(
          "Background = 180 / 300 = 0.6 counts/s; total = 960 / 120 = 8.0 counts/s.",
          "Фон 180 / 300 = 0,6 имп/с; полная скорость 960 / 120 = 8,0 имп/с.",
        ),
        b(
          "Net = 8.0 − 0.6 = 7.4 counts/s. Subtracting 180 from 960 before dividing would mix unequal times.",
          "Чистая скорость 8,0 − 0,6 = 7,4 имп/с. Вычитание 180 из 960 до деления смешало бы разные времена.",
        ),
      ),
      w(
        "A fictional exposure is 2.5 μSv/h for 8 h. Express the dose in μSv and mSv.",
        "В учебном примере мощность дозы 2,5 мкЗв/ч в течение 8 ч. Вырази дозу в мкЗв и мЗв.",
        b("Dose = 2.5 × 8 = 20 μSv.", "Доза = 2,5 × 8 = 20 мкЗв."),
        b(
          "20 μSv = 0.020 mSv. This arithmetic alone does not establish a medical risk threshold.",
          "20 мкЗв = 0,020 мЗв. Сам расчёт не устанавливает медицинский порог риска.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Never subtract raw counts taken over different durations.",
        "Нельзя вычитать сырые числа импульсов за разные промежутки времени.",
      ),
      b(
        "Do not equate background, activity, count rate and dose.",
        "Не отождествляй фон, активность, скорость счёта и дозу.",
      ),
    ],
  },
  {
    id: "half-life-choice",
    title: b(
      "Comparing isotopes and half-lives",
      "Сравнение изотопов и периодов",
    ),
    photoTopic: "Different half lives of radioactive isotopes",
    visual: "decay",
    intro: b(
      "Half-life helps explain activity and persistence, but does not by itself determine danger or suitability. Compare samples on a stated basis.",
      "Период помогает понять активность и длительность существования источника, но сам по себе не определяет опасность или пригодность. Всегда указывай основание сравнения.",
    ),
    sections: [
      s(
        "Fast decay versus long persistence",
        "Быстрый распад и длительное сохранение",
        "For the same number of radioactive parent nuclei, a shorter half-life means more decays per second initially. Those nuclei also disappear faster. A longer half-life means slower decay per nucleus but longer persistence. Therefore “shorter half-life is safer” and “longer half-life is safer” are both incomplete: the answer depends on when, where and how the source is used.",
        "При одинаковом числе радиоактивных родительских ядер меньший период означает больше распадов в секунду вначале. Эти ядра также быстрее исчезают. Больший период означает меньшую вероятность распада за секунду, но более долгое сохранение вещества. Поэтому «короткий период безопаснее» и «длинный период безопаснее» неполны: важны время, место и применение.",
      ),
      s(
        "Specify what is equal",
        "Укажи, что одинаково",
        "Equal initial activity is not equal initial nucleus count. Two samples with equal initial activity have different future activities if their half-lives differ. Two samples of equal mass may contain different numbers of atoms because their isotope masses differ. Extension: activity 𝒜 = λN, with λ = ln 2 / T½ and T½ in seconds for Bq. Do not confuse activity 𝒜 with mass number A.",
        "Одинаковая начальная активность не означает одинаковое число ядер. При одинаковой начальной активности, но разных периодах будущие активности отличаются. Равные массы могут содержать разное число атомов из-за различной массы изотопов. Дополнение: активность 𝒜 = λN, λ = ln 2 / T½; для Бк период задают в секундах. Не путай активность 𝒜 с массовым числом A.",
      ),
      s(
        "Match the working time",
        "Согласуй период со временем работы",
        "A medical imaging tracer must remain detectable long enough for preparation and imaging but should not stay highly active unnecessarily afterwards. An industrial gauge needs a sufficiently long working lifetime so it does not require frequent replacement or adjustment. Half-life is only one criterion: radiation type, energy, chemistry, target tissue and the amount used must also be appropriate.",
        "Диагностический индикатор должен оставаться обнаружимым во время подготовки и исследования, но не сохранять высокую активность без необходимости после него. Промышленному датчику нужен достаточно большой срок работы без частой замены и перенастройки. Период — только один критерий: важны вид и энергия излучения, химические свойства, ткань-мишень и количество вещества.",
      ),
      s(
        "Physical and biological removal",
        "Физический распад и выведение",
        "Physical half-life concerns nuclear decay. A substance may also leave the body through biological processes, so its amount in a particular organ can fall faster than radioactive decay alone predicts. For the simple calculations in this pack, biological removal is ignored unless specified. A decay daughter can itself be radioactive; knowing only the parent half-life cannot settle a real waste-management risk.",
        "Физический период относится к ядерному распаду. Вещество может дополнительно выводиться из организма, поэтому его количество в органе уменьшается быстрее, чем от одного распада. В простых расчётах этого раздела выведение не учитывается, если не сказано иначе. Дочерний продукт тоже может быть радиоактивным: периода родительского изотопа недостаточно для реальной оценки отходов.",
      ),
    ],
    formulas: ["extension: 𝒜 = λN", "extension: λ = ln(2) / T½"],
    examples: [
      w(
        "Two samples each start at 800 Bq. X has T½ = 2 h, Y has T½ = 8 h. Compare after 8 h.",
        "Два образца начинают с 800 Бк. У X T½ = 2 ч, у Y T½ = 8 ч. Сравни через 8 ч.",
        b(
          "X undergoes four half-lives: 800 / 16 = 50 Bq. Y undergoes one: 800 / 2 = 400 Bq.",
          "У X четыре периода: 800 / 16 = 50 Бк. У Y один: 800 / 2 = 400 Бк.",
        ),
        b(
          "Y is eight times as active then. This does not by itself prove eight times the biological risk.",
          "Тогда Y активнее в восемь раз. Это само по себе не означает восьмикратный биологический риск.",
        ),
      ),
      w(
        "Two samples contain the same number of parent nuclei. Their half-lives are 3 h and 12 h. Compare initial activities.",
        "В двух образцах одинаковое число родительских ядер. Периоды 3 ч и 12 ч. Сравни начальные активности.",
        b(
          "At fixed N, activity is inversely proportional to T½. Ratio = 12 / 3 = 4.",
          "При одинаковом N активность обратно пропорциональна T½. Отношение 12 / 3 = 4.",
        ),
        b(
          "The 3 h isotope has four times the initial activity. This conclusion required equal nucleus counts.",
          "Изотоп с периодом 3 ч активнее вначале в четыре раза. Вывод требовал одинакового числа ядер.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "A long half-life does not mean a source is harmless.",
        "Большой период не означает безвредность.",
      ),
      b(
        "Always write “for equal numbers of nuclei” when making the inverse-half-life comparison.",
        "При сравнении обратной пропорциональности периоду обязательно указывай «при одинаковом числе ядер».",
      ),
    ],
  },
  {
    id: "uses",
    title: b(
      "Choosing radiation for a purpose",
      "Применения ядерного излучения",
    ),
    photoTopic: "Uses of nuclear radiation",
    visual: "penetration",
    intro: b(
      "Explain a choice through a chain: required job → useful property → suitable radiation → limitation. Use the data, not just the name of an application.",
      "Обосновывай выбор цепочкой: задача → нужное свойство → подходящее излучение → ограничение. Используй данные, а не только название применения.",
    ),
    sections: [
      s(
        "Tracers and imaging",
        "Индикаторы и диагностика",
        "A tracer follows a process, such as movement through an organ or pipe. For detection outside the body, sufficiently penetrating gamma photons are useful. A suitable physical half-life is long enough to obtain the image but short enough to limit unnecessary later exposure; appropriate chemistry and biological removal matter too. Technetium-99m is a common example with a half-life of about 6 h. Learn the selection logic rather than assuming the shortest period is always best.",
        "Индикатор позволяет проследить процесс, например движение вещества в органе или трубе. Для обнаружения снаружи тела полезны достаточно проникающие гамма-фотоны. Период должен позволять получить изображение и ограничивать ненужное дальнейшее воздействие; важны химические свойства и выведение. Распространённый пример — технеций-99m с периодом около 6 ч. Усвой логику выбора: самый короткий период не всегда лучший.",
      ),
      s(
        "Treating tissue versus imaging it",
        "Лечение ткани и получение изображения",
        "Radiotherapy uses ionisation to damage target cells. External gamma beams can penetrate to a tumour; directing beams from several angles can concentrate dose at the target while spreading exposure through other tissue. Other treatments place sources close to or within target tissue, so the best radiation is context-dependent. Healthy cells can also be harmed: “radiation kills only cancer cells” is false. Imaging seeks a detectable signal with appropriately limited dose; therapy seeks a prescribed damaging dose at a target.",
        "Лучевая терапия использует ионизацию для повреждения клеток-мишеней. Внешние гамма-пучки могут достигать опухоли; направления с разных сторон позволяют концентрировать дозу в мишени и распределять воздействие по окружающим тканям. В других методах источник помещают рядом с мишенью или внутри: выбор зависит от ситуации. Здоровые клетки тоже повреждаются. Диагностика стремится получить сигнал при ограниченной дозе, терапия — заданную повреждающую дозу в мишени.",
      ),
      s(
        "Thickness control",
        "Контроль толщины",
        "A beta source and detector can be placed on opposite sides of a thin sheet. A thicker sheet absorbs more beta radiation, so the corrected count falls. Feedback adjusts the rollers to restore the target thickness. Alpha may be completely stopped by even a thin sheet; very penetrating gamma may change too little with thickness. The choice depends on material and thickness: gamma may suit thicker products.",
        "Бета-источник и детектор ставят по разные стороны тонкого листа. Более толстый лист поглощает больше бета-частиц, и счёт без фона падает. Обратная связь регулирует валики до нужной толщины. Альфа может полностью задерживаться даже тонким листом; очень проникающая гамма может слишком слабо реагировать на толщину. Выбор зависит от вещества и толщины: для более толстых изделий может подходить гамма.",
      ),
      s(
        "Smoke detectors and sterilisation",
        "Датчики дыма и стерилизация",
        "In an ionisation smoke detector, a small sealed alpha source ionises air, allowing a small current. Smoke changes the ion movement and reduces the current, triggering an alarm. Gamma irradiation can sterilise sealed medical equipment by damaging microorganisms while penetrating packaging. Irradiation does not require radioactive material to be mixed into the object. These are explanations of devices, not instructions to obtain or dismantle sources.",
        "В ионизационном датчике дыма небольшой закрытый альфа-источник ионизирует воздух, благодаря чему идёт малый ток. Дым меняет движение ионов и уменьшает ток, вызывая сигнал. Гамма-облучение стерилизует упакованное оборудование, повреждая микроорганизмы и проходя через упаковку. Для облучения не нужно добавлять радиоактивное вещество в предмет. Это объяснения устройств, а не инструкции по получению или разборке источников.",
      ),
      s(
        "Build a justified judgement",
        "Как строить обоснованный вывод",
        "A(i) explains the physical mechanism. A(ii) applies it to a new design or calculation. A(iii) evaluates a claim using supplied evidence and states limitations. For example, a higher detector count may improve image statistics but can come with greater patient exposure; one number does not settle the choice. Extended social or economic evaluation may belong to criterion D, so this pack keeps the focus on scientific suitability and evidence.",
        "A(i) объясняет физический механизм. A(ii) применяет его к новой конструкции или расчёту. A(iii) оценивает утверждение по данным и указывает ограничения. Например, больший счёт может улучшить статистику изображения, но сопровождаться большим облучением; одного числа недостаточно для выбора. Развёрнутая социальная или экономическая оценка может относиться к D; здесь акцент на физической пригодности и доказательствах.",
      ),
    ],
    formulas: ["thicker sheet → more absorption → lower corrected count"],
    examples: [
      w(
        "A paper gauge count drops while source activity is effectively constant. Explain the likely thickness change and a limitation.",
        "Счёт датчика бумаги падает, активность практически постоянна. Объясни изменение толщины и ограничение вывода.",
        b(
          "A thicker sheet absorbs more beta particles, leaving fewer to reach the detector.",
          "Более толстый лист поглощает больше бета-частиц, поэтому детектора достигает меньше.",
        ),
        b(
          "This conclusion assumes fixed alignment, material composition and detector response; a fault could also reduce the count.",
          "Вывод предполагает неизменные расположение, состав и отклик детектора; неисправность тоже могла снизить счёт.",
        ),
      ),
      w(
        "For imaging 3 h after preparation, choose among fictional gamma tracers with half-lives 1 min, 6 h and 30 years, all initially equally active and chemically suitable.",
        "Для исследования через 3 ч выбери из условных гамма-индикаторов с периодами 1 мин, 6 ч и 30 лет при равных начальных активностях и подходящей химии.",
        b(
          "The 1 min source would lose essentially all useful activity over 180 half-lives. The 30 year source persists unnecessarily long.",
          "За 180 периодов минутный источник практически утратит полезную активность. Источник с периодом 30 лет сохраняется неоправданно долго.",
        ),
        b(
          "6 h is the reasonable compromise under the given assumptions: about 2⁻⁰·⁵ ≈ 71% remains at 3 h, then activity declines over the next days.",
          "6 ч — разумный компромисс при данных допущениях: через 3 ч остаётся около 2⁻⁰·⁵ ≈ 71%, затем активность снижается в следующие дни.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Give the radiation property that makes an application work; naming gamma alone earns little explanation.",
        "Назови свойство, благодаря которому работает применение: одного слова «гамма» недостаточно.",
      ),
      b(
        "Not every medical tracer or treatment uses the same radiation.",
        "Не все медицинские индикаторы и методы лечения используют одинаковое излучение.",
      ),
    ],
  },
  {
    id: "fission",
    title: b("Fission and chain reactions", "Деление ядер и цепная реакция"),
    photoTopic: "Nuclear fission (physics only HT)",
    visual: "chain",
    intro: b(
      "Follow one neutron-induced event and then a population of events. Distinguish releasing energy from controlling its rate.",
      "Проследи одно деление, вызванное нейтроном, а затем множество делений. Различай выделение энергии и управление скоростью её выделения.",
    ),
    sections: [
      s(
        "One induced fission event",
        "Одно вынужденное деление",
        "A suitable heavy nucleus such as uranium-235 can absorb a neutron, form an excited compound nucleus and split into two smaller nuclei. Additional neutrons and energy are released, often with gamma radiation. Products are not always identical: several fragment pairs are possible. Much of the released energy initially appears as kinetic energy of the fragments and becomes thermal energy in the surrounding material.",
        "Подходящее тяжёлое ядро, например уран-235, поглощает нейтрон, образует возбуждённое составное ядро и делится на два меньших. Выделяются дополнительные нейтроны и энергия, часто гамма-излучение. Продукты не всегда одинаковы: возможны разные пары осколков. Значительная часть энергии сначала является кинетической энергией осколков, а затем превращается во внутреннюю энергию вещества.",
      ),
      s(
        "A balanced example, not the only outcome",
        "Один уравненный пример",
        "One possible channel is ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + energy. Upper totals: 1 + 235 = 141 + 92 + 3 = 236. Lower totals: 92 = 56 + 36. Nucleon numbers are conserved, but the total rest mass of products is slightly lower; the difference corresponds to released energy. Do not confuse nucleon count with exact mass.",
        "Один возможный канал: ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + энергия. Верхние суммы: 1 + 235 = 141 + 92 + 3 = 236. Нижние: 92 = 56 + 36. Число нуклонов сохраняется, но суммарная масса покоя продуктов чуть меньше; разность соответствует выделенной энергии. Число нуклонов и точная масса — не одно и то же.",
      ),
      s(
        "When a chain continues",
        "Когда цепь продолжается",
        "Released neutrons may cause further fissions, but some escape or are absorbed without fission. If each event causes on average less than one further event, the chain dies away; about one maintains a steady rate; more than one makes the rate grow. This is an average branching model, not a recipe for a real reactor. A drawing with three emitted neutrons does not mean every one certainly causes another fission.",
        "Испущенные нейтроны могут вызвать новые деления, но часть уходит или поглощается без деления. Если одно событие в среднем вызывает меньше одного следующего, цепь затухает; около одного поддерживает постоянную скорость; больше одного даёт рост. Это усреднённая модель ветвления, а не проект реактора. Три нарисованных нейтрона не означают, что каждый обязательно вызовет деление.",
      ),
      s(
        "Control rods, moderator and coolant",
        "Управляющие стержни, замедлитель и теплоноситель",
        "In a thermal reactor, the moderator slows neutrons so further fission is more likely for the chosen fuel. Control rods absorb neutrons, controlling the fission rate. Coolant transfers thermal energy away; in a typical power station it is ultimately used to produce steam, drive a turbine and turn a generator. These components have different jobs. Fission products can remain radioactive, and cooling can still be needed after the chain reaction is stopped.",
        "В тепловом реакторе замедлитель снижает скорость нейтронов, повышая вероятность деления выбранного топлива. Управляющие стержни поглощают нейтроны и регулируют скорость реакции. Теплоноситель отводит внутреннюю энергию; на типичной станции она в итоге используется для пара, турбины и генератора. Это разные функции. Осколки могут оставаться радиоактивными, поэтому охлаждение может требоваться после остановки цепной реакции.",
      ),
      s(
        "Energy and power questions",
        "Задачи на энергию и мощность",
        "If the energy per fission is given, multiply it by the number of fissions. For a rate of fissions, multiply energy per fission by fissions per second to obtain power in watts. Electrical output may be smaller than thermal power; apply efficiency only if supplied. This is useful application of familiar energy ideas to an unfamiliar nuclear context.",
        "Если дана энергия одного деления, умножь её на число делений. Для мощности умножь энергию деления на число делений в секунду: получатся ватты. Электрическая мощность может быть меньше тепловой; учитывай КПД, если он дан. Это применение знакомых идей об энергии в новом ядерном контексте.",
      ),
    ],
    formulas: [
      "Etotal = number of fissions × energy per fission",
      "P = energy per fission × fissions per second",
      "Puseful = efficiency × Pinput",
    ],
    examples: [
      w(
        "Each event releases 3.2 × 10⁻¹¹ J. The rate is 5.0 × 10¹⁸ fissions/s. Find thermal power and electrical output at 35% efficiency.",
        "Каждое деление даёт 3,2 × 10⁻¹¹ Дж. Скорость 5,0 × 10¹⁸ делений/с. Найди тепловую и электрическую мощности при КПД 35%.",
        b(
          "P = 3.2 × 5.0 × 10⁻¹¹⁺¹⁸ = 1.6 × 10⁸ W = 160 MW.",
          "P = 3,2 × 5,0 × 10⁻¹¹⁺¹⁸ = 1,6 × 10⁸ Вт = 160 МВт.",
        ),
        b(
          "Electrical output = 0.35 × 160 = 56 MW. Do not multiply by 35 instead of 0.35.",
          "Электрическая мощность 0,35 × 160 = 56 МВт. Нельзя умножать на 35 вместо 0,35.",
        ),
      ),
      w(
        "Explain why inserting control rods farther reduces the fission rate.",
        "Объясни, почему более глубокое введение управляющих стержней снижает скорость деления.",
        b(
          "More neutrons are absorbed by the rods rather than reaching fissile nuclei.",
          "Стержни поглощают больше нейтронов, которые иначе могли бы попасть в делящиеся ядра.",
        ),
        b(
          "Fewer neutrons initiate further fission events, reducing the chain reaction rate and power. The rods do not “cool the neutrons”.",
          "Меньше нейтронов инициирует дальнейшие деления: скорость цепи и мощность падают. Стержни не «охлаждают нейтроны».",
        ),
      ),
    ],
    pitfalls: [
      b(
        "The moderator slows neutrons; control rods absorb them; coolant carries away heat.",
        "Замедлитель замедляет нейтроны, стержни поглощают их, теплоноситель отводит тепло.",
      ),
      b(
        "HT is a label on the supplied slide, not an IB achievement band. This topic remains included.",
        "HT — пометка исходного слайда, не уровень оценки IB. Тема включена в подготовку.",
      ),
    ],
  },
  {
    id: "fusion",
    title: b("Fusion and nuclear energy", "Синтез и ядерная энергия"),
    photoTopic: "Nuclear fusion (physics only HT)",
    visual: "fusion",
    intro: b(
      "Explain why light nuclei can release energy when they join, why fusion needs extreme conditions, and how it differs from fission.",
      "Объясняй, почему объединение лёгких ядер может выделять энергию, зачем нужны экстремальные условия и чем синтез отличается от деления.",
    ),
    sections: [
      s(
        "Joining light nuclei",
        "Объединение лёгких ядер",
        "Nuclear fusion combines light nuclei into products with a larger nucleus. A useful example is deuterium plus tritium: ²₁H + ³₁H → ⁴₂He + ¹₀n + energy. This reaction produces a neutron as well as helium; it is not simply two whole atoms sticking together chemically. In stellar interiors, hydrogen fusion proceeds through reaction chains; the D–T reaction is a convenient teaching example, not the main reaction sequence in the Sun.",
        "При ядерном синтезе лёгкие ядра объединяются с образованием более тяжёлого ядра. Пример: дейтерий и тритий, ²₁H + ³₁H → ⁴₂He + ¹₀n + энергия. Здесь образуется и нейтрон, а не просто два атома химически склеиваются. Внутри звёзд водород участвует в цепочках реакций; D–T — удобный учебный пример, а не главная цепь реакций Солнца.",
      ),
      s(
        "Why high temperature is needed",
        "Зачем нужна высокая температура",
        "Both nuclei are positively charged and repel electrostatically. They must approach extremely closely for the short-range nuclear interaction to bind them. Very high temperature gives nuclei large kinetic energies; sufficient density and confinement time increase the chance of useful collisions. In stars, gravity helps provide confinement. Heating alone does not guarantee a self-sustaining reaction: energy losses and confinement also matter.",
        "Оба ядра положительны и электрически отталкиваются. Им нужно очень сильно сблизиться, чтобы подействовало короткодействующее ядерное взаимодействие. Очень высокая температура даёт большую кинетическую энергию; достаточные плотность и время удержания повышают число полезных столкновений. В звёздах удержанию помогает гравитация. Одного нагрева недостаточно: важны потери энергии и удержание.",
      ),
      s(
        "Mass–energy accounting",
        "Учёт массы и энергии",
        "In an energy-releasing reaction, the total rest mass of the products is less than that of the reactants. The difference Δm corresponds to energy E = Δmc². Nucleon number and charge still balance. For the relevant light nuclei, products are more tightly bound overall. The formula is an optional extension here because the photograph names fusion but does not specify a mass-defect calculation. All numerical extension tasks supply c.",
        "В реакции с выделением энергии суммарная масса покоя продуктов меньше массы исходных частиц. Разность Δm соответствует энергии E = Δmc². Число нуклонов и заряд по-прежнему сохраняются. Для рассматриваемых лёгких ядер продукты в целом прочнее связаны. Формула здесь дополнительная: фотография называет синтез, но не уточняет расчёт дефекта массы. В численных задачах дополнения c дано.",
      ),
      s(
        "Compare without slogans",
        "Сравнение без упрощённых лозунгов",
        "Fission splits a heavy nucleus; fusion joins light nuclei. Both are nuclear changes and can release much more energy per reaction than typical chemical changes. Fission can sustain a neutron-driven chain; fusion is not the same neutron branching process. D–T fusion does not produce the same heavy fission fragments, but its neutrons can activate surrounding materials and tritium is radioactive. “Fusion has no radioactive issues” is therefore too absolute.",
        "При делении распадается тяжёлое ядро, при синтезе объединяются лёгкие. Оба процесса ядерные и могут выделять намного больше энергии на реакцию, чем типичные химические процессы. Деление поддерживает нейтронную цепь; синтез не является той же цепью ветвления. При D–T не возникают те же тяжёлые осколки, но нейтроны могут активировать окружающие материалы, а тритий радиоактивен. Поэтому «при синтезе нет радиоактивных проблем» слишком категорично.",
      ),
      s(
        "Recognise a criterion-A answer",
        "Признаки ответа по критерию A",
        "For “explain”, link charge repulsion to the need for close approach and kinetic energy. For “calculate”, show substitution, powers of ten and units. For “evaluate”, identify which part of a claim is supported, which part overreaches and what evidence is missing. You do not need a speculative prediction about commercial fusion to explain the physics correctly.",
        "Для «explain» свяжи электрическое отталкивание с необходимостью сближения и большой кинетической энергии. Для «calculate» покажи подстановку, степени десяти и единицы. Для «evaluate» укажи подтверждённую часть утверждения, чрезмерное обобщение и недостающие сведения. Для правильного объяснения физики не нужно предсказывать сроки коммерческого синтеза.",
      ),
    ],
    formulas: [
      "²₁H + ³₁H → ⁴₂He + ¹₀n + energy",
      "extension: E = Δm c²; c = 3.00 × 10⁸ m/s",
    ],
    examples: [
      w(
        "Balance ²₁H + ³₁H → ⁴₂He + X and identify X.",
        "Уравняй ²₁H + ³₁H → ⁴₂He + X и определи X.",
        b(
          "Mass-number balance: 2 + 3 = 4 + A, so A = 1. Charge balance: 1 + 1 = 2 + Z, so Z = 0.",
          "Баланс массовых чисел: 2 + 3 = 4 + A, значит A = 1. Зарядов: 1 + 1 = 2 + Z, значит Z = 0.",
        ),
        b(
          "X is a neutron, ¹₀n. The reaction is fusion because light nuclei combine.",
          "X — нейтрон ¹₀n. Это синтез, потому что лёгкие ядра объединяются.",
        ),
      ),
      w(
        "Extension: a reaction has mass defect 3.0 × 10⁻²⁹ kg. Use c = 3.0 × 10⁸ m/s to calculate energy.",
        "Дополнение: дефект массы 3,0 × 10⁻²⁹ кг. Используй c = 3,0 × 10⁸ м/с и вычисли энергию.",
        b(
          "c² = 9.0 × 10¹⁶ m²/s². E = 3.0 × 10⁻²⁹ × 9.0 × 10¹⁶.",
          "c² = 9,0 × 10¹⁶ м²/с². E = 3,0 × 10⁻²⁹ × 9,0 × 10¹⁶.",
        ),
        b(
          "E = 2.7 × 10⁻¹² J. Squaring c means squaring both 3.0 and the power of ten.",
          "E = 2,7 × 10⁻¹² Дж. При возведении c в квадрат возводятся и 3,0, и степень десяти.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Do not say atoms are split in fusion, or that electrons fuse to create helium.",
        "Не пиши, что при синтезе атомы расщепляются или что гелий получается слиянием электронов.",
      ),
      b(
        "Conserving A does not require the exact total rest mass to remain unchanged.",
        "Сохранение A не требует неизменности точной суммарной массы покоя.",
      ),
    ],
  },
];
