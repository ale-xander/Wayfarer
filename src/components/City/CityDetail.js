import React, { Component } from 'react';
import PostList from '../Post/PostList'
import { withRouter } from "react-router-dom";
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

    // grab the city detail from database
    getDetail = (id) => {
        console.log('getDetail id: ', id)
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
            .catch(err => console.log(err))
    }

    handleSubmit = (newPost) => {
        console.log('submitting new post')
        newPost.cityId = this.state.id
        console.log(newPost)
    
        axios.post(`${API_URL}/posts`, newPost, { withCredentials: true }) // ask for authentications and authorization, tells server we have cookies
            .then(res => {
                console.log('creating post')
                console.log(res);
                this.setState({
                    posts: [ res.data, ...this.state.posts ],
                });
            })
            .catch(err => {
                console.log(err);
                // this.setState({ error: err.response.data.message });
            });
    
    }

    // grab all posts from database
    getPosts = (id) => {
        console.log('getPosts id: ', id)
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
        console.log('component: ', newProps)
        if (newProps.match && newProps.match.params.id && newProps.match.params.id !== this.state.id) {
            console.log('new props')
            // grab the params from match
            this.getPosts(newProps.match.params.id)
            this.getDetail(newProps.match.params.id)
        }

        console.log('city detail: ', newProps)
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params.id && this.props.match.params.id !== this.state.id) {
            this.getPosts(this.props.match.params.id)
            this.getDetail(this.props.match.params.id)
        }
    }


    render() {
        return (
            <div className='city-detail-wrapper'>
                <section className="city-content">
                    <div className="city-info">
                        <h2>{this.state.name}</h2>
                        <img src={this.state.image} alt={this.state.name} className="city-banner"/>
                        <button onClick={ () => this.props.onNewPost(this.handleSubmit) }>Add Post</button>
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
