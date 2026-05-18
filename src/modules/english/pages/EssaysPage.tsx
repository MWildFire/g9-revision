import { Pencil } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';

interface Prompt { type: string; prompt: string; tips: string; }

export function EssaysPage() {
  const { t } = useTranslation('english');
  const prompts = (t('essayPrompts', { returnObjects: true }) as Prompt[]) ?? [];

  return (
    <div>
      <TopicHero title={t('essaysPage.title')} intro={t('essaysPage.intro')} icon={<Pencil size={28} />} />
      <div className="space-y-4 mt-8">
        {prompts.map((p, i) => (
          <article key={i} className="bg-bg-secondary border border-border rounded-lg shadow-card p-5" style={{ borderLeftColor: 'var(--color-accent-clay)', borderLeftWidth: '3px' }}>
            <div className="flex items-baseline justify-between mb-2 gap-2 flex-wrap">
              <h3 className="font-serif text-lg font-medium">{p.prompt}</h3>
              <span className="text-xs uppercase tracking-wider text-text-muted">{p.type}</span>
            </div>
            <p className="text-sm text-text-secondary"><strong>Tips:</strong> {p.tips}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
