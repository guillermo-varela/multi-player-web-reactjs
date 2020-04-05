import en from '../translations/en.json';
import es from '../translations/es.json';
import { getLocale } from './localeService';
import MultimediaItem from '../model/MultimediaItem';
import MultimediaItemType from '../model/MultimediaItemType';
import MultimediaItemResponse from '../model/MultimediaItemResponse';

const messages = { en, es };
const PIXABAY_API_HOST = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const PIXABAY_API_COMMON_PARAMS = `&key=${PIXABAY_API_KEY}&safesearch=true&page=`;


type PixabayResponse = {
  totalHits: number,
  hits: [{
    previewURL: string,
    webformatURL: string,
    videos: {
      large: {
        url: string
      },
      medium: {
        url: string
      };
    }
  }]
}

export const fecthImages = async (search: string = '', category: string = '', page: number, perPage: number): Promise<MultimediaItemResponse> => {
  const response = await fetch(`${PIXABAY_API_HOST}?image_type=photo${PIXABAY_API_COMMON_PARAMS}${page}&q=${search}&category=${category}&per_page=${perPage}`);
  const data = await response.json() as PixabayResponse;
  const prefix = messages[getLocale()]['multimedia.type.image'];
  const items = data.hits.map((item, i: number) => new MultimediaItem(
    `${prefix} ${getItemIndex(page, perPage, i)}`,
    item.previewURL,
    item.webformatURL,
    MultimediaItemType.IMAGE));
  return Promise.resolve({
    items: items,
    totalItems: data.totalHits
  });
}

export const fecthVideos = async (search: string = '', category: string = '', page: number, perPage: number): Promise<MultimediaItemResponse> => {
  const response = await fetch(`${PIXABAY_API_HOST}videos/?video_type=film${PIXABAY_API_COMMON_PARAMS}${page}&q=${search}&category=${category}&per_page=${perPage}`);
  const data = await response.json() as PixabayResponse;
  const prefix = messages[getLocale()]['multimedia.type.video'];
  const items = data.hits.map((item, i: number) => {
    let url = item.videos.large && item.videos.large.url ? item.videos.large.url : item.videos.medium.url;

    return new MultimediaItem(
    `${prefix} ${getItemIndex(page, perPage, i)}`,
    `https://dummyimage.com/1280x720&text=${prefix}+${getItemIndex(page, perPage, i)}`,
    url,
    MultimediaItemType.VIDEO);
  })
  return Promise.resolve({
    items: items,
    totalItems: data.totalHits
  });
}

const getItemIndex = (page: number, perPage: number, indexInPage: number) => {
  return ((page * perPage) - (perPage - indexInPage)) + 1;
}
