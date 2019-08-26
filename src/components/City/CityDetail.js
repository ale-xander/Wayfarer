import React, { Component } from 'react';
import PostList from '../Post/PostList'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../constants';
import CitiesContainer from "./CitiesContainer"

class CityDetail extends Component {
    state = {
        id: null,
        name: "",
        image: "",
        description: "",
        posts: []
    }

    showAddPostModal() {

    }

    // grab the city detail from database
    getDetail = (id) => {
        console.log('id: ', id)
        axios.get(`${API_URL}/cities/${id}`, { withCredentials: true })
            .then(res=> {
                console.log('city', res.data)
                this.setState({
                    id: id,
                    name: res.data.name,
                    image: res.data.image,
                    description: res.data.description,
                })
                console.log('city state: ', this.state)
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
                console.log('city posts state: ', this.state)
            })
            .catch(err=>console.log(err))
    }

    // update everytime new props -- new city id
    componentWillReceiveProps(newProps) {
        if (newProps.match && newProps.match.params.id && newProps.match.params.id !== this.state.id) {
            console.log('new props')
            // grab the params from match
            this.getPosts(newProps.match.params.id)
            this.getDetail(newProps.match.params.id)
        }
        console.log('city detail: ', newProps)
    }


    render() {
        return (
            <div className='city-detail-wrapper'>
                <section className="city-content">
                    <div className="city-info">
                        <h2>{this.state.name}</h2>
                        <img src={this.state.image} alt={this.state.name} className="city-banner"/>
                        <button onClick={ () => this.props.onNewPost(this.state.id) }>Add Post</button>
                        <p>{this.state.description}</p>
                    </div>
                    <PostList posts={this.state.posts} />
                </section>
          
                <CitiesContainer className="city-sidebar" cities={this.props.cities}/>

            </div>
        )
    }
};

export default withRouter(CityDetail);
