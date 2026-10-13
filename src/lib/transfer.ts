// Moving the student's local progress between addresses (GitHub Pages -> AWS) or devices.
// Progress lives only in this browser's localStorage, which is separate for every site address.
export const PROGRESS_KEY = /^(g9-|arabic:|geography-tectonic-hazards-|physics-september-2026-|math-term-1-2026-|myp-mocks-2026-|physics-criteria-)/;
type StorageLike = Pick<Storage, 'length' | 'key' | 'getItem' | 'setItem'>;
export type ProgressPack = { v: 1; at: string; data: Record<string, string> };

export function collectProgress(storage: StorageLike): Record<string, string> {
  const data: Record<string, string> = {};
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (!key || !PROGRESS_KEY.test(key)) continue;
    const value = storage.getItem(key);
    if (value !== null) data[key] = value;
  }
  return data;
}

function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromBase64Url(code: string): string {
  const binary = atob(code.replace(/-/g, '+').replace(/_/g, '/'));
  const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function encodeProgress(data: Record<string, string>, at = new Date().toISOString()): string {
  const pack: ProgressPack = { v: 1, at, data };
  return toBase64Url(JSON.stringify(pack));
}

export function parsePack(raw: unknown): ProgressPack | null {
  if (!raw || typeof raw !== 'object') return null;
  const pack = raw as Partial<ProgressPack>;
  if (pack.v !== 1 || typeof pack.at !== 'string' || !pack.data || typeof pack.data !== 'object') return null;
  const data: Record<string, string> = {};
  for (const [key, value] of Object.entries(pack.data)) {
    if (PROGRESS_KEY.test(key) && typeof value === 'string' && value.length <= 2_000_000) data[key] = value;
  }
  return { v: 1, at: pack.at, data };
}

export function decodeProgress(code: string): ProgressPack | null {
  try { return parsePack(JSON.parse(fromBase64Url(code.trim()))); } catch { return null; }
}

export function applyProgress(storage: StorageLike, pack: ProgressPack): number {
  let written = 0;
  for (const [key, value] of Object.entries(pack.data)) {
    if (!PROGRESS_KEY.test(key)) continue;
    storage.setItem(key, value);
    written++;
  }
  return written;
}
