import React from 'react';
import NavBar from './components/NavBar';
import routes from './config/routes'



import './App.css';

function SignUpModal({ onCancel }) {
  console.log('render signup')
  return (
    <div className="modal signup-modal" onClick={onCancel}></div>
  )
}

class App extends React.Component {
  state = {
    isSignUpClicked: false
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
