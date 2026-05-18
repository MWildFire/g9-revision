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

export interface ArabicGrammarRule { id: string; titleEn: string; titleRu: string; body: string; bodyRu: string; }

export const GRAMMAR_RULES: ArabicGrammarRule[] = [
  {
    id: 'rtl',
    titleEn: 'Direction & script',
    titleRu: 'Направление и письмо',
    body: 'Arabic is written and read RIGHT-TO-LEFT. Letters change form depending on position (isolated, initial, medial, final). Six letters never connect to the following letter: ا, د, ذ, ر, ز, و.',
    bodyRu: 'Арабский пишется и читается СПРАВА НАЛЕВО. Буквы меняют форму в зависимости от позиции (изолированная, начальная, средняя, конечная). Шесть букв не соединяются с последующей: ا, د, ذ, ر, ز, و.',
  },
  {
    id: 'definite',
    titleEn: 'Definite article (الـ)',
    titleRu: 'Определённый артикль (الـ)',
    body: 'Definite article "al-" (الـ) attaches directly to the noun. With "sun letters" (t, th, d, dh, r, z, s, sh, ṣ, ḍ, ṭ, ẓ, l, n), the "l" assimilates: aš-šams (the sun) not al-šams. With "moon letters" pronounced as written: al-qamar (the moon).',
    bodyRu: 'Определённый артикль "al-" (الـ) пишется слитно. С "солнечными" буквами (t, th, d, dh, r, z, s, sh, ṣ, ḍ, ṭ, ẓ, l, n) "l" ассимилируется: aš-šams (солнце), не al-šams. С "лунными" — как пишется: al-qamar (луна).',
  },
  {
    id: 'gender',
    titleEn: 'Gender',
    titleRu: 'Род',
    body: 'Nouns are masculine or feminine. Feminine usually ends in ة (tāʾ marbūṭa): مُعَلِّمة (teacher, f). Most masculine nouns have no special ending. Some words are feminine without ة: شَمْس (sun, f).',
    bodyRu: 'Существительные мужского или женского рода. Женский обычно заканчивается на ة (та марбута): مُعَلِّمة (учительница). Мужские обычно без специального окончания. Некоторые без ة всё равно женские: شَمْس (солнце, ж).',
  },
  {
    id: 'plurals',
    titleEn: 'Plurals',
    titleRu: 'Множественное число',
    body: 'Three types: sound masculine (-ūn / -īn): مُعَلِّم → مُعَلِّمون. Sound feminine (-āt): مُعَلِّمة → مُعَلِّمات. Broken plurals (internal vowel change): كِتاب → كُتُب (book → books). Learn broken plurals individually.',
    bodyRu: 'Три типа: правильное мужское (-ūn / -īn): مُعَلِّم → مُعَلِّمون. Правильное женское (-āt): مُعَلِّمة → مُعَلِّمات. Ломаное (изменение внутри слова): كِتاب → كُتُب (книга → книги). Ломаные нужно учить.',
  },
  {
    id: 'pronouns',
    titleEn: 'Pronouns',
    titleRu: 'Местоимения',
    body: 'I أَنا (anā), you (m) أَنْتَ (anta), you (f) أَنْتِ (anti), he هُوَ (huwa), she هِيَ (hiya), we نَحْنُ (naḥnu), you (pl) أَنْتُمْ (antum), they هُمْ (hum). Verbs change to match the subject.',
    bodyRu: 'Я أَنا (anā), ты (м) أَنْتَ (anta), ты (ж) أَنْتِ (anti), он هُوَ (huwa), она هِيَ (hiya), мы نَحْنُ (naḥnu), вы أَنْتُمْ (antum), они هُمْ (hum). Глаголы меняются под подлежащее.',
  },
  {
    id: 'idafa',
    titleEn: 'Iḍāfa (construct state)',
    titleRu: 'Иdāфа (конструктное состояние)',
    body: 'Possessive construction: noun + noun with implicit "of". The first noun loses any article. Example: كِتابُ المُعَلِّم (kitābu al-muʿallim) = "the teacher\'s book" (lit. "book of the teacher").',
    bodyRu: 'Притяжательная конструкция: существительное + существительное с подразумеваемым "of". Первое теряет артикль. Пример: كِتابُ المُعَلِّم (kitābu al-muʿallim) = "книга учителя".',
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
