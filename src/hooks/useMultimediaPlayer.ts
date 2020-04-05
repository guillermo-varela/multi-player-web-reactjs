import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import MultimediaItem from '../model/MultimediaItem';
import MultimediaItemType from '../model/MultimediaItemType';
import { fecthImages, fecthVideos } from '../services/multimediaService';

type MultimediaState = {
  isPending: boolean;
  isError: boolean;
  items: Array<MultimediaItem>;
  totalItems: number;
  currentPage: number;
  hasMoreItems: boolean;
}

const initialMultimediaState: MultimediaState = {
  isPending: false,
  isError: false,
  items: [],
  totalItems: 0,
  currentPage: 1,
  hasMoreItems: true
};

const useMultimediaPlayer = (
  multimediaType: MultimediaItemType,
  perPage: number = 5,
  search: string = '',
  category: string = '',
  isConcatItems: boolean = true):
  [MultimediaState, Dispatch<SetStateAction<MultimediaState>>] => {
  const [state, setState] = useState(initialMultimediaState);

  useEffect(() => {
    let isSubscribed = true;
    if (state.currentPage === 1) {
      setState({ ...state, isPending: true })
    }

    const promise = multimediaType === MultimediaItemType.IMAGE ?
      fecthImages(search, category, state.currentPage, perPage) :
      fecthVideos(search, category, state.currentPage, perPage);

    promise
      .then(response => {
        if (isSubscribed) {
          setState({
            ...state,
            isPending: false,
            items: isConcatItems ? state.items.concat(response.items) : response.items,
            totalItems: response.totalItems,
            hasMoreItems: state.items.length + response.items.length < response.totalItems
          });
        }
      }).catch(() => {
        if (isSubscribed) {
          setState({ ...state, isError: true, isPending: false });
        }
      });

      return () => {
        isSubscribed = false;
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multimediaType, state.currentPage]);

  return [state, setState];
}

export default useMultimediaPlayer;
