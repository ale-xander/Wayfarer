import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {

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
      </nav>
    );
  } else {
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