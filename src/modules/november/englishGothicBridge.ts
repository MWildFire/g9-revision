type Bilingual = {en:string;ru:string};

export const englishGothicTeaching: {title:Bilingual;body:Bilingual}[] = [
  {
    title: {en:'The text used here: Shelley, 1831, Chapter V',ru:'Материал для разбора: Шелли, редакция 1831 года, глава V'},
    body: {
      en:'This practice uses the public Project Gutenberg transcription of the 1831 Frankenstein, Chapter V, from the November-night opening through Victor’s flight from the bedroom. The introduction is dated 15 October 1831. The school’s exact edition and extract boundaries have not been verified here: these are selected primary-text passages for preparation, not a reconstruction of the unseen school task. Read the selected public 1831 passage in this lesson before answering. The large illustrated pull quotation between the opening and “How can I describe” repeats material; do not treat it as an additional event in the narrative.',
      ru:'Для упражнения выбраны фрагменты главы V «Франкенштейна» в редакции 1831 года, опубликованной Project Gutenberg: от ноябрьской ночи до бегства Виктора из спальни. Вступление датировано 15 октября 1831 года. Точная редакция и границы школьного отрывка здесь не подтверждены. Это работа с доступным первичным текстом для подготовки, а не восстановление неизвестного школьного задания. Перед ответом прочитай выбранный публичный отрывок редакции 1831 года в этом уроке. Крупная иллюстрированная цитата между началом главы и «How can I describe» повторяет материал; она не обозначает ещё одно событие.'
    }
  },
  {
    title: {en:'Gothic: recurring possibilities, not a checklist',ru:'Готика: повторяющиеся черты, а не обязательный список'},
    body: {
      en:'Gothic literature often explores fear, confinement and uncertainty through unsettling places, unequal power, threats or apparently supernatural events. These features overlap across texts; no single feature is required in every Gothic work. John Bowen describes this flexible relationship between works and discusses place, constraint and doubt. In an analysis, connect a particular choice to its function in the passage you have read. A ghost is not compulsory, and a dark setting does not guarantee the same response from every reader.',
      ru:'Готическая литература часто обращается к страху, несвободе и неопределённости через тревожную обстановку, неравенство власти, угрозы или события, кажущиеся сверхъестественными. Эти черты по-разному сочетаются; нет одного признака, обязательного для каждого готического произведения. Джон Боуэн объясняет такое родство текстов и рассматривает место действия, ограничения и сомнение. В анализе свяжи конкретный выбор автора с его работой в прочитанном фрагменте. Призрак необязателен, а тёмная обстановка не гарантирует одинакового чувства у всех читателей.'
    }
  },
  {
    title: {en:'Creation and reaction: whose judgement?',ru:'Создание и реакция: кому принадлежит оценка?'},
    body: {
      en:'Victor narrates the animation after prolonged work. His opening anticipation is already painful: “anxiety” approaches “agony”. When the being lives, the account turns to “horror and disgust”; he leaves the room and later flees the bedroom. “Beautiful!” recalls his chosen features but immediately gives way to repellent description. The change belongs to Victor’s account. His labels reveal his reaction; they do not establish that the newly created being is morally guilty. Even the later reaching hand is described as “seemingly” intended to detain him, leaving a limit to what this account establishes.',
      ru:'Виктор рассказывает об оживлении существа после долгой работы. Уже ожидание мучительно: «anxiety» приближается к «agony». Когда существо оживает, рассказ переходит к «horror and disgust»; Виктор покидает комнату, а позднее бежит из спальни. Восклицание «Beautiful!» напоминает о выбранных им чертах, но сразу сменяется отталкивающим описанием. Это поворот в рассказе Виктора. Его обозначения раскрывают его реакцию, а не доказывают нравственную вину только что созданного существа. Даже протянутая позднее рука описана через «seemingly»: намерение задержать Виктора дано как предположение.'
    }
  }
];

