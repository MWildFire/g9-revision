import type { DefinitionReview } from '../../components/content/definitionReview';
import type { Exercise, Section, Text } from './content';

const b = (en: string, ru: string): Text => ({ en, ru });

// Archived G9 preparation, not an addition to the confirmed current mock scope.
export const archivedBiologyTeaching: Record<string, Section[]> = {
  'b-transport': [{
    title: b('Archived G9: identify a heart from evidence', 'Архивная программа G9: распознай сердце по признакам'),
    body: b(
      'Use vessel connections and chamber walls to orient a teacher-provided heart specimen or image. The left ventricular wall is thicker because the systemic circuit requires greater pressure; the right ventricle supplies the lungs. Atrioventricular valves separate atria from ventricles; semilunar valves guard the ventricular outlets. Closing valves prevents reverse flow. Do not identify anatomical left and right from the side of a page alone.\n\nWorked move: a chamber connects to the pulmonary trunk. This identifies the right ventricle, even if the image is rotated. Its outlet valve is the pulmonary semilunar valve, which prevents blood returning from that trunk during ventricular relaxation. Use the vessel connection, not just “pumps blood”.\n\nA schematic or a written description alone does not prove that you can identify an unfamiliar specimen. Practical handling and assessment remain with the teacher. The task below supplies observations in words; no actual specimen has been examined here.',
      'На предоставленном учителем образце сердца или изображении сначала проследи соединения с сосудами и сравни стенки камер. Стенка левого желудочка толще: для большого круга нужно большее давление. Правый желудочек снабжает лёгкие. Предсердно-желудочковые клапаны разделяют предсердия и желудочки, полулунные находятся на выходе из желудочков. Закрываясь, клапаны препятствуют обратному току. Не определяй анатомические левую и правую стороны только по их положению на странице.\n\nРазобранный пример: камера соединена с лёгочным стволом. Значит, это правый желудочек, даже если изображение повёрнуто. На его выходе расположен полулунный клапан лёгочного ствола: при расслаблении желудочка он препятствует возврату крови. Обоснование — соединение с сосудом, а не просто слова «перекачивает кровь».\n\nЗнание схемы или словесного описания не доказывает умения распознать незнакомый образец. Работу с препаратом и оценивание проводит учитель. Ниже признаки даны словами; реальный препарат здесь не исследовали.'
    ),
  }],
  'b-evolution': [{
    title: b('Archived G9: a named inherited disease', 'Архивная программа G9: наследование конкретной болезни'),
    body: b(
      'Cystic fibrosis is autosomal recessive. In this simplified single-gene school model, F denotes the usual functional allele and f a CF-causing allele. An Ff carrier usually lacks the characteristic disease phenotype; an affected individual has two disease-causing copies. Real variants and severity can differ. This is a genetics model, not an individual diagnosis.\n\nWorked cross: ff × FF. The first parent contributes f in every gamete; the second contributes F. All combinations are Ff: carriers, rather than affected ff, in this model. The recessive allele has not disappeared. Genotype describes the allele combination; phenotype describes the expressed characteristic.\n\nFor a different cross, list each parent’s possible gametes and combine one from each before counting outcomes. Distinguish the probability of an affected child from the probability of a carrier. Each conception is a new probabilistic outcome in the model, not a guaranteed quota in a four-child family.',
      'Муковисцидоз наследуется аутосомно-рецессивно. В упрощённой школьной модели одного гена F обозначает обычный функциональный аллель, а f — аллель, вызывающий муковисцидоз. У носителя Ff обычно нет характерных проявлений болезни; при заболевании имеются две вызывающие болезнь копии. Реальные варианты и тяжесть болезни различаются. Это учебная генетическая модель, а не диагноз человеку.\n\nРазобранное скрещивание: ff × FF. Первый родитель передаёт f с каждой гаметой, второй — F. Все сочетания дают Ff: в этой модели это носители, а не больные ff. Рецессивный аллель при этом не исчез. Генотип — сочетание аллелей; фенотип — проявляющийся признак.\n\nВ другом скрещивании сначала выпиши возможные гаметы каждого родителя, затем соедини по одной от каждого и подсчитай исходы. Не смешивай вероятность заболевания и вероятность носительства. Каждое зачатие — новый вероятностный исход модели, а не обязательный набор на семью из четырёх детей.'
    ),
  }],
};

