export interface VocabItem { fr: string; en: string; ru: string; }
export interface VocabTheme { id: string; titleEn: string; titleRu: string; items: VocabItem[]; }
export interface ConjugationTable { verb: string; ru: string; notes?: string; notesRu?: string; forms: [string, string, string, string, string, string]; }
export interface GrammarRule { id: string; titleEn: string; titleRu: string; body: string; bodyRu: string; }
export interface UsefulPhrase { fr: string; en: string; ru: string; context: string; }

export const VOCAB_THEMES: VocabTheme[] = [
  {
    "id": "greetings",
    "titleEn": "Greetings & basics",
    "titleRu": "Приветствия и основы",
    "items": [
      {
        "fr": "bonjour",
        "en": "hello / good morning / good afternoon",
        "ru": "здравствуйте / доброе утро / добрый день"
      },
      {
        "fr": "bonsoir",
        "en": "good evening",
        "ru": "добрый вечер"
      },
      {
        "fr": "salut",
        "en": "hi / bye (informal)",
        "ru": "привет / пока (неформально)"
      },
      {
        "fr": "au revoir",
        "en": "goodbye",
        "ru": "до свидания"
      },
      {
        "fr": "à bientôt",
        "en": "see you soon",
        "ru": "до скорого"
      },
      {
        "fr": "merci",
        "en": "thank you",
        "ru": "спасибо"
      },
      {
        "fr": "s'il vous plaît",
        "en": "please (s'il vous plaît; vous is used for polite address to one person or to several people)",
        "ru": "пожалуйста (s'il vous plaît; «vous» — вежливое обращение к одному человеку или ко многим)"
      },
      {
        "fr": "oui",
        "en": "yes",
        "ru": "да"
      },
      {
        "fr": "non",
        "en": "no",
        "ru": "нет"
      },
      {
        "fr": "excusez-moi",
        "en": "excuse me (excusez-moi; polite singular or plural address)",
        "ru": "извините (excusez-moi; вежливое обращение к одному человеку или ко многим)"
      },
      {
        "fr": "pardon",
        "en": "sorry (pardon: a minor apology, for example, after bumping into someone)",
        "ru": "простите (pardon: небольшое извинение, например, если задел прохожего)"
      },
      {
        "fr": "je m'appelle…",
        "en": "my name is…",
        "ru": "меня зовут…"
      }
    ]
  },
  {
    "id": "family",
    "titleEn": "Family",
    "titleRu": "Семья",
    "items": [
      {
        "fr": "la famille",
        "en": "family",
        "ru": "семья"
      },
      {
        "fr": "le père / la mère",
        "en": "father / mother",
        "ru": "отец / мать"
      },
      {
        "fr": "le frère / la sœur",
        "en": "brother / sister",
        "ru": "брат / сестра"
      },
      {
        "fr": "le grand-père / la grand-mère",
        "en": "grandfather / grandmother",
        "ru": "дедушка / бабушка"
      },
      {
        "fr": "l'oncle / la tante",
        "en": "uncle / aunt",
        "ru": "дядя / тётя"
      },
      {
        "fr": "le cousin / la cousine",
        "en": "cousin (m/f)",
        "ru": "двоюродный брат / сестра"
      },
      {
        "fr": "le fils / la fille",
        "en": "son / daughter; fille also means girl",
        "ru": "сын / дочь; fille также девочка, девушка"
      },
      {
        "fr": "l'enfant",
        "en": "child",
        "ru": "ребёнок"
      },
      {
        "fr": "le mari / la femme",
        "en": "husband / wife; femme also means woman",
        "ru": "муж / жена; femme также женщина"
      }
    ]
  },
  {
    "id": "school",
    "titleEn": "School",
    "titleRu": "Школа",
    "items": [
      {
        "fr": "l'école",
        "en": "school",
        "ru": "школа"
      },
      {
        "fr": "le collège",
        "en": "lower secondary school (France)",
        "ru": "коллеж (collège): первая ступень средней школы во Франции"
      },
      {
        "fr": "le lycée",
        "en": "upper secondary school (France)",
        "ru": "лицей (lycée): старшая ступень средней школы во Франции"
      },
      {
        "fr": "la classe",
        "en": "class / classroom",
        "ru": "класс"
      },
      {
        "fr": "le professeur",
        "en": "teacher",
        "ru": "учитель"
      },
      {
        "fr": "l'élève",
        "en": "pupil",
        "ru": "ученик"
      },
      {
        "fr": "le livre",
        "en": "book",
        "ru": "книга"
      },
      {
        "fr": "le cahier",
        "en": "exercise book",
        "ru": "тетрадь"
      },
      {
        "fr": "le stylo",
        "en": "pen",
        "ru": "ручка"
      },
      {
        "fr": "le devoir",
        "en": "duty / a task; les devoirs = homework",
        "ru": "обязанность / задание; les devoirs = домашние задания"
      },
      {
        "fr": "l'examen",
        "en": "exam",
        "ru": "экзамен"
      },
      {
        "fr": "la note",
        "en": "mark / grade at school; also a note",
        "ru": "оценка в школе; также заметка"
      }
    ]
  },
  {
    "id": "food",
    "titleEn": "Food & drink",
    "titleRu": "Еда и напитки",
    "items": [
      {
        "fr": "le pain",
        "en": "bread",
        "ru": "хлеб"
      },
      {
        "fr": "le fromage",
        "en": "cheese",
        "ru": "сыр"
      },
      {
        "fr": "la viande",
        "en": "meat",
        "ru": "мясо"
      },
      {
        "fr": "le poisson",
        "en": "fish",
        "ru": "рыба"
      },
      {
        "fr": "les légumes",
        "en": "vegetables",
        "ru": "овощи"
      },
      {
        "fr": "les fruits",
        "en": "fruit (food, usually uncountable); fruits (e.g. different kinds)",
        "ru": "фрукты (как еда); фрукты разных видов"
      },
      {
        "fr": "le déjeuner",
        "en": "lunch (usual in France; meal names vary regionally)",
        "ru": "обед (обычно во Франции; названия приёмов пищи зависят от региона)"
      },
      {
        "fr": "le dîner",
        "en": "dinner / evening meal (usual in France)",
        "ru": "ужин (обычно во Франции)"
      },
      {
        "fr": "l'eau",
        "en": "water",
        "ru": "вода"
      },
      {
        "fr": "le café",
        "en": "coffee",
        "ru": "кофе"
      },
      {
        "fr": "le thé",
        "en": "tea",
        "ru": "чай"
      },
      {
        "fr": "le lait",
        "en": "milk",
        "ru": "молоко"
      }
    ]
  },
  {
    "id": "time",
    "titleEn": "Time & weather",
    "titleRu": "Время и погода",
    "items": [
      {
        "fr": "le jour / la nuit",
        "en": "day / night",
        "ru": "день / ночь"
      },
      {
        "fr": "aujourd'hui",
        "en": "today",
        "ru": "сегодня"
      },
      {
        "fr": "hier",
        "en": "yesterday",
        "ru": "вчера"
      },
      {
        "fr": "demain",
        "en": "tomorrow",
        "ru": "завтра"
      },
      {
        "fr": "la semaine",
        "en": "week",
        "ru": "неделя"
      },
      {
        "fr": "le mois",
        "en": "month",
        "ru": "месяц"
      },
      {
        "fr": "l'année",
        "en": "year",
        "ru": "год"
      },
      {
        "fr": "l'heure",
        "en": "hour / time (what time it is)",
        "ru": "час / время (который час)"
      },
      {
        "fr": "il fait beau",
        "en": "the weather is nice",
        "ru": "хорошая погода"
      },
      {
        "fr": "il pleut",
        "en": "it's raining",
        "ru": "идёт дождь"
      },
      {
        "fr": "il fait chaud / froid",
        "en": "it's hot / cold (about the weather)",
        "ru": "жарко / холодно (о погоде)"
      },
      {
        "fr": "le soleil",
        "en": "sun",
        "ru": "солнце"
      }
    ]
  },
  {
    "id": "verbs",
    "titleEn": "Common verbs",
    "titleRu": "Часто употребимые глаголы",
    "items": [
      {
        "fr": "être",
        "en": "to be",
        "ru": "быть"
      },
      {
        "fr": "avoir",
        "en": "to have",
        "ru": "иметь"
      },
      {
        "fr": "aller",
        "en": "to go (on foot or by transport)",
        "ru": "идти / ехать"
      },
      {
        "fr": "faire",
        "en": "to do / make; also to cook (faire la cuisine)",
        "ru": "делать; также готовить (faire la cuisine)"
      },
      {
        "fr": "venir",
        "en": "to come",
        "ru": "приходить / приезжать"
      },
      {
        "fr": "voir",
        "en": "to see",
        "ru": "видеть"
      },
      {
        "fr": "savoir",
        "en": "to know a fact / know how to do something",
        "ru": "знать факт / уметь что-либо делать"
      },
      {
        "fr": "connaître",
        "en": "to know / be familiar with a person, place or subject",
        "ru": "знать / быть знакомым с человеком, местом или предметом"
      },
      {
        "fr": "pouvoir",
        "en": "to be able / can",
        "ru": "мочь"
      },
      {
        "fr": "vouloir",
        "en": "to want",
        "ru": "хотеть"
      },
      {
        "fr": "devoir",
        "en": "to have to / must; also to owe",
        "ru": "быть должным / быть обязанным; также быть в долгу"
      },
      {
        "fr": "aimer",
        "en": "to love / like",
        "ru": "любить; нравиться"
      },
      {
        "fr": "manger",
        "en": "to eat",
        "ru": "есть"
      },
      {
        "fr": "parler",
        "en": "to speak",
        "ru": "говорить"
      },
      {
        "fr": "lire",
        "en": "to read",
        "ru": "читать"
      },
      {
        "fr": "écrire",
        "en": "to write",
        "ru": "писать"
      }
    ]
  }
];

