import { TEXT_PERSER } from '../types';
import nlp from 'compromise';

const wordsCollections = (words) => {
  return {
    type: TEXT_PERSER,
    payload: words,
  };
};

export default function exactWordsCollections() {
  return (dispatch, getState) => {
    const text = getState().addTextReducer;
    const doc = nlp(text);
    dispatch(wordsCollections(doc.json(0).terms));
  };
}
