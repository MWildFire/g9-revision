import type { Exercise, Section } from './content';

// Bounded authored diagnostics; independent final review remains pending.
export const preparationPractice: Record<string, Exercise[]> = {
  "p-energy": [
    {
      "id": "spring-energy-diagnostic",
      "prompt": {
        "en": "An ideal spring obeys F = kx with k = 200 N/m. Its extension is 3.0 cm. Calculate the applied force and stored energy using the force–extension graph. Predict the energy at 6.0 cm if both extensions remain proportional. State the model limit.",
        "ru": "Идеальная пружина подчиняется F = kx, k = 200 Н/м. Удлинение 3,0 см. Найди силу и запасённую энергию по графику силы от удлинения. Найди энергию при 6,0 см, если оба состояния в пределах пропорциональности. Укажи границы модели."
      },
      "answer": {
        "en": "x = 0.030 m; F = 6.0 N; E = area = ½Fx = 0.090 J. At 0.060 m, E = 0.360 J, fourfold. F = kx and the triangular-area expression require the proportional spring model; permanent deformation concerns a distinct elastic-limit question.",
        "ru": "x = 0,030 м; F = 6,0 Н; E = ½Fx = 0,090 Дж. При 0,060 м E = 0,360 Дж, в 4 раза больше. Линейная модель и треугольная площадь требуют пропорциональности; предел упругости — отдельное условие обратимости."
      },
      "marks": 6,
      "criterion": "A"
    }
  ],
  "p-matter": [
    {
      "id": "gas-controls-diagnostic",
      "prompt": {
        "en": "A fixed amount of approximately ideal gas has absolute pressure 100 kPa and volume 0.50 L. At constant temperature it is compressed to 0.25 L. Find the final pressure and explain wall collisions. Separately, the original gas in a rigid sealed container is heated from 300 K to 450 K. Find pressure. Explain why temperature alone cannot determine pressure if the piston can move.",
        "ru": "Неизменное количество приближённо идеального газа имеет абсолютное давление 100 кПа и объём 0,50 л. При постоянной температуре объём уменьшают до 0,25 л. Найди давление и объясни столкновения со стенками. В отдельном опыте исходный газ в жёстком закрытом сосуде нагревают с 300 К до 450 К. Найди давление. Почему при подвижном поршне одной температуры недостаточно?"
      },
      "answer": {
        "en": "Isothermal: p2 = 100 × 0.50 / 0.25 = 200 kPa. Molecular speed statistics at fixed temperature do not increase; more frequent wall impacts per area produce greater pressure. Rigid fixed amount: p2 = 100 × 450 / 300 = 150 kPa; mean kinetic energy rises. A movable piston changes volume, so temperature alone is insufficient. Use absolute pressure and Kelvin.",
        "ru": "Изотермически: p2 = 200 кПа; при неизменной температуре статистика скоростей не возрастает, удары о стенки учащаются. В жёстком сосуде: p2 = 150 кПа; растёт средняя кинетическая энергия. При подвижном поршне меняется объём, поэтому одной температуры недостаточно. Давление абсолютное, температура в К."
      },
      "marks": 8,
      "criterion": "A"
    }
  ],
  "p-electric": [
    {
      "id": "electron-transfer-diagnostic",
      "prompt": {
        "en": "An initially neutral isolated metal sphere loses 5.0 × 10^12 electrons. Use e = 1.6 × 10^-19 C to calculate its final charge and explain which particles moved. An initially neutral receiver gains those electrons; find its charge and the combined change.",
        "ru": "Изначально нейтральный изолированный металлический шар теряет 5,0 × 10^12 электронов. При e = 1,6 × 10^-19 Кл найди заряд шара и объясни, какие частицы переместились. Изначально нейтральный приёмник получает эти электроны. Найди его заряд и изменение общего заряда."
      },
      "answer": {
        "en": "Sphere: +8.0 × 10^-7 C; receiver: −8.0 × 10^-7 C; combined net change 0. Electron transfer leaves an electron deficit; protons need not move and charge is not created.",
        "ru": "Шар: +8,0 × 10^-7 Кл; приёмник: −8,0 × 10^-7 Кл; суммарное изменение 0. Перенос электронов оставляет их недостаток; протоны для этого не перемещаются, заряд не создаётся."
      },
      "marks": 5,
      "criterion": "A"
    }
  ],
  "b-cells": [
    {
      "id": "microscope-method-diagnostic",
      "prompt": {
        "en": "Explain a wet mount sequence and how to avoid bubbles. State three requirements for a biological drawing, including size information. Choose light microscopy for living-cell movement, TEM for internal fine structure and SEM for surface detail, explaining each choice.",
        "ru": "Объясни последовательность приготовления временного препарата и как уменьшить число пузырьков. Назови три требования к биологическому рисунку, включая сведения о размере. Выбери световой микроскоп для движения живых клеток, TEM для тонкого внутреннего строения и SEM для поверхности и объясни выбор."
      },
      "answer": {
        "en": "Place a thin specimen in liquid on a slide; lower the coverslip at an angle to reduce trapped air. Locate and focus using the lowest-magnification objective first. A suitable stain increases contrast but can kill or alter cells. Draw observed structures only with clean outlines, labels and a title, plus a scale bar or calculated drawing magnification. Resizing changes drawing magnification. Light microscopy can show living movement; conventional electron preparation/vacuum prevents living-cell observation. TEM transmits electrons through a thin section for internal detail; SEM shows surface detail.",
        "ru": "Помести тонкий образец в жидкость на предметном стекле; опускай покровное стекло под углом, уменьшая захват воздуха. Начни поиск и фокусировку с объектива наименьшего увеличения. Подходящий краситель повышает контраст, но может убить клетки или изменить структуры. Рисуй лишь наблюдаемое, чёткими контурами, с подписями и заголовком; добавь масштабную линейку или вычисленное увеличение рисунка. При изменении размера рисунка его увеличение меняется. Световой микроскоп позволяет наблюдать движение живых клеток; обычная подготовка электронного препарата и вакуум исключают такое наблюдение. TEM показывает внутренние детали тонкого среза, SEM — поверхность."
      },
      "marks": 8,
      "criterion": "A"
    }
  ],
  "b-nutrition": [
    {
      "id": "digestive-route-diagnostic",
      "prompt": {
        "en": "Trace food from mouth to anus in the correct order and give a role of each organ. Explain why food does not pass through the liver or pancreas, and distinguish digestion from absorption.",
        "ru": "Проследи путь пищи от рта до ануса в правильном порядке и укажи роль каждого органа. Почему пища не проходит через печень и поджелудочную железу? Отличи переваривание от всасывания."
      },
      "answer": {
        "en": "Mouth: ingestion, chewing and saliva begin digestion → oesophagus: peristalsis moves food → stomach: mixing, acid and pepsin begin protein digestion → small intestine: further digestion and nutrient absorption → large intestine: absorbs remaining water and ions → rectum: stores faeces → anus: egestion. Liver makes bile and pancreas supplies digestive secretions through ducts to the small intestine; food does not enter them. Digestion breaks large molecules into smaller products; absorption transfers products across the gut epithelium.",
        "ru": "Рот: приём, пережёвывание пищи и начало переваривания со слюной → пищевод: перемещение перистальтикой → желудок: перемешивание, кислота и начало переваривания белков пепсином → тонкая кишка: дальнейшее переваривание и всасывание питательных веществ → толстая кишка: всасывание оставшейся воды и ионов → прямая кишка: накопление кала → анус: выведение непереваренных остатков. Печень образует желчь, поджелудочная железа подаёт пищеварительные соки по протокам в тонкую кишку; пища внутрь этих органов не проходит. Переваривание расщепляет крупные молекулы, всасывание переносит продукты через эпителий кишечника."
      },
      "marks": 8,
      "criterion": "A"
    }
  ],
  "b-transport": [
    {
      "id": "vessel-comparison-diagnostic",
      "prompt": {
        "en": "Compare artery, vein and capillary: direction, wall structure, valves and function. Explain why oxygen content alone cannot identify an artery.",
        "ru": "Сравни артерию, вену и капилляр: направление движения крови, стенки, клапаны и функция. Почему одного содержания кислорода недостаточно, чтобы узнать артерию?"
      },
      "answer": {
        "en": "Arteries carry blood away from the heart; thick muscular elastic walls withstand and smooth high pressure. Veins return blood toward the heart under lower pressure, with thinner walls and less muscle/elastic tissue; many have valves preventing backflow. Capillaries exchange substances with tissues through walls one cell thick, shortening the diffusion path; they have no valves. Artery/vein names describe direction, not oxygenation: the pulmonary artery carries oxygen-poor blood to the lungs.",
        "ru": "Артерии несут кровь от сердца; толстые мышечные и эластичные стенки выдерживают высокое давление и сглаживают его пульсации. Вены возвращают кровь к сердцу при меньшем давлении; их стенки тоньше, мышц и эластичных волокон меньше; во многих венах клапаны препятствуют обратному току. Капилляры обмениваются веществами с тканями через стенку в один слой клеток, сокращающую путь диффузии; клапанов в них нет. Название сосуда определяется направлением, а не насыщением кислородом: лёгочная артерия несёт к лёгким бедную кислородом кровь."
      },
      "marks": 7,
      "criterion": "A"
    }
  ],
  "b-earlier": [
    {
      "id": "seed-dispersal-diagnostic",
      "prompt": {
        "en": "Explain how dandelion/maple, burdock, fleshy fruit and coconut are adapted for seed dispersal. Distinguish this process from pollination and explain one benefit of dispersal.",
        "ru": "Объясни приспособления одуванчика/клёна, репейника, мясистого плода и кокоса к распространению семян. Отличи этот процесс от опыления и назови одну пользу распространения."
      },
      "answer": {
        "en": "Light fruits with hairs or wings are carried by wind; hooked burdock fruits attach to animal fur. Fleshy fruits attract animals that eat them, and surviving seeds may pass in faeces. Coconuts float and can travel by water. These structures move seeds/fruits away from the parent, reducing competition for light, water and minerals. Pollination instead transfers pollen from anther to stigma before fertilisation; seed dispersal moves the resulting seeds later.",
        "ru": "Лёгкие плоды с волосками или крыльями переносятся ветром; крючки плодов репейника цепляются за шерсть. Мясистые плоды привлекают животных, которые их съедают, а выжившие семена могут выйти с калом. Кокосы плавают и переносятся водой. Эти приспособления уносят семена/плоды от родителя, уменьшая конкуренцию за свет, воду и минеральные вещества. При опылении пыльца перемещается с пыльника на рыльце до оплодотворения; семена распространяются уже после своего образования."
      },
      "marks": 6,
      "criterion": "A"
    }
  ]
};

