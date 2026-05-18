import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Icons from 'lucide-react';
import { Subject, ACCENT_VAR } from '../config/subjects';
import { SubjectProgress } from './progress/SubjectProgress';

interface Props {
  subject: Subject;
}

export function HubSubjectCard({ subject }: Props) {
  const { t } = useTranslation('hub');
  // @ts-expect-error — dynamic icon lookup
  const Icon = (Icons[subject.iconName] ?? Icons.BookOpen) as Icons.LucideIcon;
  const accentColor = ACCENT_VAR[subject.accent];

  const detailBadge = (
    <span
      className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border ml-2"
      style={{
        borderColor: 'var(--color-border)',
        color: 'var(--color-text-muted)',
      }}
    >
      {t(`detail.${subject.detail}`)}
    </span>
  );

  return (
    <Link
      to={subject.route}
      className="group block bg-bg-secondary border border-border rounded-lg shadow-card p-6 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-200"
      style={{ borderTopColor: accentColor, borderTopWidth: '3px' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: accentColor + '22', color: accentColor }}
        >
          <Icon size={24} strokeWidth={1.75} />
        </div>
        {subject.detail !== 'full' ? detailBadge : null}
      </div>
      <h3 className="font-serif text-xl font-medium mb-1.5 group-hover:text-text-primary transition-colors">
        {t(`subjects.${subject.id}.name`)}
      </h3>
      <p className="text-sm text-text-secondary mb-4 line-clamp-2 min-h-[2.6rem]">
        {t(`subjects.${subject.id}.description`)}
      </p>
      <SubjectProgress subject={subject} />
    </Link>
  );
}
