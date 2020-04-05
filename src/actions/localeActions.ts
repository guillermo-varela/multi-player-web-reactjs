import Action from '../model/Action';
import ActionType from '../model/ActionType';
import { saveLocale } from '../services/localeService';

export const changeLocaleAction = (locale: string): Action => {
  return { type: ActionType.CHANGE_LOCALE, payload: saveLocale(locale) };
}
