import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import en from './translations/en.json';
import App from './App';

describe('<App />', () => {
  const store = configureMockStore()({ locale: 'en' });

  it('renders <RootRouter />', () => {
    const wrapper = mount(buildComponent());
    expect(wrapper.find('IntlProvider')).toHaveLength(1);
  });

  it('renders internationalization elements', () => {
    const wrapper = mount(buildComponent());
    const intl = wrapper.find('IntlProvider');
    expect(intl).toHaveLength(1);
    expect(intl.prop('locale')).toBe('en');
    expect(intl.prop('messages')).toBe(en);
  });

  const buildComponent = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});
