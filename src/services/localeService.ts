import Locale from '../model/Locale';

const localeKey = 'locale';

const getLocaleValue = (locale: string): Locale => locale.startsWith('es') ? 'es' : 'en';

export const getLocale = (): Locale =>
  getLocaleValue(localStorage.getItem(localeKey) || navigator.language);

export const saveLocale = (locale: string): Locale => {
  const value = getLocaleValue(locale);
  localStorage.setItem(localeKey, value);
  return value;
}
