import { Variable } from 'lucide-react';
import { MathTopicLayout } from '../components/MathTopicLayout';
import { QuadraticExplorer } from '../../../components/simulations/math/QuadraticExplorer';
import { FunctionTransformations } from '../../../components/simulations/math/FunctionTransformations';
import { QuadraticSolver } from '../../../components/simulations/math/QuadraticSolver';

const SUB_TOPICS = [
  'mappings', 'verticalLine',
  'quadraticsFactor', 'quadraticsGraph', 'vertexForm', 'transformations',
  'solveGeneral', 'solveFactor', 'solveCompleteSquare', 'solveFormula', 'solveGraphical',
  'rearrange', 'algebraicFractions', 'proportions', 'asymptotes', 'exponential',
];

export function FunctionsAlgebraPage() {
  return (
    <MathTopicLayout
      topicId="functions-algebra"
      topicKey="functionsAlgebra"
      subTopicIds={SUB_TOPICS}
      icon={<Variable size={28} />}
    >
      <QuadraticExplorer />
      <QuadraticSolver />
      <FunctionTransformations />
    </MathTopicLayout>
  );
}
