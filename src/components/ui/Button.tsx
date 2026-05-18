import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variantMap = {
  primary:
    'bg-accent-warm text-bg-secondary border border-accent-warm hover:opacity-90 active:opacity-80',
  secondary:
    'bg-bg-secondary text-text-primary border border-border hover:bg-bg-tertiary',
  ghost:
    'bg-transparent text-text-primary border border-transparent hover:bg-bg-tertiary',
};

const sizeMap = {
  sm: 'text-sm px-3 py-1.5 rounded-md',
  md: 'text-base px-4 py-2 rounded-md',
  lg: 'text-lg px-5 py-2.5 rounded-md',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantMap[variant]} ${sizeMap[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
