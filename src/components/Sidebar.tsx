import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { QDB_HOST } from '../types/envconstants';


export const Sidebar = (props:any) => {
    
    const [user,setUser]  = useState({});
    
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
    useEffect(() => {
       getUserDetails() 
    }, []);
   
    let address = {}
    if(user.hasOwnProperty('address')) {
        address = user.address;
    } 
    
    return (
        <>
          <div className='hello'>Hello</div>
           <div>{user.name}</div>
           <p>{user.email}</p>
           <p>{user.phone}</p>
           <p>{user.website}</p>
           <hr/>
           <p>{address.street}</p>
           <p>{address.suite}</p>
           <p>{address.city}</p>
           <p>{address.zipcode}</p> 
           <hr/> 
           <a  onClick={() => props.showView("dashboard")}>Dashboard</a>
           <div className='hello'>Overview</div>
           <div className='hello'>Calander</div>
           <div className='hello'>Scheduled Action</div>
           <div className='hello'>Live Alert</div>
           <hr/>
           <a  onClick={() => props.showView("blog")}>Blog</a>
           <div className='hello'>All</div>
           <div className='hello'>Latest</div>
           <div className='hello'>Archived</div>
        </>
    )
}