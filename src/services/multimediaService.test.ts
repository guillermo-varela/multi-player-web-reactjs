import MultimediaItemType from '../model/MultimediaItemType';
import MultimediaItem from '../model/MultimediaItem';
import { getLocale } from './localeService';
import { fecthImages, fecthVideos } from './multimediaService';

jest.mock('./localeService');
(getLocale as jest.Mock).mockReturnValue('en');

describe('multimediaService', () => {
  describe('fecthImages()', () => {
    it('returns images', () => {
      window.fetch = buildFetchMock(MultimediaItemType.IMAGE);
      const result = fecthImages('test', 'test', 1, 5);

      expect(window.fetch).toHaveBeenCalled();
      return expect(result).resolves.toEqual({
        totalItems: sampleImages.hits.length,
        items: sampleImages.hits.map((item, i) => new MultimediaItem(
          `Image ${i + 1}`,
          item.previewURL,
          item.webformatURL,
          MultimediaItemType.IMAGE
        ))
      });
    });

    it('handles item indexes with pagination', () => {
      window.fetch = buildFetchMock(MultimediaItemType.IMAGE);
      const page = 3;
      const perPage = 5;
      const firstIndex = (perPage * (page - 1)) + 1;
      const result = fecthImages('test', 'test', page, perPage);

      expect(window.fetch).toHaveBeenCalled();
      return expect(result).resolves.toEqual({
        totalItems: sampleImages.hits.length,
        items: sampleImages.hits.map((item, i) => new MultimediaItem(
          `Image ${i + firstIndex}`,
          item.previewURL,
          item.webformatURL,
          MultimediaItemType.IMAGE
        ))
      });
    });
  });

  describe('fecthVideos()', () => {
    it('returns videos', () => {
      window.fetch = buildFetchMock(MultimediaItemType.VIDEO);
      const result = fecthVideos('test', 'test', 1, 5);

      expect(window.fetch).toHaveBeenCalled();
      return expect(result).resolves.toEqual({
        totalItems: sampleVideos.hits.length,
        items: sampleVideos.hits.map((item, i) => new MultimediaItem(
          `Video ${i + 1}`,
          `https://dummyimage.com/1280x720&text=Video+${i + 1}`,
          item.videos.large && item.videos.large.url ? item.videos.large.url : item.videos.medium.url,
          MultimediaItemType.VIDEO
        ))
      });
    });

    it('handles item indexes with pagination', () => {
      window.fetch = buildFetchMock(MultimediaItemType.VIDEO);
      const page = 10;
      const perPage = 5;
      const firstIndex = (perPage * (page - 1)) + 1;
      const result = fecthVideos('test', 'test', page, perPage);

      expect(window.fetch).toHaveBeenCalled();
      return expect(result).resolves.toEqual({
        totalItems: sampleVideos.hits.length,
        items: sampleVideos.hits.map((item, i) => new MultimediaItem(
          `Video ${i + firstIndex}`,
          `https://dummyimage.com/1280x720&text=Video+${i + firstIndex}`,
          item.videos.large && item.videos.large.url ? item.videos.large.url : item.videos.medium.url,
          MultimediaItemType.VIDEO
        ))
      });
    });
  });

  const buildFetchMock = (type: MultimediaItemType) => {
    let data = type == MultimediaItemType.IMAGE ? sampleImages : sampleVideos;
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data
      })
    );
  }

  const sampleImages = {
    totalHits: 2,
    hits: [{
      previewURL: 'http://preview-url-image-1.com',
      webformatURL: 'http://url-image-1.com'
    }, {
      previewURL: 'http://preview-url-image-2.com',
      webformatURL: 'http://url-image-2.com'
    }]
  };

  const sampleVideos = {
    totalHits: 2,
    hits: [{
      videos: {
        large: {
          url: 'http://url-video-large-1.com'
        },
        medium: {
          url: 'http://url-video-medium-1.com'
        }
      }
    },
    {
      videos: {
        medium: {
          url: 'http://url-video-medium-2.com'
        }
      }
    }]
  };
});
