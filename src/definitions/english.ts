import type { DefinitionReview } from '../components/content/definitionReview';

export const ENGLISH_REVIEWS: Record<string, DefinitionReview> = {
  "devices.metaphor": {
    "englishTerm": "Metaphor",
    "russianTerm": "Метафора",
    "contrast": {
      "en": "A literal statement is not a metaphor: “The bridge collapsed” reports a real fall, while “Her argument collapsed” moves the idea of falling onto reasoning.",
      "ru": "Буквальное высказывание — не метафора: «Мост рухнул» сообщает о реальном падении, а «её аргумент рассыпался» переносит идею падения на рассуждение."
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
      "en": "The metaphor “Her argument collapsed” presents her reasoning as a structure that can fall. This suggests that the argument is weak and easy to defeat, so the reader may be less ready to trust it.",
      "ru": "Метафора «её аргумент рассыпался» представляет рассуждение как конструкцию, которая может рухнуть. Это подсказывает, что аргумент слабый и легко опровергается, поэтому читатель может меньше ему доверять."
    }
  },
  "devices.simile": {
    "englishTerm": "Simile",
    "russianTerm": "Сравнение",
    "contrast": {
      "en": "Look for “like” or “as” between the two things. Without it, the link is a metaphor.",
      "ru": "Ищи слово «как», «будто» или «словно» (в английском — like или as) между двумя предметами. Без него связь — это метафора."
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
      "en": "The simile “as still as a statue” makes his waiting look rigid, which suggests he is holding back tension rather than resting.",
      "ru": "Сравнение «as still as a statue» делает его ожидание каменно неподвижным: это намекает, что он сдерживает напряжение, а не отдыхает."
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
        "en": "The literal line names the quality; the two figurative lines add an image that has to be interpreted.",
        "ru": "Буквальная фраза называет качество прямо; две образные добавляют образ, который нужно истолковать."
      }
    }
  },
  "devices.anaphora": {
    "englishTerm": "Anaphora",
    "russianTerm": "Анафора",
    "contrast": {
      "en": "Anaphora repeats the opening of clauses. Repeating the endings of clauses is epistrophe, not anaphora.",
      "ru": "Анафора повторяет начало фраз. Повтор их концовок — это эпифора (epistrophe), а не анафора."
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
      "en": "The repeated opening “Nobody” makes the character’s isolation grow, because each clause adds another way in which no one responded.",
      "ru": "Повтор начала «Nobody» заставляет почувствовать, что одиночество героя растёт: каждая фраза добавляет ещё один способ, которым никто не откликнулся."
    },
    "visual": {
      "kind": "parts",
      "title": {
        "en": "Locate the repetition",
        "ru": "Найди повтор в начале фраз"
      },
      "items": [
        {
          "label": {
            "en": "We need time.",
            "ru": "We need time."
          },
          "detail": {
            "en": "Repeated opening: We need",
            "ru": "Повтор начала: «We need»"
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
    "russianTerm": "Аллитерация",
    "contrast": {
      "en": "Repeated vowels are not alliteration: in “Feed the deep sea” the same vowel recurs, but the first consonants differ. Alliteration repeats consonants.",
      "ru": "Повтор гласных — не аллитерация: в «Feed the deep sea» повторяется гласный звук, а начальные согласные разные. Аллитерация — повтор согласных."
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
      "en": "The alliteration in “Wild and windy weather” links the three words through the repeated /w/, so the weather feels like one continuous force.",
      "ru": "Аллитерация в «Wild and windy weather» связывает три слова повтором /w/, поэтому погода кажется одной непрерывной силой."
    }
  },
  "devices.personification": {
    "englishTerm": "Personification",
    "russianTerm": "Олицетворение",
    "contrast": {
      "en": "Personification gives a non-human thing human behaviour, such as speaking or judging; a metaphor only carries a quality from one thing to another.",
      "ru": "Олицетворение приписывает неживому человеческое поведение: говорит, судит; метафора лишь переносит признак с одного предмета на другой."
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
      "en": "The personification “The clock scolded me for being late” gives the clock the role of a strict adult. This suggests that the narrator feels judged by time itself, which may make being late seem a serious offence.",
      "ru": "Олицетворение «часы отругали меня за опоздание» наделяет часы ролью строгого взрослого. Это подсказывает, что рассказчик чувствует себя осуждённым самим временем, и опоздание может казаться серьёзным проступком."
    }
  },
  "devices.hyperbole": {
    "englishTerm": "Hyperbole",
    "russianTerm": "Гипербола",
    "contrast": {
      "en": "“This bag weighs a ton” exaggerates the bag’s real weight. It does not borrow a feature from another thing, so it is hyperbole, not metaphor.",
      "ru": "«Сумка весит тонну» преувеличивает реальный вес сумки. Признак другого предмета здесь не переносится, поэтому это гипербола, а не метафора."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Hyperbole",
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
      "en": "The hyperbole “I have waited a thousand years!” exaggerates how long the wait lasted. This may show the speaker’s frustration and help the reader feel how slowly time seems to pass.",
      "ru": "Гипербола «я жду уже тысячу лет!» преувеличивает, как долго длится ожидание. Это может показывать раздражение говорящего и помогать читателю почувствовать, как медленно тянется время."
    }
  },
  "devices.rhetoricalQuestion": {
    "englishTerm": "Rhetorical question",
    "russianTerm": "Риторический вопрос",
    "contrast": {
      "en": "A genuine question is open: the answer is unknown. A rhetorical question has an obvious answer that the reader is expected to supply.",
      "ru": "Настоящий вопрос открыт: ответ неизвестен. У риторического вопроса ответ очевиден, и читатель сам должен его назвать."
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
      "en": "In a speech about a polluted river, the speaker asks, “Can anyone still call this river safe?” The question can lead the listener to a verdict of “no” and encourage them to share the speaker’s view without being asked for an opinion. The effect can be persuasive: the argument may feel settled before any evidence is given.",
      "ru": "Вопрос может подвести слушателя к ответу «нет» и побудить его разделить мнение оратора, хотя его мнения никто не спрашивал. Эффект может быть убеждающим: спор может показаться решённым ещё до доказательств."
    }
  },
  "devices.imagery": {
    "englishTerm": "Imagery",
    "russianTerm": "Образность",
    "contrast": {
      "en": "Listing all five senses is not analysis: one well-chosen sense can carry more effect than a full list.",
      "ru": "Перечисление всех пяти чувств — ещё не анализ: одно точно подобранное чувство может создать более сильный эффект, чем полный перечень."
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
      "en": "The sensory image “A sharp lemon scent filled the room” appeals to smell and may make the room feel fresh and clean. This helps the reader picture the setting at once and can create a fresh, lively mood.",
      "ru": "Образ «резкий запах лимона наполнил комнату» обращается к обонянию и может сделать комнату свежей и чистой. Это помогает читателю сразу представить обстановку и может создавать свежее, бодрящее настроение."
    }
  },
  "devices.onomatopoeia": {
    "englishTerm": "Onomatopoeia",
    "russianTerm": "Звукоподражание",
    "contrast": {
      "en": "Alliteration repeats sounds across words; onomatopoeia imitates a sound. A phrase may do both.",
      "ru": "Аллитерация повторяет звуки в словах, а звукоподражание имитирует звук. Приёмы могут сочетаться."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Onomatopoeia",
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
      "en": "The onomatopoeia “clang” in “The gate shut with a clang” imitates a harsh metal sound. This may make the closing feel sudden and jarring, which suggests that the ending is final and unwelcome.",
      "ru": "Звукоподражание «лязг» в предложении «Ворота закрылись с лязгом» передаёт резкий металлический звук. Из-за этого закрытие может казаться внезапным и резким, что подсказывает: конец окончательный и нежеланный."
    }
  },
  "devices.irony": {
    "englishTerm": "Irony",
    "russianTerm": "Ирония",
    "contrast": {
      "en": "Sarcasm is a biting, mocking remark that often uses verbal irony. Not all irony is sarcasm: situational and dramatic irony need not mock anyone.",
      "ru": "Сарказм — язвительная насмешка, которая часто строится на словесной иронии. Не всякая ирония — сарказм: ситуационная и драматическая ирония может никого не высмеивать."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Irony",
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
      "en": "The narrator calls the first morning in the café “restful”, although the waiter has already dropped three trays. The word contradicts what the reader sees, so the narrator may seem naive and the reader may sympathise with the waiter. This verbal irony can create humour while also showing the strain of the job.",
      "ru": "Рассказчик называет первое утро в кафе «спокойным», хотя официант уже уронил три подноса. Слово противоречит увиденному, поэтому рассказчик может показаться наивным, а читатель может сочувствовать официанту. Такая словесная ирония может смешить и одновременно показывать тяжесть работы."
    }
  },
  "devices.symbolism": {
    "englishTerm": "Symbolism",
    "russianTerm": "Символика",
    "contrast": {
      "en": "A symbol stands for an idea beyond the object itself. A dove can be a conventional peace symbol, but it does not carry this meaning universally.",
      "ru": "Символ обозначает идею за пределами самого предмета. Голубь может быть условным символом мира, но не везде несёт этот смысл."
    },
    "sources": [
      {
        "title": "Academy of American Poets — Glossary",
        "url": "https://poets.org/glossary",
        "section": "Symbol",
        "language": "en"
      }
    ],
    "model": {
      "en": "The red door appears three times: when the family moves in, when the father leaves and at the end of the story. Each time it appears, it marks a change in the family’s relationships, which can help the reader follow the family’s story through the door. The writer uses one physical object to suggest the family’s hope and then its loss.",
      "ru": "Красная дверь появляется трижды (когда семья переезжает, когда уходит отец и в финале), и каждый раз она отмечает перемену в отношениях семьи. Одним предметом писатель намекает сначала на надежду семьи, а затем на её потерю. Это помогает читателю проследить историю семьи через дверь."
    }
  },
  "devices.foreshadowing": {
    "englishTerm": "Foreshadowing",
    "russianTerm": "Предвосхищение",
    "contrast": {
      "en": "Dramatic irony depends on what the audience knows now; foreshadowing depends on what will happen later.",
      "ru": "Драматическая ирония держится на том, что зритель знает сейчас; предвосхищение — на том, что произойдёт позже."
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
      "en": "In the opening scene, a letter lies unopened on the hall table. Later, its news forces the family to leave the city. The unopened envelope can prepare the reader for a change that the characters do not yet expect, so the move may feel less sudden.",
      "ru": "В первой сцене письмо лежит на столике в прихожей нераспечатанным, а позже его новость заставляет семью уехать из города. Нераспечатанный конверт может подготовить читателя к переменам, которых герои пока не ждут, поэтому переезд может казаться менее внезапным."
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
        "title": "British Council — Talking about the future",
        "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/talking-about-future",
        "section": "Present forms, will and going to for future reference",
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
    "russianTerm": "Просмотровое чтение",
    "contrast": {
      "en": "Don't mistake a quick overview for analysis. After skimming you know the gist, but you do not yet have the evidence. Reread the quotations you plan to use before you comment on them.",
      "ru": "Не путай быстрый обзор с анализом: после просмотрового чтения ты знаешь общую идею, но доказательств ещё нет. Прежде чем комментировать, перечитай цитаты, которые собираешься использовать."
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
    "russianTerm": "Поисковое чтение",
    "contrast": {
      "en": "Don't confuse scan with skim. When you scan, you already know what you are looking for, such as a name or a date. When you skim, you are looking for the overall idea.",
      "ru": "Не путай поисковое чтение (scan) и просмотровое (skim). При поисковом чтении ты уже знаешь, что ищешь, например имя или дату; при просмотровом ищешь общую идею."
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
    "russianTerm": "Пометки на тексте",
    "contrast": {
      "en": "Don't confuse annotation with summary notes. An annotation comments on how the text is written, for example “gloomy tone; effect: unease”, not on what happens in the story.",
      "ru": "Не путай пометки с конспектом. Пометка комментирует, как написан текст, например «мрачный тон; эффект — тревога», а не то, что происходит в истории."
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
    "russianTerm": "Чтение между строк",
    "contrast": {
      "en": "Don't mix up the two verbs: a writer implies a meaning, and a reader infers it. Your answer should say what the writer implies and what you infer from it.",
      "ru": "Не путай два глагола: автор подразумевает (implies) смысл, а читатель делает вывод (infer). В ответе пиши, что подразумевает автор и какой вывод делаешь ты."
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
    "russianTerm": "Вопросы на буквальный смысл",
    "contrast": {
      "en": "Not every question with a clear answer is literal. If you must connect several clues to answer it, it is an inferential question.",
      "ru": "Не каждый вопрос с ясным ответом буквальный. Если, чтобы ответить, нужно связать несколько подсказок, это вопрос на вывод."
    },
    "sources": [
      {
        "title": "Merriam-Webster — literal",
        "url": "https://www.merriam-webster.com/dictionary/literal",
        "section": "Adjective sense 1b: explicit wording and ordinary meaning",
        "language": "en"
      },
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
    "russianTerm": "Вопросы на вывод",
    "contrast": {
      "en": "Inferential and evaluation questions can sound alike. First work out what the text implies; only then judge how well it does this.",
      "ru": "Вопросы на вывод и на оценку качества звучат похоже. Сначала выясни, что подразумевает текст, и только потом оцени, насколько удачно он это делает."
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
    "russianTerm": "Языковой анализ",
    "contrast": {
      "en": "Naming a device is not analysis. Explain how the words work and what effect they create.",
      "ru": "Назвать приём — ещё не анализ. Объясни, как работают слова и какой эффект они создают."
    },
    "sources": [
      {
        "title": "Merriam-Webster — analyze",
        "url": "https://www.merriam-webster.com/dictionary/analyze",
        "section": "Transitive verb senses 1–2: components, relationships and grammatical analysis",
        "language": "en"
      },
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
    "russianTerm": "Вопросы на оценку качества",
    "contrast": {
      "en": "Evaluation judges how the text is made, not your opinion of its topic. Agreeing or disagreeing with the writer is not an evaluation.",
      "ru": "Оценка относится к тому, как сделан текст, а не к твоему отношению к теме. Согласие или несогласие с автором — ещё не оценка."
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
    "russianTerm": "Эссе",
    "contrast": {
      "en": "Essay or news report: an essay gives the writer's own view on a topic in free composition; a news report states the facts and usually keeps opinion out.",
      "ru": "Эссе или новостная заметка: эссе излагает авторское отношение к теме свободной композицией; новостная заметка сообщает факты и обычно не выражает мнение."
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
    "russianTerm": "Письмо",
    "contrast": {
      "en": "Letter or email: a formal letter sent by post shows the sender's address and a date at the top; an email has a subject line instead of the address block, and its date and sender are added automatically.",
      "ru": "Письмо или электронное письмо: официальное письмо, отправляемое по почте, пишет адрес отправителя и дату вверху; в электронном письме вместо адресного блока есть тема, а дата и отправитель проставляются автоматически."
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
    "russianTerm": "электронное письмо",
    "contrast": {
      "en": "Email or online article: an email goes to one named recipient, so it can assume shared context; an online article is published for any reader, so it must explain its own context.",
      "ru": "Электронное письмо или онлайн-статья: письмо уходит одному адресату, поэтому может опираться на общий контекст; онлайн-статья публикуется для любого читателя и сама объясняет свой контекст."
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
    "russianTerm": "Речь",
    "contrast": {
      "en": "Speech or essay: a listener cannot re-read, so a speech signals its structure aloud ('First... Finally...'); an essay relies on paragraphs a reader can check again.",
      "ru": "Речь или эссе: слушатель не может перечитать, поэтому речь обозначает структуру вслух («Во-первых… Наконец…»); эссе опирается на абзацы, которые читатель может перечитать."
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
      "en": "News report or letter to the editor: a straight news report keeps facts apart from opinion; a letter to the editor is one reader's opinion on a published issue.",
      "ru": "Новостная заметка или письмо в редакцию: обычная заметка отделяет факты от мнения; письмо в редакцию — мнение одного читателя о опубликованной теме."
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
      "en": "'Online' describes where a text is published, not its genre. Decide the genre from the purpose and register, not from the website.",
      "ru": "«Онлайн» говорит о том, где опубликован текст, а не о его жанре. Жанр определяй по цели и уровню формальности, а не по сайту."
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
      "en": "A blog is written for readers who can reply in the comments, so it addresses them directly. A diary is private, and its writer does not need to address anyone.",
      "ru": "Блог пишут для читателей, которые могут ответить в комментариях, поэтому он обращается к ним напрямую. Личный дневник ведут для себя, и автору не нужно ни к кому обращаться."
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
      "en": "A revision guide is not a textbook or a set of lesson notes. It keeps only what is needed to recall and apply the topic, so it selects content rather than copying all of it.",
      "ru": "Учебное руководство — не учебник и не конспект урока. В нём есть только то, что нужно, чтобы вспомнить и применить тему: материал отобран, а не переписан целиком."
    },
    "sources": [
      {
        "title": "Merriam-Webster — guide",
        "url": "https://www.merriam-webster.com/dictionary/guide",
        "section": "Noun sense 1e: a resource providing information",
        "language": "en"
      }
    ]
  },
  "textTypes.script": {
    "englishTerm": "Script",
    "russianTerm": "Сценарий",
    "contrast": {
      "en": "A line of dialogue is what a character says aloud. A stage direction describes action, movement or sound and is never spoken. Do not write a description of action as dialogue.",
      "ru": "Реплика — то, что персонаж произносит вслух. Ремарка описывает действие, движение или звук и не произносится. Не записывай описание действия как реплику: актёр произнесёт его вслух."
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
    "englishTerm": "PEEL paragraph structure",
    "russianTerm": "Структура абзаца PEEL",
    "contrast": {
      "en": "The Point in PEEL is the claim of one paragraph, not the thesis of the whole answer.",
      "ru": "Мысль в PEEL — утверждение одного абзаца, а не тезис (thesis) всего ответа."
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
            "ru": "Сформулируй мысль, которая отвечает на вопрос."
          }
        },
        {
          "label": {
            "en": "Evidence + explanation",
            "ru": "Доказательство + объяснение"
          },
          "detail": {
            "en": "Use a detail and explain what it shows.",
            "ru": "Приведи деталь и объясни, что она показывает."
          }
        },
        {
          "label": {
            "en": "Link",
            "ru": "Связь"
          },
          "detail": {
            "en": "Connect the explanation to the question.",
            "ru": "Свяжи объяснение с вопросом."
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
      },
      {
        "title": "Purdue OWL — Logical Fallacies",
        "url": "https://owl.purdue.edu/owl/general_writing/academic_writing/logic_in_argumentative_writing/fallacies.html",
        "section": "Either/or, Ad hominem, Straw Man",
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
        "title": "Academy of American Poets — William Shakespeare",
        "url": "https://poets.org/poet/william-shakespeare",
        "section": "Biography; sonnets and dramatic works",
        "language": "en"
      },
      {
        "title": "Academy of American Poets — Iambic Pentameter",
        "url": "https://poets.org/glossary/iambic-pentameter",
        "section": "Definition and use",
        "language": "en"
      },
      {
        "title": "Royal Shakespeare Company — A Midsummer Night’s Dream",
        "url": "https://www.rsc.org.uk/a-midsummer-nights-dream/",
        "section": "Play introduction: comedy",
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
      },
      {
        "title": "Merriam-Webster — furthermore",
        "url": "https://www.merriam-webster.com/dictionary/furthermore",
        "section": "Adverb definition: addition",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — moreover",
        "url": "https://www.merriam-webster.com/dictionary/moreover",
        "section": "Adverb definition: addition",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — consequently",
        "url": "https://www.merriam-webster.com/dictionary/consequently",
        "section": "Adverb definition: consequence",
        "language": "en"
      },
      {
        "title": "Merriam-Webster — therefore",
        "url": "https://www.merriam-webster.com/dictionary/therefore",
        "section": "Adverb definition: consequence",
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
        "section": "Entries: Meter, Rhyme, Stanza, Tone, Imagery",
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
