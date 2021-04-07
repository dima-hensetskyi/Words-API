import { SAVE_WORDS } from '../types';
import axios from 'axios';

const save = (words) => {
	return {
		type: SAVE_WORDS,
		payload: localStorage.setItem('key', JSON.stringify(words)),
	};
};

export default function saveWords(url) {
	return (dispatch, getState) => {
		const words = getState().textParserReducer;
		axios.post(url, words).then(({ data }) => dispatch(save(data)));
	};
}
