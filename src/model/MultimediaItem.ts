import MultimediaItemType from './MultimediaItemType';

export default class MultimediaItem {
  title: string;
  previewUrl: string;
  downloadUrl: string;
  type: MultimediaItemType;

  constructor(title: string, previewUrl: string, downloadUrl: string, type: MultimediaItemType) {
    this.title = title;
    this.previewUrl = previewUrl;
    this.downloadUrl = downloadUrl;
    this.type = type;
  }
}
