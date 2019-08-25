import React from 'react';
import { Switch, Route, } from 'react-router-dom'
import Home from '../components/Home'
import PostContainer from '../components/Post/PostContainer';
import CitiesContainer from '../components/City/CitiesContainer';


// destructuring 
const Router = ({cities, currentUser}) => {

  return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        {/* <Route path='/users/:id' component={PostContainer}/> */}
        <Route path='/users/:id' render={() => <PostContainer currentUser={currentUser}/> }/>

        {/* it needs use render because it is passing props   */}
        <Route exact path='/cities' render={() => <CitiesContainer cities={cities} />}/>
      </Switch>
  )
}


export default Router