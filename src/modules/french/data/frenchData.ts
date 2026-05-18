export interface VocabItem { fr: string; en: string; ru: string; }
export interface VocabTheme {
  id: string;
  titleEn: string;
  titleRu: string;
  items: VocabItem[];
}

export const VOCAB_THEMES: VocabTheme[] = [
  {
    id: 'greetings',
    titleEn: 'Greetings & basics',
    titleRu: 'Приветствия и основы',
    items: [
      { fr: 'bonjour', en: 'hello / good morning', ru: 'здравствуй / доброе утро' },
      { fr: 'bonsoir', en: 'good evening', ru: 'добрый вечер' },
      { fr: 'salut', en: 'hi / bye (informal)', ru: 'привет / пока' },
      { fr: 'au revoir', en: 'goodbye', ru: 'до свидания' },
      { fr: 'à bientôt', en: 'see you soon', ru: 'до скорого' },
      { fr: 'merci', en: 'thank you', ru: 'спасибо' },
      { fr: 's\'il vous plaît', en: 'please', ru: 'пожалуйста' },
      { fr: 'oui', en: 'yes', ru: 'да' },
      { fr: 'non', en: 'no', ru: 'нет' },
      { fr: 'excusez-moi', en: 'excuse me', ru: 'извините' },
      { fr: 'pardon', en: 'sorry', ru: 'простите' },
      { fr: 'je m\'appelle…', en: 'my name is…', ru: 'меня зовут…' },
    ],
  },
  {
    id: 'family',
    titleEn: 'Family',
    titleRu: 'Семья',
    items: [
      { fr: 'la famille', en: 'family', ru: 'семья' },
      { fr: 'le père / la mère', en: 'father / mother', ru: 'отец / мать' },
      { fr: 'le frère / la sœur', en: 'brother / sister', ru: 'брат / сестра' },
      { fr: 'le grand-père / la grand-mère', en: 'grandfather / grandmother', ru: 'дедушка / бабушка' },
      { fr: 'l\'oncle / la tante', en: 'uncle / aunt', ru: 'дядя / тётя' },
      { fr: 'le cousin / la cousine', en: 'cousin (m/f)', ru: 'двоюродный брат / сестра' },
      { fr: 'le fils / la fille', en: 'son / daughter (also girl)', ru: 'сын / дочь' },
      { fr: 'l\'enfant', en: 'child', ru: 'ребёнок' },
      { fr: 'le mari / la femme', en: 'husband / wife', ru: 'муж / жена' },
    ],
  },
  {
    id: 'school',
    titleEn: 'School',
    titleRu: 'Школа',
    items: [
      { fr: 'l\'école', en: 'school', ru: 'школа' },
      { fr: 'le collège', en: 'middle school', ru: 'средняя школа' },
      { fr: 'le lycée', en: 'high school', ru: 'лицей' },
      { fr: 'la classe', en: 'class / classroom', ru: 'класс' },
      { fr: 'le professeur', en: 'teacher', ru: 'учитель' },
      { fr: 'l\'élève', en: 'pupil', ru: 'ученик' },
      { fr: 'le livre', en: 'book', ru: 'книга' },
      { fr: 'le cahier', en: 'exercise book', ru: 'тетрадь' },
      { fr: 'le stylo', en: 'pen', ru: 'ручка' },
      { fr: 'le devoir', en: 'homework', ru: 'домашнее задание' },
      { fr: 'l\'examen', en: 'exam', ru: 'экзамен' },
      { fr: 'la note', en: 'grade', ru: 'оценка' },
    ],
  },
  {
    id: 'food',
    titleEn: 'Food & drink',
    titleRu: 'Еда и напитки',
    items: [
      { fr: 'le pain', en: 'bread', ru: 'хлеб' },
      { fr: 'le fromage', en: 'cheese', ru: 'сыр' },
      { fr: 'la viande', en: 'meat', ru: 'мясо' },
      { fr: 'le poisson', en: 'fish', ru: 'рыба' },
      { fr: 'les légumes', en: 'vegetables', ru: 'овощи' },
      { fr: 'les fruits', en: 'fruits', ru: 'фрукты' },
      { fr: 'le déjeuner', en: 'lunch', ru: 'обед' },
      { fr: 'le dîner', en: 'dinner', ru: 'ужин' },
      { fr: 'l\'eau', en: 'water', ru: 'вода' },
      { fr: 'le café', en: 'coffee', ru: 'кофе' },
      { fr: 'le thé', en: 'tea', ru: 'чай' },
      { fr: 'le lait', en: 'milk', ru: 'молоко' },
    ],
  },
  {
    id: 'time',
    titleEn: 'Time & weather',
    titleRu: 'Время и погода',
    items: [
      { fr: 'le jour / la nuit', en: 'day / night', ru: 'день / ночь' },
      { fr: 'aujourd\'hui', en: 'today', ru: 'сегодня' },
      { fr: 'hier', en: 'yesterday', ru: 'вчера' },
      { fr: 'demain', en: 'tomorrow', ru: 'завтра' },
      { fr: 'la semaine', en: 'week', ru: 'неделя' },
      { fr: 'le mois', en: 'month', ru: 'месяц' },
      { fr: 'l\'année', en: 'year', ru: 'год' },
      { fr: 'l\'heure', en: 'hour / time', ru: 'час / время' },
      { fr: 'il fait beau', en: 'the weather is nice', ru: 'хорошая погода' },
      { fr: 'il pleut', en: 'it\'s raining', ru: 'идёт дождь' },
      { fr: 'il fait chaud / froid', en: 'it\'s hot / cold', ru: 'жарко / холодно' },
      { fr: 'le soleil', en: 'sun', ru: 'солнце' },
    ],
  },
  {
    id: 'verbs',
    titleEn: 'Common verbs',
    titleRu: 'Часто употребимые глаголы',
    items: [
      { fr: 'être', en: 'to be', ru: 'быть' },
      { fr: 'avoir', en: 'to have', ru: 'иметь' },
      { fr: 'aller', en: 'to go', ru: 'идти' },
      { fr: 'faire', en: 'to do / make', ru: 'делать' },
      { fr: 'venir', en: 'to come', ru: 'приходить' },
      { fr: 'voir', en: 'to see', ru: 'видеть' },
      { fr: 'savoir', en: 'to know (fact)', ru: 'знать (факт)' },
      { fr: 'connaître', en: 'to know (person)', ru: 'знать (человека)' },
      { fr: 'pouvoir', en: 'to be able / can', ru: 'мочь' },
      { fr: 'vouloir', en: 'to want', ru: 'хотеть' },
      { fr: 'devoir', en: 'must / have to', ru: 'должен' },
      { fr: 'aimer', en: 'to love / like', ru: 'любить' },
      { fr: 'manger', en: 'to eat', ru: 'есть' },
      { fr: 'parler', en: 'to speak', ru: 'говорить' },
      { fr: 'lire', en: 'to read', ru: 'читать' },
      { fr: 'écrire', en: 'to write', ru: 'писать' },
    ],
  },
];

export interface ConjugationTable {
  verb: string;
  ru: string;
  notes?: string;
  forms: [string, string, string, string, string, string];
}

export const PRESENT_TENSE: ConjugationTable[] = [
  { verb: 'être (to be)', ru: 'быть', forms: ['je suis', 'tu es', 'il/elle est', 'nous sommes', 'vous êtes', 'ils/elles sont'] },
  { verb: 'avoir (to have)', ru: 'иметь', forms: ['j\'ai', 'tu as', 'il/elle a', 'nous avons', 'vous avez', 'ils/elles ont'] },
  { verb: 'aller (to go)', ru: 'идти', forms: ['je vais', 'tu vas', 'il/elle va', 'nous allons', 'vous allez', 'ils/elles vont'] },
  { verb: 'faire (to do)', ru: 'делать', forms: ['je fais', 'tu fais', 'il/elle fait', 'nous faisons', 'vous faites', 'ils/elles font'] },
  { verb: 'parler (-er regular)', ru: 'говорить', notes: 'Regular -er pattern. Strip -er, add: -e, -es, -e, -ons, -ez, -ent.', forms: ['je parle', 'tu parles', 'il/elle parle', 'nous parlons', 'vous parlez', 'ils/elles parlent'] },
  { verb: 'finir (-ir regular)', ru: 'заканчивать', notes: 'Regular -ir pattern. Strip -ir, add: -is, -is, -it, -issons, -issez, -issent.', forms: ['je finis', 'tu finis', 'il/elle finit', 'nous finissons', 'vous finissez', 'ils/elles finissent'] },
  { verb: 'vendre (-re regular)', ru: 'продавать', notes: 'Regular -re pattern. Strip -re, add: -s, -s, —, -ons, -ez, -ent.', forms: ['je vends', 'tu vends', 'il/elle vend', 'nous vendons', 'vous vendez', 'ils/elles vendent'] },
];

