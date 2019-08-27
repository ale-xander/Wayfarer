import React from 'react'
import Post from './Post'

function PostList({posts, deletePost}) {

    let showPost = posts.map((post) => {
        return (
            <Post 
            key={post._id}
            post={post}
            deletePost={deletePost}/>
        )
    })

    return (
        <ul>
          {showPost }
        </ul>
      );

}

export default PostList

