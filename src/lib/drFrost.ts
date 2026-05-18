export const DR_FROST_BASE = 'https://www.drfrostmaths.com';

/**
 * Construct a Dr Frost task URL.
 * The exact URL scheme may need adjustment once verified on the actual site.
 */
export function buildDrFrostUrl(taskNumber: string | number): string {
  const num = String(taskNumber).replace(/[^\d]/g, '');
  return `${DR_FROST_BASE}/practise-skill.php?skid=${num}`;
}
