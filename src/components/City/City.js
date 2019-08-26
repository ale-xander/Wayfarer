import React from 'react';
import { Link } from 'react-router-dom'

// two layers of destructuring 
const City = ({city: { _id, name, image}, activeCityId}) => {

    if(activeCityId === _id) {
      return (
        <Link to={`/cities/${_id}`}>
          <p className="show-highlight"> {name} </p>
        </Link>
      )
    } 
    
    else {
      return (
        <Link to={`/cities/${_id}`}>
          <p > {name} </p>
        </Link>
      )
    }

};

export default City;
