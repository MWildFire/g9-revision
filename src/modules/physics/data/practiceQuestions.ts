export type CommandTerm =
  | 'state'
  | 'describe'
  | 'explain'
  | 'compare'
  | 'compareContrast'
  | 'evaluate'
  | 'calculate';

export type Criterion = 'A' | 'B' | 'C' | 'D';

export interface PracticeQuestion {
  id: string;
  commandTerm: CommandTerm;
  criterion: Criterion;
  marks: number;
  en: { question: string; answer: string };
  ru: { question: string; answer: string };
}


export const FORCE_MOTION_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "fm-1",
    "commandTerm": "state",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "State two examples of a scalar quantity and two examples of a vector quantity.",
      "answer": "Scalars: distance travelled and speed (also mass, time, energy). Vectors: velocity and force (also displacement, acceleration and momentum)."
    },
    "ru": {
      "question": "Назови два примера скалярной величины и два примера векторной величины.",
      "answer": "Скаляры: путь и путевая скорость (также масса, время, энергия). Векторы: векторная скорость и сила (также перемещение, ускорение и импульс)."
    }
  },
  {
    "id": "fm-2",
    "commandTerm": "describe",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Describe the motion of a skydiver from the moment they leave the plane until they land safely with a parachute.",
      "answer": "Initially the downward gravitational force is greater than drag, so the skydiver speeds up. Drag grows with speed. Neglecting buoyancy, drag = mg at terminal velocity. Opening the parachute increases drag at the current speed, causing slowing until a lower terminal speed is reached. The model describes vertical motion, not a guarantee of safe landing."
    },
    "ru": {
      "question": "Опиши движение парашютиста от момента выхода из самолёта до безопасного приземления с раскрытым парашютом.",
      "answer": "Вначале сила тяжести больше сопротивления воздуха, поэтому скорость падения растёт. С ростом скорости увеличивается сопротивление. Если пренебречь выталкивающей силой, при установившейся скорости сопротивление равно mg. После раскрытия парашюта сопротивление при прежней скорости возрастает; падение замедляется до меньшей установившейся скорости. Модель описывает вертикальное движение, а не гарантирует безопасное приземление."
    }
  },
  {
    "id": "fm-3",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Explain, using Newton's Second Law, why a tennis ball accelerates faster than a bowling ball when the same resultant force acts.",
      "answer": "F = m × a, so a = F / m. The tennis ball has a smaller mass than the bowling ball. Because the resultant force F is the same, dividing by a smaller mass gives a larger acceleration. Therefore the tennis ball accelerates faster."
    },
    "ru": {
      "question": "Объясни, используя второй закон Ньютона, почему теннисный мяч ускоряется быстрее, чем шар для боулинга, при одинаковой равнодействующей силе.",
      "answer": "F = m × a, поэтому a = F / m. У теннисного мяча масса меньше, чем у шара для боулинга. Так как равнодействующая сила F одинакова, при делении на меньшую массу ускорение получается больше. Поэтому теннисный мяч ускоряется быстрее."
    }
  },
  {
    "id": "fm-4",
    "commandTerm": "compareContrast",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Compare and contrast Newton's First Law and Newton's Third Law, giving an example of each.",
      "answer": "Newton's First Law is about a single object: it stays at rest or moves at constant velocity unless a resultant force acts on it (e.g. a book on a desk stays still). Whereas Newton's Third Law is about pairs of objects: every action force has an equal and opposite reaction force (e.g. a rocket pushes gas downward, the gas pushes the rocket upward). Both involve forces, but the First Law explains motion of one object, whereas the Third Law links forces between two objects."
    },
    "ru": {
      "question": "Укажи сходства и различия: первый и третий законы Ньютона, приведя пример к каждому.",
      "answer": "Первый закон Ньютона — про один объект: он сохраняет покой или равномерное движение, пока на него не действует равнодействующая сила (например, книга лежит на столе). В то же время третий закон — про пары объектов: каждое действие вызывает равное и противоположное противодействие (например, ракета толкает газ вниз, газ толкает ракету вверх). Оба закона про силы, но первый описывает движение одного объекта, а третий связывает силы между двумя объектами."
    }
  },
  {
    "id": "fm-5",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A car of mass 1200 kg accelerates from rest to 18 m/s in 6 s. Calculate (a) its acceleration and (b) the resultant force on the car.",
      "answer": "(a) a = (v − u) / t = (18 − 0) / 6 = 3 m/s². (b) F = m × a = 1200 × 3 = 3600 N. Resultant force = 3600 N (in the direction of motion). These are interval averages unless acceleration is uniform."
    },
    "ru": {
      "question": "Автомобиль массой 1200 кг разгоняется с места до 18 м/с за 6 с. Вычисли (а) его ускорение и (б) равнодействующую силу.",
      "answer": "(а) a = (v − u) / t = (18 − 0) / 6 = 3 м/с². (б) F = m × a = 1200 × 3 = 3600 Н. Равнодействующая сила = 3600 Н (в направлении движения). Если ускорение непостоянно, это средние значения за интервал."
    }
  },
  {
    "id": "fm-6",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "Calculate the momentum of a 0.5 kg football kicked at 12 m/s.",
      "answer": "p = m × v = 0.5 × 12 = 6 kg·m/s. The vector points in the direction of the ball’s velocity."
    },
    "ru": {
      "question": "Вычисли импульс футбольного мяча массой 0,5 кг, летящего со скоростью 12 м/с.",
      "answer": "p = m × v = 0,5 × 12 = 6 кг·м/с. Вектор направлен по скорости мяча."
    }
  },
  {
    "id": "fm-7",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Explain how airbags reduce the risk of injury during a car crash, using the concept of impulse.",
      "answer": "In a crash, the passenger's momentum must change to zero. Impulse J = F × Δt = Δp. Because Δp (change in momentum) is fixed, increasing the contact time Δt reduces the average force F on the passenger. An airbag increases the time over which the passenger decelerates, therefore reducing the force on the body and lowering the risk of injury."
    },
    "ru": {
      "question": "Объясни, как подушки безопасности снижают риск травм при ДТП, используя понятие импульса силы.",
      "answer": "При столкновении импульс пассажира должен измениться до нуля. J = F × Δt = Δp. Так как Δp (изменение импульса) фиксировано, увеличение времени контакта Δt уменьшает среднюю силу F на пассажира. Подушка увеличивает время торможения тела, поэтому сила на тело меньше, а риск травмы ниже."
    }
  },
  {
    "id": "fm-8",
    "commandTerm": "evaluate",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "A driver argues that braking distance only depends on the brakes, not on the road. Evaluate this claim.",
      "answer": "On one hand, the driver is partly right: the condition of the brakes affects how quickly the wheels can be slowed. However, braking distance also depends strongly on the friction between the tyres and the road, which is much smaller on wet or icy surfaces. For the same constant braking deceleration it grows with the square of initial speed. In conclusion, the claim is misleading: brakes matter, but road conditions and speed are at least as important, which is why stopping distances are much longer in rain or ice."
    },
    "ru": {
      "question": "Водитель утверждает, что тормозной путь зависит только от тормозов, а не от дороги. Оцени это утверждение.",
      "answer": "С одной стороны, водитель отчасти прав: состояние тормозов влияет на то, как быстро колёса замедляются. Однако тормозной путь также сильно зависит от трения между шинами и дорогой, которое намного меньше на мокрой или ледяной поверхности. При одинаковом постоянном замедлении путь растёт пропорционально квадрату начальной скорости. В заключение: утверждение вводит в заблуждение — тормоза важны, но условия дороги и скорость не менее важны, поэтому тормозной путь намного длиннее в дождь или гололёд."
    }
  },
  {
    "id": "fm-9",
    "commandTerm": "state",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "State the SI units of (a) velocity, (b) acceleration, (c) momentum, (d) force.",
      "answer": "(a) m/s, (b) m/s², (c) kg·m/s (or N·s), (d) newton (N)."
    },
    "ru": {
      "question": "Назови единицы СИ для (а) векторная скорость, (б) ускорения, (в) импульса, (г) силы.",
      "answer": "(а) м/с, (б) м/с², (в) кг·м/с (или Н·с), (г) ньютон (Н)."
    }
  },
  {
    "id": "fm-10",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A cyclist accelerates uniformly from 5 m/s to 15 m/s in 4 s. Calculate (a) the acceleration and (b) the distance travelled during this time.",
      "answer": "(a) a = (v − u) / t = (15 − 5) / 4 = 2.5 m/s². (b) Average velocity = (u + v)/2 = 10 m/s. Distance s = average v × t = 10 × 4 = 40 m."
    },
    "ru": {
      "question": "Велосипедист разгоняется равноускоренно с 5 м/с до 15 м/с за 4 с. Вычисли (а) ускорение и (б) пройденный путь за это время.",
      "answer": "(а) a = (v − u) / t = (15 − 5) / 4 = 2,5 м/с². (б) Средняя скорость = (u + v)/2 = 10 м/с. Путь s = средняя v × t = 10 × 4 = 40 м."
    }
  },
  {
    "id": "fm-11",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "A 0.05 kg bullet leaves a rifle at 400 m/s, accelerating from rest along a 0.5 m barrel. Calculate (a) the bullet's acceleration and (b) the average force exerted on it. Assume uniform acceleration and negligible resistance.",
      "answer": "(a) Using v² = u² + 2as: 400² = 0 + 2 × a × 0.5, so a = 160 000 / 1 = 160 000 m/s². (b) F = m × a = 0.05 × 160 000 = 8000 N."
    },
    "ru": {
      "question": "Пуля массой 0,05 кг вылетает из ствола со скоростью 400 м/с, разгоняясь с места по стволу длиной 0,5 м. Вычисли (а) ускорение пули и (б) среднюю силу на неё. Считай ускорение постоянным, сопротивлением пренебреги.",
      "answer": "(а) Используем v² = u² + 2as: 400² = 0 + 2 × a × 0,5, поэтому a = 160 000 / 1 = 160 000 м/с². (б) F = m × a = 0,05 × 160 000 = 8000 Н."
    }
  },
  {
    "id": "fm-12",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Two trolleys, mass 2 kg and 6 kg, are held together by a compressed spring. When released, the 2 kg trolley moves left at 6 m/s. Using conservation of momentum, calculate the velocity of the 6 kg trolley. Neglect external horizontal impulse.",
      "answer": "Total momentum before release = 0 (both at rest). After release: 0 = (2 × −6) + (6 × v₂). So 6v₂ = 12, v₂ = 2 m/s (to the right, opposite to the 2 kg trolley)."
    },
    "ru": {
      "question": "Две тележки массой 2 кг и 6 кг удерживаются вместе сжатой пружиной. После отпускания 2 кг тележка летит влево со скоростью 6 м/с. Используя закон сохранения импульса, вычисли векторная скорость 6 кг тележки. Внешним горизонтальным импульсом силы пренебреги.",
      "answer": "Суммарный импульс до = 0 (обе покоились). После: 0 = (2 × −6) + (6 × v₂). Значит 6v₂ = 12, v₂ = 2 м/с (вправо, в обратную сторону от 2 кг тележки)."
    }
  },
  {
    "id": "fm-13",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A 75 kg skydiver falls at terminal velocity. Neglect buoyancy and use g = 9.81 m/s² to find the drag force.",
      "answer": "At terminal velocity acceleration is zero, so the resultant force is zero. Neglecting buoyancy, drag balances gravitational weight W = mg = 75 × 9.81 ≈ 736 N. Drag is 736 N upward."
    },
    "ru": {
      "question": "Парашютист массой 75 кг падает с установившейся скоростью. Пренебреги выталкивающей силой и при g = 9,81 м/с² найди силу сопротивления воздуха.",
      "answer": "При установившейся скорости ускорение и равнодействующая равны нулю. Пренебрегаем выталкивающей силой: сопротивление уравновешивает силу тяжести F = mg = 75 × 9,81 ≈ 736 Н. Сопротивление направлено вверх и равно 736 Н."
    }
  },
  {
    "id": "fm-14",
    "commandTerm": "describe",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A velocity-time graph for a car shows a horizontal line at 12 m/s from t = 0 to t = 6 s, then a straight line down to 0 m/s at t = 10 s. Describe the motion and find the total distance.",
      "answer": "From 0–6 s: the car moves at a constant velocity of 12 m/s (zero acceleration). From 6–10 s: the car decelerates uniformly, reaching rest at 10 s. Distance = area under graph = (rectangle 6 × 12) + (triangle ½ × 4 × 12) = 72 + 24 = 96 m."
    },
    "ru": {
      "question": "График v-t для машины: горизонтальная линия на 12 м/с от t = 0 до t = 6 с, затем прямая вниз до 0 м/с в t = 10 с. Опиши движение и найди полный путь.",
      "answer": "С 0 до 6 с: машина движется с постоянной векторной скоростью 12 м/с (нулевое ускорение). С 6 до 10 с: машина равномерно тормозит до полной остановки в 10 с. Путь = площадь под графиком = (прямоугольник 6 × 12) + (треугольник ½ × 4 × 12) = 72 + 24 = 96 м."
    }
  }
];
export const FORCES_ENERGY_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "fe-1",
    "commandTerm": "state",
    "criterion": "A",
    "marks": 1,
    "en": {
      "question": "State Hooke's Law.",
      "answer": "For a spring within its proportional range, extension from natural length is proportional to applied force: F = kx. The limit of proportionality is not the same definition as the elastic limit."
    },
    "ru": {
      "question": "Сформулируй закон Гука.",
      "answer": "Для пружины в пределах пропорциональности удлинение относительно естественной длины пропорционально приложенной силе: F = kx. Предел пропорциональности и предел упругости — разные понятия."
    }
  },
  {
    "id": "fe-2",
    "commandTerm": "describe",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Describe what happens to a spring when it is loaded with masses up to and beyond its elastic limit.",
      "answer": "Below the elastic limit, the spring returns to its original length after unloading. Above it, some permanent deformation remains. A straight force–extension graph is guaranteed only below the limit of proportionality; reversible deformation can also be nonlinear."
    },
    "ru": {
      "question": "Опиши, что происходит с пружиной при нагрузке до предела упругости и за ним.",
      "answer": "До предела упругости пружина возвращается к исходной длине после снятия нагрузки. При превышении остаётся необратимая деформация. Прямолинейный график силы от удлинения гарантируется только до предела пропорциональности: обратимая деформация тоже бывает нелинейной."
    }
  },
  {
    "id": "fe-3",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Explain why a sharp knife cuts through food more easily than a blunt knife.",
      "answer": "Pressure P = F / A. A sharp knife has a much smaller contact area A than a blunt one. Therefore, for the same applied force F, the pressure under a sharp blade is much greater, so it concentrates enough force on the food to cut through it."
    },
    "ru": {
      "question": "Объясни, почему острый нож режет продукты легче, чем тупой.",
      "answer": "Давление P = F / A. У острого ножа площадь контакта A намного меньше, чем у тупого. Поэтому при одной и той же силе F давление под острым лезвием намного больше, и оно концентрирует достаточно силы на продукте, чтобы его разрезать."
    }
  },
  {
    "id": "fe-4",
    "commandTerm": "compareContrast",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Compare and contrast contact forces and non-contact forces. Give two examples of each.",
      "answer": "Whereas contact forces act only when objects physically touch (e.g. friction between shoes and ground, the push on a trolley), non-contact forces act over a distance without any touching (e.g. gravity pulling an apple to Earth, the magnetic force on a paperclip). Both can change an object's motion, but contact forces require an interface, whereas non-contact forces act through a field."
    },
    "ru": {
      "question": "Укажи сходства и различия: контактные и бесконтактные силы. Приведи по два примера каждой.",
      "answer": "Контактные силы действуют только при физическом соприкосновении объектов (например, трение между обувью и землёй, толчок тележки), в то время как бесконтактные силы действуют на расстоянии без соприкосновения (например, гравитация притягивает яблоко к Земле, магнитная сила на скрепку). Обе могут изменить движение объекта, но контактным нужен интерфейс, а бесконтактные действуют через поле."
    }
  },
  {
    "id": "fe-5",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "A stationary person with gravitational weight 700 N stands on one foot with a contact area of 0.020 m². Calculate the pressure exerted on the floor.",
      "answer": "P = F / A = 700 / 0.020 = 35 000 Pa = 35 kPa."
    },
    "ru": {
      "question": "На неподвижно стоящего человека действует сила тяжести 700 Н. Он стоит на одной ноге с площадью контакта 0,020 м². Вычисли давление на пол.",
      "answer": "P = F / A = 700 / 0,020 = 35 000 Па = 35 кПа."
    }
  },
  {
    "id": "fe-6",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A block has a mass of 240 g and a volume of 80 cm³. Calculate its density in g/cm³ and state whether it will float in water.",
      "answer": "ρ = m / V = 240 / 80 = 3.0 g/cm³. Since 3.0 g/cm³ > 1.0 g/cm³ (the density of water), the block will sink."
    },
    "ru": {
      "question": "Брусок имеет массу 240 г и объём 80 см³. Вычисли его плотность в г/см³ и укажи, будет ли он плавать в воде.",
      "answer": "ρ = m / V = 240 / 80 = 3,0 г/см³. Так как 3,0 г/см³ > 1,0 г/см³ (плотность воды), брусок утонет."
    }
  },
  {
    "id": "fe-7",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "Calculate the work done when a force of 25 N pushes a box 4 m across a floor in the direction of the force.",
      "answer": "W = F × d = 25 × 4 = 100 J."
    },
    "ru": {
      "question": "Вычисли работу, совершаемую при толкании ящика силой 25 Н на 4 м по полу в направлении силы.",
      "answer": "W = F × d = 25 × 4 = 100 Дж."
    }
  },
  {
    "id": "fe-8",
    "commandTerm": "evaluate",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Evaluate whether submarines should be built from materials with high or low density.",
      "answer": "High density does not itself imply high strength. A submarine hull must have adequate strength and resist corrosion while its mass is considered in the design. Ballast tanks alter the vessel’s mass and average density; buoyancy depends on displaced water. Therefore compare mechanical properties and the whole vessel, rather than choosing a material from density alone."
    },
    "ru": {
      "question": "Оцени, из каких материалов — с высокой или низкой плотностью — следует строить подводные лодки.",
      "answer": "Высокая плотность сама по себе не означает высокую прочность. Корпус должен быть достаточно прочным и устойчивым к коррозии, а его массу учитывают в конструкции. Балластные цистерны меняют массу и среднюю плотность лодки; выталкивающая сила определяется вытесненной водой. Поэтому сравнивают механические свойства и судно в целом, а не выбирают материал только по плотности."
    }
  },
  {
    "id": "fe-9",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A spring extends 5 cm under a 20 N load. Find (a) its spring constant and (b) its extension when the total load is changed to 32 N. Assume both loads are within the proportional range.",
      "answer": "(a) k = F / x = 20 / 0.05 = 400 N/m. (b) x = F / k = 32 / 400 = 0.08 m = 8 cm (assuming still within the proportional range)."
    },
    "ru": {
      "question": "Пружина удлиняется на 5 см под нагрузкой 20 Н. Найди (а) её жёсткость и (б) удлинение, если полную нагрузку заменить на 32 Н. Обе нагрузки находятся в пределах пропорциональности.",
      "answer": "(а) k = F / x = 20 / 0,05 = 400 Н/м. (б) x = F / k = 32 / 400 = 0,08 м = 8 см (при условии, что предел пропорциональности не превышен)."
    }
  },
  {
    "id": "fe-10",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Atmospheric pressure is 101 kPa. Calculate the force exerted by the atmosphere on a window of area 1.5 m² and explain why the window does not break inwards.",
      "answer": "F = P × A = 101 000 × 1.5 = 151 500 N = 151.5 kN. The window does not break inwards because air on the other side exerts an equal pressure outwards, so the net force on the window is zero."
    },
    "ru": {
      "question": "Атмосферное давление 101 кПа. Вычисли силу, действующую на окно площадью 1,5 м², и объясни, почему окно не вдавливается внутрь.",
      "answer": "F = P × A = 101 000 × 1,5 = 151 500 Н = 151,5 кН. Окно не вдавливается, потому что воздух с другой стороны давит с равной силой наружу, поэтому результирующая сила на окно = 0."
    }
  },
  {
    "id": "fe-11",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A pump lifts 2.0 kg of water by 3.0 m in 4.0 s. Calculate the work done and the power developed by the pump. Take g = 9.81 m/s².",
      "answer": "For steady lifting, applied force = gravitational weight = m × g = 2.0 × 9.81 = 19.62 N. Work = F × d = 19.62 × 3.0 = 58.9 J. Power = W / t = 58.9 / 4.0 = 14.7 W."
    },
    "ru": {
      "question": "Насос поднимает 2,0 кг воды на 3,0 м за 4,0 с. Вычисли работу и мощность насоса. Возьми g = 9,81 м/с².",
      "answer": "При равномерном подъёме сила подъёма равна силе тяжести: F = m × g = 2,0 × 9,81 = 19,62 Н. Работа = F × d = 19,62 × 3,0 = 58,9 Дж. Мощность = W / t = 58,9 / 4,0 = 14,7 Вт."
    }
  },
  {
    "id": "fe-12",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Calculate the gauge pressure due to water at the bottom of a 25 m deep swimming pool. Water density = 1000 kg/m³, g = 9.81 m/s². Express the answer in kPa.",
      "answer": "P = ρ × g × h = 1000 × 9.81 × 25 = 245 250 Pa ≈ 245 kPa."
    },
    "ru": {
      "question": "Вычисли избыточное давление воды относительно поверхности на дне бассейна глубиной 25 м. Плотность воды 1000 кг/м³, g = 9,81 м/с². Ответ в кПа.",
      "answer": "P = ρ × g × h = 1000 × 9,81 × 25 = 245 250 Па ≈ 245 кПа."
    }
  },
  {
    "id": "fe-13",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Apply the concept of density to explain why hot air rises while cool air sinks.",
      "answer": "When air is heated at approximately constant pressure, its particles gain kinetic energy and spread further apart, so the same mass of air occupies a larger volume. Because density ρ = m / V, an increase in V means a decrease in density. The hot, less dense air is pushed upward by the surrounding cooler, denser air — it rises. Cool air, being denser, sinks."
    },
    "ru": {
      "question": "Применяя понятие плотности, объясни, почему тёплый воздух поднимается, а холодный опускается.",
      "answer": "При нагревании при примерно постоянном давлении частицы воздуха получают кинетическую энергию и расходятся дальше, поэтому та же масса воздуха занимает больший объём. Так как ρ = m / V, увеличение V даёт уменьшение плотности. Тёплый менее плотный воздух выталкивается окружающим более холодным и плотным воздухом — он поднимается. Холодный воздух плотнее и опускается."
    }
  },
  {
    "id": "fe-14",
    "commandTerm": "evaluate",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "A student claims: \"Heavier objects always sink.\" Evaluate this claim with reference to density and give examples.",
      "answer": "The claim is false in the ordinary buoyancy model. Compare the object’s average density with the fluid’s: a large hollow ship may have a lower average density than water, while a small solid steel ball has higher density. At floating equilibrium buoyancy balances gravity. This model omits surface tension and external supports."
    },
    "ru": {
      "question": "Ученик утверждает: «Тяжёлые объекты всегда тонут.» Оцени это утверждение, ссылаясь на плотность, и приведи примеры.",
      "answer": "В обычной модели плавучести утверждение неверно. Сравни среднюю плотность тела с плотностью жидкости: у большого полого корабля она может быть меньше плотности воды, а у маленького сплошного стального шарика — больше. В равновесии выталкивающая сила уравновешивает силу тяжести. Модель не учитывает поверхностное натяжение и внешние опоры."
    }
  }
];
export const ELECTRICITY_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "el-1",
    "commandTerm": "state",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "State the unit of (a) electric current and (b) electrical resistance.",
      "answer": "(a) Ampere (A). (b) Ohm (Ω)."
    },
    "ru": {
      "question": "Назови единицы (а) силы тока и (б) электрического сопротивления.",
      "answer": "(а) Ампер (A). (б) Ом (Ω)."
    }
  },
  {
    "id": "el-2",
    "commandTerm": "describe",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Describe how to use an ammeter and a voltmeter to measure the current through and voltage across a single bulb in a circuit.",
      "answer": "The ammeter is connected in series with the bulb so that all the current passes through it. The voltmeter is connected in parallel across the bulb, between the two terminals of the bulb. The ammeter reading gives the current in amperes; the voltmeter reading gives the voltage in volts."
    },
    "ru": {
      "question": "Опиши, как использовать амперметр и вольтметр, чтобы измерить ток через одну лампу и напряжение на ней в цепи.",
      "answer": "Амперметр включают последовательно с лампой, чтобы через него шёл весь ток. Вольтметр включают параллельно лампе, между её двумя выводами. Показание амперметра — ток в амперах, показание вольтметра — напряжение в вольтах."
    }
  },
  {
    "id": "el-3",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Explain why household appliances are connected in parallel rather than in series.",
      "answer": "In parallel, each appliance receives the full supply voltage, so it works at its rated power. In a series circuit the voltage would be shared between appliances, so each would receive less than its rated value. Also, in a series circuit, if one appliance becomes open-circuit the whole circuit is broken, whereas in parallel each branch can be switched on and off independently — which is safer and more practical."
    },
    "ru": {
      "question": "Объясни, почему бытовые приборы соединяют параллельно, а не последовательно.",
      "answer": "При параллельном соединении каждый прибор получает полное напряжение сети и работает на номинальной мощности. В последовательной цепи напряжение делилось бы между приборами, и каждый получил бы меньше номинала. Кроме того, в последовательной цепи поломка одного прибора разрывает всю цепь, тогда как при параллельном соединении каждую ветвь можно включать и выключать отдельно — это безопаснее и практичнее."
    }
  },
  {
    "id": "el-4",
    "commandTerm": "compareContrast",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Compare and contrast a fuse and a circuit breaker as safety devices.",
      "answer": "Both a fuse and an overcurrent circuit breaker open a circuit carrying excessive current. A fuse melts and needs replacement; a breaker trips and can be reset after the fault has been dealt with. Operating time depends on the device and current; neither type is universally faster. An RCD instead detects a current imbalance."
    },
    "ru": {
      "question": "Укажи сходства и различия: плавкий предохранитель и автоматический выключатель как устройства защиты.",
      "answer": "Плавкий предохранитель и автомат защиты от сверхтока разрывают цепь при избыточном токе. Вставка предохранителя плавится и требует замены; автомат размыкает контакты и допускает повторное включение после устранения причины. Время срабатывания зависит от устройства и тока; один тип не всегда быстрее другого. УЗО вместо этого обнаруживает разность токов."
    }
  },
  {
    "id": "el-5",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "A 12 V battery is connected to a 48 Ω resistor. Calculate the current flowing in the circuit.",
      "answer": "I = V / R = 12 / 48 = 0.25 A."
    },
    "ru": {
      "question": "К батарее 12 В подключён резистор 48 Ω. Вычисли ток в цепи.",
      "answer": "I = V / R = 12 / 48 = 0,25 A."
    }
  },
  {
    "id": "el-6",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A 2000 W kettle runs for 5 minutes. Calculate (a) the energy used in joules and (b) the energy used in kilowatt-hours.",
      "answer": "(a) t = 5 × 60 = 300 s. E = P × t = 2000 × 300 = 600 000 J = 600 kJ. (b) E = P × t = 2 kW × (5/60) h = 0.167 kWh."
    },
    "ru": {
      "question": "Чайник мощностью 2000 Вт работает 5 минут. Вычисли (а) энергию в джоулях и (б) энергию в киловатт-часах.",
      "answer": "(а) t = 5 × 60 = 300 с. E = P × t = 2000 × 300 = 600 000 Дж = 600 кДж. (б) E = P × t = 2 кВт × (5/60) ч = 0,167 кВт·ч."
    }
  },
  {
    "id": "el-7",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Explain how an LDR (light-dependent resistor) is used to switch a street light on automatically at night.",
      "answer": "In one possible circuit, an LDR and a fixed resistor form a potential divider. As darkness increases LDR resistance, its share of the supply voltage increases. A threshold circuit uses that voltage to switch the lamp on. This depends on the chosen connection; an LDR alone is not an automatic switch or power source."
    },
    "ru": {
      "question": "Объясни, как фоторезистор (LDR) автоматически включает уличный фонарь ночью.",
      "answer": "В одном из вариантов фоторезистор и постоянный резистор образуют делитель напряжения. В темноте сопротивление фоторезистора и его доля напряжения возрастают. Пороговая схема использует это напряжение для включения лампы. Результат зависит от подключения: сам фоторезистор не является ни автоматическим выключателем, ни источником питания."
    }
  },
  {
    "id": "el-8",
    "commandTerm": "evaluate",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Evaluate the use of LED bulbs instead of traditional incandescent bulbs in homes.",
      "answer": "Compare lamps at the same useful light output. An efficient LED lamp usually needs less electrical power, so it uses less energy for the same operating time. Assess purchase cost, lifetime and disposal as well as electricity use. Do not assume a universal 90% conversion into visible light; use measured luminous output and input power for the actual lamps."
    },
    "ru": {
      "question": "Оцени использование LED-ламп вместо традиционных ламп накаливания в доме.",
      "answer": "Сравнивай лампы при одинаковом полезном световом потоке. Эффективной светодиодной лампе обычно нужна меньшая электрическая мощность, поэтому за одинаковое время она расходует меньше энергии. Учитывай цену, срок службы и утилизацию. Нельзя принимать универсальное превращение 90% энергии в видимый свет: нужны световой поток и входная мощность конкретных ламп."
    }
  },
  {
    "id": "el-9",
    "commandTerm": "state",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "State the SI units of (a) electric charge, (b) potential difference and (c) electrical power.",
      "answer": "(a) coulomb (C), (b) volt (V), (c) watt (W)."
    },
    "ru": {
      "question": "Назови единицы СИ для (а) электрического заряда, (б) напряжения и (в) электрической мощности.",
      "answer": "(а) кулон (C), (б) вольт (V), (в) ватт (W)."
    }
  },
  {
    "id": "el-10",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Three 6 Ω resistors are connected in parallel. Calculate the total (equivalent) resistance.",
      "answer": "1 / R_total = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. So R_total = 2 Ω."
    },
    "ru": {
      "question": "Три резистора по 6 Ω соединены параллельно. Вычисли полное (эквивалентное) сопротивление.",
      "answer": "1 / R_общ = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. Значит R_общ = 2 Ω."
    }
  },
  {
    "id": "el-11",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "A 12 V battery is connected in series to a 4 Ω resistor and an 8 Ω resistor. Calculate (a) the total resistance, (b) the current in the circuit, (c) the voltage across each resistor.",
      "answer": "(a) R_total = 4 + 8 = 12 Ω. (b) I = V / R = 12 / 12 = 1.0 A. (c) V₁ = I × R₁ = 1.0 × 4 = 4 V; V₂ = I × R₂ = 1.0 × 8 = 8 V. (Check: V₁ + V₂ = 12 V ✓)"
    },
    "ru": {
      "question": "К батарее 12 В последовательно подключены резистор 4 Ω и резистор 8 Ω. Вычисли (а) полное сопротивление, (б) ток в цепи, (в) напряжение на каждом резисторе.",
      "answer": "(а) R_общ = 4 + 8 = 12 Ω. (б) I = V / R = 12 / 12 = 1,0 A. (в) V₁ = I × R₁ = 1,0 × 4 = 4 В; V₂ = I × R₂ = 1,0 × 8 = 8 В. (Проверка: V₁ + V₂ = 12 В ✓)"
    }
  },
  {
    "id": "el-12",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "An electric iron is rated at 1500 W. It is used for 1 hour per day for 30 days. The electricity tariff is 0.40 AED per kWh. Calculate the monthly cost of running the iron.",
      "answer": "Energy per day = 1.5 kW × 1 h = 1.5 kWh. Energy per month = 1.5 × 30 = 45 kWh. Cost = 45 × 0.40 = 18 AED."
    },
    "ru": {
      "question": "Электроутюг мощностью 1500 Вт используется 1 час в день в течение 30 дней. Тариф 0,40 AED за кВт·ч. Вычисли месячную стоимость работы утюга.",
      "answer": "Энергия в день = 1,5 кВт × 1 ч = 1,5 кВт·ч. Энергия в месяц = 1,5 × 30 = 45 кВт·ч. Стоимость = 45 × 0,40 = 18 AED."
    }
  },
  {
    "id": "el-13",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Apply your knowledge of resistance to explain why thicker wires are used for high-current household circuits than for small electronics.",
      "answer": "For wires of the same material, length and temperature, greater cross-sectional area lowers resistance. At the same current, heating power I²R is therefore smaller. Actual temperature rise also depends on heat loss, insulation and duration: a thicker wire can still become hot and must be appropriately rated."
    },
    "ru": {
      "question": "Применяя знания о сопротивлении, объясни, почему для бытовых цепей с большим током используют более толстые провода, чем для электроники.",
      "answer": "Для проводов одинаковых материала, длины и температуры увеличение площади сечения уменьшает сопротивление. При одинаковом токе мощность нагрева I²R поэтому меньше. Повышение температуры зависит также от теплоотдачи, изоляции и времени: толстый провод тоже нагревается и должен соответствовать условиям работы."
    }
  },
  {
    "id": "el-14",
    "commandTerm": "describe",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Describe an experiment to determine the I-V (current-voltage) characteristics of a resistor at constant temperature.",
      "answer": "In a suitable low-voltage circuit, connect an ammeter in series with the resistor and a voltmeter across it. Change voltage in several steps, record I and V and keep resistor temperature approximately constant. Plot I vertically against V horizontally: an ohmic resistor gives a straight line through the origin with gradient I/V = 1/R. On a V-against-I graph the gradient would instead be R."
    },
    "ru": {
      "question": "Опиши эксперимент по определению I-V характеристики резистора при постоянной температуре.",
      "answer": "В подходящей низковольтной цепи включи амперметр последовательно с резистором, вольтметр — параллельно ему. Меняй напряжение по шагам, измеряй I и U и сохраняй примерно постоянную температуру резистора. На графике I по вертикали и U по горизонтали омический резистор даёт прямую через начало координат с наклоном I/U = 1/R. На графике U от I наклон был бы равен R."
    }
  }
];
export const WAVES_OPTICS_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "wo-1",
    "commandTerm": "state",
    "criterion": "A",
    "marks": 1,
    "en": {
      "question": "State the wave equation linking speed, frequency and wavelength.",
      "answer": "v = f × λ, where v is wave speed (m/s), f is frequency (Hz) and λ is wavelength (m)."
    },
    "ru": {
      "question": "Запиши уравнение волны, связывающее скорость, частоту и длину волны.",
      "answer": "v = f × λ, где v — скорость волны (м/с), f — частота (Гц), λ — длина волны (м)."
    }
  },
  {
    "id": "wo-2",
    "commandTerm": "describe",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Describe the difference between a transverse wave and a longitudinal wave, giving an example of each.",
      "answer": "Transverse oscillations are perpendicular to propagation; for example, a rope oscillates sideways to the direction of the wave. Light is also transverse, but its electric and magnetic fields oscillate, not material particles. In longitudinal sound in air, particle motion is parallel to propagation, producing compressions and rarefactions."
    },
    "ru": {
      "question": "Опиши различие между поперечной и продольной волной и приведи пример каждой.",
      "answer": "В поперечной волне колебания перпендикулярны распространению: например, верёвка движется поперёк направления волны. Свет тоже поперечный, но в нём колеблются электрическое и магнитное поля, а не частицы вещества. В продольной звуковой волне в воздухе частицы движутся вдоль распространения, создавая сгущения и разрежения."
    }
  },
  {
    "id": "wo-3",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Explain why a straw appears bent when it is placed in a glass of water.",
      "answer": "When light from the straw travels from water into air, it changes speed and bends — this is refraction. Because the light leaves the water at an angle, our eyes follow the refracted ray back in a straight line and see the underwater part of the straw shifted from its true position. As a result, the straw looks bent at the surface even though it is straight."
    },
    "ru": {
      "question": "Объясни, почему соломинка кажется сломанной, когда её поставить в стакан с водой.",
      "answer": "Когда свет от соломинки идёт из воды в воздух, он меняет скорость и преломляется. Поскольку свет выходит из воды под углом, глаза прослеживают преломлённый луч по прямой и видят подводную часть соломинки смещённой. В результате соломинка кажется сломанной на границе воды, хотя она прямая."
    }
  },
  {
    "id": "wo-4",
    "commandTerm": "compareContrast",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Compare and contrast sound waves and light waves.",
      "answer": "Both sound and light transfer energy and can reflect and refract. Sound requires a material medium; in air it is longitudinal and travels at about 343 m/s at room temperature. Light is an electromagnetic wave that can travel through vacuum at approximately 3 × 10⁸ m/s. Solids can support more than one type of mechanical wave."
    },
    "ru": {
      "question": "Укажи сходства и различия: звуковые и световые волны.",
      "answer": "Звук и свет переносят энергию, отражаются и преломляются. Звуку нужна вещественная среда; в воздухе он продольный и при комнатной температуре распространяется примерно со скоростью 343 м/с. Свет — электромагнитная волна, которая распространяется в вакууме со скоростью около 3 × 10⁸ м/с. В твёрдых телах возможны разные виды механических волн."
    }
  },
  {
    "id": "wo-5",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "A wave has a frequency of 50 Hz and a wavelength of 2 m. Calculate its speed.",
      "answer": "v = f × λ = 50 × 2 = 100 m/s."
    },
    "ru": {
      "question": "Волна имеет частоту 50 Гц и длину 2 м. Вычисли её скорость.",
      "answer": "v = f × λ = 50 × 2 = 100 м/с."
    }
  },
  {
    "id": "wo-6",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "A pendulum completes one full swing every 0.02 s. Calculate its frequency.",
      "answer": "f = 1 / T = 1 / 0.02 = 50 Hz."
    },
    "ru": {
      "question": "Маятник совершает одно полное колебание за 0,02 с. Вычисли его частоту.",
      "answer": "f = 1 / T = 1 / 0,02 = 50 Гц."
    }
  },
  {
    "id": "wo-7",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "Explain why you can hear someone talking around a corner even though you cannot see them.",
      "answer": "Sound waves diffract — they spread out when they pass through a gap or around an obstacle. The wavelength of speech (around 1 m) is similar in size to a doorway, so the sound spreads noticeably around the corner. Light has a much shorter wavelength, so it diffracts only a tiny amount and is effectively blocked by the wall."
    },
    "ru": {
      "question": "Объясни, почему слышно человека за углом, хотя его не видно.",
      "answer": "Звуковые волны дифрагируют — они огибают препятствия и расходятся при прохождении через щель. Длина волны речи (~1 м) сравнима с шириной дверного проёма, поэтому звук заметно расходится за углом. Длина волны света намного меньше, поэтому он дифрагирует совсем чуть-чуть и фактически блокируется стеной."
    }
  },
  {
    "id": "wo-8",
    "commandTerm": "evaluate",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Evaluate the use of X-rays in medical imaging.",
      "answer": "X-rays are attenuated differently by tissues, so an image can reveal internal structures such as bone. They are ionising and can damage cells. A justified examination balances the diagnostic information against exposure and uses an appropriate optimised dose. The balance depends on the examination and patient; neither a universal safety claim nor a universal radiation ranking follows from frequency alone."
    },
    "ru": {
      "question": "Оцени использование рентгеновских лучей в медицинской визуализации.",
      "answer": "Разные ткани по-разному ослабляют рентгеновское излучение, поэтому изображение показывает внутренние структуры, например кости. Излучение ионизирует вещество и может повреждать клетки. При обоснованном исследовании диагностическую информацию сопоставляют с воздействием и выбирают подходящую оптимизированную дозу. Соотношение зависит от исследования и пациента; одна частота не даёт универсального вывода о безопасности или опасности."
    }
  },
  {
    "id": "wo-9",
    "commandTerm": "state",
    "criterion": "A",
    "marks": 2,
    "en": {
      "question": "State the order of the main regions of the electromagnetic spectrum, starting from longest wavelength.",
      "answer": "Radio → microwave → infrared → visible → ultraviolet → X-ray → gamma. Frequency and energy per photon increase in this ordering; wavelength in vacuum decreases. Total beam power depends on photon rate as well as photon energy."
    },
    "ru": {
      "question": "Назови основные области электромагнитного спектра по порядку, начиная с самой длинной длины волны.",
      "answer": "Радиоволны → микроволны → инфракрасное → видимое → ультрафиолетовое → рентгеновское → гамма-излучение. В этом порядке растут частота и энергия одного фотона, длина волны в вакууме уменьшается. Полная мощность пучка зависит также от числа фотонов в секунду."
    }
  },
  {
    "id": "wo-10",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Light travels from air (n₁ = 1.00) into glass (n₂ = 1.50). The angle of incidence is 40°. Calculate the angle of refraction using Snell's law.",
      "answer": "n₁ sin θ₁ = n₂ sin θ₂. So sin θ₂ = (1.00 × sin 40°) / 1.50 = 0.6428 / 1.5 = 0.4285. θ₂ = arcsin(0.4285) ≈ 25.4°."
    },
    "ru": {
      "question": "Свет идёт из воздуха (n₁ = 1,00) в стекло (n₂ = 1,50). Угол падения 40°. Вычисли угол преломления по закону Снеллиуса.",
      "answer": "n₁ sin θ₁ = n₂ sin θ₂. Значит sin θ₂ = (1,00 × sin 40°) / 1,50 = 0,6428 / 1,5 = 0,4285. θ₂ = arcsin(0,4285) ≈ 25,4°."
    }
  },
  {
    "id": "wo-11",
    "commandTerm": "calculate",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "A radio station broadcasts at a frequency of 100 MHz. Calculate the wavelength of its signal. (Take c = 3 × 10⁸ m/s.)",
      "answer": "λ = c / f = (3 × 10⁸) / (100 × 10⁶) = (3 × 10⁸) / (1 × 10⁸) = 3 m."
    },
    "ru": {
      "question": "Радиостанция вещает на частоте 100 МГц. Вычисли длину волны её сигнала. (c = 3 × 10⁸ м/с.)",
      "answer": "λ = c / f = (3 × 10⁸) / (100 × 10⁶) = (3 × 10⁸) / (1 × 10⁸) = 3 м."
    }
  },
  {
    "id": "wo-12",
    "commandTerm": "explain",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Apply your knowledge of colour and filters to explain what is seen when red light shines on a blue object.",
      "answer": "In the ideal colour model, a blue object reflects blue light and absorbs red. Under a red-only source it therefore looks black because no blue light is available to reflect. Real materials can reflect some other wavelengths, so the exact appearance depends on their reflectance and the source spectrum."
    },
    "ru": {
      "question": "Применяя знания о цвете и фильтрах, объясни, что мы увидим, если на синий объект посветить красным светом.",
      "answer": "В идеальной цветовой модели синий предмет отражает синий свет и поглощает красный. При освещении только красным он выглядит чёрным: синего света для отражения нет. Реальные материалы могут отражать и другие длины волн, поэтому оттенок зависит от их отражения и спектра источника."
    }
  },
  {
    "id": "wo-13",
    "commandTerm": "describe",
    "criterion": "A",
    "marks": 3,
    "en": {
      "question": "Describe how an image is formed by a plane mirror, including the properties of the image.",
      "answer": "Reflected rays obey equal incidence and reflection angles measured from the normal. Their backward extensions meet behind the plane mirror, forming a virtual, upright, same-size image at equal distance. The mirror reverses the coordinate perpendicular to its surface; the familiar left–right reversal is a comparison with turning a person or object around."
    },
    "ru": {
      "question": "Опиши, как формируется изображение в плоском зеркале, включая свойства изображения.",
      "answer": "Углы падения и отражения, измеренные от нормали, равны. Обратные продолжения отражённых лучей пересекаются за зеркалом, давая мнимое, прямое изображение того же размера на равном расстоянии. Зеркало меняет координату, перпендикулярную поверхности; привычная смена левого и правого возникает при сравнении с повёрнутым человеком или предметом."
    }
  },
  {
    "id": "wo-14",
    "commandTerm": "evaluate",
    "criterion": "A",
    "marks": 4,
    "en": {
      "question": "Bats use ultrasound for echolocation. Evaluate the advantages and disadvantages of using ultrasound over visible light for this purpose.",
      "answer": "Echolocation uses the return time and properties of reflected ultrasound to locate objects in darkness. Shorter wavelengths can resolve smaller objects, while absorption in air and weak returning echoes limit useful range. Sound does not encode visible colour. These trade-offs explain its usefulness for short-range navigation without claiming that echolocation cannot reveal fine structure."
    },
    "ru": {
      "question": "Летучие мыши используют ультразвук для эхолокации. Оцени плюсы и минусы использования ультразвука вместо видимого света для этой цели.",
      "answer": "Эхолокация использует время возвращения и свойства отражённого ультразвука для определения объектов в темноте. Малая длина волны помогает различать небольшие предметы; поглощение в воздухе и слабые отражённые сигналы ограничивают дальность. Звук не передаёт видимый цвет. Это объясняет пользу эхолокации на небольших расстояниях без утверждения, будто она не позволяет различать мелкие структуры."
    }
  }
];

export const QUESTIONS_BY_TOPIC: Record<string, PracticeQuestion[]> = { forceMotion: FORCE_MOTION_QUESTIONS, forcesEnergy: FORCES_ENERGY_QUESTIONS, electricity: ELECTRICITY_QUESTIONS, wavesOptics: WAVES_OPTICS_QUESTIONS };
