import { DELEATE_WORD } from "../types";
import axios from "axios";

const deleateItem = ( word ) => {
    return {
        type: DELEATE_WORD,
        payload: word
    }
}

function deleateWord(url) {
    return (dispatch) => {
        axios.delete(url).then(({data}) => dispatch(deleateItem(data)))
    } 
}
export default deleateWord
