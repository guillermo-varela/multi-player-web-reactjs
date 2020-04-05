import * as service from './localeService';

describe('localeService', () => {
  const localeKey = 'locale';

  describe('getLocale()', () => {
    let languageGetter: jest.SpyInstance;

    beforeEach(() => {
      languageGetter = jest.spyOn(window.navigator, 'language', 'get');
      localStorage.setItem(localeKey, '');
    });

    it('returns from local storage as priority', () => {
      const locale = 'en';
      localStorage.setItem(localeKey, locale);
      expect(service.getLocale()).toBe(locale);
    });

    it('returns from navigator.language as fallback', () => {
      const locale = 'es';
      languageGetter.mockReturnValue(`${locale}-CO`);
      expect(service.getLocale()).toBe(locale);
    });

    it('returns "en" as default if there is an unsupported locale', () => {
      const locale = 'en';
      languageGetter.mockReturnValue('pt-BR');
      expect(service.getLocale()).toBe(locale);
    });
  });

  describe('saveLocale()', () => {
    it('saves a locale into local storage', () => {
      const locale = 'en';
      const result = service.saveLocale(locale);
      expect(result).toBe(locale);
      expect(localStorage.getItem(localeKey)).toBe(locale);
    });

    it('strips region of locale when saving', () => {
      const locale = 'es';
      const result = service.saveLocale(`${locale}-CO`);
      expect(result).toBe(locale);
      expect(localStorage.getItem(localeKey)).toBe(locale);
    });

    it('saves and returns "en" as default if an unsupported locale is given', () => {
      const locale = 'en';
      const result = service.saveLocale('pt');
      expect(result).toBe(locale);
      expect(localStorage.getItem(localeKey)).toBe(locale);
    });
  });
});
