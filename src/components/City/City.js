import React from 'react';

// two layers of destructuring 
const City = ({city: {name, image}}) => {
    console.log()
    return (
      <>
        {/* <Link to="/users/" ><button>Back to Profile</button></Link> */}
        <p> {name} </p>
        
        {/* <Post /> */}
      </>
    )
};

export default City;
