interface Props {
  status: 'not-started' | 'in-progress' | 'completed';
  size?: number;
}

export function ProgressDot({ status, size = 8 }: Props) {
  const color =
    status === 'completed'
      ? 'var(--color-accent-sage)'
      : status === 'in-progress'
        ? 'var(--color-accent-warm)'
        : 'var(--color-border)';

  return (
    <span
      aria-label={status}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
      }}
    />
  );
}
