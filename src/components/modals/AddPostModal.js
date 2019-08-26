import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';


const handleSubmit = (evt, addPost, cityId) => {
    evt.preventDefault()
    console.log('submitting signup')
    console.log(evt.target)

    const newPost = {
        title: evt.target.querySelector('#title').value,
        content: evt.target.querySelector('#content').value,
        cityId: cityId,
    }

    console.log(newPost)

    axios.post(`${API_URL}/posts`, newPost, { withCredentials: true }) // ask for authentications and authorization, tells server we have cookies
        .then(res => {
            console.log('creating post')
            console.log(res);
            addPost(res.data);
        })
        .catch(err => {
            console.log(err);
            //   this.setState({ error: err.response.data.message });
        });

}




function AddPostModal({ onCancel, addPost, cityId }) {
    console.log('cityId: ', cityId)
    return (
        <div className="modal-background signup-modal" onClick={onCancel}>
            {/* stop event bubbling */}
            <div className="modal-window" onClick={(evt) => {evt.stopPropagation()}}> 
                {/* pass setCurrentUser to handleSubmit */}
                <form className="modal-form" onSubmit={(evt) => handleSubmit(evt, addPost, cityId)}  >
                    <h3>Create Post</h3>
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