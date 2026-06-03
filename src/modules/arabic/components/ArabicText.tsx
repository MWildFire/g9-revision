import { CSSProperties, ElementType } from 'react';

interface ArabicTextProps {
  children: string;
  className?: string;
  style?: CSSProperties;
  /** Render as a block element (div) instead of an inline span. */
  block?: boolean;
}

/**
 * Renders Arabic script with the correct direction, language, and a Naskh font
 * that displays harakat (diacritics) cleanly. Centralising this keeps every
 * Arabic string across the module consistent (dir="rtl" + lang="ar" + .arabic).
 */
export function ArabicText({ children, className = '', style, block = false }: ArabicTextProps) {
  const Tag: ElementType = block ? 'div' : 'span';
  return (
    <Tag dir="rtl" lang="ar" className={`arabic ${className}`} style={style}>
      {children}
    </Tag>
  );
}
