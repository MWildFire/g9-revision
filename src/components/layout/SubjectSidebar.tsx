import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home as HomeIcon, type LucideIcon } from 'lucide-react';
import { SubjectId, ACCENT_VAR, getSubject } from '../../config/subjects';

export interface TopicNavItem {
  to: string;
  key: string; // i18n key relative to subject namespace
  icon: LucideIcon;
}

interface Props {
  subject: SubjectId;
  topics: TopicNavItem[];
}

export function SubjectSidebar({ subject, topics }: Props) {
  const { t, i18n } = useTranslation(subject);
  const navigate = useNavigate();
  const location = useLocation();
  const subjectMeta = getSubject(subject);
  const accentColor = ACCENT_VAR[subjectMeta.accent];

  return (
    <>
      <nav className="lg:hidden w-full mb-2" aria-label={t('subjectName', subjectMeta.id)}>
        <label className="text-sm block mb-2" htmlFor={`topic-${subject}`}>{t('subjectName', subjectMeta.id)}</label>
        <select id={`topic-${subject}`} value={topics.some(t => t.to === location.pathname) ? location.pathname : `/${subject}`}
          onChange={e => navigate(e.target.value)} className="w-full border border-border rounded-md bg-bg-secondary p-3 text-sm">
          {topics.map(topic => <option key={topic.to} value={topic.to}>{t(`nav.${topic.key}`)}</option>)}
        </select>
        <NavLink to={`/mocks?subject=${subject}`} className="block mt-2 text-sm underline">{i18n.language.startsWith('ru') ? 'Новые блоки и карта MYP' : 'New lessons and MYP map'} →</NavLink>
      </nav>
      <aside className="hidden lg:block w-60 shrink-0">
      <nav className="sticky top-24 flex flex-col gap-1">
        <NavLink
          to="/"
          className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-colors mb-2 border border-transparent"
        >
          <HomeIcon size={16} />
          <span>← Hub</span>
        </NavLink>
        <div
          className="px-3 py-1.5 text-xs uppercase tracking-wider font-medium"
          style={{ color: accentColor }}
        >
          {t('subjectName', subjectMeta.id)}
        </div>
        <NavLink to={`/mocks?subject=${subject}`} className="px-3 py-2 text-sm underline">{i18n.language.startsWith('ru') ? 'Новые блоки и карта MYP' : 'New lessons and MYP map'} →</NavLink>
        {topics.map(({ to, key, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? 'bg-bg-secondary text-text-primary font-medium shadow-soft border border-border'
                  : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary border border-transparent'
              }`
            }
          >
            <Icon size={16} />
            <span>{t(`nav.${key}`)}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
    </>
  );
}
