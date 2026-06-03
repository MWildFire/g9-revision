// Arabic revision content — source of truth.
// Extracted from the Revision Booklet 2025-2026 (Mrs Hala's group).
// Each word shows pronunciation three ways: Arabic script (ar) + English
// transliteration (translitEn) + Russian transliteration (translitRu), plus
// the English (en) and Russian (ru) meanings. Transliterations are for reading
// aloud, not strictly scientific: long vowels are doubled (aa / аа);
// ʿ / ъ marks the ʿayn (a throaty catch).

export type Word = {
  id: string;
  ar: string; // арабская вязь
  en: string; // English meaning
  ru: string; // русский перевод
  translitEn: string; // латиница (англ. произношение)
  translitRu: string; // кириллица (рус. произношение)
};

export type Block = {
  id: string;
  titleAr: string; // араб. название блока
  titleEn: string;
  titleRu: string;
  words: Word[];
};

// ─── Block 1 — Verbs / الأفعال (глаголы) ───
const verbs: Block = {
  id: 'verbs',
  titleAr: 'الأفعال',
  titleEn: 'Verbs',
  titleRu: 'Глаголы',
  words: [
    { id: 'v01', ar: 'أَستيقظ', en: 'Wake up', ru: 'просыпаюсь', translitEn: 'astayqiz', translitRu: 'астайкыз' },
    { id: 'v02', ar: 'أَستحم', en: 'Take shower', ru: 'принимаю душ', translitEn: 'astahimm', translitRu: 'астахимм' },
    { id: 'v03', ar: 'أَلبس', en: 'Wear', ru: 'одеваюсь', translitEn: 'albis', translitRu: 'альбис' },
    { id: 'v04', ar: 'أَتناول', en: 'Intake', ru: 'принимаю (пищу)', translitEn: 'atanaawal', translitRu: 'атанааваль' },
    { id: 'v05', ar: 'أَركب', en: 'Ride', ru: 'еду / сажусь (в транспорт)', translitEn: 'arkab', translitRu: 'аркаб' },
    { id: 'v06', ar: 'أَذهب', en: 'Go', ru: 'иду / еду', translitEn: 'adhhab', translitRu: 'азхаб' },
    { id: 'v07', ar: 'أَتعلم', en: 'Learn', ru: 'учусь / изучаю', translitEn: 'ataʿallam', translitRu: 'атааллям' },
    { id: 'v08', ar: 'أُمارس', en: 'Practice', ru: 'занимаюсь / практикую', translitEn: 'umaaris', translitRu: 'умаарис' },
    { id: 'v09', ar: 'أَرجع', en: 'Return', ru: 'возвращаюсь', translitEn: 'arjaʿ', translitRu: 'арджаъ' },
    { id: 'v10', ar: 'أَدرس', en: 'Study', ru: 'учу / занимаюсь', translitEn: 'adrus', translitRu: 'адрус' },
    { id: 'v11', ar: 'أُشاهد', en: 'Watch', ru: 'смотрю', translitEn: 'ushaahid', translitRu: 'ушаахид' },
    { id: 'v12', ar: 'أَقرأ', en: 'Read', ru: 'читаю', translitEn: 'aqraʾ', translitRu: 'акъраъ' },
    { id: 'v13', ar: 'أَنام', en: 'Sleep', ru: 'сплю', translitEn: 'anaam', translitRu: 'анаам' },
  ],
};

