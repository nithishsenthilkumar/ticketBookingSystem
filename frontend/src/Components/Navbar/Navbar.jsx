import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    const onLogout=()=>{
        localStorage.clear();
        navigate('/login')
    }
  return (
    <div>
        hello world
      <a href='/' onClick={onLogout}>Logout</a>
    </div>
  )
}

export default Navbar