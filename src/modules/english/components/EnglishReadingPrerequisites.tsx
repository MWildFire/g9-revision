import { useState } from 'react';

type Language = 'en' | 'ru';
type Text = { en: string; ru: string };
type Prerequisite = { id: string; title: Text; definition: Text; practice: { prompt: Text; answer: Text } };

/** Two already-required reading prerequisites; examples and checks are authored teaching. */
export const englishReadingPrerequisites: Prerequisite[] = [
  {
    id: 'connotation',
    title: { en: 'Connotation: meaning beyond the explicit name', ru: 'Коннотация: оттенок сверх прямого значения' },
    definition: {
      en: 'Connotation is an association or suggested feeling beyond what a word explicitly names. “Home” names a place where someone lives and may suggest belonging or security; in “the abandoned home”, context can instead suggest loss. Explain the association supported here, not a feeling shared by every reader.',
      ru: 'Коннотация — ассоциация или эмоциональный оттенок сверх того, что слово прямо называет. Home обозначает место, где живут, и может напоминать о близости и безопасности; в сочетании the abandoned home контекст может, наоборот, передавать утрату. Объясняй оттенок, подтверждённый данным контекстом, а не обязательное чувство любого читателя.',
    },
    practice: {
      prompt: {
        en: 'Original application: “After years away, she found the abandoned home with its windows boarded shut.” Distinguish what “home” explicitly names from a connotation supported by this sentence. Which detail supports the association? Write two or three sentences.',
        ru: 'Авторское задание: “After years away, she found the abandoned home with its windows boarded shut.” («Спустя годы она нашла заброшенный дом с заколоченными окнами».) Различи прямое значение home и оттенок, который поддерживает эта фраза. Какая деталь подтверждает его? Напиши два-три предложения.',
      },
      answer: {
        en: '“Home” explicitly names a place where someone lives or lived. Here “abandoned” and the boarded windows can suggest loss or separation rather than security. Check three parts: explicit meaning, a plausible association and a precise supporting detail. Do not assert that every reader must feel sadness, or that the sentence proves why the house was abandoned. Other associations are valid if you explain their support.',
        ru: 'Home прямо обозначает место, где кто-то живёт или жил. Здесь abandoned («заброшенный») и заколоченные окна могут передавать утрату или разлуку, а не безопасность. Проверь три части: прямое значение, обоснованный оттенок и точную деталь. Не утверждай, что каждый читатель обязан грустить или что фраза доказывает причину запустения. Другое толкование допустимо, если ты объяснил его связь с текстом.',
      },
    },
  },
  {
    id: 'narrative-perspective',
    title: { en: 'Narrative perspective: person and access to knowledge', ru: 'Повествовательная перспектива: лицо и доступ к знанию' },
    definition: {
      en: 'Narrative perspective concerns who tells the story and whose experience or knowledge the narration gives us. First-person narration uses a character’s “I”; third-person narration uses names or “he/she/they”, but may stay close to one character or reveal more than one knows. Pronouns alone do not establish how much the narrator knows or whether the account is trustworthy.',
      ru: 'Повествовательная перспектива — кто рассказывает историю и чей опыт или сведения доступны через рассказ. При первом лице персонаж говорит «я»; при третьем используются имена или «он/она/они», но рассказ может ограничиваться опытом одного героя или сообщать больше, чем знает кто-либо из персонажей. Одних местоимений недостаточно, чтобы установить объём знания рассказчика или его надёжность.',
    },
    practice: {
      prompt: {
        en: 'Original application: “Mara heard the knock and wondered who was outside.” Identify the grammatical person and whose thought we can access. Does this sentence reveal the visitor’s thoughts? Does it establish that the narrator is omniscient or unreliable? Support your answer with the actual wording.',
        ru: 'Авторское задание: “Mara heard the knock and wondered who was outside.” («Мара услышала стук и задумалась, кто за дверью».) Определи грамматическое лицо и чья мысль нам доступна. Раскрывает ли фраза мысли посетителя? Доказывает ли она всеведение или ненадёжность рассказчика? Обоснуй ответ словами текста.',
      },
      answer: {
        en: 'Third person: Mara is named rather than speaking as “I”. “Wondered” gives access to Mara’s uncertainty, while the visitor’s thought is not supplied. This sentence stays with Mara’s experience; it does not prove the knowledge limits of an entire story or establish unreliability. Check person + exact sign of thought + what is not revealed. To judge a whole narrative, inspect more context; do not infer omniscience simply from third person.',
        ru: 'Третье лицо: Мара названа по имени, а не говорит «я». Wondered («задумалась») открывает её неуверенность; мыслей посетителя фраза не сообщает. Здесь рассказ держится опыта Мары, но одно предложение не доказывает границы знания во всём произведении или ненадёжность рассказчика. Проверь: лицо, точный признак мысли и что осталось неизвестным. Для вывода о всём повествовании нужен контекст; третье лицо само по себе не означает всеведения.',
      },
    },
  },
];

