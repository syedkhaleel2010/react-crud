import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';

const EditUser =()=>{
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
    const onInputChange =(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    }
const onSubmit = async e =>{
e.preventDefault();

await axios.put(`http://localhost:3003/users/${id}`,user);
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
          onChange={e=>{onInputChange(e)}}  placeholder="Enter name"></input>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" className="form-control form-control-lg" name="username" id="username"  onChange={e=>{onInputChange(e)}}  value={username} placeholder="Enter username"></input>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" className="form-control form-control-lg" name="email" id="email"  onChange={e=>{onInputChange(e)}}  value={email} placeholder="Enter email"></input>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" className="form-control form-control-lg" name="phone" id="phone"  onChange={e=>{onInputChange(e)}}  value={phone} placeholder="Enter phone"></input>
        </div>
        <div class="form-group">
          <label for="website">Website</label>
          <input type="text" className="form-control form-control-lg" name="website" id="website"  onChange={e=>{onInputChange(e)}}  value={website} placeholder="Enter website"></input>
        </div>
        <div class="btn-group">
        <button type="submit" className="btn btn-warning">Update User</button>
        </div>
      </form>

    );
}

export default EditUser;