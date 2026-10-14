import { lessons as englishLessons, tierLabels as englishTiers, commandTerms as englishCommands } from './content';
import { russianCore } from './russian-core';
import { russianRecap } from './russian-recap';
import { russianExtended } from './russian-extended';
const russianText = { ...russianCore, ...russianRecap, ...russianExtended };
const russianLessons = englishLessons.map(lesson => ({ ...lesson, ...russianText[lesson.id] }));
const russianTiers = {start:'С чего начать', core:'Оценочная работа 1 · базовый уровень (Standard)', recap:'Темы прошлых лет (Previous studies) · повторение', extended:'Расширенный уровень (Extended) · по назначению школы'};
const russianCommands = [
  ['Вычислить (calculate)','Найти числовой результат и показать ход решения.','Расстояние: формула, подстановка, вычисление и единицы.'],
  ['Описать (describe)','Словами передать главные свойства или закономерность.','Каждый член на три больше предыдущего.'],
  ['Определить (determine)','Найти требуемый результат по условию задачи.','Получи уравнение прямой по угловому коэффициенту и точке.'],
  ['Объяснить (explain)','Показать, почему это так, через причины и следствия.','У вертикальной прямой Δx = 0, поэтому её угловой коэффициент не определён.'],
  ['Обосновать (justify)','Подкрепить вывод математическими доводами.','Обоснуй промежуток решения таблицей знаков и проверкой его концов.'],
  ['Доказать (prove)','Дать логическое обоснование, верное во всех случаях при заданных условиях.','Представь два нечётных целых в виде 2m + 1 и 2n + 1.'],
  ['Показать, что (show that)','Получить указанный результат, записав все правильные шаги.','Выведи x = 4 из исходного уравнения.'],
  ['Сделать эскиз (sketch)','Нарисовать общую форму и подписать ключевые особенности.','Отметь нули, вершину и ось симметрии параболы.'],
  ['Назвать (state)','Дать краткий ответ.','Угловой коэффициент равен −2.'],
  ['Решить (solve)','Найти все допустимые значения, которые удовлетворяют условию.','Для x² = 9 укажи x = 3 и x = −3.'],
  ['Проверить (verify)','Проверить, выполняется ли утверждение при заданных условиях.','Подставь пару в оба уравнения системы.'],
  ['Записать (write down)','Сразу дать требуемый результат.','Для y = 3x + 2 пересечение с осью y — (0, 2).'],
];
export function getPack(language: 'en' | 'ru') {
  const lessons = language === 'ru' ? russianLessons : englishLessons;
  const questions = lessons.flatMap(lesson => lesson.questions.map((question, index) => ({ ...question, id: `${lesson.id}-${index + 1}`, lessonId: lesson.id, tier: lesson.tier })));
  const glossary = lessons.flatMap(lesson => lesson.terms.map(term => ({ ...term, lessonId: lesson.id, tier: lesson.tier }))).sort((a,b) => (language === 'ru' ? a.ru.term : a.term).localeCompare(language === 'ru' ? b.ru.term : b.term, language));
  return { lessons, questions, glossary, tierLabels: language === 'ru' ? russianTiers : englishTiers, commandTerms: language === 'ru' ? russianCommands : englishCommands };
}
