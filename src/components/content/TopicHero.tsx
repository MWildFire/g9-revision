import { ReactNode } from 'react';

interface TopicHeroProps {
  title: string;
  intro: string;
  icon?: ReactNode;
}

export function TopicHero({ title, intro, icon }: TopicHeroProps) {
  return (
    <section className="mb-10">
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="hidden md:flex w-16 h-16 rounded-lg bg-bg-tertiary border border-border items-center justify-center text-accent-warm shrink-0">
            {icon}
          </div>
        ) : null}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-3">
            {title}
          </h1>
          <p className="text-text-secondary max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
  description?: string;
}

export function SectionHeading({ children, description }: SectionHeadingProps) {
  return (
    <div className="mt-12 mb-6">
      <h2 className="font-serif text-2xl font-medium text-text-primary">{children}</h2>
      {description ? (
        <p className="mt-1 text-sm text-text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
