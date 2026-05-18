import { useTranslation } from 'react-i18next';
import { ClipboardCheck } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

export function ExamFormatPage() {
  const { t } = useTranslation('english');
  const structure = (t('examFormatPage.structure.items', { returnObjects: true }) as string[]) ?? [];
  const marks = (t('examFormatPage.markScheme.items', { returnObjects: true }) as string[]) ?? [];
  const checks = (t('examFormatPage.selfCheck.items', { returnObjects: true }) as string[]) ?? [];

  return (
    <div>
      <TopicHero title={t('examFormatPage.title')} intro={t('examFormatPage.intro')} icon={<ClipboardCheck size={28} />} />

      <SectionHeading>{t('examFormatPage.structure.title')}</SectionHeading>
      <ul className="space-y-2">
        {structure.map((s, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm" style={{ borderLeftColor: 'var(--color-accent-sand)', borderLeftWidth: '3px' }}>{s}</li>
        ))}
      </ul>

      <SectionHeading>{t('examFormatPage.q1eStructure.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderLeftColor: 'var(--color-accent-warm)', borderLeftWidth: '3px' }}>
        {t('examFormatPage.q1eStructure.body')}
      </p>

      <SectionHeading>{t('examFormatPage.markScheme.title')}</SectionHeading>
      <ul className="space-y-2">
        {marks.map((m, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{m}</li>
        ))}
      </ul>

      <SectionHeading>{t('examFormatPage.selfCheck.title')}</SectionHeading>
      <ul className="space-y-2">
        {checks.map((c, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">☐ {c}</li>
        ))}
      </ul>
    </div>
  );
}
