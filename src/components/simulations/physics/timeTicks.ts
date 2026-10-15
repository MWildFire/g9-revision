// Keep fractional seconds distinct on the short time intervals shown by the chart.
export function formatTimeTick(value: number, language: string): string {
  return value.toLocaleString(language.startsWith('ru') ? 'ru-RU' : 'en-GB', {
    maximumFractionDigits: 6, useGrouping: false,
  });
}
