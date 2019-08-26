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
    currentUser: null,
    showSignupModal: false,
    showLoginModal: false,
    showAddPostModal: false,
    modalCallback: null,
    cities: [],
  }

  // cityDetail request modal, App sents 
  addPost = (newPost) => {
    console.log('addPost: ', newPost)
    this.setState({
      showAddPostModal: false,
    })

    if (this.state.modalCallback) {
      this.state.modalCallback(newPost)
    }
  }

  // after App component mount 
  componentDidMount() {
    this.getAllCites()
  }

 //prompt user to login after singnup
  newUserRegistered = () => {
    console.log('clicked: ', this)
    this.setState({
      showSignupModal: false,
      showLoginModal: true
    })
  }

  // set currentUser after login
  setCurrentUser = (user) => {
    this.setState({ currentUser: user, showLoginModal:false });
    // user is an object, turn to a string to store
    localStorage.setItem('user', JSON.stringify(user));
    console.log(this.state)

    this.props.history.push(`/users/${user._id}`)
  }

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
            this.setState({ showLoginModal: true })
          }} 
          onSignUp={() => {
            console.log('signup')
            this.setState({ showSignupModal: true })
          }} 
          currentUser={this.state.currentUser}
        />

        
        { this.state.showSignupModal ? 
        <SignUpModal onCancel={()=>{this.setState({showSignupModal: false})}} newUserRegistered={this.newUserRegistered} /> ://
        undefined }

        { this.state.showLoginModal ? 
        <LoginModal onCancel={()=>{this.setState({showLoginModal: false})}} setCurrentUser={this.setCurrentUser}/> :
        undefined }

        { this.state.showAddPostModal ? 
        <AddPostModal onCancel={()=>{this.setState({showAddPostModal: false})}} addPost={this.addPost}/> :
        undefined }


        {/* Router is component */}
        {/* 
        passing to router for:
         cities -- cityContainer
        currentUser -- profileContainer
        onNewPost -- cityDetail
        */}
        <Router 
          cities={this.state.cities} 
          currentUser={this.state.currentUser} 
          onNewPost={(handleSubmit) => {
              this.setState({
                showAddPostModal: true,
                modalCallback: handleSubmit,
              })
            }}
          />


      </div>
    );
  }
}

export default withRouter(App);
