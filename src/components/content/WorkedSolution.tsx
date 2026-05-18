import { useState } from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';
import { MathFormula } from './MathFormula';

interface WorkedStep {
  text: string;
  formula?: string;
}

interface Props {
  title?: string;
  steps: WorkedStep[];
  finalAnswer?: string;
  finalAnswerFormula?: string;
}

export function WorkedSolution({ title, steps, finalAnswer, finalAnswerFormula }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-md overflow-hidden bg-bg-tertiary/30">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-text-secondary hover:bg-bg-tertiary/50 transition-colors"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <Lightbulb size={14} />
          {title ?? 'Worked solution'}
        </span>
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? (
        <div className="px-4 py-3 border-t border-border space-y-3 bg-bg-secondary">
          {steps.map((step, i) => (
            <div key={i} className="text-sm text-text-primary">
              <span className="text-xs text-text-muted font-mono mr-2">{i + 1}.</span>
              {step.text}
              {step.formula ? (
                <div className="mt-1 ml-6">
                  <MathFormula formula={step.formula} block />
                </div>
              ) : null}
            </div>
          ))}
          {finalAnswer || finalAnswerFormula ? (
            <div className="pt-2 border-t border-border">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Answer</p>
              {finalAnswer ? <p className="text-sm font-medium">{finalAnswer}</p> : null}
              {finalAnswerFormula ? <MathFormula formula={finalAnswerFormula} block /> : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
