import { DefinitionSupport } from '../../content/DefinitionSupport';
import { geographyReviews } from '../../../definitions/geographyReviews';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { hydrographModel } from './hydrographModel';
import { SimulationPanel } from '../../ui/Tabs';

export function StormHydrograph() {
  const { t, i18n } = useTranslation('geography');
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  const [intensity, setIntensity] = useState(50); // rainfall intensity 0-100
  const [saturation, setSaturation] = useState(40); // 0-100
  const [urbanization, setUrbanization] = useState(30); // 0-100

  const { lagTime, peakTime, rainPeakTime, peakDischarge, points } = hydrographModel(intensity, saturation, urbanization);
  const flashy = (intensity + saturation + urbanization) > 150;

  const W = 440;
  const H = 220;
  const padX = 40;
  const padY = 30;
  const xScale = (W - padX * 2) / 24;
  const yScale = (H - padY * 2) / 250;

  const pathD = points.map((p, i) => {
    const x = padX + p.x * xScale;
    const y = H - padY - p.y * yScale;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <SimulationPanel title={t('simulations.hydrograph.title')} description={t('simulations.hydrograph.description')}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Slider label={t('simulations.hydrograph.rainfallLabel')} min={0} max={100} step={5} value={intensity} onChange={setIntensity} unit="/100" />
          <Slider label={t('simulations.hydrograph.saturationLabel')} min={0} max={100} step={5} value={saturation} onChange={setSaturation} unit="/100" />
          <Slider label={t('simulations.hydrograph.urbanisationLabel')} min={0} max={100} step={5} value={urbanization} onChange={setUrbanization} unit="/100" />
        </div>

        <div role="region" tabIndex={0} aria-label={l("Scrollable diagram. Use horizontal arrow keys to read all labels.", "Прокручиваемая схема. Используй стрелки влево и вправо, чтобы прочитать все подписи.")} className="min-w-0 max-w-full overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><svg style={{ minWidth: 520 }} role="img" aria-label={l("Illustrative storm hydrograph with rainfall peak, discharge peak and lag time", "Учебный гидрограф с пиками дождя и расхода и временем запаздывания")} viewBox={`0 0 ${W} ${H + 20}`} className="w-full bg-bg-tertiary/20 rounded-md border border-border">
          {/* Axes */}
          <line x1={padX} y1={padY} x2={padX} y2={H - padY} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={padX} y1={H - padY} x2={W - padX} y2={H - padY} stroke="var(--color-border)" strokeWidth={1} />

          {/* Y labels */}
          {[0, 50, 100, 150, 200, 250].map((v) => (
            <g key={v}>
              <line x1={padX - 4} y1={H - padY - v * yScale} x2={padX} y2={H - padY - v * yScale} stroke="var(--color-text-muted)" />
              <text x={padX - 6} y={H - padY - v * yScale + 3} textAnchor="end" fontSize={12} fill="var(--color-text-muted)">{v}</text>
            </g>
          ))}
          {/* X labels */}
          {[0, 6, 12, 18, 24].map((v) => (
            <g key={v}>
              <line x1={padX + v * xScale} y1={H - padY} x2={padX + v * xScale} y2={H - padY + 4} stroke="var(--color-text-muted)" />
              <text x={padX + v * xScale} y={H - padY + 14} textAnchor="middle" fontSize={12} fill="var(--color-text-muted)">{v}h</text>
            </g>
          ))}

          <text x={20} y={H / 2} textAnchor="middle" fontSize={12} fill="var(--color-text-muted)" transform={`rotate(-90 20 ${H / 2})`}>{t('simulations.hydrograph.yAxis')}</text>
          <text x={W / 2} y={H + 10} textAnchor="middle" fontSize={12} fill="var(--color-text-muted)">{t('simulations.hydrograph.xAxis')}</text>

          {/* Rainfall bar */}
          <rect x={padX + 4 * xScale} y={padY} width={2 * xScale} height={intensity * 0.4} fill="var(--color-accent-sky)" fillOpacity={0.5} />
          <text x={padX + 5 * xScale} y={padY - 4} textAnchor="middle" fontSize={12} fill="var(--color-accent-sky-deep)">{l("Rain (input index)", "Дождь (индекс)")}</text>

          {/* Lag is the horizontal separation between the two labelled peaks. */}
          {intensity > 0 && <g stroke="currentColor" fill="currentColor">
            <path d={`M${padX + rainPeakTime * xScale} 90 H${padX + peakTime * xScale}`} strokeDasharray="3 3" />
            <text x={padX + peakTime * xScale + 4} y={H - padY - peakDischarge * yScale - 6} stroke="none" fontSize="12">{l('Peak Q', 'Пик Q')}</text>
            <text x={padX + (rainPeakTime + lagTime / 2) * xScale} y="84" textAnchor="middle" stroke="none" fontSize="12">{l('Lag', 'Запаздывание')}: {lagTime.toFixed(1)} h</text>
          </g>}
          {/* Hydrograph line */}
          <path d={pathD} fill="none" stroke={flashy ? 'var(--color-accent-clay)' : 'var(--color-accent-sky-deep)'} strokeWidth={2.5} />
          <path d={pathD + ` L ${W - padX} ${H - padY} L ${padX} ${H - padY} Z`} fill={flashy ? 'var(--color-accent-clay)' : 'var(--color-accent-sky-deep)'} fillOpacity={0.15} />
        </svg></div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p className="text-xs text-text-muted">{l("Illustrative scenario, not a forecast. Rainfall uses a relative input index, not a discharge scale; the blue bar marks a storm centred at 5 h. No rain produces base flow only. Other basin properties are held fixed.", "Учебный сценарий, не прогноз. Дождь задан относительным индексом, а не шкалой расхода; синий столбик обозначает дождь с пиком в 5 ч. Без дождя остаётся только базисный сток. Другие свойства бассейна условно постоянны.")}</p>
          <p>{intensity === 0 ? l('No storm runoff: the line shows base flow only.', 'Нет дождевого паводка: линия показывает только базисный сток.') : flashy ? t('simulations.hydrograph.flashyNote') : t('simulations.hydrograph.subduedNote')}</p>
          <p className="text-xs text-text-muted">{t('simulations.hydrograph.peakDischarge')} ≈ {peakDischarge.toFixed(0)} m³/s · {t('simulations.hydrograph.lagTime')} ≈ {intensity > 0 ? `${lagTime.toFixed(1)} h` : "—"}</p>
        </div>
      </div>
    <DefinitionSupport review={geographyReviews.hydrograph} /></SimulationPanel>
  );
}
