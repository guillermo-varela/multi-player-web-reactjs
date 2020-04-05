import React from 'react';
import Pagination from "react-js-pagination";
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
  const itemsPerPage = 5;
  const [state, setState] = useMultimediaPlayer(type, itemsPerPage, 'outer%space', '', false);
  const { currentPage, items, totalItems, isPending, isError } = state;

  const buildPagination = () => {
    return (<Pagination
      activePage={currentPage}
      itemsCountPerPage={itemsPerPage}
      totalItemsCount={totalItems}
      itemClass="page-item"
      linkClass="page-link"
      innerClass="pagination justify-content-center"
      onChange={handlePaginationChange}
    />);
  }

  const handlePaginationChange = (pageNumber: number) => {
    setState({ ...state, currentPage: pageNumber });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="text-center">
      <p>
        <FormattedMessage id='multimedia.source' />
        <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>
      </p>
      {isPending &&
        <Loading variant="primary" />
      }
      {isError &&
        <ErrorAlert />
      }
      {items.length > 0 &&
        <div>
          {buildPagination()}
          {
            items.map((item, i) => {
              return (<MultimediaPlayer key={i} item={item} index={i} />);
            })
          }
          <br />
          {buildPagination()}
        </div>
      }
    </div>
  );
}

export default MultimediaList;
