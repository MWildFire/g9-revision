export type SubjectId =
  | 'math'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'english'
  | 'french'
  | 'arabic'
  | 'geography';

export type AccentColor =
  | 'warm'
  | 'sage'
  | 'clay'
  | 'sky'
  | 'sky-deep'
  | 'sand'
  | 'rose-muted'
  | 'olive';

export type Subject = {
  id: SubjectId;
  iconName: string; // lucide-react icon name
  accent: AccentColor;
  route: string;
  topicsCount: number;
  enabled: boolean; // false = "В разработке"
  detail: 'full' | 'partial' | 'scaffold';
};

export const SUBJECTS: Subject[] = [
  {
    id: 'math',
    iconName: 'Calculator',
    accent: 'sky',
    route: '/math',
    topicsCount: 5,
    enabled: true,
    detail: 'full',
  },
  {
    id: 'physics',
    iconName: 'Atom',
    accent: 'warm',
    route: '/physics',
    topicsCount: 4,
    enabled: true,
    detail: 'full',
  },
  {
    id: 'chemistry',
    iconName: 'FlaskConical',
    accent: 'clay',
    route: '/chemistry',
    topicsCount: 6,
    enabled: true,
    detail: 'full',
  },
  {
    id: 'biology',
    iconName: 'Leaf',
    accent: 'sage',
    route: '/biology',
    topicsCount: 6,
    enabled: true,
    detail: 'full',
  },
  {
    id: 'english',
    iconName: 'BookOpen',
    accent: 'sand',
    route: '/english',
    topicsCount: 5,
    enabled: true,
    detail: 'full',
  },
  {
    id: 'french',
    iconName: 'Languages',
    accent: 'rose-muted',
    route: '/french',
    topicsCount: 4,
    enabled: true,
    detail: 'full',
  },
  {
    id: 'arabic',
    iconName: 'Type',
    accent: 'olive',
    route: '/arabic',
    topicsCount: 4,
    enabled: true,
    detail: 'full',
  },
  {
    id: 'geography',
    iconName: 'Globe',
    accent: 'sky-deep',
    route: '/geography',
    topicsCount: 4,
    enabled: true,
    detail: 'full',
  },
];

export function getSubject(id: SubjectId): Subject {
  const subject = SUBJECTS.find((s) => s.id === id);
  if (!subject) throw new Error(`Subject not found: ${id}`);
  return subject;
}

export const ACCENT_VAR: Record<AccentColor, string> = {
  warm: 'var(--color-accent-warm)',
  sage: 'var(--color-accent-sage)',
  clay: 'var(--color-accent-clay)',
  sky: 'var(--color-accent-sky)',
  'sky-deep': 'var(--color-accent-sky-deep)',
  sand: 'var(--color-accent-sand)',
  'rose-muted': 'var(--color-accent-rose-muted)',
  olive: 'var(--color-accent-olive)',
};
