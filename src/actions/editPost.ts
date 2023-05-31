import axios from "axios";
import { Dispatch } from "redux"
import { QDB_HOST_New } from "../types/envconstants";
import { useNavigate } from 'react-router-dom';

export const editPost = (data:any) => async (dispatch: Dispatch) => {
    
    try {
      await axios.put(QDB_HOST_New,data,
      ).then((response:any) => {
        const users = response;
        
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } 
      });
              
    } catch (error:any) {
      
    }
  };
  
  
  