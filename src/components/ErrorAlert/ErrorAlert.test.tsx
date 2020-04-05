import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Alert from 'react-bootstrap/Alert';
import { IntlProvider } from 'react-intl';
import en from '../../translations/en.json';
import ErrorAlert from './ErrorAlert';

describe('<ErrorAlert />', () => {
  it('renders <Alert />', () => {
    const wrapper = mount(buildComponent());
    expect(wrapper.find(Alert)).toHaveLength(1);
  });

  it('renders <Alert /> with an error message', () => {
    const alertWrapper = mount(buildComponent()).find(Alert);
    expect(alertWrapper.childAt(0).text()).toBe(en['component.error.message']);
  });

  it('renders <Alert /> with a custom error message', () => {
    const alertWrapper = mount(buildComponent('this is a test')).find(Alert);
    expect(alertWrapper.childAt(0).text()).toBe('this is a test');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(buildComponent()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const buildComponent = (message?: string) => {
    return (
      <IntlProvider locale='en' messages={en}>
        <ErrorAlert message={message} />
      </IntlProvider>
    );
  };
});
