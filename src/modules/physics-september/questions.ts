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
      "For alpha, beta-minus and gamma radiation, state the charge and the physical nature (particle or wave).",
      "Для альфа-, бета-минус- и гамма-излучения укажи заряд и физическую природу (частица или волна).",
    ),
    b(
      "Is each type a stream of particles, or an electromagnetic wave?",
      "Подумай: каждый вид — поток частиц или электромагнитная волна?",
    ),
    b("Alpha: a particle (a helium-4 nucleus, two protons and two neutrons); charge +2.", "Альфа: частица — ядро гелия-4 (два протона и два нейтрона); заряд +2."),
    b(
      "Beta-minus: a fast electron emitted from the nucleus when a neutron changes into a proton; charge −1.",
      "Бета-минус: быстрый электрон, который вылетает из ядра, когда нейтрон превращается в протон; заряд −1.",
    ),
    b(
      "Gamma: an electromagnetic wave (photons), not a stream of charged particles; charge 0.",
      "Гамма: электромагнитная волна (поток фотонов), не поток заряженных частиц; заряд 0.",
    ),
  ),
  q(
    "rad-2",
    "radiation",
    "A(ii)",
    "application",
    b(
      "With the source in place, the detector records 780 counts in 60 s. With the source removed, the background gives 90 counts in 30 s. Calculate the net count rate of the source.",
      "С источником детектор регистрирует 780 импульсов за 60 с. Без источника фон даёт 90 импульсов за 30 с. Рассчитай скорость счёта источника без фона.",
    ),
    b(
      "Convert each measurement to counts/s before you subtract the background.",
      "Сначала переведи каждое измерение в имп/с и только потом вычти фон.",
    ),
    b(
      "Total count rate with the source: 780 / 60 = 13 counts/s.",
      "Общая скорость счёта с источником: 780 / 60 = 13 имп/с.",
    ),
    b("Background count rate: 90 / 30 = 3 counts/s.", "Скорость счёта фона: 90 / 30 = 3 имп/с."),
    b("Net count rate: 13 − 3 = 10 counts/s.", "Скорость счёта без фона: 13 − 3 = 10 имп/с."),
  ),
  q(
    "rad-3",
    "radiation",
    "A(ii)",
    "application",
    b(
      "Each absorber is tested on its own. The background-corrected count rate is 400 counts/min with no absorber, 390 counts/min with paper, 380 counts/min with thin aluminium and 95 counts/min with thick lead. Identify the radiation that fits these results best. Explain your answer.",
      "Каждый поглотитель проверяют отдельно. Скорость счёта без фона: 400 имп/мин без поглотителя, 390 имп/мин с бумагой, 380 имп/мин с тонким алюминием и 95 имп/мин с толстым свинцом. Определи излучение, которое лучше всего соответствует результатам. Объясни ответ.",
    ),
    b(
      "Compare how much each absorber reduces the reading. Which one causes the largest drop?",
      "Сравни, на сколько каждый поглотитель уменьшает показания. Какой поглотитель даёт самое большое уменьшение?",
    ),
    b(
      "Gamma fits best: paper reduces the reading by only 10 counts/min, and thin aluminium by only 20 counts/min.",
      "Лучше всего подходит гамма-излучение: бумага снижает показания всего на 10 имп/мин, а тонкий алюминий — на 20 имп/мин.",
    ),
    b(
      "Alpha is excluded: paper stops alpha particles, yet the reading falls only from 400 to 390 counts/min. Beta is unlikely: thick lead would stop nearly all beta particles.",
      "Альфа-излучение исключается: бумага задерживает альфа-частицы, но показание падает лишь с 400 до 390 имп/мин. Бета-излучение маловероятно: толстый свинец задержал бы почти все бета-частицы.",
    ),
    b(
      "Thick lead removes 305 counts/min but leaves 95 counts/min: the radiation penetrates strongly but is not fully stopped. Repeat readings and information about the energy would make the conclusion more reliable.",
      "Толстый свинец уменьшает показания на 305 имп/мин, но остаётся 95 имп/мин: излучение сильно проникает, но ослабляется не полностью. Повторные измерения и данные об энергии сделали бы вывод надёжнее.",
    ),
  ),
  q(
    "rad-4",
    "radiation",
    "A(iii)",
    "challenge",
    b(
      "A source is labelled 2000 Bq. The detector gives a net count rate of 100 counts/s for this source. A student claims that this disproves the label. Evaluate the claim.",
      "Источник помечен как 2000 Бк. Детектор даёт скорость счёта без фона 100 имп/с для этого источника. Ученик считает, что это опровергает маркировку. Оцени это утверждение.",
    ),
    b(
      "Does a detector register every decay?",
      "Регистрирует ли детектор каждый распад?",
    ),
    b(
      "The claim is not valid. An activity of 2000 Bq means, on average, 2000 decays per second in the source, whether or not the detector registers them.",
      "Утверждение неверно. Активность 2000 Бк означает в среднем 2000 распадов в секунду в источнике, независимо от того, регистрирует ли их детектор.",
    ),
    b(
      "The student compares two different quantities: a count rate (100 counts/s) and an activity (2000 Bq). Only some emissions reach the detector and are registered, so the count rate is usually lower than the activity.",
      "Ученик сравнивает разные величины: скорость счёта (100 имп/с) и активность (2000 Бк). Лишь часть излучения попадает в детектор и регистрируется, поэтому скорость счёта обычно меньше активности.",
    ),
    b(
      "Example of a simple model: each decay gives one emission. In this model, the detector registers 100 / 2000 = 5% of the emissions. Once registration is taken into account, the readings do not conflict with the activity.",
      "Пример простой модели: каждый распад даёт одно испускание. В этой модели детектор регистрирует 100 / 2000 = 5 % испусканий. С учётом регистрации показания не противоречат активности.",
    ),
  ),
  q(
    "eq-1",
    "nuclear-equations",
    "A(ii)",
    "foundation",
    b(
      "Complete the equation ²¹⁰₈₄Po → X + ⁴₂He. Calculate the nucleon number A, the charge number Z and the neutron number N of X.",
      "Дополни уравнение ²¹⁰₈₄Po → X + ⁴₂He. Вычисли массовое число (nucleon number) A, зарядовое число (charge number) Z и число нейтронов (neutron number) N для X.",
    ),
    b(
      "Balance upper and lower numbers separately.",
      "Уравняй верхние и нижние числа отдельно.",
    ),
    b("A = 210 − 4 = 206.", "A = 210 − 4 = 206."),
    b("Z = 84 − 2 = 82; X = ²⁰⁶₈₂Pb.", "Z = 84 − 2 = 82; X = ²⁰⁶₈₂Pb."),
    b("Neutron number: N = A − Z = 206 − 82 = 124.", "Число нейтронов: N = A − Z = 206 − 82 = 124."),
  ),
  q(
    "eq-2",
    "nuclear-equations",
    "A(i)",
    "application",
    b(
      "Write the equation for the beta-minus decay of ³²₁₅P. Explain why A does not change.",
      "Запиши уравнение бета-минус-распада (beta-minus decay) ³²₁₅P. Объясни, почему A не меняется.",
    ),
    b(
      "Which particle is emitted? Does it contain any nucleons?",
      "Подумай, какая частица испускается. Есть ли у неё нуклоны?",
    ),
    b(
      "³²₁₅P → ³²₁₆S + ⁰₋₁e (+ electron antineutrino).",
      "³²₁₅P → ³²₁₆S + ⁰₋₁e (+ электронное антинейтрино).",
    ),
    b("Charge on the left is 15. On the right, 16 + (−1) = 15, so charge is conserved.", "Заряд слева равен 15. Справа 16 + (−1) = 15, значит, заряд сохраняется."),
    b(
      "One neutron becomes a proton, which is still a nucleon. The electron is not a nucleon, so A stays 32.",
      "Один нейтрон становится протоном, а протон — тоже нуклон. Электрон — не нуклон, поэтому A остаётся 32.",
    ),
  ),
  q(
    "eq-3",
    "nuclear-equations",
    "A(ii)",
    "challenge",
    b(
      "A parent nucleus (A = 238, Z = 92) goes through two alpha decays and two beta-minus decays. Calculate its final A, Z and neutron number N.",
      "Материнское ядро (parent nucleus) имеет A = 238 и Z = 92. Оно претерпевает два альфа-распада (alpha decay) и два бета-минус-распада. Вычисли конечные A, Z и число нейтронов N.",
    ),
    b(
      "Add up the changes to A and to Z separately.",
      "Сложи отдельно изменения A и Z.",
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
      "A student writes ¹⁴₆C → ¹⁴₅B + ⁰₋₁e and says charge is conserved because a negative particle leaves. Identify and correct the error.",
      "Ученик пишет ¹⁴₆C → ¹⁴₅B + ⁰₋₁e и утверждает, что заряд сохраняется, так как вылетает отрицательная частица. Найди и исправь ошибку.",
    ),
    b(
      "Calculate the lower-number total on the right.",
      "Вычисли сумму нижних чисел справа.",
    ),
    b(
      "The right side gives 5 + (−1) = 4, but the left side has 6.",
      "Справа получается 5 + (−1) = 4, а слева стоит 6.",
    ),
    b(
      "The daughter must have Z = 7, because 7 + (−1) = 6.",
      "Дочернее ядро (daughter nucleus) должно иметь Z = 7, потому что 7 + (−1) = 6.",
    ),
    b(
      "Correct equation: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (+ electron antineutrino). A stays 14 because a neutron becomes a proton.",
      "Правильное уравнение: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (+ электронное антинейтрино). A остаётся 14, потому что нейтрон превращается в протон.",
    ),
  ),
  q(
    "half-1",
    "half-life",
    "A(ii)",
    "foundation",
    b(
      "The half-life (T½) is 4 days and the initial activity is 640 Bq. Calculate the activity and the percentage of the original nuclei that remain after 12 days.",
      "Период полураспада (half-life) T½ — 4 дня. Начальная активность — 640 Бк. Рассчитай активность и процент исходных ядер, которые останутся через 12 дней.",
    ),
    b("Divide the time by T½ to find how many half-lives have elapsed.", "Раздели время на T½, чтобы узнать, сколько периодов полураспада прошло."),
    b("n = 12 / 4 = 3.", "n = 12 / 4 = 3."),
    b("Activity after 3 half-lives: 640 → 320 → 160 → 80 Bq (640 ÷ 2³ = 80 Bq).", "Активность через 3 периода: 640 → 320 → 160 → 80 Бк (640 ÷ 2³ = 80 Бк)."),
    b("Fraction remaining = 80 Bq ÷ 640 Bq = 1/8 = 12.5%. So 87.5% of the nuclei have decayed (100% − 12.5%).", "Доля оставшихся ядер = 80 Бк ÷ 640 Бк = 1/8 = 12,5 %. Значит, распалось 87,5 % ядер (100 % − 12,5 %)."),
  ),
  q(
    "half-2",
    "half-life",
    "A(i)",
    "application",
    b(
      "Total count rates at 0, 5, 10 and 15 min are 210, 110, 60 and 35 counts/min. Background is 10 counts/min. Determine T½ and predict the total count rate at 20 min. Explain why the total count rate never reaches zero.",
      "Полная скорость счёта (count rate) в моменты 0, 5, 10 и 15 мин: 210, 110, 60 и 35 имп/мин. Фон (background) — 10 имп/мин. Определи T½ и предскажи полную скорость счёта через 20 мин. Объясни, почему полная скорость счёта не падает до нуля.",
    ),
    b(
      "Which part of the total count rate stays the same at every time?",
      "Какая часть полной скорости счёта не меняется со временем?",
    ),
    b(
      "Net count rate is the total count rate minus background. At 0 min: 210 − 10 = 200 counts/min. At 5, 10 and 15 min: 100, 50 and 25 counts/min.",
      "Чистая скорость счёта = полная − фон. В 0 мин: 210 − 10 = 200 имп/мин. В 5, 10 и 15 мин: 100, 50 и 25 имп/мин.",
    ),
    b(
      "The net count rate halves every 5 min: 200 → 100 → 50 → 25 counts/min. So T½ = 5 min.",
      "Чистая скорость счёта уменьшается вдвое каждые 5 мин: 200 → 100 → 50 → 25 имп/мин. Значит, T½ = 5 мин.",
    ),
    b(
      "At 20 min the net count rate is 25 ÷ 2 = 12.5 counts/min. The total is 12.5 + 10 = 22.5 counts/min. The background stays at 10 counts/min, so the total never falls to 0.",
      "Через 20 мин чистая скорость счёта: 25 ÷ 2 = 12,5 имп/мин. Полная скорость счёта: 12,5 + 10 = 22,5 имп/мин. Фон не уменьшается, поэтому полная скорость счёта не падает до нуля.",
    ),
  ),
  q(
    "half-3",
    "half-life",
    "A(ii)",
    "challenge",
    b(
      "A source has an initial activity of 1600 Bq and a half-life of 3 h. After how many complete half-lives is its activity first strictly below 100 Bq? State the time.",
      "Источник имеет начальную активность 1600 Бк и период полураспада 3 ч. После скольких полных периодов его активность впервые станет строго меньше 100 Бк? Укажи время.",
    ),
    b("Check the activity after each complete half-life, one by one.", "Проверяй активность по очереди после каждого полного периода полураспада."),
    b(
      "After 4 half-lives (12 h): 1600 → 800 → 400 → 200 → 100 Bq.",
      "Через 4 периода (12 ч): 1600 → 800 → 400 → 200 → 100 Бк.",
    ),
    b(
      "After 5 half-lives (15 h): 100 → 50 Bq. The first value strictly below 100 Bq is 50 Bq.",
      "Через 5 периодов (15 ч): 100 → 50 Бк. Первое значение строго меньше 100 Бк — это 50 Бк.",
    ),
    b("Time = 5 half-lives × 3 h = 15 h.", "Время = 5 периодов × 3 ч = 15 ч."),
  ),
  q(
    "half-4",
    "half-life",
    "A(iii)",
    "challenge",
    b(
      "A computer simulation starts with 20 nuclei. After one half-life, 13 nuclei remain. A student says the model is wrong because exactly 10 nuclei must remain. Evaluate the claim.",
      "Компьютерная симуляция начинается с 20 ядер. Через один период полураспада остаётся 13 ядер. Ученик считает, что модель неверна: должно остаться ровно 10 ядер. Оцени это утверждение.",
    ),
    b(
      "Ask whether the model predicts an exact count or an average.",
      "Спроси себя: модель предсказывает точное число или среднее?",
    ),
    b(
      "Each nucleus decays at a random moment, so the number left after one half-life is not fixed in advance.",
      "Каждое ядро распадается в случайный момент, поэтому число ядер, оставшихся через один период полураспада, заранее не известно.",
    ),
    b(
      "With 20 nuclei, 13 rather than the expected 10 is within normal random fluctuation, so the claim is not supported.",
      "При 20 ядрах результат 13 вместо ожидаемых 10 укладывается в обычные случайные колебания, поэтому утверждение не подтверждено.",
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
      "Ask what is left on the object after the source is removed.",
      "Подумай, что останется на объекте после удаления источника.",
    ),
    b(
      "Irradiation means radiation from a source acts on an object.",
      "Облучение — действие излучения источника на объект.",
    ),
    b(
      "Contamination means radioactive material that should not be on or inside an object.",
      "Загрязнение — радиоактивное вещество, которое не должно быть на объекте или внутри него.",
    ),
  ),
  q(
    "cont-2",
    "contamination",
    "A(ii)",
    "application",
    b(
      "A worker walks past a sealed gamma source without touching it. Another gets radioactive powder on a glove. Classify each event and explain what remains after leaving.",
      "Работник проходит мимо герметичного гамма-источника, не касаясь его. На перчатку другого работника попал радиоактивный порошок. Классифицируй каждое событие и объясни, что остаётся после ухода.",
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
      "Leaving the first source reduces or ends its exposure; the glove carries radioactive powder away and may transfer material.",
      "Уход от первого источника снижает или прекращает воздействие; перчатка уносит радиоактивный порошок и может переносить вещество.",
    ),
  ),
  q(
    "cont-3",
    "contamination",
    "A(ii)",
    "application",
    b(
      "Explain why reducing time, increasing distance and choosing shielding can reduce external radiation dose.",
      "Объясни, почему меньшее время, большее расстояние и подходящий экран могут уменьшать внешнюю дозу.",
    ),
    b("Give a mechanism for each measure.", "Для каждой меры дай механизм."),
    b(
      "Less time means fewer interactions accumulate at the same dose rate.",
      "За меньшее время при той же мощности дозы (dose rate) накапливается меньше взаимодействий.",
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
      "«Альфа не проходит кожу, значит проглатывать альфа-излучатель безопасно». Оцени аргумент.",
    ),
    b("The location of the source changes.", "Меняется положение источника."),
    b(
      "Skin protection applies to an external source, not one inside the body.",
      "Защита кожей относится к внешнему, а не внутреннему источнику.",
    ),
    b(
      "Internal alpha emission can cause dense ionisation directly beside living cells.",
      "Внутреннее альфа-излучение может вызывать плотную ионизацию рядом с живыми клетками.",
    ),
    b(
      "The conclusion is unsupported; risk depends on dose, distribution and residence time, not penetration alone.",
      "Вывод не обоснован: риск зависит от дозы, распределения и времени пребывания (residence time), а не только проникновения.",
    ),
  ),
  q(
    "bg-1",
    "background",
    "A(i)",
    "foundation",
    b(
      "State two natural sources of background radiation. Explain one reason why its level varies from place to place.",
      "Назови два природных источника радиационного фона (background radiation). Объясни одну причину, почему его уровень меняется от места к месту.",
    ),
    b(
      "Think about radiation from space and from the ground.",
      "Подумай об излучении из космоса и из земли.",
    ),
    b("Cosmic radiation.", "Космическое излучение."),
    b(
      "Radioactive rocks and soil, or radon gas.",
      "Радиоактивные горные породы и почва или газ радон.",
    ),
    b(
      "For example, higher altitude means less atmospheric shielding against cosmic radiation.",
      "Например, на большей высоте над головой меньше атмосферы, поэтому защита от космического излучения слабее.",
    ),
  ),
  q(
    "bg-2",
    "background",
    "A(ii)",
    "application",
    b(
      "In a practice question, the background gives 240 counts in 4 min. With a source present, the detector records 1560 counts in 2 min. Calculate the net count rate in counts/min and in counts/s.",
      "В учебной задаче фон даёт 240 импульсов за 4 мин. С источником прибор регистрирует 1560 импульсов за 2 мин. Вычисли чистую скорость счёта в импульсах в минуту и в импульсах в секунду.",
    ),
    b("Convert both counts to rates before subtracting.", "Перед вычитанием переведи оба числа импульсов в скорости счёта."),
    b(
      "Background rate = 240 / 4 = 60 counts/min; total count rate = 1560 / 2 = 780 counts/min.",
      "Скорость фона = 240 / 4 = 60 импульсов в минуту; полная скорость счёта = 1560 / 2 = 780 импульсов в минуту.",
    ),
    b("Net rate = 780 − 60 = 720 counts/min.", "Чистая скорость = 780 − 60 = 720 импульсов в минуту."),
    b("720 counts/min ÷ 60 (seconds per minute) = 12 counts/s.", "720 импульсов в минуту ÷ 60 (секунд в минуте) = 12 импульсов в секунду."),
  ),
  q(
    "bg-3",
    "background",
    "A(ii)",
    "application",
    b(
      "The dose rate is 0.8 μSv/h for 15 h. Calculate the dose in μSv and in mSv.",
      "Мощность дозы 0,8 мкЗв/ч сохраняется в течение 15 ч. Вычисли дозу в мкЗв и в мЗв.",
    ),
    b("Multiply by time, then convert.", "Умножь на время и переведи единицы."),
    b("Dose = dose rate × time = 0.8 μSv/h × 15 h = 12 μSv.", "Доза = мощность дозы × время = 0,8 мкЗв/ч × 15 ч = 12 мкЗв."),
    b("12 μSv ÷ 1000 = 0.012 mSv, because 1 mSv = 1000 μSv.", "12 мкЗв ÷ 1000 = 0,012 мЗв, потому что 1 мЗв = 1000 мкЗв."),
  ),
  q(
    "bg-4",
    "background",
    "A(iii)",
    "challenge",
    b(
      "Suppose the count in one minute rises from 24 to 27 when a rock is placed near the detector. Is this enough to show that the rock adds a signal? Explain, and suggest a better comparison.",
      "Представь, что число импульсов за минуту выросло с 24 до 27, когда рядом с детектором положили камень. Достаточно ли этого, чтобы показать, что камень добавляет сигнал? Объясни и предложи лучшее сравнение.",
    ),
    b(
      "Consider random fluctuations and measurement conditions.",
      "Учти случайные колебания и условия измерения.",
    ),
    b(
      "A difference of 3 counts (27 − 24) between single one-minute readings can be caused by random fluctuations.",
      "Разница в 3 импульса (27 − 24) между одиночными измерениями за минуту может быть вызвана случайными колебаниями.",
    ),
    b(
      "Repeat the measurements with and without the rock and average them, or count for longer.",
      "Повтори измерения с камнем и без него и усредни их или измеряй дольше.",
    ),
    b(
      "Keep the position and settings fixed. Compare the background-corrected rates with their spread before drawing a firm conclusion.",
      "Сохраняй положение детектора и его настройки. Сравни скорости за вычетом фона с их разбросом, прежде чем делать уверенный вывод.",
    ),
  ),
  q(
    "choice-1",
    "half-life-choice",
    "A(i)",
    "foundation",
    b(
      "For equal numbers of nuclei, which sample has greater initial activity: T½ = 2 h or T½ = 10 h? How many times greater?",
      "При одинаковом числе ядер какой образец активнее вначале: T½ = 2 ч или T½ = 10 ч? Во сколько раз?",
    ),
    b(
      "At equal numbers of nuclei (N), activity varies inversely with half-life.",
      "При одинаковом числе ядер (N) активность обратно пропорциональна периоду полураспада.",
    ),
    b(
      "The 2 h sample has greater initial activity.",
      "Образец с периодом 2 ч активнее.",
    ),
    b("Ratio = 10 / 2 = 5, so the 2 h sample is five times as active.", "Отношение 10 / 2 = 5: образец с T½ = 2 ч активнее в пять раз."),
  ),
  q(
    "choice-2",
    "half-life-choice",
    "A(ii)",
    "application",
    b(
      "X and Y each start at 1,200 Bq. X has T½ = 2 h and Y has T½ = 6 h. Calculate both activities after 6 h and the ratio of Y’s activity to X’s at that time.",
      "У обоих образцов начальная активность 1200 Бк. У X T½ = 2 ч, у Y T½ = 6 ч. Вычисли обе активности через 6 ч и отношение активности Y к активности X в тот же момент.",
    ),
    b(
      "Equal initial activity does not imply equal later activity.",
      "Одинаковая начальная активность не означает одинаковой активности позже.",
    ),
    b("X: 6 h / 2 h = 3 half-lives, so 1200 / 2³ = 1200 / 8 = 150 Bq.", "X: 6 ч / 2 ч = 3 периода полураспада, значит 1200 / 2³ = 1200 / 8 = 150 Бк."),
    b("Y: 6 h / 6 h = 1 T½, so 1200 / 2 = 600 Bq. Ratio Y : X = 600 / 150 = 4.", "Y: 6 ч / 6 ч = 1 период (T½), значит 1200 / 2 = 600 Бк. Отношение Y : X = 600 / 150 = 4."),
    b("Y:X = 600:150 = 4:1.", "Y:X = 600:150 = 4:1."),
  ),
  q(
    "choice-3",
    "half-life-choice",
    "A(ii)",
    "application",
    b(
      "An industrial gauge must operate for months without frequent replacement. Explain why a 10 s source is unsuitable and why a long half-life alone does not guarantee suitability.",
      "Промышленный датчик должен месяцами работать без частой замены. Объясни, почему источник с периодом полураспада 10 с не подходит и почему длинный период полураспада сам по себе не гарантирует пригодности.",
    ),
    b(
      "Combine lifetime with radiation properties.",
      "Сочетай срок работы со свойствами излучения.",
    ),
    b(
      "A 10 s source loses almost all its activity within about one minute: 60 s / 10 s = 6 half-lives.",
      "Источник с периодом 10 с теряет почти всю активность примерно за минуту: 60 с / 10 с = 6 периодов полураспада.",
    ),
    b(
      "A longer T½ gives a more stable working signal over the required time.",
      "Больший период (T½) даёт более стабильный сигнал в течение нужного времени.",
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
      "«Изотоп L имеет период полураспада 1000 лет, поэтому он безопаснее изотопа S с периодом полураспада 1 ч». Оцени, не предполагая равной массы или равной активности.",
    ),
    b("What is missing from the comparison?", "Чего не хватает для сравнения?"),
    b(
      "Half-life alone does not determine activity without the number of nuclei.",
      "Одного периода полураспада недостаточно, чтобы найти активность: нужно знать число ядер.",
    ),
    b(
      "Radiation type and energy, the route into the body, the dose and the duration all matter.",
      "Важны вид и энергия излучения, путь попадания в организм, доза и длительность воздействия.",
    ),
    b(
      "L may persist longer and S may decay away faster, so no universal safety ranking follows from half-lives alone.",
      "L может сохраняться дольше, а S быстрее распадается, поэтому по одним только периодам полураспада нельзя однозначно сказать, какой изотоп безопаснее.",
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
