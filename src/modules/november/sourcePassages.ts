import { b, type Text } from './content';

type Passage = { title: string; url: string; locator: Text };

// A passage supports the stated point, rather than every claim in the unit.
export const sourcePassages: Record<string, Passage[]> = {
  'b-disease': [
    { title: 'CDC · Questions about measles', url: 'https://www.cdc.gov/measles/about/questions.html', locator: b('The community-protection answer: immune people are less likely to spread measles; this reduces exposure for people who cannot be vaccinated.', 'Ответ о защите сообщества: люди с иммунитетом реже передают корь; это снижает вероятность встречи с вирусом для тех, кого нельзя привить.') },
    { title: 'WHO · Tetanus', url: 'https://www.who.int/news-room/fact-sheets/detail/tetanus', locator: b('Key facts and transmission: tetanus is not transmitted from person to person.', 'Основные факты и передача: столбняк не передаётся от человека к человеку.') },
    { title: 'Роспотребнадзор · Профилактика коревой инфекции · 15.04.2026', url: 'https://zpp.rospotrebnadzor.ru/news/federal/573300', locator: b('Final bullet on collective immunity concerns measles; its coverage figure is not a universal threshold for every disease.', 'Заключительный пункт о коллективном иммунитете относится к кори; его показатель охвата нельзя переносить на любую болезнь.') },
    { title: 'Роспотребнадзор · Профилактика столбняка · 16.06.2023', url: 'https://zpp.rospotrebnadzor.ru/news/federal/453924', locator: b('The transmission paragraph distinguishes environmental spores entering wounds from person-to-person transmission. Treatment schedules are outside this revision comparison.', 'Абзац о передаче различает попадание спор из среды в рану и передачу между людьми. Схемы лечения в это учебное сравнение не входят.') },
    { title: 'OpenStax Biology 2e · §42.2', url: 'https://openstax.org/books/biology-2e/pages/42-2-adaptive-immune-response', locator: b('T and B Lymphocytes; B Lymphocytes: antigen-specific adaptive responses and antibody-secreting plasma cells. NK cells are distinguished from these adaptive cells.', 'Разделы T and B Lymphocytes и B Lymphocytes: специфичность приобретённого ответа и плазматические клетки, выделяющие антитела. NK-клетки отделены от этих клеток приобретённого иммунитета.') },
  ],
};
