import type { DefinitionReview } from '../components/content/definitionReview';

export const ARABIC_REVIEWS: Record<string, DefinitionReview> = {
  "rtl": {
    "englishTerm": "Arabic script and joining",
    "russianTerm": "Арабское письмо и соединение букв",
    "contrast": {
      "en": "Right-to-left describes the direction of the text, not of the digits.",
      "ru": "Направление справа налево относится к тексту, но не к цифрам."
    },
    "sources": [
      {
        "title": "Madinah Arabic — Alphabet",
        "url": "https://madinaharabic.com/free-content/reading/lesson-1/part-1",
        "section": "Alphabet chart; vowel marks; reading and sound distinctions",
        "language": "en"
      }
    ]
  },
  "definite": {
    "englishTerm": "Definite article and assimilation",
    "russianTerm": "Определённый артикль и ассимиляция",
    "contrast": {
      "en": "Before a sun letter the written ل stays but is not pronounced: الشَّمْس is read ash-shams, with the sun letter doubled. Before a moon letter, ل is pronounced, as in القَمَر (al-qamar).",
      "ru": "Перед солнечной буквой лам артикля (ل в ال) на письме остаётся, но не произносится: الشَّمْس читается ash-shams, а солнечная буква удваивается. Перед лунной буквой лам артикля (ل в ال) произносится: القَمَر (al-qamar)."
    },
    "sources": [
      {
        "title": "Madinah Arabic — Lesson 3",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-3/part-1",
        "section": "Definite article",
        "language": "en"
      }
    ]
  },
  "gender": {
    "englishTerm": "Grammatical gender and agreement",
    "russianTerm": "Грамматический род и согласование",
    "contrast": {
      "en": "Gender follows the Arabic noun, not its translation: كِتاب is masculine, even though its Russian translation is feminine.",
      "ru": "Род задаёт арабское слово, а не русский перевод: كِتاب — мужского рода, хотя «книга» — женского."
    },
    "sources": [
      {
        "title": "Madinah Arabic — Lesson 6",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-6/part-1",
        "section": "Feminine demonstratives and nouns",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "comparison",
      "title": {
        "en": "Different feminine patterns",
        "ru": "Разные модели женского рода"
      },
      "items": [
        {
          "label": {
            "en": "جَديد / جَديدة",
            "ru": "جَديد / جَديدة"
          },
          "detail": {
            "en": "jadīd → jadīda: add ة",
            "ru": "jadīd → jadīda: добавляется ة"
          }
        },
        {
          "label": {
            "en": "أَحْمَر / حَمْراء",
            "ru": "أَحْمَر / حَمْراء"
          },
          "detail": {
            "en": "aḥmar → ḥamrāʾ: change the pattern",
            "ru": "aḥmar → ḥamrāʾ: меняется модель"
          }
        }
      ],
      "caption": {
        "en": "“Red skirt” uses the feminine colour form, not a masculine adjective plus ة.",
        "ru": "В «красной юбке» нужна женская форма цвета, а не мужская с добавленной ة."
      }
    }
  },
  "plurals": {
    "englishTerm": "Singular, dual and plural",
    "russianTerm": "Единственное, двойственное и множественное число",
    "contrast": {
      "en": "Sound plurals add an ending (مُعَلِّم → مُعَلِّمون), but broken plurals change the internal pattern (كِتاب → كُتُب), so learn each noun with its plural.",
      "ru": "Правильное множественное добавляет окончание (مُعَلِّم → مُعَلِّمون), а ломаное меняет внутреннюю модель слова (كِتاب → كُتُب). Поэтому учи множественное вместе с каждым существительным."
    },
    "sources": [
      {
        "title": "Madinah Arabic — Lesson 13",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-13/part-1",
        "section": "Plural forms",
        "language": "en"
      },
      {
        "title": "Madinah Arabic — Lesson 17",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-17/part-1",
        "section": "Rational and non-rational nouns; agreement",
        "language": "en"
      }
    ]
  },
  "pronouns": {
    "englishTerm": "Personal pronouns and finite forms",
    "russianTerm": "Личные местоимения и личные формы",
    "sources": [
      {
        "title": "Madinah Arabic — Lesson 23",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-23/part-4",
        "section": "Pronouns and their types",
        "language": "en"
      },
      {
        "title": "Madinah Arabic — Lesson 10",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-10/part-1",
        "section": "Possessive pronouns",
        "language": "en"
      },
      {
        "title": "Madinah Arabic — Lesson 28",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-28/part-2",
        "section": "Verb forms and parts of speech",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "comparison",
      "title": {
        "en": "The prefix carries person",
        "ru": "Приставка передаёт лицо"
      },
      "items": [
        {
          "label": {
            "en": "أَدْرُس — adrus",
            "ru": "أَدْرُس — adrus"
          },
          "detail": {
            "en": "I study: first-person singular",
            "ru": "Я учусь: первое лицо, единственное"
          }
        },
        {
          "label": {
            "en": "يَدْرُس — yadrus",
            "ru": "يَدْرُس — yadrus"
          },
          "detail": {
            "en": "He studies: third-person masculine singular",
            "ru": "Он учится: третье лицо, муж. единственное"
          }
        }
      ],
      "caption": {
        "en": "Do not translate these finite forms as “to study” or as a command.",
        "ru": "Эти личные формы нельзя переводить как инфинитив или приказ."
      }
    }
  },
  "idafa": {
    "englishTerm": "Iḍāfa: noun–noun construction",
    "russianTerm": "Идафа: именная конструкция",
    "contrast": {
      "en": "Do not put al- or tanwīn on the first noun of an iḍāfa: write كِتابُ المُعَلِّمِ, not الكِتابُ المُعَلِّمِ.",
      "ru": "Не ставь ал- и танвин на первое слово идафы: пиши كِتابُ المُعَلِّمِ, а не الكِتابُ المُعَلِّمِ."
    },
    "sources": [
      {
        "title": "Madinah Arabic — Lesson 5",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-5/part-1",
        "section": "Possessive expression",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "parts",
      "title": {
        "en": "Build “the teacher’s book”",
        "ru": "Построй «книгу учителя»"
      },
      "items": [
        {
          "label": {
            "en": "كِتابُ — kitābu",
            "ru": "كِتابُ — kitābu"
          },
          "detail": {
            "en": "First noun: no al-, no tanwīn",
            "ru": "Первое имя: без al- и танвина"
          }
        },
        {
          "label": {
            "en": "المُعَلِّمِ — al-muʿallimi",
            "ru": "المُعَلِّمِ — al-muʿallimi"
          },
          "detail": {
            "en": "Second noun: genitive; definite here",
            "ru": "Второе имя: родительный; здесь определённое"
          }
        }
      ],
      "caption": {
        "en": "The genitive link expresses the relationship without a separate word for “of”.",
        "ru": "Родительный связывает слова без отдельного предлога."
      }
    }
  },
  "phonetics": {
    "englishTerm": "Script, sound and reading aid",
    "russianTerm": "Буква, звук и подсказка для чтения",
    "contrast": {
      "en": "A transliteration represents writing; a pronunciation aid approximates sound. The lesson aids are pedagogical and not IPA. Listen to Arabic audio to learn distinctions that English and Russian lack.",
      "ru": "Транслитерация передаёт письмо, подсказка произношения — приблизительное звучание. Здесь используются учебные подсказки, а не МФА. Различия, отсутствующие в русском и английском, нужно осваивать по арабскому аудио."
    },
    "sources": [
      {
        "title": "Madinah Arabic — Alphabet",
        "url": "https://madinaharabic.com/free-content/reading/lesson-1/part-1",
        "section": "Alphabet chart; vowel marks; reading and sound distinctions",
        "language": "en"
      }
    ],
    "visual": {
      "kind": "comparison",
      "title": {
        "en": "Do not merge these sounds",
        "ru": "Различай эти звуки"
      },
      "items": [
        {
          "label": {
            "en": "ء — hamza — ʾ",
            "ru": "ء — хамза — ʾ"
          },
          "detail": {
            "en": "Glottal stop: a closure at the vocal folds",
            "ru": "Гортанная смычка: смыкание голосовых складок"
          }
        },
        {
          "label": {
            "en": "ع — ʿayn — ʿ",
            "ru": "ع — ʿайн — ʿ"
          },
          "detail": {
            "en": "Voiced pharyngeal consonant",
            "ru": "Звонкий глоточный согласный"
          }
        },
        {
          "label": {
            "en": "ح / ه — ḥ / h",
            "ru": "ح / ه — ḥ / h"
          },
          "detail": {
            "en": "Two different consonants, not one h",
            "ru": "Два разных согласных, а не один h"
          }
        }
      ],
      "caption": {
        "en": "The symbols distinguish sounds; the reading aid does not replace listening.",
        "ru": "Символы различают звуки; подсказка не заменяет слушания."
      }
    }
  },
  "vocabulary": {
    "englishTerm": "Contextual meaning and inflection",
    "russianTerm": "Контекстное значение и форма",
    "contrast": {
      "en": "The lesson verbs are first-person singular; the reference set mostly uses third-person masculine singular. A gloss names the displayed form and does not list every dictionary meaning.",
      "ru": "В уроке глаголы первого лица единственного числа, в справочнике — в основном третьего лица мужского рода. Перевод отражает показанную форму и не перечисляет все словарные значения."
    },
    "sources": [
      {
        "title": "Madinah Arabic — Lesson 28",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-28/part-2",
        "section": "Verb forms and parts of speech",
        "language": "en"
      },
      {
        "title": "Madinah Arabic — Lesson 29",
        "url": "https://madinaharabic.com/free-content/grammar/lesson-29/part-2",
        "section": "Time reference",
        "language": "en"
      }
    ]
  },
  "verbForms": {
    "englishTerm": "Root and pattern; verb forms",
    "russianTerm": "Корень и модель; породы глагола",
    "contrast": {
      "en": "Root consonants and a pattern work together; I–X is an introductory account of common triliteral patterns, not all Arabic morphology.",
      "ru": "Корневые согласные и модель работают вместе; I–X — начальное описание частых трёхсогласных моделей, а не вся морфология арабского."
    },
    "sources": [
      {
        "title": "Quranic Arabic Corpus — Verb Forms (University of Leeds research)",
        "url": "https://corpus.quran.com/documentation/verbforms.jsp",
        "language": "en",
        "section": "Triliteral Verb Forms; Figure 3: patterns I–X and roots not occurring in every form"
      }
    ],
    "model": {
      "en": "The I–X templates come from Classical Arabic and are also used in standard descriptions of Modern Standard Arabic; learn each actual verb’s meaning rather than deriving it mechanically from a pattern.",
      "ru": "Модели I–X пришли из классического арабского и применяются в описаниях современного литературного арабского; значение каждого глагола нужно изучать, а не механически выводить из модели."
    }
  },
  "numerals": {
    "englishTerm": "Arabic-Indic digits (٠–٩)",
    "russianTerm": "Арабо-индийские цифры (٠–٩)",
    "contrast": {
      "en": "Letters run right to left; digits run left to right, highest place value on the left.",
      "ru": "Буквы пишутся справа налево, а цифры (0–9, ٠–٩) — слева направо, старший разряд слева."
    },
    "sources": [
      {
        "title": "W3C — Arabic & Persian Layout Requirements (Group Draft Note)",
        "url": "https://www.w3.org/TR/alreq/",
        "language": "en",
        "section": "6.1.1 Preferred Terminology; 6.1.2 Families of Numerals; 6.1.3 Formatting of Numerals"
      }
    ]
  },
  "culture": {
    "englishTerm": "Language and cultural context",
    "russianTerm": "Язык и культурный контекст",
    "contrast": {
      "en": "Arabic language, religious identity and nationality are distinct categories.",
      "ru": "Арабский язык, религиозная принадлежность и национальность — разные категории."
    },
    "sources": [
      {
        "title": "The Metropolitan Museum of Art — Calligraphy in Islamic Art",
        "url": "https://www.metmuseum.org/essays/calligraphy-in-islamic-art",
        "language": "en",
        "section": "Curatorial essay: Arabic script, text and ornament"
      },
      {
        "title": "The Metropolitan Museum of Art — The Nature of Islamic Art",
        "url": "https://www.metmuseum.org/essays/the-nature-of-islamic-art",
        "language": "en",
        "section": "Curatorial essay: scope, regional traditions and cultural context"
      }
    ]
  },
  "dialects.msa": {
    "englishTerm": "Modern Standard Arabic (MSA)",
    "russianTerm": "Современный литературный арабский (MSA)",
    "contrast": {
      "en": "MSA is related to Classical Arabic, but it is not identical to all historical or Qur'anic usage. Do not rank it as 'purer' than regional varieties: speakers often shift between MSA and regional forms according to the setting.",
      "ru": "MSA связан с классическим арабским, но не совпадает со всем историческим и коранским употреблением. Не считай его «чище» региональных разновидностей: говорящие часто переключаются между MSA и региональными формами в зависимости от ситуации."
    },
    "sources": [
      {
        "title": "Georgetown University Press — Al-Kitaab",
        "url": "https://alkitaabtextbook.com/",
        "section": "Integrated teaching of formal and spoken Arabic varieties",
        "language": "en"
      }
    ]
  },
  "dialects.egyptian": {
    "englishTerm": "Egyptian Arabic",
    "russianTerm": "Египетский арабский",
    "contrast": {
      "en": "Egyptian Arabic is a group of regional spoken varieties, not a single dialect. Cairo speech is prominent in films and other media, but it is only one of these varieties.",
      "ru": "Египетский арабский — группа региональных разговорных разновидностей, а не один диалект. Каирская речь широко представлена в кино и других медиа, но это лишь одна из них."
    },
    "sources": [
      {
        "title": "Georgetown University Press — Al-Kitaab",
        "url": "https://alkitaabtextbook.com/",
        "section": "Integrated teaching of formal and spoken Arabic varieties",
        "language": "en"
      }
    ]
  },
  "dialects.levantine": {
    "englishTerm": "Levantine Arabic",
    "russianTerm": "Левантийский арабский",
    "contrast": {
      "en": "Levantine covers urban and rural varieties in Syria, Lebanon, Jordan and Palestine, so it is a group rather than one accent. Historical q is not pronounced the same way in all of them: some varieties make it a glottal stop, while others keep or change it differently.",
      "ru": "Левантийский объединяет городские и сельские разновидности Сирии, Ливана, Иордании и Палестины, поэтому это группа, а не один говор. Историческое ق (q) произносится в них неодинаково: в одних разновидностях оно становится гортанной смычкой, в других сохраняется или меняется иначе."
    },
    "sources": [
      {
        "title": "Georgetown University Press — Al-Kitaab",
        "url": "https://alkitaabtextbook.com/",
        "section": "Integrated teaching of formal and spoken Arabic varieties",
        "language": "en"
      }
    ]
  },
  "dialects.gulf": {
    "englishTerm": "Gulf Arabic",
    "russianTerm": "Арабский Персидского залива",
    "contrast": {
      "en": "Gulf Arabic (Khaleeji) is a regional label rather than one uniform variety. It does not mean that all speakers use the same pronunciation, vocabulary or grammar, so learn the variety relevant to your conversations.",
      "ru": "Арабский Персидского залива (халиджи) — региональное название, а не одна однородная разновидность. Оно не значит, что все говорящие одинаково произносят слова, выбирают лексику и строят фразы: учи ту разновидность, которая нужна для твоих разговоров."
    },
    "sources": [
      {
        "title": "Qasid Arabic Institute — Gulf Dialect (Khaleeji)",
        "url": "https://www.qasidonline.com/gulf-dialect-khaleeji",
        "language": "en",
        "section": "Program introduction; Level 1: everyday spoken Arabic in the Gulf"
      }
    ]
  },
  "dialects.maghrebi": {
    "englishTerm": "Maghrebi Arabic",
    "russianTerm": "Магрибский арабский",
    "contrast": {
      "en": "Maghrebi Arabic covers varieties west of Egypt, such as Moroccan, Algerian, Tunisian and Libyan, so Egyptian Arabic is a separate group.",
      "ru": "Магрибский арабский — разновидности к западу от Египта, например марокканская, алжирская, тунисская и ливийская. Египетский арабский относится к другой группе."
    },
    "sources": [
      {
        "title": "Qasid Arabic Institute — Arabic dialects",
        "url": "https://www.qasidonline.com/blog/the-ultimate-guide-to-arabic-dialects",
        "language": "en",
        "section": "Types of Arabic Dialects by Region — Maghrebi Arabic; local variety within groups"
      }
    ]
  },
  "literature.darwish": {
    "englishTerm": "Mahmoud Darwish (1941–2008)",
    "russianTerm": "Махмуд Дарвиш (1941–2008)",
    "contrast": {
      "en": "Darwish's general themes, such as displacement and identity, do not tell you what one particular poem says. Read the text of the poem itself, for example 'Identity Card', rather than assuming one political message across his work.",
      "ru": "Общие темы Дарвиша — изгнание, идентичность, память — не определяют смысл отдельного стихотворения. Читай текст конкретного стихотворения, например, «Удостоверение личности», а не считай всё его творчество одним политическим посланием."
    },
    "sources": [
      {
        "title": "Author reference: Mahmoud Darwish (1941–2008)",
        "url": "https://poets.org/poet/mahmoud-darwish",
        "section": "Biography / facts",
        "language": "en"
      }
    ]
  },
  "literature.gibran": {
    "englishTerm": "Kahlil Gibran (1883–1931)",
    "russianTerm": "Халиль Джебран (1883–1931)",
    "contrast": {
      "en": "Gibran wrote in both Arabic and English, but The Prophet was written in English, so it is not a translation from Arabic.",
      "ru": "Джебран писал и по-арабски, и по-английски, но «Пророк» написан по-английски, поэтому это не перевод с арабского."
    },
    "sources": [
      {
        "title": "Author reference: Kahlil Gibran (1883–1931)",
        "url": "https://poets.org/poet/kahlil-gibran",
        "section": "Biography / facts",
        "language": "en"
      }
    ]
  },
  "literature.mahfouz": {
    "englishTerm": "Naguib Mahfouz (1911–2006)",
    "russianTerm": "Нагиб Махфуз (1911–2006)",
    "contrast": {
      "en": "The Cairo Trilogy follows family life and social change across generations, but a novel is an artistic representation rather than a transparent historical record. Treat it as literature, not as a history book.",
      "ru": "«Каирская трилогия» показывает семейную жизнь и общественные перемены через несколько поколений, но роман — художественное изображение, а не прозрачная историческая запись. Относись к нему как к литературе, а не как к учебнику истории."
    },
    "sources": [
      {
        "title": "Author reference: Naguib Mahfouz (1911–2006)",
        "url": "https://www.nobelprize.org/prizes/literature/1988/mahfouz/facts/",
        "section": "Biography / facts",
        "language": "en"
      }
    ]
  },
  "literature.qabbani": {
    "englishTerm": "Nizar Qabbani",
    "russianTerm": "Низар Каббани",
    "contrast": {
      "en": "Qabbani's work includes both love and political poetry, so a biography does not tell you what one poem is about. Check the poem's own text before deciding whether it is romantic or political.",
      "ru": "У Каббани есть и любовная, и политическая поэзия, поэтому биография не скажет, о чём конкретное стихотворение. Сначала прочитай его текст, а потом решай, о любви оно или о политике."
    },
    "sources": [
      {
        "title": "Publisher reference — Nizar Qabbani",
        "url": "https://wordswithoutborders.org/contributors/view/nizar-qabbani/",
        "section": "Publisher biography",
        "language": "en"
      }
    ]
  },
  "literature.nights": {
    "englishTerm": "One Thousand and One Nights",
    "russianTerm": "«Тысяча и одна ночь»",
    "contrast": {
      "en": "The title refers to a collection, not one fixed text: versions and translations include different stories. The frame story, in which Shahrazad tells stories to King Shahriyar, links the tales but does not fix their contents.",
      "ru": "«Тысяча и одна ночь» — название собрания, а не один фиксированный текст: версии и переводы включают разные истории. Рамочный рассказ о Шахразаде и царе Шахрияре связывает сказки, но не фиксирует их состав."
    },
    "sources": [
      {
        "title": "Publisher reference — One Thousand and One Nights",
        "url": "https://www.pookpress.co.uk/project/arabian-nights-one-thousand-and-one-nights/",
        "section": "Origins; history; translations and versions",
        "language": "en"
      }
    ]
  }
};