export const englishGothicPractice: {id:string;prompt:Bilingual;answer:Bilingual}[] = [
  {
    id:'shelley-1831-mood-change',
    prompt: {
      en:'Read Chapter V from “It was on a dreary night of November” through “I rushed out of the room”. Explain how Victor’s mood changes. Use precise evidence from before and after the animation, and distinguish his response from a judgement about the being’s moral character.',
      ru:'Прочитай начало главы V от «It was on a dreary night of November» до «I rushed out of the room». Объясни изменение настроения Виктора. Приведи точные детали до и после оживления и отдели его реакцию от суждения о нравственных качествах существа.'
    },
    answer: {
      en:'Victor moves from anxious anticipation to horror and disgust, rather than from uncomplicated happiness to fear. At the start, “anxiety” almost becomes “agony”, so achievement is already painful. The later “but now” overturns the hope attached to his long effort: the imagined beauty disappears on completion. His rushing from the room turns that emotional reversal into action. Check that your answer explains the relationship between these details, rather than listing emotions. Other supported emphases, such as disappointment, can work. His disgust is evidence of his response, not proof of wrongdoing by the being.',
      ru:'Виктор переходит от тревожного ожидания к ужасу и отвращению, а не от безмятежной радости к страху. В начале «anxiety» почти становится «agony»: достижение уже связано с мучением. Позднее «but now» переворачивает надежду, вложенную в долгий труд: после завершения исчезает воображаемая красота. Бегство превращает эмоциональный поворот в поступок. Проверь, объяснил ли ты связь деталей, вместо перечисления чувств. Можно обоснованно выделить и разочарование. Отвращение Виктора свидетельствует о его реакции, но не о проступке существа.'
    }
  },
  {
    id:'shelley-1831-language-structure',
    prompt: {
      en:'Reread from “How can I describe my emotions” through Victor’s departure from the room. Explain how the exclamation “Beautiful!”, the contrasting description and the sequence from recollection to “but now” shape the reversal. Develop a connected explanation of language and structure; do not merely name devices.',
      ru:'Перечитай фрагмент от «How can I describe my emotions» до ухода Виктора из комнаты. Объясни, как восклицание «Beautiful!», контрастное описание и переход от воспоминания к «but now» выстраивают поворот. Свяжи языковые и композиционные решения с их действием, а не просто назови приёмы.'
    },
    answer: {
      en:'“Beautiful!” abruptly repeats and challenges Victor’s earlier selection of beautiful features. Lustrous hair and white teeth are set against the eyes and skin he finds repellent, so attractive individual details fail to produce the whole he imagined. Structurally, the recollection of almost two years of effort is reversed by “but now”; completion destroys rather than fulfils his dream of beauty. His immediate departure gives the reversal a consequence. Check that each technique supports this interpretation. The account invites examination of Victor’s judgement; it does not require us to adopt his labels as neutral descriptions of moral worth.',
      ru:'«Beautiful!» резко повторяет и ставит под вопрос прежний выбор красивых черт. Блестящие волосы и белые зубы противопоставлены глазам и коже, которые отталкивают Виктора: привлекательные части не складываются в задуманный им облик. В композиции воспоминание о почти двух годах труда обрывается поворотом «but now»: завершение разрушает мечту о красоте. Немедленный уход показывает последствие. Проверь, работает ли каждый названный приём на этот вывод. Рассказ позволяет исследовать оценку Виктора, но не обязывает принимать его ярлыки за беспристрастную оценку нравственных качеств.'
    }
  },
  {
    id:'shelley-1831-gothic-application',
    prompt: {
      en:'Apply the qualified Gothic definition to the Chapter V opening and the later bedroom encounter ending “but I escaped, and rushed down stairs”. Develop one explanation using setting or uncertainty, with exact evidence. Explain why the passage can support a Gothic reading without claiming that every Gothic text needs a ghost or that Victor’s fear proves an attack.',
      ru:'Примени определение готики с его оговорками к началу главы V и поздней встрече в спальне до «but I escaped, and rushed down stairs». Развей одно объяснение через обстановку или неопределённость и подтверди его точной деталью. Покажи, почему фрагмент допускает готическое прочтение, не объявляя призрака обязательным и не выдавая страх Виктора за доказательство нападения.'
    },
    answer: {
      en:'The nearly extinguished candle and dismal rain give the animation an unsettling setting rather than a clear scene of triumph. Uncertainty continues in the bedroom: Victor says he did not hear possible speech and qualifies the reaching hand with “seemingly”. We therefore receive fear without secure knowledge of the being’s intention. These choices support a Gothic reading through disturbing atmosphere and limited knowledge; they do not prove a hostile attack or the presence of a ghost. A setting-focused or uncertainty-focused answer is acceptable if it explains the chosen evidence. Avoid treating recurring Gothic features as universal requirements or predicting an identical response from every reader.',
      ru:'Почти погасшая свеча и унылый дождь создают тревожную обстановку оживления вместо ясной картины торжества. В спальне неопределённость сохраняется: Виктор не слышит возможных слов и оговаривает намерение протянутой руки словом «seemingly». Нам передан страх без достоверного знания о намерениях существа. Такая атмосфера и ограниченность знания поддерживают готическое прочтение, но не доказывают нападения или появления призрака. Подойдёт ответ с акцентом на обстановке либо неопределённости, если детали объяснены. Не превращай повторяющиеся черты готики в обязательные условия и не обещай одинаковой реакции всех читателей.'
    }
  }
];

