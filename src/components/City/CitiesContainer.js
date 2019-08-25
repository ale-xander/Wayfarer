import React from 'react';

import City from './City'

// destructuring 
function CitiesContainer({cities}) {
    console.log(cities)
    
      let showAllCities = cities.map((city) => {
        return (
          <City 
          key={city._id}
          city={city}/>
        );
      });
    
      return (
        <ul>
          {showAllCities }
        </ul>
      );
}

export default CitiesContainer;
