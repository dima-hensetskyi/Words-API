import { UPDATE_WORD }from '../types'
import axios from 'axios';

const update = (word) => {
    return {
        type: UPDATE_WORD,
        payload: word
    }
}

function updateWord(url, data) {
    return (dispatch) => {
        axios.put(url, data).then(({data}) => dispatch(update(data)))
    }
}
export default updateWord