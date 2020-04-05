import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders <Footer />', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).toHaveLength(1);
  });

  it('renders <Footer /> with current year', () => {
    const wrapper = shallow(<Footer />).find('span');
    expect(wrapper.find('span').text()).toBe(new Date().getFullYear().toString());
  });
});
