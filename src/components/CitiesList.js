import React, { Component } from 'react'
import Cities from './Cities'

class CitiesList extends Component {
    state = {
        cities: [
            {
                "name": "San Fancisco",
                "image": "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "description": "San Francisco, city and port, coextensive with San Francisco county, northern California, U.S., located on a peninsula between the Pacific Ocean and San Francisco Bay. It is a cultural and financial centre of the western United States and one of the country's most cosmopolitan cities."
            },
        
            {
                "name": "Portovenere",
                "image": "https://images.unsplash.com/photo-1551042667-bd3fc64546e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "description": "Portovenere  is a town and comune located on the Ligurian coast of Italy in the province of La Spezia. It comprises the three villages of Fezzano, Le Grazie and Porto Venere, and the three islands of Palmaria, Tino and Tinetto."
            },
        
            {
                "name": "Venezia",
                "image": "https://images.unsplash.com/photo-1566305207294-114f9d4c0645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                "description": "Venice is a city in northeastern Italy and the capital of the Veneto region. It is situated on a group of 118 small islands that are separated by canals and linked by over 400 bridges. The islands are located in the shallow Venetian Lagoon, an enclosed bay that lies between the mouths of the Po and the Piave rivers."
            },
            {
                "name": "Tokyo",
                "image": "https://images.unsplash.com/photo-1490761668535-35497054764d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                "description": "Tokyo is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara Islands are also part of Tokyo."
            },
            {
                "name": "Cabo San Lucas",
                "image": "https://images.unsplash.com/photo-1424878825877-7083ba5de185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "description": "Cabo San Lucas, a resort city on the southern tip of Mexico’s Baja California peninsula, is known for its beaches, water-based activities and nightlife. Playa El Médano is Cabo’s main beach, with outdoor restaurants and numerous bars. Past the marina is Land's End promontory, site of Playa del Amor (Lover's Beach) and El Arco, a natural archway in the seacliffs."
            }
        
        ]
        
    }

    render() {
        let citiesArray;
        if (this.state.cities) {
            citiesArray = this.state.cities.map((city) => {
                return (
                    <div>
                        <Cities
                            city={city}
                            key={city.id}
                        />
                    </div>
                );
            });
        };
       return (
           <div>
               {citiesArray}
           </div>
       );
   };

}

export default CitiesList