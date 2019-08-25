import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import { Link } from "react-router-dom";
import City from './City'


class CitiesContainer extends Component {
    
  render() {
    return (
      <>
        {/* <Link to="/users/" ><button>Back to Profile</button></Link> */}
        <h1> I am cities container</h1>
        <City />
      </>
    )
  };
};

export default CitiesContainer;
