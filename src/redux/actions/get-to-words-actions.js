import {GET_TO_WORDS} from '../types';
import axios from 'axios'

const getToWords = (words) => {
    return {
        type: GET_TO_WORDS,
        payload: words
    }
}

const getToWordsCollections = (url) => dispatch => axios.get(url).then(({data}) => dispatch(getToWords(data)));

export default getToWordsCollections;