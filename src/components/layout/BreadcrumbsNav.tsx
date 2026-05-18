import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  label: string;
  to?: string;
}

export function BreadcrumbsNav({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-text-muted mb-6 flex-wrap">
      {crumbs.map((c, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 ? <ChevronRight size={12} className="opacity-50" /> : null}
          {c.to ? (
            <Link to={c.to} className="hover:text-text-primary transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-text-primary">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
