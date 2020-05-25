import ActionType from '../model/ActionType';
import authenticationReducer from './authenticationReducer';

const initialState = {
  isPendingSignIn: false,
  isErrorSignIn: false,
  isBadCredentials: false,
  isPendingSignOut: false,
  isErrorSignOut: false,
  isPendingCheckAuthentication: false,
  isPendingCheckAuthenticationTooLong: false
};

describe('authenticationReducer', () => {
  it('returns "isPendingSignIn": true for SIGN_IN_PENDING', () => {
    const state = authenticationReducer(undefined, { type: ActionType.SIGN_IN_PENDING });
    expect(state).toStrictEqual({ ...initialState, isPendingSignIn: true });
  });

  it('returns a user for SIGN_IN_SUCCESS', () => {
    const user = { username: 'test' };
    const state = authenticationReducer(undefined, { type: ActionType.SIGN_IN_SUCCESS, payload: user });
    expect(state).toStrictEqual({ ...initialState, user: user });
  });

  it('returns "isErrorSignIn": true for SIGN_IN_ERROR', () => {
    const state = authenticationReducer(undefined, { type: ActionType.SIGN_IN_ERROR });
    expect(state).toStrictEqual({ ...initialState, isErrorSignIn: true });
  });

  it('returns "isErrorSignIn": true and "isBadCredentials": true for SIGN_IN_ERROR and 401 error', () => {
    const state = authenticationReducer(undefined, { type: ActionType.SIGN_IN_ERROR, payload: 401 });
    expect(state).toStrictEqual({ ...initialState, isErrorSignIn: true, isBadCredentials: true });
  });

  it('returns "isPendingSignOut": true and "isErrorSignOut": false for SIGN_OUT_PENDING', () => {
    const state = authenticationReducer(undefined, { type: ActionType.SIGN_OUT_PENDING });
    expect(state).toStrictEqual({ ...initialState, isPendingSignOut: true, isErrorSignOut: false });
  });

  it('returns "isPendingSignOut": false and "isErrorSignOut": true for SIGN_OUT_ERROR', () => {
    const state = authenticationReducer(undefined, { type: ActionType.SIGN_OUT_ERROR });
    expect(state).toStrictEqual({ ...initialState, isPendingSignOut: false, isErrorSignOut: true });
  });

  it('returns initial state for SIGN_OUT_SUCCESS', () => {
    const state = authenticationReducer(undefined, { type: ActionType.SIGN_OUT_SUCCESS });
    expect(state).toStrictEqual(initialState);
  });

  it('returns "isPendingCheckAuthentication": true for CHECK_AUTHENTICATION_PENDING', () => {
    const state = authenticationReducer(undefined, { type: ActionType.CHECK_AUTHENTICATION_PENDING });
    expect(state).toStrictEqual({ ...initialState, isPendingCheckAuthentication: true });
  });

  it('returns "isPendingCheckAuthenticationTooLong": true for CHECK_AUTHENTICATION_PENDING_TOO_LONG', () => {
    const expectedState = { ...initialState, isPendingCheckAuthentication: true };
    const state = authenticationReducer(expectedState, { type: ActionType.CHECK_AUTHENTICATION_PENDING_TOO_LONG });
    expect(state).toStrictEqual({ ...expectedState, isPendingCheckAuthenticationTooLong: true });
  });

  it('returns "isPendingCheckAuthenticationTooLong": false for CHECK_AUTHENTICATION_PENDING_TOO_LONG', () => {
    const expectedState = { ...initialState, isPendingCheckAuthentication: false };
    const state = authenticationReducer(expectedState, { type: ActionType.CHECK_AUTHENTICATION_PENDING_TOO_LONG });
    expect(state).toStrictEqual({ ...expectedState, isPendingCheckAuthenticationTooLong: false });
  });
});
