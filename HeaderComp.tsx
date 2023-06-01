import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Dispatch } from "redux"
import { logout } from '../actions/userLogin';

export const HeaderComp = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const history = useNavigate();

    const logoutHandler = () => {
       dispatch(logout);
       history('/');
    }
    
    return (
        <div className=''>
            <span className='App-header'>
                <a href='/' onClick={()=>logoutHandler}>Logout</a>
                <span className='item'><img src="images/userSmall.jpg" width={53}/></span>
            </span>
           <span className='App-header2'>
                <span className='leftitem'><img src="images/postLogo.jpg" width={60}/></span>
                <span><b>All Blog posts</b></span>
           </span>
           
        </div>
    )
}