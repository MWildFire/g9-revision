import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { solveQuadratic, fmt } from '../../../lib/math';

export function QuadraticSolver() {
  const { t } = useTranslation('math');
  const [a, setA] = useState(1);
  const [b, setB] = useState(-5);
  const [c, setC] = useState(6);

  const { roots, vertex, discriminant } = solveQuadratic(a, b, c);
  const eqStr = `${fmt(a)}x² ${b >= 0 ? '+' : '−'} ${fmt(Math.abs(b))}x ${c >= 0 ? '+' : '−'} ${fmt(Math.abs(c))} = 0`;

  return (
    <SimulationPanel title={t('simulations.quadraticSolver.title')} description={t('simulations.quadraticSolver.description')}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Slider label="a" min={-5} max={5} step={1} value={a} onChange={setA} />
        <Slider label="b" min={-10} max={10} step={1} value={b} onChange={setB} />
        <Slider label="c" min={-10} max={10} step={1} value={c} onChange={setC} />
      </div>

      <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 font-mono mb-4">
        {eqStr}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Method title="Quadratic formula" borderColor="var(--color-accent-sky-deep)">
          <p>x = (−b ± √(b² − 4ac)) / 2a</p>
          <p>Δ = {fmt(b * b)} − 4·{fmt(a)}·{fmt(c)} = {fmt(discriminant)}</p>
          {discriminant > 0 ? (
            <p>Two real roots: x = {fmt(roots[0])}, {fmt(roots[1])}</p>
          ) : discriminant === 0 ? (
            <p>One real root: x = {fmt(roots[0])}</p>
          ) : (
            <p>No real roots (Δ &lt; 0)</p>
          )}
        </Method>

        <Method title="Completing the square" borderColor="var(--color-accent-warm)">
          <p>a(x − h)² + k</p>
          <p>h = −b/(2a) = {fmt(vertex.h)}</p>
          <p>k = {fmt(vertex.k)}</p>
          <p>{fmt(a)}(x − {fmt(vertex.h)})² + {fmt(vertex.k)} = 0</p>
        </Method>

        <Method title="Factorisation" borderColor="var(--color-accent-sage)">
          {a === 1 && discriminant > 0 && Number.isInteger(roots[0]) && Number.isInteger(roots[1]) ? (
            <p>(x − {fmt(roots[0])})(x − {fmt(roots[1])}) = 0</p>
          ) : (
            <p className="italic text-text-muted">Factorise if both roots are integers and a = 1. Otherwise use formula.</p>
          )}
        </Method>
      </div>
    </SimulationPanel>
  );
}

function Method({ title, children, borderColor }: { title: string; children: React.ReactNode; borderColor: string }) {
  return (
    <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm space-y-1" style={{ borderLeftColor: borderColor, borderLeftWidth: '3px' }}>
      <h4 className="font-medium mb-2">{title}</h4>
      {children}
    </div>
  );
}
