import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { mount } from 'enzyme';
import ActionType from '../model/ActionType';
import { checkAuthenticationAction, simpleSignOutAction } from '../actions/authenticationActions';
import useAuthentication from './useAuthentication';

jest.mock('../actions/authenticationActions');
const checkAuthenticationActionMock = checkAuthenticationAction as jest.Mock;
const simpleSignOutActionMock = simpleSignOutAction as jest.Mock;

describe('useAuthentication', () => {
  const mockStore = configureMockStore([thunk]);
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    checkAuthenticationActionMock.mockReset();
    checkAuthenticationActionMock.mockReturnValue({ type: ActionType.CHECK_AUTHENTICATION_PENDING });
    simpleSignOutActionMock.mockReset();
    simpleSignOutActionMock.mockReturnValue({ type: ActionType.SIGN_OUT_SUCCESS });
  });

  it('checks if user is authenticated on component render', () => {
    mount(buildComponent());
    const expectedActions = [
      { type: ActionType.CHECK_AUTHENTICATION_PENDING }
    ];
    expect(store.getActions()).toEqual(expectedActions);
    expect(checkAuthenticationActionMock).toBeCalledTimes(1);
  });

  it('signs out the user if session is expired', () => {
    mount(buildComponent(true, new Date()));
    const expectedActions = [
      { type: ActionType.CHECK_AUTHENTICATION_PENDING },
      { type: ActionType.SIGN_OUT_SUCCESS }
    ];
    expect(store.getActions()).toEqual(expectedActions);
    expect(simpleSignOutActionMock).toBeCalledTimes(1);
  });

  it('avoids sign out if there is no user', () => {
    mount(buildComponent());
    expect(store.getActions()).not.toContain({ type: ActionType.SIGN_OUT_SUCCESS });
    expect(simpleSignOutActionMock).toBeCalledTimes(0);
  });

  it('avoids sign out if session is not yet expired', () => {
    mount(buildComponent(true));
    expect(store.getActions()).not.toContain({ type: ActionType.SIGN_OUT_SUCCESS });
    expect(simpleSignOutActionMock).toBeCalledTimes(0);
  });

  it('avoids sign out if session is sign out is already in progress', () => {
    mount(buildComponent(true, new Date(), true));
    expect(store.getActions()).not.toContain({ type: ActionType.SIGN_OUT_SUCCESS });
    expect(simpleSignOutActionMock).toBeCalledTimes(0);
  });

  it('avoids sign out if session is sign out failed', () => {
    mount(buildComponent(true, new Date(), false, true));
    expect(store.getActions()).not.toContain({ type: ActionType.SIGN_OUT_SUCCESS });
    expect(simpleSignOutActionMock).toBeCalledTimes(0);
  });

  const TestComponent: React.FC = () => {
    useAuthentication();
    return <></>;
  };

  const buildComponent = (
    isAuthenticated: boolean = false,
    sessionExpirationDate: Date = new Date(Date.now() + 10000),
    isPendingSignOut: boolean = false,
    isErrorSignOut: boolean = false)
    : JSX.Element => {
    const authentication: any = isAuthenticated ?
      {
        user: {
          sessionExpirationDate: sessionExpirationDate
        }
      }
      : {};
    authentication.isPendingSignOut = isPendingSignOut;
    authentication.isErrorSignOut = isErrorSignOut;
    store = mockStore({ authentication: authentication });
    return (
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );
  }
});