export const archivedBiologyReviews: Record<string, DefinitionReview> = {
  'b-transport': {
    englishTerm: 'Archived G9 heart practical revision', russianTerm: 'Повторение практики по сердцу из архивной программы G9',
    explanation: b('Archived preparation. Written interpretation supports, but does not certify, teacher-assessed specimen identification.', 'Архивная подготовка. Разбор описания помогает повторению, но не заменяет оценивание распознавания препарата учителем.'),
    sources: [
      { title: 'OpenStax Anatomy and Physiology 2e · 19.1 Heart Anatomy', url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy', language: 'en', section: 'Chambers and circulation; Layers, Figure 19.8; Internal structure; Heart valve structure and function: ventricular pressure, vessel connections and prevention of backflow. Diagnostic description and rotated-image inference are authored applications.' },
      { title: 'Фоксфорд · Сердце человека', url: 'https://foxford.ru/wiki/biologiya/serdechno-sosudistaya-sistema-cheloveka-serdtse', language: 'ru', section: '«Строение сердца»: связи камер с сосудами, створчатые и полулунные клапаны; «Как работает сердце?»: клапаны при расслаблении. Этот источник не заменяет отдельное обоснование разницы давлений в OpenStax.' },
      { title: 'ГЭОТАР · открытый фрагмент, раздел 1.1 «Анатомия»', url: 'https://www.geotar.ru/cgi-bin/unishell?hide_Cookie=yes&usr_data=open(lots,NF0012103,attaches,,2,f1,,00000000,)#page=4', language: 'ru', section: 'Печатная с. 14, первый абзац (PDF с. 4): более сильное сокращение левого желудочка для большого круга, развитая мышечная стенка, митральный и аортальный клапаны. Используется только доступный фрагмент, без предположения о невидимой редакции книги.' },
    ],
  },
  'b-evolution': {
    englishTerm: 'Archived G9 genetic-disease revision', russianTerm: 'Наследственные болезни из архивной программы G9',
    explanation: b('Archived preparation; the F/f crosses are explicit simplified models, not family-specific predictions.', 'Архивная подготовка; скрещивания F/f — явно заданные упрощённые модели, а не прогноз для конкретной семьи.'),
    sources: [
      { title: 'NIH / NLM · MedlinePlus Genetics · Cystic fibrosis', url: 'https://medlineplus.gov/genetics/condition/cystic-fibrosis/', language: 'en', section: 'Description (variation in severity) and Inheritance (autosomal recessive pattern, two altered copies and usually unaffected carrier parents). F/f notation and the enumerated crosses are authored school-model derivations.' },
      { title: 'Национальный консенсус · Муковисцидоз · 2016/2017', url: 'https://cftr.lovd.parseq.pro/docs/CF_consensus_2017.pdf#page=5', language: 'ru', section: 'Введение, печатная с. 6 (PDF с. 5): аутосомно-рецессивное наследование двух мутантных аллелей. Раздел 3.2, печатные с. 28–29 (PDF с. 16): разнообразие фенотипа и ограничения прогноза. Только генетические основы; лечебные рекомендации старого документа здесь не используются. Вероятности выведены из явно заданных гамет.' },
    ],
  },
};

export const archivedBiologyPractice: Record<string, Exercise[]> = {
  'b-transport': [{
    id: 'g9-heart-specimen-evidence', marks: 3,
    prompt: b('Diagnostic description of a mammalian heart image: chamber X has the thickest ventricular wall and connects to the artery supplying the body. Identify X, explain its wall thickness, and state the role of the valve at its outlet. These supplied observations are not a claim that you have viewed a specimen.', 'Учебное описание изображения сердца млекопитающего: камера X имеет самую толстую стенку среди желудочков и соединена с артерией большого круга. Назови X, объясни толщину стенки и укажи роль клапана на выходе. Признаки даны в условии; это не утверждение, что ты уже исследовал препарат.'),
    answer: b('Left ventricle [1]; it develops the greater pressure needed for systemic circulation [1]; the aortic semilunar valve prevents backflow from the aorta when the ventricle relaxes [1]. Check that you used both the wall and vessel evidence. “Left on the page” and “it pumps blood” alone do not distinguish this chamber.', 'Левый желудочек [1]; он создаёт большее давление для большого круга [1]; полулунный клапан аорты препятствует возврату крови из аорты при расслаблении желудочка [1]. Проверь, что использованы признаки стенки и соединения с сосудом. «Слева на странице» и «перекачивает кровь» сами по себе не отличают эту камеру.'),
  }],
  'b-evolution': [{
    id: 'g9-cystic-fibrosis-carrier-cross', marks: 4,
    prompt: b('Both parents are CF carriers Ff in this school model. Give their gametes and offspring genotypes, the probability of an affected child, the probability of an unaffected carrier, and explain why four children need not include exactly one affected child.', 'В этой школьной модели оба родителя — носители муковисцидоза Ff. Укажи их гаметы и генотипы потомства, вероятность рождения больного ребёнка, вероятность здорового носителя и объясни, почему среди четырёх детей не обязательно будет ровно один больной.'),
    answer: b('Each parent produces F or f; equally likely pairs are FF, Ff, fF, ff [1]. Affected ff: 1/4 = 25% [1]. Unaffected carriers Ff/fF: 2/4 = 50% [1]. Each conception is a new probabilistic outcome in this model, not a guaranteed four-child quota [1]. Ff and fF are the same heterozygous genotype, counted twice because there are two equally likely gamete combinations. Check that you did not label all three unaffected combinations as carriers: FF is not a carrier.', 'У каждого родителя гаметы F или f; равновероятные сочетания FF, Ff, fF, ff [1]. Больной ff: 1/4 = 25% [1]. Здоровые носители Ff/fF: 2/4 = 50% [1]. Каждое зачатие — новый вероятностный исход модели, а не обязательный набор на четверых детей [1]. Ff и fF — один гетерозиготный генотип, учтённый дважды из-за двух равновероятных сочетаний гамет. Проверь, что не назвал все три здоровых сочетания носителями: FF не носитель.'),
  }],
};
