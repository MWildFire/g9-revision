import { useMemo, useState, type ChangeEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { applyProgress, collectProgress, decodeProgress, encodeProgress, parsePack, type ProgressPack } from '../lib/transfer';

const PRIMARY_RAW = import.meta.env.VITE_PRIMARY_URL as string | undefined;
const PRIMARY = PRIMARY_RAW ? PRIMARY_RAW.replace(/\/?#?\/?$/, '/') : undefined;

export function TransferPage() {
  const { i18n } = useTranslation();
  const ru = i18n.language.startsWith('ru');
  const t = (en: string, rus: string) => (ru ? rus : en);
  const [params] = useSearchParams();
  const incoming = useMemo(() => { const code = params.get('d'); return code ? decodeProgress(code) : null; }, [params]);
  const [filePack, setFilePack] = useState<ProgressPack | null>(null);
  const [message, setMessage] = useState('');
  const local = useMemo(() => { try { return collectProgress(window.localStorage); } catch { return {}; } }, [message]);
  const pack = filePack ?? incoming;
  const target = PRIMARY ?? `${window.location.origin}${window.location.pathname}`;
  const link = `${target}#/transfer?d=${encodeProgress(local)}`;

  const copy = async () => {
    try { await navigator.clipboard.writeText(link); setMessage(t('Link copied. Open it on the new address or device.', 'Ссылка скопирована. Откройте её на новом адресе или устройстве.')); }
    catch { setMessage(t('Copy failed: select the link below and copy it by hand.', 'Не удалось скопировать: выделите ссылку ниже и скопируйте вручную.')); }
  };
  const download = () => {
    const blob = new Blob([JSON.stringify({ v: 1, at: new Date().toISOString(), data: local })], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const upload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try { setFilePack(parsePack(JSON.parse(await file.text()))); } catch { setFilePack(null); setMessage(t('This file is not a progress file.', 'Это не файл прогресса.')); }
  };
  const restore = () => {
    if (!pack) return;
    try {
      const n = applyProgress(window.localStorage, pack);
      setMessage(t(`Done: ${n} saved items moved. Opening the plan…`, `Готово: перенесено записей — ${n}. Открываю план…`));
      window.setTimeout(() => { window.location.hash = '#/revision-plan'; window.location.reload(); }, 900);
    } catch { setMessage(t('The browser refused to save. Check that private mode is off.', 'Браузер не дал сохранить. Проверьте, что не включён приватный режим.')); }
  };

  return <main className="max-w-3xl mx-auto px-4 md:px-6 py-10 space-y-8">
    <h1 className="font-serif text-3xl">{t('Move your progress', 'Перенос прогресса')}</h1>
    <p className="text-text-secondary">{t('Ticks, answers and notes are stored only in this browser. To continue on another address or device, move them with a link or a file.', 'Отметки, ответы и заметки хранятся только в этом браузере. Чтобы продолжить на другом адресе или устройстве, перенесите их ссылкой или файлом.')}</p>
    {pack && <section className="rounded-xl border border-border bg-bg-secondary p-5 space-y-3">
      <h2 className="font-serif text-xl">{t('Progress to restore', 'Прогресс для восстановления')}</h2>
      <p>{t(`${Object.keys(pack.data).length} saved items from ${pack.at.slice(0, 16).replace('T', ' ')} (UTC).`, `Записей: ${Object.keys(pack.data).length}, сохранено ${pack.at.slice(0, 16).replace('T', ' ')} (UTC).`)}</p>
      <p className="text-sm">{t('Items with the same name on this device will be replaced.', 'Записи с теми же именами на этом устройстве будут заменены.')}</p>
      <button type="button" className="nov-button" onClick={restore}>{t('Restore on this device', 'Перенести на это устройство')}</button>
    </section>}
    {params.get('d') && !incoming && <p role="alert">{t('The link is damaged. Copy it again in full.', 'Ссылка повреждена. Скопируйте её ещё раз целиком.')}</p>}
    <section className="rounded-xl border border-border p-5 space-y-3">
      <h2 className="font-serif text-xl">{t('Send progress from this device', 'Отправить прогресс с этого устройства')}</h2>
      <p>{t(`Saved items here: ${Object.keys(local).length}.`, `Сохранённых записей здесь: ${Object.keys(local).length}.`)}</p>
      <div className="flex flex-wrap gap-3"><button type="button" className="nov-button" onClick={copy}>{t('Copy transfer link', 'Скопировать ссылку переноса')}</button><button type="button" className="nov-button secondary" onClick={download}>{t('Download progress file', 'Скачать файл прогресса')}</button></div>
      <textarea readOnly className="w-full text-xs border border-border rounded-md p-2" rows={3} value={link} aria-label={t('Transfer link', 'Ссылка переноса')} />
    </section>
    <section className="rounded-xl border border-border p-5 space-y-3">
      <h2 className="font-serif text-xl">{t('Restore from a file', 'Восстановить из файла')}</h2>
      <input type="file" accept="application/json,.json" onChange={upload} />
    </section>
    {message && <p role="status">{message}</p>}
    <Link className="underline" to="/revision-plan">← {t('Daily plan', 'План по дням')}</Link>
  </main>;
}
