import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format, startOfWeek, eachDayOfInterval, addDays, addWeeks, subWeeks } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';
import { Calendar, Plus, X, Check } from 'lucide-react';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { useExamCountdown } from '../hooks/useExamCountdown';
import { ACCENT_VAR, SubjectId, getSubject } from '../config/subjects';
import { setExamDate, getExamDate } from '../config/examDate';
import type { TimetableEntry } from '../lib/storage';

const TOPIC_LIBRARY: { subjectId: SubjectId; topicId: string; labelKey: string; ns: string }[] = [
  // Math (5 main topics)
  { subjectId: 'math', topicId: 'number-systems', labelKey: 'nav.numberSystems', ns: 'math' },
  { subjectId: 'math', topicId: 'functions-algebra', labelKey: 'nav.functionsAlgebra', ns: 'math' },
  { subjectId: 'math', topicId: 'sequences', labelKey: 'nav.sequences', ns: 'math' },
  { subjectId: 'math', topicId: 'geometry-trig', labelKey: 'nav.geometryTrig', ns: 'math' },
  { subjectId: 'math', topicId: 'stats-prob', labelKey: 'nav.statsProb', ns: 'math' },
  // Physics (4 main topics)
  { subjectId: 'physics', topicId: 'force-motion', labelKey: 'nav.forceMotion', ns: 'physics' },
  { subjectId: 'physics', topicId: 'forces-energy', labelKey: 'nav.forcesEnergy', ns: 'physics' },
  { subjectId: 'physics', topicId: 'electricity', labelKey: 'nav.electricity', ns: 'physics' },
  { subjectId: 'physics', topicId: 'waves-optics', labelKey: 'nav.wavesOptics', ns: 'physics' },
  // Chemistry (8 main topics)
  { subjectId: 'chemistry', topicId: 'atoms-periodic', labelKey: 'nav.atomsPeriodic', ns: 'chemistry' },
  { subjectId: 'chemistry', topicId: 'bonding', labelKey: 'nav.bonding', ns: 'chemistry' },
  { subjectId: 'chemistry', topicId: 'reactions', labelKey: 'nav.reactions', ns: 'chemistry' },
  { subjectId: 'chemistry', topicId: 'stoichiometry', labelKey: 'nav.stoichiometry', ns: 'chemistry' },
  { subjectId: 'chemistry', topicId: 'acids-bases', labelKey: 'nav.acidsBases', ns: 'chemistry' },
  { subjectId: 'chemistry', topicId: 'atmosphere', labelKey: 'nav.atmosphere', ns: 'chemistry' },
  { subjectId: 'chemistry', topicId: 'rates', labelKey: 'nav.rates', ns: 'chemistry' },
  { subjectId: 'chemistry', topicId: 'energy', labelKey: 'nav.energy', ns: 'chemistry' },
  // Biology (7 main topics)
  { subjectId: 'biology', topicId: 'cells', labelKey: 'nav.cells', ns: 'biology' },
  { subjectId: 'biology', topicId: 'body-systems', labelKey: 'nav.bodySystems', ns: 'biology' },
  { subjectId: 'biology', topicId: 'photosynthesis', labelKey: 'nav.photosynthesis', ns: 'biology' },
  { subjectId: 'biology', topicId: 'ecology', labelKey: 'nav.ecology', ns: 'biology' },
  { subjectId: 'biology', topicId: 'genetics', labelKey: 'nav.genetics', ns: 'biology' },
  { subjectId: 'biology', topicId: 'immune', labelKey: 'nav.immune', ns: 'biology' },
  { subjectId: 'biology', topicId: 'experiment', labelKey: 'nav.experiment', ns: 'biology' },
  // English (8 main topics)
  { subjectId: 'english', topicId: 'macbeth', labelKey: 'nav.macbeth', ns: 'english' },
  { subjectId: 'english', topicId: 'exam-format', labelKey: 'nav.examFormat', ns: 'english' },
  { subjectId: 'english', topicId: 'progress-test', labelKey: 'nav.progressTest', ns: 'english' },
  { subjectId: 'english', topicId: 'text-types', labelKey: 'nav.textTypes', ns: 'english' },
  { subjectId: 'english', topicId: 'devices', labelKey: 'nav.devices', ns: 'english' },
  { subjectId: 'english', topicId: 'grammar', labelKey: 'nav.grammar', ns: 'english' },
  { subjectId: 'english', topicId: 'reading', labelKey: 'nav.reading', ns: 'english' },
  { subjectId: 'english', topicId: 'essays', labelKey: 'nav.essays', ns: 'english' },
  // French (6 main topics)
  { subjectId: 'french', topicId: 'units', labelKey: 'nav.units', ns: 'french' },
  { subjectId: 'french', topicId: 'vocab', labelKey: 'nav.vocab', ns: 'french' },
  { subjectId: 'french', topicId: 'tenses', labelKey: 'nav.tenses', ns: 'french' },
  { subjectId: 'french', topicId: 'grammar', labelKey: 'nav.grammar', ns: 'french' },
  { subjectId: 'french', topicId: 'phrases', labelKey: 'nav.phrases', ns: 'french' },
  { subjectId: 'french', topicId: 'text-types', labelKey: 'nav.textTypes', ns: 'french' },
  // Arabic (5 main topics)
  { subjectId: 'arabic', topicId: 'mrs-hala', labelKey: 'nav.mrsHala', ns: 'arabic' },
  { subjectId: 'arabic', topicId: 'alphabet', labelKey: 'nav.alphabet', ns: 'arabic' },
  { subjectId: 'arabic', topicId: 'vocab', labelKey: 'nav.vocab', ns: 'arabic' },
  { subjectId: 'arabic', topicId: 'grammar', labelKey: 'nav.grammar', ns: 'arabic' },
  { subjectId: 'arabic', topicId: 'phrases', labelKey: 'nav.phrases', ns: 'arabic' },
  // Geography (4 main topics)
  { subjectId: 'geography', topicId: 'rivers', labelKey: 'nav.rivers', ns: 'geography' },
  { subjectId: 'geography', topicId: 'tourism', labelKey: 'nav.tourism', ns: 'geography' },
  { subjectId: 'geography', topicId: 'resource-reliance', labelKey: 'nav.resourceReliance', ns: 'geography' },
  { subjectId: 'geography', topicId: 'atmospheric-hazards', labelKey: 'nav.atmosphericHazards', ns: 'geography' },
];

