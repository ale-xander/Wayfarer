import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div>
                <img src={this.props.city.images} alt={this.props.city.name}/>
                <h2>{this.props.city.name}</h2>
                <p>{this.props.city.description}</p>
            </div>
        );
    };
};

export default City;


