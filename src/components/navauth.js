import React from "react";
import { Link } from 'react-router-dom';
import { getToken } from '../pages/auth/API'

const NavAuth = () => {
const isAuth = getToken();
console.log(isAuth)
  if(isAuth !== undefined && isAuth !==null){
    return (
      <>
          <Link className="link" to="/Orders">Orders</Link>
          <Link className="link" to="/Logout">Logout</Link>
      </>
    )
} else {
    return (
      <>
      <Link className="link" to="/Login">Login</Link>
      <Link className="link" to="/Register">Register</Link>
    </>
    )
}
}
export default NavAuth
