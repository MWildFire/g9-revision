import type { DefinitionReview } from '../../components/content/definitionReview';
import type { Exercise, Section, Text } from './content';

const b = (en: string, ru: string): Text => ({ en, ru });

// Confirmed archived G9 topic; this addition does not establish the current examination scope.
// Integrator attaches these exports to b-cells without changing existing session or exercise IDs.
export const biologyG9PracticalTeaching: Section[] = [
  {
    title: b('DNA extraction: explain each separation', 'Выделение ДНК (DNA extraction): объясни каждый этап'),
    body: b(
      'DNA extraction releases DNA from cells and separates it from some other material. In a teacher-supervised fruit demonstration, crushing disrupts the tissue and helps break cell walls. Detergent disrupts lipid cell and nuclear membranes, releasing their contents. A coarse filter retains large pieces of tissue; DNA in the liquid passes through. Filtration alone does not isolate pure DNA.\n\nSalt helps DNA molecules aggregate; adding alcohol reduces their solubility in the mixture, allowing a DNA-containing precipitate to form. The visible whitish material contains many DNA molecules together, and can also contain RNA, proteins or other material. It is neither one visible double helix nor evidence that the sample is pure. This is a model of separation, not instructions for independent home work: a teacher controls the materials and handling, including flammable alcohol.',
      'Выделение ДНК (DNA extraction) освобождает ДНК из клеток и отделяет её от части других веществ. В демонстрационном опыте с фруктом под руководством учителя разминание разрушает ткань и помогает разрушить клеточные стенки. Детергент (detergent) нарушает липидные мембраны клетки и ядра, высвобождая содержимое. Грубый фильтр задерживает крупные частицы ткани; ДНК в жидкости проходит через него. Одна фильтрация не даёт чистую ДНК.\n\nСоль помогает молекулам ДНК объединяться; добавление спирта снижает их растворимость в смеси, и образуется осадок, содержащий ДНК. Видимая беловатая масса состоит из множества молекул ДНК и может содержать РНК, белки и другие примеси. Это не одна видимая двойная спираль и не доказательство чистоты. Здесь объясняется модель разделения, а не самостоятельный домашний опыт: учитель контролирует материалы и обращение с ними, включая легковоспламеняющийся спирт.'
    ),
  },
  {
    title: b('Worked interpretation: extraction, sequencing or engineering?', 'Разобранный пример: выделение, секвенирование или инженерия?'),
    body: b(
      'A class obtains a whitish precipitate from fruit. A student says, “We have read its genes and changed them.” The observation supports neither claim. Extraction obtains DNA-containing material. Sequencing is a separate analysis that determines the order of DNA bases; genetic engineering deliberately changes DNA.\n\nA justified conclusion is: “The procedure produced a DNA-containing precipitate in this model. Its appearance alone does not tell us the base order, establish purity or show a deliberate DNA change.” Reading information, obtaining material and changing information are different outcomes.',
      'Класс получил из фрукта беловатый осадок. Ученик говорит: «Мы прочитали его гены и изменили их». Наблюдение не подтверждает ни одно утверждение. При выделении получают материал, содержащий ДНК. Секвенирование (sequencing) — отдельный анализ, определяющий порядок оснований ДНК; генная инженерия (genetic engineering) целенаправленно изменяет ДНК.\n\nОбоснованный вывод: «В этой модели получен осадок, содержащий ДНК. По его виду нельзя определить порядок оснований, установить чистоту или доказать целенаправленное изменение ДНК». Получить материал, прочитать информацию и изменить её — разные результаты.'
    ),
  },
];

