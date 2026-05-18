import { ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeId, onChange, className = '' }: TabsProps) {
  return (
    <div
      role="tablist"
      className={`inline-flex p-1 bg-bg-tertiary rounded-md border border-border ${className}`}
    >
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              active
                ? 'bg-bg-secondary text-text-primary shadow-soft'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

interface SimulationPanelProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function SimulationPanel({ title, description, children }: SimulationPanelProps) {
  return (
    <section className="bg-bg-secondary border border-border rounded-lg shadow-card overflow-hidden">
      <header className="px-6 py-4 border-b border-border bg-bg-primary/40">
        <h3 className="text-xl font-serif font-medium text-text-primary">{title}</h3>
        {description ? (
          <p className="mt-1 text-sm text-text-secondary">{description}</p>
        ) : null}
      </header>
      <div className="p-6">{children}</div>
    </section>
  );
}
