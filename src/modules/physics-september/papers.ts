import { b, q } from "./types";
export const papers = [
  {
    id: "paper-1",
    title: b(
      "Practice paper 1 · core and application",
      "Вариант 1 · основа и применение",
    ),
    minutes: 50,
    questions: [
      q(
        "p1-1",
        "isotopes",
        "A(ii)",
        "application",
        b(
          "For ²⁷₁₃Al³⁺, give proton, neutron and electron counts. Explain how ²⁷Al and ²⁶Al differ, and why losing electrons does not create a new isotope.",
          "Для ²⁷₁₃Al³⁺ укажи протоны, нейтроны и электроны. Объясни различие ²⁷Al и ²⁶Al и почему потеря электронов не создаёт новый изотоп.",
        ),
        b(
          "Separate nuclear composition from electron charge.",
          "Отдели состав ядра от заряда электронов.",
        ),
        b("13 protons.", "13 протонов."),
        b("27 − 13 = 14 neutrons.", "27 − 13 = 14 нейтронов."),
        b("13 − 3 = 10 electrons.", "13 − 3 = 10 электронов."),
        b(
          "²⁶Al has one fewer neutron, with the same 13 protons.",
          "У ²⁶Al на один нейтрон меньше при тех же 13 протонах.",
        ),
        b(
          "Electron loss changes charge, not A or nuclear composition.",
          "Потеря электронов меняет заряд, не A и не состав ядра.",
        ),
      ),
      q(
        "p1-2",
        "atomic-models",
        "A(i)",
        "application",
        b(
          "Explain how the three observations from alpha scattering — mostly straight paths, some large deflections, very rare backscattering — support the nuclear model. State why plum pudding was inadequate and one later improvement.",
          "Объясни, как прямые пути большинства альфа-частиц, некоторые большие отклонения и очень редкое обратное рассеяние подтверждают ядерную модель. Почему модель Томсона была недостаточна? Назови одно позднее улучшение.",
        ),
        b(
          "Link observations to empty space, charge and mass.",
          "Свяжи наблюдения с пустым пространством, зарядом и массой.",
        ),
        b(
          "Mostly straight paths indicate mostly empty atomic volume.",
          "Прямые пути большинства указывают на в основном пустой объём.",
        ),
        b(
          "Large deflections require concentrated positive charge repelling positive alpha particles.",
          "Большие отклонения требуют сосредоточенного положительного заряда, отталкивающего альфа-частицы.",
        ),
        b(
          "Rare backscattering indicates a very small dense region containing most mass.",
          "Редкое рассеяние назад указывает на очень маленькую плотную область с большей частью массы.",
        ),
        b(
          "Diffuse positive charge in plum pudding cannot account for rare very strong deflections.",
          "Размазанный положительный заряд модели Томсона не объясняет редкие очень сильные отклонения.",
        ),
        b(
          "Bohr added discrete energy levels, or Chadwick provided evidence for neutrons.",
          "Бор добавил дискретные уровни энергии либо Чедвик получил свидетельства нейтронов.",
        ),
      ),
      q(
        "p1-3",
        "radiation",
        "A(iii)",
        "challenge",
        b(
          "An unknown emission is stopped by paper. Identify it and state its composition and charge. A student then says it must be harmless inside the body. Evaluate that conclusion.",
          "Неизвестное излучение задерживает бумага. Определи вид, состав и заряд. Ученик заключает, что оно безвредно внутри организма. Оцени вывод.",
        ),
        b(
          "Low penetration can coexist with strong local ionisation.",
          "Малое проникновение сочетается с сильной местной ионизацией.",
        ),
        b(
          "Alpha is consistent with the absorber evidence.",
          "Альфа согласуется с опытом.",
        ),
        b(
          "An alpha particle has two protons and two neutrons.",
          "Альфа-частица содержит два протона и два нейтрона.",
        ),
        b("Charge +2.", "Заряд +2."),
        b(
          "Inside the body the source may be directly beside living tissue, bypassing skin protection.",
          "Внутри источник находится рядом с живой тканью, минуя защиту кожей.",
        ),
        b(
          "Dense ionisation can damage cells; harmlessness does not follow and actual risk needs dose/location information.",
          "Сильная ионизация повреждает клетки; безвредность не следует, нужны сведения о дозе и положении.",
        ),
      ),
      q(
        "p1-4",
        "nuclear-equations",
        "A(ii)",
        "application",
        b(
          "Complete ²²²₈₆Rn → X + ⁴₂He, giving X’s A and Z. X then emits β⁻: give the new A and Z. Explain the neutron change in the beta step.",
          "Дополни ²²²₈₆Rn → X + ⁴₂He, указав A и Z у X. Затем X испускает β⁻: укажи новые A и Z. Объясни изменение нейтронов при бета-шаге.",
        ),
        b(
          "Alpha removes two protons and two neutrons; beta changes a neutron into a proton.",
          "Альфа уносит два протона и два нейтрона; бета превращает нейтрон в протон.",
        ),
        b("After alpha A = 218.", "После альфа A = 218."),
        b("After alpha Z = 84.", "После альфа Z = 84."),
        b("After beta A remains 218.", "После бета A остаётся 218."),
        b("After beta Z = 85.", "После бета Z = 85."),
        b(
          "N falls by one: 134 → 133, because one neutron becomes a proton.",
          "N уменьшается на один: 134 → 133, потому что нейтрон стал протоном.",
        ),
      ),
      q(
        "p1-5",
        "half-life",
        "A(ii)",
        "application",
        b(
          "Total rates at t = 0, 4, 8 and 12 min are 330, 170, 90 and 50 counts/min; background is 10 counts/min. Find the four corrected rates, T½, total rate at 16 min and percentage of parent nuclei decayed by 12 min. Explain why total rate does not tend to zero.",
          "При t = 0, 4, 8, 12 мин полный счёт 330, 170, 90, 50 имп/мин; фон 10. Найди четыре чистых значения, T½, полный счёт на 16-й минуте и процент распавшихся ядер к 12-й минуте. Почему полный счёт не стремится к нулю?",
        ),
        b(
          "Work on the corrected series, then add the background back.",
          "Работай с чистой серией, затем верни фон.",
        ),
        b(
          "Corrected: 320, 160, 80, 40 counts/min.",
          "Без фона: 320, 160, 80, 40 имп/мин.",
        ),
        b("T½ = 4 min.", "T½ = 4 мин."),
        b(
          "At 16 min total = 20 + 10 = 30 counts/min.",
          "Через 16 мин полный счёт 20 + 10 = 30 имп/мин.",
        ),
        b("Three half-lives: 87.5% decayed.", "Три периода: распалось 87,5%."),
        b(
          "The source signal approaches zero but background remains approximately 10 counts/min.",
          "Сигнал источника стремится к нулю, фон остаётся примерно 10 имп/мин.",
        ),
      ),
      q(
        "p1-6",
        "uses",
        "A(iii)",
        "challenge",
        b(
          "Three fictional tracers are chemically suitable and start equally active: X emits α, T½ = 6 h; Y emits γ, T½ = 6 h; Z emits γ, T½ = 20 years. Choose for external imaging over a few hours. Explain both rejections, a half-life advantage and one remaining limitation.",
          "Три условных индикатора химически подходят и одинаково активны вначале: X — α, T½ = 6 ч; Y — γ, T½ = 6 ч; Z — γ, T½ = 20 лет. Выбери для внешней регистрации за несколько часов. Объясни оба отказа, преимущество периода и одно ограничение.",
        ),
        b(
          "Match penetration and lifetime to the job.",
          "Согласуй проникновение и срок с задачей.",
        ),
        b(
          "Choose Y under the stated assumptions.",
          "При данных условиях выбираем Y.",
        ),
        b(
          "Its gamma photons can leave the body for external detection, unlike alpha from X.",
          "Гамма-фотоны выходят из тела к внешнему детектору, в отличие от альфа у X.",
        ),
        b(
          "Six hours allows a useful signal during the procedure.",
          "Шесть часов позволяют сохранить полезный сигнал во время процедуры.",
        ),
        b(
          "Y decays away sooner than Z, avoiding unnecessarily persistent activity.",
          "Y распадается быстрее Z, без неоправданно длительной активности.",
        ),
        b(
          "Actual dose, photon energy or biological removal still need checking; half-life/type alone is not a full clinical selection.",
          "Нужно проверить дозу, энергию фотонов или выведение; вида и периода недостаточно для полного клинического выбора.",
        ),
      ),
      q(
        "p1-7",
        "fission",
        "A(ii)",
        "application",
        b(
          "Complete ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n. Show both balances. Explain the distinct roles of a moderator and control rods.",
          "Дополни ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n. Покажи оба баланса. Различи функции замедлителя и управляющих стержней.",
        ),
        b(
          "The incoming neutron is part of the A total.",
          "Входящий нейтрон входит в сумму A.",
        ),
        b("A balance: 236 = 233 + x.", "Баланс A: 236 = 233 + x."),
        b("x = 3 neutrons.", "x = 3 нейтрона."),
        b("Charge balance: 92 = 56 + 36.", "Баланс заряда: 92 = 56 + 36."),
        b(
          "Moderator slows neutrons, improving the chance of further fission for thermal-reactor fuel.",
          "Замедлитель снижает скорость нейтронов для повышения вероятности деления топлива теплового реактора.",
        ),
        b(
          "Control rods absorb neutrons, reducing the number available to continue the chain.",
          "Стержни поглощают нейтроны, уменьшая их число для продолжения цепи.",
        ),
      ),
      q(
        "p1-8",
        "fusion",
        "A(i)",
        "application",
        b(
          "Explain fusion using ²₁H + ³₁H → ⁴₂He + X. Identify X, check charge, explain high temperature, and contrast the starting nuclei with fission.",
          "Объясни синтез на примере ²₁H + ³₁H → ⁴₂He + X. Определи X, проверь заряд, объясни высокую температуру и сравни исходные ядра с делением.",
        ),
        b(
          "Use conservation, then the interaction between positive nuclei.",
          "Используй сохранение, затем взаимодействие положительных ядер.",
        ),
        b("X is ¹₀n since 2 + 3 = 4 + 1.", "X — ¹₀n, поскольку 2 + 3 = 4 + 1."),
        b("Charge: 1 + 1 = 2 + 0.", "Заряд: 1 + 1 = 2 + 0."),
        b(
          "Positive nuclei repel electrostatically.",
          "Положительные ядра электрически отталкиваются.",
        ),
        b(
          "High temperature provides kinetic energy for close approach; the nuclear interaction acts at short range.",
          "Высокая температура даёт энергию для сближения; ядерное взаимодействие короткодействующее.",
        ),
        b(
          "Fusion joins light nuclei; fission starts with a heavy nucleus and splits it.",
          "Синтез объединяет лёгкие ядра; деление начинается с тяжёлого и расщепляет его.",
        ),
      ),
    ],
  },
  {
    id: "paper-2",
    title: b(
      "Practice paper 2 · transfer and evidence",
      "Вариант 2 · новые ситуации и данные",
    ),
    minutes: 50,
    questions: [
      q(
        "p2-1",
        "atomic-structure",
        "A(ii)",
        "application",
        b(
          "An ion has 16 protons, 18 neutrons and 18 electrons. Give A and charge. Explain whether losing two electrons changes its isotope. An atom radius is 10⁻¹⁰ m and nucleus radius 10⁻¹⁴ m: find the radius ratio and state one limitation of a large-nucleus drawing.",
          "У иона 16 протонов, 18 нейтронов, 18 электронов. Найди A и заряд. Меняет ли потеря двух электронов изотоп? Радиусы атома 10⁻¹⁰ м и ядра 10⁻¹⁴ м: найди отношение и одно ограничение рисунка с большим ядром.",
        ),
        b(
          "Keep counts, charge and scale separate.",
          "Разделяй числа частиц, заряд и масштаб.",
        ),
        b("A = 34.", "A = 34."),
        b("Charge = −2.", "Заряд −2."),
        b(
          "Losing two electrons makes it neutral but leaves the isotope unchanged.",
          "Потеря двух электронов делает его нейтральным, не меняя изотоп.",
        ),
        b("Radius ratio = 10⁴ = 10,000.", "Отношение радиусов 10⁴ = 10 000."),
        b(
          "An enlarged nucleus is not to scale and overstates its share of atomic volume.",
          "Увеличенное ядро нарушает масштаб и преувеличивает его долю объёма атома.",
        ),
      ),
      q(
        "p2-2",
        "atomic-models",
        "A(iii)",
        "challenge",
        b(
          "A report says: “Only 0.02% of alpha particles scattered backwards, so the nuclear model should be ignored; the other 99.98% prove plum pudding.” Evaluate using evidence, and distinguish Bohr’s and Chadwick’s contributions.",
          "Отчёт: «Назад рассеялось лишь 0,02% альфа-частиц, значит ядерную модель надо игнорировать; остальные 99,98% доказывают модель Томсона». Оцени и различи вклады Бора и Чедвика.",
        ),
        b(
          "A rare reproducible observation can rule out a model.",
          "Редкое воспроизводимое наблюдение может опровергнуть модель.",
        ),
        b(
          "Rare large-angle events still require explanation and cannot be ignored because they are few.",
          "Редкие большие отклонения требуют объяснения; малое число не позволяет их игнорировать.",
        ),
        b(
          "Most near-straight paths fit mostly empty space, not proof of diffuse positive charge.",
          "Большинство почти прямых путей согласуется с пустым пространством, не доказывая размазанный заряд.",
        ),
        b(
          "A small dense positive nucleus accounts for rare backscattering; diffuse charge does not explain it adequately.",
          "Маленькое плотное положительное ядро объясняет обратное рассеяние, распределённый заряд — недостаточно.",
        ),
        b(
          "Bohr: discrete electron energy levels.",
          "Бор: дискретные уровни энергии электронов.",
        ),
        b(
          "Chadwick: evidence for neutrons in the nucleus.",
          "Чедвик: свидетельства нейтронов в ядре.",
        ),
      ),
      q(
        "p2-3",
        "contamination",
        "A(i)",
        "application",
        b(
          "A gamma-irradiated sealed food packet has no radioactive material transferred to it. Another packet has radioactive dust on its surface. Contrast what happens after the original source is removed. Explain why paper shielding is insufficient for gamma and why “natural radiation is always safe” is invalid.",
          "На герметичную упаковку еды воздействовала гамма, без переноса радиоактивного вещества. На другой есть радиоактивная пыль. Укажи различия после удаления исходного источника. Почему бумага не защищает от гамма и почему «природное излучение всегда безопасно» неверно?",
        ),
        b(
          "Classify the mechanism, then reason about penetration and dose.",
          "Классифицируй механизм, затем рассуждай о проникновении и дозе.",
        ),
        b(
          "The first packet is irradiated but not contaminated in the scenario.",
          "Первая упаковка облучена, но по условию не загрязнена.",
        ),
        b(
          "Removing the source ends that direct exposure; ordinary irradiation does not itself make it a radioactive source.",
          "Удаление источника прекращает прямое воздействие; обычное облучение само не делает её радиоактивным источником.",
        ),
        b(
          "Dust contains radioactive atoms and remains a source until removed or decayed; it may spread.",
          "В пыли радиоактивные атомы; она остаётся источником до удаления/распада и может переноситься.",
        ),
        b(
          "Gamma penetrates paper; suitable dense/thick shielding attenuates it.",
          "Гамма проходит бумагу; подходящий плотный/толстый экран ослабляет её.",
        ),
        b(
          "Natural origin does not establish dose or biological risk; the safety claim needs exposure information.",
          "Природное происхождение не определяет дозу и риск; для безопасности нужны данные воздействия.",
        ),
      ),
      q(
        "p2-4",
        "nuclear-equations",
        "A(ii)",
        "challenge",
        b(
          "A parent has A = 234 and Z = 90. It emits β⁻, α and γ in that order. Give final A, Z and neutron number. Explain why beta changes Z and why gamma does not change either number.",
          "Ядро A = 234, Z = 90 испускает β⁻, α и γ по очереди. Найди конечные A, Z и нейтроны. Объясни изменение Z при бета и отсутствие изменений чисел при гамма.",
        ),
        b(
          "Gamma removes excitation energy, not nucleons.",
          "Гамма уносит энергию возбуждения, не нуклоны.",
        ),
        b("Final A = 230.", "Конечное A = 230."),
        b("Final Z = 90 + 1 − 2 = 89.", "Конечное Z = 90 + 1 − 2 = 89."),
        b("Neutrons = 230 − 89 = 141.", "Нейтронов 230 − 89 = 141."),
        b(
          "Beta-minus transforms a neutron into a proton, raising Z by one.",
          "Бета-минус превращает нейтрон в протон, увеличивая Z на один.",
        ),
        b(
          "Gamma is an uncharged photon with no nucleons: only the nuclear energy state changes.",
          "Гамма — незаряженный фотон без нуклонов: меняется только энергия ядра.",
        ),
      ),
      q(
        "p2-5",
        "half-life",
        "A(ii)",
        "challenge",
        b(
          "Background is 120 counts in 5 min. The total source rate falls from 984 to 144 counts/min over 18 min. Find background rate, the two corrected rates, half-life and predicted total rate at 24 min.",
          "Фон 120 импульсов за 5 мин. Полный счёт падает с 984 до 144 имп/мин за 18 мин. Найди скорость фона, два чистых значения, период и полный счёт на 24-й минуте.",
        ),
        b(
          "The remaining fraction is found after correction.",
          "Оставшуюся долю ищи после поправки.",
        ),
        b("Background = 24 counts/min.", "Фон 24 имп/мин."),
        b(
          "Corrected endpoints: 960 and 120 counts/min.",
          "Чистые начальное и конечное: 960 и 120 имп/мин.",
        ),
        b(
          "120 / 960 = 1/8, so three half-lives.",
          "120 / 960 = 1/8, значит три периода.",
        ),
        b("T½ = 18 / 3 = 6 min.", "T½ = 18 / 3 = 6 мин."),
        b(
          "At 24 min net = 60 and total = 84 counts/min.",
          "Через 24 мин чистая скорость 60, полная 84 имп/мин.",
        ),
      ),
      q(
        "p2-6",
        "half-life-choice",
        "A(iii)",
        "challenge",
        b(
          "Two fictional beta gauges initially have equal activity 640 Bq. X has T½ = 2 years, Y has T½ = 8 years. Find each activity after 8 years. Which gives a steadier long-term signal? Explain why equal starting activity is not equal nucleus count and why lower count through the same sheet need not mean thicker paper.",
          "Два условных бета-датчика начинают с 640 Бк: X — T½ = 2 года, Y — 8 лет. Найди активности через 8 лет. У какого стабильнее долгосрочный сигнал? Почему равная активность не означает равное число ядер? Почему меньший счёт не обязательно означает более толстую бумагу?",
        ),
        b(
          "Consider source decay as well as absorption.",
          "Учти распад источника наряду с поглощением.",
        ),
        b("X: 640 / 16 = 40 Bq.", "X: 640 / 16 = 40 Бк."),
        b("Y: 640 / 2 = 320 Bq.", "Y: 640 / 2 = 320 Бк."),
        b(
          "Y changes more slowly and gives the steadier source signal, other factors equal.",
          "Y меняется медленнее и при прочих равных даёт более стабильный сигнал.",
        ),
        b(
          "At equal activity, a longer half-life needs more nuclei because each has lower decay probability per second.",
          "При равной активности больший период требует больше ядер из-за меньшей вероятности распада каждого за секунду.",
        ),
        b(
          "The source activity itself can decrease, reducing detector count even at unchanged sheet thickness.",
          "Активность источника сама уменьшается и снижает счёт даже при постоянной толщине.",
        ),
      ),
      q(
        "p2-7",
        "fission",
        "A(ii)",
        "application",
        b(
          "Each fission releases 3.2 × 10⁻¹¹ J and the rate is 2.5 × 10¹⁸ /s. Find thermal power and electrical output at 30% efficiency. In a conceptual chain each event causes 0.8 further events on average: describe the trend and the effect of greater neutron absorption.",
          "Энергия деления 3,2 × 10⁻¹¹ Дж, скорость 2,5 × 10¹⁸ /с. Найди тепловую и электрическую мощности при КПД 30%. В модели одно событие вызывает в среднем 0,8 следующего: опиши тренд и эффект дополнительного поглощения нейтронов.",
        ),
        b("Units of J × s⁻¹ give W.", "Дж × с⁻¹ даёт Вт."),
        b(
          "Thermal P = 8.0 × 10⁷ W = 80 MW.",
          "Тепловая P = 8,0 × 10⁷ Вт = 80 МВт.",
        ),
        b("Electrical P = 24 MW.", "Электрическая P = 24 МВт."),
        b(
          "Average event count decreases by a factor 0.8 per generation.",
          "Среднее число событий уменьшается в 0,8 раза за поколение.",
        ),
        b(
          "Since less than one further event is triggered per event, the chain dies away.",
          "На событие приходится меньше одного следующего, цепь затухает.",
        ),
        b(
          "Greater absorption leaves fewer neutrons to trigger fission and reduces the chain further.",
          "Большее поглощение оставляет меньше нейтронов для деления и дополнительно ослабляет цепь.",
        ),
      ),
      q(
        "p2-8",
        "fusion",
        "A(iii)",
        "challenge",
        b(
          "A presentation says “D–T fusion is the Sun’s main reaction, needs no confinement because it releases energy, and has no radioactive concerns.” Evaluate all three statements and give the balanced D–T equation.",
          "Презентация: «D–T — главная реакция Солнца; удержание не нужно, ведь энергия выделяется; радиоактивных проблем нет». Оцени все три части и запиши уравнение D–T.",
        ),
        b(
          "Distinguish a teaching example from the stellar reaction chain.",
          "Отличай учебный пример от звёздной цепи реакций.",
        ),
        b(
          "D–T: ²₁H + ³₁H → ⁴₂He + ¹₀n + energy.",
          "D–T: ²₁H + ³₁H → ⁴₂He + ¹₀n + энергия.",
        ),
        b(
          "The Sun mainly uses hydrogen fusion chains such as the proton–proton chain, not the D–T example.",
          "На Солнце преобладают цепи синтеза водорода, например протон-протонная, а не данный D–T-пример.",
        ),
        b(
          "Positive nuclei repel; very high temperature enables sufficiently close encounters.",
          "Положительные ядра отталкиваются; очень высокая температура позволяет тесно сближаться.",
        ),
        b(
          "Density/confinement time and losses matter for sustained useful fusion, despite energy release per reaction.",
          "Для поддержания полезного синтеза важны плотность, время удержания и потери, несмотря на энергию отдельной реакции.",
        ),
        b(
          "Tritium is radioactive and emitted neutrons can activate materials; the absolute claim is false.",
          "Тритий радиоактивен, нейтроны могут активировать материалы; категорическое утверждение неверно.",
        ),
      ),
    ],
  },
];
