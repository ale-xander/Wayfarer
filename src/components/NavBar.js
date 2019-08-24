import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <nav className="main-nav-bar">
      <Link to="/" className="brand-link">
        <h1 className="brand-header">Wayfarer</h1>
      </Link>
      <button className="nav-btn" onClick={props.onSignUp}>Sign up</button>
      <button className="nav-btn" onClick={props.onLogin}>Login</button>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form> */}
    </nav>
  );
};

export default NavBar;