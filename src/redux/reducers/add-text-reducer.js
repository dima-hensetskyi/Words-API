import { ADD_TEXT } from '../types';

export const addTextReducer = (state = '', action) => {
	switch (action.type) {
		case ADD_TEXT:
			return action.payload;
		default:
			return state;
	}
};
