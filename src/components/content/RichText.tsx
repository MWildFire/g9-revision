import { Fragment, type CSSProperties, type ReactNode } from 'react';

// Minimal formatting for teaching text stored as plain strings:
//   blank line  -> new paragraph
//   "- " lines  -> bullet list (a list may follow a sentence without a blank line)
//   **bold**    -> <strong>
// Text without these marks renders exactly as one paragraph, as before.
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') && part.length > 4
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : <Fragment key={index}>{part}</Fragment>);
}

// true when the text uses a mark that RichText turns into structure
export function hasRichMarks(text?: string | null): boolean {
  const value = text?.trim() ?? '';
  return /\n\s*\n/.test(value) || /(^|\n)[^\S\n]*-[^\S\n]/.test(value) || /\*\*[^*\n]+\*\*/.test(value);
}

export function RichText({ text, className, paragraphClassName, style }: { text?: string | null; className?: string; paragraphClassName?: string; style?: CSSProperties }) {
  if (!text) return null;
  const blocks = text.trim().split(/\n\s*\n/);
  return <div className={['rich-text', className].filter(Boolean).join(' ')} style={style}>
    {blocks.map((block, index) => {
      // consecutive "- " lines form one list; the other lines stay in a paragraph
      const groups: { list: boolean; lines: string[] }[] = [];
      for (const line of block.split('\n')) {
        const list = /^\s*-\s+/.test(line);
        const last = groups[groups.length - 1];
        if (last && last.list === list) last.lines.push(line); else groups.push({ list, lines: [line] });
      }
      return <Fragment key={index}>{groups.map((group, g) => group.list
        ? <ul key={g}>{group.lines.map((line, j) => <li key={j}>{inline(line.replace(/^\s*-\s+/, ''))}</li>)}</ul>
        : <p key={g} className={paragraphClassName}>{group.lines.map((line, j) => <Fragment key={j}>{j > 0 && <br />}{inline(line)}</Fragment>)}</p>)}</Fragment>;
    })}
  </div>;
}