export const PRESENT_TENSE: ConjugationTable[] = [
  {
    "verb": "être (to be)",
    "ru": "быть",
    "forms": [
      "je suis",
      "tu es",
      "il/elle est",
      "nous sommes",
      "vous êtes",
      "ils/elles sont"
    ]
  },
  {
    "verb": "avoir (to have)",
    "ru": "иметь",
    "forms": [
      "j'ai",
      "tu as",
      "il/elle a",
      "nous avons",
      "vous avez",
      "ils/elles ont"
    ]
  },
  {
    "verb": "aller (to go)",
    "ru": "идти",
    "forms": [
      "je vais",
      "tu vas",
      "il/elle va",
      "nous allons",
      "vous allez",
      "ils/elles vont"
    ]
  },
  {
    "verb": "faire (to do)",
    "ru": "делать",
    "forms": [
      "je fais",
      "tu fais",
      "il/elle fait",
      "nous faisons",
      "vous faites",
      "ils/elles font"
    ]
  },
  {
    "verb": "parler (-er regular)",
    "ru": "говорить",
    "notes": "For this regular -er pattern, remove -er and add -e, -es, -e, -ons, -ez, -ent. Aller is an irregular -er verb.",
    "forms": [
      "je parle",
      "tu parles",
      "il/elle parle",
      "nous parlons",
      "vous parlez",
      "ils/elles parlent"
    ],
    "notesRu": "В этой модели убери -er и добавь -e, -es, -e, -ons, -ez, -ent. Aller оканчивается на -er, но спрягается неправильно."
  },
  {
    "verb": "finir (-ir regular)",
    "ru": "заканчивать",
    "notes": "Finir belongs to the -ir group with -issons in nous: -is, -is, -it, -issons, -issez, -issent. Many other -ir verbs, such as partir, use a different pattern.",
    "forms": [
      "je finis",
      "tu finis",
      "il/elle finit",
      "nous finissons",
      "vous finissez",
      "ils/elles finissent"
    ],
    "notesRu": "Finir относится к группе на -ir с -issons у nous: -is, -is, -it, -issons, -issez, -issent. Другие глаголы на -ir, например partir, могут спрягаться иначе."
  },
  {
    "verb": "vendre (-re regular)",
    "ru": "продавать",
    "notes": "The vendre pattern uses vend- + -s, -s, no ending, -ons, -ez, -ent. Not every -re verb follows it.",
    "forms": [
      "je vends",
      "tu vends",
      "il/elle vend",
      "nous vendons",
      "vous vendez",
      "ils/elles vendent"
    ],
    "notesRu": "Модель vendre: vend- + -s, -s, нулевое окончание, -ons, -ez, -ent. Не все глаголы на -re следуют ей."
  }
];

