import type { DefinitionReview } from '../components/content/definitionReview';

export const FRENCH_REVIEWS: Record<string, DefinitionReview> = {
  "gender": {
    "englishTerm": "Grammatical gender",
    "russianTerm": "Грамматический род",
    "contrast": {
      "en": "Grammatical gender is not the same as sex. Une personne is feminine even when it describes a man, so the adjective agrees in the feminine: Mon voisin est une personne très gentille (My neighbour is a very kind person).",
      "ru": "Грамматический род — не пол. Слово «une personne» женского рода, поэтому прилагательное тоже женское, даже если речь о мужчине. Пример: «Mon voisin est une personne très gentille» (мой сосед — очень добрый человек)."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/no3.html",
        "section": "Gender: masculine and feminine",
        "language": "en"
      }
    ]
  },
  "plurals": {
    "englishTerm": "Number and plural formation",
    "russianTerm": "Число и образование множественного числа",
    "contrast": {
      "en": "Un cheval becomes des chevaux, and un bateau becomes des bateaux.",
      "ru": "Например, «un cheval» → «des chevaux», «un bateau» → «des bateaux»."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/no2.html",
        "section": "Regular formation and exceptions",
        "language": "en"
      }
    ]
  },
  "adjectives": {
    "englishTerm": "Adjective agreement",
    "russianTerm": "Согласование прилагательных",
    "contrast": {
      "en": "Some agreement differences are visible only in writing: joli (masculine) and jolie (feminine) sound the same, so the spelling must match the noun.",
      "ru": "Некоторые различия согласования видны только на письме: joli (мужской род) и jolie (женский род) звучат одинаково, поэтому написание должно соответствовать существительному."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/adj2.html",
        "section": "Agreement and irregular feminine forms",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "comparison",
      "title": {
        "en": "Agreement in the noun phrase",
        "ru": "Согласование в именной группе"
      },
      "items": [
        {
          "label": {
            "en": "un petit livre",
            "ru": "un petit livre"
          },
          "detail": {
            "en": "Masculine singular noun and adjective",
            "ru": "Существительное и прилагательное: муж. ед."
          }
        },
        {
          "label": {
            "en": "une petite table",
            "ru": "une petite table"
          },
          "detail": {
            "en": "Feminine singular: petite",
            "ru": "Жен. ед.: petite"
          }
        },
        {
          "label": {
            "en": "des petites tables",
            "ru": "des petites tables"
          },
          "detail": {
            "en": "In this regular example, the plural adds a written -s, which is usually silent.",
            "ru": "В этом регулярном примере во множественном числе добавляется написанное -s, которое обычно не произносится."
          }
        }
      ],
      "caption": {
        "en": "Most adjectives follow the regular pattern: the feminine adds -e, and the plural adds -s. Belle (the feminine of beau) is an irregular form; heureux changes -eux to -euse in the feminine.",
        "ru": "Большинство прилагательных следуют обычной схеме: женский род добавляет -e, множественное число — -s. «Belle» (женская форма от «beau») — особая форма; у «heureux» в женском роде -eux меняется на -euse."
      }
    }
  },
  "negation": {
    "englishTerm": "Negation",
    "russianTerm": "Отрицание",
    "contrast": {
      "en": "Je n'ai mangé pas is wrong: in a compound tense, pas comes after the auxiliary.",
      "ru": "«Je n'ai mangé pas» — ошибка: в сложном времени «pas» стоит после вспомогательного глагола."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/neg1.html",
        "section": "Ne…pas and omission of ne",
        "language": "en"
      }
    ]
  },
  "questions": {
    "englishTerm": "Interrogative constructions",
    "russianTerm": "Вопросительные конструкции",
    "contrast": {
      "en": "Est-ce que and inversion both make a question, so do not combine them: write Est-ce que tu viens ? or Viens-tu ?, never Est-ce que viens-tu ?",
      "ru": "«Est-ce que» и инверсия («Viens-tu ?») уже делают предложение вопросом, поэтому их не соединяют. Пиши «Est-ce que tu viens ?» или «Viens-tu ?», но не «Est-ce que viens-tu ?»."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/int3.html",
        "section": "Questions with subject/verb inversion: inversion; addition of -t-; compound tenses (sections 1, 2 and 4)",
        "language": "en"
      }
    ]
  },
  "articles": {
    "englishTerm": "Definite, indefinite and partitive articles",
    "russianTerm": "Определённые, неопределённые и частичные артикли",
    "contrast": {
      "en": "The definite article stays: Je n'aime pas le pain.",
      "ru": "Определённый артикль остаётся: «Je n'aime pas le pain»."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/det5.html",
        "section": "Partitive articles and negation",
        "language": "en"
      },
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/det4.html",
        "section": "Indefinite articles",
        "language": "en"
      },
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/det2.html",
        "section": "Definite articles",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "comparison",
      "title": {
        "en": "What the article contributes",
        "ru": "Что передаёт артикль"
      },
      "items": [
        {
          "label": {
            "en": "un pain",
            "ru": "un pain"
          },
          "detail": {
            "en": "A loaf: one unspecified countable item",
            "ru": "Буханка: неопределённый исчисляемый предмет"
          }
        },
        {
          "label": {
            "en": "du pain",
            "ru": "du pain"
          },
          "detail": {
            "en": "Bread: an unspecified amount",
            "ru": "Хлеб: неопределённое количество"
          }
        },
        {
          "label": {
            "en": "le pain",
            "ru": "le pain"
          },
          "detail": {
            "en": "Identified bread, or bread as a class",
            "ru": "Конкретный, известный собеседникам хлеб или хлеб вообще"
          }
        }
      ],
      "caption": {
        "en": "Choose the article that fits the meaning you intend and the context of the sentence.",
        "ru": "Выбирай артикль по смыслу, который хочешь передать, и по контексту предложения."
      }
    }
  },
  "present": {
    "englishTerm": "Présent: present indicative",
    "russianTerm": "Présent: настоящее изъявительное",
    "contrast": {
      "en": "The French present may translate as I speak or I am speaking. It does not encode the same contrast as English simple versus progressive.",
      "ru": "Французское «présent» может переводиться и как «я говорю», и как «я говорю сейчас». Оно не передаёт того же различия, что английские времена (simple и progressive)."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/ver1.html",
        "section": "-er verbs, present tense",
        "language": "en"
      }
    ]
  },
  "past": {
    "englishTerm": "Passé composé",
    "russianTerm": "Сложное прошедшее",
    "contrast": {
      "en": "Passé composé presents a past event as a whole; imparfait commonly presents background, a habit or an action in progress. Duration alone does not decide the choice.",
      "ru": "«Сложное прошедшее (passé composé)» показывает прошлое событие целиком; «имперфект (imparfait)» часто показывает фон, привычку или действие в процессе. Выбор зависит от смысла, а не от одной только длительности."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/tap2.html",
        "section": "Uses and formation",
        "language": "en"
      },
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/tap3.html",
        "section": "Auxiliary choice and agreement",
        "language": "en"
      },
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/tap6.html",
        "section": "Passé composé versus imparfait",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "comparison",
      "title": {
        "en": "Two views of a past scene",
        "ru": "Два взгляда на прошлую сцену"
      },
      "items": [
        {
          "label": {
            "en": "Il pleuvait…",
            "ru": "Il pleuvait…"
          },
          "detail": {
            "en": "Imparfait: rain is the background.",
            "ru": "Имперфект (imparfait): дождь — фон."
          }
        },
        {
          "label": {
            "en": "…quand je suis sorti.",
            "ru": "…quand je suis sorti."
          },
          "detail": {
            "en": "Passé composé: leaving is a whole event.",
            "ru": "Сложное прошедшее (passé composé): выход — событие целиком."
          }
        }
      ],
      "caption": {
        "en": "Example: “Il pleuvait quand je suis sorti” (“It was raining when I went out”).",
        "ru": "Пример: «Il pleuvait quand je suis sorti» («Шёл дождь, когда я вышел»)."
      }
    }
  },
  "future": {
    "englishTerm": "Futur simple and futur proche",
    "russianTerm": "Простое будущее (futur simple) и ближайшее будущее (futur proche)",
    "contrast": {
      "en": "Futur simple is a single verb form; futur proche is the present tense of aller plus an infinitive. Proche does not fix an exact number of minutes or days.",
      "ru": "«Futur simple» — одна форма глагола; «futur proche» — настоящее время «aller» + инфинитив. «Proche» не задаёт точного числа минут или дней."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/taf2.html",
        "section": "Simple future regular formation",
        "language": "en"
      },
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/virr4.html",
        "section": "Aller and immediate future",
        "language": "en"
      }
    ]
  },
  "subjunctive": {
    "englishTerm": "Subjunctive mood",
    "russianTerm": "Сослагательное наклонение (subjonctif)",
    "contrast": {
      "en": "Mood is not the same as tense, and not every opinion needs the subjunctive: je pense qu'il a raison (indicative), but je ne pense pas qu'il ait raison (subjunctive).",
      "ru": "Наклонение — не то же, что время. Не каждое мнение требует сослагательного: «je pense qu'il a raison» (изъявительное), но «je ne pense pas qu'il ait raison» (сослагательное)."
    },
    "sources": [
      {
        "title": "TV5MONDE — Le subjonctif",
        "url": "https://apprendre.tv5monde.com/fr/aides/grammaire-le-subjonctif",
        "section": "Formation du subjonctif",
        "language": "fr"
      },
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/tas1.html",
        "section": "Regular subjunctive and stem changes",
        "language": "en"
      }
    ]
  },
  "culture": {
    "englishTerm": "Francophone / Francophonie",
    "russianTerm": "Франкоязычный мир / Международная организация франкофонии",
    "sources": [
      {
        "title": "OIF — La Francophonie en bref",
        "url": "https://www.francophonie.org/la-francophonie-en-bref-754",
        "section": "Language community and institutions",
        "language": "fr"
      }
    ]
  },
  "vocabulary": {
    "englishTerm": "Contextual vocabulary gloss",
    "russianTerm": "Контекстный перевод слова",
    "contrast": {
      "en": "Learn each word with its article and grammatical form. One Russian verb can have several French equivalents: ‘to welcome guests’ is accueillir, but ‘to meet a friend’ is rencontrer. A collège is not a Russian college; it is a lower secondary school for pupils aged about 11 to 15.",
      "ru": "Учи каждое слово вместе с артиклем и грамматической формой. Одному русскому глаголу могут соответствовать разные французские глаголы: «встречать гостей» — «accueillir», «встретить друга» — «rencontrer». «Collège» — не колледж: это ступень школы для учеников примерно от 11 до 15 лет."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/no3.html",
        "section": "Noun gender",
        "language": "en"
      },
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/det2.html",
        "section": "Definite articles and general reference",
        "language": "en"
      }
    ]
  },
  "register": {
    "englishTerm": "Register and address",
    "russianTerm": "Регистр и обращение",
    "contrast": {
      "en": "Tu addresses one familiar person; vous addresses several people, or one person politely. English you covers both, so choose the form by who the reader is.",
      "ru": "Tu — к одному знакомому; vous — к нескольким или вежливо к одному. Английское you не различает эти формы, поэтому выбирай по адресату."
    },
    "sources": [
      {
        "title": "University of Texas — Tex’s French Grammar",
        "url": "https://laits.utexas.edu/tex/gr/pro1.html",
        "section": "Subject pronouns",
        "language": "en"
      }
    ]
  },
  "textTypes.discours": {
    "englishTerm": "Le discours (Speech)",
    "russianTerm": "Le discours (выступление)",
    "sources": [
      {
        "title": "Merriam-Webster — speech",
        "url": "https://www.merriam-webster.com/dictionary/speech",
        "section": "Relevant noun sense",
        "language": "en"
      }
    ]
  },
  "textTypes.article": {
    "englishTerm": "L'article (Article)",
    "russianTerm": "L'article (статья)",
    "sources": [
      {
        "title": "Purdue OWL — The inverted pyramid",
        "url": "https://owl.purdue.edu/owl/subject_specific_writing/journalism_and_journalistic_writing/the_inverted_pyramid.html",
        "section": "Lead and organisation of a news report",
        "language": "en"
      }
    ]
  },
  "textTypes.lettre": {
    "englishTerm": "La lettre officielle (Formal letter)",
    "russianTerm": "La lettre officielle — официальное (деловое) письмо",
    "sources": [
      {
        "title": "Projet Voltaire — Formules de politesse",
        "url": "https://www.projet-voltaire.fr/ressources/formule-de-politesse-dans-un-e-mail/",
        "section": "Salutations, register and closing formulas",
        "language": "fr"
      }
    ]
  },
  "textTypes.blog": {
    "englishTerm": "Le blog (Blog post)",
    "russianTerm": "Le blog (блог)",
    "sources": [
      {
        "title": "Merriam-Webster — blog",
        "url": "https://www.merriam-webster.com/dictionary/blog",
        "section": "Relevant noun sense",
        "language": "en"
      }
    ]
  },
  "textTypes.courriel": {
    "englishTerm": "Le courriel / l'email",
    "russianTerm": "Электронное письмо",
    "sources": [
      {
        "title": "Projet Voltaire — Formules de politesse",
        "url": "https://www.projet-voltaire.fr/ressources/formule-de-politesse-dans-un-e-mail/",
        "section": "Salutations, register and closing formulas",
        "language": "fr"
      }
    ]
  }
};