// ─── Block 2 — The clock & time / الساعة (время суток) ───
const time: Block = {
  id: 'time',
  titleAr: 'الساعة',
  titleEn: 'The clock',
  titleRu: 'Время',
  words: [
    { id: 't01', ar: 'الساعة الخامسة', en: "5 o'clock", ru: '5 часов', translitEn: 'as-saaʿa al-khaamisa', translitRu: 'ас-сааъа аль-хаамиса' },
    { id: 't02', ar: 'الساعة السادسة', en: "6 o'clock", ru: '6 часов', translitEn: 'as-saaʿa as-saadisa', translitRu: 'ас-сааъа ас-саадиса' },
    { id: 't03', ar: 'الساعة السابعة', en: "7 o'clock", ru: '7 часов', translitEn: 'as-saaʿa as-saabiʿa', translitRu: 'ас-сааъа ас-саабиъа' },
    { id: 't04', ar: 'الساعة الثامنة', en: "8 o'clock", ru: '8 часов', translitEn: 'as-saaʿa ath-thaamina', translitRu: 'ас-сааъа ас-саамина' },
    { id: 't05', ar: 'صباحًا', en: 'AM', ru: 'утра (до полудня)', translitEn: 'sabaahan', translitRu: 'сабаахан' },
    { id: 't06', ar: 'مساءً', en: 'PM', ru: 'вечера (после полудня)', translitEn: 'masaaʾan', translitRu: 'масааан' },
  ],
};

// ─── Block 3 — Nouns / objects (предметы и места повседневной жизни) ───
const nouns: Block = {
  id: 'nouns',
  titleAr: 'الكلمات',
  titleEn: 'Words',
  titleRu: 'Слова',
  words: [
    { id: 'n01', ar: 'ملابس', en: 'Clothes', ru: 'одежда', translitEn: 'malaabis', translitRu: 'маляабис' },
    { id: 'n02', ar: 'المدرسة', en: 'School', ru: 'школа', translitEn: 'al-madrasa', translitRu: 'аль-мадраса' },
    { id: 'n03', ar: 'الفطور', en: 'The breakfast', ru: 'завтрак', translitEn: 'al-futuur', translitRu: 'аль-футуур' },
    { id: 'n04', ar: 'العشاء', en: 'The dinner', ru: 'ужин', translitEn: 'al-ʿashaaʾ', translitRu: 'аль-ашааа' },
    { id: 'n05', ar: 'السيارة', en: 'The car', ru: 'машина', translitEn: 'as-sayyaara', translitRu: 'ас-сайяара' },
    { id: 'n06', ar: 'البيت', en: 'The house', ru: 'дом', translitEn: 'al-bayt', translitRu: 'аль-байт' },
    { id: 'n07', ar: 'التلفاز', en: 'TV', ru: 'телевизор', translitEn: 'at-tilfaaz', translitRu: 'ат-тильфааз' },
    { id: 'n08', ar: 'كتاب', en: 'Book', ru: 'книга', translitEn: 'kitaab', translitRu: 'китааб' },
    { id: 'n09', ar: 'أسرتي', en: 'My family', ru: 'моя семья', translitEn: 'usratii', translitRu: 'усратии' },
  ],
};

// ─── Block 4 — Subjects / المواد (школьные предметы) ───
const subjects: Block = {
  id: 'subjects',
  titleAr: 'المواد',
  titleEn: 'Subjects',
  titleRu: 'Предметы',
  words: [
    { id: 's01', ar: 'الرياضيات', en: 'Math', ru: 'математика', translitEn: 'ar-riyaadiyyaat', translitRu: 'ар-рияадыйяат' },
    { id: 's02', ar: 'العلوم', en: 'Science', ru: 'наука', translitEn: 'al-ʿuluum', translitRu: 'аль-улуум' },
    { id: 's03', ar: 'اللغات', en: 'Languages', ru: 'языки', translitEn: 'al-lughaat', translitRu: 'аль-люгаат' },
  ],
};

// ─── Block 5 — Activities / الأنشطة ───
const activities: Block = {
  id: 'activities',
  titleAr: 'الأنشطة',
  titleEn: 'Activities',
  titleRu: 'Занятия',
  words: [
    { id: 'a01', ar: 'السباحة', en: 'Swimming', ru: 'плавание', translitEn: 'as-sibaaha', translitRu: 'ас-сибааха' },
    { id: 'a02', ar: 'الرسم', en: 'Drawing', ru: 'рисование', translitEn: 'ar-rasm', translitRu: 'ар-расм' },
    { id: 'a03', ar: 'الرياضة', en: 'PE', ru: 'физкультура / спорт', translitEn: 'ar-riyaada', translitRu: 'ар-рияада' },
  ],
};

