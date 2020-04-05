import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Spinner from 'react-bootstrap/Spinner';
import { IntlProvider } from 'react-intl';
import en from '../../translations/en.json';
import Loading from './Loading';

describe('<Loading />', () => {
  it('renders <Spinner />', () => {
    const wrapper = mount(buildComponent());
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('renders <Spinner /> with a variant', () => {
    const spinnerWrapper = mount(buildComponent('danger')).find(Spinner);
    expect(spinnerWrapper.prop('variant')).toBe('danger');
  });

  it('renders <Spinner /> with an error message', () => {
    const spinnerWrapper = mount(buildComponent()).find(Spinner);
    expect(spinnerWrapper.childAt(0).text()).toBe(en['root.loading']);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(buildComponent()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const buildComponent = (variant) => {
    return (
      <IntlProvider locale='en' messages={en}>
        <Loading variant={variant} />
      </IntlProvider>
    );
  };
});
