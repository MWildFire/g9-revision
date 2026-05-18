import { Hash } from 'lucide-react';
import { MathTopicLayout } from '../components/MathTopicLayout';
import { StandardFormConverter } from '../../../components/simulations/math/StandardFormConverter';
import { SurdSimplifier } from '../../../components/simulations/math/SurdSimplifier';

const SUB_TOPICS = [
  'structureSets', 'rounding', 'bounds', 'exponents', 'fractionalIndices',
  'standardForm', 'unitConversion', 'surdsSimplify', 'surdsOperate', 'absolute',
];

export function NumberSystemsPage() {
  return (
    <MathTopicLayout
      topicId="number-systems"
      topicKey="numberSystems"
      subTopicIds={SUB_TOPICS}
      icon={<Hash size={28} />}
    >
      <StandardFormConverter />
      <SurdSimplifier />
    </MathTopicLayout>
  );
}
