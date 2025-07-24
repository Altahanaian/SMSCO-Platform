export const defaultLocale = "en";
export const locales = ["en", "ar"];

export function getLocaleFromPath(pathname) {
  const pathLocale = locales.find((loc) => pathname.startsWith(`/${loc}`));
  return pathLocale || defaultLocale;
}