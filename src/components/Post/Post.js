import React from 'react';



const Post = ({post:{title, content}}) => {
    return (
        <div>
            <h4>Your Posts:</h4>
            <p>Title:{title}</p>
            <p>Content:{content}</p>
        </div>
    )
}

export default Post