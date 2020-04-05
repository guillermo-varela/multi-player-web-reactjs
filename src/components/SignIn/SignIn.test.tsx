import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { mount, ReactWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import en from '../../translations/en.json';
import { signInAction } from '../../actions/authenticationActions';
import ActionType from '../../model/ActionType';
import SignIn from './SignIn';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}));

jest.mock('../../actions/authenticationActions');
const signInActionMock = signInAction as jest.Mock;

import { useLocation } from 'react-router-dom';
const useLocationMock = useLocation as jest.Mock;

describe('<SignIn />', () => {
  const mockStore = configureMockStore([thunk]);
  let store: MockStoreEnhanced<unknown, {}>;
  const defaultUsername = 'user@test.com';

  beforeEach(() => {
    signInActionMock.mockReset();
    signInActionMock.mockReturnValue({ type: ActionType.SIGN_IN_PENDING });
  });

  it('renders <Redirect /> to parent path when authenticated', () => {
    const wrapper = mount(buildComponent(true));
    const redirect = wrapper.find(Redirect);
    expect(redirect.length).toBe(1);
    expect(redirect.prop('to')).toEqual({ pathname: '/test' });
  });

  it('renders <Redirect /> to a given referrer path after successful sign in', () => {
    const wrapper = mount(buildComponent(true, false, false, false, {
      state: {
        referrer: {
          pathname: '/test/sign-in-required'
        }
      }
    }));
    const redirect = wrapper.find(Redirect);
    expect(redirect.length).toBe(1);
    expect(redirect.prop('to')).toEqual({ pathname: '/test/sign-in-required' });
  });

  it('renders a form with initial values when not authenticated', () => {
    const wrapper = mount(buildComponent());
    const form = wrapper.find('form');
    expect(form.length).toBe(1);

    const usernameInput = form.find('input[name="username"]');
    expect(usernameInput.prop('value')).toBe(defaultUsername);

    const passwordInput = form.find('input[name="password"]');
    expect(passwordInput.prop('value')).toBe(defaultUsername);

    const submitButton = form.find('Button');
    expect(submitButton.prop('variant')).toBe('warning');
    expect(submitButton.prop('disabled')).toBe(false);
    expect(submitButton.find('Spinner').length).toBe(0);
  });

  it('submits a sign in action with the form data', async () => {
    const wrapper = mount(buildComponent());
    await act(async () => {
      wrapper.find('form').simulate('submit');
    });
    const formData = new FormData();
    formData.append('username', defaultUsername);
    formData.append('password', defaultUsername);
    expect(signInActionMock).toHaveBeenCalledWith(formData);
  });

  it('disables submit button while signing in', async () => {
    const wrapper = mount(buildComponent(false, true, false, false));
    const submitButton = wrapper.find('button[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
    expect(submitButton.find('Spinner').length).toBe(1);
  });

  it('renders <ErrorAlert /> with default message when sign in fails', async () => {
    const wrapper = mount(buildComponent(false, false, true, false));
    const errorAlert = wrapper.find('ErrorAlert');
    expect(errorAlert.length).toBe(1);
    expect(errorAlert.prop('message')).toBeFalsy();
  });

  it('renders <ErrorAlert /> with custom message for bad credentials', async () => {
    const wrapper = mount(buildComponent(false, false, true, true));
    const errorAlert = wrapper.find('ErrorAlert');
    expect(errorAlert.length).toBe(1);
    expect(errorAlert.prop('message')).toBeTruthy();
  });

  it('disables form submission when invalid data is entered', async () => {
    const wrapper = mount(buildComponent());
    const form = wrapper.find('form');
    await updateField(form, 'username', '');
    await submitForm(form);

    const usernameFormGroup = form.find('FormGroup[controlId="formUsername"]');
    expect(usernameFormGroup.find('div.invalid-feedback').text()).toBeTruthy()
    expect(signInActionMock).toHaveBeenCalledTimes(0);

    await updateField(form, 'username', defaultUsername);
    await updateField(form, 'password', '');
    await submitForm(form);

    const passwordFormGroup = form.find('FormGroup[controlId="formPassword"]');
    expect(usernameFormGroup.find('div.invalid-feedback').text()).toBeFalsy();
    expect(passwordFormGroup.find('div.invalid-feedback').text()).toBeTruthy();
    expect(signInActionMock).toHaveBeenCalledTimes(0);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(buildComponent()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const buildComponent = (
    isAuthenticated: boolean = false,
    isPendingSignIn: boolean = false,
    isErrorSignIn: boolean = false,
    isBadCredentials: boolean = false,
    location: any = { pathname: '/test/signIn' }): JSX.Element => {
    useLocationMock.mockReturnValueOnce(location);
    const authentication: any = isAuthenticated ? { user: {} } : {};
    authentication.isPendingSignIn = isPendingSignIn;
    authentication.isErrorSignIn = isErrorSignIn;
    authentication.isBadCredentials = isBadCredentials;
    store = mockStore({ authentication: authentication });
    return (
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale='en' messages={en}>
            <SignIn variant="warning" />
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );
  }

  const updateField = async (formWrapper: ReactWrapper, fieldName: string, value: string) => {
    await act(async () => {
      formWrapper.find(`input[name="${fieldName}"]`).simulate('change', {
        target: {
          name: fieldName,
          value: value
        }
      });
    });
  }

  const submitForm = async (formWrapper: ReactWrapper) => {
    await act(async () => {
      formWrapper.find('button[type="submit"]').simulate(
        'submit',
        { preventDefault: () => { } }
      );
    });
  }
});
