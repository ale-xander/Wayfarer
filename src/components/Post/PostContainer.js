import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post'
import { API_URL } from '../../constants';

class PostContainer extends Component {
    
  render() {

    return (
      <>
        <h1> I am post container</h1>
        <Post />
      </>
    )
  };
};

export default PostContainer;
