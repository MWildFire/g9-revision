import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { solveQuadratic, fmt } from '../../../lib/math';

export function QuadraticSolver() {
  const { t } = useTranslation('math');
  const [a, setA] = useState(1), [b, setB] = useState(-5), [c, setC] = useState(6);
  const { roots, vertex, discriminant } = solveQuadratic(a, b, c);
  const label = (key: string) => t(`simulations.quadraticSolver.${key}`);
  const factor = (root: number) => `(x ${root < 0 ? '+' : '−'} ${fmt(Math.abs(root))})`;
  return (
    <SimulationPanel title={label('title')} description={label('description')}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Slider label="a" min={-5} max={5} step={1} value={a} onChange={setA} />
        <Slider label="b" min={-10} max={10} step={1} value={b} onChange={setB} />
        <Slider label="c" min={-10} max={10} step={1} value={c} onChange={setC} />
      </div>
      <p className="font-mono mb-4">{fmt(a)}x² {b >= 0 ? '+' : '−'} {fmt(Math.abs(b))}x {c >= 0 ? '+' : '−'} {fmt(Math.abs(c))} = 0</p>
      {a === 0 ? <p role="status">{b !== 0 ? `${label('linear')} ${fmt(-c / b)}` : c === 0 ? label('all') : label('impossible')}</p> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Method title={label('formula')}>
            <p>x = (−b ± √(b² − 4ac)) / (2a)</p>
            <p>Δ = {fmt(discriminant)}</p>
            <p>{label(discriminant > 0 ? 'two' : discriminant === 0 ? 'one' : 'none')}{roots.length ? `: x ≈ ${roots.map(r => fmt(r)).join(', ')}` : ''}</p>
          </Method>
          <Method title={label('complete')}>
            <p>a(x − h)² + k = 0</p>
            <p>h = −b/(2a) ≈ {fmt(vertex.h)}; k ≈ {fmt(vertex.k)}</p>
            <p>(x − h)² = −k/a ≈ {fmt(-vertex.k / a)}</p>
          </Method>
          <Method title={label('factor')}>
            {roots.length ? <><p>{fmt(a)}{factor(roots[0])}{factor(roots[1] ?? roots[0])} ≈ 0</p><p className="text-xs">{label('approx')}</p></> : <p>{label('none')}</p>}
          </Method>
        </div>
      )}
      <DefinitionSupport review={t('simulations.quadraticSolver.review', { returnObjects: true }) as DefinitionReview} />
    </SimulationPanel>
  );
}
function Method({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm space-y-1"><h4 className="font-medium mb-2">{title}</h4>{children}</div>;
}
