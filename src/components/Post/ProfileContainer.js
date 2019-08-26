import React, { Component } from 'react';
import PostList from './PostList'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../constants';

class ProfileContainer extends Component {
    state = {
      posts: []
    }

  // grab all posts from database
  getPosts = () => {
    axios.get(`${API_URL}/posts/userposts/${this.props.currentUser._id}`, { withCredentials: true })
    .then(res=> {
      console.log(res.data)
      this.setState({posts: res.data})
      // console.log(this.state)
    })
    .catch(err=>console.log(err))
  }


  componentDidMount() {
    this.getPosts()
  }


  render() {
    return (
      <div>
        <Link to="/cities/" >See All Cities</Link>
        <h2> Welcome {this.props.currentUser.username} </h2>
        <PostList posts={this.state.posts}/>

      </div>
    )
  }
};

export default withRouter(ProfileContainer);