export const biologyG9PracticalReview: DefinitionReview = {
  englishTerm: 'DNA extraction',
  russianTerm: 'Выделение ДНК',
  visual: {
    kind: 'flow',
    title: b('From tissue to a DNA-containing precipitate', 'От ткани к осадку, содержащему ДНК'),
    caption: b('Arrows show the purpose of each stage, not molecular scale or proof of purity.', 'Стрелки связывают этапы с их целью; это не молекулярный масштаб и не доказательство чистоты.'),
    items: [
      { label: b('Crush tissue', 'Размять ткань'), detail: b('Disrupt tissue and cell walls', 'Нарушить ткань и клеточные стенки') },
      { label: b('Detergent', 'Детергент'), detail: b('Disrupt lipid membranes → release contents', 'Нарушить липидные мембраны → освободить содержимое') },
      { label: b('Coarse filtration', 'Грубая фильтрация'), detail: b('Retain large debris → keep the liquid', 'Задержать крупные частицы → сохранить жидкость') },
      { label: b('Salt present; add alcohol', 'В присутствии соли добавить спирт'), detail: b('Promote aggregation and precipitation of DNA', 'Способствовать объединению и осаждению ДНК') },
      { label: b('Many molecules become visible together', 'Множество молекул становится видимым вместе'), detail: b('Possible impurities remain', 'Могут оставаться примеси') },
    ],
  },
  sources: [
    { title: 'NHGRI · Strawberry DNA Extraction', url: 'https://www.genome.gov/about-genomics/teaching-tools/strawberry-dna-extraction', language: 'en', section: 'Steps 1–9: crushing, extraction mixture, coarse filtration and alcohol precipitation; demonstration, not a purity test.' },
    { title: 'OpenStax Biology 2e · §17.1 DNA and RNA Extraction', url: 'https://openstax.org/books/biology-2e/pages/17-1-biotechnology', language: 'en', section: 'DNA and RNA Extraction, Figure 17.3: lysis, unwanted protein/RNA removal and alcohol precipitation. The figure explains a laboratory separation model; no additional laboratory protocol is adopted.' },
    { title: 'Arizona State University · Seeing DNA', url: 'https://askabiologist.asu.edu/activities/banana-dna', language: 'en', section: 'Introduction (double helix not visible to the naked eye); “What Happened?”, points 1–3: salt, lipid membranes and alcohol.' },
    { title: 'Южный федеральный университет · В День ДНК рассказываем, как выделить ДНК из банана', url: 'https://sfedu.ru/press-center/news/68516', language: 'ru', section: 'Объяснение В. Чохели, этапы 3–8: разминание, фильтр, холодный спирт и белая масса; внешний вид не служит проверкой чистоты.' },
    { title: 'В.А. Великов · Молекулярная биология. Практическое руководство · СГУ, 2013', url: 'https://old.sgu.ru/sites/default/files/method_info/2014/velikov_molecular_biology_0.pdf#page=7', language: 'ru', section: 'Печатные с. 6, 11–14 (разделы 1, 1.3–1.4): лизис и примеси, разрушение мембран детергентом, соль и спиртовое осаждение. Используются объяснения, а не университетские протоколы или их реактивы.' },
    { title: 'NHGRI · DNA Sequencing', url: 'https://www.genome.gov/genetics-glossary/DNA-Sequencing', language: 'en', section: 'Definition: sequencing determines base order; precipitate appearance is not sequence data.' },
    { title: 'NHGRI · Genetic Engineering', url: 'https://www.genome.gov/genetics-glossary/Genetic-Engineering', language: 'en', section: 'Definition: deliberate laboratory alteration of DNA; extraction alone does not show such alteration.' },
    { title: 'КубГУ · КСЕ: модуль 3.6 «Генная инженерия»', url: 'https://moodle.kubsu.ru/mod/page/view.php?id=1568', language: 'ru', section: 'Первый абзац: целенаправленное конструирование комбинаций генов. Используется только это определение; медицинские и другие исторические утверждения страницы 2011 года здесь не используются.' },
    { title: 'МГУ, ФББ · Е. Храмеева: 3D-структура хроматина', url: 'https://kodomo.fbb.msu.ru/FBB/mfk/2017s/Lecture7.pdf', language: 'ru', section: 'Слайд «Что такое секвенирование?»: установление последовательности нуклеотидов; другие исторические обобщения слайда здесь не используются.' },
  ],
};

export const biologyG9PracticalPractice: Exercise[] = [
  {
    id: 'dna-extraction-detergent', marks: 2,
    prompt: b('Why is detergent used after crushing fruit in a DNA-extraction model?', 'Зачем в модели выделения ДНК после разминания фрукта используют детергент?'),
    answer: b('It disrupts lipid cell and nuclear membranes [1], helping release DNA into the mixture [1]. Crushing and detergent have different roles; detergent does not read the bases.', 'Он нарушает липидные мембраны клетки и ядра [1], помогая высвободить ДНК в смесь [1]. Разминание и детергент выполняют разные задачи; детергент не читает основания ДНК.'),
  },
  {
    id: 'dna-extraction-separation', marks: 3,
    prompt: b('Compare the purpose of the coarse filter with adding alcohol to the salt-containing filtrate. Why does filtration alone not give pure DNA?', 'Сравни назначение грубого фильтра и добавления спирта к фильтрату, содержащему соль. Почему одной фильтрации недостаточно для получения чистой ДНК?'),
    answer: b('The filter retains large tissue debris [1], while DNA and other dissolved material can pass through [1]. Alcohol promotes DNA precipitation from the salt-containing liquid [1]; it does not simply sieve out large pieces. Dissolved contaminants can remain, so neither step proves purity.', 'Фильтр задерживает крупные частицы ткани [1], но ДНК и другие растворённые вещества могут пройти через него [1]. Спирт способствует осаждению ДНК из жидкости, содержащей соль [1], а не просто отсеиванию крупных частиц. Растворённые примеси могут сохраниться, поэтому эти этапы не доказывают чистоту.'),
  },
  {
    id: 'dna-extraction-evidence', marks: 3,
    prompt: b('A student calls the white precipitate “one pure double helix whose gene sequence we can now see”. Give three corrections.', 'Ученик называет белый осадок «одной чистой двойной спиралью, последовательность гена которой теперь видна». Внеси три исправления.'),
    answer: b('The visible material contains many molecules together, not a single visible double helix [1]. Other substances may be present, so appearance does not prove purity [1]. Determining base order requires sequencing; a white precipitate does not reveal it [1].', 'Видимая масса содержит множество молекул вместе, а не одну видимую двойную спираль [1]. Возможны примеси, поэтому внешний вид не доказывает чистоту [1]. Для определения порядка оснований нужно секвенирование; белый осадок его не показывает [1].'),
  },
];
