import {FormulaTeaching} from '../../content/FormulaTeaching';
import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';
import { parseDatasetInput, fmt } from '../../../lib/math';
import { schoolQuartiles } from '../../../definitions/math-legacy-models';

export function BoxPlotBuilder() {
  const { t, i18n } = useTranslation('math');
  const ru = i18n.language.startsWith('ru');
  const [input, setInput] = useState('4, 7, 8, 10, 11, 13, 15, 18, 22, 35');
  const parsed = useMemo(() => parseDatasetInput(input), [input]);
  const sorted = parsed.values;
  const q = schoolQuartiles(sorted);
  const total = sorted.length;

  const width = 480;
  const padX = 40;
  const innerWidth = width - padX * 2;

  const dataMin = sorted.length > 0 ? sorted[0] : 0;
  const dataMax = sorted.length > 0 ? sorted[sorted.length - 1] : 1;
  // Normalise before subtraction so opposite large finite endpoints do not overflow.
  const magnitude = Math.max(Math.abs(dataMin), Math.abs(dataMax), 1);
  const scaledMin = dataMin / magnitude;
  const span = dataMax / magnitude - scaledMin || 1;
  const scale = (v: number) => padX + ((v / magnitude - scaledMin) / span) * innerWidth;
  const spreadOverflow = !Number.isFinite(q.iqr);

  return (
    <SimulationPanel
      title={t('simulations.boxPlot.title')}
      description={t('simulations.boxPlot.description')}
    >
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-text-secondary mb-1.5 block">
            {t('simulations.boxPlot.input')}
          </span>
          <textarea
            aria-invalid={parsed.invalidTokens.length > 0 || spreadOverflow}
            aria-describedby="box-plot-input-help"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={3}
            className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono text-sm"
          />
          <p className="text-xs text-text-muted mt-1">
            {t('simulations.boxPlot.count', { count: total })}
          </p>
        </label>

        <p id="box-plot-input-help" className="text-xs text-text-muted">
          {ru ? 'Вводи целые или десятичные числа через пробел, запятую или точку с запятой. Десятичный разделитель — точка; запись 1e3 означает 1000. Вместо дроби 3/4 введи 0.75.' : 'Separate whole or decimal numbers with spaces, commas or semicolons. Use a decimal point; 1e3 means 1000. Enter 0.75 instead of the fraction 3/4.'}
        </p>
        {parsed.invalidTokens.length > 0 && <p role="alert" className="text-sm text-text-secondary">
          {ru ? 'Исправь недопустимые значения: ' : 'Correct these invalid values: '}{parsed.invalidTokens.join(', ')}.
          {' '}{ru ? 'До исправления весь набор не рассчитывается.' : 'The whole dataset is withheld until these are corrected.'}
        </p>}
        {spreadOverflow && <p role="alert" className="text-sm text-text-secondary">
          {ru ? 'Разброс превышает числовой диапазон расчёта. Уменьши масштаб всех значений перед построением диаграммы.' : 'The spread exceeds the calculation range. Rescale all values before plotting.'}
        </p>}
        {total > 0 && !spreadOverflow ? (
          <>
            <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <Stat label={t('simulations.boxPlot.lowerWhisker')} value={fmt(q.min)} />
              <Stat label="Q1" value={fmt(q.q1)} />
              <Stat label={t('simulations.boxPlot.median')} value={fmt(q.median)} />
              <Stat label="Q3" value={fmt(q.q3)} />
              <Stat label={t('simulations.boxPlot.upperWhisker')} value={fmt(q.max)} />
              <Stat label="IQR" value={fmt(q.iqr)} />
            </div>

            <svg role="img" aria-label={t('simulations.boxPlot.alt', { q1: fmt(q.q1), median: fmt(q.median), q3: fmt(q.q3), lower: fmt(q.min), upper: fmt(q.max) })} viewBox={`0 0 ${width} 120`} className="w-full">
              <line x1={padX} x2={width - padX} y1={60} y2={60} stroke="var(--color-border)" strokeWidth={1} />
              <line x1={scale(q.min)} x2={scale(q.q1)} y1={60} y2={60} stroke="var(--color-text-secondary)" strokeWidth={2} />
              <line x1={scale(q.q3)} x2={scale(q.max)} y1={60} y2={60} stroke="var(--color-text-secondary)" strokeWidth={2} />
              <line x1={scale(q.min)} x2={scale(q.min)} y1={45} y2={75} stroke="var(--color-text-secondary)" strokeWidth={2} />
              <line x1={scale(q.max)} x2={scale(q.max)} y1={45} y2={75} stroke="var(--color-text-secondary)" strokeWidth={2} />
              <rect
                x={scale(q.q1)}
                y={40}
                width={scale(q.q3) - scale(q.q1)}
                height={40}
                fill="var(--color-accent-sky)"
                fillOpacity={0.4}
                stroke="var(--color-accent-sky-deep)"
                strokeWidth={1.5}
              />
              <line x1={scale(q.median)} x2={scale(q.median)} y1={40} y2={80} stroke="var(--color-accent-warm)" strokeWidth={2.5} />
              {q.outliers.map((o, i) => (
                <circle key={i} cx={scale(o)} cy={60} r={4} fill="var(--color-accent-clay)" stroke="var(--color-bg-secondary)" strokeWidth={1.5} />
              ))}

              {[q.min, q.q1, q.median, q.q3, q.max].map((v, i) => (
                <g key={i}>
                  <line x1={scale(v)} x2={scale(v)} y1={85} y2={89} stroke="var(--color-text-muted)" />
                  <text x={scale(v)} y={102} textAnchor="middle" fontSize={10} fill="var(--color-text-muted)">
                    {fmt(v, 1)}
                  </text>
                </g>
              ))}
            </svg>

            {q.outliers.length > 0 ? (
              <p className="text-xs text-text-secondary">
                <strong>{t('simulations.boxPlot.outliers')}</strong>: {q.outliers.map(v => fmt(v)).join(', ')}
              </p>
            ) : null}
          </>
        ) : null}
      </div>
      <DefinitionSupport review={t('simulations.boxPlot.review', { returnObjects: true }) as DefinitionReview} />
    <FormulaTeaching id="statistics"/></SimulationPanel>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-text-muted">{label}</div>
      <div className="font-mono">{value}</div>
    </div>
  );
}