/** Checked applications exported for an integrator that owns existing exercise surfaces. */
export const englishReadingPrerequisitePractice = englishReadingPrerequisites.map(item => ({
  id: `reading-${item.id}-application`,
  prompt: item.practice.prompt,
  answer: item.practice.answer,
}));

function PrerequisiteApplication({ item, language }: { item: Prerequisite; language: Language }) {
  const [answer, setAnswer] = useState('');
  const ru = language === 'ru';
  const id = `prerequisite-${item.id}`;
  return <article className="border border-border rounded-md p-4 space-y-3" aria-labelledby={`${id}-title`}>
    <h3 id={`${id}-title`} className="font-semibold">{item.title[language]}</h3>
    <p>{item.definition[language]}</p>
    <p className="font-medium">{item.practice.prompt[language]}</p>
    <label htmlFor={`${id}-answer`} className="block font-medium">{ru ? 'Свой ответ перед разбором' : 'Your answer before checking'}</label>
    <textarea id={`${id}-answer`} rows={4} maxLength={4000} value={answer} onChange={event => setAnswer(event.target.value)} className="w-full rounded-md border border-border bg-bg-primary p-3" />
    <p className="text-xs">{ru ? 'Поле не сохраняется: перед уходом скопируй нужный ответ.' : 'This field is not saved: copy any answer you want to keep before leaving.'}</p>
    <details className="border border-border rounded-md p-3"><summary className="cursor-pointer font-semibold">{ru ? 'Открыть ответ и обоснование' : 'Reveal the answer and reason'}</summary><p className="mt-3">{item.practice.answer[language]}</p></details>
  </article>;
}

/** Place near the existing Reading/PEEL explanation or e-comparison prerequisites. */
export function EnglishReadingPrerequisites({ language = 'en' }: { language?: Language }) {
  return <section className="my-6 space-y-4" aria-labelledby="reading-prerequisites-title">
    <h2 id="reading-prerequisites-title" className="text-xl font-semibold">{language === 'ru' ? 'Два навыка перед анализом и сравнением' : 'Two skills before analysis and comparison'}</h2>
    {englishReadingPrerequisites.map(item => <PrerequisiteApplication key={item.id} item={item} language={language} />)}
    <details className="border border-border rounded-md p-3 text-sm"><summary className="cursor-pointer font-semibold">{language === 'ru' ? 'Источники определений' : 'Sources for the definitions'}</summary><ul className="mt-3 list-disc pl-5 space-y-2">
      <li><a className="underline" href="https://www.merriam-webster.com/dictionary/connotation" target="_blank" rel="noreferrer">Merriam-Webster · connotation</a> — {language === 'ru' ? 'значения 1a/1b и различие прямого и подразумеваемого смысла' : 'senses 1a/1b and the explicit/implicit meaning discussion'}.</li>
      <li><a className="underline" href="https://liberalarts.oregonstate.edu/wlf/what-point-of-view" target="_blank" rel="noreferrer">John Larison · Oregon State University · What is Point of View? (2020)</a> — {language === 'ru' ? 'текст урока: третье лицо, ограниченное и всеведущее повествование; первое лицо и надёжность рассказчика' : 'lesson transcript: limited/omniscient third person, first person and narrator reliability'}.</li>
      <li><a className="underline" href="https://foxford.ru/wiki/russkiy-yazyk/ekspressivnyy-komponent-v-leksicheskom-znachenii-slova-konnotatsiya" target="_blank" rel="noreferrer">Фоксфорд Учебник · Коннотация</a> — {language === 'ru' ? 'раздел «Роль коннотации» и сопоставление прямого значения с дополнительной окраской' : 'native-Russian explanation: the role of connotation and the contrast with direct meaning'}.</li>
    </ul></details>
  </section>;
}
