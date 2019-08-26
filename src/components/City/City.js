import React from 'react'
import { Link } from 'react-router-dom'

// two layers of destructuring
const City = ({ city: { _id, name, image }, selectedCity }) => {
  console.log()
  if (selectedCity === _id) {
    return (
      <Link to={`/cities/${_id}`}>
        <button className='selectedCity'>{name}</button>
      </Link>
    )
  } else {
    return (
      <Link to={`/cities/${_id}`}>
        <button className="inactiveCity">{name}</button>
      </Link>
    )
  }
}

export default City
