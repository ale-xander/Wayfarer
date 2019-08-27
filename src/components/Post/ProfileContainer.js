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


  // delete post function here, pass down postList, to post 
  // take an post id
  // axios call to delete 
  // on response, only log it out 
  // set state update posts array by using filter 


deletePost = (_id) => {
  console.log("deleting")
  console.log(_id)

  axios.delete(`${API_URL}/posts/${_id}`, { withCredentials: true })
  .then(res=>{console.log(res)})
  .catch(err=>{console.log(err)})

  const newPosts = this.state.posts.filter(post=>post._id!==_id)

  this.setState({posts: newPosts})

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
        <h2> Welcome {this.props.currentUser.username} </h2>

        {/* render */}
        <PostList  posts={this.state.posts} deletePost={this.deletePost}/>

      </div>
    )
  }
};

export default withRouter(ProfileContainer);
