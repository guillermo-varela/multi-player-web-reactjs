import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { IntlProvider } from 'react-intl';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import en from '../../translations/en.json';
import LocaleSelectorMenuItem from './LocaleSelectorMenuItem';

describe('<LocaleSelectorMenuItem />', () => {
  const mockStore = configureMockStore([thunk]);
  let store: MockStoreEnhanced<unknown, {}>;

  it('renders <NavDropdown />', () => {
    const wrapper = mount(buildComponent());
    expect(wrapper.find('NavDropdown')).toHaveLength(1);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(buildComponent()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const buildComponent = (): JSX.Element => {
    store = mockStore({ locale: 'en' });
    return (
      <Provider store={store}>
        <IntlProvider locale={'en'} messages={en}>
          <LocaleSelectorMenuItem />
        </IntlProvider>
      </Provider>
    );
  }
});

