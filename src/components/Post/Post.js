import React from 'react';



const Post = ({post:{title, content, image}}) => {
    return (

        // <div>
        //     <h4>{title}</h4>
        //     <p>{content}</p>
        // </div>
        <div className="card post-card">
            <h5 className="card-header post-title">{ title }</h5>
            <div className="card-body post-content">
                <img src={ image } alt="" />
                <p className="card-text">{ content }</p>
                <button type="submit" className="post-edit-button post-update-buttons">Edit</button>
                <button type="submit" className="post-delete-button post-update-buttons">Delete</button>
                
            </div>

        </div>
    )
}

export default Post;