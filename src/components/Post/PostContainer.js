import React, { Component } from 'react';
import Post from './Post'
import { Link } from "react-router-dom";

class PostContainer extends Component {
    
  render() {

    console.log('PostContainer')

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