export const PASSE_COMPOSE: ConjugationTable[] = [
  {
    "verb": "parler (with avoir)",
    "ru": "говорить (вспом. avoir)",
    "notes": "Passé composé: present avoir + parlé. Most verbs take avoir. With avoir, the participle does not agree with the subject; a preceding direct object can trigger agreement.",
    "forms": [
      "j'ai parlé",
      "tu as parlé",
      "il/elle a parlé",
      "nous avons parlé",
      "vous avez parlé",
      "ils/elles ont parlé"
    ],
    "notesRu": "Passé composé: avoir в настоящем + parlé. Большинство глаголов используют avoir. Причастие не согласуется с подлежащим; предшествующее прямое дополнение может требовать согласования."
  },
  {
    "verb": "aller (with être)",
    "ru": "идти (вспом. être)",
    "notes": "Aller uses être, and allé agrees with the subject: elle est allée. This is not a rule for every movement verb: marcher and courir use avoir. Some verbs switch auxiliary when they take a direct object.",
    "forms": [
      "je suis allé(e)",
      "tu es allé(e)",
      "il est allé / elle est allée",
      "nous sommes allé(e)s",
      "vous êtes allé(e)(s)",
      "ils sont allés / elles sont allées"
    ],
    "notesRu": "Aller использует être, allé согласуется с подлежащим: elle est allée. Это не правило для всех глаголов движения: marcher и courir используют avoir. У некоторых глаголов вспомогательный меняется при прямом дополнении."
  }
];

