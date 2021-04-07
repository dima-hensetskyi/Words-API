import { TEXT_PERSER } from '../types';

export const textParserReducer = (state = [], action) => {
	switch (action.type) {
		case TEXT_PERSER:
			return action.payload;
		default:
			return state;
	}
};
