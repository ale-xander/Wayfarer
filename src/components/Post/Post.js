import React from 'react';



const Post = ({post:{title, content}}) => {
    return (
        <div>
            <h3>Your Posts:</h3>
            <p>Title:{title}</p>
            <p>Content:{content}</p>
        </div>
    )
}

export default Post