import type { DefinitionReview } from '../components/content/definitionReview';
export const geographyReviews: Record<string, DefinitionReview> = {
  "tectonics": {
    "englishTerm": "Plate tectonics",
    "russianTerm": "Тектоника плит",
    "contrast": {
      "en": "Plates contain crust and uppermost mantle; crust alone is not a plate.",
      "ru": "Плита включает кору и верхнюю мантию; одна кора не образует плиту."
    },
    "sources": [
      {
        "title": "Steven Earle — Physical Geology, 2nd edition (BCcampus)",
        "url": "https://opentextbc.ca/physicalgeology2ed/chapter/1-5-fundamentals-of-plate-tectonics/",
        "language": "en",
        "section": "1.5 Fundamentals of plate tectonics; Figure 1.5.1"
      },
      {
        "title": "Steven Earle — Physical Geology, 2nd edition",
        "url": "https://opentextbc.ca/physicalgeology2ed/chapter/10-5-mechanisms-for-plate-motion/",
        "section": "10.5 Mechanisms for plate motion; ridge push and slab pull",
        "language": "en"
      },
      {
        "title": "Фоксфорд.Учебник — Земная кора и литосфера",
        "url": "https://foxford.ru/wiki/geografiya/zemnaya-kora-i-litosfera",
        "section": "Литосфера и земная кора",
        "language": "ru"
      }
    ]
  },
  "urbanisation": {
    "englishTerm": "Urbanisation",
    "russianTerm": "Урбанизация",
    "contrast": {
      "en": "An increasing urban population is not necessarily an increasing urban share.",
      "ru": "Рост числа горожан не обязательно означает рост их доли."
    },
    "sources": [
      {
        "title": "Фоксфорд.Учебник — Городское население и урбанизация",
        "url": "https://foxford.ru/wiki/geografiya/gorodskoye-naseleniye-rossii-urbanizatsiya",
        "language": "ru",
        "section": "Процесс урбанизации"
      }
    ]
  },
  "globalisation": {
    "englishTerm": "Globalisation",
    "russianTerm": "Глобализация",
    "contrast": {
      "en": "Cross-border connections and human development are different ideas.",
      "ru": "Трансграничные связи и человеческое развитие — разные понятия."
    },
    "sources": [
      {
        "title": "Фоксфорд.Учебник — Глобализация",
        "url": "https://foxford.ru/wiki/geografiya/globalizaciya-ponyatie-o-globalnyh-problemah",
        "language": "ru",
        "section": "Глобализация: экономические, политические и культурные связи"
      },
      {
        "title": "UNDP — What is human development?",
        "url": "https://hdr.undp.org/about/human-development",
        "section": "People, opportunities and choice; Measuring human development",
        "language": "en"
      }
    ]
  },
  "sustainable": {
    "englishTerm": "Sustainable development goals",
    "russianTerm": "Цели устойчивого развития",
    "contrast": {
      "en": "Goals, measurable targets and indicators have distinct roles.",
      "ru": "Цели, конкретные задачи и показатели выполняют разные роли."
    },
    "sources": [
      {
        "title": "United Nations — The 17 Goals",
        "url": "https://sdgs.un.org/goals",
        "language": "en",
        "section": "History; Goals 2, 6, 7, 12 and 17"
      },
      {
        "title": "Фоксфорд.Учебник — Стратегия устойчивого развития",
        "url": "https://foxford.ru/wiki/geografiya/strategiya-ustojchivogo-razvitiya",
        "language": "ru",
        "section": "Определение; принципы и направления устойчивого развития"
      }
    ]
  },
  "biomes": {
    "englishTerm": "Biome",
    "russianTerm": "Биом",
    "contrast": {
      "en": "A biome groups ecological communities over large areas; an ecosystem describes organisms and their physical environment interacting at a chosen scale.",
      "ru": "Биом объединяет экологические сообщества обширных территорий; экосистема описывает взаимодействие организмов и среды в выбранном масштабе."
    },
    "sources": [
      {
        "title": "OpenStax — Biology 2e",
        "url": "https://openstax.org/books/biology-2e/pages/44-3-terrestrial-biomes",
        "section": "44.3 Terrestrial biomes",
        "language": "en"
      }
    ]
  },
  "development": {
    "englishTerm": "Human development",
    "russianTerm": "Человеческое развитие",
    "contrast": {
      "en": "Income is one means of improving life; GDP alone does not measure health, learning, choices or inequality.",
      "ru": "Доход — одно из средств улучшения жизни; ВВП сам по себе не измеряет здоровье, образование, свободу выбора и неравенство."
    },
    "sources": [
      {
        "title": "UNDP — What is human development?",
        "url": "https://hdr.undp.org/about/human-development",
        "section": "People, opportunities and choice; Measuring human development",
        "language": "en"
      }
    ]
  },
  "bradshaw": {
    "englishTerm": "Discharge and velocity",
    "russianTerm": "Расход и скорость течения",
    "contrast": {
      "en": "Q = A × mean velocity. Discharge is volume per time (m³/s); velocity is distance per time (m/s).",
      "ru": "Q = A × средняя скорость. Расход — объём за время (м³/с); скорость — путь за время (м/с)."
    },
    "sources": [
      {
        "title": "OpenStax — College Physics 2e",
        "url": "https://openstax.org/books/college-physics-2e/pages/12-1-flow-rate-and-its-relation-to-velocity",
        "language": "en",
        "section": "12.1 Flow rate and its relation to velocity; equations 12.1–12.3"
      },
      {
        "title": "Steven Earle — Physical Geology, 2nd edition (BCcampus)",
        "url": "https://opentextbc.ca/physicalgeology2ed/chapter/13-2-drainage-basins/",
        "language": "en",
        "section": "13.2 Drainage basins; stream gradients"
      }
    ]
  },
  "hydrograph": {
    "englishTerm": "Storm hydrograph; lag time",
    "russianTerm": "Паводочный гидрограф; время запаздывания",
    "contrast": {
      "en": "A hydrograph plots discharge against time; lag compares the timing of the rainfall and discharge peaks.",
      "ru": "Гидрограф показывает расход во времени; запаздывание сравнивает моменты пиков дождя и расхода."
    },
    "sources": [
      {
        "title": "OpenStax — College Physics 2e",
        "url": "https://openstax.org/books/college-physics-2e/pages/12-1-flow-rate-and-its-relation-to-velocity",
        "language": "en",
        "section": "12.1 Flow rate and its relation to velocity; equations 12.1–12.3"
      },
      {
        "title": "Steven Earle — Physical Geology, 2nd edition (BCcampus)",
        "url": "https://opentextbc.ca/physicalgeology2ed/chapter/13-5-flooding/",
        "language": "en",
        "section": "13.5 Flooding; flood plains, snowmelt and reducing losses"
      }
    ],
    "model": {
      "en": "The numerical curve is an authored teaching scenario, not a fitted model for any catchment.",
      "ru": "Численная кривая — авторский учебный сценарий, а не модель, откалиброванная для реального бассейна."
    }
  },
  "butler": {
    "englishTerm": "Tourism area life cycle",
    "russianTerm": "Жизненный цикл туристской дестинации",
    "contrast": {
      "en": "Stagnation may be followed by several pathways; rejuvenation is not a guaranteed sixth stage.",
      "ru": "После стагнации возможны разные траектории; обновление не является обязательным шестым этапом."
    },
    "sources": [
      {
        "title": "R. W. Butler — Tourism Area Life Cycle (2011)",
        "url": "https://www.goodfellowpublishers.com/free_files/fileTALC.pdf#page=3",
        "section": "Introduction; Development of the Field; Framing the Field; Figure 1, PDF pp. 3–6",
        "language": "en"
      }
    ]
  },
  "enso": {
    "englishTerm": "El Niño–Southern Oscillation (ENSO)",
    "russianTerm": "Эль-Ниньо — Южное колебание (ЭНСО)",
    "contrast": {
      "en": "ENSO involves coupled ocean and atmospheric changes, not just a current. Rainfall effects are probabilistic.",
      "ru": "ЭНСО включает связанные изменения океана и атмосферы, а не только течение. Влияние на осадки вероятностное."
    },
    "sources": [
      {
        "title": "NOAA Ocean Service — What are El Niño and La Niña?",
        "url": "https://oceanservice.noaa.gov/facts/ninonina.html",
        "language": "en",
        "section": "Normal conditions; El Niño; La Niña"
      }
    ]
  },
  "antarctic": {
    "englishTerm": "Visitor management",
    "russianTerm": "Управление посещениями",
    "contrast": {
      "en": "Operator guidance, site restrictions and national permits serve different purposes.",
      "ru": "Рекомендации операторов, ограничения для участков и национальные разрешения выполняют разные функции."
    },
    "sources": [
      {
        "title": "IAATO — During your visit",
        "url": "https://iaato.org/visiting-antarctica/during-your-visit",
        "section": "Protect Antarctic Wildlife; Respect Protected Areas; Keep Antarctica Pristine",
        "language": "en"
      }
    ]
  },
  "boscastle": {
    "englishTerm": "Boscastle flash flood",
    "russianTerm": "Внезапное наводнение в Боскасле",
    "contrast": {
      "en": "Keep the event, location, measurement and reporting date with each number. Damage, recovery spending, displacement and homelessness are different measures.",
      "ru": "Сохраняй событие, место, показатель и дату отчёта при каждом числе. Ущерб, расходы на восстановление, перемещение и потеря жилья — разные показатели."
    },
    "sources": [
      {
        "title": "Met Office — Boscastle floods",
        "url": "https://weather.metoffice.gov.uk/learn-about/weather/case-studies/boscastle",
        "language": "en",
        "section": "Floods devastate village; event date in body (16 August 2004)"
      },
      {
        "title": "Environment Agency — Tenth anniversary of Boscastle and North Cornwall floods (14 August 2014)",
        "url": "https://www.gov.uk/government/news/tenth-anniversary-of-boscastle-and-north-cornwall-floods",
        "language": "en",
        "section": "Impacts, debris removal, investment and named defence works"
      }
    ]
  },
  "haiyan": {
    "englishTerm": "Typhoon Haiyan / Yolanda",
    "russianTerm": "Тайфун Хайян / Йоланда",
    "contrast": {
      "en": "Keep the event, location, measurement and reporting date with each number. Damage, recovery spending, displacement and homelessness are different measures.",
      "ru": "Сохраняй событие, место, показатель и дату отчёта при каждом числе. Ущерб, расходы на восстановление, перемещение и потеря жилья — разные показатели."
    },
    "sources": [
      {
        "title": "GIZ — Assessment of early warning efforts in Leyte for Typhoon Haiyan/Yolanda (2nd edition, May 2014)",
        "url": "https://www.preventionweb.net/files/36860_36860gizassessmentofearlywarningyol.pdf?startDownload=true#page=7",
        "language": "en",
        "section": "Executive summary; Introduction and background; Recommendations; PDF pp. 7–10"
      }
    ]
  },
  "bigDry": {
    "englishTerm": "Millennium Drought",
    "russianTerm": "«Засуха тысячелетия»",
    "contrast": {
      "en": "Keep the event, location, measurement and reporting date with each number. Damage, recovery spending, displacement and homelessness are different measures.",
      "ru": "Сохраняй событие, место, показатель и дату отчёта при каждом числе. Ущерб, расходы на восстановление, перемещение и потеря жилья — разные показатели."
    },
    "sources": [
      {
        "title": "Government of South Australia — Millennium Drought",
        "url": "https://www.environment.sa.gov.au/topics/water-and-river-murray/basin-river-murray-lakes-and-the-coorong/river-murray-droughts/millennium-drought",
        "language": "en",
        "section": "Overview; At the peak of the drought; Drought recovery; frequently asked questions"
      }
    ]
  }
};
