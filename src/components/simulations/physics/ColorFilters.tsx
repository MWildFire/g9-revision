import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, SimulationPanel } from '../../ui/Tabs';

type LightSource = 'white' | 'red' | 'green' | 'blue';
type Filter = 'none' | 'red' | 'green' | 'blue';
type ObjectColor = 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'cyan' | 'magenta' | 'black';

const LIGHT_COMPONENTS: Record<LightSource, [number, number, number]> = {
  white: [1, 1, 1],
  red: [1, 0, 0],
  green: [0, 1, 0],
  blue: [0, 0, 1],
};

const FILTER_PASS: Record<Filter, [number, number, number]> = {
  none: [1, 1, 1],
  red: [1, 0, 0],
  green: [0, 1, 0],
  blue: [0, 0, 1],
};

const OBJECT_REFLECT: Record<ObjectColor, [number, number, number]> = {
  white: [1, 1, 1],
  red: [1, 0, 0],
  green: [0, 1, 0],
  blue: [0, 0, 1],
  yellow: [1, 1, 0],
  cyan: [0, 1, 1],
  magenta: [1, 0, 1],
  black: [0, 0, 0],
};

function asHex([r, g, b]: [number, number, number]): string {
  const toHex = (v: number) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function multiply(a: [number, number, number], b: [number, number, number]): [number, number, number] {
  return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

function describe(rgb: [number, number, number]): string {
  const [r, g, b] = rgb;
  if (r < 0.1 && g < 0.1 && b < 0.1) return 'black';
  if (r > 0.9 && g > 0.9 && b > 0.9) return 'white';
  if (r > 0.5 && g < 0.2 && b < 0.2) return 'red';
  if (g > 0.5 && r < 0.2 && b < 0.2) return 'green';
  if (b > 0.5 && r < 0.2 && g < 0.2) return 'blue';
  if (r > 0.5 && g > 0.5 && b < 0.2) return 'yellow';
  if (g > 0.5 && b > 0.5 && r < 0.2) return 'cyan';
  if (r > 0.5 && b > 0.5 && g < 0.2) return 'magenta';
  return 'mixed';
}

export function ColorFilters() {
  const { t } = useTranslation();
  const [source, setSource] = useState<LightSource>('white');
  const [filter, setFilter] = useState<Filter>('red');
  const [object, setObject] = useState<ObjectColor>('white');

  const sourceColor = LIGHT_COMPONENTS[source];
  const afterFilter = multiply(sourceColor, FILTER_PASS[filter]);
  const seen = multiply(afterFilter, OBJECT_REFLECT[object]);
  const observedName = describe(seen);

  return (
    <SimulationPanel
      title={t('wavesOptics.simFilters.title')}
      description={t('wavesOptics.simFilters.desc')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-4">
          <svg viewBox="0 0 480 220" className="w-full bg-bg-primary rounded-md border border-border">
            {/* Light source bulb */}
            <g transform="translate(60, 110)">
              <circle r="26" fill={asHex(sourceColor)} stroke="#6b5b47" strokeWidth="1.5" opacity="0.95" />
              <text y="44" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#6b5b47">
                source: {source}
              </text>
            </g>

            {/* Beam 1: source → filter */}
            <Beam x1={88} y1={110} x2={210} y2={110} color={asHex(sourceColor)} />

            {/* Filter (transparent rect) */}
            {filter !== 'none' ? (
              <g>
                <rect x="210" y="60" width="30" height="100" fill={asHex(FILTER_PASS[filter])} opacity="0.55" stroke="#6b5b47" strokeWidth="1.2" />
              </g>
            ) : (
              <g>
                <rect x="210" y="60" width="30" height="100" fill="none" stroke="#9c8b73" strokeWidth="1.2" strokeDasharray="3 3" />
              </g>
            )}
            <text x="225" y="178" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#6b5b47">
              filter
            </text>

            {/* Beam 2: filter → object */}
            <Beam x1={240} y1={110} x2={350} y2={110} color={asHex(afterFilter)} />

            {/* Object */}
            <g transform="translate(380, 110)">
              <rect x="-20" y="-20" width="40" height="40" rx="4" fill={asHex(OBJECT_REFLECT[object])} stroke="#3d2f1f" strokeWidth="1.5" />
              <text y="38" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#6b5b47">
                object: {object}
              </text>
            </g>

            {/* Observed color back to viewer */}
            <g transform="translate(440, 60)">
              <text x="0" y="0" fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47" textAnchor="middle">
                seen
              </text>
              <circle cx="0" cy="22" r="14" fill={asHex(seen)} stroke="#3d2f1f" strokeWidth="1.5" />
              <text x="0" y="55" fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47" textAnchor="middle">
                {observedName}
              </text>
            </g>
          </svg>

          <div className="bg-bg-tertiary border border-border rounded-md px-4 py-3 text-sm">
            <span className="text-text-muted">Observer sees: </span>
            <span className="font-medium capitalize" style={{ color: asHex(seen) }}>
              {observedName}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-text-secondary mb-2">{t('wavesOptics.simFilters.lightSource')}</p>
            <Tabs
              tabs={[
                { id: 'white', label: 'White' },
                { id: 'red', label: 'Red' },
                { id: 'green', label: 'Green' },
                { id: 'blue', label: 'Blue' },
              ]}
              activeId={source}
              onChange={(id) => setSource(id as LightSource)}
            />
          </div>

          <div>
            <p className="text-sm font-medium text-text-secondary mb-2">{t('wavesOptics.simFilters.filter')}</p>
            <Tabs
              tabs={[
                { id: 'none', label: 'None' },
                { id: 'red', label: 'Red' },
                { id: 'green', label: 'Green' },
                { id: 'blue', label: 'Blue' },
              ]}
              activeId={filter}
              onChange={(id) => setFilter(id as Filter)}
            />
          </div>

          <div>
            <p className="text-sm font-medium text-text-secondary mb-2">{t('wavesOptics.simFilters.object')}</p>
            <div className="grid grid-cols-4 gap-1">
              {(['white', 'red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'black'] as ObjectColor[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setObject(c)}
                  className={`text-xs px-2 py-1 rounded border ${
                    object === c ? 'border-text-primary' : 'border-border'
                  }`}
                  style={{ background: asHex(OBJECT_REFLECT[c]), color: c === 'white' || c === 'yellow' || c === 'cyan' ? '#3d2f1f' : '#faf6ef' }}
                >
                  {c[0].toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-text-muted leading-relaxed">
            A coloured object reflects only its own colour(s) and absorbs the rest. A filter passes only its own colour(s).
            White light contains all colours; a single-colour light contains only that one.
          </p>
        </div>
      </div>
    </SimulationPanel>
  );
}

function Beam({ x1, y1, x2, y2, color }: { x1: number; y1: number; x2: number; y2: number; color: string }) {
  const isDark = color === '#000000';
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={isDark ? '#9c8b73' : color}
      strokeWidth="6"
      opacity={isDark ? 0.3 : 0.85}
      strokeDasharray={isDark ? '3 3' : undefined}
    />
  );
}
