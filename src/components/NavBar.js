import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {

  //if user logged in, don't show login and signup button
  if (props.currentUser) {
    return (
      <nav className="main-nav-bar">

        <Link to="/" className="brand-link">
          <h1 className="brand-header">Wayfarer</h1>
        </Link>
  
        {/* on login, show the profile link, not login and sign up */}
        <Link className="nav-btn" to={`/users/${props.currentUser._id}`} >
            Profile
        </Link>

        <Link className="nav-btn" to={`/api/v1/auth/logout`} >
            Logout
        </Link>

      </nav>
    );
  } else {
    //if user not logged in, show login and signup button
    return (
      <nav className="main-nav-bar">
        <Link to="/" className="brand-link">
          <h1 className="brand-header">Wayfarer</h1>
        </Link>
        <button className="nav-btn" onClick={props.onSignUp}>Sign up</button>
        <button className="nav-btn" onClick={props.onLogin}>Login</button>
      </nav>
    );
  }
};

export default NavBar;