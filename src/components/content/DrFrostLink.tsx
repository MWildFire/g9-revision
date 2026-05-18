import { ExternalLink } from 'lucide-react';
import { buildDrFrostUrl } from '../../lib/drFrost';

interface Props {
  taskNumber: string | number;
  label?: string;
}

export function DrFrostLink({ taskNumber, label }: Props) {
  return (
    <a
      href={buildDrFrostUrl(taskNumber)}
      target="_blank"
      rel="noopener noreferrer"
      className="dr-frost-pill"
      title={`Dr Frost: ${taskNumber}`}
    >
      <ExternalLink size={12} />
      <span>{taskNumber}</span>
      {label ? <span className="ml-1 opacity-70 normal-case">{label}</span> : null}
    </a>
  );
}
