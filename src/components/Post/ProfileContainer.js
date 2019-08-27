import React, { Component } from 'react';
import PostList from './PostList'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../constants';


// onloin -> user profile page showing all posts
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
      <div className="profile-post-list">
        <Link to="/cities/" className="all-cities-link">See All Cities</Link>
        <h2 className="profile-header"> Welcome {this.props.currentUser.username.toUpperCase()} </h2>
        <div className="profile-picture">
          <img className="profile-pic" src="https://images.unsplash.com/photo-1424878825877-7083ba5de185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" />
          <p className="signup-date">Member Since: {this.props.currentUser.signup_date.toLocaleString()} </p>
        </div>
        <div className="profile-posts">
          <h2>My Posts</h2>
          {/* render */}
          <PostList  posts={this.state.posts}/>
        </div>

      </div>
    )
  }
};

export default withRouter(ProfileContainer);
