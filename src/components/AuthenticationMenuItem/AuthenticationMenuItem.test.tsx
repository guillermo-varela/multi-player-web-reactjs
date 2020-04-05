import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { IntlProvider } from 'react-intl';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { match, MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay, { OverlayProps } from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { LinkContainer } from 'react-router-bootstrap';
import en from '../../translations/en.json';
import AuthenticationMenuItem from './AuthenticationMenuItem';

describe('<AuthenticationMenuItem />', () => {
  const mockStore = configureMockStore([thunk]);
  let store: MockStoreEnhanced<unknown, {}>;
  const usernameToTest = 'user-test';
  const emailToTest = `${usernameToTest}@test.com`;
  const match: match = {
    url: 'test',
    path: 'test',
    isExact: true,
    params: {}
  };

  it('renders <Nav />', () => {
    const wrapper = mount(buildComponent());
    expect(wrapper.find(Nav).length).toBe(1);
  });

  it('renders <LinkContainer /> to sign in when not authenticated', () => {
    const wrapper = mount(buildComponent());
    const linkContainer = wrapper.find(LinkContainer);
    expect(linkContainer.length).toBe(1);
    expect(linkContainer.props()).toHaveProperty('to', `${match.url}/signIn`);
  });

  it('renders username and <Button /> to sign out when authenticated', () => {
    const wrapper = mount(buildComponent(true));
    const navBarText = wrapper.children().find(Navbar.Text);
    expect(navBarText.find('Button[className="menu-link"]').length).toBe(1);

    expect(navBarText.text()).toContain(`${usernameToTest}:`);
  });

  it('renders error message when sign out fails', async () => {
    const wrapper = mount(buildComponent(true, true));
    let overlay: ReactWrapper<OverlayProps, any, React.Component<{}, {}, any>> | null = null;
    await act(async () => {
      overlay = wrapper.find(Overlay);
    });
    expect(overlay!.length).toBe(1);

    const popover = overlay!.find(Popover);
    expect(popover.length).toBe(1);
    expect(popover.prop('id')).toBe('popover-sign-out');
  });

  it('matches unauthenticated snapshot', () => {
    const tree = renderer.create(buildComponent()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches authenticated snapshot', () => {
    const tree = renderer.create(buildComponent(true)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const buildComponent = (isAuthenticated: boolean = false, isErrorSignOut: boolean = false): JSX.Element => {
    const authentication = isAuthenticated ?
      {
        user: {
          username: emailToTest
        },
        isErrorSignOut: isErrorSignOut
      }
      : {};
    store = mockStore({ authentication: authentication });

    return (<Provider store={store}>
      <MemoryRouter>
        <IntlProvider locale='en' messages={en}>
          <AuthenticationMenuItem match={match} />
        </IntlProvider>
      </MemoryRouter>
    </Provider>);
  };
});
