import React from 'react';

import City from './City'

// destructuring 
function CitiesContainer({cities, activeCityId}) {
      
      console.log(cities)
  
      let showAllCities = cities.map((city) => {
        return (
          <li>
            <City 
            key={city._id}
            city={city}
            activeCityId={activeCityId}
            />
      
          </li>
        );
      });
    
      return (
        <ul className="city-sidebar-list">
          {showAllCities }
        </ul>
      );
}

export default CitiesContainer;
