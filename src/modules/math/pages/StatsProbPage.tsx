import { BarChart3 } from 'lucide-react';
import { MathTopicLayout } from '../components/MathTopicLayout';
import { BoxPlotBuilder } from '../../../components/simulations/math/BoxPlotBuilder';

const SUB_TOPICS = [
  'representation', 'stemLeaf', 'grouped', 'boxPlots',
  'histograms', 'cumulativeFreq', 'stdDev', 'pieCharts',
];

export function StatsProbPage() {
  return (
    <MathTopicLayout
      topicId="stats-prob"
      topicKey="statsProb"
      subTopicIds={SUB_TOPICS}
      icon={<BarChart3 size={28} />}
    >
      <BoxPlotBuilder />
    </MathTopicLayout>
  );
}
