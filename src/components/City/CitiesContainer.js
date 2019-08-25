import React from 'react';

import City from './City'

// destructuring 
function CitiesContainer({cities}) {
    console.log(cities)



    return (
      <>
        {/* {this.getAllCites} */}
        {/* <Link to="/users/" ><button>Back to Profile</button></Link> */}
        <h1> I am cities container</h1>
        <City />
      </>
    )
};

export default CitiesContainer;
