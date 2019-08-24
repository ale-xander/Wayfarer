import React from 'react';
import NavBar from './components/NavBar';
import SignUpModal from './components/modals/SignUpModal'
import routes from './config/routes'

import './App.css';

class App extends React.Component {
  state = {
    isSignUpClicked: false,
    isLoginClicked: false
  }

  render() {
    return (
      <div className="App">
      <NavBar onLogin={() => console.log('login')} onSignUp={() => {
        console.log('signup')
        this.setState({ isSignUpClicked: true })
      }} />

      { routes }

      {/* ternary operator */}
      { this.state.isSignUpClicked ? <SignUpModal onCancel={()=>{this.setState({isSignUpClicked: false})}} /> : undefined }

      </div>
    );
  }
}

export default App;
