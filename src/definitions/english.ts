import type { DefinitionReview } from '../components/content/definitionReview';

export const ENGLISH_REVIEWS: Record<string, DefinitionReview> = {
  "devices.metaphor": {
    "englishTerm": "Metaphor",
    "russianTerm": "Метафора (metaphor)",
    "contrast": {
      "en": "Identify both things and the relevant shared feature. A human role applied to an abstraction may also be personification.",
      "ru": "Назови оба сопоставленных понятия и общий признак. Человеческая роль, приписанная абстракции, может одновременно быть олицетворением."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Metaphor",
        "url": "https://poets.org/glossary/metaphor",
        "section": "Metaphor",
        "language": "en"
      },
      {
        "title": "Фоксфорд — Метафора (metaphor)",
        "url": "https://foxford.ru/wiki/literatura/metaphor",
        "section": "Определение и примеры",
        "language": "ru"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.simile": {
    "englishTerm": "Simile",
    "russianTerm": "Образное сравнение (simile)",
    "contrast": {
      "en": "Choose an image that fits the meaning. An original simile does not automatically earn a higher mark.",
      "ru": "Выбирай образ, который помогает передать смысл. Необычное сравнение само по себе не гарантирует более высокую оценку."
    },
    "sources": [
      {
        "title": "Poetry Foundation — Simile",
        "url": "https://www.poetryfoundation.org/education/glossary/simile",
        "section": "Simile",
        "language": "en"
      },
      {
        "title": "Фоксфорд — Метафора, сравнение и олицетворение",
        "url": "https://externat.foxford.ru/polezno-znat/primery-metafor-kak-obyasnit-rebenku-metafory",
        "section": "Чем метафора отличается от сравнения и олицетворения",
        "language": "ru"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    },
    "visual": {
      "kind": "comparison",
      "title": {
        "en": "One idea, three forms",
        "ru": "Одна идея, три формы"
      },
      "items": [
        {
          "label": {
            "en": "Literal",
            "ru": "Буквально"
          },
          "detail": {
            "en": "Her voice was rough.",
            "ru": "Её голос был грубым."
          }
        },
        {
          "label": {
            "en": "Simile",
            "ru": "Сравнение"
          },
          "detail": {
            "en": "Her voice was like sandpaper.",
            "ru": "Её голос был словно наждачная бумага."
          }
        },
        {
          "label": {
            "en": "Metaphor",
            "ru": "Метафора"
          },
          "detail": {
            "en": "Her voice scraped my nerves.",
            "ru": "Её голос царапал мне нервы."
          }
        }
      ],
      "caption": {
        "en": "The image changes the meaning’s presentation; these forms have no fixed ranking of strength.",
        "ru": "Образ меняет способ передачи смысла; у форм нет постоянной шкалы выразительности."
      }
    }
  },
  "devices.anaphora": {
    "englishTerm": "Anaphora",
    "russianTerm": "Анафора (anaphora)",
    "contrast": {
      "en": "Name where the repetition occurs. Repetition is the broader category; repeated endings are epistrophe.",
      "ru": "Укажи позицию повтора. Повтор — более широкое понятие; повтор концовок называется эпифорой (epistrophe)."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Anaphora",
        "url": "https://poets.org/glossary/anaphora",
        "section": "Anaphora",
        "language": "en"
      },
      {
        "title": "Фоксфорд — Анафора (anaphora)",
        "url": "https://foxford.ru/wiki/literatura/anaphora",
        "section": "Определение и примеры",
        "language": "ru"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    },
    "visual": {
      "kind": "parts",
      "title": {
        "en": "Locate the repetition",
        "ru": "Найди позицию повтора"
      },
      "items": [
        {
          "label": {
            "en": "We need time.",
            "ru": "We need time."
          },
          "detail": {
            "en": "Repeated opening: We need",
            "ru": "Повтор начала: We need"
          }
        },
        {
          "label": {
            "en": "We need trust.",
            "ru": "We need trust."
          },
          "detail": {
            "en": "Same opening, new detail",
            "ru": "То же начало, новая деталь"
          }
        },
        {
          "label": {
            "en": "We need change.",
            "ru": "We need change."
          },
          "detail": {
            "en": "A connected sequence",
            "ru": "Связанная последовательность"
          }
        }
      ],
      "caption": {
        "en": "Repeated beginnings make this anaphora, not merely repeated vocabulary.",
        "ru": "Анафору определяет повтор начала, а не просто повтор слов."
      }
    }
  },
  "devices.alliteration": {
    "englishTerm": "Alliteration",
    "russianTerm": "Аллитерация (alliteration)",
    "contrast": {
      "en": "A sound has no fixed emotion: support claims such as “menacing” or “gentle” with the words and situation.",
      "ru": "У звука нет закреплённой эмоции. «Угрожающее» или «мягкое» звучание обосновывай словами и ситуацией."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Alliteration",
        "url": "https://poets.org/glossary/alliteration",
        "section": "Alliteration",
        "language": "en"
      },
      {
        "title": "Фоксфорд — Аллитерация (alliteration)",
        "url": "https://foxford.ru/wiki/literatura/alliteration",
        "section": "Определение и примеры",
        "language": "ru"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.personification": {
    "englishTerm": "Personification",
    "russianTerm": "Олицетворение (personification)",
    "contrast": {
      "en": "An action performed by both humans and animals, such as swallowing, may create animation without unambiguously personifying. Explain the image before choosing a label.",
      "ru": "Действие, доступное и людям, и животным, например глотание, может оживлять образ, но не однозначно олицетворять его. Сначала объясни образ, затем выбирай термин."
    },
    "sources": [
      {
        "title": "Poetry Foundation — Personification",
        "url": "https://www.poetryfoundation.org/education/glossary/personification",
        "section": "Personification",
        "language": "en"
      },
      {
        "title": "Фоксфорд — Олицетворение (personification)",
        "url": "https://foxford.ru/wiki/literatura/impersonation",
        "section": "Определение и примеры",
        "language": "ru"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.hyperbole": {
    "englishTerm": "Hyperbole",
    "russianTerm": "Гипербола (hyperbole)",
    "contrast": {
      "en": "Explain what is exaggerated and why. An inaccurate statement is not automatically a hyperbole.",
      "ru": "Объясни, что именно преувеличено и зачем. Любая неточность ещё не является гиперболой."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Named entries: hyperbole, irony, symbol, tone, rhetorical question",
        "language": "en"
      },
      {
        "title": "Фоксфорд — Гипербола (hyperbole)",
        "url": "https://foxford.ru/wiki/literatura/hyperbole",
        "section": "Определение и примеры",
        "language": "ru"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.rhetoricalQuestion": {
    "englishTerm": "Rhetorical question",
    "russianTerm": "Риторический вопрос (rhetorical question)",
    "contrast": {
      "en": "The same wording can be a genuine question in another context. Judge its purpose, not the question mark alone.",
      "ru": "Та же фраза в другом контексте может быть настоящим вопросом. Определяй цель, а не только наличие вопросительного знака."
    },
    "sources": [
      {
        "title": "Merriam-Webster — rhetorical question",
        "url": "https://www.merriam-webster.com/dictionary/rhetorical%20question",
        "language": "en",
        "section": "Definition; Rhetorical Language vs. Rhetorical Questions"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.imagery": {
    "englishTerm": "Imagery",
    "russianTerm": "Чувственная образность (imagery)",
    "contrast": {
      "en": "Imagery is broader than metaphor. More senses do not automatically make a passage more effective.",
      "ru": "Образность шире метафоры. Количество задействованных чувств само по себе не определяет силу описания."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Imagery",
        "url": "https://poets.org/glossary/imagery",
        "section": "Imagery",
        "language": "en"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.onomatopoeia": {
    "englishTerm": "Onomatopoeia",
    "russianTerm": "Звукоподражание (onomatopoeia)",
    "contrast": {
      "en": "Alliteration repeats sounds across words; onomatopoeia imitates a sound. A phrase may do both.",
      "ru": "Аллитерация повторяет звуки в словах, а звукоподражание имитирует звук. Приёмы могут сочетаться."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Named entries: hyperbole, irony, symbol, tone, rhetorical question",
        "language": "en"
      },
      {
        "title": "Фоксфорд — Звукоподражание (onomatopoeia)",
        "url": "https://foxford.ru/wiki/literatura/onomatopoeia",
        "section": "Определение и примеры",
        "language": "ru"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.irony": {
    "englishTerm": "Irony",
    "russianTerm": "Ирония (irony)",
    "contrast": {
      "en": "Sarcasm is often mocking and can use irony; the terms are not identical. Irony need not involve punishment or poetic justice.",
      "ru": "Сарказм часто язвителен и может использовать иронию, но это не синонимы. Для иронии не обязательны наказание или «поэтическая справедливость»."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Named entries: hyperbole, irony, symbol, tone, rhetorical question",
        "language": "en"
      },
      {
        "title": "Фоксфорд — Ирония (irony)",
        "url": "https://foxford.ru/wiki/literatura/irony",
        "section": "Определение и примеры",
        "language": "ru"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.symbolism": {
    "englishTerm": "Symbolism",
    "russianTerm": "Символика (symbolism)",
    "contrast": {
      "en": "A recurring element is a motif; it becomes symbolic when it carries further meaning. A dove is a conventional peace symbol, not a universal code.",
      "ru": "Повторяющийся элемент — motif (мотив); он символичен, когда несёт дополнительный смысл. Голубь — распространённый символ мира, а не универсальный код. Не путай символику с направлением Symbolism — символизмом."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Named entries: hyperbole, irony, symbol, tone, rhetorical question",
        "language": "en"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "devices.foreshadowing": {
    "englishTerm": "Foreshadowing",
    "russianTerm": "Предвосхищение событий (foreshadowing)",
    "contrast": {
      "en": "Explain the later event that the detail anticipates. Bad weather or a title is not automatically foreshadowing.",
      "ru": "Назови последующее событие, на которое указывает деталь. Плохая погода или заглавие сами по себе ещё не предвосхищение."
    },
    "sources": [
      {
        "title": "Merriam-Webster — Foreshadowing",
        "url": "https://www.merriam-webster.com/dictionary/foreshadowing",
        "section": "Foreshadow: indicate beforehand",
        "language": "en"
      }
    ],
    "model": {
      "en": "Literary analysis: interpretations and effects need textual support.",
      "ru": "Литературный анализ: трактовки и эффекты требуют подтверждения текстом."
    }
  },
  "grammar.tenses.present": {
    "englishTerm": "Present simple",
    "russianTerm": "Present simple",
    "contrast": {
      "en": "Don't forget the −s on third person singular: 'He goes' (not 'He go'). For verbs ending in −y after consonant: study → studies.",
      "ru": "Не забудь окончание −s в третьем лице ед. ч.: 'He goes' (а не 'He go'). Для глаголов на −y после согласной: study → studies."
    },
    "sources": [
      {
        "title": "British Council — Present tense",
        "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-tense",
        "section": "Present forms; present and future reference",
        "language": "en"
      }
    ]
  },
  "grammar.tenses.presentCont": {
    "englishTerm": "Present continuous (progressive)",
    "russianTerm": "Present continuous (длительное настоящее)",
    "contrast": {
      "en": "Stative meanings usually take simple forms: I know. Some verbs have dynamic uses: I am seeing the dentist tomorrow; I am thinking about your idea.",
      "ru": "Глаголы в значении состояния обычно употребляют в простой форме: I know. У некоторых есть значения действия: I am seeing the dentist tomorrow; I am thinking about your idea."
    },
    "sources": [
      {
        "title": "British Council — Present tense",
        "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-tense",
        "section": "Present forms; present and future reference",
        "language": "en"
      }
    ]
  },
  "grammar.tenses.past": {
    "englishTerm": "Past simple",
    "russianTerm": "Past simple",
    "contrast": {
      "en": "Time markers: yesterday, last (week / year), ago, in 2020, when I was younger.",
      "ru": "Маркеры времени: yesterday, last (week/year), ago, in 2020, when I was younger."
    },
    "sources": [
      {
        "title": "British Council — past simple",
        "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple",
        "language": "en",
        "section": "Past simple: formation, questions, negatives and use"
      }
    ]
  },
  "grammar.tenses.pastCont": {
    "englishTerm": "Past continuous",
    "russianTerm": "Past continuous",
    "contrast": {
      "en": "The progressive presents an action from within its duration; simple past presents the event as a whole. This is a difference in viewpoint, not a rule that one action must be long and the other short.",
      "ru": "Длительная форма показывает действие в процессе; Past simple — событие в целом. Это различие точки зрения, а не правило «одно действие длинное, другое короткое»."
    },
    "sources": [
      {
        "title": "British Council — past continuous",
        "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-continuous",
        "language": "en",
        "section": "Formation; past events in progress; Past continuous and hypotheses"
      }
    ]
  },
  "grammar.tenses.presentPerfect": {
    "englishTerm": "Present perfect",
    "russianTerm": "Present perfect",
    "contrast": {
      "en": "In standard British usage, a finished-time expression such as yesterday normally takes past simple. For, since, already and just are clues to meaning, not automatic selectors of a tense.",
      "ru": "В стандартном британском употреблении yesterday и другие указания на завершённое прошлое обычно требуют Past simple. For, since, already и just помогают понять смысл, но не выбирают форму автоматически."
    },
    "sources": [
      {
        "title": "British Council — Present perfect",
        "url": "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-perfect",
        "section": "Present perfect uses and finished-time expressions",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "flow",
      "title": {
        "en": "From a past start to now",
        "ru": "От начала в прошлом до сейчас"
      },
      "items": [
        {
          "label": {
            "en": "2010: we moved here",
            "ru": "2010: мы переехали"
          },
          "detail": {
            "en": "Past start of the state",
            "ru": "Начало состояния в прошлом"
          }
        },
        {
          "label": {
            "en": "2010 → now",
            "ru": "2010 → сейчас"
          },
          "detail": {
            "en": "We have lived here since 2010.",
            "ru": "Мы живём здесь с 2010 года."
          }
        },
        {
          "label": {
            "en": "Now: still here",
            "ru": "Сейчас: всё ещё здесь"
          },
          "detail": {
            "en": "The state continues at speaking time.",
            "ru": "Состояние продолжается в момент речи."
          }
        }
      ],
      "caption": {
        "en": "This timeline illustrates one continuing-state use of the present perfect, not all its uses.",
        "ru": "Схема показывает одно употребление Present perfect — продолжающееся состояние, а не все случаи."
      }
    }
  },
  "grammar.tenses.future": {
    "englishTerm": "Future reference: will, be going to, present continuous",
    "russianTerm": "Выражение будущего: will, be going to, Present continuous",
    "contrast": {
      "en": "In a grammatical account based on verb inflection, English has present and past tenses; “future tense” is a common classroom label for future constructions. Choose the form for meaning, not merely to create variety.",
      "ru": "В описании по формам глагола английский имеет настоящее и прошедшее времена; «future tense» — распространённое учебное название конструкций будущего. Выбирай форму по смыслу, а не ради разнообразия."
    },
    "sources": [
      {
        "title": "British Council — Present tense",
        "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-tense",
        "section": "Present forms; present and future reference",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "parts",
      "title": {
        "en": "Form and time differ",
        "ru": "Форма и время события различаются"
      },
      "items": [
        {
          "label": {
            "en": "Present form",
            "ru": "Настоящая форма"
          },
          "detail": {
            "en": "The train leaves tomorrow.",
            "ru": "The train leaves tomorrow."
          }
        },
        {
          "label": {
            "en": "Future reference",
            "ru": "Будущее событие"
          },
          "detail": {
            "en": "Tomorrow is later than now.",
            "ru": "Tomorrow — позже текущего момента."
          }
        }
      ],
      "caption": {
        "en": "A present-tense form can refer to future time.",
        "ru": "Форма настоящего может обозначать будущее событие."
      }
    }
  },
  "grammar.punctuation.comma": {
    "englishTerm": "Comma (,)",
    "russianTerm": "Запятая (,)",
    "contrast": {
      "en": "Don't use a comma to join two complete sentences (this is a 'comma splice'): WRONG — 'I went out, it was cold.' Use a full stop, semicolon, or conjunction.",
      "ru": "Не соединяй два самостоятельных предложения запятой ('comma splice'): НЕВЕРНО — 'I went out, it was cold.' Используй точку, точку с запятой или союз."
    },
    "sources": [
      {
        "title": "Purdue OWL — Extended rules for commas",
        "url": "https://owl.purdue.edu/owl/general_writing/punctuation/commas/extended_rules_for_commas.html",
        "section": "Comma use and comma abuse",
        "language": "en"
      }
    ]
  },
  "grammar.punctuation.semicolon": {
    "englishTerm": "Semicolon (;)",
    "russianTerm": "Точка с запятой (;)",
    "contrast": {
      "en": "For the clause-linking use, both sides must be independent clauses and their ideas must be closely related. In a complex list, the items need not be complete clauses.",
      "ru": "При соединении частей обе должны быть самостоятельными и тесно связанными по смыслу. В сложном перечислении элементы не обязаны быть предложениями."
    },
    "sources": [
      {
        "title": "Purdue OWL — Punctuation overview",
        "url": "https://owl.purdue.edu/owl/general_writing/punctuation/punctuation/index.html",
        "section": "Comma, semicolon, colon, apostrophe and dash",
        "language": "en"
      }
    ]
  },
  "grammar.punctuation.colon": {
    "englishTerm": "Colon (:)",
    "russianTerm": "Двоеточие (:)",
    "contrast": {
      "en": "For the list/explanation use in ordinary prose, the introduction is normally a complete clause. Do not separate a verb or preposition from its complement: write “We bought bread and milk”, not “We bought: bread and milk”.",
      "ru": "Перед списком или пояснением в обычном тексте обычно нужна законченная часть предложения. Не отделяй глагол или предлог от дополнения: We bought bread and milk, а не We bought: bread and milk."
    },
    "sources": [
      {
        "title": "Purdue OWL — Punctuation overview",
        "url": "https://owl.purdue.edu/owl/general_writing/punctuation/punctuation/index.html",
        "section": "Comma, semicolon, colon, apostrophe and dash",
        "language": "en"
      }
    ]
  },
  "grammar.punctuation.apostrophe": {
    "englishTerm": "Apostrophe (')",
    "russianTerm": "Апостроф (')",
    "contrast": {
      "en": "Possessive its, yours, hers, ours and theirs have no apostrophe. This does not apply to every pronoun: one’s and someone’s do take one. It’s can mean it is or it has.",
      "ru": "Притяжательные its, yours, hers, ours и theirs пишутся без апострофа. Это не правило для всех местоимений: one’s и someone’s имеют апостроф. It’s означает it is или it has."
    },
    "sources": [
      {
        "title": "Purdue OWL — Punctuation overview",
        "url": "https://owl.purdue.edu/owl/general_writing/punctuation/punctuation/index.html",
        "section": "Comma, semicolon, colon, apostrophe and dash",
        "language": "en"
      }
    ]
  },
  "grammar.punctuation.dash": {
    "englishTerm": "Dash (—)",
    "russianTerm": "Тире (—)",
    "contrast": {
      "en": "Em dash (—) is longer than a hyphen (-). Use it sparingly; overuse makes prose feel breathless.",
      "ru": "Em-тире (—) длиннее дефиса (-). Не злоупотребляй — слишком много тире делает текст рваным."
    },
    "sources": [
      {
        "title": "Purdue OWL — Punctuation overview",
        "url": "https://owl.purdue.edu/owl/general_writing/punctuation/punctuation/index.html",
        "section": "Comma, semicolon, colon, apostrophe and dash",
        "language": "en"
      }
    ]
  },
  "grammar.commonErrors.yourYoure": {
    "englishTerm": "your vs you're",
    "russianTerm": "your vs you're",
    "contrast": {
      "en": "Try expanding you’re to you are. Use your when a following noun belongs or relates to the person addressed.",
      "ru": "Попробуй заменить you’re на you are. Your определяет существительное, связанное с адресатом или принадлежащее ему."
    },
    "sources": [
      {
        "title": "Merriam-Webster — Usage guide",
        "url": "https://www.merriam-webster.com/grammar/your-vs-youre-how-to-use-them-correctly",
        "section": "your vs you're",
        "language": "en"
      }
    ]
  },
  "grammar.commonErrors.itsIts": {
    "englishTerm": "its vs it's",
    "russianTerm": "its vs it's",
    "contrast": {
      "en": "Expand it’s to it is or it has. Possessive its has no apostrophe: the bird spread its wings.",
      "ru": "Разверни it’s в it is или it has. Притяжательное its пишется без апострофа: the bird spread its wings."
    },
    "sources": [
      {
        "title": "Merriam-Webster — Usage guide",
        "url": "https://www.merriam-webster.com/grammar/when-to-use-its-vs-its",
        "section": "its vs it's",
        "language": "en"
      }
    ]
  },
  "grammar.commonErrors.thereTheirTheyre": {
    "englishTerm": "there / their / they're",
    "russianTerm": "there / their / they're",
    "contrast": {
      "en": "There can indicate a place or introduce existence; their is possessive; they’re expands to they are. Decide by meaning and sentence structure.",
      "ru": "There обозначает место или вводит существование; their — притяжательная форма; they’re = they are. Выбирай по смыслу и структуре."
    },
    "sources": [
      {
        "title": "Merriam-Webster — Usage guide",
        "url": "https://www.merriam-webster.com/grammar/how-to-use-theyre-there-their",
        "section": "there / their / they're",
        "language": "en"
      }
    ]
  },
  "grammar.commonErrors.lessFewer": {
    "englishTerm": "less vs fewer",
    "russianTerm": "less vs fewer",
    "contrast": {
      "en": "Time meaning duration is uncountable: less time. Times meaning occasions is countable: fewer times. Informal usage varies.",
      "ru": "Time в значении длительности неисчисляемо: less time. Times в значении случаев исчисляемо: fewer times. В разговорной речи употребление варьируется."
    },
    "sources": [
      {
        "title": "Merriam-Webster — Usage guide",
        "url": "https://www.merriam-webster.com/grammar/fewer-vs-less",
        "section": "less vs fewer",
        "language": "en"
      }
    ]
  },
  "grammar.commonErrors.affectEffect": {
    "englishTerm": "affect vs effect",
    "russianTerm": "affect vs effect",
    "contrast": {
      "en": "Effect can be a verb meaning bring about: effect change. Affect can be a technical noun for an observable emotional state or expression. Check the intended meaning.",
      "ru": "Effect бывает глаголом «осуществить»: effect change. Affect бывает специальным существительным для эмоционального состояния или его внешнего проявления. Проверяй нужное значение."
    },
    "sources": [
      {
        "title": "Merriam-Webster — Usage guide",
        "url": "https://www.merriam-webster.com/grammar/affect-vs-effect-usage-difference",
        "section": "affect vs effect",
        "language": "en"
      }
    ]
  },
  "grammar.commonErrors.thanThen": {
    "englishTerm": "than vs then",
    "russianTerm": "than vs then",
    "contrast": {
      "en": "Comparison → think 'compare', both have an A. Time → then has 'en' like 'when'.",
      "ru": "Сравнение → 'compare', обе с буквой A. Время → then с 'en' как 'when'."
    },
    "sources": [
      {
        "title": "Merriam-Webster — Usage guide",
        "url": "https://www.merriam-webster.com/grammar/when-to-use-then-and-than",
        "section": "than vs then",
        "language": "en"
      }
    ]
  },
  "reading.strategies.skim": {
    "englishTerm": "Skim",
    "russianTerm": "Skim — пробежать по тексту",
    "contrast": {
      "en": "Support the response with the relevant text. This is a reading procedure, not a fixed marking formula.",
      "ru": "Опирайся на нужный фрагмент текста. Это приём чтения, а не постоянная формула оценивания."
    },
    "sources": [
      {
        "title": "British Council LearnEnglish Teens — How to read the text",
        "url": "https://learnenglishteens.britishcouncil.org/exams/reading-exams/how-read-text",
        "language": "en",
        "section": "Skimming"
      },
      {
        "title": "Merriam-Webster — skim",
        "url": "https://www.merriam-webster.com/dictionary/skim",
        "language": "en",
        "section": "intransitive verb 1b: cursory reading"
      }
    ]
  },
  "reading.strategies.scan": {
    "englishTerm": "Scan",
    "russianTerm": "Scan — поиск конкретного",
    "contrast": {
      "en": "Support the response with the relevant text. This is a reading procedure, not a fixed marking formula.",
      "ru": "Опирайся на нужный фрагмент текста. Это приём чтения, а не постоянная формула оценивания."
    },
    "sources": [
      {
        "title": "British Council LearnEnglish Teens — How to read the text",
        "url": "https://learnenglishteens.britishcouncil.org/exams/reading-exams/how-read-text",
        "language": "en",
        "section": "Scanning"
      },
      {
        "title": "Merriam-Webster — scan",
        "url": "https://www.merriam-webster.com/dictionary/scan",
        "language": "en",
        "section": "transitive verb 2b: looking for a particular item"
      }
    ]
  },
  "reading.strategies.annotate": {
    "englishTerm": "Annotate",
    "russianTerm": "Annotate — пометки",
    "contrast": {
      "en": "Support the response with the relevant text. This is a reading procedure, not a fixed marking formula.",
      "ru": "Опирайся на нужный фрагмент текста. Это приём чтения, а не постоянная формула оценивания."
    },
    "sources": [
      {
        "title": "University of North Carolina Learning Center — Annotating Texts",
        "url": "https://learningcenter.unc.edu/tips-and-tools/annotating-texts/",
        "language": "en",
        "section": "What is annotation?; How do you annotate?"
      },
      {
        "title": "Merriam-Webster — annotate",
        "url": "https://www.merriam-webster.com/dictionary/annotate",
        "language": "en",
        "section": "Verb senses: explanatory notes"
      }
    ]
  },
  "reading.strategies.infer": {
    "englishTerm": "Infer",
    "russianTerm": "Infer — между строк",
    "contrast": {
      "en": "Support the response with the relevant text. This is a reading procedure, not a fixed marking formula.",
      "ru": "Опирайся на нужный фрагмент текста. Это приём чтения, а не постоянная формула оценивания."
    },
    "sources": [
      {
        "title": "Merriam-Webster — infer",
        "url": "https://www.merriam-webster.com/dictionary/infer",
        "language": "en",
        "section": "Transitive verb sense 1: conclusion based on facts or premises"
      },
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "reading.questionTypes.literal": {
    "englishTerm": "Literal questions",
    "russianTerm": "Literal — буквальные вопросы",
    "contrast": {
      "en": "Support the response with the relevant text. This is a reading procedure, not a fixed marking formula.",
      "ru": "Опирайся на нужный фрагмент текста. Это приём чтения, а не постоянная формула оценивания."
    },
    "sources": [
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "reading.questionTypes.inferential": {
    "englishTerm": "Inferential questions",
    "russianTerm": "Inferential — на вывод",
    "contrast": {
      "en": "Support the response with the relevant text. This is a reading procedure, not a fixed marking formula.",
      "ru": "Опирайся на нужный фрагмент текста. Это приём чтения, а не постоянная формула оценивания."
    },
    "sources": [
      {
        "title": "Merriam-Webster — infer",
        "url": "https://www.merriam-webster.com/dictionary/infer",
        "language": "en",
        "section": "Transitive verb sense 1: conclusion based on facts or premises"
      },
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "reading.questionTypes.language": {
    "englishTerm": "Language analysis",
    "russianTerm": "Language — анализ языка",
    "contrast": {
      "en": "Support the response with the relevant text. This is a reading procedure, not a fixed marking formula.",
      "ru": "Опирайся на нужный фрагмент текста. Это приём чтения, а не постоянная формула оценивания."
    },
    "sources": [
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "reading.questionTypes.evaluation": {
    "englishTerm": "Evaluation questions",
    "russianTerm": "Evaluation — оценка",
    "contrast": {
      "en": "Support the response with the relevant text. This is a reading procedure, not a fixed marking formula.",
      "ru": "Опирайся на нужный фрагмент текста. Это приём чтения, а не постоянная формула оценивания."
    },
    "sources": [
      {
        "title": "Merriam-Webster — evaluate",
        "url": "https://www.merriam-webster.com/dictionary/evaluate",
        "language": "en",
        "section": "Transitive verb sense 2: appraisal and study"
      },
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "textTypes.essay": {
    "englishTerm": "Essay",
    "russianTerm": "Эссе (Essay)",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "textTypes.letter": {
    "englishTerm": "Letter",
    "russianTerm": "Письмо (Letter)",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Purdue OWL — The basic business letter",
        "url": "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/basic_business_letters/index.html",
        "section": "Parts of a business letter; format",
        "language": "en"
      }
    ]
  },
  "textTypes.email": {
    "englishTerm": "Email",
    "russianTerm": "Email",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Purdue OWL — Email etiquette",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html",
        "section": "Writing an email; tone and audience",
        "language": "en"
      }
    ]
  },
  "textTypes.speech": {
    "englishTerm": "Speech",
    "russianTerm": "Речь (Speech)",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Merriam-Webster — speech",
        "url": "https://www.merriam-webster.com/dictionary/speech",
        "section": "Relevant noun sense",
        "language": "en"
      }
    ]
  },
  "textTypes.newspaper": {
    "englishTerm": "Newspaper Article",
    "russianTerm": "Газетная статья",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Purdue OWL — The inverted pyramid",
        "url": "https://owl.purdue.edu/owl/subject_specific_writing/journalism_and_journalistic_writing/the_inverted_pyramid.html",
        "section": "Lead and organisation of a news report",
        "language": "en"
      }
    ]
  },
  "textTypes.online": {
    "englishTerm": "Online Article",
    "russianTerm": "Онлайн-статья",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Purdue OWL — The inverted pyramid",
        "url": "https://owl.purdue.edu/owl/subject_specific_writing/journalism_and_journalistic_writing/the_inverted_pyramid.html",
        "section": "Lead and organisation of a news report",
        "language": "en"
      },
      {
        "title": "Purdue OWL — Email etiquette",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html",
        "section": "Writing an email; tone and audience",
        "language": "en"
      }
    ]
  },
  "textTypes.blog": {
    "englishTerm": "Blog Article",
    "russianTerm": "Блог",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Merriam-Webster — blog",
        "url": "https://www.merriam-webster.com/dictionary/blog",
        "section": "Relevant noun sense",
        "language": "en"
      }
    ]
  },
  "textTypes.guide": {
    "englishTerm": "Revision Guide",
    "russianTerm": "Учебное руководство",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "textTypes.script": {
    "englishTerm": "Script",
    "russianTerm": "Сценарий",
    "contrast": {
      "en": "Purpose, audience and task determine register and structure; examples are options, not universal requirements.",
      "ru": "Цель, аудитория и задание определяют регистр и структуру; примеры — варианты, а не универсальные требования."
    },
    "sources": [
      {
        "title": "Merriam-Webster — script",
        "url": "https://www.merriam-webster.com/dictionary/script",
        "section": "Relevant noun sense",
        "language": "en"
      }
    ]
  },
  "reading.PEEL": {
    "englishTerm": "PEEL paragraph scaffold",
    "russianTerm": "Опорная схема абзаца PEEL",
    "contrast": {
      "en": "A scaffold organises reasoning; it is not itself an assessment criterion.",
      "ru": "Схема организует рассуждение, но сама не является критерием оценивания."
    },
    "sources": [
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "flow",
      "title": {
        "en": "Claim → support → reasoning",
        "ru": "Мысль → доказательство → объяснение"
      },
      "items": [
        {
          "label": {
            "en": "Point",
            "ru": "Мысль"
          },
          "detail": {
            "en": "State a claim that answers the question.",
            "ru": "Сформулируй тезис по вопросу."
          }
        },
        {
          "label": {
            "en": "Evidence + explanation",
            "ru": "Доказательство + объяснение"
          },
          "detail": {
            "en": "Use a detail and explain what it shows.",
            "ru": "Приведи деталь и объясни её смысл."
          }
        },
        {
          "label": {
            "en": "Link",
            "ru": "Связь"
          },
          "detail": {
            "en": "Connect it to the argument.",
            "ru": "Свяжи её с аргументом."
          }
        }
      ],
      "caption": {
        "en": "The order can vary; the reasoning must stay connected.",
        "ru": "Порядок может меняться; рассуждение должно оставаться связанным."
      }
    }
  },
  "toneMood": {
    "englishTerm": "Tone and mood",
    "russianTerm": "Тон и атмосфера текста",
    "contrast": {
      "en": "Tone concerns expressed attitude; mood concerns the atmosphere created. A reader’s personal reaction is not automatically the text’s tone.",
      "ru": "Tone — выраженное отношение; mood — создаваемая атмосфера. Личная реакция читателя не равна тону текста."
    },
    "sources": [
      {
        "title": "Merriam-Webster — tone",
        "url": "https://www.merriam-webster.com/dictionary/tone",
        "section": "Attitude / atmosphere sense",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — mood",
        "url": "https://www.merriam-webster.com/dictionary/mood",
        "section": "Attitude / atmosphere sense",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "comparison",
      "title": {
        "en": "Attitude and atmosphere",
        "ru": "Отношение и атмосфера"
      },
      "items": [
        {
          "label": {
            "en": "Tone: speaker/text",
            "ru": "Tone: говорящий/текст"
          },
          "detail": {
            "en": "“What a splendid disaster!” — ironic attitude",
            "ru": "“What a splendid disaster!” — иронический тон"
          }
        },
        {
          "label": {
            "en": "Mood: scene/reader",
            "ru": "Mood: сцена/читатель"
          },
          "detail": {
            "en": "Empty rooms and echoes may feel unsettling.",
            "ru": "Пустые комнаты и эхо могут тревожить."
          }
        }
      ],
      "caption": {
        "en": "A text can use an ironic tone while creating an uneasy mood.",
        "ru": "Иронический тон может сочетаться с тревожной атмосферой."
      }
    }
  },
  "grammar.agreement": {
    "englishTerm": "Subject–verb agreement",
    "russianTerm": "Согласование подлежащего и сказуемого",
    "contrast": {
      "en": "Agreement follows the subject’s grammatical head and the variety of English used.",
      "ru": "Согласование зависит от главного слова подлежащего и варианта английского."
    },
    "sources": [
      {
        "title": "Purdue OWL — Subject–Verb Agreement",
        "url": "https://owl.purdue.edu/owl/general_writing/grammar/subject_verb_agreement.html",
        "language": "en",
        "section": "Rules 1–11; American convention for collective nouns"
      },
      {
        "title": "British Council — Group nouns",
        "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/group-nouns",
        "language": "en",
        "section": "Singular and plural use of group nouns"
      }
    ]
  },
  "extras.criticalThinking": {
    "englishTerm": "Critical thinking",
    "russianTerm": "Критическое мышление",
    "contrast": {
      "en": "Use context and evidence; a useful label or memorable phrase is not a substitute for an explanation.",
      "ru": "Учитывай контекст и доказательства: термин или запоминающаяся фраза не заменяет объяснения."
    },
    "sources": [
      {
        "title": "Purdue OWL — Establishing arguments",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html",
        "section": "Strong thesis statements and evidence",
        "language": "en"
      }
    ]
  },
  "extras.shakespeare": {
    "englishTerm": "Shakespeare — quick intro",
    "russianTerm": "Шекспир — короткое введение",
    "contrast": {
      "en": "Use context and evidence; a useful label or memorable phrase is not a substitute for an explanation.",
      "ru": "Учитывай контекст и доказательства: термин или запоминающаяся фраза не заменяет объяснения."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Named entries: hyperbole, irony, symbol, tone, rhetorical question",
        "language": "en"
      }
    ]
  },
  "extras.vocab": {
    "englishTerm": "Advanced vocabulary for essays",
    "russianTerm": "Продвинутая лексика для эссе",
    "contrast": {
      "en": "Use context and evidence; a useful label or memorable phrase is not a substitute for an explanation.",
      "ru": "Учитывай контекст и доказательства: термин или запоминающаяся фраза не заменяет объяснения."
    },
    "sources": [
      {
        "title": "Merriam-Webster — ubiquitous",
        "url": "https://www.merriam-webster.com/dictionary/ubiquitous",
        "section": "Learner-relevant sense",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — profound",
        "url": "https://www.merriam-webster.com/dictionary/profound",
        "section": "Learner-relevant sense",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — articulate",
        "url": "https://www.merriam-webster.com/dictionary/articulate",
        "section": "Learner-relevant sense",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — paradox",
        "url": "https://www.merriam-webster.com/dictionary/paradox",
        "section": "Learner-relevant sense",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — catalyst",
        "url": "https://www.merriam-webster.com/dictionary/catalyst",
        "section": "Learner-relevant sense",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — pivotal",
        "url": "https://www.merriam-webster.com/dictionary/pivotal",
        "section": "Learner-relevant sense",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — inevitable",
        "url": "https://www.merriam-webster.com/dictionary/inevitable",
        "section": "Learner-relevant sense",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — notwithstanding",
        "url": "https://www.merriam-webster.com/dictionary/notwithstanding",
        "section": "Learner-relevant sense",
        "language": "en"
      }
    ]
  },
  "extras.essayQuotes": {
    "englishTerm": "Using quotations responsibly",
    "russianTerm": "Как использовать цитаты",
    "contrast": {
      "en": "Use context and evidence; a useful label or memorable phrase is not a substitute for an explanation.",
      "ru": "Учитывай контекст и доказательства: термин или запоминающаяся фраза не заменяет объяснения."
    },
    "sources": [
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "extras.poetry": {
    "englishTerm": "Analysing poetry",
    "russianTerm": "Анализ поэзии",
    "contrast": {
      "en": "Use context and evidence; a useful label or memorable phrase is not a substitute for an explanation.",
      "ru": "Учитывай контекст и доказательства: термин или запоминающаяся фраза не заменяет объяснения."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Named entries: hyperbole, irony, symbol, tone, rhetorical question",
        "language": "en"
      }
    ]
  },
  "examFormatPage.q1eStructure": {
    "englishTerm": "Comparative essay: evidence and organisation",
    "russianTerm": "Сравнительное эссе: доказательства и структура",
    "contrast": {
      "en": "A comparison examines a shared question using both texts. This scaffold is not an official mark scheme or a guarantee of a particular grade.",
      "ru": "Сравнение рассматривает общий вопрос на материале обоих текстов. Учебная схема не является официальной шкалой оценивания и не гарантирует оценку."
    },
    "sources": [
      {
        "title": "Purdue OWL — Argumentative essays",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
        "section": "Structure, evidence and transitions",
        "language": "en"
      }
    ]
  },
  "progressTestPage.survivalVocab": {
    "englishTerm": "Setting and survival vocabulary",
    "russianTerm": "Лексика обстановки и выживания",
    "contrast": {
      "en": "These are selected contextual senses, not interchangeable synonyms. “Endure” means bear or last through difficulty; “thrive” means develop successfully. A “glacial” response is figuratively cold; glacial landforms involve glaciers.",
      "ru": "Это выбранные контекстные значения, а не взаимозаменяемые синонимы. Endure — выдерживать трудности или продолжаться; thrive — успешно развиваться. Glacial о реакции означает холодность, а о форме рельефа — связь с ледником."
    },
    "sources": [
      {
        "title": "Merriam-Webster — glacial",
        "url": "https://www.merriam-webster.com/dictionary/glacial",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — inhospitable",
        "url": "https://www.merriam-webster.com/dictionary/inhospitable",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — barren",
        "url": "https://www.merriam-webster.com/dictionary/barren",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — crystalline",
        "url": "https://www.merriam-webster.com/dictionary/crystalline",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — desolate",
        "url": "https://www.merriam-webster.com/dictionary/desolate",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — relentless",
        "url": "https://www.merriam-webster.com/dictionary/relentless",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — fragile",
        "url": "https://www.merriam-webster.com/dictionary/fragile",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — endure",
        "url": "https://www.merriam-webster.com/dictionary/endure",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — eerie",
        "url": "https://www.merriam-webster.com/dictionary/eerie",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — bleak",
        "url": "https://www.merriam-webster.com/dictionary/bleak",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — solitude",
        "url": "https://www.merriam-webster.com/dictionary/solitude",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — resilient",
        "url": "https://www.merriam-webster.com/dictionary/resilient",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — ritual",
        "url": "https://www.merriam-webster.com/dictionary/ritual",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — burden",
        "url": "https://www.merriam-webster.com/dictionary/burden",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — adapt",
        "url": "https://www.merriam-webster.com/dictionary/adapt",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      },
      {
        "title": "Merriam-Webster — thrive",
        "url": "https://www.merriam-webster.com/dictionary/thrive",
        "language": "en",
        "section": "Dictionary entry: contextual adjective, noun or verb senses"
      }
    ]
  }
};
