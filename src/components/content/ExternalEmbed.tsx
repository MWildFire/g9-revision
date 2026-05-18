import { useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';

interface Props {
  url: string;
  title: string;
  fallbackText?: string;
  height?: string;
}

export function ExternalEmbed({ url, title, fallbackText, height = '500px' }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="bg-bg-secondary border border-border rounded-lg overflow-hidden shadow-card">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-tertiary/40">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Globe size={14} />
          <span>{title}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-accent-warm hover:underline"
        >
          <ExternalLink size={12} />
          Open in new tab
        </a>
      </div>
      {!failed ? (
        <iframe
          src={url}
          title={title}
          style={{ width: '100%', height, border: 0 }}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="p-6 text-center">
          <p className="text-sm text-text-secondary mb-3">
            {fallbackText ?? "This page can't be embedded. Use the link above to open in a new tab."}
          </p>
        </div>
      )}
    </div>
  );
}
