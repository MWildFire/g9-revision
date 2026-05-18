import { Triangle } from 'lucide-react';
import { MathTopicLayout } from '../components/MathTopicLayout';
import { SectorSegmentCalc } from '../../../components/simulations/math/SectorSegmentCalc';
import { RightTriangleTrainer } from '../../../components/simulations/math/RightTriangleTrainer';

const SUB_TOPICS = [
  'pythagoras', 'trig', 'bearings', 'sineCosine', 'triangleArea',
  'circleTheorems', 'sectors', 'segments', 'intersectingChords',
];

export function GeometryTrigPage() {
  return (
    <MathTopicLayout
      topicId="geometry-trig"
      topicKey="geometryTrig"
      subTopicIds={SUB_TOPICS}
      icon={<Triangle size={28} />}
    >
      <RightTriangleTrainer />
      <SectorSegmentCalc />
    </MathTopicLayout>
  );
}