export const PASSE_COMPOSE: ConjugationTable[] = [
  { verb: 'parler (with avoir)', ru: 'говорить (вспом. avoir)', notes: 'Use avoir + past participle (parlé). Most verbs use avoir.', forms: ['j\'ai parlé', 'tu as parlé', 'il/elle a parlé', 'nous avons parlé', 'vous avez parlé', 'ils/elles ont parlé'] },
  { verb: 'aller (with être)', ru: 'идти (вспом. être)', notes: 'Verbs of movement/state use être; past participle agrees in gender/number.', forms: ['je suis allé(e)', 'tu es allé(e)', 'il est allé / elle est allée', 'nous sommes allé(e)s', 'vous êtes allé(e)(s)', 'ils sont allés / elles sont allées'] },
];

export const FUTURE_TENSE: ConjugationTable[] = [
  { verb: 'parler — futur simple', ru: 'буду говорить', notes: 'For -er/-ir: keep infinitive, add: -ai, -as, -a, -ons, -ez, -ont.', forms: ['je parlerai', 'tu parleras', 'il/elle parlera', 'nous parlerons', 'vous parlerez', 'ils/elles parleront'] },
  { verb: 'aller — futur simple', ru: 'буду идти', notes: 'Irregular stem: ir-.', forms: ['j\'irai', 'tu iras', 'il/elle ira', 'nous irons', 'vous irez', 'ils/elles iront'] },
  { verb: 'être — futur simple', ru: 'буду', notes: 'Irregular stem: ser-.', forms: ['je serai', 'tu seras', 'il/elle sera', 'nous serons', 'vous serez', 'ils/elles seront'] },
];

export interface GrammarRule { id: string; titleEn: string; titleRu: string; body: string; bodyRu: string; }

