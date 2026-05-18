import { useLocalProgress } from '../../hooks/useLocalProgress';
import { Subject } from '../../config/subjects';
import { ACCENT_VAR } from '../../config/subjects';

interface Props {
  subject: Subject;
  showLabel?: boolean;
}

export function SubjectProgress({ subject, showLabel = true }: Props) {
  const [state] = useLocalProgress();
  const topicsState = state.progress[subject.id] ?? {};
  const completed = Object.values(topicsState).filter((t) => t.completed).length;
  const total = subject.topicsCount;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const accentColor = ACCENT_VAR[subject.accent];

  return (
    <div>
      {showLabel ? (
        <div className="flex items-center justify-between text-xs text-text-muted mb-1.5">
          <span>{completed} / {total}</span>
          <span className="font-mono">{pct}%</span>
        </div>
      ) : null}
      <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: accentColor }}
        />
      </div>
    </div>
  );
}
