export interface ArabicLetter { isolated: string; initial: string; medial: string; final: string; name: string; translit: string; sound: string; soundRu: string; }
export interface ArabicVocabItem { ar: string; translit: string; en: string; ru: string; }
export interface ArabicVocabTheme { id: string; titleEn: string; titleRu: string; items: ArabicVocabItem[]; }
export interface ArabicGrammarRuleDetail { body: string; examples?: string[]; tip?: string; watchOut?: string; }
export interface ArabicGrammarRule { id: string; titleEn: string; titleRu: string; body: string; bodyRu: string; detailsEn?: ArabicGrammarRuleDetail; detailsRu?: ArabicGrammarRuleDetail; }
export interface ArabicPhrase { ar: string; translit: string; en: string; ru: string; context: string; }

export const ARABIC_LETTERS: ArabicLetter[] = [
  {
    "isolated": "ا",
    "initial": "ا",
    "medial": "ـا",
    "final": "ـا",
    "name": "ʾalif",
    "translit": "ā / carrier",
    "sound": "long ā; can carry hamza (أ / إ), which represents a glottal stop",
    "soundRu": "долгое ā; может нести хамзу (أ / إ), обозначающую гортанную смычку"
  },
  {
    "isolated": "ب",
    "initial": "بـ",
    "medial": "ـبـ",
    "final": "ـب",
    "name": "bāʾ",
    "translit": "b",
    "sound": "b",
    "soundRu": "b, примерно «б»"
  },
  {
    "isolated": "ت",
    "initial": "تـ",
    "medial": "ـتـ",
    "final": "ـت",
    "name": "tāʾ",
    "translit": "t",
    "sound": "t",
    "soundRu": "t, примерно «т»"
  },
  {
    "isolated": "ث",
    "initial": "ثـ",
    "medial": "ـثـ",
    "final": "ـث",
    "name": "thāʾ",
    "translit": "th",
    "sound": "th (think)",
    "soundRu": "глухой межзубный, как th в think"
  },
  {
    "isolated": "ج",
    "initial": "جـ",
    "medial": "ـجـ",
    "final": "ـج",
    "name": "jīm",
    "translit": "j",
    "sound": "usually j (jam) in MSA; regional pronunciation varies",
    "soundRu": "обычно j как в jam; есть региональные варианты"
  },
  {
    "isolated": "ح",
    "initial": "حـ",
    "medial": "ـحـ",
    "final": "ـح",
    "name": "ḥāʾ",
    "translit": "ḥ",
    "sound": "h (deep, throaty)",
    "soundRu": "глухой глоточный; отличается от ه"
  },
  {
    "isolated": "خ",
    "initial": "خـ",
    "medial": "ـخـ",
    "final": "ـخ",
    "name": "khāʾ",
    "translit": "kh",
    "sound": "kh (Bach)",
    "soundRu": "kh, примерно «х»"
  },
  {
    "isolated": "د",
    "initial": "د",
    "medial": "ـد",
    "final": "ـد",
    "name": "dāl",
    "translit": "d",
    "sound": "d",
    "soundRu": "d, примерно «д»"
  },
  {
    "isolated": "ذ",
    "initial": "ذ",
    "medial": "ـذ",
    "final": "ـذ",
    "name": "dhāl",
    "translit": "dh",
    "sound": "th (that)",
    "soundRu": "звонкий межзубный, как th в that"
  },
  {
    "isolated": "ر",
    "initial": "ر",
    "medial": "ـر",
    "final": "ـر",
    "name": "rāʾ",
    "translit": "r",
    "sound": "r (rolled)",
    "soundRu": "r, обычно вибрирующий"
  },
  {
    "isolated": "ز",
    "initial": "ز",
    "medial": "ـز",
    "final": "ـز",
    "name": "zāy",
    "translit": "z",
    "sound": "z",
    "soundRu": "z, примерно «з»"
  },
  {
    "isolated": "س",
    "initial": "سـ",
    "medial": "ـسـ",
    "final": "ـس",
    "name": "sīn",
    "translit": "s",
    "sound": "s",
    "soundRu": "s, примерно «с»"
  },
  {
    "isolated": "ش",
    "initial": "شـ",
    "medial": "ـشـ",
    "final": "ـش",
    "name": "shīn",
    "translit": "sh",
    "sound": "sh",
    "soundRu": "sh, примерно «ш»"
  },
  {
    "isolated": "ص",
    "initial": "صـ",
    "medial": "ـصـ",
    "final": "ـص",
    "name": "ṣād",
    "translit": "ṣ",
    "sound": "s (emphatic)",
    "soundRu": "эмфатический s; отличается от س"
  },
  {
    "isolated": "ض",
    "initial": "ضـ",
    "medial": "ـضـ",
    "final": "ـض",
    "name": "ḍād",
    "translit": "ḍ",
    "sound": "d (emphatic)",
    "soundRu": "эмфатический d; отличается от د"
  },
  {
    "isolated": "ط",
    "initial": "طـ",
    "medial": "ـطـ",
    "final": "ـط",
    "name": "ṭāʾ",
    "translit": "ṭ",
    "sound": "t (emphatic)",
    "soundRu": "эмфатический t; отличается от ت"
  },
  {
    "isolated": "ظ",
    "initial": "ظـ",
    "medial": "ـظـ",
    "final": "ـظ",
    "name": "ẓāʾ",
    "translit": "ẓ",
    "sound": "emphatic voiced “th” in standard pronunciation; dialects vary",
    "soundRu": "эмфатический звонкий межзубный в стандартном произношении"
  },
  {
    "isolated": "ع",
    "initial": "عـ",
    "medial": "ـعـ",
    "final": "ـع",
    "name": "ʿayn",
    "translit": "ʿ",
    "sound": "voiced pharyngeal sound; distinct from hamza ء (glottal stop)",
    "soundRu": "звонкий глоточный звук; не гортанная смычка ء"
  },
  {
    "isolated": "غ",
    "initial": "غـ",
    "medial": "ـغـ",
    "final": "ـغ",
    "name": "ghayn",
    "translit": "gh",
    "sound": "voiced friction toward the back of the mouth; only approximately like some French r sounds",
    "soundRu": "звонкий щелевой в задней части рта; приближение к некоторым французским r"
  },
  {
    "isolated": "ف",
    "initial": "فـ",
    "medial": "ـفـ",
    "final": "ـف",
    "name": "fāʾ",
    "translit": "f",
    "sound": "f",
    "soundRu": "f, примерно «ф»"
  },
  {
    "isolated": "ق",
    "initial": "قـ",
    "medial": "ـقـ",
    "final": "ـق",
    "name": "qāf",
    "translit": "q",
    "sound": "q (deep k)",
    "soundRu": "глухой увулярный смычный; произносится глубже, чем ك"
  },
  {
    "isolated": "ك",
    "initial": "كـ",
    "medial": "ـكـ",
    "final": "ـك",
    "name": "kāf",
    "translit": "k",
    "sound": "k",
    "soundRu": "k, примерно «к»"
  },
  {
    "isolated": "ل",
    "initial": "لـ",
    "medial": "ـلـ",
    "final": "ـل",
    "name": "lām",
    "translit": "l",
    "sound": "l",
    "soundRu": "l, примерно «л»"
  },
  {
    "isolated": "م",
    "initial": "مـ",
    "medial": "ـمـ",
    "final": "ـم",
    "name": "mīm",
    "translit": "m",
    "sound": "m",
    "soundRu": "m, примерно «м»"
  },
  {
    "isolated": "ن",
    "initial": "نـ",
    "medial": "ـنـ",
    "final": "ـن",
    "name": "nūn",
    "translit": "n",
    "sound": "n",
    "soundRu": "n, примерно «н»"
  },
  {
    "isolated": "ه",
    "initial": "هـ",
    "medial": "ـهـ",
    "final": "ـه",
    "name": "hāʾ",
    "translit": "h",
    "sound": "h (light)",
    "soundRu": "лёгкий h; отличается от ح"
  },
  {
    "isolated": "و",
    "initial": "و",
    "medial": "ـو",
    "final": "ـو",
    "name": "wāw",
    "translit": "w/ū",
    "sound": "w or long u",
    "soundRu": "w или долгое ū"
  },
  {
    "isolated": "ي",
    "initial": "يـ",
    "medial": "ـيـ",
    "final": "ـي",
    "name": "yāʾ",
    "translit": "y/ī",
    "sound": "y or long i",
    "soundRu": "y или долгое ī"
  }
];

