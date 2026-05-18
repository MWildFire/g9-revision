import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DR_FROST_HOMEPAGE } from '../../lib/drFrost';

interface Props {
  taskNumber: string | number;
  label?: string;
}

export function DrFrostLink({ taskNumber, label }: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const title = lang === 'ru'
    ? `Skill ID ${taskNumber}. Войди на drfrost.org и введи этот ID в поиске.`
    : `Skill ID ${taskNumber}. Log in to drfrost.org and enter this ID in the search.`;

  return (
    <a
      href={DR_FROST_HOMEPAGE}
      target="_blank"
      rel="noopener noreferrer"
      className="dr-frost-pill"
      title={title}
    >
      <ExternalLink size={12} />
      <span>{taskNumber}</span>
      {label ? <span className="ml-1 opacity-70 normal-case">{label}</span> : null}
    </a>
  );
}
