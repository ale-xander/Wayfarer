import React from 'react';
import { Switch, Route, } from 'react-router-dom'
import Home from '../components/Home'
import ProfileContainer from '../components/Post/ProfileContainer';
import CitiesContainer from '../components/City/CitiesContainer';


// destructuring 
const Router = ({cities, currentUser}) => {

  return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        
        <Route path='/users/:id' render={() => <ProfileContainer currentUser={currentUser}/> }/>

        {/* it needs use render because it is passing props   */}
        <Route exact path='/cities' render={() => <CitiesContainer cities={cities} />}/>
      </Switch>
  )
}


export default Router