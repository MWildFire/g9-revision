import { Type } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { ARABIC_LETTERS } from '../data/arabicData';

export function AlphabetPage() {
  const { t, i18n } = useTranslation('arabic');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const arFont = '"Noto Sans Arabic", "Amiri", serif';

  return (
    <div>
      <TopicHero
        title={t('nav.alphabet')}
        intro={lang === 'ru' ? '28 букв арабского алфавита. У большинства четыре формы соединения.' : 'The 28 letters of the Arabic alphabet. Most have four connecting forms.'}
        icon={<Type size={28} />}
      />

      <SectionHeading>{lang === 'ru' ? 'Все буквы (изолированно)' : 'All letters (isolated)'}</SectionHeading>
      <div
        dir="rtl"
        className="bg-bg-secondary border border-border rounded-md p-6 text-center"
        style={{ borderTopColor: 'var(--color-accent-olive)', borderTopWidth: '3px' }}
      >
        <p className="text-3xl tracking-wider leading-relaxed" style={{ fontFamily: arFont }}>
          {ARABIC_LETTERS.map((l) => l.isolated).join(' ')}
        </p>
      </div>

      <SectionHeading>{lang === 'ru' ? 'Формы соединения' : 'Connecting forms'}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-bg-tertiary/30 text-text-secondary text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-3 py-2">Name</th>
              <th className="text-center px-2 py-2" style={{ fontFamily: arFont }}>Iso</th>
              <th className="text-center px-2 py-2" style={{ fontFamily: arFont }}>Init</th>
              <th className="text-center px-2 py-2" style={{ fontFamily: arFont }}>Med</th>
              <th className="text-center px-2 py-2" style={{ fontFamily: arFont }}>Fin</th>
              <th className="text-left px-3 py-2">Translit.</th>
              <th className="text-left px-3 py-2">Sound</th>
            </tr>
          </thead>
          <tbody>
            {ARABIC_LETTERS.map((l, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary/30'}>
                <td className="px-3 py-1.5 font-medium">{l.name}</td>
                <td className="px-2 py-1.5 text-center text-lg" style={{ fontFamily: arFont }}>{l.isolated}</td>
                <td className="px-2 py-1.5 text-center text-lg" style={{ fontFamily: arFont }}>{l.initial}</td>
                <td className="px-2 py-1.5 text-center text-lg" style={{ fontFamily: arFont }}>{l.medial}</td>
                <td className="px-2 py-1.5 text-center text-lg" style={{ fontFamily: arFont }}>{l.final}</td>
                <td className="px-3 py-1.5 text-text-secondary font-mono text-xs">{l.translit}</td>
                <td className="px-3 py-1.5 text-text-secondary text-xs">{l.sound}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
