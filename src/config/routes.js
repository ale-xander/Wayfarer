import React from 'react';
import { Switch, Route, } from 'react-router-dom'
import Home from '../components/Home'
import PostContainer from '../components/Post/PostContainer';
import CitiesContainer from '../components/City/CitiesContainer';


// destructuring 
const Router = ({cities}) => {

  return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/users/:id' component={PostContainer}/>
        <Route exact path='/cities' render={() => <CitiesContainer cities={cities} />}/>
      </Switch>
  )
}


export default Router