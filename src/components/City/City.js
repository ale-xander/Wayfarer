import React from 'react';

// two layers of destructuring 
const City = ({city: {name}}) => {
    console.log()
    return (
      <>
        {/* <Link to="/users/" ><button>Back to Profile</button></Link> */}
        <h1> {name} </h1>
        {/* <Post /> */}
      </>
    )
};

export default City;
