import * as actions from './localeActions';
import { saveLocale } from '../services/localeService';
import ActionType from '../model/ActionType';

jest.mock('../services/localeService');
const saveLocaleMock = saveLocale as jest.Mock;

describe('localeActions', () => {
  describe('changeLocaleAction()', () => {
    it('creates action to change the locale', () => {
      const locale = 'en';
      saveLocaleMock.mockReturnValue(locale);
      const expectedAction = { type: ActionType.CHANGE_LOCALE, payload: locale };

      expect(actions.changeLocaleAction(locale)).toEqual(expectedAction);
      expect(saveLocaleMock).toHaveBeenCalledWith(locale);
    });

    it('creates action to change the locale even with region value', () => {
      const locale = 'es';
      const localeWithRegion = `${locale}-CO`;
      saveLocaleMock.mockReturnValue(locale);
      const expectedAction = { type: ActionType.CHANGE_LOCALE, payload: locale };

      expect(actions.changeLocaleAction(localeWithRegion)).toEqual(expectedAction);
      expect(saveLocaleMock).toHaveBeenCalledWith(localeWithRegion);
    });
  });
});