// ─── Block 6 — Time connectors / روابط الوقت (временные связки) ───
const connectors: Block = {
  id: 'connectors',
  titleAr: 'روابط الوقت',
  titleEn: 'Time connectors',
  titleRu: 'Временные связки',
  words: [
    { id: 'c01', ar: 'أولًا', en: 'First', ru: 'сначала', translitEn: 'awwalan', translitRu: 'аввалян' },
    { id: 'c02', ar: 'ثم', en: 'Then', ru: 'затем', translitEn: 'thumma', translitRu: 'сумма' },
    { id: 'c03', ar: 'حتى', en: 'Until', ru: 'пока / до', translitEn: 'hattaa', translitRu: 'хаттаа' },
    { id: 'c04', ar: 'بعد ذلك', en: 'After that', ru: 'после этого', translitEn: 'baʿda dhaalik', translitRu: 'баъда заалик' },
    { id: 'c05', ar: 'أخيرًا', en: 'Finally', ru: 'наконец', translitEn: 'akhiiran', translitRu: 'ахииран' },
  ],
};

// ─── Block 7 — Prepositions / حروف الجر (предлоги) ───
const prepositions: Block = {
  id: 'prepositions',
  titleAr: 'حروف الجر',
  titleEn: 'Prepositions',
  titleRu: 'Предлоги',
  words: [
    { id: 'p01', ar: 'مع', en: 'With', ru: 'с / вместе с', translitEn: 'maʿa', translitRu: 'мааъа' },
    { id: 'p02', ar: 'إلى', en: 'To', ru: 'к / в', translitEn: 'ilaa', translitRu: 'иляя' },
    { id: 'p03', ar: 'في', en: 'In - at', ru: 'в / на', translitEn: 'fii', translitRu: 'фии' },
  ],
};

// ─── Extra connective words (appear in the "Create sentences" task) ───
export const EXTRAS_BLOCK: Block = {
  id: 'extras',
  titleAr: 'كلمات إضافية',
  titleEn: 'Extra words',
  titleRu: 'Дополнительно',
  words: [
    { id: 'e01', ar: 'مثل', en: 'Like / such as', ru: 'как / например', translitEn: 'mithl', translitRu: 'мисль' },
    { id: 'e02', ar: 'و', en: 'And', ru: 'и', translitEn: 'wa', translitRu: 'уа' },
    { id: 'e03', ar: 'أنشطة', en: 'Activities', ru: 'занятия (мн.)', translitEn: 'anshita', translitRu: 'аншита' },
  ],
};

// The 7 themed vocabulary blocks (each gets its own quiz).
export const VOCAB_BLOCKS: Block[] = [verbs, time, nouns, subjects, activities, connectors, prepositions];

// Everything shown in Learn / Flashcards (7 blocks + the extra connective words).
export const LEARN_BLOCKS: Block[] = [...VOCAB_BLOCKS, EXTRAS_BLOCK];

// Flat pool of every word — used for the "All words" quiz and as the distractor pool.
export const ALL_WORDS: Word[] = LEARN_BLOCKS.flatMap((b) => b.words);

export function getBlock(id: string): Block | undefined {
  return LEARN_BLOCKS.find((b) => b.id === id);
}

// ─── Task A — Re-arrange sentences (стр. 3 буклета) ───
export type RearrangeItem = {
  id: string;
  shuffled: string[];
  answer: string;
  en: string;
  ru: string;
};

export const REARRANGE: RearrangeItem[] = [
  {
    id: 'r1',
    shuffled: ['أتعلمُ', 'والعلوم', 'الرياضيات', 'في المدرسة'],
    answer: 'أتعلمُ الرياضيات والعلوم في المدرسة',
    en: 'I learn math and science at school',
    ru: 'Я учу математику и науку в школе',
  },
  {
    id: 'r2',
    shuffled: ['الأنشطة', 'أمارس', 'الرياضة', 'والرسم', 'مثل'],
    answer: 'أمارس الأنشطة مثل الرياضة والرسم',
    en: 'I do activities like PE and drawing',
    ru: 'Я занимаюсь активностями, такими как спорт и рисование',
  },
  {
    id: 'r3',
    shuffled: ['أدرس', 'في', 'اللغات', 'البيت', 'والرياضيات'],
    answer: 'أدرس اللغات والرياضيات في البيت',
    en: 'I study languages and math at home',
    ru: 'Я учу языки и математику дома',
  },
];

