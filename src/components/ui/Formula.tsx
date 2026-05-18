import { ReactNode } from 'react';

interface FormulaProps {
  children: ReactNode;
  inline?: boolean;
  caption?: string;
  className?: string;
}

export function Formula({ children, inline = false, caption, className = '' }: FormulaProps) {
  if (inline) {
    return (
      <span
        className={`font-mono px-1.5 py-0.5 rounded bg-bg-tertiary text-text-primary ${className}`}
      >
        {children}
      </span>
    );
  }
  return (
    <div className={className}>
      <div className="font-mono text-lg md:text-xl text-text-primary bg-bg-tertiary border border-border rounded-md px-4 py-3 text-center">
        {children}
      </div>
      {caption ? (
        <div className="mt-1.5 text-xs text-text-muted text-center">{caption}</div>
      ) : null}
    </div>
  );
}
