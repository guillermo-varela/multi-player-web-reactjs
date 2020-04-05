import ActionType from '../model/ActionType';
import localeReducer from './localeReducer';

describe('localeReducer', () => {
  it('changes locale from es to en', () => {
    const action = { type: ActionType.CHANGE_LOCALE, payload: 'en' };
    const state = localeReducer('es', action);
    expect(state).toBe('en');
  });

  it('changes locale from en to es', () => {
    const action = { type: ActionType.CHANGE_LOCALE, payload: 'es' };
    const state = localeReducer('en', action);
    expect(state).toBe('es');
  });

  it('keeps locale when invalid action type', () => {
    const action = { type: ActionType.SIGN_IN_ERROR, payload: 'es' };
    const state = localeReducer('en', action);
    expect(state).toBe('en');
  });
});
