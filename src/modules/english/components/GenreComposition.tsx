import compositions from '../data/genre-composition.json';
import {RichText} from '../../../components/content/RichText';

export const genreCompositions = compositions;
export function GenreComposition({id, language}: {id:string; language:'en'|'ru'}) {
  const item=compositions.find(item=>item.id===id);
  if(!item)return null;
  const ru=language==='ru';
  return <section className="nov-panel space-y-4" data-genre={item.id} aria-labelledby={`${item.id}-title`}>
    <h3 id={`${item.id}-title`}>{item.title[language]}</h3>
    <p>{ru?'Авторская тренировка по жанру из архивного школьного листа. Ситуация вымышлена; образец нельзя сдавать как свою работу. Это не обещание текста на экзамене, школьного объёма или лимита времени.':'Original practice of a genre listed on the archived school sheet. The situation is fictional; do not submit this model as your own work. No unseen exam text, school word count or time limit is promised.'}</p>
    <RichText text={item.teaching[language]}/>
    <details className="genre-model"><summary>{ru?'Разобрать полный образец на английском':'Study the complete English model'}</summary><div lang="en" className="mt-3"><RichText text={item.model}/></div></details>
    <h4>{ru?'Как работает выбранный приём':'How the worked choice works'}</h4>
    <RichText text={item.workedMove[language]}/>
    <p>{ru?'Теперь выполни самостоятельный перенос ниже. Открывай разбор после попытки; затем исправь один конкретный фрагмент своего текста.':'Now complete the independent transfer below. Open the feedback after attempting it, then revise one specific part of your own text.'}</p>
  </section>;
}
