export interface DetailedItem {
  name?: string;
  title?: string;
  use?: string;
  form?: string;
  rule?: string;
  body?: string;
  examples?: string[];
  example?: string;
  tip?: string;
  watchOut?: string;
  note?: string;
}

interface Props {
  item: DetailedItem;
  borderColor?: string;
  /** Map English labels to the current language */
  labels?: { rule?: string; use?: string; form?: string; examples?: string; tip?: string; watchOut?: string; note?: string };
}

export function DetailedCard({ item, borderColor, labels }: Props) {
  const L = {
    rule: 'Rule',
    use: 'Use',
    form: 'Form',
    examples: 'Examples',
    tip: 'Tip',
    watchOut: 'Watch out',
    note: 'Note',
    ...labels,
  };
  const heading = item.title ?? item.name;

  return (
    <article
      className="bg-bg-secondary border border-border rounded-md p-4"
      style={borderColor ? { borderLeftColor: borderColor, borderLeftWidth: '3px' } : undefined}
    >
      {heading ? <h4 className="font-serif text-base font-medium mb-2">{heading}</h4> : null}
      {item.body ? <p className="text-sm text-text-secondary whitespace-pre-line mb-2">{item.body}</p> : null}
      {item.rule ? (
        <p className="text-sm mb-2">
          <span className="text-xs uppercase tracking-wider text-text-muted mr-2">{L.rule}</span>
          {item.rule}
        </p>
      ) : null}
      {item.use ? (
        <p className="text-sm mb-2">
          <span className="text-xs uppercase tracking-wider text-text-muted mr-2">{L.use}</span>
          {item.use}
        </p>
      ) : null}
      {item.form ? (
        <p className="text-sm mb-2 font-mono">
          <span className="text-xs uppercase tracking-wider text-text-muted mr-2 font-sans">{L.form}</span>
          {item.form}
        </p>
      ) : null}
      {item.examples && item.examples.length > 0 ? (
        <div className="mb-2">
          <div className="text-xs uppercase tracking-wider text-text-muted mb-1">{L.examples}</div>
          <ul className="text-sm space-y-1">
            {item.examples.map((ex, i) => (
              <li key={i} className="italic text-text-secondary">"{ex}"</li>
            ))}
          </ul>
        </div>
      ) : null}
      {item.example ? (
        <p className="text-sm italic text-text-secondary mb-2">"{item.example}"</p>
      ) : null}
      {item.tip ? (
        <p className="text-xs bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 mt-2">
          <span className="uppercase tracking-wider text-text-muted mr-2">💡 {L.tip}</span>
          {item.tip}
        </p>
      ) : null}
      {item.watchOut ? (
        <p className="text-xs bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 mt-2">
          <span className="uppercase tracking-wider text-text-muted mr-2">⚠ {L.watchOut}</span>
          {item.watchOut}
        </p>
      ) : null}
      {item.note ? (
        <p className="text-xs text-text-muted mt-2">{item.note}</p>
      ) : null}
    </article>
  );
}
