import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddUser =()=>{
    let navigate = useNavigate();
  const  [user,setUser] =useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name,username,email,phone,website} = user;

    const onInputChange =(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    }
const onSubmit = async e =>{
e.preventDefault();

await axios.post("http://localhost:3003/users",user);
navigate("/");

}
    return(
        <form onSubmit={e =>onSubmit(e)}>
        <div className="form-group">
          <label >Name</label>
          <input type="text" className="form-control form-control-lg" name="name" id="name" value={name}
          onChange={e=>{onInputChange(e)}}  placeholder="Enter name"></input>
        </div>
        <div className="form-group">
          <label >Username</label>
          <input type="text" className="form-control form-control-lg" name="username" id="username"  onChange={e=>{onInputChange(e)}}  value={username} placeholder="Enter username"></input>
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="text" className="form-control form-control-lg" name="email" id="email"  onChange={e=>{onInputChange(e)}}  value={email} placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label >Phone</label>
          <input type="text" className="form-control form-control-lg" name="phone" id="phone"  onChange={e=>{onInputChange(e)}}  value={phone} placeholder="Enter phone"></input>
        </div>
        <div className="form-group">
          <label >Website</label>
          <input type="text" className="form-control form-control-lg" name="website" id="website"  onChange={e=>{onInputChange(e)}}  value={website} placeholder="Enter website"></input>
        </div>
        <div className="btn-group">
        <button type="submit" className="btn btn-primary">Add User</button>
        </div>
      </form>

    );
}

export default AddUser;