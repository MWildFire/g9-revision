import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function AboutPage() {
  const { t, i18n } = useTranslation('common');
  const ru = i18n.language.startsWith('ru');
  return <main className="max-w-3xl mx-auto p-6 py-12 space-y-5">
    <h1 className="font-serif text-3xl">{t('nav.about')}</h1>
    <p>{ru ? 'MYP Revision помогает повторить Grade 9 перед mocks в Grade 10. Основа — школьные материалы 2025–26 и публичные документы IB, проверенные 28 сентября 2026.' : 'MYP Revision revisits Grade 9 for Grade 10 mocks. It combines school materials from 2025–26 with public IB documents checked on 28 September 2026.'}</p>
    <p>{ru ? 'Это самостоятельный учебный сайт, не официальный ресурс IB. Новые задания составлены для практики; они не являются реальными экзаменационными вопросами. Списки Grade 9 не подтверждают состав октябрьских mocks. Материалы Extras — дополнительное чтение.' : 'This independent study site is not an official IB resource. New exercises are original practice, not real examination questions. Grade 9 lists do not confirm the October mock scope. Extras are enrichment.'}</p>
    <p>{ru ? 'Прогресс хранится в браузере. Он не синхронизируется между устройствами. Очистка данных браузера удаляет сохранения.' : 'Progress stays in this browser, does not sync between devices and is removed when browser data is cleared.'}</p>
    <Link to="/mocks" className="underline">{t('nav.mocks')} →</Link>
  </main>;
}
