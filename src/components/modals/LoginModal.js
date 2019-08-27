import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

const handleSubmit = (evt, setCurrentUser, history) => {
    evt.preventDefault()
    console.log('submitting login')
    console.log(evt.target)

    const user = {
        email: evt.target.querySelector('#email').value,
        password: evt.target.querySelector('#password').value,
    }

    console.log(user)

    axios.post(`${API_URL}/auth/login`, user, { withCredentials: true }) // ask for authentications and authorization, tells server we have cookies
    .then(res => {
      console.log('logging user')
      console.log(res);
      console.log(res.data._id);
      // set currentUser, get updated to the app level, so all children knows this user is logged in
      // server will set back the user id 
      setCurrentUser(res.data);
    //   console.log('history: ', history)
    //   history.push(`/users/${res.data._id}`)

    })
    .catch(err => {
      console.log(err);
    //   this.setState({ error: err.response.data.message });
    });

}




function LoginModal({ onCancel, setCurrentUser, history}) {
    return (
        // <div className="modal-background signup-modal" onClick={onCancel}>
        //     <div className="modal-window" onClick={(evt) => {evt.stopPropagation()}}>
        //         <form className="modal-form" onSubmit={(evt) => {handleSubmit(evt, setCurrentUser)}}>
        //             <h3>Login</h3>
        //             <div className="input-group">
        //                 <label htmlFor="email">Email</label>
        //                 <input name="email" id="email" type="email"></input>
        //             </div>
        //             <div className="input-group">
        //                 <label htmlFor="password">Password</label>
        //                 <input name="password" id="password" type="password"></input>
        //             </div>
        //             <div className="modal-form-footer">
        //                 <button className="modal-btn" type="submit">Submit</button>
        //                 <button className="modal-btn" type="button" onClick={onCancel}>Cancel</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div className="modal-fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={onCancel}>
            <div className="modal-window modal-dialog" role="document" onClick={(evt) => {evt.stopPropagation()}}>
                <form className="modal-form modal-content" onSubmit={(evt) => {handleSubmit(evt, setCurrentUser)}}>
                    <h3 className="modal-text-center">Login</h3>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="password"></input>
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

export default LoginModal