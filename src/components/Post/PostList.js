import React from 'react'
import Post from './Post'

function PostList({posts}) {

    let showPost = posts.map((post) => {
        return (
            <Post 
            key={post._id}
            post={post}/>
        )
    })

    return (
        <ul>
          {showPost }
        </ul>
      );

}

export default PostList

