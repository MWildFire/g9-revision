import { lessons as englishLessons, tierLabels as englishTiers, commandTerms as englishCommands } from './content';
import { russianCore } from './russian-core';
import { russianRecap } from './russian-recap';
import { russianExtended } from './russian-extended';
const russianText = { ...russianCore, ...russianRecap, ...russianExtended };
const russianLessons = englishLessons.map(lesson => ({ ...lesson, ...russianText[lesson.id] }));
const russianTiers = {start:'Начните здесь', core:'Assessment 1 · Standard', recap:'Previous studies · повторение', extended:'Только Extended · дополнительно'};
const russianCommands = [
  ['Calculate · Вычислите','Найдите числовой результат и покажите существенные действия.','Расстояние: формула, подстановка, вычисление и единицы.'],
  ['Describe · Опишите','Назовите существенные свойства или закономерность словами.','Каждый член на три больше предыдущего.'],
  ['Determine · Определите','Найдите требуемый результат по данным условия.','Получите уравнение прямой по угловому коэффициенту и точке.'],
  ['Explain · Объясните','Раскройте смысл с помощью связанных причин.','У вертикальной прямой Δx = 0, поэтому её угловой коэффициент не определён.'],
  ['Justify · Обоснуйте','Подкрепите вывод математическими причинами.','Обоснуйте промежуток решения таблицей знаков и проверкой концов.'],
  ['Prove · Докажите','Дайте логическое обоснование для всех случаев при заданных предпосылках.','Представьте два нечётных целых как 2m + 1 и 2n + 1.'],
  ['Show that · Покажите, что','Получите указанный результат видимыми правильными шагами.','Выведите x = 4 из исходного уравнения.'],
  ['Sketch · Сделайте эскиз','Покажите общую форму и подпишите ключевые особенности.','Отметьте нули, вершину и ось параболы.'],
  ['State · Укажите','Дайте краткий ответ.','Угловой коэффициент равен −2.'],
  ['Solve · Решите','Найдите все допустимые значения, удовлетворяющие условию.','Для x² = 9 укажите x = 3 и x = −3.'],
  ['Verify · Проверьте','Сопоставьте утверждение с заданными условиями.','Подставьте пару в оба уравнения системы.'],
  ['Write down · Запишите','Непосредственно приведите требуемый результат.','Для y = 3x + 2 пересечение с осью y — (0, 2).'],
];
export function getPack(language: 'en' | 'ru') {
  const lessons = language === 'ru' ? russianLessons : englishLessons;
  const questions = lessons.flatMap(lesson => lesson.questions.map((question, index) => ({ ...question, id: `${lesson.id}-${index + 1}`, lessonId: lesson.id, tier: lesson.tier })));
  const glossary = lessons.flatMap(lesson => lesson.terms.map(term => ({ ...term, lessonId: lesson.id, tier: lesson.tier }))).sort((a,b) => (language === 'ru' ? a.ru.term : a.term).localeCompare(language === 'ru' ? b.ru.term : b.term, language));
  return { lessons, questions, glossary, tierLabels: language === 'ru' ? russianTiers : englishTiers, commandTerms: language === 'ru' ? russianCommands : englishCommands };
}