export const VOCAB_THEMES: ArabicVocabTheme[] = [
  {
    "id": "greetings",
    "titleEn": "Greetings & basics",
    "titleRu": "Приветствия и основы",
    "items": [
      {
        "ar": "مَرْحَبًا",
        "translit": "marḥaban",
        "en": "hello",
        "ru": "здравствуй"
      },
      {
        "ar": "السَّلامُ عَلَيْكُمْ",
        "translit": "as-salāmu ʿalaykum",
        "en": "peace be upon you (greeting)",
        "ru": "мир вам"
      },
      {
        "ar": "وَعَلَيْكُمُ السَّلام",
        "translit": "wa-ʿalaykum as-salām",
        "en": "and upon you peace (reply)",
        "ru": "и вам мир"
      },
      {
        "ar": "مَعَ السَّلامة",
        "translit": "maʿa s-salāma",
        "en": "goodbye",
        "ru": "до свидания"
      },
      {
        "ar": "شُكْرًا",
        "translit": "shukran",
        "en": "thank you",
        "ru": "спасибо"
      },
      {
        "ar": "عَفْوًا",
        "translit": "ʿafwan",
        "en": "you're welcome",
        "ru": "пожалуйста"
      },
      {
        "ar": "نَعَم",
        "translit": "naʿam",
        "en": "yes",
        "ru": "да"
      },
      {
        "ar": "لا",
        "translit": "lā",
        "en": "no",
        "ru": "нет"
      },
      {
        "ar": "مِنْ فَضْلِك",
        "translit": "min faḍlika (m) / min faḍliki (f)",
        "en": "please (addressing one person)",
        "ru": "пожалуйста (обращение к одному человеку)"
      },
      {
        "ar": "كَيْفَ حالُك؟",
        "translit": "kayfa ḥāluka? (m) / ḥāluki? (f)",
        "en": "how are you?",
        "ru": "как ты? (к одному человеку)"
      },
      {
        "ar": "بِخَيْر",
        "translit": "bi-khayr",
        "en": "fine / well",
        "ru": "хорошо"
      },
      {
        "ar": "اسْمي…",
        "translit": "ismī…",
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
        "ar": "العائِلة",
        "translit": "al-ʿāʾila",
        "en": "family",
        "ru": "семья"
      },
      {
        "ar": "الأَب",
        "translit": "al-ʾab",
        "en": "father",
        "ru": "отец"
      },
      {
        "ar": "الأُم",
        "translit": "al-ʾumm",
        "en": "mother",
        "ru": "мать"
      },
      {
        "ar": "الأَخ",
        "translit": "al-ʾakh",
        "en": "brother",
        "ru": "брат"
      },
      {
        "ar": "الأُخْت",
        "translit": "al-ʾukht",
        "en": "sister",
        "ru": "сестра"
      },
      {
        "ar": "الجَد",
        "translit": "al-jadd",
        "en": "grandfather",
        "ru": "дедушка"
      },
      {
        "ar": "الجَدّة",
        "translit": "al-jadda",
        "en": "grandmother",
        "ru": "бабушка"
      },
      {
        "ar": "الابْن",
        "translit": "al-ibn",
        "en": "son",
        "ru": "сын"
      },
      {
        "ar": "البِنْت",
        "translit": "al-bint",
        "en": "daughter / girl",
        "ru": "дочь / девочка"
      }
    ]
  },
  {
    "id": "school",
    "titleEn": "School",
    "titleRu": "Школа",
    "items": [
      {
        "ar": "المَدْرَسة",
        "translit": "al-madrasa",
        "en": "school",
        "ru": "школа"
      },
      {
        "ar": "الفَصْل",
        "translit": "al-faṣl",
        "en": "classroom (here); also season",
        "ru": "классная комната (здесь); также время года"
      },
      {
        "ar": "المُعَلِّم",
        "translit": "al-muʿallim",
        "en": "teacher (m)",
        "ru": "учитель"
      },
      {
        "ar": "الطَّالِب",
        "translit": "aṭ-ṭālib",
        "en": "student (m)",
        "ru": "ученик"
      },
      {
        "ar": "الكِتاب",
        "translit": "al-kitāb",
        "en": "book",
        "ru": "книга"
      },
      {
        "ar": "القَلَم",
        "translit": "al-qalam",
        "en": "pen",
        "ru": "ручка"
      },
      {
        "ar": "الواجِب",
        "translit": "al-wājib",
        "en": "homework",
        "ru": "домашнее задание"
      },
      {
        "ar": "الامْتِحان",
        "translit": "al-imtiḥān",
        "en": "exam",
        "ru": "экзамен"
      }
    ]
  },
  {
    "id": "time",
    "titleEn": "Time & weather",
    "titleRu": "Время и погода",
    "items": [
      {
        "ar": "اليَوْم",
        "translit": "al-yawm",
        "en": "the day / today (by context)",
        "ru": "день / сегодня (по контексту)"
      },
      {
        "ar": "أَمْس",
        "translit": "ʾams",
        "en": "yesterday",
        "ru": "вчера"
      },
      {
        "ar": "غَدًا",
        "translit": "ghadan",
        "en": "tomorrow",
        "ru": "завтра"
      },
      {
        "ar": "الصَّباح",
        "translit": "aṣ-ṣabāḥ",
        "en": "morning",
        "ru": "утро"
      },
      {
        "ar": "المَساء",
        "translit": "al-masāʾ",
        "en": "evening",
        "ru": "вечер"
      },
      {
        "ar": "اللَّيْل",
        "translit": "al-layl",
        "en": "night",
        "ru": "ночь"
      },
      {
        "ar": "الشَّمْس",
        "translit": "ash-shams",
        "en": "sun",
        "ru": "солнце"
      },
      {
        "ar": "المَطَر",
        "translit": "al-maṭar",
        "en": "rain",
        "ru": "дождь"
      },
      {
        "ar": "حار",
        "translit": "ḥārr",
        "en": "hot (masculine adjective)",
        "ru": "горячий / жаркий (м. р.)"
      },
      {
        "ar": "بارِد",
        "translit": "bārid",
        "en": "cold (masculine adjective)",
        "ru": "холодный (м. р.)"
      }
    ]
  },
  {
    "id": "verbs",
    "titleEn": "Verb forms & possession",
    "titleRu": "Формы глаголов и обладание",
    "items": [
      {
        "ar": "يَكُون",
        "translit": "yakūnu",
        "en": "he is (a form of ‘to be’; use depends on context)",
        "ru": "он бывает / является (форма глагола «быть»; зависит от контекста)"
      },
      {
        "ar": "لَدَيْه",
        "translit": "ladayhi",
        "en": "he has (literally: with him)",
        "ru": "у него есть (не глагол)"
      },
      {
        "ar": "يَذْهَب",
        "translit": "yadhhab",
        "en": "he goes",
        "ru": "он идёт / едет"
      },
      {
        "ar": "يَأْتي",
        "translit": "yaʾtī",
        "en": "he comes",
        "ru": "он приходит"
      },
      {
        "ar": "يَأْكُل",
        "translit": "yaʾkul",
        "en": "he eats",
        "ru": "он ест"
      },
      {
        "ar": "يَشْرَب",
        "translit": "yashrab",
        "en": "he drinks",
        "ru": "он пьёт"
      },
      {
        "ar": "يَتَكَلَّم",
        "translit": "yatakallam",
        "en": "he speaks",
        "ru": "он говорит"
      },
      {
        "ar": "يَقْرَأ",
        "translit": "yaqraʾ",
        "en": "he reads",
        "ru": "он читает"
      },
      {
        "ar": "يَكْتُب",
        "translit": "yaktub",
        "en": "he writes",
        "ru": "он пишет"
      },
      {
        "ar": "يُحِب",
        "translit": "yuḥibb",
        "en": "he likes / loves",
        "ru": "он любит"
      },
      {
        "ar": "يُريد",
        "translit": "yurīd",
        "en": "he wants",
        "ru": "он хочет"
      },
      {
        "ar": "يَدْرُس",
        "translit": "yadrus",
        "en": "he studies",
        "ru": "он учится / изучает"
      }
    ]
  }
];