export const FUTURE_TENSE: ConjugationTable[] = [
  {
    "verb": "parler — futur simple",
    "ru": "буду говорить",
    "notes": "For regular -er/-ir verbs, add -ai, -as, -a, -ons, -ez, -ont to the infinitive; for the regular -re model remove final -e first. Common verbs may have irregular future stems.",
    "forms": [
      "je parlerai",
      "tu parleras",
      "il/elle parlera",
      "nous parlerons",
      "vous parlerez",
      "ils/elles parleront"
    ],
    "notesRu": "У регулярных моделей -er/-ir добавь к инфинитиву -ai, -as, -a, -ons, -ez, -ont; у модели -re сначала убери конечное -e. Частые глаголы могут иметь особую основу будущего."
  },
  {
    "verb": "aller — futur simple",
    "ru": "буду идти",
    "notes": "The future stem is ir-: j’irai. This is a future form, not the futur proche construction je vais aller.",
    "forms": [
      "j'irai",
      "tu iras",
      "il/elle ira",
      "nous irons",
      "vous irez",
      "ils/elles iront"
    ],
    "notesRu": "Основа будущего ir-: j’irai. Это futur simple; je vais aller — конструкция futur proche."
  },
  {
    "verb": "être — futur simple",
    "ru": "буду",
    "notes": "The future stem is ser-: je serai.",
    "forms": [
      "je serai",
      "tu seras",
      "il/elle sera",
      "nous serons",
      "vous serez",
      "ils/elles seront"
    ],
    "notesRu": "Основа будущего ser-: je serai."
  }
];

