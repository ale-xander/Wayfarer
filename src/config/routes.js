import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import PostContainer from '../components/Post/PostContainer';
// import TodosContainer from '../containers/TodosContainer'

export default (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/users/:id' component={ PostContainer }/>
      </Switch>
)