import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

// cityDetail request modal from App, App render modal, 
// AddPostModal rendered by App, onSubmit -> call addPost (function passed down by App) with newPost
function AddPostModal({ onCancel, addPost }) {
    return (
        <div className="modal-fade signup-modal" onClick={onCancel}>
            {/* stop event bubbling */}
            <div className="modal-window modal-dialog" role="document" onClick={(evt) => {evt.stopPropagation()}}> 
                {/* pass setCurrentUser to handleSubmit */}
                <form className="modal-form modal-content" onSubmit={(evt) => {
                    evt.preventDefault()
                    const newPost = {
                        title: evt.target.querySelector('#title').value,
                        content: evt.target.querySelector('#content').value,
                    }

                    addPost(newPost)
                }}  >
                    <h3 className="modal-text-center">New Post</h3>
                    <div className="input-group">
                        <label htmlFor="title">Title</label>
                        <input name="title" id="title"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="content">Content</label>
                        <input name="content" id="content" type="content"></input>
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

export default AddPostModal