export const GRAMMAR_RULES: GrammarRule[] = [
  {
    "id": "gender",
    "titleEn": "Gender of nouns",
    "titleRu": "Род существительных",
    "body": "French nouns have grammatical gender, masculine or feminine. Learn a noun with un/une or le/la: un livre, une table. Gender is not a statement about biological sex. Endings offer clues, not guarantees: -age is often masculine, but une image is feminine.",
    "bodyRu": "У французских существительных есть грамматический род: мужской или женский. Учи слово с un/une или le/la: un livre, une table. Род не равен биологическому полу. Окончания подсказывают, но не гарантируют род: -age часто мужской, однако une image — женский."
  },
  {
    "id": "plurals",
    "titleEn": "Plurals",
    "titleRu": "Множественное число",
    "body": "Most nouns add a written -s: livre → livres. Words already ending in -s, -x or -z normally stay unchanged. Many -eau/-eu nouns add -x and many -al nouns change to -aux, with exceptions: pneus, bals. Final plural letters are usually silent, but liaison can reveal number.",
    "bodyRu": "Большинство существительных добавляет на письме -s: livre → livres. Слова на -s, -x, -z обычно не меняются. Многие слова на -eau/-eu получают -x, на -al — -aux, но есть исключения: pneus, bals. Конечные буквы, показывающие множественное число, обычно не читаются, но связывание (liaison) может выдать число."
  },
  {
    "id": "adjectives",
    "titleEn": "Adjective agreement",
    "titleRu": "Согласование прилагательных",
    "body": "An adjective agrees with its noun in gender and number. Adding -e and -s is a common written pattern, not a universal rule: petit/petite, beau/belle, heureux/heureuse. Many adjectives follow the noun; some frequent ones precede it. Position can change meaning: un grand homme (a great man), un homme grand (a tall man).",
    "bodyRu": "Прилагательное согласуется с существительным в роде и числе. -e и -s — частая, но не всеобщая письменная модель: petit/petite, beau/belle, heureux/heureuse. Многие прилагательные стоят после существительного, некоторые частые — перед ним. Позиция может менять смысл: un grand homme — великий человек; un homme grand — высокий человек."
  },
  {
    "id": "negation",
    "titleEn": "Negation",
    "titleRu": "Отрицание",
    "body": "In standard written French, ne…pas normally surrounds the finite verb: je ne sais pas; in a compound tense, the auxiliary: je n’ai pas mangé. Before an infinitive use ne pas: ne pas entrer. Ne is often omitted in informal speech. Other negatives have their own positions: je ne vois personne, rien ne change.",
    "bodyRu": "В стандартном письменном французском ne…pas обычно охватывает личную форму: je ne sais pas; в сложном времени — вспомогательный глагол: je n’ai pas mangé. Перед инфинитивом: ne pas entrer. В неформальной речи ne часто опускают. У других отрицаний свои позиции: je ne vois personne, rien ne change."
  },
  {
    "id": "questions",
    "titleEn": "Forming questions",
    "titleRu": "Вопросы",
    "body": "For a yes/no question, rising intonation is common in conversation (tu viens ?); est-ce que works in many contexts (est-ce que tu viens ?); inversion is common in formal writing (viens-tu ?). Qui asks who, où where, quand when, pourquoi why, comment how and combien how much/many. “What” may be que, quoi or qu’est-ce que, depending on structure.",
    "bodyRu": "Для общего вопроса в разговоре часто используют интонацию (tu viens ?); est-ce que подходит разным контекстам (est-ce que tu viens ?); инверсия характерна для письменной речи (viens-tu ?). Qui — кто, où — где, quand — когда, pourquoi — почему, comment — как, combien — сколько. «Что» передают que, quoi или qu’est-ce que в зависимости от конструкции."
  },
  {
    "id": "articles",
    "titleEn": "Definite, indefinite and partitive articles",
    "titleRu": "Определённые, неопределённые и частичные артикли",
    "body": "Definite le/la/l’/les identifies something known or a class in general: j’aime le chocolat. Indefinite un/une/des introduces an unspecified countable item or items: un chat, des chats. Partitive du/de la/de l’ expresses an unspecified amount: du pain, de l’eau. Des can also occur with plural non-count expressions. After many negatives, indefinite/partitive forms become de/d’: je n’ai pas de pain; after être they normally remain: ce n’est pas du pain.",
    "bodyRu": "Определённые le/la/l’/les обозначают известное или класс в целом: j’aime le chocolat. Неопределённые un/une/des вводят неопределённый исчисляемый предмет или предметы: un chat, des chats. Частичные du/de la/de l’ обозначают неопределённое количество: du pain, de l’eau. Des встречается и с некоторыми неисчисляемыми выражениями во множественном числе. После многих отрицаний формы заменяются на de/d’: je n’ai pas de pain; после être обычно сохраняются: ce n’est pas du pain."
  }
];

