import React from 'react';
import NavBar from './components/NavBar';
import SignUpModal from './components/modals/SignUpModal'
import routes from './config/routes'

import './App.css';
import LoginModal from './components/modals/LoginModal';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('uid'),
    // currentUser: null,
    showSignupMoal: false,
    showLoginMoal: false
  }


  newUserRegistered = () => {
    console.log('clicked: ', this)
    this.setState({
      showSignupMoal: false,
      showLoginMoal: true
    })
  }


  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
    console.log(this.state)
  };


  render() {
    return (
      <div className="App">
      <NavBar 
        onLogin={() => {
          console.log('login')
          this.setState({ showLoginMoal: true })
        }} 
        onSignUp={() => {
          console.log('signup')
          this.setState({ showSignupMoal: true })
        }} 
      />

      { routes }

      {/* ternary operator */}
      { this.state.showSignupMoal ? 
      <SignUpModal onCancel={()=>{this.setState({showSignupMoal: false})}} newUserRegistered={this.newUserRegistered} /> ://
       undefined }

      { this.state.showLoginMoal ? 
      <LoginModal onCancel={()=>{this.setState({showLoginMoal: false})}} setCurrentUser={this.setCurrentUser} /> :
       undefined }

      </div>
    );
  }
}

export default App;
