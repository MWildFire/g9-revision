import { createContext, useContext, useId, useLayoutEffect, useReducer, useRef, type ElementType, type ReactNode } from 'react';

// One registry per page: the first component that asks to show a key (a formula card,
// a "do not confuse" note, a repeated instruction) shows it; later repeats stay hidden.
// When the owner unmounts or stops using a key, waiting components re-render and the
// next one in the tree takes it over, so a card never disappears from the page entirely.
type Registry = { owners: Map<string, string>; listeners: Set<() => void> };
const OnceContext = createContext<Registry | null>(null);

export function OnceScope({ children }: { children: ReactNode }) {
  const registry = useRef<Registry | null>(null);
  if (!registry.current) registry.current = { owners: new Map(), listeners: new Set() };
  return <OnceContext.Provider value={registry.current}>{children}</OnceContext.Provider>;
}

function release(registry: Registry, owner: string, keep: Set<string>) {
  let released = false;
  for (const [key, value] of [...registry.owners]) {
    if (value === owner && !keep.has(key)) { registry.owners.delete(key); released = true; }
  }
  if (released) for (const listener of [...registry.listeners]) listener();
}

/** For each key: true if this component is the one that shows it on the page. Empty keys are always true. */
export function useOnce(keys: string[]): boolean[] {
  const registry = useContext(OnceContext);
  const owner = useId();
  const [, rerender] = useReducer((n: number) => n + 1, 0);
  const signature = keys.join('\u0000');
  // Claims happen in layout effects, not during render: a discarded render (StrictMode, Suspense) must not leave an owner behind.
  useLayoutEffect(() => {
    if (!registry) return;
    registry.listeners.add(rerender);
    return () => { release(registry, owner, new Set()); registry.listeners.delete(rerender); };
  }, [registry, owner]);
  useLayoutEffect(() => {
    if (!registry) return;
    const mine = new Set(signature.split('\u0000').filter(Boolean));
    release(registry, owner, mine);
    let claimed = false;
    for (const key of mine) if (!registry.owners.has(key)) { registry.owners.set(key, owner); claimed = true; }
    if (claimed) rerender();
  });
  if (!registry) return keys.map(() => true);
  return keys.map(key => !key || registry.owners.get(key) === owner);
}

/** Renders a repeated instruction only the first time it occurs on the page. */
export function OnceNote({ text, as: Tag = 'p', className }: { text: string; as?: ElementType; className?: string }) {
  const [show] = useOnce([`note:${text}`]);
  return show ? <Tag className={className}>{text}</Tag> : null;
}
