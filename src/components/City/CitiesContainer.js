import React from 'react'

import City from './City'

// destructuring
function CitiesContainer ({ cities, selectedCity }) {
  console.log(cities)

  let showAllCities = cities.map(city => {
    return <City key={city._id} city={city} selectedCity={selectedCity} />
  })

  return (
    <>
      <div className='city-container'>
        <ul> {showAllCities} </ul>
      </div>
    </>
  )
}

export default CitiesContainer
