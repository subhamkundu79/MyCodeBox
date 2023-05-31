import axios from 'axios';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { QDB_HOST } from '../types/envconstants';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

export const Sidebar = ({showView}) => {
    const [view,setView] = useState(sessionStorage.getItem("viewState"))
    useEffect(() => {
       getUserDetails() 
        
    }, []);
    const [user,setUser]  = useState(Object);
    const history = useNavigate();
    
    const getUserDetails = async () => {
        const id = sessionStorage.getItem("id");
        const url = QDB_HOST+id
           await axios.get(url).then((response:any) => {
            const userDetails = response.data;
            setUser(userDetails);
           }).catch(function (error) {
            if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } 
          });
    } 
    
    return (
        <>
          <div className='hello'>Hello</div>
           <div>{user.name}</div>
           <p>{user.email}</p>
           <p>{user.phone}</p>
           <p>{user.website}</p>
           <hr/>
           <a href='/home' onClick={showView("dashboard")}>Dashboard</a>
           <div className='hello'>Overview</div>
           <div className='hello'>Calander</div>
           <div className='hello'>Scheduled Action</div>
           <div className='hello'>Live Alert</div>
           <hr/>
           <a href='/home' onClick={showView("blog")}>Blog</a>
           <div className='hello'>All</div>
           <div className='hello'>Latest</div>
           <div className='hello'>Archived</div>
        </>
    )
}