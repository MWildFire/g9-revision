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
    photoTopicRu: "Радиоактивный распад и ядерное излучение",
    visual: "penetration",
    intro: b(
      "Identify radiation by its nature, its effect on matter and its penetrating power.",
      "Различай излучения по природе, действию на вещество и проникающей способности.",
    ),
    sections: [
      s(
        "Decay of an unstable nucleus",
        "Распад неустойчивого ядра",
        "**Radioactive decay** is the spontaneous change of an unstable nucleus. The nucleus emits ionising radiation and may become a different nucleus.\n\nFor one nucleus, we can give only the probability of decay in a given time interval; we cannot predict exactly when it will decay. A large sample of nuclei decays at a predictable average rate. Temperature, pressure and chemical state do not noticeably change this rate. The time for half of the nuclei to decay is the half-life, T½. The new nucleus may also be unstable and decay again. This forms a chain of decays.",
        "**Радиоактивный распад** — самопроизвольное изменение неустойчивого ядра. Ядро испускает ионизирующее излучение (ionising radiation) и может превратиться в другое ядро.\n\nДля одного ядра можно указать только вероятность распада за определённый промежуток времени, но не точный момент. Большой образец ядер распадается с предсказуемой средней скоростью. Температура, давление и химическое состояние заметно не меняют эту скорость. Время, за которое распадается половина ядер, — период полураспада T½ (half-life). Новое ядро тоже может быть неустойчивым и распасться снова. Так возникает цепочка распадов.",
      ),
      s(
        "Alpha, beta-minus, gamma and neutrons",
        "Альфа, бета-минус, гамма и нейтроны",
        "**Alpha (α)**: a helium-4 nucleus, made of two protons and two neutrons. Charge +2, mass number 4.\n\n**Beta-minus (β⁻)**: a fast electron, created when a neutron in the nucleus changes into a proton. Charge −1, mass number 0.\n\n**Gamma (γ)**: an electromagnetic wave (a stream of photons), emitted when a nucleus loses excess energy. Charge 0, rest mass 0.\n\n**Neutron**: a particle with charge 0 and mass number 1. Neutrons are released during nuclear fission.",
        "**Альфа (α)** — ядро гелия-4: два протона и два нейтрона. Заряд +2, массовое число (mass number) 4.\n\n**Бета-минус (β⁻)** — быстрый электрон, который образуется, когда нейтрон в ядре превращается в протон. Заряд −1, массовое число 0.\n\n**Гамма (γ)** — электромагнитная волна (поток фотонов), которая испускается, когда ядро сбрасывает избыток энергии. Заряд 0, масса покоя 0.\n\n**Нейтрон** — частица с зарядом 0 и массовым числом 1. Нейтроны выделяются при делении ядер (nuclear fission).",
      ),
      s(
        "Ionisation and penetration",
        "Ионизация и проникающая способность",
        "**Ionisation** is the removal of electrons from atoms or molecules.\n\nAlpha particles ionise strongly, but their **range** (the distance they travel before they are absorbed) is short: a few centimetres in air. Paper or the dead outer layer of skin stops them. Beta particles have a longer range: a few millimetres of aluminium or a suitable plastic stops them.\n\nGamma photons ionise only indirectly: they release charged particles in matter, and those particles ionise the atoms. Gamma radiation penetrates very deeply. Thick lead or concrete reduces its intensity, but does not stop it completely.\n\nRanges depend on energy and material.",
        "**Ионизация** — выбивание электронов из атомов или молекул.\n\nАльфа-частицы сильно ионизируют, но их **пробег** (range: расстояние, которое частица проходит до остановки) короткий — несколько сантиметров в воздухе. Их задерживает лист бумаги или наружный мёртвый слой кожи. Бета-частицы проходят дальше: их задерживают несколько миллиметров алюминия или подходящий пластик.\n\nГамма-фотоны ионизируют косвенно: они выбивают заряженные частицы из вещества, а те уже ионизируют атомы. Гамма-излучение проникает очень глубоко. Толстый свинец или бетон уменьшают его интенсивность, но полностью не останавливают.\n\nПробег зависит от энергии излучения и вещества.",
      ),
      s(
        "What does a detector really measure?",
        "Что на самом деле измеряет детектор?",
        "**Activity** is the number of nuclear decays per second in a source. Its unit is the becquerel (Bq): 1 Bq means one decay per second on average.\n\n**Count rate** is the number of counts that a detector records per second or per minute. The two are usually not equal. Only part of the radiation reaches the detector and is registered. The counts also fluctuate randomly from one measurement to the next. A Geiger–Müller tube detects the ionisation that radiation causes in its gas. Its reading includes background.\n\nWhen you compare sources or absorbers, keep the distance, geometry and counting time the same.",
        "**Активность** (activity) — число распадов в источнике за секунду. Её единица — беккерель (Бк): 1 Бк означает в среднем один распад в секунду.\n\n**Скорость счёта** (count rate) — число импульсов, которые регистрирует детектор за секунду или минуту. Эти величины обычно не равны: в детектор попадает и регистрируется только часть излучения. Кроме того, счёт случайно колеблется от измерения к измерению. Счётчик Гейгера–Мюллера обнаруживает ионизацию, которую излучение создаёт в газе счётчика. Показания включают радиационный фон (background radiation).\n\nСравнивая источники или поглотители (absorbers), не меняй расстояние, геометрию и время счёта.",
      ),
      s(
        "Predicting behaviour from charge",
        "Предсказание поведения по заряду",
        "In an electric field, alpha and beta-minus particles are deflected in opposite directions. Gamma rays are not deflected, because they carry no charge.\n\nThe amount of deflection also depends on the speed and mass of the particle. So charge tells you the direction of deflection, but charge alone does not tell you how large it is.",
        "В электрическом поле альфа- и бета-минус-частицы отклоняются в противоположные стороны. Гамма-излучение не отклоняется, потому что у него нет заряда.\n\nВеличина отклонения зависит ещё и от скорости и массы частицы. Поэтому заряд задаёт направление отклонения, но одного заряда недостаточно, чтобы сказать, насколько сильно частица отклонится.",
      ),
    ],
    formulas: [
      "activity: 1 Bq = 1 decay / s",
      "count rate = counts ÷ time",
      "net count rate = total count rate − background count rate",
    ],
    examples: [
      w(
        "With the source in place, a detector records 930 counts in 30 s. Without the source, it records 90 counts in 30 s. Calculate the count rate due to the source alone.",
        "С источником детектор регистрирует 930 импульсов за 30 с. Без источника — 90 импульсов за 30 с. Вычисли скорость счёта, которую даёт только источник.",
        b(
          "Total rate = 930 / 30 = 31 counts s⁻¹; background = 90 / 30 = 3 counts s⁻¹.",
          "Полная скорость 930 / 30 = 31 имп/с; фон 90 / 30 = 3 имп/с.",
        ),
        b(
          "Source count rate = 31 − 3 = 28 counts s⁻¹. This is not automatically the source activity in Bq.",
          "Скорость счёта источника: 31 − 3 = 28 имп/с. Это не обязательно активность источника в Бк.",
        ),
      ),
      w(
        "A source emits radiation that passes through paper. When aluminium is placed in front of the detector, the reading falls to background level. Identify the radiation and explain your answer.",
        "Источник испускает излучение, которое проходит через бумагу. Когда перед детектором ставят алюминий, показания падают до уровня фона. Определи вид излучения и объясни ответ.",
        b(
          "Paper does not stop it, so it is not alpha. Aluminium stops it completely, which fits beta radiation. Gamma radiation would not be fully stopped by a few millimetres of aluminium.",
          "Бумага его не задерживает, значит, это не альфа-излучение. Алюминий задерживает его полностью, и это согласуется с бета-излучением. Несколько миллиметров алюминия не задержат гамма-излучение полностью.",
        ),
        b(
          "With the aluminium in place, the reading equals background. This supports beta radiation but does not prove it: a weak second radiation could hide in the background. Another test, such as deflection in an electric field, would strengthen the conclusion.",
          "С алюминием показания равны фону. Это говорит в пользу бета-излучения, но не доказывает его: слабое второе излучение могло бы остаться незамеченным на фоне. Ещё один опыт, например отклонение в электрическом поле, усилил бы вывод.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Do not think that a beta-minus electron comes from an electron shell. It is created by the decay itself.",
        "Не думай, что бета-минус-электрон выходит из электронного слоя (electron shell) атома. Он образуется при распаде ядра.",
      ),
      b(
        "“Most penetrating” does not mean “most dangerous”. Alpha is the least penetrating. But if an alpha emitter is swallowed or inhaled, it can cause serious harm, because its alpha particles deposit their energy in nearby tissue. The exposure route matters.",
        "«Самое проникающее» не означает «самое опасное». Альфа-излучение проникает меньше всех. Но если альфа-излучатель попал внутрь тела (с пищей или при вдыхании), он может серьёзно повредить ткани: энергия альфа-частиц поглощается соседними тканями. Важен путь воздействия.",
      ),
    ],
  },
  {
    id: "nuclear-equations",
    title: b("Balancing nuclear equations", "Уравнивание ядерных реакций"),
    photoTopic: "Nuclear equations",
    photoTopicRu: "Ядерные уравнения",
    visual: "equation",
    intro: b(
      "Conserve the total nucleon number and electric charge. Work with the two number lines before identifying a daughter element.",
      "Сохраняй суммарное число нуклонов и электрический заряд. Сначала уравняй два ряда чисел, затем определяй дочерний элемент.",
    ),
    sections: [
      s(
        "Two independent balances",
        "Два независимых баланса",
        "Energy, momentum and electric charge are conserved in every nuclear reaction.\n\nThe upper numbers count nucleons, and the totals on the two sides balance. The lower numbers represent charge in proton-charge units and must also balance. For a nucleus the lower number is Z; for an electron it is −1, not an “element with −1 protons”. A photon has 0 in both bookkeeping positions. Atomic electron shells are usually not drawn in these nuclear equations.",
        "Энергия, импульс (momentum) и электрический заряд сохраняются в любой ядерной реакции.\n\nВерхние числа показывают число нуклонов (nucleons), и их суммы слева и справа совпадают. Нижние числа показывают заряд в единицах заряда протона, и их суммы тоже должны совпадать. Для ядра нижнее число равно Z. Для электрона оно равно −1: это не «элемент с −1 протоном». У фотона и верхнее, и нижнее число равны 0. Электронные слои (electron shells) атома в таких уравнениях обычно не показывают.",
      ),
      s(
        "Alpha decay: remove a helium nucleus",
        "Альфа-распад: отделяется ядро гелия",
        "An emitted alpha particle carries away two protons and two neutrons.\n\n- The daughter has A − 4 and Z − 2.\n- Its neutron count falls by two.\n- The parent becomes a different element, because its proton count changes.\n\nExample: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. Do not subtract four from Z.",
        "Альфа-частица уносит два протона и два нейтрона.\n\n- У дочернего ядра A − 4 и Z − 2.\n- Число нейтронов уменьшается на два.\n- Меняется элемент, потому что меняется число протонов.\n\nПример: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. Из Z вычитают два, а не четыре.",
      ),
      s(
        "Beta-minus: a neutron becomes a proton",
        "Бета-минус: нейтрон превращается в протон",
        "In β⁻ decay a neutron transforms into a proton, an electron and an electron antineutrino.\n\n- A stays fixed, because one nucleon changes type.\n- Z rises by one and N falls by one.\n- The electron is created in the decay; it was not stored inside the nucleus.\n- The antineutrino has zero nucleon number and zero charge. School balancing often omits it, because it changes neither total.\n\nExample: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̅ₑ.",
        "При β⁻-распаде нейтрон превращается в протон, электрон и электронное антинейтрино.\n\n- A сохраняется: один нуклон меняет тип.\n- Z увеличивается на один, N уменьшается на один.\n- Электрон рождается при распаде, а не хранится заранее внутри ядра.\n- У антинейтрино заряд и число нуклонов равны нулю. В школьной записи его часто опускают, потому что ни одна из сумм не меняется.\n\nПример: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̅ₑ.",
      ),
      s(
        "Gamma: energy changes, element does not",
        "Гамма: меняется энергия, не элемент",
        "An excited nucleus (shown with *) emits a photon and drops to a lower energy state.\n\n- A and Z remain unchanged: ⁹⁹₄₃Tc* → ⁹⁹₄₃Tc + γ is a schematic example.\n- Gamma emission often follows another decay.\n- A mixed sequence is solved one step at a time. Two alpha and one beta-minus emissions give ΔA = −8 and ΔZ = −3.",
        "Возбуждённое ядро (обозначено *) испускает фотон и переходит в состояние с меньшей энергией.\n\n- A и Z не меняются: ⁹⁹₄₃Tc* → ⁹⁹₄₃Tc + γ — схематический пример.\n- Гамма-излучение часто следует за другим распадом.\n- Цепочку решай по шагам. Два альфа- и один бета-минус-распад дают ΔA = −8 и ΔZ = −3.",
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
        "Balanced numbers are necessary but do not prove that a proposed reaction actually occurs: energy and momentum must also allow it.",
        "Баланс чисел — необходимое условие, но он не доказывает, что предложенная реакция действительно происходит. Энергия и импульс тоже должны это допускать.",
      ),
    ],
  },
  {
    id: "half-life",
    title: b("Half-life and random decay", "Период полураспада и случайность"),
    photoTopic: "Half lives and random nature of decay",
    photoTopicRu: "Период полураспада и случайный характер распада",
    visual: "decay",
    intro: b(
      "Each nucleus decays at a random moment, and nobody can predict when a particular nucleus will decay.",
      "Каждое ядро распадается в случайный момент, и заранее нельзя сказать, когда распадётся конкретное ядро.",
    ),
    sections: [
      s(
        "What exactly halves?",
        "Что именно уменьшается вдвое?",
        "The **half-life** T½ is the time taken for half of the parent nuclei in a sample to decay. The activity of the sample halves in the same time, because activity depends on how many undecayed nuclei are left.\n\nDo not confuse the half-life with the mass of the sample: the daughter nuclei stay in the material, so its total mass does not halve in one half-life.",
        "**Период полураспада** (half-life) T½ — это время, за которое распадается половина материнских ядер (parent nuclei) образца. Активность (activity) образца за то же время уменьшается вдвое, потому что она зависит от числа ещё нераспавшихся ядер.\n\nНе путай период полураспада с массой образца: дочерние ядра (daughter nuclei) остаются в веществе, поэтому за один период полураспада масса образца вдвое не уменьшается.",
      ),
      s(
        "Repeated halving and the remaining fraction",
        "Последовательное деление пополам и оставшаяся доля",
        "Each half-life halves what is left. The fraction of the starting amount that remains after 0, 1, 2, 3 and 4 half-lives is:\n\n- 0 half-lives: 1\n- 1 half-life: 1/2\n- 2 half-lives: 1/4\n- 3 half-lives: 1/8\n- 4 half-lives: 1/16\n\nTo find the number of half-lives, divide the elapsed time by the half-life. Then halve the starting amount that many times to find what is left. The amount that has decayed is the starting amount minus what is left.\n\nIf the time is not a whole number of half-lives, use a calculator. The answer is then an expected value. Round only the final answer, and use one time unit for both the elapsed time and the half-life.",
        "Каждый период полураспада уменьшает остаток вдвое. Доля исходного количества, которая остаётся после 0, 1, 2, 3 и 4 периодов:\n\n- 0 периодов: 1\n- 1 период: 1/2\n- 2 периода: 1/4\n- 3 периода: 1/8\n- 4 периода: 1/16\n\nЧтобы найти число периодов, раздели прошедшее время на период полураспада. Затем дели начальное количество пополам столько раз, сколько периодов прошло. Так получишь остаток. Распавшаяся часть — это начальное количество минус остаток.\n\nЕсли прошедшее время не кратно периоду полураспада, нужен калькулятор. Тогда ответ — ожидаемое значение. Округляй только итоговый ответ и используй одну единицу времени для прошедшего времени и периода полураспада.",
      ),
      s(
        "Read a graph correctly",
        "Как правильно читать график",
        "First subtract the constant background count rate from the total count rate. Background radiation is always present from natural sources, so a detector records counts even without a source.\n\nWith the same detector and distance, the corrected count rate halves in the same time as the activity.\n\nChoose a corrected count rate R, and find the later time when it has fallen to R/2. The difference between the two times is one half-life. Repeat with a second pair of values to check.\n\nA decay curve falls steeply at first and then more slowly, because fewer nuclei remain to decay. It is not a straight line: each equal time interval removes the same fraction of the nuclei that remain, so the number removed gets smaller.",
        "Сначала вычти постоянный фон (background) из полной скорости счёта (count rate). Радиационный фон — излучение природных источников, поэтому детектор регистрирует импульсы и без источника.\n\nС тем же детектором и на том же расстоянии скорректированная скорость счёта уменьшается вдвое за то же время, что и активность.\n\nВозьми скорректированную скорость счёта R и найди более позднее время, когда она стала R/2. Разность этих времён — период полураспада. Повтори расчёт для другой пары точек и проверь результат.\n\nКривая сначала спадает круто, а потом всё медленнее, потому что остаётся всё меньше ядер, которые могут распасться. Это не прямая: за равные промежутки времени распадается одинаковая доля от оставшихся ядер, поэтому число распадов за каждый интервал становится меньше.",
      ),
      s(
        "Random does not mean patternless",
        "Случайность не означает отсутствие закономерности",
        "A particular nucleus has no memory of its age. Surviving one half-life does not make it more likely to decay soon.\n\nIn a small sample, more or fewer than half the nuclei may decay in one half-life. Large samples are usually much closer to the predicted fraction.\n\nCount readings fluctuate. Average several repeated readings, or count for longer, to reduce the effect of chance. One unusual reading does not show that the half-life has changed.",
        "Отдельное ядро не «помнит» свой возраст. Пережив один период полураспада, ядро не становится вероятнее распасться в ближайшее время.\n\nВ небольшом образце за один период полураспада может распасться больше или меньше половины ядер. В больших образцах доля распавшихся ядер обычно близка к ожидаемой.\n\nПоказания детектора колеблются. Усредни несколько повторных измерений или считай дольше, чтобы уменьшить влияние случайности. Одно необычное показание не доказывает, что период полураспада изменился.",
      ),
      s(
        "Work backwards and handle thresholds",
        "Обратные задачи и пороги",
        "If only 1/8 remains, three half-lives have passed. Divide the elapsed time by 3 to find T½.\n\nTo find after how many complete half-lives a value first falls below a limit, keep halving the value, one half-life at a time, until it is below the limit. “Below 10” is not the same as “10 or less”.",
        "Если осталась только 1/8, прошло три периода полураспада. Тогда раздели прошедшее время на 3, чтобы найти T½.\n\nЧтобы найти, после скольких полных периодов значение впервые станет меньше заданного предела, уменьшай его вдвое за каждый период, пока не выполнится нужное неравенство. «Меньше 10» не то же самое, что «не больше 10».",
      ),
    ],
    formulas: [
      "n = t / T½",
      "N(t) = N₀ × 2^(−t / T½)",
      "R(t) = R(0) × 2^(−t / T½)",
      "Rtotal(t) = R(t) + Rbackground",
    ],
    examples: [
      w(
        "A source has T½ = 6 h and initial activity 960 Bq. Calculate the activity and the percentage decayed after 18 h.",
        "У источника T½ = 6 ч, начальная активность 960 Бк. Рассчитай активность и процент распавшихся ядер через 18 ч.",
        b(
          "Number of half-lives: 18 h / 6 h = 3. Activity: 960 → 480 → 240 → 120 Bq.",
          "Число периодов полураспада: 18 ч / 6 ч = 3. Активность: 960 → 480 → 240 → 120 Бк.",
        ),
        b(
          "Remaining fraction = 1/8 = 12.5%, so 87.5% of the parent nuclei have decayed.",
          "Осталось 1/8 = 12,5 %, значит, распалось 87,5 % материнских ядер.",
        ),
      ),
      w(
        "The total count rate falls from 164 to 44 counts/min in 12 min. The background count rate is 4 counts/min. Calculate the half-life.",
        "Полная скорость счёта падает со 164 до 44 имп/мин за 12 мин. Фон — 4 имп/мин. Рассчитай период полураспада.",
        b(
          "Corrected rates: 164 − 4 = 160 and 44 − 4 = 40 counts/min.",
          "Без фона: 164 − 4 = 160 и 44 − 4 = 40 имп/мин.",
        ),
        b(
          "160 → 80 → 40 takes two half-lives, so T½ = 12 / 2 = 6 min. Halving the total 164 twice gives 41, not 44, because the background does not halve.",
          "160 → 80 → 40 — это два периода полураспада, значит T½ = 12 / 2 = 6 мин. Если дважды поделить пополам полную скорость 164, получится 41, а не 44: фон не уменьшается вдвое.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Subtract the background before you use a ratio; add it back only if the question asks for the total count rate.",
        "Вычти фон, прежде чем считать отношение. Прибавь его обратно, только если в задаче спрашивают полную скорость счёта.",
      ),
      b(
        "After two half-lives, 25% of the parent nuclei remain, not 0%.",
        "Через два периода полураспада остаётся 25 % материнских ядер, а не 0 %.",
      ),
    ],
  },
  {
    id: "contamination",
    title: b(
      "Contamination, irradiation and hazards",
      "Радиоактивное загрязнение (contamination), облучение (irradiation) и опасности",
    ),
    photoTopic: "Radioactive contamination",
    photoTopicRu: "Радиоактивное загрязнение (radioactive contamination)",
    visual: "contamination",
    intro: b(
      "Ask whether radioactive material moved onto or into the object, or whether only radiation reached it. This determines what happens after the source is removed.",
      "Определи, попало ли радиоактивное вещество на объект или внутрь него, либо дошло ли до него только излучение. От этого зависит, что будет после удаления источника.",
    ),
    sections: [
      s(
        "Two different mechanisms",
        "Два разных механизма",
        "Irradiation is exposure to radiation from a source. Contamination is the unwanted presence of radioactive material on or inside an object. A sealed source can irradiate a person without transferring radioactive material.\n\nA spill of radioactive solution can contaminate a surface, which then becomes a source of radiation until the material is removed or decays. Contamination can therefore also cause irradiation.",
        "Облучение — воздействие излучения источника. Загрязнение — нежелательное присутствие радиоактивного вещества на объекте или внутри. Герметичный источник (sealed source) может облучать человека без переноса вещества.\n\nПролитый радиоактивный раствор может загрязнить поверхность, которая затем становится источником излучения, пока вещество не удалено или не распадётся. Загрязнение поэтому также может вызывать облучение.",
      ),
      s(
        "External versus internal exposure",
        "Внешнее и внутреннее воздействие",
        "An external alpha source is usually blocked by dead skin, but inhaled or swallowed alpha-emitting material can irradiate living tissue at very short range with dense ionisation.\n\nGamma can reach internal organs from an external source. Beta may affect skin and can also be hazardous internally.\n\nA ranking such as “alpha is harmless” ignores location, activity, energy, exposure time and the tissues involved.",
        "Альфа-частицы (alpha particles) внешнего источника обычно задерживаются мёртвым слоем кожи. Однако вдыхание или проглатывание альфа-излучающего вещества может облучать живую ткань на очень малом расстоянии, вызывая плотную ионизацию (ionisation).\n\nГамма-излучение (gamma rays) может достигать внутренних органов извне. Бета-частицы (beta particles) могут воздействовать на кожу и также быть опасными внутри организма.\n\nСравнение видов излучения по опасности вроде «альфа безвредна» не учитывает расположение, активность (activity), энергию, время облучения и затронутые ткани.",
      ),
      s(
        "Cell damage and sensible comparisons",
        "Повреждение клеток и корректное сравнение",
        "Ionising radiation can damage molecules including DNA. Cells may repair damage, die or undergo changes that increase cancer risk.\n\n- Activity in Bq describes the source.\n- Absorbed dose is energy deposited per unit mass, in Gy\u00A0=\u00A0J/kg.\n- Equivalent dose applies radiation weighting; effective dose also applies tissue weighting. These weighted protection quantities use Sv and do not predict an individual’s exact risk.\n\nEqual activities do not necessarily imply equal biological risk. In school risk questions, use the given data and state missing information rather than inventing a medical threshold.",
        "Ионизирующее излучение (ionising radiation) может повреждать молекулы, включая ДНК (DNA). Клетка может восстановиться, погибнуть или измениться так, что возрастёт риск рака.\n\n- Активность, измеряемая в Бк, характеризует источник.\n- Поглощённая доза (absorbed dose) — энергия, переданная веществу в расчёте на единицу массы; её единица Гр\u00A0=\u00A0Дж/кг.\n- Эквивалентная доза (equivalent dose) учитывает вид излучения, а эффективная (effective dose) — ещё и вид ткани. Эти взвешенные величины радиационной защиты измеряют в Зв; они не предсказывают точный риск для отдельного человека.\n\nОдинаковая активность не обязательно означает одинаковый биологический риск. В школьных задачах на риск используй данные из условия и называй недостающие сведения, а не придумывай медицинский порог.",
      ),
      s(
        "Protection must match the mechanism",
        "Выбор защиты по механизму",
        "For external exposure, shorter time, greater distance and suitable shielding generally reduce dose. Containment and avoiding the transfer of radioactive material protect against contamination.\n\nRemoving an external source ends that source’s direct irradiation, but does not remove material already deposited.\n\nOrdinary school examples of alpha, beta or gamma irradiation do not make an object radioactive; nuclear activation, especially by neutrons, is a separate process.",
        "Для внешнего облучения доза обычно снижается при меньшем времени облучения, большем расстоянии и подходящем экране. Удержание радиоактивного вещества и предотвращение его переноса защищают от загрязнения.\n\nУдаление внешнего источника прекращает его прямое облучение, но не убирает уже осевшее вещество.\n\nВ обычных школьных примерах облучение альфа-, бета- или гамма-излучением не делает предмет радиоактивным; ядерная активация (nuclear activation), особенно нейтронами, — отдельный процесс.",
      ),
    ],
    formulas: ["dose\u00A0=\u00A0dose rate\u00A0×\u00A0exposure time (constant rate)"],
    examples: [
      w(
        "A sealed gamma source on the first bench is moved away. The second bench has radioactive dust on it. Which can remain a source?",
        "С первого стола убрали герметичный гамма-источник. На втором столе осталась радиоактивная пыль. Какой стол может оставаться источником?",
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
        "Почему слабо проникающий альфа-излучатель (alpha emitter) может представлять серьёзную опасность внутри организма?",
        b(
          "The source is already next to living cells, so penetrating the skin is irrelevant.",
          "Источник уже рядом с живыми клетками, поэтому проникновение через кожу не имеет значения.",
        ),
        b(
          "Dense ionisation deposits energy over a short path and can damage nearby DNA. Actual risk still depends on dose and tissue.",
          "Плотная ионизация передаёт энергию на коротком пути и может повреждать ДНК рядом. Реальный риск зависит от дозы и ткани.",
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
        "Экран не удаляет загрязнение и не меняет период полураспада (half-life) изотопа.",
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
      "Показание детектора (detector) — это смесь событий от источника и радиационного фона (background radiation). Переводи числа импульсов в сопоставимые скорости счёта (count rate), прежде чем делать вывод.",
    ),
    sections: [
      s(
        "Where natural background comes from",
        "Откуда берётся естественный фон",
        "Natural sources include cosmic radiation, radioactive rocks and soil, radon gas in the air, and radioisotopes in food and in the human body.\n\nArtificial sources, such as medical X-ray machines, are made by people. They are not part of this natural background. “Natural” describes origin, not harmlessness.\n\nRadioactive contamination is different. It is radioactive material that has got onto a surface, into the air or into a sample, and it is not part of the background.",
        "Природные источники — космическое излучение (cosmic radiation), радиоактивные породы и почва, радон в воздухе и радиоизотопы (radioisotopes) в пище и теле человека.\n\nИскусственные источники (artificial sources), например медицинские рентгеновские аппараты, создаёт человек. В этот естественный фон они не входят. «Природное» описывает происхождение, а не безвредность.\n\nРадиоактивное загрязнение — другое явление: это радиоактивные вещества, попавшие на поверхность, в воздух или в образец. Они не входят в фон.",
      ),
      s(
        "Why locations differ",
        "Почему места отличаются",
        "Higher altitude generally means more cosmic radiation, because there is less atmosphere above. Radon comes from soil, rocks and building materials, and it builds up in closed rooms.\n\nSo geology, building materials and ventilation all affect the radon-related background. Occupation and time spent in different environments also matter. The shares of each source depend on the country and the year, so do not memorise one set of percentages as universal.",
        "На большей высоте обычно больше космического излучения: сверху меньше атмосферы. Радон образуется в почве, горных породах и стройматериалах и накапливается в закрытых помещениях.\n\nПоэтому на фон от радона влияют геология, строительные материалы и вентиляция. Важны также профессия и время, которое человек проводит в разных условиях. Доли источников зависят от страны и года, поэтому не заучивай один набор процентов как общий.",
      ),
      s(
        "Correcting for different counting times",
        "Учёт разного времени счёта",
        "Measure background without the added source in the same location. Divide background counts by background time, and source-plus-background counts by their own time. Only then subtract the rates.\n\nLonger counting reduces relative random fluctuations. Keep the detector position and settings fixed; moving the source changes count rate without necessarily changing its activity.",
        "Измеряй фон без добавленного источника в том же месте. Раздели число фоновых импульсов на время фонового счёта, а число импульсов с источником — на их собственное время. Только затем вычитай скорости счёта.\n\nДлительный счёт уменьшает относительные случайные колебания. Положение и настройки детектора сохраняй: перемещение источника меняет скорость счёта, но не обязательно его активность (activity).",
      ),
      s(
        "Dose units are not activity units",
        "Единицы дозы — не единицы активности",
        "1 Bq = 1 decay per second. Counts/s is a detector reading, not a property of the source.\n\nGy measures absorbed dose: 1 joule of energy absorbed per kilogram of material. Sv measures equivalent or effective dose, which allows for how harmful the radiation is. mSv = 10⁻³ Sv and μSv = 10⁻⁶ Sv.\n\nFor a constant dose rate, dose = rate × time, with matching units. Do not mix up the units: a count rate alone does not determine a person’s dose.",
        "1 Бк = 1 распад в секунду. Импульсы в секунду — показание детектора, а не свойство источника.\n\nГр — единица поглощённой дозы: 1 Дж энергии на килограмм вещества. Зв — единица эквивалентной или эффективной дозы: она учитывает, насколько опасно излучение. мЗв = 10⁻³ Зв, мкЗв = 10⁻⁶ Зв.\n\nПри постоянной мощности дозы доза = мощность дозы × время, и единицы должны совпадать. Не смешивай единицы: по одной скорости счёта нельзя найти дозу человека.",
      ),
      s(
        "Evaluate a small difference",
        "Как оценить небольшую разницу",
        "If one reading is slightly above another, random variation may explain the difference. Repeat and average before claiming an effect.\n\nA negative background-subtracted result near zero does not mean negative radioactivity: it can arise from fluctuations and should be interpreted as consistent with no detectable added signal within uncertainty.",
        "Если одно показание немного больше другого, разницу может объяснить случайная изменчивость. Повтори измерения и найди среднее, прежде чем говорить об эффекте.\n\nОтрицательный результат после вычитания фона около нуля не означает отрицательную радиоактивность. Он может возникнуть из-за случайных колебаний. Такой результат стоит трактовать так: он согласуется с отсутствием заметного дополнительного сигнала в пределах погрешности.",
      ),
    ],
    formulas: [
      "R = Ctotal / ttotal − Cbackground / tbackground",
      "1 Sv = 1000 mSv = 1000000 μSv",
    ],
    examples: [
      w(
        "Background: 180 counts in 5 min. With source: 960 counts in 2 min. Calculate the net count rate in counts/s.",
        "Фон: 180 импульсов за 5 мин. С источником: 960 импульсов за 2 мин. Вычисли чистую скорость счёта в импульсах в секунду.",
        b(
          "Background = 180 / 300 = 0.6 counts/s; total = 960 / 120 = 8.0 counts/s.",
          "Фон 180 / 300 = 0,6 имп/с; полная скорость 960 / 120 = 8,0 имп/с.",
        ),
        b(
          "Net = 8.0 − 0.6 = 7.4 counts/s. This is the rate from the source alone.",
          "Чистая скорость = 8,0 − 0,6 = 7,4 импульса в секунду. Это скорость, которую даёт только источник.",
        ),
      ),
      w(
        "The dose rate is 2.5 μSv/h for 8 h. Express the dose in μSv and mSv.",
        "Мощность дозы 2,5 мкЗв/ч в течение 8 ч. Вырази дозу в мкЗв и мЗв.",
        b("Dose = 2.5 × 8 = 20 μSv.", "Доза = 2,5 × 8 = 20 мкЗв."),
        b(
          "20 μSv = 0.020 mSv. This arithmetic alone does not show whether the dose is harmful.",
          "20 мкЗв = 0,020 мЗв. По одному этому расчёту нельзя судить, опасна ли такая доза.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Never subtract raw counts taken over different durations.",
        "Нельзя вычитать сырые числа импульсов за разные промежутки времени.",
      ),
    ],
  },
  {
    id: "half-life-choice",
    title: b(
      "Comparing isotopes and half-lives",
      "Сравнение изотопов по периоду полураспада",
    ),
    photoTopic: "Different half lives of radioactive isotopes",
    visual: "decay",
    intro: b(
      "Half-life helps explain activity and how long a source persists, but it does not by itself decide danger or suitability. Always state the basis of your comparison.",
      "Период полураспада помогает объяснить активность и то, как долго источник сохраняется, но сам по себе не определяет опасность или пригодность. Всегда указывай, по какому признаку сравниваешь.",
    ),
    sections: [
      s(
        "Fast decay versus long persistence",
        "Быстрый распад и долгое сохранение",
        "For the same number of parent nuclei, a shorter half-life means more decays per second at the start. Those parent nuclei also run out faster. A longer half-life means fewer decays per second, but the material persists for longer. So “a shorter half-life is safer” and “a longer half-life is safer” are both incomplete: the answer depends on when, where and how the source is used.",
        "При одинаковом числе материнских ядер (parent nuclei) меньший период полураспада означает больше распадов в секунду в начале. Материнские ядра при этом быстрее расходуются. Больший период означает меньше распадов в секунду, зато материал сохраняется дольше. Поэтому «короткий период безопаснее» и «длинный период безопаснее» — оба утверждения неполны: ответ зависит от того, когда, где и как используют источник.",
      ),
      s(
        "What must be equal?",
        "Что должно быть одинаковым?",
        "Equal initial activity is not the same as equal numbers of nuclei. Samples with equal initial activity behave differently later if their half-lives differ. Samples of equal mass may contain different numbers of atoms, because their isotopes have different masses. Do not confuse activity 𝒜 with mass number A.\n\n**Extended:** activity 𝒜 = λN, where λ = ln 2 / T½ (use seconds for T½ when activity is in becquerels, Bq).",
        "Одинаковая начальная активность — не то же самое, что одинаковое число ядер. Образцы с одинаковой начальной активностью дальше ведут себя по-разному, если их периоды полураспада различаются. Образцы одинаковой массы могут содержать разное число атомов, потому что массы изотопов различны. Не путай активность 𝒜 с массовым числом A.\n\n**Для углублённых:** активность 𝒜 = λN, где λ = ln 2 / T½. Если активность в беккерелях (Бк), подставляй T½ в секундах.",
      ),
      s(
        "Matching the working time",
        "Подбор периода под время работы",
        "A medical tracer must stay detectable long enough for preparation and imaging, but it should not stay highly active unnecessarily afterwards. An industrial gauge needs a long enough working life, so that it does not need frequent replacement or adjustment. Half-life is only one criterion: radiation type, energy, chemistry, the tissue being irradiated and the amount used also matter.",
        "Медицинский радиоактивный индикатор должен быть заметен достаточно долго для подготовки и исследования. После исследования он не должен без нужды сохранять высокую активность. Промышленному датчику нужен достаточно долгий срок службы, чтобы его не приходилось часто менять или перенастраивать. Период полураспада — лишь один из критериев: важны также вид и энергия излучения, химические свойства, облучаемая ткань и количество используемого вещества.",
      ),
      s(
        "Decay and biological removal",
        "Распад и выведение из организма",
        "Half-life describes only nuclear decay. A substance may also leave the body through biological processes, so its amount in an organ can fall faster than decay alone predicts. In this lesson, biological removal is ignored unless a question says otherwise. A decay daughter can itself be radioactive, so one half-life alone does not show the full risk of waste.",
        "Период полураспада описывает только ядерный распад. Вещество может выводиться из организма и другими путями. Тогда его количество в органе может уменьшаться быстрее, чем предсказывает один лишь распад. В этом уроке выведение не учитывается, если в задании не сказано иначе. Дочернее ядро (daughter nucleus) тоже может быть радиоактивным, поэтому одного периода полураспада недостаточно, чтобы оценить полный риск от отходов.",
      ),
    ],
    formulas: ["extension: 𝒜 = λN", "extension: λ = ln(2) / T½"],
    examples: [
      w(
        "Two samples each start at 800 Bq. X has T½ = 2 h, Y has T½ = 8 h. Calculate both activities after 8 h and the ratio of Y’s activity to X’s.",
        "У обоих образцов начальная активность 800 Бк. У X T½ = 2 ч, у Y T½ = 8 ч. Вычисли обе активности через 8 ч и отношение активности Y к активности X.",
        b(
          "X: 8 h / 2 h = 4 half-lives, so 800 / 2⁴ = 800 / 16 = 50 Bq. Y: 8 h / 8 h = 1 half-life, so 800 / 2 = 400 Bq.",
          "X: 8 ч / 2 ч = 4 периода полураспада, значит 800 / 2⁴ = 800 / 16 = 50 Бк. Y: 8 ч / 8 ч = 1 период полураспада, значит 800 / 2 = 400 Бк.",
        ),
        b(
          "So Y is eight times as active as X after 8 h. Activity alone does not prove eight times the biological risk.",
          "Значит, через 8 ч Y активнее X в восемь раз. Одна только активность ещё не доказывает восьмикратного биологического риска.",
        ),
      ),
      w(
        "Two samples contain the same number of radioactive nuclei. Their half-lives are 3 h and 12 h. Calculate the ratio of the initial activity of the 3 h sample to that of the 12 h sample.",
        "В двух образцах одинаковое число радиоактивных ядер. Периоды полураспада — 3 ч и 12 ч. Вычисли отношение начальной активности образца с периодом 3 ч к начальной активности образца с периодом 12 ч.",
        b(
          "At the same N, activity is inversely proportional to T½, so the ratio is 12 h / 3 h = 4.",
          "При одинаковом числе ядер N активность обратно пропорциональна T½, поэтому отношение активностей равно 12 ч / 3 ч = 4.",
        ),
        b(
          "So the 3 h sample starts four times as active. This conclusion needs equal numbers of nuclei.",
          "Значит, образец с периодом 3 ч вначале активнее в четыре раза. Этот вывод верен только при одинаковом числе ядер.",
        ),
      ),
    ],
    pitfalls: [
      b(
        "A long half-life does not make a source harmless.",
        "Длинный период полураспада не делает источник безвредным.",
      ),
      b(
        "When you compare activities through half-life, always write “for equal numbers of nuclei”.",
        "Когда сравниваешь активности по периоду полураспада, обязательно пиши «при одинаковом числе ядер».",
      ),
    ],
  },
  {
    id: "uses",
    title: b(
      "Choosing radiation for a purpose",
      "Выбор излучения для цели",
    ),
    photoTopic: "Uses of nuclear radiation",
    visual: "penetration",
    intro: b(
      "Justify a choice as a chain: required job → useful property → suitable radiation → limitation. Use the data, not just the name of an application.",
      "Обосновывай выбор по цепочке: задача → нужное свойство → подходящее излучение → ограничение. Используй данные, а не только название применения.",
    ),
    sections: [
      s(
        "Tracers and imaging",
        "Индикаторы и диагностика",
        "A tracer follows a process, such as movement through an organ or pipe. For detection outside the body, sufficiently penetrating gamma photons are useful.\n\nA suitable half-life is long enough to obtain the image but short enough to limit unnecessary radiation later; appropriate chemistry and biological removal matter too.\n\nTechnetium-99m is a common example, with a half-life of about 6 h. The shortest half-life is not always the best choice.",
        "Радиоактивный индикатор (tracer) позволяет проследить процесс, например движение вещества в органе или трубе. Для обнаружения снаружи тела полезны достаточно проникающие гамма-кванты.\n\nПериод полураспада (half-life) должен быть достаточно большим, чтобы получить изображение, и достаточно малым, чтобы позже ограничить ненужное облучение. Важны также подходящие химические свойства и выведение вещества из организма.\n\nРаспространённый пример — технеций-99m с периодом полураспада около 6 ч. Самый короткий период полураспада не всегда лучший выбор.",
      ),
      s(
        "Treating tissue versus imaging it",
        "Лечение ткани и диагностика",
        "Radiotherapy uses ionisation to damage target cells. External gamma beams can penetrate to a tumour; directing beams from several angles can concentrate dose at the target while spreading it through other tissue.\n\nOther treatments place sources close to or within target tissue, so the best choice of radiation depends on the case. Healthy cells can also be harmed; the claim “radiation kills only cancer cells” is false.\n\nImaging seeks a detectable signal with appropriately limited dose; therapy seeks a prescribed damaging dose at a target.",
        "Лучевая терапия (radiotherapy) использует ионизацию (ionisation) для повреждения клеток-мишеней. Внешние гамма-пучки могут достигать опухоли; пучки с разных сторон позволяют концентрировать дозу в мишени и распределять её по окружающим тканям.\n\nВ других методах источник помещают рядом с мишенью или внутри неё, поэтому лучший вид излучения зависит от конкретной ситуации. Здоровые клетки тоже могут повреждаться: утверждение «излучение убивает только раковые клетки» неверно.\n\nДиагностика стремится получить заметный сигнал при допустимо малой дозе, а терапия — заданную повреждающую дозу в мишени.",
      ),
      s(
        "Thickness control",
        "Контроль толщины",
        "A beta source and detector can be placed on opposite sides of a thin sheet. A thicker sheet absorbs more beta radiation, so the corrected count (after background subtraction) falls.\n\nFeedback adjusts the rollers to restore the target thickness. Alpha may be completely stopped by even a thin sheet; very penetrating gamma may change too little with thickness.\n\nThe choice depends on material and thickness: gamma may suit thicker products.",
        "Бета-источник и детектор ставят по разные стороны тонкого листа. Более толстый лист поглощает больше бета-частиц, и скорректированный счёт (за вычетом фона) падает.\n\nОбратная связь (feedback) подстраивает валики, чтобы вернуть заданную толщину. Альфа-излучение может полностью задерживаться даже тонким листом; очень проникающее гамма-излучение может слишком слабо менять счёт при изменении толщины.\n\nВыбор зависит от вещества и толщины: для более толстых изделий может подходить гамма-излучение.",
      ),
      s(
        "Smoke detectors and sterilisation",
        "Датчики дыма и стерилизация",
        "In an ionisation smoke detector, a small sealed alpha source creates ions in the air, allowing a small current. Smoke changes the ion movement and reduces the current, triggering an alarm. Gamma irradiation can sterilise packaged medical equipment by damaging microorganisms while penetrating the packaging.",
        "В ионизационном датчике дыма (ionisation smoke detector) небольшой закрытый альфа-источник создаёт ионы в воздухе, благодаря чему возникает слабый ток. Дым меняет движение ионов и уменьшает ток, поэтому датчик включает сигнал тревоги. Гамма-облучение может стерилизовать упакованное медицинское оборудование: оно повреждает микроорганизмы и проходит сквозь упаковку.",
      ),
      s(
        "Build a justified judgement",
        "Как строить обоснованный вывод",
        "Explain the mechanism. Apply it to a new design or calculation. Evaluate a claim using the evidence given, and state its limitations. For example, a higher detector count may improve image statistics but can come with a greater dose to the patient; one number does not settle the choice. A full social or economic evaluation may belong to criterion D, so this lesson focuses on scientific suitability and evidence.",
        "Объясни механизм. Примени его к новой конструкции или расчёту. Оцени утверждение по приведённым данным и укажи его ограничения. Например, больший счёт может улучшить статистику изображения, но сопровождаться большей дозой облучения пациента; одного числа недостаточно для выбора. Полная социальная или экономическая оценка может относиться к критерию D, поэтому этот урок посвящён научной пригодности и доказательствам.",
      ),
    ],
    formulas: ["thicker sheet → more absorption → lower corrected count"],
    examples: [
      w(
        "A paper gauge count drops while source activity is effectively constant. Explain the likely thickness change and state one limitation of your conclusion.",
        "Счёт датчика толщины бумаги падает, а активность источника практически постоянна. Объясни вероятное изменение толщины и назови одно ограничение своего вывода.",
        b(
          "A thicker sheet absorbs more beta particles, leaving fewer to reach the detector.",
          "Более толстый лист поглощает больше бета-частиц, поэтому до детектора доходит меньше частиц.",
        ),
        b(
          "This conclusion assumes fixed alignment, material composition and detector response; a fault could also reduce the count.",
          "Вывод предполагает, что расположение, состав материала и отклик детектора не меняются; неисправность тоже может снизить счёт.",
        ),
      ),
      w(
        "For imaging 3 h after preparation, choose among hypothetical gamma tracers with half-lives 1 min, 6 h and 30 years, all initially equally active and chemically suitable.",
        "Для исследования через 3 ч после подготовки выбери один из условных гамма-индикаторов с периодами полураспада 1 мин, 6 ч и 30 лет. Все они одинаково активны в начале и подходят по химическим свойствам.",
        b(
          "The 1 min source would lose essentially all useful activity over 180 half-lives. The 30 year source persists unnecessarily long.",
          "За 180 периодов минутный источник практически утратит полезную активность. Источник с периодом 30 лет сохраняется неоправданно долго.",
        ),
        b(
          "6 h is the reasonable compromise under the given assumptions: after 3 h, half a half-life has passed and about 71% of the activity remains (2⁻⁰·⁵ ≈ 0.71). Then the activity keeps falling over the following hours.",
          "6 ч — разумный компромисс при данных допущениях: через 3 ч, то есть за половину периода полураспада, остаётся около 71 % активности (2⁻⁰·⁵ ≈ 0,71). Затем активность продолжает падать в течение следующих часов.",
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
      "Follow one neutron-induced event and then many events. Distinguish releasing energy from controlling its rate.",
      "Проследи одно деление ядра (nuclear fission), вызванное нейтроном, а затем множество делений. Различай выделение энергии и управление скоростью, с которой она выделяется.",
    ),
    sections: [
      s(
        "One induced fission event",
        "Одно деление, вызванное нейтроном",
        "A suitable heavy nucleus such as uranium-235 can absorb a neutron, form an excited compound nucleus and split into two smaller nuclei. Additional neutrons and energy are released, often with gamma radiation. Products are not always identical: several fragment pairs are possible. Much of the released energy initially appears as kinetic energy of the fragments and becomes thermal energy in the surrounding material.",
        "Подходящее тяжёлое ядро, например уран-235, поглощает нейтрон, образует возбуждённое составное ядро (compound nucleus) и делится на два меньших ядра. Выделяются вторичные нейтроны и энергия, часто вместе с гамма-излучением. Продукты деления не всегда одинаковы: возможны разные пары осколков. Большая часть энергии сначала появляется в виде кинетической энергии осколков, а затем превращается во внутреннюю энергию окружающего вещества.",
      ),
      s(
        "A balanced example, not the only outcome",
        "Пример уравнения и другие исходы",
        "One possible channel is ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + energy. Sum of mass numbers: 1 + 235 = 141 + 92 + 3 = 236. Sum of charge numbers: 92 = 56 + 36. Nucleon numbers are conserved, but the total mass of the products is slightly lower; the difference corresponds to released energy. Do not confuse nucleon count with exact mass.",
        "Один возможный канал: ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + энергия. Сумма массовых чисел: 1 + 235 = 141 + 92 + 3 = 236. Сумма зарядовых чисел: 92 = 56 + 36. Число нуклонов сохраняется, но суммарная масса продуктов чуть меньше; разность соответствует выделенной энергии. Не путай число нуклонов с точной массой.",
      ),
      s(
        "When a chain continues",
        "Условия продолжения цепной реакции",
        "Released neutrons may cause further fissions, but some escape or are absorbed without fission. If each event causes on average less than one further event, the chain dies away; about one maintains a steady rate; more than one makes the rate grow.\n\nThis is an average branching model, not a recipe for a real reactor. A drawing with three emitted neutrons does not show that every one certainly causes another fission.",
        "Выделившиеся нейтроны могут вызвать новые деления, но часть вылетает наружу или поглощается, не вызвав деления. Если каждое деление в среднем вызывает меньше одного нового, цепная реакция (chain reaction) затухает. Если в среднем примерно одно, скорость остаётся постоянной. Если больше одного, скорость растёт.\n\nЭто упрощённая модель со средними значениями, а не инструкция для настоящего реактора. Рисунок с тремя испущенными нейтронами не показывает, что каждый из них обязательно вызовет деление.",
      ),
      s(
        "Control rods, moderator and coolant",
        "Управляющие стержни, замедлитель и теплоноситель",
        "In a thermal reactor, the moderator slows neutrons so further fission is more likely for uranium-235. Control rods absorb neutrons, controlling the fission rate. Coolant transfers thermal energy away; in a typical power station it is ultimately used to produce steam, drive a turbine and turn a generator. These components have different jobs. Fission products can remain radioactive, and cooling can still be needed after the chain reaction is stopped.",
        "В тепловом реакторе замедлитель замедляет нейтроны, повышая вероятность деления урана-235. Управляющие стержни поглощают нейтроны и регулируют скорость реакции. Теплоноситель отводит тепло; на типичной станции его в итоге используют, чтобы получить пар, который вращает турбину и генератор. Это разные функции. Осколки могут оставаться радиоактивными, поэтому охлаждение может требоваться после остановки цепной реакции.",
      ),
      s(
        "Energy and power questions",
        "Задачи на энергию и мощность",
        "If the energy per fission is given, multiply it by the number of fissions. For a rate of fissions, multiply energy per fission by fissions per second to obtain power in watts. Electrical power may be smaller than thermal power; apply efficiency only if supplied. The same energy ideas apply to nuclear processes.",
        "Если дана энергия одного деления, умножь её на число делений. Если дано число делений в секунду, умножь энергию одного деления на него и получи мощность в ваттах. Электрическая мощность может быть меньше тепловой. КПД (efficiency) учитывай, только если он дан. Знакомые тебе идеи об энергии применимы и к ядерным процессам.",
      ),
    ],
    formulas: [
      "Etotal = number of fissions × energy per fission",
      "P = energy per fission × fissions per second",
      "Puseful = efficiency × Pinput",
    ],
    examples: [
      w(
        "Each event releases 3.2 × 10⁻¹¹ J. The rate is 5.0 × 10¹⁸ fissions/s. Find the thermal power and the electrical power at 35% efficiency.",
        "Каждое деление даёт 3,2 × 10⁻¹¹ Дж. Происходит 5,0 × 10¹⁸ делений в секунду. Найди тепловую и электрическую мощности при КПД 35 %.",
        b(
          "P = (3.2 × 10⁻¹¹) × (5.0 × 10¹⁸) = 16 × 10⁷ W = 1.6 × 10⁸ W = 160 MW.",
          "P = (3,2 × 10⁻¹¹) × (5,0 × 10¹⁸) = 16 × 10⁷ Вт = 1,6 × 10⁸ Вт = 160 МВт.",
        ),
        b(
          "Electrical power = 0.35 × 160 = 56 MW. Do not multiply by 35 instead of 0.35.",
          "Электрическая мощность = 0,35 × 160 = 56 МВт. Не умножай на 35 вместо 0,35.",
        ),
      ),
      w(
        "Explain why inserting control rods deeper reduces the fission rate.",
        "Объясни, почему более глубокое введение управляющих стержней снижает скорость деления.",
        b(
          "More neutrons are absorbed by the rods rather than reaching fissile nuclei.",
          "Стержни поглощают больше нейтронов, которые иначе могли бы попасть в делящиеся ядра.",
        ),
        b(
          "Fewer neutrons initiate further fission events, reducing the chain reaction rate and power. The rods do not “cool the neutrons”.",
          "Меньше нейтронов — меньше новых делений: скорость цепной реакции и мощность падают. Стержни не «охлаждают нейтроны».",
        ),
      ),
    ],
    pitfalls: [
      b(
        "Do not swap the roles: the moderator slows neutrons, while control rods absorb them.",
        "Не путай роли: замедлитель замедляет нейтроны, а стержни поглощают их.",
      ),
      b(
        "Energy per fission is not power: power needs the number of fissions per second.",
        "Энергия одного деления — ещё не мощность: нужно знать, сколько делений происходит в секунду.",
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
        "Nuclear fusion combines light nuclei into a heavier nucleus. A useful example is deuterium plus tritium: ²₁H + ³₁H → ⁴₂He + ¹₀n + energy. This reaction produces a neutron as well as helium. In stellar interiors, hydrogen fusion proceeds through reaction chains; the D–T reaction is a convenient teaching example, not the main reaction sequence in the Sun.",
        "При термоядерном синтезе (nuclear fusion) лёгкие ядра объединяются в более тяжёлое ядро. Пример — реакция дейтерия (deuterium) и трития (tritium): ²₁H + ³₁H → ⁴₂He + ¹₀n + энергия. Помимо гелия, образуется ещё и нейтрон. В недрах звёзд синтез водорода идёт через цепочки реакций. D–T — удобный учебный пример, а не главная цепочка реакций на Солнце.",
      ),
      s(
        "Why high temperature is needed",
        "Зачем нужна высокая температура",
        "Both nuclei are positively charged and repel electrostatically. They must approach extremely closely for the short-range nuclear interaction to bind them. Very high temperature makes nuclei move very fast; sufficient density and confinement time increase the chance of useful collisions. In stars, gravity helps provide confinement. Heating alone does not guarantee a self-sustaining reaction: energy losses and confinement also matter.",
        "Оба ядра положительны и электрически отталкиваются. Им нужно очень сильно сблизиться, чтобы подействовало короткодействующее ядерное взаимодействие. Очень высокая температура даёт большую кинетическую энергию; достаточные плотность и время удержания повышают число полезных столкновений. В звёздах удержанию помогает гравитация. Одного нагрева недостаточно, чтобы реакция шла сама по себе: важны потери энергии и удержание.",
      ),
      s(
        "Mass–energy accounting",
        "Учёт массы и энергии",
        "In an energy-releasing reaction, the total rest mass of the products is less than that of the reactants. Nucleon number and charge still balance. For the relevant light nuclei, products are more tightly bound overall.\n\n**Extended:** the difference Δm corresponds to energy E = Δmc².",
        "В реакции с выделением энергии суммарная масса покоя продуктов меньше суммарной массы покоя исходных частиц. Число нуклонов (nucleon number) и заряд при этом сохраняются. Для таких лёгких ядер продукты в целом связаны прочнее.\n\n**Для углублённых:** дефект массы Δm соответствует энергии E = Δmc².",
      ),
      s(
        "Compare without slogans",
        "Сравнение без упрощённых лозунгов",
        "Fission splits a heavy nucleus; fusion joins light nuclei. Both are nuclear changes and can release much more energy per reaction than typical chemical changes.\n\nFission can sustain a neutron-driven chain; fusion is not the same neutron branching process. D–T fusion does not produce the same heavy fission fragments, but its neutrons can activate surrounding materials and tritium is radioactive.\n\n“Fusion has no radioactive issues” is therefore too absolute.",
        "При делении распадается тяжёлое ядро, при синтезе объединяются лёгкие. Оба процесса ядерные и могут выделять намного больше энергии на реакцию, чем типичные химические процессы.\n\nДеление поддерживает нейтронную цепную реакцию; синтез не является таким же разветвлённым нейтронным процессом. При D–T не возникают те же тяжёлые осколки, но нейтроны могут активировать окружающие материалы, а тритий радиоактивен.\n\nПоэтому «при синтезе нет радиоактивных проблем» слишком категорично.",
      ),
      s(
        "Recognise a criterion-A answer",
        "Признаки ответа по критерию A",
        "For “explain”, link charge repulsion to the need for close approach and kinetic energy. For “calculate”, show substitution, powers of ten and units. For “evaluate”, identify which part of a claim is supported, which part overreaches and what evidence is missing. You do not need a speculative prediction about commercial fusion to explain the physics correctly.",
        "Если в задании «explain» (объясни), свяжи электрическое отталкивание ядер с необходимостью тесного сближения и большой кинетической энергии. Если в задании «calculate» (вычисли), покажи подстановку значений, степени десяти и единицы измерения.\n\nЕсли в задании «evaluate» (оцени), укажи, какая часть утверждения подтверждена, какая выходит за рамки доказанного и каких доказательств не хватает. Чтобы правильно объяснить физику, не нужны предположительные прогнозы о коммерческом синтезе.",
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
          "Баланс массовых чисел: 2 + 3 = 4 + A, значит A = 1. Баланс зарядов: 1 + 1 = 2 + Z, значит Z = 0.",
        ),
        b(
          "X is a neutron, ¹₀n. The reaction is fusion because light nuclei combine.",
          "X — нейтрон ¹₀n. Это синтез, потому что лёгкие ядра объединяются.",
        ),
      ),
      w(
        "Extended: a reaction has mass defect 3.0 × 10⁻²⁹ kg. Use c = 3.0 × 10⁸ m/s to calculate energy.",
        "Для углублённых: дефект массы 3,0 × 10⁻²⁹ кг. Используй c = 3,0 × 10⁸ м/с и вычисли энергию.",
        b(
          "c² = 9.0 × 10¹⁶ m²/s². E = 3.0 × 10⁻²⁹ × 9.0 × 10¹⁶.",
          "c² = 9,0 × 10¹⁶ м²/с². E = 3,0 × 10⁻²⁹ × 9,0 × 10¹⁶.",
        ),
        b(
          "E = 2.7 × 10⁻¹² J. Squaring c means squaring both 3.0 and the power of ten.",
          "E = 2,7 × 10⁻¹² Дж. При возведении c в квадрат возводятся и 3,0, и степень десяти.",
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
        "Сохранение массового числа A не требует неизменности точной суммарной массы покоя.",
      ),
    ],
  },
];
