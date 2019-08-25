import React from 'react';
import NavBar from './components/NavBar';
import SignUpModal from './components/modals/SignUpModal'
import Router from './config/routes'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import LoginModal from './components/modals/LoginModal';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('uid'),
    // currentUser: null,
    showSignupMoal: false,
    showSignupModal: false
  }


  newUserRegistered = () => {
    console.log('clicked: ', this)
    this.setState({
      showSignupMoal: false,
      showSignupModal: true
    })
  }


  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId, showSignupModal:false });
    localStorage.setItem('uid', userId);
    console.log(this.state)

    this.props.history.push(`/users/${userId}`)
  };


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
        />

        {/* Using component without < /> */}
        {/* { router } */}

        {/* Router is component should be used as such */}
        <Router />

        {/* ternary operator */}
        { this.state.showSignupMoal ? 
        <SignUpModal onCancel={()=>{this.setState({showSignupMoal: false})}} newUserRegistered={this.newUserRegistered} /> ://
        undefined }

        { this.state.showSignupModal ? 
        <LoginModal onCancel={()=>{this.setState({showSignupModal: false})}} setCurrentUser={this.setCurrentUser}/> :
        undefined }

      </div>
    );
  }
}

export default withRouter(App);