export const USEFUL_PHRASES: UsefulPhrase[] = [
  {
    "fr": "Comment ça va?",
    "en": "How are you? / How is it going? (conversational)",
    "ru": "Как дела? (разговорное)",
    "context": "Greeting"
  },
  {
    "fr": "Ça va bien, merci",
    "en": "I'm fine, thanks",
    "ru": "Хорошо, спасибо",
    "context": "Greeting"
  },
  {
    "fr": "Je ne comprends pas",
    "en": "I don't understand",
    "ru": "Я не понимаю",
    "context": "Classroom"
  },
  {
    "fr": "Pouvez-vous répéter?",
    "en": "Could you repeat? (polite / plural address)",
    "ru": "Не могли бы вы повторить? (вежливо / к нескольким людям)",
    "context": "Classroom"
  },
  {
    "fr": "Qu'est-ce que ça veut dire?",
    "en": "What does that mean?",
    "ru": "Что это значит?",
    "context": "Classroom"
  },
  {
    "fr": "Je voudrais…",
    "en": "I would like…",
    "ru": "Я хотел(а) бы…",
    "context": "Polite request"
  },
  {
    "fr": "L'addition, s'il vous plaît",
    "en": "The bill, please",
    "ru": "Счёт, пожалуйста",
    "context": "Restaurant"
  },
  {
    "fr": "Où se trouve…?",
    "en": "Where is…?",
    "ru": "Где находится…?",
    "context": "Directions"
  },
  {
    "fr": "À mon avis…",
    "en": "In my opinion…",
    "ru": "По-моему…",
    "context": "Opinion (writing)"
  },
  {
    "fr": "D'une part… d'autre part",
    "en": "On one hand… on the other",
    "ru": "С одной стороны… с другой",
    "context": "Discursive writing"
  },
  {
    "fr": "Par exemple",
    "en": "For example",
    "ru": "Например",
    "context": "Writing connector"
  },
  {
    "fr": "En conclusion",
    "en": "In conclusion",
    "ru": "В заключение",
    "context": "Essay ending"
  }
];

