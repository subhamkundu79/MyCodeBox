import {USER_LOGIN_FAILED, USER_LOGOUT}  from '../constants/actionTypes';

const initialState = {
     error:""
};

export const loginReducer = (state:any = initialState, action:any) => {
     switch(action) {
         case USER_LOGIN_FAILED:
              return {loading: false, error:action};
         case USER_LOGOUT:
              return {};      
        default:
           return state;
     }
}
