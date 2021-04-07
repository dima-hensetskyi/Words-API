import { ADD_TEXT } from '../types';

const addText = (text) => {
  return {
    type: ADD_TEXT,
    payload: text,
  };
};

export default addText;