// Added 14.10 (L-f-language): imparfait, conditionnel présent, plus-que-parfait, futur proche.
export const IMPARFAIT_TENSE: ConjugationTable[] = [
  { verb: 'être — imparfait', ru: 'был', notes: 'Stem: ét- (the only irregular stem). Endings: -ais, -ais, -ait, -ions, -iez, -aient. Uses: background, description and habits in the past.', notesRu: 'Основа ét- (единственная неправильная). Окончания: -ais, -ais, -ait, -ions, -iez, -aient. Употребление: фон, описание и привычки в прошлом.', forms: ["j'étais", 'tu étais', 'il/elle était', 'nous étions', 'vous étiez', 'ils/elles étaient'] },
  { verb: 'avoir — imparfait', ru: 'имел', notes: 'Stem: av-.', notesRu: 'Основа av-.', forms: ["j'avais", 'tu avais', 'il/elle avait', 'nous avions', 'vous aviez', 'ils/elles avaient'] },
  { verb: 'parler — imparfait', ru: 'говорил', notes: 'Stem: from nous parlons → parl-.', notesRu: 'Основа от nous parlons → parl-.', forms: ['je parlais', 'tu parlais', 'il/elle parlait', 'nous parlions', 'vous parliez', 'ils/elles parlaient'] },
  { verb: 'faire — imparfait', ru: 'делал', notes: 'Stem: from nous faisons → fais-.', notesRu: 'Основа от nous faisons → fais-.', forms: ['je faisais', 'tu faisais', 'il/elle faisait', 'nous faisions', 'vous faisiez', 'ils/elles faisaient'] },
];
export const CONDITIONNEL_TENSE: ConjugationTable[] = [
  { verb: 'être — conditionnel présent', ru: 'был бы', notes: 'Stem: the futur simple stem ser-; endings of the imparfait. Si + imparfait → conditionnel présent: si j’avais le temps, je ferais du sport. Uses: hypothesis (with si), polite request, unconfirmed information.', notesRu: 'Основа как у futur simple (ser-), окончания имперфекта. Si + imparfait → conditionnel présent: si j’avais le temps, je ferais du sport. Употребление: гипотеза (с si), вежливая просьба, непроверенная информация.', forms: ['je serais', 'tu serais', 'il/elle serait', 'nous serions', 'vous seriez', 'ils/elles seraient'] },
  { verb: 'avoir — conditionnel présent', ru: 'имел бы', notes: 'Stem: aur-.', notesRu: 'Основа aur-.', forms: ["j'aurais", 'tu aurais', 'il/elle aurait', 'nous aurions', 'vous auriez', 'ils/elles auraient'] },
  { verb: 'parler — conditionnel présent', ru: 'говорил бы', notes: 'Stem: the futur simple stem parler-; endings of the imparfait.', notesRu: 'Основа как у futur simple (parler-), окончания имперфекта.', forms: ['je parlerais', 'tu parlerais', 'il/elle parlerait', 'nous parlerions', 'vous parleriez', 'ils/elles parleraient'] },
  { verb: 'faire — conditionnel présent', ru: 'делал бы', notes: 'Stem: fer-.', notesRu: 'Основа fer-.', forms: ['je ferais', 'tu ferais', 'il/elle ferait', 'nous ferions', 'vous feriez', 'ils/elles feraient'] },
];
export const PLUS_QUE_PARFAIT_TENSE: ConjugationTable[] = [
  { verb: 'parler — plus-que-parfait', ru: 'уже говорил', notes: 'avoir or être in the imparfait + past participle (parlé). Used for an action completed before another past action.', notesRu: 'avoir или être в имперфекте + причастие прошедшего времени (parlé). Действие, завершённое раньше другого прошлого действия.', forms: ["j'avais parlé", 'tu avais parlé', 'il/elle avait parlé', 'nous avions parlé', 'vous aviez parlé', 'ils/elles avaient parlé'] },
  { verb: 'aller — plus-que-parfait (être)', ru: 'уже ходил', notes: 'aller takes être; the past participle agrees with the subject.', notesRu: 'aller спрягается с être; причастие согласуется с подлежащим.', forms: ["j'étais allé(e)", 'tu étais allé(e)', 'il était allé / elle était allée', 'nous étions allé(e)s', 'vous étiez allé(e)(s)', 'ils étaient allés / elles étaient allées'] },
  { verb: 'faire — plus-que-parfait', ru: 'уже делал', notes: 'Past participle: fait.', notesRu: 'Причастие прошедшего времени: fait.', forms: ["j'avais fait", 'tu avais fait', 'il/elle avait fait', 'nous avions fait', 'vous aviez fait', 'ils/elles avaient fait'] },
];
export const FUTUR_PROCHE_TENSE: ConjugationTable[] = [
  { verb: 'parler — futur proche', ru: 'собираюсь говорить', notes: 'aller in the present + infinitive, for the near future.', notesRu: 'aller в настоящем времени + инфинитив: ближайшее будущее.', forms: ['je vais parler', 'tu vas parler', 'il/elle va parler', 'nous allons parler', 'vous allez parler', 'ils/elles vont parler'] },
  { verb: 'être — futur proche', ru: 'собираюсь быть', notes: 'The infinitive être stays unchanged.', notesRu: 'Инфинитив être не меняется.', forms: ['je vais être', 'tu vas être', 'il/elle va être', 'nous allons être', 'vous allez être', 'ils/elles vont être'] },
  { verb: 'faire — futur proche', ru: 'собираюсь делать', notes: 'Infinitive faire: nous allons faire le projet.', notesRu: 'Инфинитив faire: nous allons faire le projet.', forms: ['je vais faire', 'tu vas faire', 'il/elle va faire', 'nous allons faire', 'vous allez faire', 'ils/elles vont faire'] },
];
