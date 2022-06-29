import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import {Link} from "react-router-dom";
const User =()=>{
    let navigate = useNavigate();
  const  [user,setUser] =useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name,username,email,phone,website} = user;
    let {id} = useParams();
   
const onSubmit = async e =>{
e.preventDefault();

navigate("/");

}
const loadUser =async ()=>
{
  var result = await axios.get(`http://localhost:3003/users/${id}`);
 setUser(result.data);
}
useEffect(()=>{
  loadUser();
},[]);
    return(
        <>
        <div className="btn-group m-2">
        <Link  to="/" className='btn btn-primary'>Go to List</Link>
        </div>
      <ul className="list-group">
  <li className="list-group-item">name     : {user.name}</li>
  <li className="list-group-item">username : {user.username}</li>
  <li className="list-group-item">email    : {user.email}</li>
  <li className="list-group-item">phone    : {user.phone}</li>
  <li className="list-group-item">website  : {user.website}</li>
</ul>
        
      </>

    );
}

export default User;