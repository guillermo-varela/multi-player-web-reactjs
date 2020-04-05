import Action from '../model/Action';
import ActionType from '../model/ActionType';
import Locale from '../model/Locale';
import { getLocale } from '../services/localeService';

const initialLocale = getLocale();

const localeReducer = (locale: Locale = initialLocale, action: Action): Locale => {
  switch (action.type) {
    case ActionType.CHANGE_LOCALE:
      return action.payload;
    default:
      return locale;
  }
};

export default localeReducer;
