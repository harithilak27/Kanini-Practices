import { Routes } from 'react-router-dom';
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import PageRoute from './PageRoute.jsx'
import './Navbar.css';
function Navbar() { 

  const navigate = useNavigate();
  const [click,setClick] = useState(false)
  const logout = () =>{
        navigate("/");
        localStorage.removeItem("userid");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
    }

  console.log(localStorage.getItem("role"));

  return (
    <div className='navbar'>
        <div className="navContainer">
        <Link to="/" style={{color: "inherit", textDecoration: "none",fontFamily: "sans-serif", margin: "5px"}}>
        <span className="logo">Aura Hospital</span>
        </Link>  
        </div>
  {localStorage.length !== 0 ? (
  <>
    <PageRoute />
    <button className="navButton" onClick={logout}>
      Logout
    </button>
    </>
) : (
  <div className="navItems">
    <Link to="/Register">
      <button className="navButton">Register</button>
    </Link>
    <Link to="/login">
      <button className="navButton">Login</button>
    </Link>
  </div>
)}
  </div>
  )
}

export default Navbar
