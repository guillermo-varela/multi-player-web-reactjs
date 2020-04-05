import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MultimediaPlayer from './MultimediaPlayer';
import MultimediaItem from '../../model/MultimediaItem';
import MultimediaItemType from '../../model/MultimediaItemType';

describe('<MultimediaPlayer />', () => {
  describe('for images', () => {
    const mockItem: MultimediaItem = {
      title: 'test',
      type: MultimediaItemType.IMAGE,
      previewUrl: 'www.preview.com',
      downloadUrl: 'www.download.com'
    }

    it('renders item title', () => {
      const wrapper = shallow(<MultimediaPlayer item={mockItem} index={1} />);
      const titleContainerWrapper = wrapper.find('h1');
      expect(titleContainerWrapper).toHaveLength(1);
      expect(titleContainerWrapper.text()).toBe(mockItem.title);
    });

    it('renders item container', () => {
      const wrapper = shallow(<MultimediaPlayer item={mockItem} index={1} />);
      const itemContainerWrapper = wrapper.find('div.container-resource');
      expect(itemContainerWrapper).toHaveLength(1);
    });

    it('renders <img />', () => {
      const wrapper = shallow(<MultimediaPlayer item={mockItem} index={1} />);
      const imgWrapper = wrapper.find(`img[src="${mockItem.downloadUrl}"][alt="${mockItem.title}"]`);
      expect(imgWrapper).toHaveLength(1);
    });

    it('matches snapshot', () => {
      const tree = renderer.create(<MultimediaPlayer item={mockItem} index={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('for videos', () => {
    const mockItem: MultimediaItem = {
      title: 'test',
      type: MultimediaItemType.VIDEO,
      previewUrl: 'www.preview.com',
      downloadUrl: 'www.download.com'
    }

    it('renders item title', () => {
      const wrapper = shallow(<MultimediaPlayer item={mockItem} index={1} />);
      const titleContainerWrapper = wrapper.find('h1');
      expect(titleContainerWrapper).toHaveLength(1);
      expect(titleContainerWrapper.text()).toBe(mockItem.title);
    });

    it('renders item container', () => {
      const wrapper = shallow(<MultimediaPlayer item={mockItem} index={1} />);
      const itemContainerWrapper = wrapper.find('div.container-resource');
      expect(itemContainerWrapper).toHaveLength(1);
    });

    it('renders <video />', () => {
      const wrapper = shallow(<MultimediaPlayer item={mockItem} index={1} />);
      const imgWrapper = wrapper.find(`video[src="${mockItem.downloadUrl}"][poster="${mockItem.previewUrl}"][controls][preload="none"]`);
      expect(imgWrapper).toHaveLength(1);
    });

    it('matches snapshot', () => {
      const tree = renderer.create(<MultimediaPlayer item={mockItem} index={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
