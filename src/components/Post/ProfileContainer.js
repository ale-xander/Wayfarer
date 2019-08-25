import React, { Component } from 'react';
import PostList from './PostList'
import { Link } from "react-router-dom";

class PostContainer extends Component {
    
  render() {

    return (
      <>
        <Link to="/cities/" >See All Cities</Link>
        <h2> Welcome {this.props.currentUser.username} </h2>
        <PostList />

      </>
    )
  };
};

export default PostContainer;
