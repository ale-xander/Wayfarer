import React from 'react';
import { Link } from 'react-router-dom'

// two layers of destructuring 
const City = ({city: { _id, name, image}}) => {
    console.log()
    return (
      <Link to={`/cities/${_id}`}>
        {/* <Link to="/users/" ><button>Back to Profile</button></Link> */}
        <p> {name} </p>
        
        {/* <Post /> */}
      </Link>
    )
};

export default City;
