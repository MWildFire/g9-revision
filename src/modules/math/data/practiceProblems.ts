import type { MathTopicId } from './drFrostTasks';

export type ProblemSource = 'standard-mp' | 'standard-ric' | 'extended-mp' | 'extended-ric';
export type Criterion = 'A' | 'B' | 'C' | 'D';

export interface MathProblem {
  id: string;
  topicId: MathTopicId;
  source: ProblemSource;
  chapter: number | string;
  questionNumber: string;
  difficulty: 'standard' | 'extended';
  criterion?: Criterion;
  en: { question: string; answer: string; workingSteps?: string[] };
  ru: { question: string; answer: string; workingSteps?: string[] };
  formulas?: string[];
}

// Bilingual worked practice; definitions and assumptions reviewed with the topic notes.
export const ALL_MATH_PROBLEMS: MathProblem[] = [
  {
    "id": "m-ns-1",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "1a",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Simplify: √3 × √3",
      "answer": "3"
    },
    "ru": {
      "question": "Упрости: √3 × √3",
      "answer": "3"
    }
  },
  {
    "id": "m-ns-2",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "1b",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Simplify: √48",
      "answer": "4√3",
      "workingSteps": [
        "48 = 16 × 3",
        "√(16 × 3) = √16 × √3 = 4√3"
      ]
    },
    "ru": {
      "question": "Упрости: √48",
      "answer": "4√3",
      "workingSteps": [
        "48 = 16 × 3",
        "√(16 × 3) = √16 × √3 = 4√3"
      ]
    }
  },
  {
    "id": "m-ns-3",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "1c",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Evaluate: 32^(-1/5)",
      "answer": "1/2",
      "workingSteps": [
        "32 = 2^5",
        "32^(-1/5) = 2^(-1) = 1/2"
      ]
    },
    "ru": {
      "question": "Вычисли: 32^(-1/5)",
      "answer": "1/2",
      "workingSteps": [
        "32 = 2^5",
        "32^(-1/5) = 2^(-1) = 1/2"
      ]
    }
  },
  {
    "id": "m-ns-4",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "2",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Express in standard form: 384 000",
      "answer": "3.84 × 10^5"
    },
    "ru": {
      "question": "Запиши в стандартной форме: 384 000",
      "answer": "3.84 × 10^5"
    }
  },
  {
    "id": "m-ns-5",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "3",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Express in standard form: 0.00057",
      "answer": "5.7 × 10^(-4)"
    },
    "ru": {
      "question": "Запиши в стандартной форме: 0.00057",
      "answer": "5.7 × 10^(-4)"
    }
  },
  {
    "id": "m-ns-6",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "4",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Round 4.7639 to 2 significant figures.",
      "answer": "4.8"
    },
    "ru": {
      "question": "Округли 4.7639 до 2 значащих цифр.",
      "answer": "4.8"
    }
  },
  {
    "id": "m-ns-7",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "5",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "A length is given as 42.5 cm correct to 1 decimal place. Write down the upper and lower bounds.",
      "answer": "42.45 cm ≤ L < 42.55 cm"
    },
    "ru": {
      "question": "Длина указана как 42.5 см с точностью до 1 знака после запятой. Запиши верхнюю и нижнюю границы.",
      "answer": "42.45 см ≤ L < 42.55 см"
    }
  },
  {
    "id": "m-ns-8",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "6",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Simplify: (2√5)²",
      "answer": "20",
      "workingSteps": [
        "(2√5)² = 2² × (√5)² = 4 × 5 = 20"
      ]
    },
    "ru": {
      "question": "Упрости: (2√5)²",
      "answer": "20",
      "workingSteps": [
        "(2√5)² = 2² × (√5)² = 4 × 5 = 20"
      ]
    }
  },
  {
    "id": "m-ns-9",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "7",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Simplify: √20 + √45",
      "answer": "5√5",
      "workingSteps": [
        "√20 = 2√5",
        "√45 = 3√5",
        "2√5 + 3√5 = 5√5"
      ]
    },
    "ru": {
      "question": "Упрости: √20 + √45",
      "answer": "5√5",
      "workingSteps": [
        "√20 = 2√5",
        "√45 = 3√5",
        "2√5 + 3√5 = 5√5"
      ]
    }
  },
  {
    "id": "m-ns-10",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "8",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Convert 2.5 m² to cm².",
      "answer": "25 000 cm²",
      "workingSteps": [
        "1 m² = 10 000 cm²",
        "2.5 × 10 000 = 25 000"
      ]
    },
    "ru": {
      "question": "Переведи 2.5 м² в см².",
      "answer": "25 000 см²",
      "workingSteps": [
        "1 м² = 10 000 см²",
        "2.5 × 10 000 = 25 000"
      ]
    }
  },
  {
    "id": "m-ns-ext-1",
    "topicId": "number-systems",
    "source": "extended-mp",
    "chapter": 1,
    "questionNumber": "Ext 1",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Evaluate: 27^(2/3)",
      "answer": "9",
      "workingSteps": [
        "27 = 3^3",
        "27^(2/3) = (3^3)^(2/3) = 3^2 = 9"
      ]
    },
    "ru": {
      "question": "Вычисли: 27^(2/3)",
      "answer": "9",
      "workingSteps": [
        "27 = 3^3",
        "27^(2/3) = (3^3)^(2/3) = 3^2 = 9"
      ]
    }
  },
  {
    "id": "m-ns-ext-2",
    "topicId": "number-systems",
    "source": "extended-mp",
    "chapter": 1,
    "questionNumber": "Ext 2",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Rationalise the denominator: 6 / √3",
      "answer": "2√3",
      "workingSteps": [
        "Multiply numerator and denominator by √3",
        "(6 × √3) / (√3 × √3) = 6√3 / 3 = 2√3"
      ]
    },
    "ru": {
      "question": "Избавься от иррациональности в знаменателе: 6 / √3",
      "answer": "2√3",
      "workingSteps": [
        "Умножь числитель и знаменатель на √3",
        "(6 × √3) / (√3 × √3) = 6√3 / 3 = 2√3"
      ]
    }
  },
  {
    "id": "m-ns-ext-3",
    "topicId": "number-systems",
    "source": "extended-mp",
    "chapter": 1,
    "questionNumber": "Ext 3",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Expand and simplify: (√2 + 1)(√2 − 1)",
      "answer": "1",
      "workingSteps": [
        "Difference of squares: (a+b)(a-b) = a² − b²",
        "= (√2)² − 1² = 2 − 1 = 1"
      ]
    },
    "ru": {
      "question": "Раскрой и упрости: (√2 + 1)(√2 − 1)",
      "answer": "1",
      "workingSteps": [
        "Разность квадратов: (a+b)(a-b) = a² − b²",
        "= (√2)² − 1² = 2 − 1 = 1"
      ]
    }
  },
  {
    "id": "m-ns-ric-1",
    "topicId": "number-systems",
    "source": "standard-ric",
    "chapter": 1,
    "questionNumber": "RIC 1",
    "difficulty": "standard",
    "criterion": "D",
    "en": {
      "question": "In a simplified model, take the Sun–Earth distance as 1.496×10⁸ km and light speed as 3.00×10⁵ km/s. Calculate travel time in minutes to 3 significant figures; neglect changes in distance.",
      "answer": "≈ 8.31 minutes",
      "workingSteps": [
        "t = distance / speed",
        "t = (1.496 × 10^8) / (3.00 × 10^5) s ≈ 498.67 s",
        "498.67 / 60 ≈ 8.31 min"
      ]
    },
    "ru": {
      "question": "В упрощённой модели примите расстояние Солнце–Земля равным 1.496×10⁸ км, скорость света 3.00×10⁵ км/с. Найдите время в минутах до 3 значащих цифр, пренебрегая изменением расстояния.",
      "answer": "≈ 8.31 минут",
      "workingSteps": [
        "t = расстояние / скорость",
        "t = (1.496 × 10^8) / (3.00 × 10^5) с ≈ 498.67 с",
        "498.67 / 60 ≈ 8.31 мин"
      ]
    }
  },
  {
    "id": "m-ns-ric-2",
    "topicId": "number-systems",
    "source": "standard-ric",
    "chapter": 1,
    "questionNumber": "RIC 2",
    "difficulty": "standard",
    "criterion": "D",
    "en": {
      "question": "A hypothetical population is reported as 1,400,000,000 rounded to the nearest 100,000,000 (positive ties upward). Find its bounds and the maximum rounding error as a percentage of the stated value.",
      "answer": "1.35×10⁹ ≤ population < 1.45×10⁹; maximum absolute error 5×10⁷, or about 3.57% of the stated value.",
      "workingSteps": [
        "Rounded to nearest 100 million → ±50 million",
        "Lower: 1 400 000 000 − 50 000 000 = 1.35 × 10^9",
        "Upper: 1 400 000 000 + 50 000 000 = 1.45 × 10^9",
        "% error = 50 000 000 / 1 400 000 000 × 100 ≈ 3.57%"
      ]
    },
    "ru": {
      "question": "Условная численность населения 1 400 000 000 округлена до 100 000 000 (половинные значения вверх). Найдите границы и наибольшую ошибку округления в процентах от указанного значения.",
      "answer": "1.35×10⁹ ≤ численность < 1.45×10⁹; наибольшая абсолютная ошибка 5×10⁷, или примерно 3.57% указанного значения.",
      "workingSteps": [
        "Округлено до 100 миллионов → ±50 миллионов",
        "Нижняя: 1 400 000 000 − 50 000 000 = 1.35 × 10^9",
        "Верхняя: 1 400 000 000 + 50 000 000 = 1.45 × 10^9",
        "% ошибки = 50 000 000 / 1 400 000 000 × 100 ≈ 3.57%"
      ]
    }
  },
  {
    "id": "m-ns-11",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "9",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Simplify: (a^2 b^3)^4",
      "answer": "a^8 b^12"
    },
    "ru": {
      "question": "Упрости: (a^2 b^3)^4",
      "answer": "a^8 b^12"
    }
  },
  {
    "id": "m-ns-12",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "10",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Solve: |2x − 3| = 7",
      "answer": "x = 5 or x = −2",
      "workingSteps": [
        "2x − 3 = 7  →  x = 5",
        "2x − 3 = −7  →  x = −2"
      ]
    },
    "ru": {
      "question": "Реши: |2x − 3| = 7",
      "answer": "x = 5 или x = −2",
      "workingSteps": [
        "2x − 3 = 7  →  x = 5",
        "2x − 3 = −7  →  x = −2"
      ]
    }
  },
  {
    "id": "m-ns-13",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "11",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "List which of these number sets √2 belongs to: ℕ, ℤ, ℚ, ℝ.",
      "answer": "ℝ only (√2 is irrational)"
    },
    "ru": {
      "question": "Перечисли, каким множествам принадлежит √2: ℕ, ℤ, ℚ, ℝ.",
      "answer": "Только ℝ (√2 — иррациональное)"
    }
  },
  {
    "id": "m-ns-14",
    "topicId": "number-systems",
    "source": "standard-mp",
    "chapter": 1,
    "questionNumber": "12",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Compute: (3 × 10^4) × (2 × 10^(-2))",
      "answer": "6 × 10^2 = 600",
      "workingSteps": [
        "Multiply coefficients: 3 × 2 = 6",
        "Add exponents: 4 + (−2) = 2"
      ]
    },
    "ru": {
      "question": "Вычисли: (3 × 10^4) × (2 × 10^(-2))",
      "answer": "6 × 10^2 = 600",
      "workingSteps": [
        "Перемножь коэффициенты: 3 × 2 = 6",
        "Сложи степени: 4 + (−2) = 2"
      ]
    }
  },
  {
    "id": "m-fa-1",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "1",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Expand: (x + 3)(x − 5)",
      "answer": "x² − 2x − 15"
    },
    "ru": {
      "question": "Раскрой скобки: (x + 3)(x − 5)",
      "answer": "x² − 2x − 15"
    }
  },
  {
    "id": "m-fa-2",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "2",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Factorise: x² − 7x + 12",
      "answer": "(x − 3)(x − 4)"
    },
    "ru": {
      "question": "Разложи на множители: x² − 7x + 12",
      "answer": "(x − 3)(x − 4)"
    }
  },
  {
    "id": "m-fa-3",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "3",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Factorise: x² − 9",
      "answer": "(x − 3)(x + 3)"
    },
    "ru": {
      "question": "Разложи на множители: x² − 9",
      "answer": "(x − 3)(x + 3)"
    }
  },
  {
    "id": "m-fa-4",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "4",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Solve by factorisation: x² + 2x − 15 = 0",
      "answer": "x = 3 or x = −5",
      "workingSteps": [
        "(x − 3)(x + 5) = 0",
        "x − 3 = 0  →  x = 3",
        "x + 5 = 0  →  x = −5"
      ]
    },
    "ru": {
      "question": "Реши факторизацией: x² + 2x − 15 = 0",
      "answer": "x = 3 или x = −5",
      "workingSteps": [
        "(x − 3)(x + 5) = 0",
        "x − 3 = 0  →  x = 3",
        "x + 5 = 0  →  x = −5"
      ]
    }
  },
  {
    "id": "m-fa-5",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "5",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Solve using the quadratic formula: 2x² + 3x − 2 = 0",
      "answer": "x = 0.5 or x = −2",
      "workingSteps": [
        "a=2, b=3, c=−2",
        "Δ = b² − 4ac = 9 + 16 = 25",
        "x = (−3 ± 5) / 4",
        "x = 0.5 or x = −2"
      ]
    },
    "ru": {
      "question": "Реши по формуле квадратного: 2x² + 3x − 2 = 0",
      "answer": "x = 0.5 или x = −2",
      "workingSteps": [
        "a=2, b=3, c=−2",
        "Δ = b² − 4ac = 9 + 16 = 25",
        "x = (−3 ± 5) / 4",
        "x = 0.5 или x = −2"
      ]
    }
  },
  {
    "id": "m-fa-6",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "6",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Complete the square: x² + 6x + 5",
      "answer": "(x + 3)² − 4",
      "workingSteps": [
        "Take half of coefficient of x: 6/2 = 3",
        "(x + 3)² = x² + 6x + 9",
        "Subtract extra: x² + 6x + 5 = (x + 3)² − 4"
      ]
    },
    "ru": {
      "question": "Выдели полный квадрат: x² + 6x + 5",
      "answer": "(x + 3)² − 4",
      "workingSteps": [
        "Половина коэффициента при x: 6/2 = 3",
        "(x + 3)² = x² + 6x + 9",
        "Вычти излишек: x² + 6x + 5 = (x + 3)² − 4"
      ]
    }
  },
  {
    "id": "m-fa-7",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "7",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "For y = x² − 4x + 3, find the vertex and axis of symmetry.",
      "answer": "Vertex: (2, −1); Axis: x = 2",
      "workingSteps": [
        "Axis: x = −b/(2a) = 4/2 = 2",
        "y at x=2: 4 − 8 + 3 = −1",
        "Vertex (2, −1)"
      ]
    },
    "ru": {
      "question": "Для y = x² − 4x + 3 найди вершину параболы и ось симметрии.",
      "answer": "Вершина: (2, −1); ось симметрии: x = 2",
      "workingSteps": [
        "Ось: x = −b/(2a) = 4/2 = 2",
        "y при x=2: 4 − 8 + 3 = −1",
        "Вершина (2, −1)"
      ]
    }
  },
  {
    "id": "m-fa-8",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "8",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the domain of f(x) = √(x − 2).",
      "answer": "x ≥ 2 (i.e., [2, ∞))",
      "workingSteps": [
        "Inside the square root must be ≥ 0",
        "x − 2 ≥ 0  →  x ≥ 2"
      ]
    },
    "ru": {
      "question": "Найди область определения функции f(x) = √(x − 2) над действительными числами.",
      "answer": "x ≥ 2 (т.е., [2, ∞))",
      "workingSteps": [
        "Под корнем должно быть ≥ 0",
        "x − 2 ≥ 0  →  x ≥ 2"
      ]
    }
  },
  {
    "id": "m-fa-9",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 2,
    "questionNumber": "9",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Describe the transformation: g(x) = (x − 3)² + 2 compared with f(x) = x²",
      "answer": "Translation 3 units right and 2 units up."
    },
    "ru": {
      "question": "Опиши преобразование: g(x) = (x − 3)² + 2 по сравнению с f(x) = x²",
      "answer": "Сдвиг на 3 вправо и на 2 вверх."
    }
  },
  {
    "id": "m-fa-10",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 3,
    "questionNumber": "1",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Make x the subject: y = 3x + 5",
      "answer": "x = (y − 5) / 3"
    },
    "ru": {
      "question": "Вырази x: y = 3x + 5",
      "answer": "x = (y − 5) / 3"
    }
  },
  {
    "id": "m-fa-11",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 3,
    "questionNumber": "2",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "y is directly proportional to x. When x = 4, y = 20. Find y when x = 7.",
      "answer": "y = 35",
      "workingSteps": [
        "y = kx → 20 = 4k → k = 5",
        "y = 5 × 7 = 35"
      ]
    },
    "ru": {
      "question": "y прямо пропорциональна x. Когда x = 4, y = 20. Найди y при x = 7.",
      "answer": "y = 35",
      "workingSteps": [
        "y = kx → 20 = 4k → k = 5",
        "y = 5 × 7 = 35"
      ]
    }
  },
  {
    "id": "m-fa-12",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 3,
    "questionNumber": "3",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "y is inversely proportional to x. When x = 6, y = 4. Find y when x = 3.",
      "answer": "y = 8",
      "workingSteps": [
        "y = k/x → 4 = k/6 → k = 24",
        "y = 24/3 = 8"
      ]
    },
    "ru": {
      "question": "y обратно пропорциональна x. Когда x = 6, y = 4. Найди y при x = 3.",
      "answer": "y = 8",
      "workingSteps": [
        "y = k/x → 4 = k/6 → k = 24",
        "y = 24/3 = 8"
      ]
    }
  },
  {
    "id": "m-fa-13",
    "topicId": "functions-algebra",
    "source": "standard-mp",
    "chapter": 3,
    "questionNumber": "4",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the y-intercept of y = 2x² − 3x − 5.",
      "answer": "(0, −5)"
    },
    "ru": {
      "question": "Найди точку пересечения графика y = 2x² − 3x − 5 с осью y.",
      "answer": "(0, −5)"
    }
  },
  {
    "id": "m-fa-ext-1",
    "topicId": "functions-algebra",
    "source": "extended-mp",
    "chapter": 3,
    "questionNumber": "Ext 1",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Simplify: (x² − 9) / (x² + 5x + 6)",
      "answer": "(x−3)/(x+2), with x≠−3 and x≠−2",
      "workingSteps": [
        "Original denominator=(x+2)(x+3), so x≠−2,−3.",
        "Numerator=(x−3)(x+3).",
        "Cancel the nonzero factor x+3; retain both excluded values."
      ]
    },
    "ru": {
      "question": "Упрости: (x² − 9) / (x² + 5x + 6)",
      "answer": "(x−3)/(x+2), при x≠−3 и x≠−2",
      "workingSteps": [
        "Исходный знаменатель=(x+2)(x+3), поэтому x≠−2,−3.",
        "Числитель=(x−3)(x+3).",
        "Сократите ненулевой множитель x+3, сохранив оба ограничения."
      ]
    }
  },
  {
    "id": "m-fa-ext-2",
    "topicId": "functions-algebra",
    "source": "extended-mp",
    "chapter": 3,
    "questionNumber": "Ext 2",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Find the vertical asymptote: y = (2x + 1) / (x − 3)",
      "answer": "x=3: the denominator tends to zero while the numerator tends to 7, so values are unbounded."
    },
    "ru": {
      "question": "Найди вертикальную асимптоту: y = (2x + 1) / (x − 3)",
      "answer": "x=3: знаменатель стремится к нулю, а числитель к 7, поэтому значения неограниченны."
    }
  },
  {
    "id": "m-fa-ext-3",
    "topicId": "functions-algebra",
    "source": "extended-mp",
    "chapter": 3,
    "questionNumber": "Ext 3",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Solve: 1/x + 1/(x + 1) = 1/2",
      "answer": "x=(3±√17)/2",
      "workingSteps": [
        "x≠0; x≠−1",
        "Common denominator 2x(x+1)",
        "2(x + 1) + 2x = x(x + 1)",
        "4x + 2 = x² + x",
        "x² − 3x − 2 = 0",
        "x = (3 ± √(9 + 8))/2 = (3 ± √17)/2",
        "Both candidates satisfy the original equation and exclusions."
      ]
    },
    "ru": {
      "question": "Реши: 1/x + 1/(x + 1) = 1/2",
      "answer": "x=(3±√17)/2",
      "workingSteps": [
        "x≠0; x≠−1",
        "Общий знаменатель 2x(x+1)",
        "2(x + 1) + 2x = x(x + 1)",
        "4x + 2 = x² + x",
        "x² − 3x − 2 = 0",
        "x = (3 ± √(9 + 8))/2 = (3 ± √17)/2",
        "Оба кандидата удовлетворяют исходному уравнению и ограничениям."
      ]
    }
  },
  {
    "id": "m-fa-ric-1",
    "topicId": "functions-algebra",
    "source": "standard-ric",
    "chapter": 3,
    "questionNumber": "RIC 1",
    "difficulty": "standard",
    "criterion": "D",
    "en": {
      "question": "A water jet from a fountain follows the path y = −0.4x² + 2.4x where x and y are in metres. Find the maximum height and the horizontal distance at which it lands.",
      "answer": "Maximum height: 3.6 m at x = 3 m; Lands at x = 6 m.",
      "workingSteps": [
        "Vertex at x = −b/(2a) = −2.4/(−0.8) = 3",
        "y(3) = −0.4(9) + 2.4(3) = 3.6",
        "Land: y = 0 → −0.4x(x − 6) = 0 → x = 0 or x = 6"
      ]
    },
    "ru": {
      "question": "Струя воды из фонтана движется по пути y = −0.4x² + 2.4x (x, y в метрах). Найди максимальную высоту и расстояние приземления.",
      "answer": "Макс. высота: 3.6 м при x = 3 м; Приземляется при x = 6 м.",
      "workingSteps": [
        "Vertex при x = −b/(2a) = −2.4/(−0.8) = 3",
        "y(3) = −0.4(9) + 2.4(3) = 3.6",
        "Приземление: y = 0 → −0.4x(x − 6) = 0 → x = 0 или x = 6"
      ]
    }
  },
  {
    "id": "m-seq-1",
    "topicId": "sequences",
    "source": "standard-mp",
    "chapter": 8,
    "questionNumber": "1",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the n-th term of the linear sequence: 3, 7, 11, 15, ...",
      "answer": "u_n = 4n − 1",
      "workingSteps": [
        "Common difference d = 4",
        "u_1 = 3 = 4(1) − 1",
        "u_n = 4n − 1"
      ]
    },
    "ru": {
      "question": "Найди формулу n-го члена линейной последовательности: 3, 7, 11, 15, ...",
      "answer": "u_n = 4n − 1",
      "workingSteps": [
        "Разность d = 4",
        "u_1 = 3 = 4(1) − 1",
        "u_n = 4n − 1"
      ]
    }
  },
  {
    "id": "m-seq-2",
    "topicId": "sequences",
    "source": "standard-mp",
    "chapter": 8,
    "questionNumber": "2",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the n-th term of the linear sequence: 100, 95, 90, 85, ...",
      "answer": "u_n = 105 − 5n"
    },
    "ru": {
      "question": "Найди формулу n-го члена линейной последовательности: 100, 95, 90, 85, ...",
      "answer": "u_n = 105 − 5n"
    }
  },
  {
    "id": "m-seq-3",
    "topicId": "sequences",
    "source": "standard-mp",
    "chapter": 8,
    "questionNumber": "3",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the n-th term of the geometric sequence: 2, 6, 18, 54, ...",
      "answer": "u_n = 2 · 3^(n−1)",
      "workingSteps": [
        "Common ratio r = 3",
        "u_1 = 2",
        "u_n = a · r^(n−1) = 2 · 3^(n−1)"
      ]
    },
    "ru": {
      "question": "Найди формулу n-го члена геометрической последовательности: 2, 6, 18, 54, ...",
      "answer": "u_n = 2 · 3^(n−1)",
      "workingSteps": [
        "Отношение r = 3",
        "u_1 = 2",
        "u_n = a · r^(n−1) = 2 · 3^(n−1)"
      ]
    }
  },
  {
    "id": "m-seq-4",
    "topicId": "sequences",
    "source": "standard-mp",
    "chapter": 8,
    "questionNumber": "4",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "For uₙ=2·3^(n−1), n≥1, find u₈.",
      "answer": "u_8 = 2 · 3^7 = 4374"
    },
    "ru": {
      "question": "Для uₙ=2·3^(n−1), n≥1, найдите u₈.",
      "answer": "u_8 = 2 · 3^7 = 4374"
    }
  },
  {
    "id": "m-seq-5",
    "topicId": "sequences",
    "source": "standard-mp",
    "chapter": 8,
    "questionNumber": "5",
    "difficulty": "standard",
    "criterion": "B",
    "en": {
      "question": "Pattern: each shape adds two more dots than the last. Shape 1 has 1 dot, shape 2 has 3, shape 3 has 5. Find a formula for shape n.",
      "answer": "u_n = 2n − 1"
    },
    "ru": {
      "question": "Паттерн: каждая фигура добавляет на 2 точки больше предыдущей. Фигура 1 — 1 точка, фигура 2 — 3, фигура 3 — 5. Найди формулу для фигуры n.",
      "answer": "u_n = 2n − 1"
    }
  },
  {
    "id": "m-seq-6",
    "topicId": "sequences",
    "source": "standard-mp",
    "chapter": 8,
    "questionNumber": "6",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "The 5th term of a linear sequence is 17, the 10th is 37. Find the n-th term.",
      "answer": "u_n = 4n − 3",
      "workingSteps": [
        "d = (37 − 17)/(10 − 5) = 4",
        "u_1 = 17 − 4·4 = 1",
        "u_n = 1 + (n − 1)·4 = 4n − 3"
      ]
    },
    "ru": {
      "question": "Пятый член линейной последовательности равен 17, десятый — 37. Найди n-й член.",
      "answer": "u_n = 4n − 3",
      "workingSteps": [
        "d = (37 − 17)/(10 − 5) = 4",
        "u_1 = 17 − 4·4 = 1",
        "u_n = 1 + (n − 1)·4 = 4n − 3"
      ]
    }
  },
  {
    "id": "m-seq-ext-1",
    "topicId": "sequences",
    "source": "extended-mp",
    "chapter": 8.1,
    "questionNumber": "Ext 1",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Find the sum to infinity: 16, 8, 4, 2, ...",
      "answer": "S∞ = 32",
      "workingSteps": [
        "r = 1/2 (|r| < 1 so converges)",
        "S∞ = a / (1 − r) = 16 / (1/2) = 32"
      ]
    },
    "ru": {
      "question": "Найди сумму бесконечного ряда: 16, 8, 4, 2, ...",
      "answer": "S∞ = 32",
      "workingSteps": [
        "r = 1/2 (|r| < 1 — сходится)",
        "S∞ = a / (1 − r) = 16 / (1/2) = 32"
      ]
    }
  },
  {
    "id": "m-seq-ext-2",
    "topicId": "sequences",
    "source": "extended-mp",
    "chapter": 8.1,
    "questionNumber": "Ext 2",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "A geometric series has first term 12 and sum to infinity 18. Find the common ratio.",
      "answer": "r = 1/3",
      "workingSteps": [
        "S∞ = a / (1 − r) → 18 = 12 / (1 − r)",
        "1 − r = 12/18 = 2/3",
        "r = 1/3"
      ]
    },
    "ru": {
      "question": "Геометрический ряд имеет первый член 12 и сумму 18. Найди отношение.",
      "answer": "r = 1/3",
      "workingSteps": [
        "S∞ = a / (1 − r) → 18 = 12 / (1 − r)",
        "1 − r = 12/18 = 2/3",
        "r = 1/3"
      ]
    }
  },
  {
    "id": "m-seq-ric-1",
    "topicId": "sequences",
    "source": "standard-ric",
    "chapter": 8,
    "questionNumber": "RIC 1",
    "difficulty": "standard",
    "criterion": "B",
    "en": {
      "question": "A cross has a central unit square and four arms. At stage n each arm has n squares beyond the centre. Stages 1,2,3 use 5,9,13 squares. (a) Find and justify uₙ. (b) Which stage uses 41 squares?",
      "answer": "(a) uₙ=1+4n: one centre plus n squares on each of four arms. (b) n=10."
    },
    "ru": {
      "question": "Крест состоит из центрального квадрата и четырёх лучей. На этапе n в каждом луче n квадратов, кроме центра. Этапы 1,2,3 используют 5,9,13 квадратов. (а) Найдите и обоснуйте uₙ. (б) Какой этап содержит 41 квадрат?",
      "answer": "(а) uₙ=1+4n: один центральный квадрат и по n квадратов в четырёх лучах. (б) n=10."
    }
  },
  {
    "id": "m-seq-7",
    "topicId": "sequences",
    "source": "standard-mp",
    "chapter": 8,
    "questionNumber": "7",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "The 3rd term of a geometric sequence is 12, the 5th is 48. Find u_1 and r (positive).",
      "answer": "u_1 = 3; r = 2",
      "workingSteps": [
        "u_3 = u_1 · r² = 12",
        "u_5 = u_1 · r⁴ = 48",
        "Divide: r² = 4 → r = 2",
        "u_1 = 12 / 4 = 3"
      ]
    },
    "ru": {
      "question": "Третий член геометрической последовательности — 12, пятый — 48. Найди u_1 и r (положительный).",
      "answer": "u_1 = 3; r = 2",
      "workingSteps": [
        "u_3 = u_1 · r² = 12",
        "u_5 = u_1 · r⁴ = 48",
        "Раздели: r² = 4 → r = 2",
        "u_1 = 12 / 4 = 3"
      ]
    }
  },
  {
    "id": "m-gt-1",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "1",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "A right triangle has legs 6 cm and 8 cm. Find the hypotenuse.",
      "answer": "10 cm",
      "workingSteps": [
        "c² = a² + b² = 36 + 64 = 100",
        "c = √100 = 10"
      ]
    },
    "ru": {
      "question": "У прямоугольного треугольника катеты 6 см и 8 см. Найди гипотенузу.",
      "answer": "10 см",
      "workingSteps": [
        "c² = a² + b² = 36 + 64 = 100",
        "c = √100 = 10"
      ]
    }
  },
  {
    "id": "m-gt-2",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "2",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "In a right triangle, the hypotenuse is 13 and one leg is 5. Find the other leg.",
      "answer": "12",
      "workingSteps": [
        "13² − 5² = 169 − 25 = 144",
        "√144 = 12"
      ]
    },
    "ru": {
      "question": "У прямоугольного треугольника гипотенуза 13, один катет 5. Найди другой катет.",
      "answer": "12",
      "workingSteps": [
        "13² − 5² = 169 − 25 = 144",
        "√144 = 12"
      ]
    }
  },
  {
    "id": "m-gt-3",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "3",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "In a right triangle, the opposite side is 4 and the hypotenuse is 8. Find the angle θ.",
      "answer": "θ = 30°",
      "workingSteps": [
        "sin θ = opp/hyp = 4/8 = 0.5",
        "θ = arcsin(0.5) = 30°"
      ]
    },
    "ru": {
      "question": "В прямоугольном треугольнике противолежащий катет 4, гипотенуза 8. Найди угол θ.",
      "answer": "θ = 30°",
      "workingSteps": [
        "sin θ = opp/hyp = 4/8 = 0.5",
        "θ = arcsin(0.5) = 30°"
      ]
    }
  },
  {
    "id": "m-gt-4",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "4",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find x: tan(40°) = x / 12, give x to 1 dp.",
      "answer": "x ≈ 10.1",
      "workingSteps": [
        "x = 12 · tan(40°) ≈ 12 · 0.8391",
        "x ≈ 10.07 → 10.1"
      ]
    },
    "ru": {
      "question": "Найди x: tan(40°) = x / 12, x с точностью до 1 знака.",
      "answer": "x ≈ 10.1",
      "workingSteps": [
        "x = 12 · tan(40°) ≈ 12 · 0.8391",
        "x ≈ 10.07 → 10.1"
      ]
    }
  },
  {
    "id": "m-gt-5",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "5",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the area of a sector with radius 6 cm and angle 60°. Leave the answer in terms of π.",
      "answer": "6π cm²",
      "workingSteps": [
        "A = (θ/360) · πr²",
        "= (60/360) · π · 36 = π · 6 = 6π"
      ]
    },
    "ru": {
      "question": "Найди площадь сектора с радиусом 6 см и углом 60°. Ответ в π.",
      "answer": "6π см²",
      "workingSteps": [
        "A = (θ/360) · πr²",
        "= (60/360) · π · 36 = π · 6 = 6π"
      ]
    }
  },
  {
    "id": "m-gt-6",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "6",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the arc length of a sector with radius 5 cm and angle 72°. To 3 sf.",
      "answer": "6.28 cm (2π cm)",
      "workingSteps": [
        "s = (θ/360) · 2πr",
        "= (72/360) · 2π · 5 = 0.2 · 10π = 2π ≈ 6.283"
      ]
    },
    "ru": {
      "question": "Найди длину дуги сектора с радиусом 5 см и углом 72°. До 3 знач. цифр.",
      "answer": "6.28 см (2π см)",
      "workingSteps": [
        "s = (θ/360) · 2πr",
        "= (72/360) · 2π · 5 = 0.2 · 10π = 2π ≈ 6.283"
      ]
    }
  },
  {
    "id": "m-gt-7",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "7",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "AB is a diameter of a circle; C lies on the circle and is distinct from A and B. Find ∠ACB.",
      "answer": "90° (angle in a semicircle)"
    },
    "ru": {
      "question": "AB — диаметр окружности; C лежит на окружности и отличается от A и B. Найдите ∠ACB.",
      "answer": "90° (угол в полукруге)"
    }
  },
  {
    "id": "m-gt-8",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "8",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Two chords AB and CD intersect at P inside a circle. AP = 6, PB = 4, CP = 8. Find PD.",
      "answer": "PD = 3",
      "workingSteps": [
        "Intersecting chord theorem: AP · PB = CP · PD",
        "6 · 4 = 8 · PD",
        "PD = 24/8 = 3"
      ]
    },
    "ru": {
      "question": "Две хорды AB и CD пересекаются в P внутри окружности. AP = 6, PB = 4, CP = 8. Найди PD.",
      "answer": "PD = 3",
      "workingSteps": [
        "Теорема о хордах: AP · PB = CP · PD",
        "6 · 4 = 8 · PD",
        "PD = 24/8 = 3"
      ]
    }
  },
  {
    "id": "m-gt-ext-1",
    "topicId": "geometry-trig",
    "source": "extended-mp",
    "chapter": 7,
    "questionNumber": "Ext 1",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Triangle ABC: a = 8, b = 6, angle C = 60°. Use cosine rule to find c.",
      "answer": "c ≈ 7.21",
      "workingSteps": [
        "c² = a² + b² − 2ab·cos(C)",
        "= 64 + 36 − 2·8·6·0.5",
        "= 100 − 48 = 52",
        "c = √52 ≈ 7.21"
      ]
    },
    "ru": {
      "question": "Треугольник ABC: a = 8, b = 6, угол C = 60°. По теореме косинусов найди c.",
      "answer": "c ≈ 7.21",
      "workingSteps": [
        "c² = a² + b² − 2ab·cos(C)",
        "= 64 + 36 − 2·8·6·0.5",
        "= 100 − 48 = 52",
        "c = √52 ≈ 7.21"
      ]
    }
  },
  {
    "id": "m-gt-ext-2",
    "topicId": "geometry-trig",
    "source": "extended-mp",
    "chapter": 7,
    "questionNumber": "Ext 2",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Find the area of a triangle with sides 7 cm and 9 cm and included angle 50°. Give 3 significant figures.",
      "answer": "≈ 24.1 cm²",
      "workingSteps": [
        "A = ½ · a · b · sin C",
        "= ½ · 7 · 9 · sin(50°) ≈ 31.5 · 0.766 ≈ 24.13"
      ]
    },
    "ru": {
      "question": "Найдите площадь треугольника со сторонами 7 см и 9 см и углом 50° между ними. Ответ дайте до 3 значащих цифр.",
      "answer": "≈ 24.1 см²",
      "workingSteps": [
        "A = ½ · a · b · sin C",
        "= ½ · 7 · 9 · sin(50°) ≈ 31.5 · 0.766 ≈ 24.13"
      ]
    }
  },
  {
    "id": "m-gt-ric-1",
    "topicId": "geometry-trig",
    "source": "extended-ric",
    "chapter": 7,
    "questionNumber": "RIC 1",
    "difficulty": "extended",
    "criterion": "D",
    "en": {
      "question": "On a flat map, from point P, a ship sails on a bearing of 060° for 15 km to Q, then changes to 150° for 20 km to R. Find the distance PR.",
      "answer": "≈ 25 km",
      "workingSteps": [
        "Angle PQR = 180° − (150° − 60°) = 90°",
        "PR² = 15² + 20² = 225 + 400 = 625",
        "PR = √625 = 25 km"
      ]
    },
    "ru": {
      "question": "На плоской карте из P корабль идёт по азимуту 060° 15 км до Q, затем по азимуту 150° ещё 20 км до R. Найдите PR.",
      "answer": "≈ 25 км",
      "workingSteps": [
        "Угол PQR = 180° − (150° − 60°) = 90°",
        "PR² = 15² + 20² = 225 + 400 = 625",
        "PR = √625 = 25 км"
      ]
    }
  },
  {
    "id": "m-gt-9",
    "topicId": "geometry-trig",
    "source": "standard-mp",
    "chapter": 7,
    "questionNumber": "9",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "A quadrilateral is inscribed in a circle. Opposite angles are 70° and x. Find x.",
      "answer": "x = 110° (cyclic quadrilateral: opposite angles sum to 180°)"
    },
    "ru": {
      "question": "Четырёхугольник вписан в окружность. Противоположные углы 70° и x. Найди x.",
      "answer": "x = 110° (сумма противоположных углов вписанного четырёхугольника = 180°)"
    }
  },
  {
    "id": "m-sp-1",
    "topicId": "stats-prob",
    "source": "standard-mp",
    "chapter": 6,
    "questionNumber": "1",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the median: 4, 7, 2, 9, 5, 1, 8",
      "answer": "Median = 5",
      "workingSteps": [
        "Sort: 1, 2, 4, 5, 7, 8, 9",
        "Middle value: 5"
      ]
    },
    "ru": {
      "question": "Найди медиану: 4, 7, 2, 9, 5, 1, 8",
      "answer": "Медиана = 5",
      "workingSteps": [
        "Упорядочим: 1, 2, 4, 5, 7, 8, 9",
        "Центральный член ряда: 5. Это медиана, а не среднее арифметическое."
      ]
    }
  },
  {
    "id": "m-sp-2",
    "topicId": "stats-prob",
    "source": "standard-mp",
    "chapter": 6,
    "questionNumber": "2",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "Find the IQR of 2,5,7,8,10,11,14,17,20 using medians of the two halves and excluding the overall median.",
      "answer": "IQR=9.5",
      "workingSteps": [
        "The overall median is 10; exclude it from both halves.",
        "Q1=(5+7)/2=6; Q3=(14+17)/2=15.5.",
        "IQR=15.5−6=9.5."
      ]
    },
    "ru": {
      "question": "Найдите IQR для 2,5,7,8,10,11,14,17,20: используйте медианы половин, исключив общую медиану.",
      "answer": "IQR=9.5",
      "workingSteps": [
        "Общая медиана 10; исключаем её из обеих половин.",
        "Q1=(5+7)/2=6; Q3=(14+17)/2=15.5.",
        "IQR=15.5−6=9.5."
      ]
    }
  },
  {
    "id": "m-sp-3",
    "topicId": "stats-prob",
    "source": "standard-mp",
    "chapter": 6,
    "questionNumber": "3",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "A dataset has quartiles Q1=12 and Q3=19. Which of the candidate values 5 and 35 lies beyond its 1.5·IQR fences?",
      "answer": "35 is an outlier (above 29.5 = Q3 + 1.5·IQR)",
      "workingSteps": [
        "IQR=19−12=7.",
        "Fences: 12−10.5=1.5 and 19+10.5=29.5.",
        "5 is inside; 35>29.5 is a potential outlier."
      ]
    },
    "ru": {
      "question": "У набора данных Q1=12 и Q3=19. Какое из проверяемых значений 5 и 35 лежит за границами 1.5·IQR?",
      "answer": "35 — выброс (выше 29.5 = Q3 + 1.5·IQR)",
      "workingSteps": [
        "IQR=19−12=7.",
        "Границы: 12−10.5=1.5 и 19+10.5=29.5.",
        "5 внутри; 35>29.5 — возможный выброс."
      ]
    }
  },
  {
    "id": "m-sp-4",
    "topicId": "stats-prob",
    "source": "standard-mp",
    "chapter": 6,
    "questionNumber": "4",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "A cumulative frequency curve shows that the 50th percentile is 24 and the 25th percentile is 18. Find the median and Q1.",
      "answer": "Median = 24; Q1 = 18."
    },
    "ru": {
      "question": "Кумулятивная частота: 50-й процентиль = 24, 25-й = 18. Найди медиану и Q1.",
      "answer": "Медиана = 24; Q1 = 18."
    }
  },
  {
    "id": "m-sp-5",
    "topicId": "stats-prob",
    "source": "standard-mp",
    "chapter": 9,
    "questionNumber": "1",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "P(A) = 0.4, P(B) = 0.5, and A and B are independent. Find P(A ∩ B) and P(A ∪ B).",
      "answer": "P(A ∩ B) = 0.2; P(A ∪ B) = 0.7",
      "workingSteps": [
        "Independent: P(A ∩ B) = P(A) · P(B) = 0.4 · 0.5 = 0.2",
        "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.4 + 0.5 − 0.2 = 0.7"
      ]
    },
    "ru": {
      "question": "P(A) = 0.4, P(B) = 0.5, A и B независимы. Найди P(A ∩ B) и P(A ∪ B).",
      "answer": "P(A ∩ B) = 0.2; P(A ∪ B) = 0.7",
      "workingSteps": [
        "Независимые: P(A ∩ B) = P(A) · P(B) = 0.4 · 0.5 = 0.2",
        "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.7"
      ]
    }
  },
  {
    "id": "m-sp-6",
    "topicId": "stats-prob",
    "source": "standard-mp",
    "chapter": 9,
    "questionNumber": "2",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "A bag contains 4 red and 6 blue balls. Two are drawn without replacement. Find P(both red). Each remaining ball is equally likely on each draw.",
      "answer": "2/15",
      "workingSteps": [
        "P(1st red) = 4/10",
        "P(2nd red | 1st red) = 3/9",
        "Multiply: 4/10 · 3/9 = 12/90 = 2/15"
      ]
    },
    "ru": {
      "question": "В мешке 4 красных и 6 синих шаров. Достали два без возврата. Найди P(оба красных). При каждом извлечении все оставшиеся шары равновероятны.",
      "answer": "2/15",
      "workingSteps": [
        "P(1-й красный) = 4/10",
        "P(2-й красный | 1-й красный) = 3/9",
        "Перемножь: 4/10 · 3/9 = 12/90 = 2/15"
      ]
    }
  },
  {
    "id": "m-sp-7",
    "topicId": "stats-prob",
    "source": "standard-mp",
    "chapter": 6,
    "questionNumber": "5",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "A histogram shows class widths of 5 and frequency densities 2, 3, 1.4, 0.6. Find the total frequency.",
      "answer": "35",
      "workingSteps": [
        "Frequencies = width × density: 10, 15, 7, 3. Total = 35 observations."
      ]
    },
    "ru": {
      "question": "У гистограммы ширина классов 5 и плотности частот 2, 3, 1.4, 0.6. Найди общую частоту.",
      "answer": "35",
      "workingSteps": [
        "Частота = ширина × плотность: 10, 15, 7, 3. Всего 35 наблюдений."
      ]
    }
  },
  {
    "id": "m-sp-ext-1",
    "topicId": "stats-prob",
    "source": "extended-mp",
    "chapter": 6,
    "questionNumber": "Ext 1",
    "difficulty": "extended",
    "criterion": "A",
    "en": {
      "question": "Treat 4,6,8,10,12 as a complete population. Find its population standard deviation to 2 decimal places.",
      "answer": "σ ≈ 2.83",
      "workingSteps": [
        "Mean = 8",
        "Variance = ((−4)² + (−2)² + 0² + 2² + 4²)/5 = (16+4+0+4+16)/5 = 8",
        "σ = √8 ≈ 2.83"
      ]
    },
    "ru": {
      "question": "Считайте 4,6,8,10,12 полной совокупностью. Найдите её стандартное отклонение с делением на N, до 2 знаков после запятой.",
      "answer": "σ ≈ 2.83",
      "workingSteps": [
        "Среднее = 8",
        "Дисперсия = ((−4)² + (−2)² + 0² + 2² + 4²)/5 = (16+4+0+4+16)/5 = 8",
        "σ = √8 ≈ 2.83"
      ]
    }
  },
  {
    "id": "m-sp-ric-1",
    "topicId": "stats-prob",
    "source": "standard-ric",
    "chapter": 6,
    "questionNumber": "RIC 1",
    "difficulty": "standard",
    "criterion": "D",
    "en": {
      "question": "Battery life for 50 phones has cumulative frequencies: at 10 h: 5; 15 h: 20; 20 h: 40; 25 h: 48; 30 h: 50. Use straight-line interpolation to estimate median and IQR.",
      "answer": "Median≈16.25 h; IQR≈6.875 h.",
      "workingSteps": [
        "Median target=25: 15+(25−20)/(40−20)·5=16.25 h.",
        "Q1 target=12.5: 10+(12.5−5)/(20−5)·5=12.5 h.",
        "Q3 target=37.5: 15+(37.5−20)/(40−20)·5=19.375 h.",
        "IQR≈19.375−12.5=6.875 h; estimates assume uniform spread in each interval."
      ]
    },
    "ru": {
      "question": "Накопленные частоты времени работы 50 телефонов: при 10 ч: 5; 15 ч: 20; 20 ч: 40; 25 ч: 48; 30 ч: 50. Линейной интерполяцией оцените медиану и IQR.",
      "answer": "Медиана≈16.25 ч; IQR≈6.875 ч.",
      "workingSteps": [
        "Уровень медианы=25: 15+(25−20)/(40−20)·5=16.25 ч.",
        "Уровень Q1=12.5: 10+(12.5−5)/(20−5)·5=12.5 ч.",
        "Уровень Q3=37.5: 15+(37.5−20)/(40−20)·5=19.375 ч.",
        "IQR≈19.375−12.5=6.875 ч; предполагается равномерность внутри интервалов."
      ]
    }
  },
  {
    "id": "m-sp-8",
    "topicId": "stats-prob",
    "source": "standard-mp",
    "chapter": 9,
    "questionNumber": "3",
    "difficulty": "standard",
    "criterion": "A",
    "en": {
      "question": "A pie chart of 1200 students shows that 30% study French. How many study French? What angle on the pie chart represents French?",
      "answer": "360 students; 108°",
      "workingSteps": [
        "30% × 1200 = 360",
        "30% × 360° = 108°"
      ]
    },
    "ru": {
      "question": "Круговая диаграмма 1200 учеников показывает, что 30% изучают французский. Сколько студентов? Какой угол сектора?",
      "answer": "360 учеников; 108°",
      "workingSteps": [
        "30% × 1200 = 360",
        "30% × 360° = 108°"
      ]
    }
  }
];

export function getProblemsForTopic(topicId: MathTopicId): MathProblem[] {
  return ALL_MATH_PROBLEMS.filter((p) => p.topicId === topicId);
}

export function getRICProblems(): MathProblem[] {
  return ALL_MATH_PROBLEMS.filter((p) => p.source === 'standard-ric' || p.source === 'extended-ric');
}
