import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from './authenticationActions';
import * as services from '../services/authenticationService';
import ActionType from '../model/ActionType';
import User from '../model/User';

jest.mock('../services/authenticationService');
const signInMock = services.signIn as jest.Mock;
const checkAuthenticationMock = services.checkAuthentication as jest.Mock;
const signOutMock = services.signOut as jest.Mock;

describe('authenticationActions', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore();
  const user: User = {
    username: 'test-user',
    roles: ['test'],
    sessionExpirationDate: new Date()
  };

  beforeEach(() => {
    store.clearActions();
  });

  describe('signInAction(formData: FormData)', () => {
    const formData = new FormData();
    formData.append('username', 'test-user');
    formData.append('password', 'test-password');

    it('creates actions for successful sign in', () => {
      signInMock.mockResolvedValueOnce(user);

      const expectedActions = [
        { type: ActionType.SIGN_IN_PENDING },
        { type: ActionType.SIGN_IN_SUCCESS, payload: user }
      ];

      return store.dispatch<any>(actions.signInAction(formData)).then(() => {
        expect(signInMock).toHaveBeenCalledWith(formData);
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates actions for failed sign in', () => {
      const errorCode = 403;
      signInMock.mockRejectedValueOnce(errorCode);

      const expectedActions = [
        { type: ActionType.SIGN_IN_PENDING },
        { type: ActionType.SIGN_IN_ERROR, payload: errorCode }
      ];

      return store.dispatch<any>(actions.signInAction(formData)).then(() => {
        expect(signInMock).toHaveBeenCalledWith(formData);
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('checkAuthenticationAction()', () => {
    it('creates actions for successful checkAuthentication', () => {
      checkAuthenticationMock.mockResolvedValueOnce(user);
      const expectedActions = [
        { type: ActionType.CHECK_AUTHENTICATION_PENDING },
        { type: ActionType.SIGN_IN_SUCCESS, payload: user }
      ];

      return store.dispatch<any>(actions.checkAuthenticationAction()).then(() => {
        expect(checkAuthenticationMock).toHaveBeenCalled();
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates actions for failed checkAuthentication', () => {
      checkAuthenticationMock.mockRejectedValue(null);
      const expectedActions = [
        { type: ActionType.CHECK_AUTHENTICATION_PENDING },
        { type: ActionType.SIGN_OUT_SUCCESS }
      ];

      return store.dispatch<any>(actions.checkAuthenticationAction()).then(() => {
        expect(checkAuthenticationMock).toHaveBeenCalled();
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });


  describe('signOutAction()', () => {
    it('creates actions for successful signOut', () => {
      signOutMock.mockResolvedValueOnce(null);
      const expectedActions = [
        { type: ActionType.SIGN_OUT_PENDING },
        { type: ActionType.SIGN_OUT_SUCCESS }
      ];

      return store.dispatch<any>(actions.signOutAction()).then(() => {
        expect(signOutMock).toHaveBeenCalled();
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates actions for failed signOut', () => {
      signOutMock.mockRejectedValue(null);
      const expectedActions = [
        { type: ActionType.SIGN_OUT_PENDING },
        { type: ActionType.SIGN_OUT_ERROR }
      ];

      return store.dispatch<any>(actions.signOutAction()).then(() => {
        expect(signOutMock).toHaveBeenCalled();
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('simpleSignOutAction()', () => {
    it('creates actions for simple/local signOut', () => {
      const expectedAction = { type: ActionType.SIGN_OUT_SUCCESS };
      expect(actions.simpleSignOutAction()).toEqual(expectedAction);
    });
  });
});
