import { BarChart3 } from 'lucide-react';
import { MathTopicLayout } from '../components/MathTopicLayout';
import { BoxPlotBuilder } from '../../../components/simulations/math/BoxPlotBuilder';
import { CumulativeFrequency } from '../../../components/simulations/math/CumulativeFrequency';

const SUB_TOPICS = [
  'representation', 'twoWayTables', 'stemLeaf', 'rangeSpread', 'grouped', 'boxPlots',
  'histograms', 'cumulativeFreq', 'stdDev', 'pieCharts',
  'mutuallyExclusive', 'addProbabilities', 'sampling', 'correlation',
];

export function StatsProbPage() {
  return (
    <MathTopicLayout
      topicId="stats-prob"
      topicKey="statsProb"
      subTopicIds={SUB_TOPICS}
      icon={<BarChart3 size={28} />}
    >
      <CumulativeFrequency />
      <BoxPlotBuilder />
    </MathTopicLayout>
  );
}
