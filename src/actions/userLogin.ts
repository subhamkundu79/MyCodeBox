import {
    USER_LOGIN_FAILED,
    USER_LOGOUT,
    
  } from "../constants/actionTypes";
import axios from "axios";
import { Dispatch } from "redux"
import { QDB_HOST } from "../types/envconstants";
import { useNavigate } from 'react-router-dom';

export const login = (user:string) => async (dispatch: Dispatch) => {
    
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.get(QDB_HOST,config
      ).then((response:any) => {
        const users = response.data;
        if(users.map((obj: any) => obj.username).indexOf(user) !== -1) {
          sessionStorage.setItem("userName", user);
          const userOdj = (users.filter((obj: any) => obj.username === user));
          sessionStorage.setItem("id", userOdj[0].id);
        }
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } 
      });
              
    } catch (error:any) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload:error.response 
      });
    }
  };
  
  export const logout = () =>  ((dispatch: Dispatch) => {
    const history = useNavigate();
    history('/');
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("id");
    dispatch({ type: USER_LOGOUT });
  });
  