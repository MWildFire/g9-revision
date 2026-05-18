import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  as?: 'div' | 'article' | 'section';
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({ children, className = '', padding = 'md', as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`bg-bg-secondary border border-border rounded-lg shadow-card ${paddingMap[padding]} ${className}`}
    >
      {children}
    </Tag>
  );
}
