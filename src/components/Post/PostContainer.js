import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post'
import { API_URL } from '../../constants';
import NavBar from '../NavBar';
import { Link } from "react-router-dom";

class PostContainer extends Component {
    
  render() {

    return (
      <>
        <Link to="/cities/" >See All Cities</Link>
        <h1> I am post container</h1>
        <Post />

      </>
    )
  };
};

export default PostContainer;