// ─── Task B — Match the meaning (стр. 4 буклета) ───
export type MatchPair = { ar: string; en: string };

export const MATCH_PAIRS: MatchPair[] = [
  { ar: 'أتعلم', en: 'I learn' },
  { ar: 'أرجع', en: 'I return' },
  { ar: 'أذهب', en: 'I go' },
  { ar: 'أستحم', en: 'I take shower' },
  { ar: 'أتناول', en: 'I intake' },
  { ar: 'أدرس', en: 'I study' },
  { ar: 'أستيقظ', en: 'I wake up' },
  { ar: 'أركب', en: 'I ride' },
  { ar: 'أمارس', en: 'I practise' },
  { ar: 'ألبس', en: 'I wear' },
];

// ─── Task C — Create sentences using keywords (стр. 5 буклета) ───
export const SENTENCE_KEYWORDS: string[] = [
  'أتعلمُ', 'أدرسُ', 'أنشطة', 'المدرسة', 'أرجع', 'أمارسُ', 'الرسم', 'الرياضيات', 'العلوم', 'مثل',
  'الرياضة', 'إلى', 'البيت', 'أدرس', 'الساعة', 'اللغات', 'السباحة', 'الخامسة', 'مساءً', 'في', 'و',
];

// ─── Task D — Read and complete (cloze, стр. 6 буклета) ───
export type ClozeBlank = { hintEn: string; hintRu: string };

export const CLOZE: { templateAr: string; blanks: ClozeBlank[] } = {
  templateAr: 'مرحبًا، أنا اسمي ____ ، عمري ____ ، أنا من ____ وأعيش في ____ ، أنا في الصف ____ ، أنا في مدرسة ____ . ____ .',
  blanks: [
    { hintEn: 'name', hintRu: 'имя' },
    { hintEn: 'age', hintRu: 'возраст' },
    { hintEn: 'country (e.g. Russia / روسيا)', hintRu: 'страна (например روسيا)' },
    { hintEn: 'city (e.g. Dubai / دبي)', hintRu: 'город (например دبي)' },
    { hintEn: 'grade (e.g. التاسع = 9th)', hintRu: 'класс (التاسع = 9-й)' },
    { hintEn: 'school name', hintRu: 'название школы' },
    { hintEn: 'every day / كل يوم', hintRu: 'каждый день / كل يوم' },
  ],
};

// ─── Task E — Translate (стр. 6 буклета) ───
export type TranslateItem = { ar: string; en: string; ru: string };

export const TRANSLATE: TranslateItem[] = [
  { ar: 'يلبس أخي معطفًا ثقيلاً.', en: 'My brother wears a thick coat.', ru: 'Мой брат носит тёплое пальто.' },
  { ar: 'يشتري جدي الملابس من مركز التسوق.', en: 'My grandfather buys clothes from the mall.', ru: 'Мой дедушка покупает одежду в торговом центре.' },
  { ar: 'أختي تلبس فستانًا طويلاً.', en: 'My sister wears a long dress.', ru: 'Моя сестра носит длинное платье.' },
];

// ─── Booklet topic list (стр. 1) — shown on the module overview ───
export type BookletTheme = { en: string; ru: string };

export const BOOKLET_THEMES: BookletTheme[] = [
  { en: 'Introduce yourself', ru: 'Представить себя' },
  { en: 'Clothes', ru: 'Одежда' },
  { en: 'Colours and adjectives', ru: 'Цвета и прилагательные' },
  { en: 'Daily routine', ru: 'Распорядок дня' },
  { en: 'Seasons and weather', ru: 'Времена года и погода' },
];
