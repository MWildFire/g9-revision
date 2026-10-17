import type { Exercise } from './content';

// Authored revision practice, not school questions or an official marking scheme.
export const chemistryScopePractice: Record<string, Exercise[]> = {
  "c-atoms": [
    {
      "id": "chem-scope-01",
      "prompt": {
        "en": "Give the relative charge and approximate relative mass of a proton, neutron and electron. Where are they in the school atom model?",
        "ru": "Укажи относительный заряд и приближённую относительную массу протона, нейтрона и электрона. Где они находятся в школьной модели атома?"
      },
      "answer": {
        "en": "Proton: +1 and about 1; neutron: 0 and about 1; electron: −1 and about 1/1836. Protons and neutrons are in the nucleus; electrons occupy the region around it. Relative charge and relative mass are ratios, not charges in coulombs or masses in kilograms.",
        "ru": "Протон: +1 и примерно 1; нейтрон: 0 и примерно 1; электрон: −1 и примерно 1/1836. Протоны и нейтроны находятся в ядре, электроны — в области вокруг него. Относительные заряд и масса являются отношениями, а не зарядом в кулонах или массой в килограммах."
      },
      "marks": 5,
      "criterion": "A"
    },
    {
      "id": "chem-scope-02",
      "prompt": {
        "en": "An aluminium ion has mass number 27, atomic number 13 and charge 3+. Find its protons, neutrons and electrons.",
        "ru": "У иона алюминия массовое число 27, атомный номер 13 и заряд 3+. Найди числа протонов, нейтронов и электронов."
      },
      "answer": {
        "en": "Protons=13; neutrons=27−13=14; electrons=13−3=10. Atomic number counts protons. The positive charge records the deficit of three electrons, not the removal of three protons.",
        "ru": "Протонов 13; нейтронов 27−13=14; электронов 13−3=10. Атомный номер показывает число протонов. Положительный заряд означает недостаток трёх электронов, а не потерю трёх протонов."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-03",
      "prompt": {
        "en": "Invented sample: 75% chlorine-35 atoms and 25% chlorine-37 atoms by number. Calculate its relative atomic mass and explain why these are isotopes.",
        "ru": "Условный образец: 75% атомов хлора-35 и 25% атомов хлора-37 по числу атомов. Рассчитай относительную атомную массу и объясни, почему это изотопы."
      },
      "answer": {
        "en": "Ar=(75×35+25×37)/100=35.5. The atoms have the same proton number but different neutron numbers. Ar is a dimensionless weighted mean; 35.5 is not a mass number of an individual atom. These abundances are rounded exercise givens.",
        "ru": "Ar=(75×35+25×37)/100=35,5. Число протонов одинаково, число нейтронов различается. Ar — безразмерное взвешенное среднее; 35,5 не является массовым числом отдельного атома. Доли заданы и округлены для задачи."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-04",
      "prompt": {
        "en": "Most alpha particles passed through a thin foil, while a small fraction deflected through large angles. What changed in the atomic model, and why is revising a model scientific?",
        "ru": "Большинство альфа-частиц прошло через тонкую фольгу, малая доля отклонилась на большие углы. Как изменилось представление об атоме и почему пересмотр модели — часть науки?"
      },
      "answer": {
        "en": "The scattering supports a small concentrated positive nucleus and much of the atom being comparatively empty, rather than diffuse positive charge throughout. A useful model must explain observations and make testable predictions; conflicting evidence can require revision. The scattering experiment alone did not establish every detail of modern electron orbitals.",
        "ru": "Рассеяние поддерживает модель малого положительно заряженного ядра и сравнительно пустого остального объёма вместо равномерного распределения положительного заряда. Модель должна объяснять наблюдения и давать проверяемые предсказания; противоречащие данные требуют её пересмотра. Сам опыт не установил все особенности современных электронных орбиталей."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-05",
      "prompt": {
        "en": "A neutral atom has electron arrangement 2,8,7. Find its proton number, school Group 7 and period. Why is its outer shell important?",
        "ru": "У нейтрального атома электронная схема 2,8,7. Найди число протонов, школьную группу и период. Почему важна внешняя оболочка?"
      },
      "answer": {
        "en": "There are 17 electrons and therefore 17 protons. Three occupied shells give period 3; seven outer electrons place it in school Group 7, also modern Group 17. The outer electrons participate in bonding; the atom can gain one electron to form a 1−ion. Shell notation is the stated introductory model.",
        "ru": "Электронов 17, следовательно, протонов 17. Три занятые оболочки дают период 3; семь внешних электронов соответствуют школьной группе 7, или современной группе 17. Внешние электроны участвуют в связях; атом может принять один электрон и образовать ион 1−. Используется вводная оболочечная модель."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-06",
      "prompt": {
        "en": "Compare the ordering of the modern periodic table with Mendeleev’s use of gaps. Why were accurate predictions useful evidence?",
        "ru": "Сопоставь порядок элементов в современной таблице с оставленными Менделеевым пропусками. Почему точные предсказания были полезной проверкой?"
      },
      "answer": {
        "en": "The modern table is ordered by increasing atomic number. Mendeleev mainly used relative atomic mass together with chemical properties and left gaps for undiscovered elements to retain meaningful groups. Later agreement between predicted and observed properties supported the pattern; the gaps were predictions, not proof by themselves.",
        "ru": "Современная таблица упорядочена по атомному номеру. Менделеев опирался главным образом на относительные атомные массы и химические свойства; пропуски для ещё не открытых элементов позволяли сохранить осмысленные группы. Последующее совпадение предсказаний со свойствами открытых элементов поддерживало закономерность. Сам пропуск ещё не являлся доказательством."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-07",
      "prompt": {
        "en": "State the school trends down Group 1, Group 7 and Group 0: metal reaction with water, halogen oxidising strength, and noble-gas boiling point. Explain the different mechanisms.",
        "ru": "Назови школьные тенденции вниз по группам 1,7 и 0: реакция металлов с водой, окислительная способность галогенов и температура кипения благородных газов. Объясни разные механизмы."
      },
      "answer": {
        "en": "Group 1 generally reacts more readily as the outer electron is farther from the nucleus and more shielded, so it is easier to remove. For the F/Cl/Br/I comparison, halogen oxidising strength decreases down the group as attraction for an incoming electron is less effective. Noble-gas boiling points generally rise as larger electron clouds have stronger dispersion interactions. Interatomic attractions at boiling are distinct from electron transfer in a reaction.",
        "ru": "Металлы группы 1 обычно реагируют активнее: внешний электрон дальше от ядра и сильнее экранирован, поэтому его легче отдать. В сравнении F/Cl/Br/I окислительная способность вниз уменьшается: притяжение принимаемого электрона становится менее эффективным. Температуры кипения благородных газов обычно растут, потому что у более крупных электронных оболочек сильнее дисперсионные взаимодействия. Межатомные взаимодействия при кипении отличаются от переноса электронов в реакции."
      },
      "marks": 6,
      "criterion": "A"
    },
    {
      "id": "chem-scope-08",
      "prompt": {
        "en": "Choose methods to separate sand from salt water, recover dissolved salt, collect water, and compare soluble dyes. Explain the separating property each time.",
        "ru": "Как отделить песок от солёной воды, выделить растворённую соль, собрать воду и сравнить растворимые красители? Для каждого способа укажи используемое различие свойств."
      },
      "answer": {
        "en": "Filter to retain insoluble sand. Concentrate the filtrate and crystallise salt, then separate and dry crystals. Simple distillation vaporises and condenses water to collect the solvent. In paper chromatography, suitable dyes interact differently with the moving solvent and the stationary system associated with the paper, so they can migrate at different rates. The detailed mechanism depends on the solvent and stationary system. Dissolved salt is not removed by ordinary filtration; a dye comparison requires matched solvent and conditions.",
        "ru": "Фильтр удерживает нерастворимый песок. Фильтрат концентрируют, соль кристаллизуют, кристаллы отделяют и сушат. При простой перегонке воду испаряют и конденсируют, получая растворитель. При бумажной хроматографии подходящие красители по-разному взаимодействуют с движущимся растворителем и неподвижной системой, связанной с бумагой, поэтому могут перемещаться с разными скоростями. Детальный механизм зависит от растворителя и неподвижной системы. Обычная фильтрация не задерживает растворённую соль; красители сравнивают в одинаковом растворителе и условиях."
      },
      "marks": 6,
      "criterion": "A"
    }
  ],
  "c-bonds": [
    {
      "id": "chem-scope-09",
      "prompt": {
        "en": "Magnesium forms Mg²⁺ and nitrogen forms N³⁻. Find the neutral formula and explain ionic bonding.",
        "ru": "Магний образует Mg²⁺, азот — N³⁻. Найди нейтральную формулу и объясни ионную связь."
      },
      "answer": {
        "en": "Three Mg²⁺ ions give +6 and two N³⁻ ions give −6, so the formula is Mg₃N₂. Electron transfer forms oppositely charged ions; electrostatic attraction holds ions in a giant lattice. The formula is the smallest ion ratio, not a separate molecule with just five ions.",
        "ru": "Три иона Mg²⁺ дают+6, два N³⁻ дают−6; формула Mg₃N₂. Перенос электронов создаёт противоположно заряженные ионы, а электростатическое притяжение удерживает их в гигантской решётке. Формула показывает наименьшее соотношение ионов, а не отдельную молекулу всего из пяти ионов."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-10",
      "prompt": {
        "en": "One model shows shared electron pairs between nonmetal atoms; another has positive metal ions and delocalised electrons. Identify the bonding and explain the attraction.",
        "ru": "В одной модели у неметаллических атомов общие электронные пары; в другой — положительные ионы металла и обобществлённые электроны. Определи связи и объясни притяжение."
      },
      "answer": {
        "en": "Shared pairs indicate covalent bonding: the shared electrons are attracted to both nuclei. The metal model has electrostatic attraction between positive ions and delocalised electrons. A metallic bond is not an attraction between two negative electrons; a shared pair does not imply full electron transfer.",
        "ru": "Общие пары показывают ковалентную связь: электроны притягиваются к обоим ядрам. В металлической модели положительные ионы притягиваются к делокализованным электронам. Металлическая связь не является притяжением двух отрицательных электронов; общая пара не означает полного перехода электрона."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-11",
      "prompt": {
        "en": "Compare melting and conduction in a giant ionic solid, a simple molecular substance, a typical metal and diamond. State the mobile charge carriers where relevant.",
        "ru": "Сравни плавление и проводимость ионного кристалла, молекулярного вещества, обычного металла и алмаза. Где есть подвижные носители заряда?"
      },
      "answer": {
        "en": "Ionic lattices generally need much energy to separate; ions are mobile when molten or dissolved, not in the solid lattice. Simple molecular substances often melt at lower temperatures because intermolecular interactions are overcome; ordinary molecular samples lack mobile charges. Metals conduct through delocalised electrons. Diamond has a giant covalent network: disrupting it requires substantial energy, and it has no ordinary mobile electron carriers. A reported melting condition also needs pressure specified. Graphite is a separate giant-covalent conducting exception.",
        "ru": "Для разделения ионной решётки обычно нужна большая энергия. Ионы подвижны в расплаве и растворе, но не в твёрдой решётке. Молекулярные вещества часто плавятся при более низкой температуре: преодолеваются межмолекулярные взаимодействия. В обычных молекулярных образцах нет подвижных зарядов. Металлы проводят за счёт делокализованных электронов. У алмаза гигантская ковалентная сетка: её разрушение требует большой энергии; обычных подвижных электронных носителей нет. Для указанной температуры плавления важно также давление. Проводящий графит — отдельный случай гигантской ковалентной структуры."
      },
      "marks": 6,
      "criterion": "A"
    },
    {
      "id": "chem-scope-12",
      "prompt": {
        "en": "Invented substance X has a high melting point, does not conduct as a solid, but conducts when molten. Propose a structure and name one limitation of this deduction.",
        "ru": "Условное вещество X тугоплавко, в твёрдом состоянии не проводит ток, а в расплаве проводит. Предложи структуру и ограничение такого вывода."
      },
      "answer": {
        "en": "A giant ionic structure fits: strong attractions require substantial heating and mobile ions carry charge in the melt. This is a consistent interpretation, not unique identification of the compound; further composition or structural evidence is needed. High melting point alone cannot distinguish ionic from giant covalent structures.",
        "ru": "Подходит гигантская ионная решётка: сильные взаимодействия требуют значительного нагревания, а в расплаве заряд переносят подвижные ионы. Это согласующаяся модель, но не однозначное определение вещества; нужны данные о составе или строении. Одной высокой температуры плавления недостаточно, чтобы отличить ионную структуру от гигантской ковалентной."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-13",
      "prompt": {
        "en": "Explain why diamond is hard, graphite can act as a solid lubricant, and graphene can conduct. Compare structure, not just the element name.",
        "ru": "Почему алмаз твёрдый, графит подходит как твёрдая смазка, а графен проводит ток? Сравни строение, а не только название элемента."
      },
      "answer": {
        "en": "In the school model each diamond carbon is covalently linked to four neighbours in a three-dimensional network. Graphite has strongly bonded three-neighbour sheets with weaker interactions between sheets, allowing sliding. Graphene is one such carbon sheet with mobile delocalised electrons. Graphite softness does not mean its in-sheet covalent bonds are weak; one-sheet geometry differs from stacked graphite.",
        "ru": "В школьной модели у алмаза каждый атом углерода связан с четырьмя соседями в трёхмерной сетке. У графита внутри слоёв сильные связи с тремя соседями, а между слоями взаимодействия слабее, поэтому слои скользят. Графен — один такой слой с подвижными делокализованными электронами. Мягкость графита не означает слабых ковалентных связей внутри слоя; однослойный графен отличается от стопки слоёв."
      },
      "marks": 5,
      "criterion": "A"
    },
    {
      "id": "chem-scope-14",
      "prompt": {
        "en": "Equal masses of a substance are supplied as large particles or nanoparticles. Explain a possible advantage and why safety cannot be inferred from the bulk substance alone.",
        "ru": "Одинаковые массы вещества представлены крупными частицами или наночастицами. Объясни возможное преимущество и почему свойств крупного образца недостаточно для вывода о безопасности."
      },
      "answer": {
        "en": "Smaller similar particles have greater total surface area per mass, which can increase surface contact or catalytic activity. Nanoparticle behaviour also depends on composition, shape and coating. Exposure route, dose and persistence matter in assessing possible harm; “small” alone proves neither safety nor danger. A use needs evidence for that particular material and exposure.",
        "ru": "У меньших геометрически подобных частиц суммарная поверхность на единицу массы больше; это может улучшать поверхностный контакт или каталитическое действие. Поведение наночастиц зависит также от состава, формы и покрытия. При оценке возможного вреда важны путь воздействия, доза и устойчивость. Малый размер сам по себе не доказывает ни безопасность, ни опасность; нужны данные о конкретном материале и воздействии."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-15",
      "prompt": {
        "en": "Why do boiling points often rise along a series of similar nonpolar molecules as relative molecular mass rises? Why is this not an absolute rule for all molecules?",
        "ru": "Почему в ряду сходных неполярных молекул температура кипения часто растёт с относительной молекулярной массой? Почему это не универсальное правило?"
      },
      "answer": {
        "en": "Larger electron clouds are generally more polarisable, giving stronger dispersion interactions in a comparable series. Boiling separates molecules rather than breaking their internal covalent bonds. Shape, polarity and hydrogen bonding can change the comparison, so mass alone does not rank every unrelated molecule.",
        "ru": "Более крупные электронные оболочки обычно легче поляризуются, поэтому в сопоставимом ряду сильнее дисперсионные взаимодействия. При кипении разделяются молекулы, а не разрываются ковалентные связи внутри них. Форма, полярность и водородные связи меняют сравнение; по одной массе нельзя ранжировать любые несходные молекулы."
      },
      "marks": 4,
      "criterion": "A"
    }
  ],
  "c-quantity": [
    {
      "id": "chem-scope-16",
      "prompt": {
        "en": "Using Ar(Ca)=40,C=12,O=16, calculate Mr of CaCO₃ and state whether Mr has units.",
        "ru": "При Ar(Ca)=40,C=12,O=16 вычисли Mr(CaCO₃). Есть ли у Mr единица измерения?"
      },
      "answer": {
        "en": "Mr=40+12+3×16=100, dimensionless. The corresponding school-rounded molar mass is 100 g/mol. Relative formula mass is a ratio; it is not 100 g for every sample.",
        "ru": "Mr=40+12+3×16=100, безразмерно. Соответствующая округлённая молярная масса —100 г/моль. Относительная формульная масса является отношением, а не массой 100 г у любого образца."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-17",
      "prompt": {
        "en": "With M(Mg)=24 g/mol, find the amount in 6.0 g Mg and the mass of 0.40 mol Mg. Show units.",
        "ru": "При M(Mg)=24 г/моль найди количество вещества в 6,0 г Mg и массу 0,40 моль Mg. Покажи единицы."
      },
      "answer": {
        "en": "n=m/M=6.0 g/(24 g/mol)=0.25 mol. Conversely m=nM=0.40 mol×24 g/mol=9.6 g. Mr may be numerically equal to M in g/mol, but only M carries molar-mass units.",
        "ru": "n=m/M=6,0 г/(24 г/моль)=0,25 моль. Обратно: m=nM=0,40 моль×24 г/моль=9,6 г. Численно Mr может совпадать с M в г/моль, но единица молярной массы относится только к M."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-18",
      "prompt": {
        "en": "Balance magnesium reacting with hydrochloric acid, adding state symbols. Why can you not change MgCl₂ to MgCl to balance it?",
        "ru": "Уравняй реакцию магния с соляной кислотой и добавь агрегатные обозначения. Почему нельзя заменить MgCl₂ на MgCl ради уравнивания?"
      },
      "answer": {
        "en": "Mg(s)+2 HCl(aq)→MgCl₂(aq)+H₂(g). Coefficients preserve each element’s atom count. Changing a subscript changes the chemical formula and the substance; balancing changes numbers of formula units, not their composition.",
        "ru": "Mg(тв)+2HCl(водн)→MgCl₂(водн)+H₂(г). Коэффициенты сохраняют число атомов каждого элемента. Изменение индекса меняет формулу и вещество; уравнивание меняет число формульных единиц, а не их состав."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-19",
      "prompt": {
        "en": "For Mg+2 HCl→MgCl₂+H₂,6.0 g Mg reacts with excess acid. With M(Mg)=24 g/mol and M(H₂)=2 g/mol, calculate the maximum H₂ mass.",
        "ru": "В реакции Mg+2HCl→MgCl₂+H₂ взяты 6,0 г Mg и избыток кислоты. При M(Mg)=24 г/моль и M(H₂)=2 г/моль найди максимальную массу H₂."
      },
      "answer": {
        "en": "n(Mg)=6.0/24=0.25 mol. The balanced ratio Mg: H₂ is 1: 1, so n(H₂)=0.25 mol and m(H₂)=0.25×2=0.50 g. This theoretical maximum assumes complete conversion of Mg by the specified reaction; collection losses can lower the measured amount.",
        "ru": "n(Mg)=6,0/24=0,25 моль. По уравнению Mg: H₂=1: 1; значит n(H₂)=0,25 моль и m(H₂)=0,25×2=0,50 г. Теоретический максимум предполагает полное превращение магния по этой реакции; потери при сборе уменьшают измеренный результат."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-20",
      "prompt": {
        "en": "The theoretical product mass is 8.0 g but 6.0 g is isolated. Calculate percentage yield and give two explanations for a lower yield.",
        "ru": "Теоретически можно получить 8,0 г продукта, выделено 6,0 г. Найди выход в процентах и объясни два возможных уменьшения."
      },
      "answer": {
        "en": "Yield=6.0/8.0×100=75%. Incomplete reaction or competing reactions can reduce formation; transfer, filtration or purification can lose product after formation. A low isolated yield alone does not identify which cause occurred. Impurities or wet product can inflate measured mass.",
        "ru": "Выход=6,0/8,0×100=75%. Неполное превращение или побочные реакции уменьшают образование продукта; перенос, фильтрование и очистка приводят к потерям уже полученного вещества. По одному выходу причину не определить. Примеси или влажность могут завысить измеренную массу."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-21",
      "prompt": {
        "en": "CaCO₃→CaO+CO₂. Using formula masses 100,56 and 44, find atom economy when CaO is the desired product. Distinguish it from yield.",
        "ru": "CaCO₃→CaO+CO₂. Формульные массы 100,56 и 44. Найди атомную экономичность по целевому CaO и отличи её от выхода."
      },
      "answer": {
        "en": "Atom economy=56/100×100=56%. It is the fraction of stoichiometric reactant mass incorporated into the desired product, not the fraction actually isolated. Even 100% experimental yield leaves 44% of the input mass in CO₂ for this reaction. Industrial choice also depends on energy, safety, cost and use or treatment of by-products.",
        "ru": "Атомная экономичность=56/100×100=56%. Это доля стехиометрической массы реагентов, включённая в целевой продукт, а не фактически выделенная доля. Даже при экспериментальном выходе 100% в этой реакции 44% входной массы приходится на CO₂. Для промышленного выбора важны также энергия, безопасность, стоимость и обращение с побочными продуктами."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-22",
      "prompt": {
        "en": "5.0 g NaCl is dissolved to make 250 cm³ of solution. With M=58.5 g/mol, find concentration in g/dm³ and mol/dm³.",
        "ru": "5,0 г NaCl растворили до объёма раствора 250 см³. При M=58,5 г/моль найди концентрации в г/дм³ и моль/дм³."
      },
      "answer": {
        "en": "V=250/1000=0.250 dm³. Mass concentration=5.0/0.250=20 g/dm³. Amount=5.0/58.5≈0.0855 mol; molar concentration≈0.0855/0.250=0.342 mol/dm³. Use the final solution volume, not the initial water volume.",
        "ru": "V=250/1000=0,250 дм³. Массовая концентрация=5,0/0,250=20 г/дм³. Количество вещества=5,0/58,5≈0,0855 моль; молярная концентрация≈0,0855/0,250=0,342 моль/дм³. Нужен конечный объём раствора, а не исходный объём воды."
      },
      "marks": 5,
      "criterion": "A"
    }
  ],
  "c-changes": [
    {
      "id": "chem-scope-23",
      "prompt": {
        "en": "Predict what happens when Zn is placed in CuSO₄solution and when Cu is placed in ZnSO₄solution under ordinary school conditions. Explain the reactivity comparison.",
        "ru": "Что произойдёт с Zn в растворе CuSO₄ и с Cu в растворе ZnSO₄ в обычных школьных условиях? Объясни сравнение активности."
      },
      "answer": {
        "en": "Zn+Cu²⁺→Zn²⁺+Cu: zinc is oxidised and copper ions reduced. Zinc is more reactive in this comparison and can displace copper. Copper does not normally displace zinc from aqueous zinc sulfate. Surface films and conditions affect rate; a rapid visible change is not the definition of the series.",
        "ru": "Zn+Cu²⁺→Zn²⁺+Cu: цинк окисляется, ионы меди восстанавливаются. В этом сравнении цинк активнее и вытесняет медь. Медь обычно не вытесняет цинк из водного раствора его сульфата. Поверхностные плёнки и условия влияют на скорость; сама таблица активности не определяется скоростью заметного изменения."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-24",
      "prompt": {
        "en": "In CuO+H₂→Cu+H₂O, identify oxidation and reduction using oxygen transfer. Then state electron definitions using Zn→Zn²⁺+2 e⁻.",
        "ru": "В CuO+H₂→Cu+H₂O назови окисление и восстановление по переносу кислорода. Затем дай электронные определения на примере Zn→Zn²⁺+2e⁻."
      },
      "answer": {
        "en": "CuO loses oxygen and is reduced; H₂ gains oxygen and is oxidised. More generally oxidation is electron loss and reduction electron gain. Zn loses two electrons and is oxidised. These definitions do not require oxygen to appear in every redox reaction.",
        "ru": "CuO теряет кислород и восстанавливается; H₂ присоединяет кислород и окисляется. Более общее определение: окисление — отдача электронов, восстановление — принятие. Zn отдаёт два электрона и окисляется. При этом кислород не обязан участвовать в каждой ОВР."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-25",
      "prompt": {
        "en": "Write the hydrochloric-acid reactions of Mg,CuO,NaOH andCaCO₃, including the characteristic products.",
        "ru": "Запиши реакции соляной кислоты с Mg,CuO,NaOH и CaCO₃, указав характерные продукты."
      },
      "answer": {
        "en": "Mg+2 HCl→MgCl₂+H₂; CuO+2 HCl→CuCl₂+H₂O; NaOH+HCl→NaCl+H₂O; CaCO₃+2 HCl→CaCl₂+H₂O+CO₂. These are the stated acid/reactant examples, not a claim that every acid with every metal gives hydrogen.",
        "ru": "Mg+2HCl→MgCl₂+H₂; CuO+2HCl→CuCl₂+H₂O; NaOH+HCl→NaCl+H₂O; CaCO₃+2HCl→CaCl₂+H₂O+CO₂. Это конкретные примеры, а не правило, что любая кислота с любым металлом обязательно выделяет водород."
      },
      "marks": 6,
      "criterion": "A"
    },
    {
      "id": "chem-scope-26",
      "prompt": {
        "en": "Outline how to prepare pure dry copper sulfate crystals from dilute sulfuric acid and excess insoluble copper oxide. Explain filtration and crystallisation.",
        "ru": "Как получить чистые сухие кристаллы сульфата меди из разбавленной серной кислоты и избытка нерастворимого CuO? Объясни фильтрование и кристаллизацию."
      },
      "answer": {
        "en": "In a supervised laboratory method add CuO until no more reacts with the acid, then filter off excess solid. Gently concentrate the copper-sulfate filtrate, allow cooling to crystallise, separate crystals and dry appropriately. Excess oxide helps use up the acid and is removable by filtration. Do not confuse filtering insoluble excess with removing dissolved salt, or boiling completely dry with controlled crystallisation.",
        "ru": "В лаборатории под руководством учителя добавляют CuO, пока он не перестаёт реагировать с кислотой, затем отфильтровывают избыток твёрдого вещества. Фильтрат с сульфатом меди осторожно концентрируют, охлаждают для кристаллизации, кристаллы отделяют и подходящим способом сушат. Избыток оксида помогает израсходовать кислоту и удаляется фильтром. Фильтрование избытка не удаляет растворённую соль; кристаллизация не равна выпариванию досуха."
      },
      "marks": 5,
      "criterion": "A"
    },
    {
      "id": "chem-scope-27",
      "prompt": {
        "en": "Compare pH 3 andpH 5 aqueous solutions at the same temperature. Write the dilute strong-acid/strong-base net neutralisation equation. Why must ethanoic acid be treated separately?",
        "ru": "Сравни водные растворы pH3 и pH5 при одной температуре. Запиши сокращённое уравнение нейтрализации разбавленной сильной кислоты сильным основанием. Почему уксусную кислоту рассматривают отдельно?"
      },
      "answer": {
        "en": "pH 3 has 100 times the hydrogen-ion activity of pH 5. In the school dilute approximation activity is related to concentration; pH is not a linear measure. H⁺(aq)+OH⁻(aq)→H₂O(l). Weak ethanoic acid stays mainly molecular in the ionic representation: CH₃COOH+OH⁻→CH₃COO⁻+H₂O. Do not split every acid completely into ions.",
        "ru": "У раствора pH3 активность ионов водорода в 100 раз больше, чем при pH5. В школьном приближении разбавленного раствора активность связывают с концентрацией; шкала pH не линейна. H⁺(водн)+OH⁻(водн)→H₂O(ж). Слабую уксусную кислоту записывают главным образом молекулярно: CH₃COOH+OH⁻→CH₃COO⁻+H₂O. Нельзя полностью разбивать на ионы любую кислоту."
      },
      "marks": 5,
      "criterion": "A"
    },
    {
      "id": "chem-scope-28",
      "prompt": {
        "en": "Compare electrolysis of molten NaCl with the named aqueous NaCl/carbon-electrode school model. Explain why water and conditions matter.",
        "ru": "Сравни электролиз расплава NaCl с указанной школьной моделью водного раствора NaClи угольных электродов. Почему важны вода и условия?"
      },
      "answer": {
        "en": "In the melt Na⁺ is reduced to sodium and Cl⁻ oxidised to chlorine. In the aqueous model water can be reduced to hydrogen instead of sodium. Concentrated chloride commonly favours chlorine at the anode; very dilute conditions can favour oxygen. These are qualitative cases, not universal concentration thresholds: current density, electrode material and polarisation also affect competition. Do not apply the molten prediction unchanged to water.",
        "ru": "В расплаве Na⁺ восстанавливается до натрия, Cl⁻ окисляется до хлора. В водной модели на катоде может восстанавливаться вода с выделением водорода вместо натрия. В концентрированном растворе на аноде обычно преобладает хлор; при сильном разбавлении может преобладать кислород. Это качественные случаи, а не универсальные границы концентрации: на конкуренцию влияют плотность тока, материал и поляризация электродов. Прогноз для расплава нельзя без изменения переносить на воду."
      },
      "marks": 6,
      "criterion": "A"
    },
    {
      "id": "chem-scope-29",
      "prompt": {
        "en": "Write reduction of Cu²⁺toCu and oxidation of chloride toCl₂. Check charge and atom balance; identify cathode and anode in electrolysis.",
        "ru": "Запиши восстановление Cu²⁺ до Cu и окисление хлорида до Cl₂. Проверь атомы и заряд; укажи катод и анод при электролизе."
      },
      "answer": {
        "en": "Cu²⁺(aq)+2 e⁻→Cu(s): charge +2−2=0 on the left,0 on the right; reduction at the negative cathode. 2 Cl⁻(aq)→Cl₂(g)+2 e⁻: two chlorine atoms and charge −2 on each side; oxidation at the positive anode. The aqueous chloride half-equation describes the chlorine-producing case, not a prediction for every chloride condition.",
        "ru": "Cu²⁺(водн)+2e⁻→Cu(тв): слева заряд+2−2=0, справа 0; восстановление идёт на отрицательном катоде. 2Cl⁻(водн)→Cl₂(г)+2e⁻: по два атома хлора и заряд−2 с обеих сторон; окисление идёт на положительном аноде. Полуреакция хлорида описывает случай получения хлора, а не предсказывает его при любых условиях."
      },
      "marks": 5,
      "criterion": "A"
    },
    {
      "id": "chem-scope-30",
      "prompt": {
        "en": "Why is alumina dissolved in a molten cryolite-based electrolyte for aluminium extraction? Explain the roles of electricity and carbon anodes.",
        "ru": "Зачем при получении алюминия растворять глинозём в расплавленном электролите на основе криолита? Каковы роли тока и угольных анодов?"
      },
      "answer": {
        "en": "The mixture operates at a lower temperature than pure molten alumina and conducts through mobile ions. Electrical energy drives reduction of aluminium ions at the cathode. Oxygen-containing species are oxidised at the anode; carbon anodes are consumed, producing carbon oxides, with CO₂the usual overall school product. Cryolite is not an ordinary aqueous solvent, and carbon anodes need replacement rather than being perfectly inert.",
        "ru": "Смесь работает при более низкой температуре, чем чистый расплав глинозёма, и проводит ток за счёт подвижных ионов. Электрическая энергия обеспечивает восстановление ионов алюминия на катоде. Кислородсодержащие частицы окисляются на аноде; углерод расходуется с образованием оксидов углерода, в обычной суммарной школьной схеме — CO₂. Криолит не является водным растворителем, а угольные аноды не совершенно инертны и требуют замены."
      },
      "marks": 5,
      "criterion": "A"
    }
  ],
  "c-energy": [
    {
      "id": "chem-scope-31",
      "prompt": {
        "en": "An insulated-style cup reaction raises the surrounding solution temperature. Another lowers it. Classify heat transfer and explain a limitation of using temperature alone.",
        "ru": "Одна реакция в стаканчике повышает температуру окружающего раствора, другая понижает. Определи направление теплопередачи и ограничение вывода только по температуре."
      },
      "answer": {
        "en": "With the reaction as system, warming of the measured surroundings suggests exothermic transfer; cooling suggests endothermic transfer. The vessel and external surroundings also exchange heat. Control starting conditions and account for this exchange before treating the measured temperature rise or fall as the full reaction energy.",
        "ru": "Если система — сама реакция, нагрев измеряемой окружающей среды указывает на экзотермическую передачу, охлаждение — на эндотермическую. Теплообмен идёт также со стаканом и внешней средой. До вывода о полной энергии реакции нужно контролировать исходные условия и учитывать этот теплообмен."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-32",
      "prompt": {
        "en": "In an invented reaction profile the reactant level is 100 kJ/mol, peak 160 kJ/mol and product level 70 kJ/mol on a common reference. Find forward activation energy and ΔH; sketch the relative levels.",
        "ru": "В условном профиле относительно общего нуля реагенты имеют 100 кДж/моль, максимум 160 кДж/моль, продукты 70 кДж/моль. Найди прямую энергию активации и ΔH; расположи уровни на схеме."
      },
      "answer": {
        "en": "Ea=160−100=60 kJ/mol; ΔH=70−100=−30 kJ/mol. Products lie below reactants and the peak above both. The profile is energy versus reaction progress, not a concentration-versus-time graph; the arbitrary reference level does not change the differences.",
        "ru": "Ea=160−100=60 кДж/моль; ΔH=70−100=−30 кДж/моль. Продукты ниже реагентов, максимум выше обоих уровней. По горизонтали идёт ход реакции, а не время; условный ноль не меняет разности энергий."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-33",
      "prompt": {
        "en": "Correct: “Breaking bonds releases energy, so an exothermic reaction must break especially many bonds.”",
        "ru": "Исправь: «Разрыв связей выделяет энергию, поэтому экзотермическая реакция должна разрывать особенно много связей»."
      },
      "answer": {
        "en": "Breaking bonds requires energy; forming bonds releases energy. A reaction is exothermic overall when bond formation and all other relevant energy changes release more than is required. Count bond types and stoichiometric amounts in a suitable model, not just the number of bonds.",
        "ru": "Разрыв связей требует энергии, образование связей сопровождается её выделением. В целом реакция экзотермична, когда при образовании связей с учётом остальных существенных изменений выделяется больше энергии, чем затрачивается. В подходящей модели учитывают виды связей и стехиометрию, а не только их количество."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-34",
      "prompt": {
        "en": "For H₂+Cl₂→2 HCl use mean gas-phase bond energies H–H 436,Cl–Cl 243, H–Cl 431 kJ/mol. Estimate ΔH per mole of reaction as written.",
        "ru": "Для H₂+Cl₂→2HCl используй средние газофазные энергии связей H–H436,Cl–Cl243,H–Cl431 кДж/моль. Оцени ΔHна моль реакции в записанном виде."
      },
      "answer": {
        "en": "Broken: 436+243=679 kJ/mol. Formed: 2×431=862 kJ/mol. ΔH≈679−862=−183 kJ/mol. The negative sign indicates an exothermic estimate. Mean gas-phase bond energies are approximate; phase changes or a different reaction basis require additional accounting.",
        "ru": "Разрываемые связи: 436+243=679 кДж/моль. Образуемые: 2×431=862 кДж/моль. ΔH≈679−862=−183 кДж/моль. Отрицательный знак соответствует экзотермической оценке. Средние газофазные энергии приближённы; другие фазы или иной стехиометрический базис требуют поправок."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-35",
      "prompt": {
        "en": "Explain how a zinc/copper chemical cell can provide current. Distinguish terminal voltage from the reaction rate and name controlled variables for a comparison.",
        "ru": "Как цинк-медный химический элемент создаёт ток? Отличи напряжение от скорости реакции и назови контролируемые условия сравнения."
      },
      "answer": {
        "en": "Oxidation at the zinc side supplies electrons that travel through the external circuit; reduction occurs at the other electrode. Ionic movement in the electrolyte/connection maintains charge balance. Electrode materials and electrolyte composition/concentration affect cell potential; current under load also depends on resistance and kinetics. Compare at matched temperature and measuring conditions. Faster bubbling alone is not a measurement of voltage.",
        "ru": "На цинковом электроде окисление даёт электроны, проходящие по внешней цепи; на другом электроде идёт восстановление. Движение ионов в электролите и соединении поддерживает баланс зарядов. На потенциал влияют материалы электродов, состав и концентрация электролитов; ток под нагрузкой зависит также от сопротивления и кинетики. Сравнивают при одинаковой температуре и условиях измерения. Скорость выделения пузырьков не измеряет напряжение."
      },
      "marks": 5,
      "criterion": "A"
    }
  ],
  "c-rates": [
    {
      "id": "chem-scope-36",
      "prompt": {
        "en": "Use collision theory to explain concentration, temperature and solid surface-area effects. Why does simply having more collisions not guarantee every collision reacts?",
        "ru": "Через теорию столкновений объясни влияние концентрации, температуры и площади поверхности твёрдого вещества. Почему реагирует не каждое столкновение?"
      },
      "answer": {
        "en": "Higher concentration can increase encounters per volume; a larger exposed solid area gives more accessible collision sites. Higher temperature changes molecular speeds and increases the fraction able to overcome the activation barrier. Suitable energy and interaction/orientation are needed, so collision count alone is insufficient. Compare conditions and the same reacting system; rate trends are not an unlimited universal proportionality.",
        "ru": "Большая концентрация может повышать число встреч в единице объёма; открытая поверхность твёрдого вещества даёт больше доступных мест взаимодействия. При повышении температуры меняются скорости и увеличивается доля частиц, преодолевающих барьер активации. Нужны подходящая энергия и взаимная ориентация/взаимодействие; одного числа столкновений недостаточно. Сравнение относится к одной системе в заданных условиях, а не к безусловной пропорциональности."
      },
      "marks": 5,
      "criterion": "A"
    },
    {
      "id": "chem-scope-37",
      "prompt": {
        "en": "Gas volume rises from 12 to 32 cm³ between 5 and 15 s. Find mean rate over that interval and explain what it does not establish.",
        "ru": "Между 5 и 15 с объём газа вырос с 12 до 32 см³. Найди среднюю скорость за этот интервал и объясни, чего она не устанавливает."
      },
      "answer": {
        "en": "Mean rate=(32−12)/(15−5)=2.0 cm³/s. It is a volume-production rate under the measurement conditions, not automatically mol/s. It does not establish the instantaneous rate at either endpoint or a constant rate throughout the interval.",
        "ru": "Средняя скорость=(32−12)/(15−5)=2,0 см³/с. Это скорость образования объёма при условиях измерения, а не автоматически моль/с. Она не определяет мгновенную скорость в концах интервала и не доказывает постоянную скорость между ними."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-38",
      "prompt": {
        "en": "A tangent at t=10 s passes through chosen tangent points(4 s,8 cm³) and(16 s,32 cm³). Calculate the estimated instantaneous rate. What makes these different from any two data points?",
        "ru": "Касательная при t=10 с проходит через выбранные на ней точки(4 с; 8 см³)и(16 с; 32 см³). Оцени мгновенную скорость. Чем они отличаются от любых двух экспериментальных точек?"
      },
      "answer": {
        "en": "Tangent gradient=(32−8)/(16−4)=2.0 cm³/s. Use well-separated points on the tangent line with axis units, not arbitrary points on the curved data trace. A measured curve and hand-drawn tangent give an estimate; state uncertainty rather than claiming an exact kinetic law.",
        "ru": "Наклон касательной=(32−8)/(16−4)=2,0 см³/с. Берут достаточно разнесённые точки на самой касательной с единицами осей, а не произвольные точки кривой. По измеренному графику и проведённой касательной получается оценка; её неопределённость не равна точному знанию закона скорости."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-39",
      "prompt": {
        "en": "Explain how a catalyst changes a reaction profile. Does it change ΔH, guarantee no poisoning, or move an equilibrium position?",
        "ru": "Как катализатор меняет профиль реакции? Меняет ли он ΔH, исключает ли отравление катализатора и сдвигает ли равновесие?"
      },
      "answer": {
        "en": "A catalyst supplies an alternative pathway with a lower activation barrier and is regenerated overall. It does not change reactant/product energy levels or ΔH. It speeds the approach to equilibrium by affecting both directions, not the equilibrium composition at fixed conditions. Real catalysts can be poisoned or deactivated; “not consumed in the overall equation” is not “indestructible”.",
        "ru": "Катализатор даёт другой путь с меньшим барьером активации и в суммарном процессе регенерируется. Он не меняет уровни энергии реагентов/продуктов и ΔH. Он ускоряет установление равновесия в обоих направлениях, но не меняет равновесный состав при тех же условиях. Реальный катализатор может отравляться или терять активность; «не расходуется по суммарному уравнению» не означает «неразрушим»."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-40",
      "prompt": {
        "en": "In a closed reversible system, concentrations become constant but molecules continue reacting. Explain dynamic equilibrium and correct “equal concentrations”.",
        "ru": "В закрытой обратимой системе концентрации стали постоянными, но молекулы продолжают реагировать. Объясни динамическое равновесие и исправь выражение «равные концентрации»."
      },
      "answer": {
        "en": "At fixed conditions forward and reverse rates are equal and nonzero. Concentrations then remain constant macroscopically, but reactant and product concentrations need not be equal. The system must permit both directions and be closed to matter exchange in this model; a flat curve alone can also occur after a reaction stops, so it is not sufficient proof of dynamic equilibrium.",
        "ru": "При постоянных условиях прямая и обратная реакции идут с одинаковыми ненулевыми скоростями. Макроскопические концентрации постоянны, но концентрации реагентов и продуктов не обязаны совпадать. В модели возможны оба направления, система закрыта для обмена веществом. Плоский график бывает и после прекращения реакции, поэтому один он ещё не доказывает динамическое равновесие."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-41",
      "prompt": {
        "en": "For N₂(g)+3 H₂(g)⇌2 NH₃(g), forward reaction exothermic, predict effects of heating, compression at fixed T, and adding H₂. Compare H₂+I₂⇌2 HI for compression.",
        "ru": "Для N₂(г)+3H₂(г)⇌2NH₃(г), прямая реакция экзотермична, предскажи влияние нагревания, сжатия при постоянной Tи добавления H₂. Сравни сжатие для H₂+I₂⇌2HI."
      },
      "answer": {
        "en": "Heating favours the endothermic reverse direction. Compression favours the ammonia side with fewer gas moles(2 versus 4). Adding H₂ can favour its consumption. In H₂+I₂⇌2 HI gas amounts are equal(2 versus 2), so ideal-gas compression at fixed T does not favour either side. Pressure changes must specify the operation: adding inert gas at fixed V does not reproduce compression of the reacting gases.",
        "ru": "Нагревание благоприятствует обратному эндотермическому направлению. Сжатие благоприятствует стороне аммиака с меньшим числом молей газа(2 против 4). Добавление H₂ может способствовать его расходованию. В H₂+I₂⇌2HI число молей газа одинаково(2 против 2); в идеальногазовой модели сжатие при постоянной T не даёт преимущества стороне. Нужно указать способ изменения давления: добавление инертного газа при постоянном V не повторяет сжатие реагирующих газов."
      },
      "marks": 6,
      "criterion": "A"
    }
  ],
  "c-air": [
    {
      "id": "chem-scope-42",
      "prompt": {
        "en": "Give approximate present dry-air nitrogen, oxygen and argon percentages. Why must water vapour and a carbon-dioxide figure be qualified?",
        "ru": "Назови приближённые доли азота, кислорода и аргона в современном сухом воздухе. Почему для водяного пара и CO₂ нужны оговорки?"
      },
      "answer": {
        "en": "Dry air is about 78% N₂, 21% O₂ and 0.93% Ar by volume, with trace gases. Water vapour is excluded by “dry” and varies strongly in ordinary air. Atmospheric CO₂ also changes over time and place; an exact value needs a date, location and measurement definition rather than a timeless school decimal. Rounded main percentages need not sum to 100 before trace gases/rounding are considered.",
        "ru": "По объёму сухой воздух содержит примерно 78% N₂, 21% O₂ и 0,93% Ar, а также примеси. Слово «сухой» исключает водяной пар; в обычном воздухе его доля сильно меняется. CO₂ тоже меняется во времени и пространстве: точное значение требует даты, места и определения измерения. Округлённые основные доли без примесей и учёта округления не обязаны давать ровно 100%."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-43",
      "prompt": {
        "en": "Why is an early-atmosphere reconstruction a model supported by evidence rather than a direct modern measurement? Give two useful evidence types and a limitation.",
        "ru": "Почему реконструкция ранней атмосферы — модель по данным, а не непосредственное современное измерение? Назови два типа свидетельств и ограничение."
      },
      "answer": {
        "en": "Ancient rocks/minerals and comparisons with volcanic gases can constrain possible processes and compositions. Rocks can be altered and preserved samples are incomplete; present volcanoes are analogues, not a direct sample of every stage of the early atmosphere. Compare independent evidence and distinguish a supported inference from certainty about exact percentages.",
        "ru": "Древние породы и минералы, а также состав вулканических газов помогают ограничить возможные процессы и состав. Породы могут изменяться, сохранилась лишь часть образцов. Современные вулканы — аналог, а не прямой образец каждой стадии ранней атмосферы. Нужна сверка независимых данных и различение обоснованного вывода с уверенностью в точных процентах."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-44",
      "prompt": {
        "en": "Explain three routes by which carbon can leave atmospheric CO₂: oceans, photosynthesis and rock formation. Why does photosynthesis alone not imply permanent storage?",
        "ru": "Объясни три пути удаления углерода из атмосферного CO₂: океан, фотосинтез и образование пород. Почему фотосинтез ещё не означает вечного хранения?"
      },
      "answer": {
        "en": "CO₂can dissolve in ocean water and participate in dissolved-carbon chemistry. Photosynthesis incorporates carbon into organic matter; respiration and decomposition can return it. Carbonate mineral formation and sediment burial can store carbon over longer timescales. These are transfers between reservoirs; storage duration and later release matter, rather than carbon disappearing.",
        "ru": "CO₂ растворяется в океане и участвует в химии растворённого углерода. Фотосинтез включает углерод в органическое вещество; дыхание и разложение могут вернуть его. Образование карбонатных минералов и захоронение осадков способны хранить углерод дольше. Это переходы между резервуарами, а не исчезновение углерода; важны срок хранения и дальнейшее высвобождение."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-45",
      "prompt": {
        "en": "Explain the greenhouse effect using incoming sunlight and outgoing infrared radiation. Why is “the gas reflects all heat back” misleading?",
        "ru": "Объясни парниковый эффект через приходящее солнечное и уходящее инфракрасное излучение. Почему фраза «газ отражает всю теплоту обратно» неточна?"
      },
      "answer": {
        "en": "The surface absorbs energy and emits infrared radiation. Greenhouse gases absorb at particular infrared wavelengths and emit radiation in different directions, affecting the planet’s outgoing-energy balance. They do not reflect every wavelength or stop all energy escaping. Increasing greenhouse-gas concentrations can warm the surface/lower atmosphere until the energy balance adjusts.",
        "ru": "Поверхность поглощает энергию и испускает инфракрасное излучение. Парниковые газы поглощают определённые ИК-диапазоны и излучают в разных направлениях, меняя баланс уходящей энергии. Они не отражают любые длины волн и не прекращают весь выход энергии. Рост концентраций может нагревать поверхность и нижнюю атмосферу до перестройки энергетического баланса."
      },
      "marks": 4,
      "criterion": "A"
    },
    {
      "id": "chem-scope-46",
      "prompt": {
        "en": "How would you evaluate the claim that recent warming has a human contribution? Distinguish observations, attribution and projections, and explain why uncertainty is not no evidence.",
        "ru": "Как оценить утверждение о вкладе человека в недавнее потепление? Отличи наблюдения, установление причин и прогнозы. Почему неопределённость не равна отсутствию данных?"
      },
      "answer": {
        "en": "Use multiple temperature records, greenhouse-gas measurements and physical understanding; attribution compares explanations including human and natural drivers. Projections depend on future emissions and model/response uncertainty, while observations describe what has been measured. A cold day does not disprove a long-term global trend. Report the range and assumptions; uncertainty in exact future warming does not erase evidence for the mechanism or observed change.",
        "ru": "Сопоставляют разные температурные ряды, измерения парниковых газов и физические механизмы; при установлении причин сравнивают объяснения с антропогенными и естественными факторами. Прогноз зависит от будущих выбросов, моделей и реакции системы, а наблюдение описывает измеренное. Холодный день не опровергает длительный глобальный тренд. Указывают диапазон и допущения: неопределённость точного будущего потепления не устраняет данные о механизме и уже наблюдаемом изменении."
      },
      "marks": 5,
      "criterion": "A"
    },
    {
      "id": "chem-scope-47",
      "prompt": {
        "en": "Compare climate change with combustion air pollution. Give mechanisms for CO,SO₂and nitrogen oxides and explain why the categories can overlap.",
        "ru": "Отличи изменение климата от загрязнения воздуха продуктами горения. Объясни происхождение CO,SO₂ и оксидов азота и возможность пересечения категорий."
      },
      "answer": {
        "en": "Incomplete carbon-fuel combustion can produce toxic CO. Sulfur in fuel can yield SO₂; at high temperatures nitrogen and oxygen can form nitrogen oxides, contributing to air-quality/acid-deposition problems. Climate concerns long-term system changes and radiative drivers; air pollution concerns harmful substances and exposure. Some emissions affect both, so the categories are not mutually exclusive. An emission amount is not the same as the concentration someone breathes.",
        "ru": "При неполном сгорании углеродного топлива может образоваться токсичный CO. Сера топлива даёт SO₂; при высокой температуре азот и кислород образуют оксиды азота, ухудшающие качество воздуха и участвующие в кислотных выпадениях. Климатическая проблема относится к длительным изменениям системы и радиационным факторам, загрязнение воздуха — к вредным веществам и воздействию. Некоторые выбросы влияют на оба процесса; категории не исключают друг друга. Масса выброса не равна концентрации вдыхаемого воздуха."
      },
      "marks": 5,
      "criterion": "A"
    }
  ]
};
