/**
 * Canonical site origin used for absolute URLs (sitemap, robots, Open Graph).
 * Override per-environment with NEXT_PUBLIC_SITE_URL (no trailing slash needed).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://troyspear.com'
).replace(/\/$/, '')
