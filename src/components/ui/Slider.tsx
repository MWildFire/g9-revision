interface SliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  format?: (value: number) => string;
}

export function Slider({
  label,
  min,
  max,
  step = 0.1,
  value,
  onChange,
  unit,
  format,
}: SliderProps) {
  const displayValue = format ? format(value) : value.toFixed(step < 1 ? 1 : 0);
  const hasLabel = label && label.trim().length > 0;

  return (
    <label className="block">
      <div className={`flex items-baseline justify-between ${hasLabel ? 'mb-2' : 'mb-1'}`}>
        {hasLabel ? (
          <span className="text-sm font-medium text-text-secondary">{label}</span>
        ) : null}
        <span className={`font-mono text-sm text-text-primary ${hasLabel ? '' : 'ml-auto'}`}>
          {displayValue}
          {unit ? <span className="text-text-muted ml-1">{unit}</span> : null}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  );
}
