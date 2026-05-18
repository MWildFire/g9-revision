import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';
import { ChevronDown, ClipboardCheck } from 'lucide-react';
import { useLocalState } from '../../../hooks/useLocalState';

const CRITERIA: Array<{ id: 'A' | 'B' | 'C' | 'D' }> = [{ id: 'A' }, { id: 'B' }, { id: 'C' }, { id: 'D' }];

export function CriteriaPage() {
  const { t } = useTranslation('physics');
  const [open, setOpen] = useState<'A' | 'B' | 'C' | 'D' | null>('A');
  const [checks, setChecks] = useLocalState<Record<string, boolean>>('physics-criteria-checks', {});

  const toggleCheck = (id: string) => {
    setChecks({ ...checks, [id]: !checks[id] });
  };

  return (
    <div>
      <TopicHero
        title={t('criteria.title')}
        intro={t('criteria.intro')}
        icon={<ClipboardCheck size={28} />}
      />

      <div className="space-y-3">
        {CRITERIA.map(({ id }) => {
          const items = t(`criteria.${id}.items`, { returnObjects: true }) as string[];
          const isOpen = open === id;
          return (
            <article
              key={id}
              className="bg-bg-secondary border border-border rounded-lg overflow-hidden shadow-card"
            >
              <button
                onClick={() => setOpen(isOpen ? null : id)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 hover:bg-bg-tertiary/40 transition-colors text-left"
                aria-expanded={isOpen}
              >
                <div>
                  <h2 className="font-serif text-lg font-medium text-text-primary">
                    {t(`criteria.${id}.title`)}
                  </h2>
                  <p className="text-xs text-text-muted mt-0.5">
                    {t(`criteria.${id}.subtitle`)}
                  </p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen ? (
                <ul className="px-5 pb-5 pt-1 space-y-2">
                  {items.map((item, i) => {
                    const key = `${id}-${i}`;
                    const checked = !!checks[key];
                    return (
                      <li key={i}>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleCheck(key)}
                            className="mt-1 w-4 h-4 rounded border-border accent-[var(--color-accent-sage)] cursor-pointer"
                          />
                          <span
                            className={`text-sm leading-relaxed transition-colors ${
                              checked ? 'text-text-muted line-through' : 'text-text-secondary'
                            }`}
                          >
                            {item}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
