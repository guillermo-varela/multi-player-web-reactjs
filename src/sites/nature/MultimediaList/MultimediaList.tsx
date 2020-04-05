import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';
import ErrorAlert from '../../../components/ErrorAlert/ErrorAlert';
import Loading from '../../../components/Loading/Loading';
import MultimediaPlayer from '../../../components/MultimediaPlayer/MultimediaPlayer';
import MultimediaItemType from '../../../model/MultimediaItemType';
import useMultimediaPlayer from '../../../hooks/useMultimediaPlayer';

type MultimediaType = {
  type: MultimediaItemType
}

const MultimediaList: React.FC<MultimediaType> = ({ type }) => {
  const [state, setState] = useMultimediaPlayer(type);
  const { currentPage, items, hasMoreItems, isPending, isError } = state;

  return (
    <div className="text-center">
      <p>
        <FormattedMessage id='multimedia.source' />
        <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>
      </p>
      {isPending &&
        <Loading variant="success" />
      }
      {isError &&
        <ErrorAlert />
      }
      {items.length > 0 &&
        <InfiniteScroll
          dataLength={items.length}
          next={() => setState({ ...state, currentPage: currentPage + 1 })}
          hasMore={hasMoreItems}
          loader={<Loading variant="success" />}
          endMessage={
            <p>
              <b>
                <FormattedMessage id='nature.multimedia.endOfContent' />
              </b>
            </p>
          }>
          {
            items.map((item, i) => {
              return (<MultimediaPlayer key={i} item={item} index={i} />);
            })
          }
        </InfiniteScroll>
      }
    </div>
  );
}

export default MultimediaList;
