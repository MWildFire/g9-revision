import { b } from "./types";
export const sources = [
  {
    title: "IB MYP Sciences subject brief",
    url: "https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief-sciences-en.pdf",
    note: b(
      "Assessment framework: scientific knowledge, application and supported judgments. No claim about this school’s exact paper.",
      "Рамки оценивания: знания, применение и научно обоснованные выводы. Не спецификация конкретной школьной работы.",
    ),
  },
  {
    title: "AQA · Atomic structure",
    url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/atomic-structure",
    note: b(
      "Cross-check of topic terminology on the supplied PiXL overview; AQA/HT labels are not IB grade bands.",
      "Проверка терминов исходного обзора PiXL; пометки AQA/HT не являются уровнями оценки IB.",
    ),
  },
  {
    title: "CDC · Contamination versus exposure",
    url: "https://www.cdc.gov/radiation-emergencies/causes/",
    note: b(
      "Distinction between radioactive material and radiation exposure.",
      "Различие радиоактивного вещества и воздействия излучения.",
    ),
  },
  {
    title: "US Department of Energy · Fission and fusion",
    url: "https://www.energy.gov/ne/articles/fission-and-fusion-what-difference",
    note: b(
      "Physical distinction between splitting heavy nuclei and joining light nuclei.",
      "Физическое различие деления тяжёлых и объединения лёгких ядер.",
    ),
  },
  {
    title: "IAEA · Technetium-99m applications",
    url: "https://conferences.iaea.org/event/107/contributions/1944/",
    note: b(
      "Gamma tracer example and approximately six-hour half-life.",
      "Гамма-индикатор и период около шести часов.",
    ),
  },
  {
    title: "NASA · Solar interior",
    url: "https://solarscience.msfc.nasa.gov/interior.shtml",
    note: b(
      "The Sun’s proton–proton chain, distinguished from the D–T teaching example.",
      "Протон-протонная цепь Солнца в отличие от учебного примера D–T.",
    ),
  },
  {
    title: "ITER · Fusion FAQs",
    url: "https://www.iter.org/faqs",
    note: b(
      "D–T products, tritium and neutron activation: avoids the claim of no radioactive issues.",
      "Продукты D–T, тритий и нейтронная активация: без утверждения об отсутствии радиоактивных проблем.",
    ),
  },
];
export const glossary = [
  [
    "nucleus",
    "ядро",
    "The small central region containing protons and neutrons.",
    "Маленькая центральная область с протонами и нейтронами.",
  ],
  [
    "nucleon",
    "нуклон",
    "A proton or neutron in the nucleus.",
    "Протон или нейтрон ядра.",
  ],
  [
    "nuclide",
    "нуклид",
    "A nuclear species specified by proton and neutron counts.",
    "Вид ядер с определённым числом протонов и нейтронов.",
  ],
  [
    "isotope",
    "изотоп",
    "Same element (same Z), different neutron count.",
    "Тот же элемент (то же Z), другое число нейтронов.",
  ],
  [
    "ion",
    "ион",
    "An atom or group with non-zero net electric charge.",
    "Атом или группа с ненулевым суммарным зарядом.",
  ],
  [
    "excitation",
    "возбуждение",
    "A transition to a higher energy state without necessarily removing a particle.",
    "Переход на более высокий уровень энергии без обязательного удаления частицы.",
  ],
  [
    "ionisation",
    "ионизация",
    "Formation of ions, for example by removing electrons.",
    "Образование ионов, например при удалении электронов.",
  ],
  [
    "activity",
    "активность",
    "Number of nuclear decays per second in the source, measured in Bq.",
    "Число распадов источника за секунду, измеряется в Бк.",
  ],
  [
    "count rate",
    "скорость счёта",
    "Detected events per unit time; not necessarily equal to activity.",
    "Обнаруженные события за время; не обязательно равна активности.",
  ],
  [
    "half-life",
    "период полураспада",
    "Time for expected parent-nucleus count or isotope activity to halve.",
    "Время уменьшения ожидаемого числа родительских ядер или активности изотопа вдвое.",
  ],
  [
    "background",
    "фон",
    "Radiation detected without the added source.",
    "Излучение, регистрируемое без добавленного источника.",
  ],
  [
    "contamination",
    "загрязнение",
    "Unwanted radioactive material on or inside an object.",
    "Нежелательное радиоактивное вещество на объекте или внутри.",
  ],
  [
    "irradiation",
    "облучение",
    "Exposure to radiation.",
    "Воздействие излучения.",
  ],
  [
    "attenuation",
    "ослабление",
    "Reduction of radiation intensity during passage through matter.",
    "Уменьшение интенсивности излучения при прохождении вещества.",
  ],
  [
    "fission",
    "деление",
    "Splitting a heavy nucleus into smaller nuclei.",
    "Расщепление тяжёлого ядра на меньшие.",
  ],
  [
    "fusion",
    "синтез",
    "Combining light nuclei into products containing a heavier nucleus.",
    "Объединение лёгких ядер с образованием более тяжёлого ядра.",
  ],
  [
    "moderator",
    "замедлитель",
    "Material that slows neutrons in a thermal reactor.",
    "Материал, замедляющий нейтроны в тепловом реакторе.",
  ],
  [
    "control rod",
    "управляющий стержень",
    "Absorbs neutrons to control a chain reaction.",
    "Поглощает нейтроны для управления цепной реакцией.",
  ],
  [
    "coolant",
    "теплоноситель",
    "Transfers thermal energy out of the reactor core.",
    "Отводит внутреннюю энергию из активной зоны реактора.",
  ],
  [
    "daughter nucleus",
    "дочернее ядро",
    "Nucleus produced by a decay or reaction; it may itself be unstable.",
    "Ядро, возникающее при распаде или реакции; тоже может быть неустойчивым.",
  ],
];
export const commandTerms = [
  [
    "State / Identify",
    "Name the fact or quantity precisely; add units where needed.",
    "Точно назови факт или величину; укажи единицы, если нужны.",
  ],
  [
    "Describe",
    "Say what happens or give the observed pattern.",
    "Опиши происходящее или наблюдаемую закономерность.",
  ],
  [
    "Explain",
    "Link a cause or scientific principle to the observation using “because / therefore”.",
    "Свяжи причину или физический принцип с наблюдением через «потому что / поэтому».",
  ],
  [
    "Calculate / Determine",
    "Show the relationship, substitution, working and a result with units.",
    "Покажи зависимость, подстановку, действия и результат с единицами.",
  ],
  [
    "Compare",
    "Address both cases using the same features and explicit similarities/differences.",
    "Сопоставь оба случая по одинаковым признакам, указав сходства и различия.",
  ],
  [
    "Analyse",
    "Extract a pattern and connect relevant data to the physical mechanism.",
    "Выдели закономерность и свяжи данные с физическим механизмом.",
  ],
  [
    "Evaluate / Justify",
    "Make a judgment supported by evidence, explain limits, and avoid stronger conclusions than the data allow.",
    "Сделай вывод с опорой на данные, укажи ограничения и не утверждай больше, чем позволяют данные.",
  ],
];
