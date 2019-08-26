import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../components/Home'
import ProfileContainer from '../components/Post/ProfileContainer';
import CitiesContainer from '../components/City/CitiesContainer';
import CityDetail from '../components/City/CityDetail';


// destructuring 
const Router = ({cities, currentUser, history, onNewPost }) => {

  return (
      <Switch>
        <Route exact path='/' component={ Home }/>

        <Route path='/users/:id' render={() => {
          if (currentUser) {
            return <ProfileContainer currentUser={currentUser}/> 
          } else {
            history.push('/')
          }
        } }/>

        {/* it needs use render because it is passing props   */}
        <Route exact path='/cities' render={() => <CitiesContainer cities={cities} />}/>
        {/* router listens to url change, this funtion passed to render, match property has info about params, pass it down  */}
        <Route exact path='/cities/:id' render={({ match }) => <CityDetail match={match} cities={cities} onNewPost={onNewPost}/>}/>
      </Switch>
  )
}


export default withRouter(Router)