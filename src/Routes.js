import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import UserLogin from './components/User/UserLogin.js'
import Cards from './components/Cards/Cards.js' 

export default () => (
    <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/user" component={UserLogin} />
    </Switch>
);
