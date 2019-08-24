import React from 'react';

function LoginModal({ onCancel }) {
    return (
        <div className="modal-background signup-modal" onClick={onCancel}>
            <div className="modal-window" onClick={(e) => {e.stopPropagation()}}>
                <form className="modal-form" onSubmit={(e) => {console.log('submit'); e.preventDefault();}}>
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