export const GRAMMAR_RULES: GrammarRule[] = [
  {
    id: 'gender',
    titleEn: 'Gender of nouns',
    titleRu: 'Род существительных',
    body: 'Every noun is masculine (le/un) or feminine (la/une). Often arbitrary — learn with the article. Endings give clues: -age, -ment, -eau (m); -tion, -té, -ette (f).',
    bodyRu: 'Каждое существительное мужского (le/un) или женского (la/une) рода. Часто произвольно — учи с артиклем. Окончания дают подсказки: -age, -ment, -eau (м); -tion, -té, -ette (ж).',
  },
  {
    id: 'plurals',
    titleEn: 'Plurals',
    titleRu: 'Множественное число',
    body: 'Most nouns add -s (le livre → les livres). -eau/-eu add -x (le bateau → les bateaux). -al → -aux (le journal → les journaux).',
    bodyRu: 'Большинство добавляют -s (le livre → les livres). -eau/-eu добавляют -x (le bateau → les bateaux). -al → -aux (le journal → les journaux).',
  },
  {
    id: 'adjectives',
    titleEn: 'Adjective agreement',
    titleRu: 'Согласование прилагательных',
    body: 'Adjectives agree in gender and number. Add -e for feminine, -s for plural. Some adjectives go before the noun (BAGS — Beauty, Age, Goodness, Size): un grand garçon, une belle fille.',
    bodyRu: 'Прилагательные согласуются в роде и числе. Добавь -e для жен., -s для мн. Некоторые идут перед существительным (BAGS — Beauty, Age, Goodness, Size): un grand garçon, une belle fille.',
  },
  {
    id: 'negation',
    titleEn: 'Negation',
    titleRu: 'Отрицание',
    body: 'Place ne…pas around the verb: Je ne sais pas (I don\'t know). Other forms: ne…jamais (never), ne…rien (nothing), ne…personne (no one), ne…plus (no more).',
    bodyRu: 'Поставь ne…pas вокруг глагола: Je ne sais pas (Я не знаю). Другие: ne…jamais (никогда), ne…rien (ничего), ne…personne (никого), ne…plus (больше нет).',
  },
  {
    id: 'questions',
    titleEn: 'Forming questions',
    titleRu: 'Вопросы',
    body: 'Three ways: 1) Rising intonation (Tu viens?). 2) Est-ce que (Est-ce que tu viens?). 3) Inversion (Viens-tu?). Question words: qui, quoi, où, quand, pourquoi, comment, combien.',
    bodyRu: 'Три способа: 1) Восходящая интонация (Tu viens?). 2) Est-ce que (Est-ce que tu viens?). 3) Инверсия (Viens-tu?). Вопросительные: qui, quoi, où, quand, pourquoi, comment, combien.',
  },
  {
    id: 'articles',
    titleEn: 'Definite vs indefinite articles',
    titleRu: 'Определённые vs неопределённые артикли',
    body: 'Definite (le/la/les) — specific/general: J\'aime le chocolat. Indefinite (un/une/des) — one/some: Je vois un chat. Partitive (du/de la/des) — some of: Je veux du pain.',
    bodyRu: 'Определённые (le/la/les) — конкретное/общее: J\'aime le chocolat. Неопр. (un/une/des) — один/несколько: Je vois un chat. Партитив (du/de la/des) — какое-то количество: Je veux du pain.',
  },
];

export interface UsefulPhrase { fr: string; en: string; ru: string; context: string; }

export const USEFUL_PHRASES: UsefulPhrase[] = [
  { fr: 'Comment ça va?', en: 'How are you?', ru: 'Как дела?', context: 'Greeting' },
  { fr: 'Ça va bien, merci', en: 'I\'m fine, thanks', ru: 'Хорошо, спасибо', context: 'Greeting' },
  { fr: 'Je ne comprends pas', en: 'I don\'t understand', ru: 'Я не понимаю', context: 'Classroom' },
  { fr: 'Pouvez-vous répéter?', en: 'Can you repeat?', ru: 'Можете повторить?', context: 'Classroom' },
  { fr: 'Qu\'est-ce que ça veut dire?', en: 'What does that mean?', ru: 'Что это значит?', context: 'Classroom' },
  { fr: 'Je voudrais…', en: 'I would like…', ru: 'Я бы хотел…', context: 'Polite request' },
  { fr: 'L\'addition, s\'il vous plaît', en: 'The bill, please', ru: 'Счёт, пожалуйста', context: 'Restaurant' },
  { fr: 'Où se trouve…?', en: 'Where is…?', ru: 'Где находится…?', context: 'Directions' },
  { fr: 'À mon avis…', en: 'In my opinion…', ru: 'По-моему…', context: 'Opinion (writing)' },
  { fr: 'D\'une part… d\'autre part', en: 'On one hand… on the other', ru: 'С одной стороны… с другой', context: 'Discursive writing' },
  { fr: 'Par exemple', en: 'For example', ru: 'Например', context: 'Writing connector' },
  { fr: 'En conclusion', en: 'In conclusion', ru: 'В заключение', context: 'Essay ending' },
];
