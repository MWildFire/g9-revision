// Dr Frost migrated from drfrostmaths.com to drfrost.org.
// Individual skill pages now require authentication, so deep-linking by skill ID
// no longer works. We link to the homepage and surface the Skill ID prominently
// so the student can search/type it after logging in.

export const DR_FROST_BASE = 'https://www.drfrost.org';
export const DR_FROST_HOMEPAGE = `${DR_FROST_BASE}/`;

export function buildDrFrostUrl(_taskNumber: string | number): string {
  return DR_FROST_HOMEPAGE;
}
