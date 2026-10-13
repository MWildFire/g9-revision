import { Fragment, type CSSProperties, type ReactNode } from 'react';

// Minimal formatting for teaching text stored as plain strings:
//   blank line  -> new paragraph
//   "- " lines  -> bullet list
//   **bold**    -> <strong>
// Text without these marks renders exactly as one paragraph, as before.
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') && part.length > 4
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : <Fragment key={index}>{part}</Fragment>);
}

export function RichText({ text, className, paragraphClassName, style }: { text?: string | null; className?: string; paragraphClassName?: string; style?: CSSProperties }) {
  if (!text) return null;
  const blocks = text.trim().split(/\n\s*\n/);
  return <div className={['rich-text', className].filter(Boolean).join(' ')} style={style}>
    {blocks.map((block, index) => {
      const lines = block.split('\n');
      if (lines.every(line => /^\s*-\s+/.test(line))) {
        return <ul key={index}>{lines.map((line, j) => <li key={j}>{inline(line.replace(/^\s*-\s+/, ''))}</li>)}</ul>;
      }
      return <p key={index} className={paragraphClassName}>{lines.map((line, j) => <Fragment key={j}>{j > 0 && <br />}{inline(line)}</Fragment>)}</p>;
    })}
  </div>;
}
