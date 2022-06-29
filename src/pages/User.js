import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';

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
        <form onSubmit={e =>onSubmit(e)}>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control form-control-lg" name="name" id="name" value={name}
          ></input>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" className="form-control form-control-lg" name="username" id="username"    value={username} ></input>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" className="form-control form-control-lg" name="email" id="email"    value={email} ></input>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" className="form-control form-control-lg" name="phone" id="phone"   value={phone} ></input>
        </div>
        <div class="form-group">
          <label for="website">Website</label>
          <input type="text" className="form-control form-control-lg" name="website" id="website"    value={website} ></input>
        </div>
        <div class="btn-group">
        <button type="submit" className="btn btn-warning">Go to List</button>
        </div>
      </form>

    );
}

export default User;