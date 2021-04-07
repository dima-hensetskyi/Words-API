import { GET_TO_WORDS } from '../types';

export const getToWordsReducer = (state = [], action) => {
	switch (action.type) {
		case GET_TO_WORDS:
			return action.payload;
		default:
			return state;
	}
};
