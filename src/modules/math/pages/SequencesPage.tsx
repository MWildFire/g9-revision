import { GitBranch } from 'lucide-react';
import { MathTopicLayout } from '../components/MathTopicLayout';
import { SequenceGenerator } from '../../../components/simulations/math/SequenceGenerator';

const SUB_TOPICS = ['linearGeneral', 'linearProblems', 'geometric', 'sumInfinity'];

export function SequencesPage() {
  return (
    <MathTopicLayout
      topicId="sequences"
      topicKey="sequences"
      subTopicIds={SUB_TOPICS}
      icon={<GitBranch size={28} />}
    >
      <SequenceGenerator />
    </MathTopicLayout>
  );
}
