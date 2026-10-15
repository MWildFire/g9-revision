import { b } from "./types";
export const sources = [
  {
    title: "Paul Morris · Physics for the IB MYP 4 & 5: By Concept",
    url: "https://www.hachettelearning.com/physics/physics-for-the-ib-myp-4-5",
    note: b("Chapter 11: atomic structure, radiation and nuclear energy.", "Глава 11: строение атома, излучение и ядерная энергия."),
  },
  {
    title: "Открытая физика · Физика атома и атомного ядра",
    url: "https://physics.ru/courses/op25part2/content/chapter6/section/paragraph1/theory.html",
    note: b("Russian explanations of atomic models and nuclear physics.", "Объяснения моделей атома и ядерной физики на русском языке."),
  },
  {
    title: "IB MYP Sciences subject brief",
    url: "https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief-sciences-en.pdf",
    note: b(
      "An overview of scientific knowledge, investigation, data analysis and evaluation in MYP sciences.",
      "Обзор знаний, исследования, анализа данных и оценивания в естественных науках MYP.",
    ),
  },
  {
    title: "AQA · Atomic structure",
    url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/atomic-structure",
    note: b(
      "A further outline of atomic structure and radioactivity.",
      "Дополнительный перечень понятий о строении атома и радиоактивности.",
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
      "How fusion releases energy in the Sun.",
      "Как при синтезе выделяется энергия в Солнце.",
    ),
  },
  {
    title: "ITER · Fusion FAQs",
    url: "https://www.iter.org/faqs",
    note: b(
      "Deuterium–tritium fusion, plasma confinement and the materials used in fusion reactors.",
      "Дейтерий-тритиевый синтез, удержание плазмы и материалы термоядерных установок.",
    ),
  },
];
export const glossary = [
  [
    "nucleus",
    "атомное ядро",
    "The tiny central part of an atom. It contains protons and neutrons, except in hydrogen-1, which has one proton and no neutrons. Almost all atomic mass is here.",
    "Маленькая центральная часть атома. Состоит из протонов и нейтронов; у водорода-1 в ядре один протон и нет нейтронов. В ядре сосредоточена почти вся масса атома."
  ],
  [
    "nucleon",
    "нуклон",
    "A proton or neutron, the two types of particle that make up ordinary atomic nuclei.",
    "Протон или нейтрон — один из двух видов частиц, составляющих обычные атомные ядра."
  ],
  [
    "nuclide",
    "нуклид",
    "A type of atom defined by the number of protons and neutrons in its nucleus, such as carbon-14.",
    "Вид атомов с определённым числом протонов и нейтронов в ядре, например углерод-14."
  ],
  [
    "isotope",
    "изотоп",
    "One of the types of atom of an element with the same number of protons but different numbers of neutrons. Carbon-12 and carbon-14 are isotopes of carbon.",
    "Один из видов атомов одного элемента с одинаковым числом протонов, но разным числом нейтронов. Например, углерод-12 и углерод-14 — изотопы углерода."
  ],
  [
    "ion",
    "ион",
    "An atom or group of atoms with an electric charge because electrons have been lost or gained.",
    "Атом или группа атомов с электрическим зарядом, возникающим при потере или присоединении электронов."
  ],
  [
    "excitation",
    "возбуждение",
    "An increase in an atom’s energy when an electron moves to a higher energy level without leaving the atom. A nucleus can also be excited.",
    "Повышение энергии атома при переходе электрона на более высокий уровень без отрыва от атома. Возбуждённым может быть и ядро."
  ],
  [
    "ionisation",
    "ионизация",
    "Formation of ions by changing electron count, for example when radiation removes an electron from an atom.",
    "Образование ионов при изменении числа электронов, например при удалении электрона из атома излучением."
  ],
  [
    "activity",
    "активность",
    "The number of nuclear decays per second in a source, on average. It is measured in becquerels (Bq): 1 Bq = 1 decay per second.",
    "Среднее число ядерных распадов в источнике за секунду. Измеряется в беккерелях (Бк): 1 Бк = 1 распад в секунду."
  ],
  [
    "count rate",
    "скорость счёта",
    "The number of events registered by a detector divided by the counting time, for example counts per second.",
    "Число событий, зарегистрированных детектором, делённое на время измерения, например в импульсах в секунду."
  ],
  [
    "half-life",
    "период полураспада",
    "The time for the number of undecayed nuclei of one isotope in a large sample to fall to half its initial value.",
    "Время, за которое число нераспавшихся ядер одного изотопа в большом образце уменьшается вдвое."
  ],
  [
    "background",
    "радиационный фон",
    "Radiation present from surrounding sources even when the source being investigated is absent.",
    "Излучение окружающих источников, присутствующее и без исследуемого источника."
  ],
  [
    "contamination",
    "радиоактивное загрязнение",
    "The unwanted presence of radioactive material on a surface or inside a body or object.",
    "Нежелательное присутствие радиоактивного вещества на поверхности либо внутри тела или предмета."
  ],
  [
    "irradiation",
    "облучение",
    "Exposure of an object or organism to radiation.",
    "Воздействие излучения на предмет или организм."
  ],
  [
    "attenuation",
    "ослабление излучения",
    "Reduction in a beam’s intensity as radiation is absorbed or scattered out of the beam by matter.",
    "Уменьшение интенсивности пучка при поглощении излучения веществом или его рассеянии из пучка."
  ],
  [
    "fission",
    "деление ядра",
    "Splitting a nucleus into two major smaller nuclei, commonly accompanied by emitted neutrons and energy.",
    "Разделение ядра на два основных более лёгких ядра, обычно сопровождаемое испусканием нейтронов и выделением энергии."
  ],
  [
    "fusion",
    "ядерный синтез",
    "A nuclear reaction in which light nuclei combine, producing a heavier nucleus and sometimes additional particles.",
    "Ядерная реакция, в которой лёгкие ядра объединяются с образованием более тяжёлого ядра, иногда с дополнительными частицами."
  ],
  [
    "moderator",
    "замедлитель нейтронов",
    "A material that reduces neutron kinetic energy through collisions in a thermal nuclear reactor.",
    "Вещество, уменьшающее кинетическую энергию нейтронов при столкновениях в реакторе на тепловых нейтронах."
  ],
  [
    "control rod",
    "управляющий стержень",
    "A rod that absorbs neutrons. Inserting it further into the core reduces the rate of the chain reaction.",
    "Стержень, поглощающий нейтроны. При более глубоком введении в активную зону уменьшает скорость цепной реакции."
  ],
  [
    "coolant",
    "теплоноситель",
    "A substance, such as water, that carries thermal energy away from a reactor core.",
    "Вещество, например вода, которое отводит тепловую энергию из активной зоны реактора."
  ],
  [
    "daughter nucleus",
    "дочернее ядро",
    "The nucleus formed when a parent nucleus undergoes radioactive decay.",
    "Ядро, образовавшееся при радиоактивном распаде исходного, материнского ядра."
  ]
];
export const commandTermSource = {
  "title": "IB · MYP: From principles into practice (2014; school-hosted copy)",
  "url": "https://1.cdn.edl.io/32tEJtLWmP3BgLGNPeFKAwnXOC5zZXVDyr61KPQiZMMAX1WK.pdf#page=118",
  "language": "en",
  "section": "Appendix 3: MYP command terms, printed pp.108–110 (PDF pp.118–120)"
};
export const commandTerms = [
  [
    "State / Identify",
    "State: give the requested fact briefly. Identify: select or recognize the relevant item.",
    "State — назови нужный факт кратко. Identify — выбери или укажи нужный объект."
  ],
  [
    "Describe",
    "Say what happens or give the observed pattern.",
    "Опиши происходящее или наблюдаемую закономерность."
  ],
  [
    "Explain",
    "Link a cause or scientific principle to the observation using “because / therefore”.",
    "Свяжи причину или физический принцип с наблюдением через «потому что / поэтому»."
  ],
  [
    "Calculate / Determine",
    "Calculate: show the numerical working. Determine: find the uniquely specified result; the method depends on the task.",
    "Calculate — выполни вычисления и покажи ход решения. Determine — найди требуемый результат по условию задачи."
  ],
  [
    "Compare / Contrast",
    "Compare: similarities. Contrast: differences. Compare and contrast: both. Address the same features in both cases.",
    "Compare — укажи сходства. Contrast — различия. Compare and contrast — и сходства, и различия. Сопоставляй объекты по одним признакам."
  ],
  [
    "Analyse",
    "Separate relevant parts and relationships, then use them to interpret the evidence.",
    "Выдели существенные части и связи, затем используй их для интерпретации данных."
  ],
  [
    "Evaluate / Justify",
    "Evaluate: weigh strengths and limitations. Justify: support a conclusion with valid reasons or evidence.",
    "Evaluate — оцени достоинства и ограничения. Justify — обоснуй вывод доводами или данными."
  ]
];