export const practiceRecord = preparationPractice;
export const preparationTeaching: Record<string, Section[]> = {
  "p-energy": [
    {
      "title": {
        "en": "Spring graph: force, energy and model limit",
        "ru": "График пружины: сила, энергия и границы модели"
      },
      "body": {
        "en": "A spring stores energy when work is done to deform it. In the proportional model, the magnitude of the applied force increases with extension: F = kx. Here k is the spring constant in N/m and x is extension from the unstretched position in metres. The restoring force acts in the opposite direction. The applied force is not constant while the spring is stretched, so multiplying its final value by the full extension would overestimate the work.\n\nOn a force–extension graph, the straight line from the origin encloses a triangle. Its area is the work transferred to the spring: E = ½Fx = ½kx², in joules. For k = 200 N/m and x = 0.030 m, F = 6.0 N and E = 0.090 J. At x = 0.060 m, the energy is 0.360 J: doubling extension quadruples energy because x is squared.\n\nThis calculation assumes both extensions remain within the proportional range and neglects energy transferred to heating or other stores. Beyond that range the graph need not be straight, so the triangular expression cannot be assumed. The elastic limit concerns recovery of the original shape and is a separate condition from proportionality.",
        "ru": "При деформации пружины над ней совершают работу, и она запасает энергию. В пропорциональной модели модуль приложенной силы растёт с удлинением: F = kx. Здесь k — жёсткость в Н/м, а x — удлинение относительно недеформированного состояния в метрах. Сила упругости направлена противоположно удлинению. При растяжении приложенная сила меняется, поэтому произведение её конечного значения на всё удлинение завысило бы работу.\n\nПод прямой на графике силы от удлинения находится треугольник. Его площадь равна работе, переданной пружине: E = ½Fx = ½kx², в джоулях. При k = 200 Н/м и x = 0,030 м получаем F = 6,0 Н и E = 0,090 Дж. При x = 0,060 м энергия равна 0,360 Дж. Удвоение удлинения увеличивает энергию в 4 раза, поскольку удлинение входит в квадрате.\n\nРасчёт предполагает, что оба удлинения лежат в пределах пропорциональности, а передачей энергии на нагревание и в другие запасы пренебрегают. За этими пределами график может перестать быть прямым, и формулу площади треугольника нельзя применять автоматически. Предел упругости относится к восстановлению исходной формы; это отдельное условие, не совпадающее с пропорциональностью."
      }
    }
  ],
  "p-matter": [
    {
      "title": {
        "en": "Two controlled gas changes",
        "ru": "Два опыта с неизменным количеством газа"
      },
      "body": {
        "en": "Gas pressure is the average force per unit area exerted by particles colliding with a container wall. In the ideal-gas model, particle volume is negligible and collisions are elastic. For a fixed amount of gas, pV/T is constant. Use absolute pressure, not gauge pressure, and temperature in kelvins. Before calculating, identify which variable is controlled.\n\nAt constant temperature, p1V1 = p2V2. Compressing the stated gas from 0.50 L to 0.25 L gives p2 = 100 × 0.50 / 0.25 = 200 kPa. The same volume unit appears in numerator and denominator and cancels. Temperature has not increased, so the molecular speed distribution and mean kinetic energy do not increase. More frequent impacts per unit wall area account for the greater pressure.\n\nIn the separate rigid, sealed container, volume and particle number stay fixed. Therefore p1/T1 = p2/T2: heating from 300 K to 450 K gives p2 = 100 × 450 / 300 = 150 kPa. The increased mean kinetic energy changes the momentum transfers to the walls. A movable piston can change volume instead; without its final volume or another constraint, temperature alone cannot determine final pressure. These relationships describe the stated approximately ideal gas, not every real-gas condition.",
        "ru": "Давление газа — средняя сила на единицу площади стенки, возникающая из-за ударов молекул. В модели идеального газа собственным объёмом молекул пренебрегают, а столкновения считают упругими. Для неизменного количества газа отношение pV/T постоянно. Используй абсолютное давление, а не избыточное, и температуру в кельвинах. Сначала назови величину, которая остаётся неизменной.\n\nПри постоянной температуре p1V1 = p2V2. При сжатии данного газа с 0,50 л до 0,25 л получаем p2 = 100 × 0,50 / 0,25 = 200 кПа. Одинаковые единицы объёма в числителе и знаменателе сокращаются. Температура не выросла, поэтому распределение скоростей и средняя кинетическая энергия молекул не возрастают. Давление увеличивается из-за более частых ударов о единицу площади стенки.\n\nВ отдельном опыте сосуд жёсткий и закрытый: его объём и число молекул постоянны. Тогда p1/T1 = p2/T2. Нагревание с 300 К до 450 К даёт p2 = 100 × 450 / 300 = 150 кПа. Рост средней кинетической энергии меняет передачу импульса стенкам. Подвижный поршень позволяет изменяться объёму; без конечного объёма или другого ограничения одной температуры недостаточно для определения давления. Эти зависимости относятся к заданному приближённо идеальному газу, а не к любым условиям для реального газа."
      }
    }
  ],
  "p-electric": [
    {
      "title": {
        "en": "Electron transfer and charge accounting",
        "ru": "Перенос электронов и баланс заряда"
      },
      "body": {
        "en": "A neutral metal object contains equal total positive and negative charge; neutral does not mean that it contains no charged particles. In the stated transfer model, electrons can move between the metal sphere and a receiver, while positive nuclei remain in the material. Removing negative electrons leaves an electron deficit and a positive net charge. Adding electrons produces an excess and a negative net charge.\n\nCalculate the magnitude first using N × e, where N is the number of transferred electrons and e is the positive magnitude of the elementary charge in coulombs. Here N × e = (5.0 × 10^12) × (1.6 × 10^-19 C) = 8.0 × 10^-7 C. Because the sphere loses electrons, its final charge is +8.0 × 10^-7 C. The initially neutral receiver gains exactly those electrons, so its final charge is −8.0 × 10^-7 C.\n\nThe signs describe deficits and excesses relative to neutrality, not the direction of electron motion. Adding both final charges gives zero, equal to their initial combined charge. The transfer redistributes charge; it does not create charge or require protons to move between the objects. This balance assumes the sphere and receiver together exchange no charge with their surroundings.",
        "ru": "В нейтральном металлическом теле суммарные положительный и отрицательный заряды равны по модулю. Нейтральность не означает отсутствия заряженных частиц. В заданной модели между металлическим шаром и приёмником переходят электроны, а положительные ядра остаются в веществе. После потери отрицательных электронов возникает их недостаток и положительный суммарный заряд. Получение электронов создаёт избыток и отрицательный суммарный заряд.\n\nСначала вычисли модуль по формуле N × e: N — число перешедших электронов, e — положительный модуль элементарного заряда в кулонах. Здесь N × e = (5,0 × 10^12) × (1,6 × 10^-19 Кл) = 8,0 × 10^-7 Кл. Шар теряет электроны, поэтому его конечный заряд равен +8,0 × 10^-7 Кл. Изначально нейтральный приёмник получает ровно эти электроны и приобретает заряд −8,0 × 10^-7 Кл.\n\nЗнаки показывают недостаток или избыток электронов относительно нейтрального состояния, а не направление их движения. Сумма конечных зарядов равна нулю, как и начальный общий заряд. Перенос перераспределяет заряд, не создавая его, и не требует перехода протонов между телами. Такой баланс предполагает, что шар и приёмник вместе не обмениваются зарядом с окружающей средой."
      }
    }
  ],
  "b-cells": [
    {
      "title": {
        "en": "Microscope method: prepare, draw and choose",
        "ru": "Микроскопия: препарат, рисунок и выбор прибора"
      },
      "body": {
        "en": "A wet mount holds a thin specimen in liquid between a slide and coverslip. Place the specimen in the liquid and lower the coverslip at an angle to reduce trapped air bubbles. Start with the lowest-magnification objective to locate and focus the specimen. A suitable stain can make structures easier to distinguish, but it may kill cells or alter their appearance.\n\nA biological drawing records what was actually observed. Use clear outlines, labels and a title rather than adding details remembered from a textbook. Include a scale bar or the calculated magnification of the drawing. Image size and actual size must use the same units. If a drawing is resized, its magnification changes; the microscope objective setting is not automatically the drawing magnification.\n\nChoose the instrument for the evidence needed. A light microscope can show movement in living cells. A transmission electron microscope (TEM) shows internal fine structure through a thin specimen; a scanning electron microscope (SEM) shows surface detail. Conventional electron-microscope preparation and its vacuum prevent observation of living cells. More magnification alone does not improve resolution: unresolved points do not become separate merely by enlarging the image. The existing Cells reference provides the linked diagrams and magnification example.",
        "ru": "Временный препарат содержит тонкий образец в жидкости между предметным и покровным стёклами. Помести образец в жидкость и опускай покровное стекло под углом, чтобы уменьшить захват пузырьков воздуха. Начни поиск и фокусировку с объектива наименьшего увеличения. Подходящий краситель помогает различать структуры, но может убить клетки или изменить их вид.\n\nБиологический рисунок передаёт то, что действительно наблюдалось. Используй чёткие контуры, подписи и заголовок; не добавляй детали по памяти из учебника. Укажи масштабную линейку или вычисленное увеличение рисунка. Размер изображения и реальный размер нужно выразить в одинаковых единицах. При изменении размера рисунка его увеличение меняется; увеличение объектива не становится автоматически увеличением рисунка.\n\nВыбирай прибор по требуемым данным. Световой микроскоп позволяет видеть движение живых клеток. Просвечивающий электронный микроскоп (TEM) показывает тонкое внутреннее строение тонкого образца, сканирующий (SEM) — детали поверхности. Обычная подготовка электронного препарата и вакуум не позволяют наблюдать живые клетки. Одно лишь увеличение не улучшает разрешение: две неразличимые точки не разделятся от растягивания картинки. Схемы и пример вычисления увеличения есть в существующем справочнике «Клетки»."
      }
    }
  ],
  "b-nutrition": [
    {
      "title": {
        "en": "Route and role of each digestive organ",
        "ru": "Путь пищи и роль каждого органа"
      },
      "body": {
        "en": "The alimentary canal is the route food follows, from mouth to anus. In the mouth, chewing breaks food into smaller pieces and saliva begins digestion. The oesophagus transports food by peristalsis: waves of muscle contraction. The stomach mixes food with acid and pepsin, beginning protein digestion before releasing material into the small intestine.\n\nThe small intestine carries out further digestion and absorbs nutrients. Digestion is the breakdown of large food molecules into smaller products; absorption is their transfer across the intestinal epithelium. The two processes are related but are not interchangeable. The large intestine absorbs remaining water and ions. The rectum stores faeces, and the anus is the exit for egestion of undigested material.\n\nThe full sequence is mouth → oesophagus → stomach → small intestine → large intestine → rectum → anus. The liver and pancreas belong to the digestive system, but food does not pass through them. They supply bile and digestive secretions through ducts to the small intestine. A route answer should give both the correct order and an organ function, rather than listing digestive enzymes alone. Use the existing digestion-to-ileum question separately to check molecular products and adaptations for absorption.",
        "ru": "Пищеварительный канал — путь пищи от рта до ануса. Во рту пережёвывание измельчает пищу, а слюна начинает её переваривание. Пищевод перемещает пищу перистальтикой — волнами сокращения мышц. Желудок перемешивает пищу с кислотой и пепсином, начиная переваривание белков, затем выпускает содержимое в тонкую кишку.\n\nВ тонкой кишке продолжается переваривание и всасываются питательные вещества. Переваривание расщепляет крупные молекулы пищи до более мелких продуктов; всасывание переносит продукты через кишечный эпителий. Эти процессы связаны, но не заменяют друг друга. Толстая кишка всасывает оставшуюся воду и ионы. Прямая кишка накапливает кал, а через анус выводятся непереваренные остатки.\n\nПолная последовательность: рот → пищевод → желудок → тонкая кишка → толстая кишка → прямая кишка → анус. Печень и поджелудочная железа входят в пищеварительную систему, но пища через них не проходит. Они подают желчь и пищеварительные соки по протокам в тонкую кишку. В ответе о пути пищи нужны и правильный порядок, и функция каждого органа, а не один перечень ферментов. Продукты расщепления и приспособления к всасыванию отдельно проверяются в существующей задаче digestion-to-ileum."
      }
    }
  ],
  "b-transport": [
    {
      "title": {
        "en": "Compare three vessel types",
        "ru": "Сравни три типа сосудов"
      },
      "body": {
        "en": "Arteries, veins and capillaries are identified by their roles in circulation. Arteries carry blood away from the heart. Their thick walls contain muscle and elastic tissue, allowing them to withstand high pressure and stretch and recoil as blood is pumped. Veins return blood toward the heart under lower pressure. They have thinner walls with less muscle and elastic tissue, and many veins contain valves that reduce backflow.\n\nCapillaries are the exchange vessels between blood and tissues. Their walls are one cell thick, giving substances a short diffusion path. Capillaries have no valves. A useful comparison therefore links each structure to a function: elastic artery walls to pressure, vein valves to maintaining return flow, and thin capillary walls to exchange. Simply saying that all vessels are tubes misses these differences.\n\nDirection, rather than oxygen content, defines artery and vein. For example, the pulmonary artery carries oxygen-poor blood away from the heart to the lungs. Do not infer vessel type from oxygenation alone. The existing heart question checks the two circulations, while the elastic-vessel task models only part of the wall comparison; neither replaces an explicit comparison of all three vessel types.",
        "ru": "Артерии, вены и капилляры различаются ролью в кровообращении. Артерии несут кровь от сердца. Их толстые стенки содержат мышцы и эластичные волокна: они выдерживают высокое давление, растягиваются при выбросе крови и возвращаются к прежней форме. Вены возвращают кровь к сердцу при меньшем давлении. Их стенки тоньше, мышечной и эластичной ткани меньше; во многих венах клапаны уменьшают обратный ток крови.\n\nКапилляры обеспечивают обмен между кровью и тканями. Их стенки состоят из одного слоя клеток, поэтому путь диффузии короткий. Клапанов в капиллярах нет. Полезное сравнение связывает строение с функцией: эластичность артерии — с давлением, клапаны вены — с поддержанием возвратного тока, тонкую стенку капилляра — с обменом. Фраза «все сосуды — трубки» не передаёт этих различий.\n\nАртерию и вену определяют по направлению движения крови, а не по содержанию кислорода. Например, лёгочная артерия несёт бедную кислородом кровь от сердца к лёгким. По одному насыщению кислородом нельзя узнать тип сосуда. Существующая задача о сердце проверяет два круга кровообращения, а модель упругих сосудов — часть свойств стенки; они не заменяют явного сравнения трёх типов сосудов."
      }
    }
  ],
  "b-earlier": [
    {
      "title": {
        "en": "Match dispersal adaptations to mechanisms",
        "ru": "Свяжи приспособления семян со способом переноса"
      },
      "body": {
        "en": "Seed dispersal carries seeds, often enclosed in fruits, away from the parent plant. It can reduce competition between the parent and its offspring for light, water and minerals. To explain an adaptation, name the moving structure, the feature it has and how that feature helps a particular transport mechanism.\n\nWind can carry light fruits with hairs or wings: dandelion hairs increase the area exposed to air, and maple wings help fruits travel through the air. Burdock fruits have hooks that attach to animal fur. Fleshy fruits attract animals that eat them; seeds that survive digestion can leave the animal in faeces at another location. Coconuts float and can be transported by water. These are different ways of moving seeds or fruits, rather than different kinds of pollen transfer.\n\nPollination is the movement of pollen from anther to stigma. Fertilisation later involves fusion of nuclei in an ovule; the ovule then develops into a seed. Dispersal moves that resulting seed away. Keep the moving material and stage clear in your answer: a seed with a wing is evidence about dispersal, not automatically about how its flower was pollinated. The existing Flowers, seeds and germination section connects these stages.",
        "ru": "Распространение семян уносит семена, часто заключённые в плодах, от родительского растения. Это может уменьшать конкуренцию родителя и потомства за свет, воду и минеральные вещества. Чтобы объяснить приспособление, назови переносимую структуру, её особенность и то, как эта особенность помогает конкретному способу переноса.\n\nВетер переносит лёгкие плоды с волосками или крыльями: волоски одуванчика увеличивают площадь взаимодействия с воздухом, а крылья клёна помогают плодам перемещаться по воздуху. Крючки плодов репейника цепляются за шерсть животных. Мясистые плоды привлекают животных, которые их съедают; семена, пережившие пищеварение, могут выйти с калом в другом месте. Кокосы плавают и переносятся водой. Всё это способы перемещения семян или плодов, а не разновидности переноса пыльцы.\n\nОпыление — перенос пыльцы с пыльника на рыльце. Позже при оплодотворении ядра сливаются внутри семязачатка; затем из него развивается семя. Распространение уносит уже образовавшееся семя. В ответе различай материал и этап: крыло у семени или плода свидетельствует о распространении и само по себе не устанавливает способ опыления цветка. Связь этапов объясняется в существующем разделе «Цветок, семя и прорастание»."
      }
    }
  ]
};
export const preparationSourceBindings = {
  "spring-energy-diagnostic": {
    "topic": "p-energy",
    "sources": [
      {
        "language": "en",
        "title": "OpenStax College Physics 2e §16.1",
        "url": "https://openstax.org/books/college-physics-2e/pages/16-1-hookes-law-stress-and-strain-revisited",
        "locator": "Energy in Hooke’s Law of Deformation, equation 16.4 and Figure 16.6; lines 75–86: stored energy and force–extension area."
      },
      {
        "language": "ru",
        "title": "Открытая физика §1.12",
        "url": "https://physics.ru/courses/op25part1/content/chapter1/section/paragraph12/theory.html",
        "locator": "§1.12, lines 18–20 and 29–34: proportional restoring force, N/m, spring validity. Independent RU support covers force/model limits; graph-energy derivation is supported by the EN passage."
      },
      {
        "language": "ru",
        "title": "Открытая физика §1.19",
        "url": "https://physics.ru/courses/op25part1/content/chapter1/section/paragraph19/theory.html",
        "locator": "§1.19, lines 67–76: spring deformation, work of the elastic force and stored interaction energy. The inline energy equation is an image; no formula text is invented from its absence."
      }
    ],
    "reviewStatus": "authored-correction-independent-final-review-pending"
  },
  "gas-controls-diagnostic": {
    "topic": "p-matter",
    "sources": [
      {
        "language": "en",
        "title": "OpenStax College Physics 2e §13.3",
        "url": "https://openstax.org/books/college-physics-2e/pages/13-3-the-ideal-gas-law",
        "locator": "Equation 13.18, lines 41–56; fixed-volume Example 13.6, equations 13.21–13.22, lines 61–97: absolute pressure and Kelvin."
      },
      {
        "language": "en",
        "title": "OpenStax College Physics 2e §13.4",
        "url": "https://openstax.org/books/college-physics-2e/pages/13-4-kinetic-theory-atomic-and-molecular-explanation-of-pressure-and-temperature",
        "locator": "Lines 35–56: wall collisions, PV = NkT and ideal kinetic assumptions, equations 13.42–13.44 and the wall-collision explanation."
      },
      {
        "language": "ru",
        "title": "Открытая физика §3.3",
        "url": "https://physics.ru/courses/op25part1/content/chapter3/section/paragraph3/theory.html",
        "locator": "§3.3, lines 43–56, named isothermal/isochoric processes: fixed amount; T constant gives pV constant; V constant gives p/T constant."
      }
    ],
    "reviewStatus": "authored-correction-independent-final-review-pending"
  },
  "electron-transfer-diagnostic": {
    "topic": "p-electric",
    "sources": [
      {
        "language": "en",
        "title": "OpenStax College Physics 2e §18.2",
        "url": "https://openstax.org/books/college-physics-2e/pages/18-2-conductors-and-insulators",
        "locator": "Charging by Contact, lines 38–41: electron transfer in metals leaves a positive deficit."
      },
      {
        "language": "ru",
        "title": "Открытая физика §1.1",
        "url": "https://physics.ru/courses/op25part2/content/chapter1/section/paragraph1/theory.html",
        "locator": "Lines 23–31: conservation, electron loss/gain, discrete charge; lines 61–63: elementary charge 1.6×10⁻¹⁹ C."
      }
    ],
    "reviewStatus": "authored-correction-independent-final-review-pending"
  },
  "microscope-method-diagnostic": {
    "topic": "b-cells",
    "sources": [],
    "reviewStatus": "authored-correction-independent-final-review-pending",
    "canonicalTeachingPointers": [
      {
        "file": "src/i18n/en/biology.json",
        "jsonPointer": "/cells/sections/microscopes/detailed/light/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/ru/biology.json",
        "jsonPointer": "/cells/sections/microscopes/detailed/light/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/en/biology.json",
        "jsonPointer": "/cells/sections/microscopes/detailed/electron/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/ru/biology.json",
        "jsonPointer": "/cells/sections/microscopes/detailed/electron/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/en/biology.json",
        "jsonPointer": "/cells/sections/microscopes/detailed/preparation/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/ru/biology.json",
        "jsonPointer": "/cells/sections/microscopes/detailed/preparation/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/en/biology.json",
        "jsonPointer": "/cells/sections/microscopes/detailed/drawing/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/ru/biology.json",
        "jsonPointer": "/cells/sections/microscopes/detailed/drawing/rule",
        "availability": "current"
      }
    ]
  },
  "digestive-route-diagnostic": {
    "topic": "b-nutrition",
    "sources": [],
    "reviewStatus": "authored-correction-independent-final-review-pending",
    "canonicalTeachingPointers": [
      {
        "file": "src/i18n/en/biology.json",
        "jsonPointer": "/bodySystems/sections/digestive/detailed/pathway/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/ru/biology.json",
        "jsonPointer": "/bodySystems/sections/digestive/detailed/pathway/rule",
        "availability": "current"
      },
      {
        "file": "src/modules/november/biologyTeaching.ts",
        "export": "biologyTeaching",
        "path": [
          "b-nutrition",
          0,
          "body",
          "en"
        ],
        "availability": "current"
      },
      {
        "file": "src/modules/november/biologyTeaching.ts",
        "export": "biologyTeaching",
        "path": [
          "b-nutrition",
          0,
          "body",
          "ru"
        ],
        "availability": "current"
      }
    ]
  },
  "vessel-comparison-diagnostic": {
    "topic": "b-transport",
    "sources": [],
    "reviewStatus": "authored-correction-independent-final-review-pending",
    "canonicalTeachingPointers": [
      {
        "file": "src/i18n/en/biology.json",
        "jsonPointer": "/bodySystems/sections/circulatory/detailed/vessels/rule",
        "availability": "current"
      },
      {
        "file": "src/i18n/ru/biology.json",
        "jsonPointer": "/bodySystems/sections/circulatory/detailed/vessels/rule",
        "availability": "current"
      },
      {
        "file": "src/modules/november/biologyTeaching.ts",
        "export": "biologyTeaching",
        "path": [
          "b-transport",
          1,
          "body",
          "en"
        ],
        "availability": "current"
      },
      {
        "file": "src/modules/november/biologyTeaching.ts",
        "export": "biologyTeaching",
        "path": [
          "b-transport",
          1,
          "body",
          "ru"
        ],
        "availability": "current"
      }
    ]
  },
  "seed-dispersal-diagnostic": {
    "topic": "b-earlier",
    "sources": [],
    "reviewStatus": "authored-correction-independent-final-review-pending",
    "canonicalTeachingPointers": [
      {
        "file": "src/modules/november/content.ts",
        "export": "supplements",
        "path": [
          "b-earlier",
          1,
          "body",
          "en"
        ],
        "availability": "current"
      },
      {
        "file": "src/modules/november/content.ts",
        "export": "supplements",
        "path": [
          "b-earlier",
          1,
          "body",
          "ru"
        ],
        "availability": "current"
      }
    ]
  }
};
export const preparationSourcePassages = {
  "p-energy": [
    {
      "title": "OpenStax College Physics 2e §16.1",
      "url": "https://openstax.org/books/college-physics-2e/pages/16-1-hookes-law-stress-and-strain-revisited",
      "locator": {
        "en": "Energy in Hooke’s Law of Deformation, equation 16.4 and Figure 16.6; lines 75–86: stored energy and force–extension area.",
        "ru": "§16.1: абзац об энергии деформации, формула 16.4 и рис. 16.6, строки 75–86. Независимый русский источник: §1.12, строки 18–20 и 29–34 (сила, жёсткость и границы модели); §1.19, строки 67–76 (работа и энергия пружины)."
      }
    },
    {
      "title": "Открытая физика §1.12",
      "url": "https://physics.ru/courses/op25part1/content/chapter1/section/paragraph12/theory.html",
      "locator": {
        "en": "§1.12, lines 18–20 and 29–34: proportional restoring force, N/m, spring validity. Independent RU support covers force/model limits; graph-energy derivation is supported by the EN passage.",
        "ru": "§16.1: абзац об энергии деформации, формула 16.4 и рис. 16.6, строки 75–86. Независимый русский источник: §1.12, строки 18–20 и 29–34 (сила, жёсткость и границы модели); §1.19, строки 67–76 (работа и энергия пружины)."
      }
    },
    {
      "title": "Открытая физика §1.19",
      "url": "https://physics.ru/courses/op25part1/content/chapter1/section/paragraph19/theory.html",
      "locator": {
        "en": "§1.19, lines 67–76: spring deformation, work of the elastic force and stored interaction energy. The inline energy equation is an image; no formula text is invented from its absence.",
        "ru": "§16.1: абзац об энергии деформации, формула 16.4 и рис. 16.6, строки 75–86. Независимый русский источник: §1.12, строки 18–20 и 29–34 (сила, жёсткость и границы модели); §1.19, строки 67–76 (работа и энергия пружины)."
      }
    }
  ],
  "p-matter": [
    {
      "title": "OpenStax College Physics 2e §13.3",
      "url": "https://openstax.org/books/college-physics-2e/pages/13-3-the-ideal-gas-law",
      "locator": {
        "en": "Equation 13.18, lines 41–56; fixed-volume Example 13.6, equations 13.21–13.22, lines 61–97: absolute pressure and Kelvin.",
        "ru": "§13.3: формула 13.18 и пример 13.6, строки 41–97 (абсолютное давление, кельвины, постоянный объём); §13.4, строки 35–56 (удары молекул о стенки). Независимый русский источник §3.3, строки 43–56: неизменное количество вещества, изотермический и изохорный процессы."
      }
    },
    {
      "title": "OpenStax College Physics 2e §13.4",
      "url": "https://openstax.org/books/college-physics-2e/pages/13-4-kinetic-theory-atomic-and-molecular-explanation-of-pressure-and-temperature",
      "locator": {
        "en": "Lines 35–56: wall collisions, PV = NkT and ideal kinetic assumptions, equations 13.42–13.44 and the wall-collision explanation.",
        "ru": "§13.3: формула 13.18 и пример 13.6, строки 41–97 (абсолютное давление, кельвины, постоянный объём); §13.4, строки 35–56 (удары молекул о стенки). Независимый русский источник §3.3, строки 43–56: неизменное количество вещества, изотермический и изохорный процессы."
      }
    },
    {
      "title": "Открытая физика §3.3",
      "url": "https://physics.ru/courses/op25part1/content/chapter3/section/paragraph3/theory.html",
      "locator": {
        "en": "§3.3, lines 43–56, named isothermal/isochoric processes: fixed amount; T constant gives pV constant; V constant gives p/T constant.",
        "ru": "§13.3: формула 13.18 и пример 13.6, строки 41–97 (абсолютное давление, кельвины, постоянный объём); §13.4, строки 35–56 (удары молекул о стенки). Независимый русский источник §3.3, строки 43–56: неизменное количество вещества, изотермический и изохорный процессы."
      }
    }
  ],
  "p-electric": [
    {
      "title": "OpenStax College Physics 2e §18.2",
      "url": "https://openstax.org/books/college-physics-2e/pages/18-2-conductors-and-insulators",
      "locator": {
        "en": "Charging by Contact, lines 38–41: electron transfer in metals leaves a positive deficit.",
        "ru": "§18.2, Charging by Contact, строки 38–41: перенос электронов в металле. Независимый русский источник §1.1, строки 23–31 (сохранение, потеря и получение электронов), строки 61–63 (элементарный заряд)."
      }
    },
    {
      "title": "Открытая физика §1.1",
      "url": "https://physics.ru/courses/op25part2/content/chapter1/section/paragraph1/theory.html",
      "locator": {
        "en": "Lines 23–31: conservation, electron loss/gain, discrete charge; lines 61–63: elementary charge 1.6×10⁻¹⁹ C.",
        "ru": "§18.2, Charging by Contact, строки 38–41: перенос электронов в металле. Независимый русский источник §1.1, строки 23–31 (сохранение, потеря и получение электронов), строки 61–63 (элементарный заряд)."
      }
    }
  ]
};
