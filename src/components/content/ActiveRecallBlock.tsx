import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, PencilLine } from 'lucide-react';
import { useLocalProgress } from '../../hooks/useLocalProgress';

interface Props {
  topicId: string;
  blockId: string;
  modelAnswer: string;
  prompt?: string;
}

export function ActiveRecallBlock({ topicId, blockId, modelAnswer, prompt }: Props) {
  const { t } = useTranslation('geography');
  const [state, update] = useLocalProgress();
  const [revealed, setRevealed] = useState(false);
  const userAnswer = state.activeRecall[topicId]?.[blockId] ?? '';

  const setUserAnswer = (text: string) => {
    update((s) => ({
      ...s,
      activeRecall: {
        ...s.activeRecall,
        [topicId]: {
          ...(s.activeRecall[topicId] ?? {}),
          [blockId]: text,
        },
      },
    }));
  };

  return (
    <div className="border border-border rounded-md bg-bg-secondary overflow-hidden">
      {prompt ? (
        <div className="px-4 py-2.5 border-b border-border bg-bg-tertiary/30 text-sm text-text-secondary flex items-center gap-2">
          <PencilLine size={14} />
          <span>{prompt}</span>
        </div>
      ) : null}
      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        rows={3}
        placeholder={t('activeRecall.yourAnswer')}
        className="w-full bg-bg-secondary border-0 px-4 py-3 text-sm focus:outline-none focus:ring-0"
      />
      <div className="border-t border-border">
        <button
          onClick={() => setRevealed((r) => !r)}
          className="w-full flex items-center justify-between px-4 py-2 text-sm text-text-secondary hover:bg-bg-tertiary/40 transition-colors"
        >
          <span className="flex items-center gap-2">
            {revealed ? <EyeOff size={14} /> : <Eye size={14} />}
            {revealed ? t('activeRecall.compare') : t('activeRecall.compare')}
          </span>
        </button>
        {revealed ? (
          <div className="px-4 py-3 border-t border-border bg-bg-tertiary/30">
            <p className="text-xs uppercase tracking-wider text-text-muted mb-1.5">
              {t('activeRecall.modelAnswer')}
            </p>
            <p className="text-sm whitespace-pre-line">{modelAnswer}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
