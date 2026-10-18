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

export function RichText({ text, className, paragraphClassName, style, tables = false }: { text?: string | null; className?: string; paragraphClassName?: string; style?: CSSProperties; tables?:boolean }) {
  if (!text) return null;
  const blocks = text.trim().split(/\n\s*\n/);
  return <div className={['rich-text', className].filter(Boolean).join(' ')} style={style}>
    {blocks.map((block, index) => {
      // Opt-in only for the two new language tables; other teaching keeps its prior structure.
      const lines=block.split('\n'),cells=(line:string)=>line.trim().replace(/^\||\|$/g,'').split('|').map(s=>s.trim());
      if(tables&&lines.length>=3&&/^\s*\|/.test(lines[0])&&/^\s*\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(lines[1])){
        const headings=cells(lines[0]),rows=lines.slice(2).map(cells);
        if(rows.every(row=>row.length===headings.length))return <div key={index} role="region" tabIndex={0} aria-label={headings.join(' / ')} className="overflow-x-auto my-4 focus-visible:outline focus-visible:outline-2 print:overflow-visible"><table className="w-full min-w-[400px] print:min-w-0 border-collapse text-sm"><thead><tr>{headings.map((h,i)=><th key={i} scope="col" className="border border-border p-2 text-left"><bdi dir="auto">{inline(h)}</bdi></th>)}</tr></thead><tbody>{rows.map((row,r)=><tr key={r}>{row.map((cell,c)=>c===0?<th key={c} scope="row" className="border border-border p-2 text-left font-normal"><bdi dir="auto">{inline(cell)}</bdi></th>:<td key={c} lang={/^[\p{Script=Arabic}\p{Mark}\s]+$/u.test(cell) ? "ar" : undefined} dir={/^[\p{Script=Arabic}\p{Mark}\s]+$/u.test(cell) ? "rtl" : undefined} className="border border-border p-2"><bdi dir="auto">{inline(cell)}</bdi></td>)}</tr>)}</tbody></table></div>;
      }
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
