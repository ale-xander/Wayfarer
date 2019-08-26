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



// destructuring 
// function CitiesContainer({cities}) {
//     console.log(cities)
    
//       let showAllCities = cities.map((city) => {
//         return (
//           <City 
//           key={city._id}
//           city={city}/>
//         );
//       });
    
//       return (
//         <ul>
//           {showAllCities }
//         </ul>
//       );
// }

// export default CitiesContainer;
