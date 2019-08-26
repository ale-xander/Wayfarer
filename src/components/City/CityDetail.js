import React, { Component } from 'react';
import PostList from '../Post/PostList'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../constants';
import CitiesContainer from "./CitiesContainer"

class CityDetail extends Component {
    state = {
        name: "",
        image: "",
        description: "",
        posts: []
    }

  // grab the city detail from database
  getDetail = (id) => {
    console.log('id: ', id)
    axios.get(`${API_URL}/cities/${id}`, { withCredentials: true })
    .then(res=> {
        console.log('city', res.data)
        this.setState({
            name: res.data.name,
            image: res.data.image,
            description: res.data.description,
        })
        console.log(this.state)
    })
    .catch(err=>console.log(err))
}



  // grab all posts from database
  getPosts = (id) => {
        console.log('id: ', id)
        axios.get(`${API_URL}/posts/cityposts/${id}`, { withCredentials: true })
        .then(res=> {
            console.log('city posts: ', res.data)
            this.setState({posts: res.data})
            console.log(this.state)
        })
        .catch(err=>console.log(err))
  }


  componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
        // grab the params from match
        this.getPosts(this.props.match.params.id)
        this.getDetail(this.props.match.params.id)
    }
    console.log('city detail: ', this.props)
  }


  render() {
    return (
      <div>
          <section className="city-content">
                <h2>{this.state.name}</h2>
                <p>{this.state.description}</p>
                <img src={this.state.image} alt={this.state.name} className="city-banner"/>
          </section>
          <PostList posts={this.state.posts} />
          <CitiesContainer cities={this.props.cities}/>

      </div>
    )
  }
};

export default withRouter(CityDetail);