export const GRAMMAR_RULES: ArabicGrammarRule[] = [
  {
    "id": "rtl",
    "titleEn": "Direction & script",
    "titleRu": "Направление и письмо",
    "body": "Arabic text runs from right to left. A letter’s shape depends on both its position and which neighbours can join: isolated, initial, medial or final. ا د ذ ر ز و join to a preceding joinable letter on the right but do not join to the following letter on the left.",
    "bodyRu": "Арабский текст пишется справа налево. Форма буквы зависит от позиции и соединения с соседями: изолированная, начальная, средняя или конечная. ا د ذ ر ز و могут соединяться с подходящей предыдущей буквой справа, но не со следующей слева.",
    "detailsEn": {
      "body": "Arabic script mainly records consonants and long vowels; short vowels can be added as marks. Calling it an abjad does not mean that every written sign is a consonant. Letter shapes encode joining, not four different sounds. Western and Eastern Arabic digit strings place the highest place value on the left; spoken number order is a separate matter.",
      "examples": [
        "كَتَبَ kataba — he wrote: كـ + ـتـ + ـب join within one word.",
        "دار dār — house: د and ا do not join to the next letter.",
        "٢٠٢٦ represents 2026: thousands → hundreds → tens → units from left to right."
      ],
      "watchOut": "Hamza ء represents a glottal stop; ʿayn ع is a different pharyngeal consonant. Latin and Cyrillic reading aids are approximations, not IPA."
    },
    "detailsRu": {
      "body": "Арабское письмо передаёт главным образом согласные и долгие гласные; краткие гласные можно обозначать огласовками. Термин «абджад» не означает, что каждый знак — согласный. Формы букв отражают соединение, а не четыре разных звука. В записи числа западными и восточными арабскими цифрами старший разряд находится слева; порядок произнесения — отдельный вопрос.",
      "examples": [
        "كَتَبَ kataba — он написал: كـ + ـتـ + ـب соединены в слове.",
        "دار dār — дом: د и ا не соединяются со следующей буквой.",
        "٢٠٢٦ — 2026: тысячи → сотни → десятки → единицы слева направо."
      ],
      "watchOut": "Хамза ء обозначает гортанную смычку; ʿайн ع — другой, глоточный согласный. Латинские и кириллические подсказки приблизительны и не являются МФА."
    }
  },
  {
    "id": "definite",
    "titleEn": "Definite article (الـ)",
    "titleRu": "Определённый артикль (الـ)",
    "body": "The definite article الـ (al-) attaches to its word. Before a sun letter its l assimilates to that consonant, which is doubled: الشَّمْس ash-shams. Before a moon letter l remains audible: القَمَر al-qamar.",
    "bodyRu": "Определённый артикль الـ (al-) пишется слитно со словом. Перед солнечной буквой l уподобляется ей, а согласный удваивается: الشَّمْس ash-shams. Перед лунной l произносится: القَمَر al-qamar.",
    "detailsEn": {
      "body": "Definiteness helps identify a referent or a class, but Arabic and English articles do not correspond word for word. Arabic has no separate indefinite article like a/an. In fully vowelled text, many indefinite nouns take tanwīn, but not every word without al- is indefinite: proper names and possessive constructions can be definite too.",
      "examples": [
        "Sun letters: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. The written ل remains: الدَّرْس ad-dars — the lesson.",
        "Moon-letter example: الكِتاب al-kitāb — the book.",
        "كِتابٌ kitābun — a book; الكِتابُ al-kitābu — the book (full nominative endings)."
      ],
      "watchOut": "Do not classify moon letters as all “made at the back of the mouth”: ب and م are made with the lips. The grouping describes article assimilation."
    },
    "detailsRu": {
      "body": "Определённость помогает выделить известный предмет или класс, однако арабский и английский артикли не переводятся механически. Отдельного неопределённого артикля вроде a/an нет. В полностью огласованном тексте многие неопределённые существительные имеют танвин, но отсутствие al- не всегда означает неопределённость: имена и притяжательные конструкции тоже могут быть определёнными.",
      "examples": [
        "Солнечные: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. На письме ل остаётся: الدَّرْس ad-dars — урок.",
        "Пример с лунной: الكِتاب al-kitāb — книга.",
        "كِتابٌ kitābun — неопределённая книга; الكِتابُ al-kitābu — определённая (полные окончания именительного падежа)."
      ],
      "watchOut": "Лунные буквы не все произносятся «глубоко во рту»: ب и م образуются губами. Группы различаются поведением артикля."
    }
  },
  {
    "id": "gender",
    "titleEn": "Gender",
    "titleRu": "Род",
    "body": "Nouns have grammatical masculine or feminine gender. ة (tāʾ marbūṭa) often marks feminine nouns or adjectives, but it is a clue rather than a universal test. Learn each noun’s gender and plural.",
    "bodyRu": "Существительные имеют мужской или женский грамматический род. ة (та марбута) часто отмечает женский род существительного или прилагательного, но это подсказка, а не универсальная проверка. Учи род и множественное число каждого слова.",
    "detailsEn": {
      "body": "Gender controls agreement. Many feminine forms add ة: مُعَلِّم / مُعَلِّمة. Some feminine nouns lack it, such as شَمْس (sun); some masculine personal names contain it. Colour adjectives such as أَحْمَر / حَمْراء use a different feminine pattern, not simply added ة.",
      "examples": [
        "قَميص أَحْمَر — a red shirt; تَنّورة حَمْراء — a red skirt.",
        "كِتاب جَديد — a new book; مَدْرَسة جَديدة — a new school.",
        "مُعَلِّمة is often read muʿallima in pause; in a construction or with case endings the t is pronounced."
      ],
      "watchOut": "Arabic and Russian genders need not match: كِتاب is masculine although Russian «книга» is feminine. Agreement follows the Arabic noun."
    },
    "detailsRu": {
      "body": "Род влияет на согласование. Многие женские формы добавляют ة: مُعَلِّم / مُعَلِّمة. Некоторые слова женского рода не имеют её: شَمْس (солнце); некоторые мужские имена, наоборот, имеют. Цветовые прилагательные أَحْمَر / حَمْراء образуют женский род по другой модели, а не добавлением ة.",
      "examples": [
        "قَميص أَحْمَر — красная рубашка; تَنّورة حَمْراء — красная юбка.",
        "كِتاب جَديد — новая книга; مَدْرَسة جَديدة — новая школа.",
        "مُعَلِّمة часто читают muʿallima на паузе; в конструкции или с падежным окончанием произносится t."
      ],
      "watchOut": "Арабский и русский род могут не совпадать: كِتاب мужского рода, хотя «книга» — женского. Согласование определяется арабским словом."
    }
  },
  {
    "id": "plurals",
    "titleEn": "Plurals",
    "titleRu": "Множественное число",
    "body": "Arabic distinguishes singular, dual and plural. Sound plurals add endings, while broken plurals change the word’s internal pattern. Learn a noun with its attested plural rather than predicting it only from gender.",
    "bodyRu": "Арабский различает единственное, двойственное и множественное число. Правильное множественное образуют окончаниями, ломаное — изменением внутренней модели слова. Учи существительное с его реальной формой множественного, не выводи её только из рода.",
    "detailsEn": {
      "body": "The sound masculine plural commonly has -ūn in the nominative and -īn in the accusative/genitive. The sound feminine plural uses -āt, often replacing ة; not all feminine nouns form their plural this way. Broken plurals are patterned forms, although a learner must know which pattern a particular noun uses.",
      "examples": [
        "مُعَلِّم → مُعَلِّمون / مُعَلِّمين — male teachers or a mixed group in conventional agreement.",
        "مُعَلِّمة → مُعَلِّمات — female teachers.",
        "كِتاب → كُتُب (books); مَدينة → مُدُن (cities).",
        "كِتابانِ kitābāni — two books, nominative; كِتابَيْنِ kitābayni — accusative/genitive."
      ],
      "watchOut": "In ordinary MSA agreement, non-human plurals normally take feminine singular modifiers: كُتُب جَديدة — new books. Human plural agreement differs; stylistic and classical exceptions exist."
    },
    "detailsRu": {
      "body": "Правильное мужское множественное обычно имеет -ūn в именительном и -īn в винительном/родительном падеже. Правильное женское использует -āt, часто вместо ة; не все слова женского рода образуют множественное так. Ломаные формы имеют модели, но нужную модель отдельного слова необходимо знать.",
      "examples": [
        "مُعَلِّم → مُعَلِّمون / مُعَلِّمين — учителя-мужчины или смешанная группа при обычном согласовании.",
        "مُعَلِّمة → مُعَلِّمات — учительницы.",
        "كِتاب → كُتُب — книги; مَدينة → مُدُن — города.",
        "كِتابانِ kitābāni — две книги, именительный; كِتابَيْنِ kitābayni — винительный/родительный."
      ],
      "watchOut": "В обычном современном литературном арабском множественное число неодушевлённых предметов и животных обычно требует женского единственного в согласуемом слове: كُتُب جَديدة — новые книги. Для людей правило другое; есть стилистические и классические исключения."
    }
  },
  {
    "id": "pronouns",
    "titleEn": "Pronouns",
    "titleRu": "Местоимения",
    "body": "Independent personal pronouns identify participants; attached pronouns can mark possession or a verb’s object. Arabic distinguishes person and number, and in many second- and third-person forms also gender.",
    "bodyRu": "Независимые личные местоимения обозначают участников речи; слитные формы могут выражать принадлежность или дополнение глагола. Различаются лицо, число и у многих форм второго/третьего лица — род.",
    "detailsEn": {
      "body": "A finite verb often identifies its subject, so a separate subject pronoun may be omitted. أَنا أَدْرُس and أَدْرُس both mean I study. A basic present nominal sentence normally has no overt equivalent of am/is/are: أَنا طالِب. Arabic does have forms of kāna/yakūnu; omission of the copula is not absence of the verb from the language.",
      "examples": [
        "أنا anā — I; نحن naḥnu — we; أنتَ anta — you (one male); أنتِ anti — you (one female).",
        "هو huwa — he; هي hiya — she; أنتما antumā — you two; هما humā — they two.",
        "أنتم antum / أنتنّ antunna — you plural masculine/feminine; هم hum / هنّ hunna — they masculine/feminine.",
        "كِتابي kitābī — my book; رَأَيْتُهُ raʾaytuhu — I saw him."
      ],
      "watchOut": "أَدْرُس means I study; يَدْرُس means he studies. These are finite forms, not infinitives or commands. The time interpretation depends on context."
    },
    "detailsRu": {
      "body": "Личная форма глагола часто сама указывает на подлежащее, поэтому отдельное местоимение можно опустить. أَنا أَدْرُس и أَدْرُس означают «я учусь». В обычном именном предложении настоящего связка am/is/are явно не выражается: أَنا طالِب. Формы kāna/yakūnu в языке есть; отсутствие связки здесь не означает отсутствие глагола вообще.",
      "examples": [
        "أنا anā — я; نحن naḥnu — мы; أنتَ anta — ты (к мужчине); أنتِ anti — ты (к женщине).",
        "هو huwa — он; هي hiya — она; أنتما antumā — вы двое; هما humā — они двое.",
        "أنتم antum / أنتنّ antunna — вы, муж./жен. мн.; هم hum / هنّ hunna — они, муж./жен. мн.",
        "كِتابي kitābī — моя книга; رَأَيْتُهُ raʾaytuhu — я увидел(а) его."
      ],
      "watchOut": "أَدْرُس — я учусь; يَدْرُس — он учится. Это личные формы, а не инфинитивы и не команды. Временное значение зависит от контекста."
    }
  },
  {
    "id": "idafa",
    "titleEn": "Iḍāfa (construct state)",
    "titleRu": "Идāфа (конструктное состояние)",
    "body": "Iḍāfa links nouns to express possession or another relationship: كِتابُ المُعَلِّمِ — the teacher’s book. In the basic noun–noun construction the first noun has neither al- nor tanwīn, and the second is genitive.",
    "bodyRu": "Идафа связывает существительные, выражая принадлежность или другое отношение: كِتابُ المُعَلِّمِ — книга учителя. В базовой конструкции первое существительное не имеет al- и танвина, а второе стоит в родительном падеже.",
    "detailsEn": {
      "body": "The final noun helps determine the whole phrase’s definiteness: كِتابُ مُعَلِّمٍ is a teacher’s book; كِتابُ المُعَلِّمِ is the teacher’s book. A proper name or attached pronoun may make the phrase definite without al-. An adjective modifying the first noun follows the whole construction and agrees with that noun.",
      "examples": [
        "بابُ المَدْرَسةِ bābu al-madrasati — the school’s door.",
        "كِتابُ الطّالِبِ الجَديدُ — the student’s new book (jadīdu agrees with nominative kitābu).",
        "كِتابُ الطّالِبِ الجَديدِ — the new student’s book (jadīdi agrees with genitive ṭālibi)."
      ],
      "watchOut": "Without case vowels these last two written phrases look the same; context must resolve the intended relationship. Iḍāfa is not limited to literal ownership."
    },
    "detailsRu": {
      "body": "Последнее существительное определяет определённость всей группы: كِتابُ مُعَلِّمٍ — книга какого-то учителя; كِتابُ المُعَلِّمِ — книга определённого учителя. Имя собственное или слитное местоимение могут давать определённость без al-. Прилагательное к первому слову ставят после всей конструкции и согласуют с этим словом.",
      "examples": [
        "بابُ المَدْرَسةِ bābu al-madrasati — дверь школы.",
        "كِتابُ الطّالِبِ الجَديدُ — новая книга ученика: jadīdu согласуется с kitābu в именительном.",
        "كِتابُ الطّالِبِ الجَديدِ — книга нового ученика: jadīdi согласуется с ṭālibi в родительном."
      ],
      "watchOut": "Без падежных огласовок последние две фразы выглядят одинаково; отношение устанавливают по контексту. Идафа не ограничивается буквальным владением."
    }
  }
];

