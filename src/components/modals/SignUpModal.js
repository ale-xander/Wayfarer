import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';


const handleSubmit = (evt, newUserRegistered) => {
    evt.preventDefault()
    console.log('submitting signup')
    console.log(evt.target)

    const user = {
        username: evt.target.querySelector('#username').value,
        email: evt.target.querySelector('#email').value,
        password: evt.target.querySelector('#password').value,
        password2: evt.target.querySelector('#password2').value,
    }

    console.log(user)

    axios.post(`${API_URL}/auth/register`, user, { withCredentials: true }) // ask for authentications and authorization, tells server we have cookies
    .then(res => {
      console.log('creating user')
      console.log(res);
      newUserRegistered()
    })
    .catch(err => {
      console.log(err);
    //   this.setState({ error: err.response.data.message });
    });

}




function SignUpModal({ onCancel, newUserRegistered}) {
    return (
        <div className="modal-background signup-modal" onClick={onCancel}>
            {/* stop event bubbling */}
            <div className="modal-window" onClick={(evt) => {evt.stopPropagation()}}> 
                {/* pass setCurrentUser to handleSubmit */}
                <form className="modal-form" onSubmit={(evt) => handleSubmit(evt, newUserRegistered)}  >
                    <h3>Sign up</h3>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input name="username" id="username"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="password"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password2">Confirm password</label>
                        <input name="password2" id="password2" type="password"></input>
                    </div>
                    <div className="modal-form-footer">
                        <button className="modal-btn" type="submit">Submit</button>
                        <button className="modal-btn" type="button" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpModal