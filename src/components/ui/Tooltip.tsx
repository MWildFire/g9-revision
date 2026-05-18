import { ReactNode, useState } from 'react';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open ? (
        <span
          role="tooltip"
          className="absolute z-50 bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-text-primary text-bg-secondary px-2 py-1 rounded shadow-card"
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
