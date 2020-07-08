import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';
import { AuthContext } from '../../context/auth-context';

const NavLinks = props => {
  const auth = useContext(AuthContext);
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>ALL USERS</NavLink>
    </li>
   {auth.isLogedIn &&<li> 
      <NavLink to="/u1/places">MY PLACES</NavLink>
    </li>}
    {auth.isLogedIn && <li>
      <NavLink to="/places/new">ADD PLACE</NavLink>
    </li>}
    {!auth.isLogedIn &&<li>
      <NavLink to="/auth">AUTHENTICATE</NavLink>
    </li>}
    <li><button onClick={auth.logout}>Logout</button></li>
  </ul>
};

export default NavLinks;