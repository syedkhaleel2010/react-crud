import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{

    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React CRUD</a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )

}

export default Navbar;