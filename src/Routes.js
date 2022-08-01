import React from "react";
import { Route, Switch } from "react-router-dom";
import UserLogin from "./components/User/UserLogin.js";
import UserSignUp from "./components/User/UserSignUp.js";
import EmployeeLogin from "./components/Employee/EmployeeLogin";
import EmployeeSignUp from "./components/Employee/EmployeeSignUp";
import Cards from "./components/Cards/Cards.js";
import EmployeeWorks from "./components/Employee/EmployeeWorks.js";
import UserPrincipalPage from "./components/User/UserPrincipalPage";
import EmployeePrincipalPage from "./components/Employee/EmployeePrincipalPage.js";


export default () => (
    <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/usersignup" component={UserSignUp} />
        <Route path="/userprincipalpage" component={UserPrincipalPage} />
        <Route path="/employeelogin" component={EmployeeLogin} />
        <Route path="/employeesignup" component={EmployeeSignUp} />
        <Route path="/employeeworks" component={EmployeeWorks} />
        <Route path="/employeeprincipalpage" component={EmployeePrincipalPage} />
    
    </Switch>
);
