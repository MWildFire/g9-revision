export interface ArabicLetter {
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  name: string;
  translit: string;
  sound: string;
}

export const ARABIC_LETTERS: ArabicLetter[] = [
  { isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا', name: 'ʾalif', translit: 'a', sound: 'long "a"' },
  { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب', name: 'bāʾ', translit: 'b', sound: 'b' },
  { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت', name: 'tāʾ', translit: 't', sound: 't' },
  { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث', name: 'thāʾ', translit: 'th', sound: 'th (think)' },
  { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج', name: 'jīm', translit: 'j', sound: 'j (jam)' },
  { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح', name: 'ḥāʾ', translit: 'ḥ', sound: 'h (deep, throaty)' },
  { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ', name: 'khāʾ', translit: 'kh', sound: 'kh (Bach)' },
  { isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد', name: 'dāl', translit: 'd', sound: 'd' },
  { isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ', name: 'dhāl', translit: 'dh', sound: 'th (that)' },
  { isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر', name: 'rāʾ', translit: 'r', sound: 'r (rolled)' },
  { isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز', name: 'zāy', translit: 'z', sound: 'z' },
  { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس', name: 'sīn', translit: 's', sound: 's' },
  { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش', name: 'shīn', translit: 'sh', sound: 'sh' },
  { isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص', name: 'ṣād', translit: 'ṣ', sound: 's (emphatic)' },
  { isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض', name: 'ḍād', translit: 'ḍ', sound: 'd (emphatic)' },
  { isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط', name: 'ṭāʾ', translit: 'ṭ', sound: 't (emphatic)' },
  { isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ', name: 'ẓāʾ', translit: 'ẓ', sound: 'th (emphatic)' },
  { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع', name: 'ʿayn', translit: 'ʿ', sound: 'glottal stop, deep' },
  { isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ', name: 'ghayn', translit: 'gh', sound: 'gh (French r)' },
  { isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف', name: 'fāʾ', translit: 'f', sound: 'f' },
  { isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق', name: 'qāf', translit: 'q', sound: 'q (deep k)' },
  { isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك', name: 'kāf', translit: 'k', sound: 'k' },
  { isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل', name: 'lām', translit: 'l', sound: 'l' },
  { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم', name: 'mīm', translit: 'm', sound: 'm' },
  { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن', name: 'nūn', translit: 'n', sound: 'n' },
  { isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه', name: 'hāʾ', translit: 'h', sound: 'h (light)' },
  { isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو', name: 'wāw', translit: 'w/ū', sound: 'w or long u' },
  { isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي', name: 'yāʾ', translit: 'y/ī', sound: 'y or long i' },
];

export interface ArabicVocabItem { ar: string; translit: string; en: string; ru: string; }
export interface ArabicVocabTheme {
  id: string;
  titleEn: string;
  titleRu: string;
  items: ArabicVocabItem[];
}

export const VOCAB_THEMES: ArabicVocabTheme[] = [
  {
    id: 'greetings',
    titleEn: 'Greetings & basics',
    titleRu: 'Приветствия и основы',
    items: [
      { ar: 'مَرْحَبًا', translit: 'marḥaban', en: 'hello', ru: 'здравствуй' },
      { ar: 'السَّلامُ عَلَيْكُمْ', translit: 'as-salāmu ʿalaykum', en: 'peace be upon you (greeting)', ru: 'мир вам' },
      { ar: 'وَعَلَيْكُمُ السَّلام', translit: 'wa-ʿalaykum as-salām', en: 'and upon you peace (reply)', ru: 'и вам мир' },
      { ar: 'مَعَ السَّلامة', translit: 'maʿa s-salāma', en: 'goodbye', ru: 'до свидания' },
      { ar: 'شُكْرًا', translit: 'shukran', en: 'thank you', ru: 'спасибо' },
      { ar: 'عَفْوًا', translit: 'ʿafwan', en: 'you\'re welcome', ru: 'пожалуйста' },
      { ar: 'نَعَم', translit: 'naʿam', en: 'yes', ru: 'да' },
      { ar: 'لا', translit: 'lā', en: 'no', ru: 'нет' },
      { ar: 'مِنْ فَضْلِك', translit: 'min faḍlik', en: 'please', ru: 'пожалуйста (просьба)' },
      { ar: 'كَيْفَ حالُك؟', translit: 'kayfa ḥāluk?', en: 'how are you?', ru: 'как дела?' },
      { ar: 'بِخَيْر', translit: 'bi-khayr', en: 'fine / well', ru: 'хорошо' },
      { ar: 'اسْمي…', translit: 'ismī…', en: 'my name is…', ru: 'меня зовут…' },
    ],
  },
  {
    id: 'family',
    titleEn: 'Family',
    titleRu: 'Семья',
    items: [
      { ar: 'العائِلة', translit: 'al-ʿāʾila', en: 'family', ru: 'семья' },
      { ar: 'الأَب', translit: 'al-ʾab', en: 'father', ru: 'отец' },
      { ar: 'الأُم', translit: 'al-ʾumm', en: 'mother', ru: 'мать' },
      { ar: 'الأَخ', translit: 'al-ʾakh', en: 'brother', ru: 'брат' },
      { ar: 'الأُخْت', translit: 'al-ʾukht', en: 'sister', ru: 'сестра' },
      { ar: 'الجَد', translit: 'al-jadd', en: 'grandfather', ru: 'дедушка' },
      { ar: 'الجَدّة', translit: 'al-jadda', en: 'grandmother', ru: 'бабушка' },
      { ar: 'الابْن', translit: 'al-ibn', en: 'son', ru: 'сын' },
      { ar: 'البِنْت', translit: 'al-bint', en: 'daughter / girl', ru: 'дочь / девочка' },
    ],
  },
  {
    id: 'school',
    titleEn: 'School',
    titleRu: 'Школа',
    items: [
      { ar: 'المَدْرَسة', translit: 'al-madrasa', en: 'school', ru: 'школа' },
      { ar: 'الفَصْل', translit: 'al-faṣl', en: 'classroom', ru: 'класс' },
      { ar: 'المُعَلِّم', translit: 'al-muʿallim', en: 'teacher (m)', ru: 'учитель' },
      { ar: 'الطَّالِب', translit: 'aṭ-ṭālib', en: 'student (m)', ru: 'ученик' },
      { ar: 'الكِتاب', translit: 'al-kitāb', en: 'book', ru: 'книга' },
      { ar: 'القَلَم', translit: 'al-qalam', en: 'pen', ru: 'ручка' },
      { ar: 'الواجِب', translit: 'al-wājib', en: 'homework', ru: 'домашнее задание' },
      { ar: 'الامْتِحان', translit: 'al-imtiḥān', en: 'exam', ru: 'экзамен' },
    ],
  },
  {
    id: 'time',
    titleEn: 'Time & weather',
    titleRu: 'Время и погода',
    items: [
      { ar: 'اليَوْم', translit: 'al-yawm', en: 'today', ru: 'сегодня' },
      { ar: 'أَمْس', translit: 'ʾams', en: 'yesterday', ru: 'вчера' },
      { ar: 'غَدًا', translit: 'ghadan', en: 'tomorrow', ru: 'завтра' },
      { ar: 'الصَّباح', translit: 'aṣ-ṣabāḥ', en: 'morning', ru: 'утро' },
      { ar: 'المَساء', translit: 'al-masāʾ', en: 'evening', ru: 'вечер' },
      { ar: 'اللَّيْل', translit: 'al-layl', en: 'night', ru: 'ночь' },
      { ar: 'الشَّمْس', translit: 'ash-shams', en: 'sun', ru: 'солнце' },
      { ar: 'المَطَر', translit: 'al-maṭar', en: 'rain', ru: 'дождь' },
      { ar: 'حار', translit: 'ḥārr', en: 'hot', ru: 'жарко' },
      { ar: 'بارِد', translit: 'bārid', en: 'cold', ru: 'холодно' },
    ],
  },
  {
    id: 'verbs',
    titleEn: 'Common verbs',
    titleRu: 'Часто употребимые глаголы',
    items: [
      { ar: 'يَكُون', translit: 'yakūnu', en: 'to be', ru: 'быть' },
      { ar: 'لَدَيْه', translit: 'ladayhi', en: 'to have', ru: 'иметь' },
      { ar: 'يَذْهَب', translit: 'yadhhab', en: 'to go', ru: 'идти' },
      { ar: 'يَأْتي', translit: 'yaʾtī', en: 'to come', ru: 'приходить' },
      { ar: 'يَأْكُل', translit: 'yaʾkul', en: 'to eat', ru: 'есть' },
      { ar: 'يَشْرَب', translit: 'yashrab', en: 'to drink', ru: 'пить' },
      { ar: 'يَتَكَلَّم', translit: 'yatakallam', en: 'to speak', ru: 'говорить' },
      { ar: 'يَقْرَأ', translit: 'yaqraʾ', en: 'to read', ru: 'читать' },
      { ar: 'يَكْتُب', translit: 'yaktub', en: 'to write', ru: 'писать' },
      { ar: 'يُحِب', translit: 'yuḥibb', en: 'to love', ru: 'любить' },
      { ar: 'يُريد', translit: 'yurīd', en: 'to want', ru: 'хотеть' },
      { ar: 'يَدْرُس', translit: 'yadrus', en: 'to study', ru: 'учиться' },
    ],
  },
];

export interface ArabicGrammarRuleDetail {
  body: string;
  examples?: string[];
  tip?: string;
  watchOut?: string;
}

export interface ArabicGrammarRule {
  id: string;
  titleEn: string;
  titleRu: string;
  body: string;
  bodyRu: string;
  detailsEn?: ArabicGrammarRuleDetail;
  detailsRu?: ArabicGrammarRuleDetail;
}

export const GRAMMAR_RULES: ArabicGrammarRule[] = [
  {
    id: 'rtl',
    titleEn: 'Direction & script',
    titleRu: 'Направление и письмо',
    body: 'Arabic is written and read RIGHT-TO-LEFT. Letters change form depending on position (isolated, initial, medial, final). Six letters never connect to the following letter: ا, د, ذ, ر, ز, و.',
    bodyRu: 'Арабский пишется и читается СПРАВА НАЛЕВО. Буквы меняют форму в зависимости от позиции (изолированная, начальная, средняя, конечная). Шесть букв не соединяются с последующей: ا, د, ذ, ر, ز, و.',
    detailsEn: {
      body: 'Arabic uses an abjad — consonants written, short vowels usually only marked in Quran, children\'s books, or for learners. Each letter has up to 4 forms depending on its position in a word: isolated (alone), initial (start), medial (middle), final (end). Most letters connect both ways, but six "non-connectors" only connect to the PREVIOUS letter, breaking the visual chain.',
      examples: [
        'كَتَبَ (kataba — he wrote): ك (initial) + ت (medial) + ب (final) — all three letters connect.',
        'دار (dār — house): د (non-connector, initial form alone) + ا (also non-connector) + ر — break between د and ا.',
        'مَدْرَسة (madrasa — school): م + د (break) + ر (break) + س + ة — two breaks because of د and ر.',
        'Numbers, in contrast, are written LEFT-to-RIGHT inside an RTL line: ١٩٧٨ reads as "1978".',
      ],
      tip: 'The six non-connectors: ا د ذ ر ز و. Memorise this by sound — Alif, Dāl, Dhāl, Rāʾ, Zāy, Wāw. They never connect to whatever comes after them — but they DO connect from whatever came before.',
    },
    detailsRu: {
      body: 'Арабский использует абджад — пишут только согласные, краткие гласные обычно отмечают только в Коране, детских книгах или для учащихся. Каждая буква имеет до 4 форм в зависимости от позиции: изолированная, начальная, средняя, конечная. Большинство соединяются с обеих сторон, но шесть «непривязных» соединяются только с ПРЕДЫДУЩЕЙ буквой, разрывая зрительную цепь.',
      examples: [
        'كَتَبَ (kataba — он написал): ك (нач.) + ت (сред.) + ب (кон.) — все три соединяются.',
        'دار (dār — дом): د (непривязная, в изолированной форме) + ا (тоже непривязная) + ر — разрыв между د и ا.',
        'مَدْرَسة (madrasa — школа): م + د (разрыв) + ر (разрыв) + س + ة — два разрыва из-за د и ر.',
        'Цифры, наоборот, пишутся СЛЕВА НАПРАВО внутри строки RTL: ١٩٧٨ читается как «1978».',
      ],
      tip: 'Шесть непривязных: ا د ذ ر ز و. Запомни через звуки — Алиф, Даль, Заль, Ра, Зай, Вав. Они никогда не соединяются с тем, что идёт ПОСЛЕ — но соединяются с тем, что было ДО.',
    },
  },
  {
    id: 'definite',
    titleEn: 'Definite article (الـ)',
    titleRu: 'Определённый артикль (الـ)',
    body: 'Definite article "al-" (الـ) attaches directly to the noun. With "sun letters" (t, th, d, dh, r, z, s, sh, ṣ, ḍ, ṭ, ẓ, l, n), the "l" assimilates: aš-šams (the sun) not al-šams. With "moon letters" pronounced as written: al-qamar (the moon).',
    bodyRu: 'Определённый артикль "al-" (الـ) пишется слитно. С "солнечными" буквами (t, th, d, dh, r, z, s, sh, ṣ, ḍ, ṭ, ẓ, l, n) "l" ассимилируется: aš-šams (солнце), не al-šams. С "лунными" — как пишется: al-qamar (луна).',
    detailsEn: {
      body: 'There is only ONE definite article in Arabic: الـ (al-). It attaches directly to the noun (no space). There is NO indefinite article; "a book" is just كِتاب. The "l" in al- is pronounced normally before 14 "moon letters" but ASSIMILATES (becomes silent and the next consonant DOUBLES) before 14 "sun letters".',
      examples: [
        'Sun letters (assimilate): aš-šams (الشَّمْس — the sun, "l" → "š"), at-tilmīdh (التِّلْميذ — the student), an-nūr (النُّور — the light), ad-dars (الدَّرْس — the lesson).',
        'Moon letters (written and pronounced): al-qamar (القَمَر — the moon), al-bayt (البَيْت — the house), al-walad (الوَلَد — the boy), al-kitāb (الكِتاب — the book).',
        'Sun letters: ت ث د ذ ر ز س ش ص ض ط ظ ل ن — note all are made with the TONGUE-TIP near front of mouth.',
        'Moon letters: ء ب ج ح خ ع غ ف ق ك م ه و ي — pronounced further back in the mouth.',
      ],
      tip: 'In writing, both forms LOOK the same: الـ. The difference shows only in pronunciation and in the shadda ّ marking the doubled consonant in sun-letter words.',
      watchOut: 'Don\'t leave a space between al- and the noun: ✗ ال كتاب, ✓ الكتاب.',
    },
    detailsRu: {
      body: 'В арабском только ОДИН определённый артикль: الـ (al-). Пишется слитно с существительным (без пробела). НЕОПРЕДЕЛЁННОГО артикля нет; «книга» — это просто كِتاب. «l» в al- произносится нормально перед 14 «лунными» буквами, но АССИМИЛИРУЕТСЯ (становится беззвучной, а следующая согласная УДВАИВАЕТСЯ) перед 14 «солнечными» буквами.',
      examples: [
        'Солнечные (ассимиляция): aš-šams (الشَّمْس — солнце, «l» → «š»), at-tilmīdh (التِّلْميذ — ученик), an-nūr (النُّور — свет), ad-dars (الدَّرْس — урок).',
        'Лунные (как пишется): al-qamar (القَمَر — луна), al-bayt (البَيْت — дом), al-walad (الوَلَد — мальчик), al-kitāb (الكِتاب — книга).',
        'Солнечные: ت ث د ذ ر ز س ش ص ض ط ظ ل ن — все образуются КОНЧИКОМ ЯЗЫКА у передней части рта.',
        'Лунные: ء ب ج ح خ ع غ ف ق ك م ه و ي — произносятся глубже во рту.',
      ],
      tip: 'На письме обе формы ВЫГЛЯДЯТ одинаково: الـ. Разница только в произношении и в значке шадда ّ над удвоенной согласной в словах с солнечными буквами.',
      watchOut: 'Не оставляй пробел между al- и существительным: ✗ ال كتاب, ✓ الكتاب.',
    },
  },
  {
    id: 'gender',
    titleEn: 'Gender',
    titleRu: 'Род',
    body: 'Nouns are masculine or feminine. Feminine usually ends in ة (tāʾ marbūṭa): مُعَلِّمة (teacher, f). Most masculine nouns have no special ending. Some words are feminine without ة: شَمْس (sun, f).',
    bodyRu: 'Существительные мужского или женского рода. Женский обычно заканчивается на ة (та марбута): مُعَلِّمة (учительница). Мужские обычно без специального окончания. Некоторые без ة всё равно женские: شَمْس (солнце, ж).',
    detailsEn: {
      body: 'EVERY noun is grammatically masculine or feminine — there is no neuter. Adjectives, pronouns and verbs must agree with the gender of their noun. Three reliable feminine indicators: (1) ending in ة tāʾ marbūṭa; (2) words ending in ـاء (often feminine); (3) certain "natural feminine" words even without ة.',
      examples: [
        'Add ة to make masculine → feminine: مُعَلِّم (muʿallim — teacher m) → مُعَلِّمة (muʿallima — teacher f). طَبيب (ṭabīb — doctor m) → طَبيبة (ṭabība — doctor f).',
        'Naturally feminine without ة: أُمّ (umm — mother), شَمْس (shams — sun, despite no ة), أَرْض (arḍ — earth), يَد (yad — hand), بِنْت (bint — girl).',
        'Body parts that come in pairs are usually feminine: عَيْن (ʿayn — eye), أُذُن (udhun — ear), يَد (yad — hand).',
        'Adjective agreement: كِتابٌ جَديد (kitābun jadīd — new book, m); مَدْرَسةٌ جَديدة (madrasatun jadīda — new school, f). The adjective takes ة too.',
      ],
      watchOut: 'tāʾ marbūṭa ة and regular tāʾ ت look similar but ة has two dots ABOVE while ت has two dots ABOVE on a smooth shape. ة is only ever at the end of a word. Make sure to pronounce ة as "a" in pause, "t" when followed by another word in iḍāfa.',
    },
    detailsRu: {
      body: 'КАЖДОЕ существительное грамматически мужского или женского рода — среднего нет. Прилагательные, местоимения и глаголы согласуются по роду. Три надёжных признака женского рода: (1) окончание ة та марбута; (2) окончание ـاء (часто женские); (3) определённые «натурально женские» слова даже без ة.',
      examples: [
        'Добавь ة чтобы сделать мужской → женский: مُعَلِّم (учитель м) → مُعَلِّمة (учительница). طَبيب (врач м) → طَبيبة (врач ж).',
        'Натурально женские без ة: أُمّ (umm — мать), شَمْس (shams — солнце, без ة), أَرْض (arḍ — земля), يَد (yad — рука), بِنْت (bint — девочка).',
        'Парные части тела обычно женские: عَيْن (ʿayn — глаз), أُذُن (udhun — ухо), يَد (yad — рука).',
        'Согласование прилагательных: كِتابٌ جَديد (kitābun jadīd — новая книга, м); مَدْرَسةٌ جَديدة (madrasatun jadīda — новая школа, ж). Прилагательное тоже получает ة.',
      ],
      watchOut: 'تا марбута ة и обычная تا ت похожи, но у ة две точки СВЕРХУ на гладкой форме, у ت — на прямой. ة бывает только в конце. Произносится как «а» в паузе, как «т» если за ней слово в идафе.',
    },
  },
  {
    id: 'plurals',
    titleEn: 'Plurals',
    titleRu: 'Множественное число',
    body: 'Three types: sound masculine (-ūn / -īn): مُعَلِّم → مُعَلِّمون. Sound feminine (-āt): مُعَلِّمة → مُعَلِّمات. Broken plurals (internal vowel change): كِتاب → كُتُب (book → books). Learn broken plurals individually.',
    bodyRu: 'Три типа: правильное мужское (-ūn / -īn): مُعَلِّم → مُعَلِّمون. Правильное женское (-āt): مُعَلِّمة → مُعَلِّمات. Ломаное (изменение внутри слова): كِتاب → كُتُب (книга → книги). Ломаные нужно учить.',
    detailsEn: {
      body: 'Arabic distinguishes singular, DUAL (exactly 2), and plural (3+). Plurals have three forms. Sound (regular) plurals add a suffix. Broken (irregular) plurals change the INTERNAL vowel pattern — these must be MEMORISED for each word.',
      examples: [
        'Sound masculine: مُعَلِّم (one teacher) → مُعَلِّمون (muʿallimūn, teachers — nominative) / مُعَلِّمين (muʿallimīn — accusative/genitive).',
        'Sound feminine: مُعَلِّمة → مُعَلِّمات (muʿallimāt). Always add -āt.',
        'Broken plurals (must memorise): كِتاب → كُتُب (kitāb → kutub, books); وَلَد → أَوْلاد (walad → awlād, boys); رَجُل → رِجال (rajul → rijāl, men); بَيْت → بُيوت (bayt → buyūt, houses); مَدينة → مُدُن (madīna → mudun, cities).',
        'Dual: add ـان / ـين: كِتابان (two books), بِنْتان (two girls).',
      ],
      tip: 'For non-human plurals (objects, animals), Arabic treats the plural as FEMININE SINGULAR for agreement: كُتُبٌ جَميلة (kutubun jamīla — beautiful books, lit. "books beautiful-f-sing"). Counterintuitive — but a rock-solid rule.',
    },
    detailsRu: {
      body: 'Арабский различает единственное, ДВОЙСТВЕННОЕ (ровно 2) и множественное (3+). У множественного три формы. Правильные множественные добавляют суффикс. Ломаные (неправильные) меняют ВНУТРЕННИЙ узор гласных — их нужно ЗАУЧИВАТЬ для каждого слова.',
      examples: [
        'Правильное мужское: مُعَلِّم (учитель) → مُعَلِّمون (muʿallimūn — учителя, именительный) / مُعَلِّمين (muʿallimīn — винительный/родительный).',
        'Правильное женское: مُعَلِّمة → مُعَلِّمات (muʿallimāt). Всегда добавляй -āt.',
        'Ломаные (нужно заучивать): كِتاب → كُتُب (kitāb → kutub, книги); وَلَد → أَوْلاد (мальчики); رَجُل → رِجال (мужчины); بَيْت → بُيوت (дома); مَدينة → مُدُن (города).',
        'Двойственное: добавь ـان / ـين: كِتابان (две книги), بِنْتان (две девочки).',
      ],
      tip: 'У нечеловеческого множественного (предметы, животные) арабский трактует множественное как ЖЕНСКОЕ ЕДИНСТВЕННОЕ для согласования: كُتُبٌ جَميلة (kutubun jamīla — красивые книги, букв. «книги красивая-ж-ед»). Контринтуитивно, но железное правило.',
    },
  },
  {
    id: 'pronouns',
    titleEn: 'Pronouns',
    titleRu: 'Местоимения',
    body: 'I أَنا (anā), you (m) أَنْتَ (anta), you (f) أَنْتِ (anti), he هُوَ (huwa), she هِيَ (hiya), we نَحْنُ (naḥnu), you (pl) أَنْتُمْ (antum), they هُمْ (hum). Verbs change to match the subject.',
    bodyRu: 'Я أَنا (anā), ты (м) أَنْتَ (anta), ты (ж) أَنْتِ (anti), он هُوَ (huwa), она هِيَ (hiya), мы نَحْنُ (naḥnu), вы أَنْتُمْ (antum), они هُمْ (hum). Глаголы меняются под подлежащее.',
    detailsEn: {
      body: 'Arabic has TWO pronoun sets: SUBJECT (standalone) and SUFFIX (attached to nouns/verbs). The verb usually carries person/number/gender info itself, so subject pronouns are often DROPPED. Suffixes show possession ("his book") or object ("he saw him").',
      examples: [
        'Subject pronouns: أَنا (anā — I), أَنْتَ (anta — you m), أَنْتِ (anti — you f), هُوَ (huwa — he), هِيَ (hiya — she), نَحْنُ (naḥnu — we), أَنْتُمْ (antum — you pl m), أَنْتُنَّ (antunna — you pl f), هُمْ (hum — they m), هُنَّ (hunna — they f).',
        'Possessive suffixes: كِتابي (kitābī — my book), كِتابُكَ (kitābuka — your book m), كِتابُها (kitābuhā — her book), كِتابُهُمْ (kitābuhum — their book).',
        'Object suffixes (after verb): رَأَيْتُهُ (raʾaytuhu — I saw him), سَأَلْتُها (saʾaltuhā — I asked her).',
        '"I am a student" can just be أَنا طالِب — Arabic has no present-tense "to be". The pronoun does the job: "I student".',
      ],
      tip: 'Arabic also has DUAL pronouns ("you two", "they two") used for exactly 2 people. أَنْتُما (antumā — you two), هُما (humā — they two).',
    },
    detailsRu: {
      body: 'В арабском ДВА набора местоимений: ПОДЛЕЖАЩИЕ (отдельные) и СУФФИКСНЫЕ (прикреплённые к существительным/глаголам). Глагол обычно сам несёт информацию о лице/числе/роде, поэтому подлежащие местоимения часто ОПУСКАЮТСЯ. Суффиксы показывают принадлежность («его книга») или объект («он увидел его»).',
      examples: [
        'Подлежащие: أَنا (anā — я), أَنْتَ (anta — ты м), أَنْتِ (anti — ты ж), هُوَ (huwa — он), هِيَ (hiya — она), نَحْنُ (naḥnu — мы), أَنْتُمْ (antum — вы мн.м), أَنْتُنَّ (antunna — вы мн.ж), هُمْ (hum — они м), هُنَّ (hunna — они ж).',
        'Притяжательные суффиксы: كِتابي (kitābī — моя книга), كِتابُكَ (kitābuka — твоя книга м), كِتابُها (kitābuhā — её книга), كِتابُهُمْ (kitābuhum — их книга).',
        'Объектные суффиксы (после глагола): رَأَيْتُهُ (raʾaytuhu — я увидел его), سَأَلْتُها (saʾaltuhā — я спросил её).',
        '«Я студент» — просто أَنا طالِب — в арабском нет «быть» в настоящем времени. Местоимение делает работу: «я студент».',
      ],
      tip: 'В арабском есть ДВОЙСТВЕННЫЕ местоимения («вы двое», «они двое») — ровно для 2 человек. أَنْتُما (antumā — вы двое), هُما (humā — они двое).',
    },
  },
  {
    id: 'idafa',
    titleEn: 'Iḍāfa (construct state)',
    titleRu: 'Идāфа (конструктное состояние)',
    body: 'Possessive construction: noun + noun with implicit "of". The first noun loses any article. Example: كِتابُ المُعَلِّم (kitābu al-muʿallim) = "the teacher\'s book" (lit. "book of the teacher").',
    bodyRu: 'Притяжательная конструкция: существительное + существительное с подразумеваемым "of". Первое теряет артикль. Пример: كِتابُ المُعَلِّم (kitābu al-muʿallim) = "книга учителя".',
    detailsEn: {
      body: 'Iḍāfa expresses POSSESSION or RELATIONSHIP between two nouns without a preposition — like English "John\'s book" or "book of John". RULES: (1) The first noun (مُضاف muḍāf, "the possessed") NEVER has الـ. (2) The second noun (مُضاف إِلَيْه, "the possessor") takes الـ if definite. (3) Adjectives describing the first noun go AFTER the entire iḍāfa.',
      examples: [
        'كِتابُ الوَلَد (kitābu al-walad) = "the boy\'s book" (lit. "book of the boy"). Note: NO الـ on كِتاب.',
        'بابُ المَدْرَسة (bābu al-madrasa) = "the school\'s door / door of the school".',
        'سَيّارةُ المُعَلِّم (sayyāratu al-muʿallim) = "the teacher\'s car".',
        'Chain of iḍāfa: كِتابُ بابِ المَدْرَسة = "the book of the door of the school" — only the FINAL noun gets الـ.',
        'With adjective: كِتابُ الوَلَدِ الجَديد = "the boy\'s NEW book" (adjective at the very end, agrees in case/definiteness with whichever noun it modifies — here الوَلَد would mean "new boy", كِتاب would mean "new book". Context disambiguates).',
      ],
      watchOut: 'The first noun (muḍāf) NEVER takes الـ even though it\'s often DEFINITE in meaning. Definiteness is "inherited" from the second noun.',
    },
    detailsRu: {
      body: 'Идāфа выражает ПРИНАДЛЕЖНОСТЬ или ОТНОШЕНИЕ между двумя существительными без предлога — как «книга Джона» по-русски. ПРАВИЛА: (1) Первое существительное (مُضاف мудāф, «обладаемое») НИКОГДА не имеет الـ. (2) Второе (مُضاف إِلَيْه, «обладатель») получает الـ, если определённое. (3) Прилагательные ставятся ПОСЛЕ всей идāфы.',
      examples: [
        'كِتابُ الوَلَد (kitābu al-walad) = «книга мальчика». Внимание: НЕТ الـ на كِتاب.',
        'بابُ المَدْرَسة (bābu al-madrasa) = «дверь школы».',
        'سَيّارةُ المُعَلِّم (sayyāratu al-muʿallim) = «машина учителя».',
        'Цепочка идāфы: كِتابُ بابِ المَدْرَسة = «книга двери школы» — только ПОСЛЕДНЕЕ существительное получает الـ.',
        'С прилагательным: كِتابُ الوَلَدِ الجَديد = «новая книга мальчика» (прилагательное в самом конце, согласуется по падежу/определённости с тем, что определяет — здесь الوَلَد значило бы «новый мальчик», كِتاب — «новая книга». Контекст уточняет).',
      ],
      watchOut: 'Первое (мудāф) НИКОГДА не получает الـ, хотя по смыслу часто ОПРЕДЕЛЁННОЕ. Определённость «наследуется» от второго.',
    },
  },
];

export interface ArabicPhrase { ar: string; translit: string; en: string; ru: string; context: string; }

export const USEFUL_PHRASES: ArabicPhrase[] = [
  { ar: 'كَيْفَ الحال؟', translit: 'kayfa l-ḥāl?', en: 'How are things?', ru: 'Как дела?', context: 'Greeting' },
  { ar: 'الحَمْدُ لِلَّه', translit: 'al-ḥamdu lillāh', en: 'Praise be to God / well', ru: 'Слава Богу / хорошо', context: 'Reply' },
  { ar: 'أَيْنَ…؟', translit: 'ʾayna…?', en: 'Where is…?', ru: 'Где…?', context: 'Directions' },
  { ar: 'كَم؟', translit: 'kam?', en: 'How many / how much?', ru: 'Сколько?', context: 'Question' },
  { ar: 'ما هذا؟', translit: 'mā hādhā?', en: 'What is this?', ru: 'Что это?', context: 'Question' },
  { ar: 'لا أَفْهَم', translit: 'lā ʾafham', en: 'I don\'t understand', ru: 'Я не понимаю', context: 'Classroom' },
  { ar: 'مَرَّةً أُخْرى من فضلك', translit: 'marratan ʾukhrā min faḍlik', en: 'Once more, please', ru: 'Ещё раз, пожалуйста', context: 'Classroom' },
  { ar: 'هل تَتَكَلَّم الإِنْجِليزية؟', translit: 'hal tatakallam al-injilīziyya?', en: 'Do you speak English?', ru: 'Вы говорите по-английски?', context: 'Conversation' },
  { ar: 'أَنا من…', translit: 'ʾanā min…', en: 'I am from…', ru: 'Я из…', context: 'Introduction' },
  { ar: 'في رَأْيي', translit: 'fī raʾyī', en: 'In my opinion', ru: 'По моему мнению', context: 'Opinion (writing)' },
  { ar: 'مِن ناحِيةٍ أُخْرى', translit: 'min nāḥiyatin ʾukhrā', en: 'On the other hand', ru: 'С другой стороны', context: 'Writing connector' },
  { ar: 'في النِّهاية', translit: 'fī n-nihāya', en: 'In the end', ru: 'В заключение', context: 'Essay ending' },
];
