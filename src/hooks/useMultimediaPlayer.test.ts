import { renderHook, act } from '@testing-library/react-hooks';
import MultimediaItemType from '../model/MultimediaItemType';
import MultimediaItemResponse from '../model/MultimediaItemResponse';
import { fecthImages, fecthVideos } from '../services/multimediaService';
import useMultimediaPlayer from './useMultimediaPlayer';

jest.mock('../services/multimediaService');
const fecthImagesMock = fecthImages as jest.Mock;
const fecthVideosMock = fecthVideos as jest.Mock;

describe('useMultimediaPlayer', () => {
  beforeEach(() => {
    fecthImagesMock.mockReset();
    fecthVideosMock.mockReset();
    fecthVideosMock.mockResolvedValue(sampleVideos);
  });

  it('fetches images without pagination', async () => {
    fecthImagesMock.mockResolvedValueOnce(sampleImages);
    const { result, waitForNextUpdate } = renderHook(() => useMultimediaPlayer(MultimediaItemType.IMAGE));
    await waitForNextUpdate();

    expect(fecthImagesMock).toHaveBeenNthCalledWith(1, '', '', 1, 5);
    expect(fecthVideosMock).toBeCalledTimes(0);

    const [state] = result.current;
    expect(state).toEqual({
      isPending: false,
      isError: false,
      items: sampleImages.items,
      totalItems: sampleImages.totalItems,
      currentPage: 1,
      hasMoreItems: false
    });
  });

  it('handles errors for image fetching', async () => {
    fecthImagesMock.mockRejectedValueOnce(undefined);
    const { result, waitForNextUpdate } = renderHook(() => useMultimediaPlayer(MultimediaItemType.IMAGE));
    await waitForNextUpdate();

    expect(fecthImagesMock).toHaveBeenNthCalledWith(1, '', '', 1, 5);
    expect(fecthVideosMock).toBeCalledTimes(0);

    const [state] = result.current;
    expect(state).toEqual({
      isPending: false,
      isError: true,
      items: [],
      totalItems: 0,
      currentPage: 1,
      hasMoreItems: true
    });
  });

  it('fetches images with custom parameters', async () => {
    fecthImagesMock.mockResolvedValueOnce(sampleImages);
    const perPage = 5;
    const search = 'test-search';
    const category = 'test-category';

    const { waitForNextUpdate } = renderHook(() => useMultimediaPlayer(MultimediaItemType.IMAGE, perPage, search, category));
    await waitForNextUpdate();

    expect(fecthImagesMock).toHaveBeenNthCalledWith(1, search, category, 1, perPage);
    expect(fecthVideosMock).toBeCalledTimes(0);
  });

  it('fetches images with pagination and items concatenation', async () => {
    const perPage = 2;
    let fetchResponse: MultimediaItemResponse = {
      items: sampleImages.items.slice(0, perPage),
      totalItems: sampleImages.totalItems
    };
    fecthImagesMock.mockResolvedValueOnce(fetchResponse);

    const { result, waitForNextUpdate } = renderHook(() => useMultimediaPlayer(MultimediaItemType.IMAGE, perPage));
    await waitForNextUpdate();

    expect(fecthImagesMock).toHaveBeenNthCalledWith(1, '', '', 1, perPage);
    expect(fecthVideosMock).toBeCalledTimes(0);

    let [state] = result.current;
    expect(state).toEqual({
      isPending: false,
      isError: false,
      items: fetchResponse.items,
      totalItems: fetchResponse.totalItems,
      currentPage: 1,
      hasMoreItems: true
    });

    fetchResponse = {
      items: sampleImages.items.slice(perPage),
      totalItems: sampleImages.totalItems
    };
    fecthImagesMock.mockReset();
    fecthImagesMock.mockResolvedValueOnce(fetchResponse);

    const setState = result.current[1];
    act(() => {
      setState({ ...state, currentPage: 2 });
    });
    await waitForNextUpdate();

    [state] = result.current;
    expect(state).toEqual({
      isPending: false,
      isError: false,
      items: sampleImages.items,
      totalItems: sampleImages.totalItems,
      currentPage: 2,
      hasMoreItems: false
    });

    expect(fecthImagesMock).toHaveBeenNthCalledWith(1, '', '', 2, perPage);
    expect(fecthVideosMock).toBeCalledTimes(0);
  });

  it('fetches images with pagination but no items concatenation', async () => {
    const perPage = 2;
    let fetchResponse: MultimediaItemResponse = {
      items: sampleImages.items.slice(0, perPage),
      totalItems: sampleImages.totalItems
    };
    fecthImagesMock.mockResolvedValueOnce(fetchResponse);

    const { result, waitForNextUpdate } = renderHook(() => useMultimediaPlayer(MultimediaItemType.IMAGE, perPage, '', '', false));
    await waitForNextUpdate();

    expect(fecthImagesMock).toHaveBeenNthCalledWith(1, '', '', 1, perPage);
    expect(fecthVideosMock).toBeCalledTimes(0);

    let [state] = result.current;
    expect(state).toEqual({
      isPending: false,
      isError: false,
      items: fetchResponse.items,
      totalItems: fetchResponse.totalItems,
      currentPage: 1,
      hasMoreItems: true
    });

    fetchResponse = {
      items: sampleImages.items.slice(perPage),
      totalItems: sampleImages.totalItems
    };
    fecthImagesMock.mockReset();
    fecthImagesMock.mockResolvedValueOnce(fetchResponse);

    const setState = result.current[1];
    act(() => {
      setState({ ...state, currentPage: 2 });
    });
    await waitForNextUpdate();

    [state] = result.current;
    expect(state).toEqual({
      isPending: false,
      isError: false,
      items: fetchResponse.items,
      totalItems: fetchResponse.totalItems,
      currentPage: 2,
      hasMoreItems: false
    });

    expect(fecthImagesMock).toHaveBeenNthCalledWith(1, '', '', 2, perPage);
    expect(fecthVideosMock).toBeCalledTimes(0);
  });

  const sampleImages: MultimediaItemResponse = {
    items: [
      {
        title: 'Image 1',
        type: MultimediaItemType.IMAGE,
        downloadUrl: 'http://url-image-1.com',
        previewUrl: 'http://preview-url-image-1.com'
      },
      {
        title: 'Image 2',
        type: MultimediaItemType.IMAGE,
        downloadUrl: 'http://url-image-2.com',
        previewUrl: 'http://preview-url-image-2.com'
      },
      {
        title: 'Image 3',
        type: MultimediaItemType.IMAGE,
        downloadUrl: 'http://url-image-3.com',
        previewUrl: 'http://preview-url-image-3.com'
      }
    ],
    totalItems: 3
  };

  it('fetches videos', async () => {
    fecthImagesMock.mockResolvedValueOnce(sampleVideos);
    const { result, waitForNextUpdate } = renderHook(() => useMultimediaPlayer(MultimediaItemType.VIDEO));
    await waitForNextUpdate();

    expect(fecthVideosMock).toHaveBeenNthCalledWith(1, '', '', 1, 5);
    expect(fecthImagesMock).toBeCalledTimes(0);

    const [state] = result.current;
    expect(state).toEqual({
      isPending: false,
      isError: false,
      items: sampleVideos.items,
      totalItems: sampleVideos.totalItems,
      currentPage: 1,
      hasMoreItems: false
    });
  });

  const sampleVideos = {
    items: [
      {
        title: 'Video 1',
        type: MultimediaItemType.VIDEO,
        downloadUrl: 'http://url-video-1.com',
        previewUrl: 'http://preview-url-video-1.com'
      },
      {
        title: 'Video 2',
        type: MultimediaItemType.VIDEO,
        downloadUrl: 'http://url-video-2.com',
        previewUrl: 'http://preview-url-video-2.com'
      },
      {
        title: 'Video 3',
        type: MultimediaItemType.VIDEO,
        downloadUrl: 'http://url-video-3.com',
        previewUrl: 'http://preview-url-video-3.com'
      }
    ],
    totalItems: 3
  };
});
