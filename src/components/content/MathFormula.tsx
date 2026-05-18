import { InlineMath, BlockMath } from 'react-katex';

interface Props {
  formula: string;
  block?: boolean;
  className?: string;
}

export function MathFormula({ formula, block = false, className }: Props) {
  if (block) {
    return (
      <div className={className}>
        <BlockMath math={formula} />
      </div>
    );
  }
  return (
    <span className={className}>
      <InlineMath math={formula} />
    </span>
  );
}
