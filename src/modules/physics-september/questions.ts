import { b, q, type Question } from "./types";
export const questions: Question[] = [
  q(
    "atom-1",
    "atomic-structure",
    "A(i)",
    "foundation",
    b(
      "State the relative charge, relative mass and location of an electron.",
      "Укажи относительные заряд, массу и положение электрона.",
    ),
    b("Check charge, mass and location against the proton values.", "Проверь заряд, массу и положение по значениям для протона."),
    b("Relative charge −1.", "Относительный заряд −1."),
    b("Relative mass about 1/1836.", "Относительная масса около 1/1836."),
    b(
      "Occupies energy levels outside the nucleus.",
      "Занимает уровни энергии вне ядра.",
    ),
  ),
  q(
    "atom-2",
    "atomic-structure",
    "A(ii)",
    "application",
    b(
      "An atom has 13 protons and 14 neutrons. It loses three electrons. Find its mass number, electron count and charge.",
      "У атома 13 протонов и 14 нейтронов. Он теряет три электрона. Найди массовое число, число электронов и заряд.",
    ),
    b("Loss changes electrons only.", "Потеря меняет только электроны."),
    b("A = 13 + 14 = 27.", "A = 13 + 14 = 27."),
    b("13 − 3 = 10 electrons.", "13 − 3 = 10 электронов."),
    b("Charge = +3; nucleus unchanged.", "Заряд +3; ядро не меняется."),
  ),
  q(
    "atom-3",
    "atomic-structure",
    "A(ii)",
    "application",
    b(
      "Atomic radius is 1.2 × 10⁻¹⁰ m and nuclear radius is 4.0 × 10⁻¹⁵ m. Calculate their ratio and the model nuclear radius if the model atom has radius 3 m.",
      "Радиус атома 1,2 × 10⁻¹⁰ м, ядра 4,0 × 10⁻¹⁵ м. Найди отношение и радиус ядра в модели, где радиус атома 3 м.",
    ),
    b(
      "Use the same scale factor for both radii.",
      "Для обоих радиусов масштаб одинаков.",
    ),
    b(
      "Ratio = (1.2 / 4.0) × 10⁵ = 30,000.",
      "Отношение (1,2 / 4,0) × 10⁵ = 30 000.",
    ),
    b(
      "Model nuclear radius = 3 / 30,000 = 0.0001 m.",
      "Радиус модельного ядра 3 / 30 000 = 0,0001 м.",
    ),
    b(
      "This is 0.1 mm; the nucleus is tiny even in a large atom model.",
      "Это 0,1 мм: даже в большой модели ядро очень маленькое.",
    ),
  ),
  q(
    "atom-4",
    "atomic-structure",
    "A(iii)",
    "challenge",
    b(
      "A diagram shows electrons travelling on circular tracks. A student claims it proves their exact positions are always known. Evaluate the claim.",
      "На схеме электроны движутся по окружностям. Ученик считает, что это доказывает постоянное знание их точного положения. Оцени утверждение.",
    ),
    b(
      "Separate a model feature from direct evidence.",
      "Отдели условность модели от наблюдения.",
    ),
    b(
      "The circles model allowed energy levels, not measured tracks.",
      "Окружности моделируют разрешённые уровни энергии, а не измеренные траектории.",
    ),
    b(
      "The diagram does not establish exact electron positions or classical orbits.",
      "Схема не устанавливает точные положения или классические орбиты электронов.",
    ),
    b(
      "It is useful for energy transitions but has limits; the claim goes beyond the evidence.",
      "Она полезна для переходов энергии, но ограничена; утверждение выходит за пределы данных.",
    ),
  ),
  q(
    "iso-1",
    "isotopes",
    "A(i)",
    "foundation",
    b(
      "Define isotope and explain why carbon-12 and carbon-14 are the same element.",
      "Дай определение изотопов и объясни, почему углерод-12 и углерод-14 — один элемент.",
    ),
    b(
      "Which particle defines the element?",
      "Какая частица определяет элемент?",
    ),
    b(
      "Isotopes have the same proton number but different neutron numbers.",
      "У изотопов одинаковое число протонов, разное число нейтронов.",
    ),
    b(
      "Both carbon nuclei have Z = 6; the proton number identifies carbon.",
      "Оба ядра имеют Z = 6; число протонов определяет углерод.",
    ),
  ),
  q(
    "iso-2",
    "isotopes",
    "A(ii)",
    "application",
    b(
      "Find protons, neutrons and electrons in ²⁴₁₂Mg²⁺ and ²⁶₁₂Mg²⁺.",
      "Найди протоны, нейтроны и электроны в ²⁴₁₂Mg²⁺ и ²⁶₁₂Mg²⁺.",
    ),
    b("A differs but Z and charge do not.", "Различается A, но не Z и заряд."),
    b("Both have 12 protons.", "В обоих по 12 протонов."),
    b("Neutrons: 12 and 14 respectively.", "Нейтронов 12 и 14 соответственно."),
    b(
      "Both have 10 electrons because each lost two.",
      "В обоих по 10 электронов: каждый потерял два.",
    ),
  ),
  q(
    "iso-3",
    "isotopes",
    "A(ii)",
    "application",
    b(
      "A neutral atom has 15 electrons and 16 neutrons. Give Z, A and the charge after gaining two electrons.",
      "У нейтрального атома 15 электронов и 16 нейтронов. Найди Z, A и заряд после присоединения двух электронов.",
    ),
    b(
      "Initially protons equal electrons.",
      "Вначале протонов столько же, сколько электронов.",
    ),
    b("Z = 15.", "Z = 15."),
    b("A = 15 + 16 = 31.", "A = 15 + 16 = 31."),
    b(
      "After gaining electrons: 17 electrons, charge −2; A remains 31.",
      "После присоединения: 17 электронов, заряд −2; A остаётся 31.",
    ),
  ),
  q(
    "iso-4",
    "isotopes",
    "A(iii)",
    "challenge",
    b(
      "An element has relative atomic mass 20.4. A student says every nucleus contains 20.4 nucleons. Evaluate and give an isotope mixture consistent with the average, using masses 20 and 22.",
      "Относительная атомная масса элемента 20,4. Ученик говорит, что в каждом ядре 20,4 нуклона. Оцени и предложи смесь масс 20 и 22 с таким средним.",
    ),
    b(
      "The average can be non-integer; particle counts cannot.",
      "Среднее может быть дробным, число частиц — нет.",
    ),
    b(
      "The claim confuses an average with a count for one nucleus.",
      "Перепутаны среднее и число частиц одного ядра.",
    ),
    b(
      "80% mass-20 and 20% mass-22 is a possible mixture.",
      "Возможна смесь 80% массы-20 и 20% массы-22.",
    ),
    b("0.8 × 20 + 0.2 × 22 = 20.4.", "0,8 × 20 + 0,2 × 22 = 20,4."),
  ),
  q(
    "model-1",
    "atomic-models",
    "A(i)",
    "foundation",
    b(
      "Explain two differences between the plum-pudding and nuclear models.",
      "Объясни два различия моделей Томсона и Резерфорда.",
    ),
    b(
      "Contrast where positive charge and mass are placed.",
      "Укажи различия в распределении положительного заряда и массы.",
    ),
    b(
      "Plum pudding spreads positive charge through the atom; the nuclear model concentrates it in a small nucleus.",
      "У Томсона положительный заряд распределён по атому; в ядерной модели он сосредоточен в маленьком ядре.",
    ),
    b(
      "The nuclear model has mostly empty space and mass concentrated centrally, unlike the diffuse earlier model.",
      "В ядерной модели большая часть объёма пустая, масса в центре; в прежней модели она распределена.",
    ),
  ),
  q(
    "model-2",
    "atomic-models",
    "A(ii)",
    "application",
    b(
      "Of 100,000 alpha particles, 99,500 travel nearly straight, 490 deflect and 10 scatter backwards. Find the backscattering percentage and explain what it suggests.",
      "Из 100 000 альфа-частиц 99 500 прошли почти прямо, 490 отклонились, 10 рассеялись назад. Найди процент обратного рассеяния и объясни вывод.",
    ),
    b("Percentage = part / total × 100.", "Процент = часть / целое × 100."),
    b("10 / 100,000 × 100 = 0.010%.", "10 / 100 000 × 100 = 0,010%."),
    b(
      "Strong scattering is rare, consistent with a very small concentrated region.",
      "Сильное рассеяние редко, что согласуется с очень маленькой областью сосредоточенного заряда.",
    ),
    b(
      "A dense positive nucleus can strongly repel alpha particles passing close to it.",
      "Плотное положительное ядро сильно отталкивает близко проходящие альфа-частицы.",
    ),
  ),
  q(
    "model-3",
    "atomic-models",
    "A(i)",
    "application",
    b(
      "Explain why most alpha particles pass through thin foil and why a few undergo large deflections.",
      "Объясни, почему большинство альфа-частиц проходит тонкую фольгу, а некоторые сильно отклоняются.",
    ),
    b(
      "Give a separate observation-to-explanation link for each.",
      "Для каждого наблюдения дай отдельное объяснение.",
    ),
    b(
      "Most atomic volume is empty space, so most paths avoid nuclei.",
      "Основная часть объёма атома пустая, большинство траекторий проходит мимо ядер.",
    ),
    b(
      "Positive charge is concentrated in a small nucleus.",
      "Положительный заряд сосредоточен в маленьком ядре.",
    ),
    b(
      "A nearby positive alpha particle is strongly repelled, causing a large deflection.",
      "Близкая положительная альфа-частица сильно отталкивается и отклоняется.",
    ),
  ),
  q(
    "model-4",
    "atomic-models",
    "A(iii)",
    "challenge",
    b(
      "“The foil experiment proved electrons have fixed energy levels and discovered neutrons.” Evaluate both claims.",
      "«Опыт с фольгой доказал фиксированные уровни энергии электронов и открыл нейтроны». Оцени обе части.",
    ),
    b(
      "Distinguish Rutherford, Bohr and Chadwick.",
      "Различай Резерфорда, Бора и Чедвика.",
    ),
    b(
      "The scattering evidence supported a small dense positively charged nucleus.",
      "Рассеяние подтвердило маленькое плотное положительное ядро.",
    ),
    b(
      "Fixed energy levels were a later Bohr-model development, supported by evidence such as spectra.",
      "Фиксированные уровни относятся к последующей модели Бора и данным, например спектрам.",
    ),
    b(
      "Neutron evidence came later from Chadwick; neither claim follows from the foil experiment alone.",
      "Свидетельства нейтронов позднее получил Чедвик; обе части не следуют из одного опыта с фольгой.",
    ),
  ),
  q(
    "rad-1",
    "radiation",
    "A(i)",
    "foundation",
    b(
      "State the charge and physical nature of alpha, beta-minus and gamma radiation.",
      "Укажи заряд и физическую природу альфа-, бета-минус- и гамма-излучения.",
    ),
    b(
      "Particles and photons are different.",
      "Частицы вещества и фотоны различаются.",
    ),
    b("Alpha: helium nucleus, charge +2.", "Альфа: ядро гелия, заряд +2."),
    b(
      "Beta-minus: electron produced in a nuclear decay, charge −1.",
      "Бета-минус: электрон, возникающий при ядерном распаде, заряд −1.",
    ),
    b(
      "Gamma: electromagnetic photon, charge 0.",
      "Гамма: электромагнитный фотон, заряд 0.",
    ),
  ),
  q(
    "rad-2",
    "radiation",
    "A(ii)",
    "application",
    b(
      "A source produces 780 detected counts in 60 s. Background gives 90 counts in 30 s. Find the net rate.",
      "С источником зарегистрировано 780 импульсов за 60 с. Фон дал 90 за 30 с. Найди чистую скорость.",
    ),
    b(
      "Convert both measurements to counts/s first.",
      "Сначала оба измерения переведи в имп/с.",
    ),
    b(
      "Total = 780 / 60 = 13 counts/s.",
      "Полная скорость 780 / 60 = 13 имп/с.",
    ),
    b("Background = 90 / 30 = 3 counts/s.", "Фон 90 / 30 = 3 имп/с."),
    b("Net = 10 counts/s.", "Чистая скорость 10 имп/с."),
  ),
  q(
    "rad-3",
    "radiation",
    "A(ii)",
    "application",
    b(
      "A corrected signal is 400 counts/min with no absorber, 390 with paper, 380 with thin aluminium and 95 with thick lead. Which radiation is most consistent, and why?",
      "Чистый счёт: 400 имп/мин без экрана, 390 с бумагой, 380 с тонким алюминием, 95 с толстым свинцом. Какое излучение лучше соответствует данным и почему?",
    ),
    b(
      "Look for strong penetration and attenuation rather than complete stopping.",
      "Ищи глубокое проникновение и ослабление, а не полную остановку.",
    ),
    b(
      "Gamma is most consistent with passing paper and thin aluminium.",
      "Гамма лучше соответствует прохождению бумаги и тонкого алюминия.",
    ),
    b(
      "Thick lead reduces the signal substantially but does not eliminate it.",
      "Толстый свинец сильно ослабляет, но не полностью устраняет сигнал.",
    ),
    b(
      "The conclusion is based on the pattern; repeats and energy information would strengthen identification.",
      "Вывод основан на характере ослабления; повторы и сведения об энергии усилили бы его.",
    ),
  ),
  q(
    "rad-4",
    "radiation",
    "A(iii)",
    "challenge",
    b(
      "A 2,000 Bq source gives a net detector rate of 100 counts/s. A student says the detector disproves the activity label. Evaluate.",
      "Источник 2000 Бк даёт чистый счёт 100 имп/с. Ученик считает маркировку активности неверной. Оцени.",
    ),
    b(
      "Does a detector register every decay?",
      "Регистрирует ли детектор каждый распад?",
    ),
    b(
      "Bq describes all decays per second in the source, not just detected events.",
      "Бк — все распады источника за секунду, а не только обнаруженные события.",
    ),
    b(
      "Only a fraction of emissions reach the detector and are registered.",
      "Лишь часть излучения достигает детектора и регистрируется.",
    ),
    b(
      "100 / 2,000 = 5% would be a possible overall detection fraction under a simple one-emission-per-decay model; the readings need not conflict.",
      "100 / 2000 = 5% — возможная доля регистрации в простой модели одного испускания на распад; противоречие необязательно.",
    ),
  ),
  q(
    "eq-1",
    "nuclear-equations",
    "A(ii)",
    "foundation",
    b(
      "Complete ²¹⁰₈₄Po → X + ⁴₂He. Give X’s A, Z and neutron number; Z = 82 is lead.",
      "Дополни ²¹⁰₈₄Po → X + ⁴₂He. Укажи A, Z и число нейтронов X; Z = 82 — свинец.",
    ),
    b(
      "Balance upper and lower numbers separately.",
      "Уравняй верхние и нижние числа отдельно.",
    ),
    b("A = 210 − 4 = 206.", "A = 210 − 4 = 206."),
    b("Z = 84 − 2 = 82; X = ²⁰⁶₈₂Pb.", "Z = 84 − 2 = 82; X = ²⁰⁶₈₂Pb."),
    b("Neutrons = 206 − 82 = 124.", "Нейтронов 206 − 82 = 124."),
  ),
  q(
    "eq-2",
    "nuclear-equations",
    "A(ii)",
    "application",
    b(
      "Complete the beta-minus decay of ³²₁₅P. Z = 16 is sulfur. Explain why A does not change.",
      "Запиши бета-минус-распад ³²₁₅P. Z = 16 — сера. Объясни сохранение A.",
    ),
    b(
      "A neutron changes type rather than leaving as a nucleon.",
      "Нейтрон меняет тип, а не вылетает как нуклон.",
    ),
    b(
      "³²₁₅P → ³²₁₆S + ⁰₋₁e (+ electron antineutrino).",
      "³²₁₅P → ³²₁₆S + ⁰₋₁e (+ электронное антинейтрино).",
    ),
    b("Charge balances: 15 = 16 − 1.", "Заряд: 15 = 16 − 1."),
    b(
      "One neutron becomes a proton, so the total nucleon number stays 32.",
      "Один нейтрон становится протоном; число нуклонов остаётся 32.",
    ),
  ),
  q(
    "eq-3",
    "nuclear-equations",
    "A(ii)",
    "challenge",
    b(
      "A parent with A = 238, Z = 92 undergoes two alpha decays and two beta-minus decays. Find final A, Z and N.",
      "Ядро A = 238, Z = 92 проходит два альфа- и два бета-минус-распада. Найди конечные A, Z и N.",
    ),
    b(
      "Add all changes to each number independently.",
      "Суммируй изменения каждого числа отдельно.",
    ),
    b("A = 238 − 8 = 230.", "A = 238 − 8 = 230."),
    b("Z = 92 − 4 + 2 = 90.", "Z = 92 − 4 + 2 = 90."),
    b("N = 230 − 90 = 140.", "N = 230 − 90 = 140."),
  ),
  q(
    "eq-4",
    "nuclear-equations",
    "A(iii)",
    "challenge",
    b(
      "A student writes ¹⁴₆C → ¹⁴₅B + ⁰₋₁e and says charge is conserved because a negative particle leaves. Diagnose and correct the error.",
      "Ученик пишет ¹⁴₆C → ¹⁴₅B + ⁰₋₁e и утверждает, что заряд сохраняется: вылетает отрицательная частица. Найди и исправь ошибку.",
    ),
    b(
      "Calculate the lower-number total on the right.",
      "Вычисли сумму нижних чисел справа.",
    ),
    b(
      "The proposed right-hand charge is 5 − 1 = 4, not 6.",
      "В предложенной записи справа 5 − 1 = 4, а не 6.",
    ),
    b(
      "The daughter must have Z = 7 because 7 − 1 = 6.",
      "Должно быть Z = 7, потому что 7 − 1 = 6.",
    ),
    b(
      "Correct daughter: ¹⁴₇N; A stays 14 as a neutron becomes a proton.",
      "Правильное дочернее ядро ¹⁴₇N; A = 14, поскольку нейтрон стал протоном.",
    ),
  ),
  q(
    "half-1",
    "half-life",
    "A(ii)",
    "foundation",
    b(
      "T½ = 4 days. Initial activity is 640 Bq. Find activity and percentage remaining after 12 days.",
      "T½ = 4 дня, начальная активность 640 Бк. Найди активность и оставшийся процент через 12 дней.",
    ),
    b("Count the number of half-lives.", "Сосчитай число периодов."),
    b("n = 12 / 4 = 3.", "n = 12 / 4 = 3."),
    b("Activity = 640 / 8 = 80 Bq.", "Активность 640 / 8 = 80 Бк."),
    b("12.5% remains (87.5% decayed).", "Осталось 12,5% (распалось 87,5%)."),
  ),
  q(
    "half-2",
    "half-life",
    "A(ii)",
    "application",
    b(
      "Total rates at 0, 5, 10 and 15 min are 210, 110, 60 and 35 counts/min. Background is 10 counts/min. Determine T½ and predict the total rate at 20 min.",
      "В моменты 0, 5, 10 и 15 мин полный счёт 210, 110, 60 и 35 имп/мин. Фон 10 имп/мин. Найди T½ и полный счёт через 20 мин.",
    ),
    b(
      "Subtract the same background at every time.",
      "Каждый раз вычитай один и тот же фон.",
    ),
    b(
      "Net rates: 200, 100, 50, 25 counts/min.",
      "Чистые скорости: 200, 100, 50, 25 имп/мин.",
    ),
    b(
      "They halve every 5 min: T½ = 5 min.",
      "Они уменьшаются вдвое каждые 5 мин: T½ = 5 мин.",
    ),
    b(
      "At 20 min net = 12.5, so total = 22.5 counts/min (expected average).",
      "Через 20 мин чистая 12,5, полная 22,5 имп/мин — ожидаемое среднее.",
    ),
  ),
  q(
    "half-3",
    "half-life",
    "A(ii)",
    "challenge",
    b(
      "A source starts at 1,600 Bq with T½ = 3 h. After how many complete half-lives is its activity first strictly below 100 Bq? Give the time.",
      "Источник начинает с 1600 Бк, T½ = 3 ч. После скольких полных периодов активность впервые строго меньше 100 Бк? Укажи время.",
    ),
    b("“Below” excludes equality.", "«Меньше» исключает равенство."),
    b(
      "After four half-lives activity is exactly 100 Bq.",
      "Через четыре периода ровно 100 Бк.",
    ),
    b(
      "After five it is 50 Bq, the first complete-half-life point below 100.",
      "Через пять — 50 Бк, первая целая отметка периода ниже 100.",
    ),
    b("Time = 5 × 3 = 15 h.", "Время 5 × 3 = 15 ч."),
  ),
  q(
    "half-4",
    "half-life",
    "A(iii)",
    "challenge",
    b(
      "In a simulation of 20 nuclei, 13 remain after one half-life. A student says the model is broken because exactly 10 must remain. Evaluate.",
      "В симуляции из 20 ядер через один период осталось 13. Ученик говорит, что модель сломана: обязано остаться ровно 10. Оцени.",
    ),
    b(
      "Expected value is not a guaranteed outcome.",
      "Ожидаемое значение не гарантированный результат.",
    ),
    b(
      "Each nucleus decays randomly; half is an expected fraction.",
      "Каждое ядро распадается случайно; половина — ожидаемая доля.",
    ),
    b(
      "Small populations can fluctuate substantially, so 13 does not alone disprove the model.",
      "Малые совокупности заметно колеблются; число 13 само по себе не опровергает модель.",
    ),
    b(
      "Repeat trials or increase sample size and compare average fractions with 1/2.",
      "Повтори опыты или увеличь выборку и сравни среднюю долю с 1/2.",
    ),
  ),
  q(
    "cont-1",
    "contamination",
    "A(i)",
    "foundation",
    b(
      "Distinguish irradiation and radioactive contamination.",
      "Различи облучение и радиоактивное загрязнение.",
    ),
    b(
      "One concerns radiation reaching an object; the other concerns material.",
      "Одно относится к воздействию излучения, другое — к веществу.",
    ),
    b(
      "Irradiation is exposure to radiation from a source.",
      "Облучение — воздействие излучения источника.",
    ),
    b(
      "Contamination is unwanted radioactive material on or inside an object.",
      "Загрязнение — нежелательное радиоактивное вещество на объекте или внутри него.",
    ),
  ),
  q(
    "cont-2",
    "contamination",
    "A(ii)",
    "application",
    b(
      "A worker walks past a sealed gamma source without touching it. Another gets radioactive powder on a glove. Classify each event and explain what remains after leaving.",
      "Работник проходит мимо герметичного гамма-источника, не касаясь его. Другому на перчатку попал радиоактивный порошок. Классифицируй и объясни последствия ухода.",
    ),
    b(
      "Track whether radioactive atoms travel with the person.",
      "Проследи, уносит ли человек радиоактивные атомы.",
    ),
    b(
      "The first is irradiation without stated contamination.",
      "Первый случай — облучение без указанного загрязнения.",
    ),
    b(
      "The second is contamination and associated irradiation from the powder.",
      "Второй — загрязнение и облучение от порошка.",
    ),
    b(
      "Leaving the first source reduces/ends its exposure; the glove carries a source away and may transfer material.",
      "Уход от первого источника снижает/прекращает воздействие; перчатка уносит источник и может переносить вещество.",
    ),
  ),
  q(
    "cont-3",
    "contamination",
    "A(ii)",
    "application",
    b(
      "Explain why reducing time, increasing distance and choosing shielding can reduce external radiation dose.",
      "Объясни, почему меньшее время, большее расстояние и подходящий экран уменьшают внешнюю дозу.",
    ),
    b("Give a mechanism for each measure.", "Для каждой меры дай механизм."),
    b(
      "Less time means fewer interactions accumulate at the same dose rate.",
      "За меньшее время при той же мощности дозы накапливается меньше взаимодействий.",
    ),
    b(
      "Greater distance generally spreads emissions over a larger area, reducing intensity at the person.",
      "На большем расстоянии излучение обычно распределяется по большей площади, интенсивность у человека ниже.",
    ),
    b(
      "A suitable shield absorbs or scatters some radiation before it reaches the person.",
      "Подходящий экран поглощает или рассеивает часть излучения до человека.",
    ),
  ),
  q(
    "cont-4",
    "contamination",
    "A(iii)",
    "challenge",
    b(
      "“Alpha cannot pass through skin, so swallowing an alpha emitter is safe.” Evaluate the argument.",
      "«Альфа не проходит кожу, значит проглатывать альфа-источник безопасно». Оцени аргумент.",
    ),
    b("The location of the source changes.", "Меняется положение источника."),
    b(
      "Skin protection applies to an external source, not one inside the body.",
      "Защита кожей относится к внешнему, а не внутреннему источнику.",
    ),
    b(
      "Internal alpha emission can cause dense ionisation directly beside living cells.",
      "Внутреннее альфа-излучение вызывает сильную ионизацию рядом с живыми клетками.",
    ),
    b(
      "The conclusion is unsupported; risk depends on dose, distribution and residence time, not penetration alone.",
      "Вывод не обоснован: риск зависит от дозы, распределения и времени нахождения, а не только проникновения.",
    ),
  ),
  q(
    "bg-1",
    "background",
    "A(i)",
    "foundation",
    b(
      "Give two natural sources of background radiation and explain one reason it varies by location.",
      "Назови два природных источника фона и объясни одну причину его различий между местами.",
    ),
    b(
      "Think about space, geology and atmosphere.",
      "Подумай о космосе, геологии и атмосфере.",
    ),
    b("Cosmic radiation.", "Космическое излучение."),
    b(
      "Radioactive rocks/soil or radon gas.",
      "Радиоактивные породы/почва или радон.",
    ),
    b(
      "For example, higher altitude means less atmospheric shielding against cosmic radiation.",
      "Например, на большей высоте меньше атмосферная защита от космического излучения.",
    ),
  ),
  q(
    "bg-2",
    "background",
    "A(ii)",
    "application",
    b(
      "Background is 240 counts in 4 min. A source measurement is 1,560 counts in 2 min. Calculate net counts/min and counts/s.",
      "Фон 240 импульсов за 4 мин, с источником 1560 за 2 мин. Найди чистый счёт в имп/мин и имп/с.",
    ),
    b("Use rates before subtracting.", "Перед вычитанием используй скорости."),
    b(
      "Background 60 counts/min; total 780 counts/min.",
      "Фон 60 имп/мин, полная скорость 780 имп/мин.",
    ),
    b("Net = 720 counts/min.", "Чистая скорость 720 имп/мин."),
    b("720 / 60 = 12 counts/s.", "720 / 60 = 12 имп/с."),
  ),
  q(
    "bg-3",
    "background",
    "A(ii)",
    "application",
    b(
      "A fictional dose rate is 0.8 μSv/h for 15 h. Calculate the dose in μSv and mSv.",
      "Условная мощность дозы 0,8 мкЗв/ч действует 15 ч. Найди дозу в мкЗв и мЗв.",
    ),
    b("Multiply by time, then convert.", "Умножь на время и переведи единицы."),
    b("Dose = 0.8 × 15 = 12 μSv.", "Доза 0,8 × 15 = 12 мкЗв."),
    b("12 μSv = 0.012 mSv.", "12 мкЗв = 0,012 мЗв."),
  ),
  q(
    "bg-4",
    "background",
    "A(iii)",
    "challenge",
    b(
      "A one-minute count rises from 24 to 27 after a rock is placed near a detector. Is this enough to establish that the rock adds a signal? Explain and propose a better comparison.",
      "За минуту счёт вырос с 24 до 27 после помещения камня рядом. Достаточно ли этого для вывода о дополнительном сигнале? Объясни и предложи лучшее сравнение.",
    ),
    b(
      "Consider random fluctuations and measurement conditions.",
      "Учти случайные колебания и условия измерения.",
    ),
    b(
      "A difference of three in single short readings can arise from random fluctuations.",
      "Разница в три импульса в коротких одиночных измерениях может быть случайной.",
    ),
    b(
      "Repeat and average, or count for longer, both with and without the rock.",
      "Повтори и усредни либо измеряй дольше с камнем и без него.",
    ),
    b(
      "Keep position/settings fixed and compare corrected rates with their variability before a firm conclusion.",
      "Сохраняй положение/настройки и сравни чистые скорости с их разбросом до уверенного вывода.",
    ),
  ),
  q(
    "choice-1",
    "half-life-choice",
    "A(i)",
    "foundation",
    b(
      "For equal numbers of parent nuclei, which sample has greater initial activity: T½ = 2 h or T½ = 10 h? By what factor?",
      "При одинаковом числе ядер какой образец активнее вначале: T½ = 2 ч или 10 ч? Во сколько раз?",
    ),
    b(
      "At equal N, activity varies inversely with half-life.",
      "При равном N активность обратно пропорциональна периоду.",
    ),
    b(
      "The 2 h sample has greater initial activity.",
      "Образец с периодом 2 ч активнее.",
    ),
    b("Factor = 10 / 2 = 5.", "В пять раз: 10 / 2 = 5."),
  ),
  q(
    "choice-2",
    "half-life-choice",
    "A(ii)",
    "application",
    b(
      "X and Y each start at 1,200 Bq. Half-lives are 2 h and 6 h. Find their activities after 6 h and the ratio Y:X then.",
      "X и Y начинают с 1200 Бк. Периоды 2 ч и 6 ч. Найди активности через 6 ч и отношение Y:X.",
    ),
    b(
      "Equal initial activity does not imply equal later activity.",
      "Равные начальные активности не означают равные последующие.",
    ),
    b("X: three half-lives → 150 Bq.", "X: три периода → 150 Бк."),
    b("Y: one half-life → 600 Bq.", "Y: один период → 600 Бк."),
    b("Y:X = 600:150 = 4:1.", "Y:X = 600:150 = 4:1."),
  ),
  q(
    "choice-3",
    "half-life-choice",
    "A(ii)",
    "application",
    b(
      "An industrial gauge must operate for months without frequent replacement. Explain why a 10 s source is unsuitable and why a long half-life alone does not guarantee suitability.",
      "Промышленный датчик должен работать месяцами без частой замены. Почему источник с периодом 10 с не подходит и почему большого периода самого по себе мало?",
    ),
    b(
      "Combine lifetime with radiation properties.",
      "Сочетай срок работы со свойствами излучения.",
    ),
    b(
      "A 10 s source loses useful activity extremely rapidly over many half-lives.",
      "Источник с периодом 10 с очень быстро теряет полезную активность.",
    ),
    b(
      "A longer half-life gives a more stable working signal over the required period.",
      "Больший период даёт более стабильный сигнал на нужное время.",
    ),
    b(
      "Radiation penetration, energy, activity and containment must also suit the material and detector.",
      "Проникновение, энергия, активность и герметичность тоже должны подходить материалу и детектору.",
    ),
  ),
  q(
    "choice-4",
    "half-life-choice",
    "A(iii)",
    "challenge",
    b(
      "“Isotope L has a 1,000 year half-life, so it is safer than isotope S with a 1 h half-life.” Evaluate without assuming equal mass or activity.",
      "«У L период 1000 лет, поэтому он безопаснее S с периодом 1 ч». Оцени без предположения равной массы или активности.",
    ),
    b("What is missing from the comparison?", "Чего не хватает для сравнения?"),
    b(
      "Half-life alone does not specify activity unless the number of parent nuclei is known.",
      "Период не определяет активность без числа родительских ядер.",
    ),
    b(
      "Radiation type/energy, route, dose and duration matter.",
      "Важны вид/энергия излучения, путь воздействия, доза и время.",
    ),
    b(
      "L may persist longer; S may decay away faster. No universal safety ranking follows.",
      "L может сохраняться дольше, S быстрее распадаться. Универсального вывода о безопасности нет.",
    ),
  ),
  q(
    "use-1",
    "uses",
    "A(i)",
    "foundation",
    b(
      "Explain why gamma emission can be suitable for a tracer detected outside the body.",
      "Объясни, почему гамма-излучение может подходить индикатору, обнаруживаемому снаружи тела.",
    ),
    b(
      "Connect a property to the detection requirement.",
      "Свяжи свойство с задачей обнаружения.",
    ),
    b(
      "Gamma can penetrate body tissue to reach an external detector.",
      "Гамма проходит ткани до внешнего детектора.",
    ),
    b(
      "The radiation reveals the tracer distribution/process without needing to remove tissue.",
      "Излучение позволяет отслеживать распределение/процесс без извлечения ткани.",
    ),
    b(
      "Half-life and chemistry still must be suitable; penetration alone is insufficient.",
      "Период и химия тоже должны подходить: одного проникновения мало.",
    ),
  ),
  q(
    "use-2",
    "uses",
    "A(ii)",
    "application",
    b(
      "A paper gauge uses beta radiation. The corrected count rises above its set value. Explain the likely thickness change and why alpha is a poor replacement.",
      "Датчик бумаги использует бета-излучение. Чистый счёт стал выше заданного. Объясни вероятное изменение толщины и почему альфа — плохая замена.",
    ),
    b(
      "More reaching the detector means less absorbed.",
      "Больше дошло до детектора — меньше поглотилось.",
    ),
    b(
      "The paper is likely thinner, so fewer beta particles are absorbed.",
      "Бумага, вероятно, тоньше: поглощается меньше бета-частиц.",
    ),
    b(
      "This assumes fixed source, geometry and composition.",
      "Предполагаются постоянные источник, геометрия и состав.",
    ),
    b(
      "Alpha may be stopped completely even by thin paper, giving no useful thickness-dependent transmitted signal.",
      "Альфа может полностью задерживаться даже тонкой бумагой, без полезного прошедшего сигнала для измерения толщины.",
    ),
  ),
  q(
    "use-3",
    "uses",
    "A(ii)",
    "application",
    b(
      "A fictional imaging tracer starts at 480 MBq, with T½ = 6 h. Find activity after 12 h. State one reason it should not have a 10 s half-life for a two-hour procedure.",
      "Учебный индикатор начинает с 480 МБк, T½ = 6 ч. Найди активность через 12 ч. Почему период 10 с не подходит двухчасовой процедуре?",
    ),
    b(
      "M means million, but the same unit may be kept throughout.",
      "М означает миллион, но единицу можно сохранить в расчёте.",
    ),
    b("Two half-lives elapse.", "Проходит два периода."),
    b("480 / 4 = 120 MBq.", "480 / 4 = 120 МБк."),
    b(
      "With 10 s half-life the useful activity would disappear far too quickly during preparation and imaging.",
      "При периоде 10 с полезная активность слишком быстро исчезла бы во время подготовки и исследования.",
    ),
  ),
  q(
    "use-4",
    "uses",
    "A(iii)",
    "challenge",
    b(
      "A supplier says gamma sterilisation makes every treated syringe permanently radioactive. Evaluate and explain the actual mechanism.",
      "Поставщик утверждает, что гамма-стерилизация навсегда делает каждый шприц радиоактивным. Оцени и объясни настоящий механизм.",
    ),
    b(
      "Distinguish energy exposure from transfer of radioactive atoms.",
      "Различай воздействие энергии и перенос радиоактивных атомов.",
    ),
    b(
      "Gamma photons penetrate packaging and damage microorganisms by ionisation.",
      "Гамма-фотоны проходят упаковку и повреждают микроорганизмы ионизацией.",
    ),
    b(
      "Radioactive material need not be added to the syringe; this is irradiation, not contamination.",
      "Радиоактивное вещество не нужно добавлять в шприц: это облучение, не загрязнение.",
    ),
    b(
      "Ordinary sterilisation does not imply permanent induced radioactivity; the claim is unsupported.",
      "Обычная стерилизация не означает постоянную наведённую радиоактивность; утверждение не обосновано.",
    ),
  ),
  q(
    "fis-1",
    "fission",
    "A(i)",
    "foundation",
    b(
      "Describe neutron-induced fission and how it can start a chain reaction.",
      "Опиши деление под действием нейтрона и возникновение цепной реакции.",
    ),
    b(
      "Follow the initial neutron, fragments and new neutrons.",
      "Проследи первый нейтрон, осколки и новые нейтроны.",
    ),
    b(
      "A suitable heavy nucleus absorbs a neutron and splits into smaller nuclei.",
      "Подходящее тяжёлое ядро поглощает нейтрон и делится на меньшие.",
    ),
    b(
      "Energy and additional neutrons are released.",
      "Выделяются энергия и дополнительные нейтроны.",
    ),
    b(
      "Some released neutrons cause further fissions, continuing the chain.",
      "Часть нейтронов вызывает дальнейшие деления, продолжая цепь.",
    ),
  ),
  q(
    "fis-2",
    "fission",
    "A(ii)",
    "application",
    b(
      "Complete ¹₀n + ²³⁵₉₂U → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + x ¹₀n. Show both balances.",
      "Дополни ¹₀n + ²³⁵₉₂U → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + x ¹₀n. Покажи оба баланса.",
    ),
    b(
      "Count all incoming nucleons, including the first neutron.",
      "Сосчитай все входящие нуклоны, включая первый нейтрон.",
    ),
    b(
      "Incoming A = 236; fragment A total = 234.",
      "Слева A = 236, в осколках суммарно 234.",
    ),
    b("x = 2 neutrons.", "x = 2 нейтрона."),
    b(
      "Charge: 92 = 54 + 38; neutrons contribute zero.",
      "Заряд: 92 = 54 + 38; нейтроны добавляют ноль.",
    ),
  ),
  q(
    "fis-3",
    "fission",
    "A(ii)",
    "challenge",
    b(
      "A model releases 3.0 × 10⁻¹¹ J per fission at 2.0 × 10¹⁸ fissions/s. Calculate thermal power and electrical power at 40% efficiency.",
      "Модель выделяет 3,0 × 10⁻¹¹ Дж на деление при 2,0 × 10¹⁸ делений/с. Найди тепловую и электрическую мощности при КПД 40%.",
    ),
    b(
      "Multiply energy/event by events/s.",
      "Умножь энергию события на события/с.",
    ),
    b(
      "Thermal P = 6.0 × 10⁷ W = 60 MW.",
      "Тепловая P = 6,0 × 10⁷ Вт = 60 МВт.",
    ),
    b(
      "Electrical P = 0.40 × 60 = 24 MW.",
      "Электрическая P = 0,40 × 60 = 24 МВт.",
    ),
    b(
      "The remaining 36 MW is not converted into useful electrical output in this model.",
      "Остальные 36 МВт в этой модели не превращаются в полезную электрическую мощность.",
    ),
  ),
  q(
    "fis-4",
    "fission",
    "A(iii)",
    "challenge",
    b(
      "A chain diagram shows three neutrons released per fission. Someone concludes the event count must triple every generation. Evaluate.",
      "Схема показывает три нейтрона на деление. Ученик заключает, что число делений обязано утраиваться каждое поколение. Оцени.",
    ),
    b(
      "Emitted is not the same as causing a new event.",
      "«Испущен» не означает «вызвал новое деление».",
    ),
    b(
      "Some neutrons escape or are absorbed without causing fission.",
      "Часть нейтронов уходит или поглощается без деления.",
    ),
    b(
      "The next generation depends on the average number that successfully trigger further fissions.",
      "Следующее поколение определяется средним числом успешных новых делений.",
    ),
    b(
      "Tripling requires all three to cause another event in the simplified model; the diagram alone does not establish that.",
      "Утроение требует, чтобы все три вызвали новое событие в упрощённой модели; рисунок этого не доказывает.",
    ),
  ),
  q(
    "fus-1",
    "fusion",
    "A(i)",
    "foundation",
    b(
      "Define fusion and contrast it with fission.",
      "Дай определение синтеза и укажи его отличия от деления.",
    ),
    b(
      "Contrast the starting nuclei and the direction of the change.",
      "Укажи различия исходных ядер и направления изменения.",
    ),
    b(
      "Fusion joins light nuclei into products containing a heavier nucleus.",
      "Синтез объединяет лёгкие ядра с образованием более тяжёлого ядра.",
    ),
    b(
      "Fission splits a heavy nucleus into smaller nuclei.",
      "Деление расщепляет тяжёлое ядро на меньшие.",
    ),
    b(
      "Both can release nuclear energy; neither is simply a chemical bond change.",
      "Оба могут выделять ядерную энергию; это не просто изменение химических связей.",
    ),
  ),
  q(
    "fus-2",
    "fusion",
    "A(ii)",
    "application",
    b(
      "Complete ²₁H + ³₁H → ⁴₂He + X. Then explain the need for high temperature.",
      "Дополни ²₁H + ³₁H → ⁴₂He + X. Затем объясни высокую температуру.",
    ),
    b(
      "Use both number balances, then charge repulsion.",
      "Используй оба баланса, затем отталкивание зарядов.",
    ),
    b("X = ¹₀n: 5 = 4 + 1 and 2 = 2 + 0.", "X = ¹₀n: 5 = 4 + 1 и 2 = 2 + 0."),
    b(
      "Both initial nuclei are positive and repel.",
      "Оба исходных ядра положительны и отталкиваются.",
    ),
    b(
      "High temperature gives enough kinetic energy for some nuclei to approach closely enough for nuclear interaction.",
      "Высокая температура даёт достаточную кинетическую энергию для тесного сближения части ядер и ядерного взаимодействия.",
    ),
  ),
  q(
    "fus-3",
    "fusion",
    "A(ii)",
    "challenge",
    b(
      "Extension: Δm = 2.0 × 10⁻²⁹ kg per reaction, c = 3.0 × 10⁸ m/s. Calculate energy per reaction and for 1.0 × 10¹⁵ reactions.",
      "Дополнение: Δm = 2,0 × 10⁻²⁹ кг на реакцию, c = 3,0 × 10⁸ м/с. Найди энергию одной и 1,0 × 10¹⁵ реакций.",
    ),
    b(
      "Square c before multiplying by mass defect.",
      "Возведи c в квадрат до умножения на дефект массы.",
    ),
    b("c² = 9.0 × 10¹⁶ m²/s².", "c² = 9,0 × 10¹⁶ м²/с²."),
    b("E = 1.8 × 10⁻¹² J per reaction.", "E = 1,8 × 10⁻¹² Дж на реакцию."),
    b("Total = 1.8 × 10³ J = 1,800 J.", "Всего 1,8 × 10³ Дж = 1800 Дж."),
  ),
  q(
    "fus-4",
    "fusion",
    "A(iii)",
    "challenge",
    b(
      "“Fusion is just fission backwards, so it needs no high temperature and creates no radioactive material.” Evaluate.",
      "«Синтез — просто деление наоборот, поэтому ему не нужна высокая температура и он не создаёт радиоактивных веществ». Оцени.",
    ),
    b(
      "Test each part rather than accepting the slogan.",
      "Проверь каждую часть, а не лозунг целиком.",
    ),
    b(
      "Joining light nuclei differs from splitting a heavy one; charged nuclei must overcome repulsion to get close.",
      "Объединение лёгких ядер отличается от деления тяжёлого; заряженным ядрам нужно сблизиться против отталкивания.",
    ),
    b(
      "Very high temperature and confinement are important for useful fusion rates.",
      "Очень высокая температура и удержание важны для полезной скорости синтеза.",
    ),
    b(
      "D–T uses radioactive tritium and releases neutrons that can activate materials; “no radioactive material” is too absolute.",
      "D–T использует радиоактивный тритий и испускает активирующие материалы нейтроны; «нет радиоактивных веществ» слишком категорично.",
    ),
  ),
];
