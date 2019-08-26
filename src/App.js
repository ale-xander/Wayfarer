import React from 'react';
import NavBar from './components/NavBar';
import SignUpModal from './components/modals/SignUpModal'
import Router from './config/routes'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './constants';

import './App.css';
import LoginModal from './components/modals/LoginModal';
import AddPostModal from './components/modals/AddPostModal';

class App extends React.Component {
  state = {
    // if there is a user parse it otherwise null, turn string back to json object 
    // currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    currentUser: null,
    showSignupModal: false,
    showLoginModal: false,
    showAddPostModal: false,
    currentCityId: null,
    cities: []
  }

  addPost = (newPost) => {
    console.log(newPost)
    this.setState({
      showAddPostModal: false,
    })
  }

  // after App component mount 
  componentDidMount() {
    this.getAllCites()
  }


  newUserRegistered = () => {
    console.log('clicked: ', this)
    this.setState({
      showSignupModal: false,
      showLoginModal: true
    })
  }


  setCurrentUser = (user) => {
    this.setState({ currentUser: user, showSignupModal:false });
    // user is an object, turn to a string to store
    localStorage.setItem('user', JSON.stringify(user));
    console.log(this.state)

    this.props.history.push(`/users/${user._id}`)
  };

  // grab all cities from database
  getAllCites = () => {
    axios.get(`${API_URL}/cities`, { withCredentials: true })
      .then(res=> {
        console.log(res.data)
        this.setState({cities: res.data})
        console.log(this.state)
      })
      .catch(err=>console.log(err))
  }


  render() {
    return (


      
      <div className="App">
        <NavBar 
          onLogin={() => {
            console.log('login')
            this.setState({ showSignupModal: true })
          }} 
          onSignUp={() => {
            console.log('signup')
            this.setState({ showSignupModal: true })
          }} 
          currentUser={this.state.currentUser}
        />



        {/* ternary operator */}
        { this.state.showSignupMoal ? 
        <SignUpModal onCancel={()=>{this.setState({showSignupMoal: false})}} newUserRegistered={this.newUserRegistered} /> ://
        undefined }

        { this.state.showSignupModal ? 
        <LoginModal onCancel={()=>{this.setState({showSignupModal: false})}} setCurrentUser={this.setCurrentUser}/> :
        undefined }

        { this.state.showAddPostModal ? 
        <AddPostModal cityId={this.state.currentCityId} onCancel={()=>{this.setState({showAddPostModal: false})}} addPost={this.addPost}/> :
        undefined }

        {/* Using component without < /> */}
        {/* { router } */}

        {/* Router is component should be used as such */}
    
      {/* passing cities, currentUser down to Router */}
        <Router 
        cities={this.state.cities} 
        currentUser={this.state.currentUser} 
        onNewPost={(cityId) => {
            console.log('new post')
            this.setState({
              currentCityId: cityId,
              showAddPostModal: true
            })
          }} />


      </div>
    );
  }
}

export default withRouter(App);
