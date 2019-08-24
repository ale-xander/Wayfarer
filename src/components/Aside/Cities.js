import React from 'react';
import City from './City';


const Cities = (props) =>  {
    return (
        <div>
            <img src={props.city.image} alt={props.city.name} />
            <h2><a href={<City />}>{props.city.name}</a></h2>
        </div>
    );
};

export default Cities;