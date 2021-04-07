import { DOWNLOAD_WORDS } from '../types';

const download = () => {
  return {
    type: DOWNLOAD_WORDS,
    payload: localStorage.getItem('key', JSON.parse(words)),
  };
};