export const englishGothicSources: {title:string;url:string;locator:Bilingual}[] = [
  {
    title:'Mary W. Shelley · Frankenstein, 1831 text · Project Gutenberg',
    url:'https://www.gutenberg.org/files/42324/42324-h/42324-h.htm',
    locator: {
      en:'Introduction ending “London, October 15, 1831”; Chapter V, opening “It was on a dreary night of November”, “How can I describe”, “Beautiful!”, “The different accidents of life”, “Unable to endure”, and bedroom paragraphs “I started from my sleep” / “He might have spoken”. Illustrated pull quotation is not an extra narrative paragraph. Selected passages only; school extract boundaries unverified.',
      ru:'Конец вступления «London, October 15, 1831»; глава V: начало «It was on a dreary night of November», абзацы «How can I describe», «Beautiful!», «The different accidents of life», «Unable to endure» и встреча в спальне «I started from my sleep» / «He might have spoken». Иллюстрированная цитата не является дополнительным абзацем событий. Выбраны отдельные фрагменты; школьные границы не подтверждены.'
    }
  },
  {
    title:'John Bowen · Gothic motifs · British Library',
    url:'https://www.britishlibrary.cn/en/articles/gothic-motifs/',
    locator: {
      en:'Opening discussion of overlapping characteristics rather than one necessary feature; sections “Strange places”, “Power and constraint” and “A world of doubt”. Definition paraphrased; application to Shelley is authored analysis, not a quotation from Bowen.',
      ru:'Вводное объяснение пересекающихся черт вместо единственного обязательного признака; разделы «Strange places», «Power and constraint» и «A world of doubt». Определение пересказано своими словами; применение к Шелли — авторский разбор, а не цитата Боуэна.'
    }
  }
];

// Public-domain narrative, selected from the primary transcription; illustration pull quote omitted.
export const englishGothicPassage: string[] = [
  "It was on a dreary night of November, that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.",
  "How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful!—Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes, that seemed almost of the same colour as the dun white sockets in which they were set, his shrivelled complexion and straight black lips.",
  "The different accidents of life are not so changeable as the feelings of human nature. I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart. Unable to endure the aspect of the being I had created, I rushed out of the room, and continued a long time traversing my bedchamber, unable to compose my mind to sleep. At length lassitude succeeded to the tumult I had before endured; and I threw myself on the bed in my clothes, endeavouring to seek a few moments of forgetfulness. But it was in vain: I slept, indeed, but I was disturbed by the wildest dreams. I thought I saw Elizabeth, in the bloom of health, walking in the streets of Ingolstadt. Delighted and surprised, I embraced her; but as I imprinted the first kiss on her lips, they became livid with the hue of death; her features appeared to change, and I thought that I held the corpse of my dead mother in my arms; a shroud enveloped her form, and I saw the grave-worms crawling in the folds of the flannel. I started from my sleep with horror; a cold dew covered my forehead, my teeth chattered, and every limb became convulsed: when, by the dim and yellow light of the moon, as it forced its way through the window shutters, I beheld the wretch—the miserable monster whom I had created. He held up the curtain of the bed; and his eyes, if eyes they may be called, were fixed on me. His jaws opened, and he muttered some inarticulate sounds, while a grin wrinkled his cheeks. He might have spoken, but I did not hear; one hand was stretched out, seemingly to detain me, but I escaped, and rushed down stairs."
];
