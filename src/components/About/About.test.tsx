import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { IntlProvider } from 'react-intl';
import en from '../../translations/en.json';
import About from './About';

describe('<About />', () => {
  it('renders <Jumbotron />', () => {
    const wrapper = mount(buildComponent());
    expect(wrapper.find(Jumbotron)).toHaveLength(1);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(buildComponent()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const buildComponent = () => {
    return (
      <IntlProvider locale='en' messages={en}>
        <About />
      </IntlProvider>
    );
  };
});
