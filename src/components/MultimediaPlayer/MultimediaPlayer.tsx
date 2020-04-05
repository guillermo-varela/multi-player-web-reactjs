import React from 'react';
import MultimediaItem from '../../model/MultimediaItem';
import MultimediaItemType from '../../model/MultimediaItemType';

import './MultimediaPlayer.scss';

type ItemToPlay = {
  item: MultimediaItem;
  index: number;
}

const MultimediaPlayer: React.FC<ItemToPlay> = ({ item, index }) => {
  if (item.type === MultimediaItemType.IMAGE) {
    return (
      <div>
        <h1>{item.title}</h1>
        <div className="container-resource">
          <img alt={item.title} src={item.downloadUrl} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{item.title}</h1>
        <div className="container-resource">
          <video src={item.downloadUrl} poster={item.previewUrl} controls preload="none" />
        </div>
      </div>
    );
  }
}

export default MultimediaPlayer;
