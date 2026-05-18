import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Languages, Hourglass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../components/content/TopicHero';
import { useLocalProgress } from '../../hooks/useLocalProgress';

const TOPICS = ['vocabulary', 'grammar', 'conjugation', 'reading', 'writing'];
const LEVELS = ['emergent', 'capable', 'proficient'] as const;
type Level = (typeof LEVELS)[number];

const VOCAB: { fr: string; en: string; ru: string }[] = [
  { fr: 'bonjour', en: 'hello', ru: 'здравствуй' },
  { fr: 'merci', en: 'thank you', ru: 'спасибо' },
  { fr: 'oui', en: 'yes', ru: 'да' },
  { fr: 'non', en: 'no', ru: 'нет' },
  { fr: 's\'il vous plaît', en: 'please', ru: 'пожалуйста' },
  { fr: 'maison', en: 'house', ru: 'дом' },
  { fr: 'école', en: 'school', ru: 'школа' },
  { fr: 'famille', en: 'family', ru: 'семья' },
  { fr: 'ami(e)', en: 'friend', ru: 'друг' },
  { fr: 'eau', en: 'water', ru: 'вода' },
  { fr: 'manger', en: 'to eat', ru: 'есть' },
  { fr: 'boire', en: 'to drink', ru: 'пить' },
  { fr: 'aller', en: 'to go', ru: 'идти' },
  { fr: 'voir', en: 'to see', ru: 'видеть' },
  { fr: 'faire', en: 'to do/make', ru: 'делать' },
  { fr: 'avoir', en: 'to have', ru: 'иметь' },
  { fr: 'être', en: 'to be', ru: 'быть' },
  { fr: 'parler', en: 'to speak', ru: 'говорить' },
  { fr: 'écouter', en: 'to listen', ru: 'слушать' },
  { fr: 'lire', en: 'to read', ru: 'читать' },
  { fr: 'écrire', en: 'to write', ru: 'писать' },
  { fr: 'aimer', en: 'to love/like', ru: 'любить' },
  { fr: 'vouloir', en: 'to want', ru: 'хотеть' },
  { fr: 'pouvoir', en: 'to be able', ru: 'мочь' },
  { fr: 'devoir', en: 'must', ru: 'должен' },
  { fr: 'savoir', en: 'to know (fact)', ru: 'знать' },
  { fr: 'connaître', en: 'to know (person)', ru: 'знать' },
  { fr: 'temps', en: 'time/weather', ru: 'время/погода' },
  { fr: 'jour', en: 'day', ru: 'день' },
  { fr: 'nuit', en: 'night', ru: 'ночь' },
  { fr: 'année', en: 'year', ru: 'год' },
  { fr: 'mois', en: 'month', ru: 'месяц' },
  { fr: 'semaine', en: 'week', ru: 'неделя' },
  { fr: 'heure', en: 'hour', ru: 'час' },
  { fr: 'monde', en: 'world', ru: 'мир' },
  { fr: 'vie', en: 'life', ru: 'жизнь' },
  { fr: 'travail', en: 'work', ru: 'работа' },
  { fr: 'livre', en: 'book', ru: 'книга' },
  { fr: 'chat', en: 'cat', ru: 'кот' },
  { fr: 'chien', en: 'dog', ru: 'собака' },
  { fr: 'grand', en: 'big/tall', ru: 'большой' },
  { fr: 'petit', en: 'small', ru: 'маленький' },
  { fr: 'beau', en: 'beautiful', ru: 'красивый' },
  { fr: 'bon', en: 'good', ru: 'хороший' },
  { fr: 'mauvais', en: 'bad', ru: 'плохой' },
  { fr: 'nouveau', en: 'new', ru: 'новый' },
  { fr: 'vieux', en: 'old', ru: 'старый' },
  { fr: 'chaud', en: 'hot', ru: 'горячий' },
  { fr: 'froid', en: 'cold', ru: 'холодный' },
  { fr: 'aujourd\'hui', en: 'today', ru: 'сегодня' },
];

const CONJUGATIONS: { verb: string; ru: string; forms: [string, string, string, string, string, string] }[] = [
  { verb: 'être (to be)', ru: 'быть', forms: ['je suis', 'tu es', 'il/elle est', 'nous sommes', 'vous êtes', 'ils/elles sont'] },
  { verb: 'avoir (to have)', ru: 'иметь', forms: ['j\'ai', 'tu as', 'il/elle a', 'nous avons', 'vous avez', 'ils/elles ont'] },
  { verb: 'aller (to go)', ru: 'идти', forms: ['je vais', 'tu vas', 'il/elle va', 'nous allons', 'vous allez', 'ils/elles vont'] },
  { verb: 'faire (to do)', ru: 'делать', forms: ['je fais', 'tu fais', 'il/elle fait', 'nous faisons', 'vous faites', 'ils/elles font'] },
  { verb: 'parler (to speak, -er)', ru: 'говорить', forms: ['je parle', 'tu parles', 'il/elle parle', 'nous parlons', 'vous parlez', 'ils/elles parlent'] },
];

function FrenchHome() {
  const { t, i18n } = useTranslation('french');
  const [state, update] = useLocalProgress();
  const currentLevel = state.french.level;
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const setLevel = (level: Level) => {
    update((s) => ({ ...s, french: { ...s.french, level } }));
  };

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Languages size={28} />} />

      <SectionHeading>{t('home.selectLevel')}</SectionHeading>
      <div className="grid grid-cols-3 gap-2">
        {LEVELS.map((level) => {
          const active = currentLevel === level;
          return (
            <button
              key={level}
              onClick={() => setLevel(level)}
              className={`px-4 py-3 rounded-md border text-sm font-medium transition-colors ${
                active ? 'bg-bg-secondary shadow-soft border-accent-rose-muted' : 'border-border hover:bg-bg-secondary/50'
              }`}
            >
              {t(`home.levels.${level}`)}
            </button>
          );
        })}
      </div>

      <SectionHeading>{t('home.draftNotice')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4">
        <ul className="space-y-2">
          {TOPICS.map((id) => (
            <li key={id} className="flex items-center gap-2 text-sm">
              <Hourglass size={14} className="text-text-muted" />
              {t(`topics.${id}`)}
            </li>
          ))}
        </ul>
      </div>

      <SectionHeading>{t('home.conjugationHeading')}</SectionHeading>
      <div className="space-y-3">
        {CONJUGATIONS.map((c) => (
          <article key={c.verb} className="bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-rose-muted)', borderLeftWidth: '3px' }}>
            <h3 className="font-serif text-lg font-medium mb-2">
              {c.verb} {lang === 'ru' ? <span className="text-text-muted text-sm">— {c.ru}</span> : null}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 font-mono text-sm">
              {c.forms.map((f, i) => (
                <span key={i}>{f}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <SectionHeading>{t('home.vocabHeading')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-bg-tertiary/30 text-text-secondary text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-4 py-2">Français</th>
              <th className="text-left px-4 py-2">English</th>
              <th className="text-left px-4 py-2">Русский</th>
            </tr>
          </thead>
          <tbody>
            {VOCAB.map((v, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary/30'}>
                <td className="px-4 py-1.5 font-medium">{v.fr}</td>
                <td className="px-4 py-1.5 text-text-secondary">{v.en}</td>
                <td className="px-4 py-1.5 text-text-secondary">{v.ru}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function FrenchModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8">
      <Routes>
        <Route index element={<FrenchHome />} />
      </Routes>
    </div>
  );
}
