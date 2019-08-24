import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CitysList from '../components/Aside/CitiesList'


export default (
    <Switch>
        <Route exact path='/cities' component={CitysList} />
    </Switch>
)