export const USEFUL_PHRASES: ArabicPhrase[] = [
  {
    "ar": "كَيْفَ الحال؟",
    "translit": "kayfa l-ḥāl?",
    "en": "How are things?",
    "ru": "Как дела?",
    "context": "Greeting"
  },
  {
    "ar": "الحَمْدُ لِلَّه",
    "translit": "al-ḥamdu lillāh",
    "en": "Praise be to God (also used when answering ‘How are you?’)",
    "ru": "Слава Богу (также употребляется в ответе на «Как дела?»)",
    "context": "Reply"
  },
  {
    "ar": "أَيْنَ…؟",
    "translit": "ʾayna…?",
    "en": "Where is…?",
    "ru": "Где…?",
    "context": "Directions"
  },
  {
    "ar": "كَم؟",
    "translit": "kam?",
    "en": "How many / how much?",
    "ru": "Сколько?",
    "context": "Question"
  },
  {
    "ar": "ما هذا؟",
    "translit": "mā hādhā?",
    "en": "What is this?",
    "ru": "Что это?",
    "context": "Question"
  },
  {
    "ar": "لا أَفْهَم",
    "translit": "lā ʾafham",
    "en": "I don't understand",
    "ru": "Я не понимаю",
    "context": "Classroom"
  },
  {
    "ar": "مَرَّةً أُخْرى من فضلك",
    "translit": "marratan ʾukhrā min faḍlika (m) / faḍliki (f)",
    "en": "Once more, please",
    "ru": "Ещё раз, пожалуйста",
    "context": "Classroom"
  },
  {
    "ar": "هل تَتَكَلَّم الإِنْجِليزية؟",
    "translit": "hal tatakallam al-injilīziyya?",
    "en": "Do you speak English? (to one male)",
    "ru": "Ты говоришь по-английски? (к одному мужчине)",
    "context": "Conversation"
  },
  {
    "ar": "أَنا من…",
    "translit": "ʾanā min…",
    "en": "I am from…",
    "ru": "Я из…",
    "context": "Introduction"
  },
  {
    "ar": "في رَأْيي",
    "translit": "fī raʾyī",
    "en": "In my opinion",
    "ru": "По моему мнению",
    "context": "Opinion (writing)"
  },
  {
    "ar": "مِن ناحِيةٍ أُخْرى",
    "translit": "min nāḥiyatin ʾukhrā",
    "en": "On the other hand",
    "ru": "С другой стороны",
    "context": "Writing connector"
  },
  {
    "ar": "في النِّهاية",
    "translit": "fī n-nihāya",
    "en": "In the end",
    "ru": "в конце / в итоге",
    "context": "Essay ending"
  }
];
