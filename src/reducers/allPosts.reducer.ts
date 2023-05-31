import {GET_POSTS_BULK_SUCCESS, GET_POSTS_BULK_FAIL} from "../constants/actionTypes";

const initialState = {
    posts: [],
    error:""
};

export const postreducer = (state:any =  initialState, action:any) => {
    switch (action.type) {
        case GET_POSTS_BULK_SUCCESS:
            return {
                ...state,
                    posts: action.payload,
                    error: null,
            }
         case GET_POSTS_BULK_FAIL:
            return {
                ...state,
                    isLoading: false,
                    posts: [],
                    error: action.payload,
            } 
        default: 
           return state;
    }
}