export function TimetablePage() {
  const { t, i18n } = useTranslation('common');
  const tHub = useTranslation('hub').t;
  const [state, update] = useLocalProgress();
  const { days, examDate } = useExamCountdown();
  const [selectedTopic, setSelectedTopic] = useState<typeof TOPIC_LIBRARY[number] | null>(null);

  const locale = i18n.language.startsWith('ru') ? ru : enUS;
  const weeks = useMemo(() => buildWeeks(examDate), [examDate]);
  const entriesByDate = useMemo(() => {
    const byDate: Record<string, TimetableEntry[]> = {};
    for (const e of state.timetable.entries) {
      byDate[e.date] = byDate[e.date] ? [...byDate[e.date], e] : [e];
    }
    return byDate;
  }, [state.timetable.entries]);

  const addEntry = (date: string) => {
    if (!selectedTopic) return;
    update((s) => ({
      ...s,
      timetable: {
        entries: [
          ...s.timetable.entries,
          {
            id: `${date}-${selectedTopic.subjectId}-${selectedTopic.topicId}-${Date.now()}`,
            date,
            subjectId: selectedTopic.subjectId,
            topicId: selectedTopic.topicId,
            completed: false,
          },
        ],
      },
    }));
  };

  const toggleEntry = (id: string) => {
    update((s) => {
      const entry = s.timetable.entries.find((e) => e.id === id);
      if (!entry) return s;
      const newCompleted = !entry.completed;
      const updatedEntries = s.timetable.entries.map((e) =>
        e.id === id ? { ...e, completed: newCompleted } : e
      );
      // Sync to global progress: a topic is "completed" on the home page
      // if ANY timetable entry for that topic is completed.
      const subjectProgress = { ...(s.progress[entry.subjectId] ?? {}) };
      const anyCompleted = updatedEntries.some(
        (e) => e.subjectId === entry.subjectId && e.topicId === entry.topicId && e.completed
      );
      subjectProgress[entry.topicId] = {
        ...(subjectProgress[entry.topicId] ?? { viewed: false, completed: false }),
        viewed: true,
        completed: anyCompleted,
        lastVisited: new Date().toISOString(),
      };
      return {
        ...s,
        timetable: { entries: updatedEntries },
        progress: { ...s.progress, [entry.subjectId]: subjectProgress },
      };
    });
  };

  const removeEntry = (id: string) => {
    update((s) => {
      const entry = s.timetable.entries.find((e) => e.id === id);
      const updatedEntries = s.timetable.entries.filter((e) => e.id !== id);
      if (!entry) return { ...s, timetable: { entries: updatedEntries } };
      // Recompute completion for this topic
      const stillCompleted = updatedEntries.some(
        (e) => e.subjectId === entry.subjectId && e.topicId === entry.topicId && e.completed
      );
      const subjectProgress = { ...(s.progress[entry.subjectId] ?? {}) };
      if (subjectProgress[entry.topicId]) {
        subjectProgress[entry.topicId] = {
          ...subjectProgress[entry.topicId],
          completed: stillCompleted,
        };
      }
      return {
        ...s,
        timetable: { entries: updatedEntries },
        progress: { ...s.progress, [entry.subjectId]: subjectProgress },
      };
    });
  };

  const handleExamDateChange = (value: string) => {
    setExamDate(value);
    window.dispatchEvent(new StorageEvent('storage', { key: 'g9-exam-date' }));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">
            {t('nav.timetable')}
          </h1>
          <p className="text-text-secondary text-sm flex items-center gap-2">
            <Calendar size={14} />
            <span>{days} {t('countdown.daysShort')} · EOY {format(examDate, 'PP', { locale })}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="exam-date" className="text-text-secondary">{t('timetable.examDateLabel')}</label>
          <input
            id="exam-date"
            type="date"
            defaultValue={format(getExamDate(), 'yyyy-MM-dd')}
            onChange={(e) => handleExamDateChange(e.target.value)}
            className="bg-bg-secondary border border-border rounded-md px-2 py-1 text-text-primary"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        <aside>
          <div className="bg-bg-secondary border border-border rounded-lg p-4 sticky top-24">
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-secondary mb-3">
              {t('timetable.topicsLibrary')}
            </h3>
            <p className="text-xs text-text-muted mb-3">
              {t('timetable.clickHint')}
            </p>
            <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
              {TOPIC_LIBRARY.map((item) => {
                const meta = getSubject(item.subjectId);
                const accentColor = ACCENT_VAR[meta.accent];
                const active = selectedTopic?.subjectId === item.subjectId && selectedTopic?.topicId === item.topicId;
                return (
                  <button
                    key={`${item.subjectId}-${item.topicId}`}
                    onClick={() => setSelectedTopic(active ? null : item)}
                    className={`w-full text-left text-xs px-2.5 py-1.5 rounded-md transition-colors border ${
                      active
                        ? 'bg-bg-primary border-current'
                        : 'border-transparent hover:bg-bg-tertiary/40'
                    }`}
                    style={active ? { borderColor: accentColor } : undefined}
                  >
                    <span
                      className="inline-block w-2 h-2 rounded-full mr-2 align-middle"
                      style={{ background: accentColor }}
                    />
                    <span className="align-middle">
                      <span className="text-text-muted">{tHub(`subjects.${item.subjectId}.name`)}</span>
                      {' · '}
                      <TopicLabel ns={item.ns} labelKey={item.labelKey} />
                    </span>
                  </button>
                );
              })}
            </div>
            {selectedTopic ? (
              <div className="mt-4 pt-3 border-t border-border text-xs text-text-secondary">
                {t('timetable.selected')}: <strong className="text-text-primary">
                  <TopicLabel ns={selectedTopic.ns} labelKey={selectedTopic.labelKey} />
                </strong>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="ml-2 text-text-muted hover:text-text-primary"
                >
                  ×
                </button>
              </div>
            ) : null}
          </div>
        </aside>

        <div className="space-y-6">
          {weeks.map((week, weekIdx) => (
            <section key={weekIdx} className="bg-bg-secondary border border-border rounded-lg p-4">
              <h3 className="font-serif text-lg font-medium mb-3">
                {t('timetable.week')} {weekIdx + 1} — {format(week[0], 'd MMM', { locale })} – {format(week[6], 'd MMM', { locale })}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-7 gap-2">
                {week.map((day) => {
                  const dateKey = format(day, 'yyyy-MM-dd');
                  const dayEntries = entriesByDate[dateKey] ?? [];
                  return (
                    <div
                      key={dateKey}
                      className="bg-bg-primary/40 border border-border rounded-md p-2 min-h-[100px]"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-xs text-text-secondary">
                          {format(day, 'EEE d', { locale })}
                        </div>
                        {selectedTopic ? (
                          <button
                            onClick={() => addEntry(dateKey)}
                            className="text-text-muted hover:text-text-primary"
                            aria-label={t('timetable.addAria')}
                          >
                            <Plus size={12} />
                          </button>
                        ) : null}
                      </div>
                      <div className="space-y-1">
                        {dayEntries.map((e) => {
                          const meta = getSubject(e.subjectId);
                          const accent = ACCENT_VAR[meta.accent];
                          const libItem = TOPIC_LIBRARY.find((t) => t.subjectId === e.subjectId && t.topicId === e.topicId);
                          return (
                            <div
                              key={e.id}
                              className="flex items-start gap-1.5 group text-[11px] rounded px-1.5 py-1"
                              style={{
                                background: accent + '22',
                                borderLeft: `2px solid ${accent}`,
                              }}
                            >
                              <button
                                onClick={() => toggleEntry(e.id)}
                                className="mt-0.5 w-3 h-3 border border-current rounded-sm flex items-center justify-center shrink-0"
                                style={{ background: e.completed ? accent : 'transparent', color: accent }}
                                aria-label={t('timetable.toggleAria')}
                              >
                                {e.completed ? <Check size={8} className="text-bg-secondary" /> : null}
                              </button>
                              <span
                                className={e.completed ? 'line-through opacity-60' : ''}
                              >
                                {libItem ? <TopicLabel ns={libItem.ns} labelKey={libItem.labelKey} /> : e.topicId}
                              </span>
                              <button
                                onClick={() => removeEntry(e.id)}
                                className="ml-auto opacity-0 group-hover:opacity-100 text-text-muted hover:text-text-primary"
                                aria-label={t('timetable.removeAria')}
                              >
                                <X size={10} />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

function TopicLabel({ ns, labelKey }: { ns: string; labelKey: string }) {
  const { t } = useTranslation(ns);
  return <>{t(labelKey)}</>;
}

const WEEKS_BEFORE_TODAY = 2;
const MAX_WEEKS = 16;

function buildWeeks(examDate: Date): Date[][] {
  const today = new Date();
  const currentWeekStart = startOfWeek(today, { weekStartsOn: 1 });
  const start = subWeeks(currentWeekStart, WEEKS_BEFORE_TODAY);
  const result: Date[][] = [];
  let weekStart = start;
  for (let i = 0; i < MAX_WEEKS; i++) {
    if (weekStart > examDate) break;
    const days = eachDayOfInterval({ start: weekStart, end: addDays(weekStart, 6) });
    result.push(days);
    weekStart = addWeeks(weekStart, 1);
  }
  return result.length > 0 ? result : [eachDayOfInterval({ start, end: addDays(start, 6) })];
}
