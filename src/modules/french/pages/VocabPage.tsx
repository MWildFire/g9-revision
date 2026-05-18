import { BookA } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { VOCAB_THEMES } from '../data/frenchData';

export function VocabPage() {
  const { t, i18n } = useTranslation('french');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <div>
      <TopicHero
        title={t('nav.vocab')}
        intro={lang === 'ru' ? 'Базовая лексика по темам. ~75 слов для G9.' : 'Themed vocabulary. ~75 words for G9.'}
        icon={<BookA size={28} />}
      />
      {VOCAB_THEMES.map((theme) => (
        <div key={theme.id}>
          <SectionHeading>{lang === 'ru' ? theme.titleRu : theme.titleEn}</SectionHeading>
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
                {theme.items.map((v, i) => (
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
      ))}
    </div>
  );
}
