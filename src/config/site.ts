/**
 * Deployment settings, read from environment variables at build time.
 * See .env.example for the full list.
 */
const env = (key: string): string | undefined => {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
};

/** Origin only, e.g. https://www.example.sa — no path, no trailing slash. Sub-folders go in BASE_PATH. */
const rawSiteUrl = env('SITE_URL');
export const siteUrl = rawSiteUrl ? rawSiteUrl.replace(/\/+$/, '') : undefined;

/**
 * Pages are indexable only on the production deployment with a known domain.
 * Every other build (local, preview, staging) is served with noindex and a
 * robots.txt that disallows crawling.
 */
export const indexable = Boolean(siteUrl) && env('DEPLOY_ENV') === 'production';

/** The enquiry form is shown only when a delivery service is fully configured. */
export const enquiryDelivery = {
  apiKey: env('RESEND_API_KEY'),
  to: env('ENQUIRY_TO_EMAIL'),
  from: env('ENQUIRY_FROM_EMAIL'),
};
export const formEnabled = Boolean(enquiryDelivery.apiKey && enquiryDelivery.to && enquiryDelivery.from);

export function absoluteUrl(path: string): string | undefined {
  return siteUrl ? `${siteUrl}${path}` : undefined;
}
