import {
    GET_POSTS_BULK_SUCCESS,
    GET_POSTS_BULK_FAIL
} from "../constants/actionTypes";
import axios from "axios";
import { QDB_HOST } from "../types/envconstants"; 
import { Dispatch } from "redux"
 
 
export const getAllblogPosts = () => async (dispatch: Dispatch) => {
    try {
        if(!sessionStorage.getItem("id")) return null;
        const id = sessionStorage.getItem("id");
        const url = QDB_HOST+id+'/posts';
        const response = await axios.get(url);
        dispatch({ type: GET_POSTS_BULK_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_POSTS_BULK_FAIL, payload: error });
    }
};
 