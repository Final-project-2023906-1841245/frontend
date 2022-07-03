import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import UserLogin from './components/User/UserLogin.js';
import UserSignUp from './components/User/UserSignUp.js';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import EmployeeSignUp from './components/Employee/EmployeeSignUp';
import Cards from './components/Cards/Cards.js' ;


export default () => (
    <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/user" component={UserLogin} />
        <Route path="/usersignup" component={UserSignUp} />
        <Route path="/EmployeeLogin" component={EmployeeLogin} />
        <Route path="/EmployeeSignUp" component={EmployeeSignUp} />
    </Switch>
);
