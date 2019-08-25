import React from 'react';

import City from './City'

// destructuring 
function CitiesContainer({cities}) {
    console.log(cities)
    
      let showAllCities = cities.map((city) => {
        return (
          <City city={city}/>
        );
      });
    
      return (
        <ul>
          {showAllCities }
        </ul>
      );
}


//     return (
//       <>
//         <h1> I am cities container</h1>
//         <City />
//       </>
//     )
// };

export default CitiesContainer;
