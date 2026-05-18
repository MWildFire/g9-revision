import { useTranslation } from 'react-i18next';
import { Formula } from '../ui/Formula';

interface FormulaCheatsheetProps {
  ns: string;
  topicKey: string;
  ids: string[];
}

export function FormulaCheatsheet({ ns, topicKey, ids }: FormulaCheatsheetProps) {
  const { t } = useTranslation(ns);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {ids.map((id) => (
        <Formula
          key={id}
          caption={t(`${topicKey}.formulas.${id}Caption`)}
        >
          {t(`${topicKey}.formulas.${id}`)}
        </Formula>
      ))}
    </div>
  );
}
