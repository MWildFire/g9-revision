import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const TYPES = ['essay', 'letter', 'email', 'speech', 'newspaper', 'online', 'blog', 'guide', 'script'];

export function TextTypesPage() {
  const { t, i18n } = useTranslation('english');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;

  return (
    <div>
      <TopicHero title={t('textTypesPage.title')} intro={t('textTypesPage.intro')} icon={<FileText size={28} />} />
      <div className="space-y-3 mt-8">
        {TYPES.map((id) => {
          const item = t(`textTypes.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-sand)" labels={labels} />;
        })}
      </div>
    </div>
  );
}
