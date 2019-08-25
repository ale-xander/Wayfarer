import React, { Component } from 'react';
import Post from './Post'
import { Link } from "react-router-dom";

class PostContainer extends Component {
    
  render() {

    console.log('PostContainer')

    return (
      <>
        <Link to="/cities/" >See All Cities</Link>
        <h2> Welcome {this.props.currentUser.username} </h2>
        <p> I am post </p>
        <Post />

      </>
    )
  };
};

export default PostContainer;
