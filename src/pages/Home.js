import React, { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios";
import { Link,NavLink } from "react-router-dom";

const Home =()=>{

    const [user,setUser]=useState([]);
    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser =async ()=>{
                    var result =await axios.get(`http://localhost:3003/users`);
                    console.log(result);
                    setUser(result.data);
    }

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3003/users/${id}`);
loadUser();
    }

    return(
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
     <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {user.map((u,index)=>(
<tr>
    <th scope="row">{index+1}</th>
    <td>{u.name}</td>
    <td>{u.username}</td>
    <td>{u.email}</td>
 <td><Link to={`users/${u.id}`}  className="btn btn-primary mr-2">
 View
  </Link>
  <Link to={`users/edit/${u.id}`} className="btn btn-outline-primary mr-2">
 Edit
  </Link>
  <button onClick={()=>deleteUser(u.id)} className="btn btn-danger">
 Delete
  </button>
  </td>
</tr>

   ))}
  </tbody>
</table>
            </div>
        </div>
    );
}

export default Home