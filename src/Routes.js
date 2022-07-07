import React from "react";
import { Route, Switch } from "react-router-dom";
import UserLogin from "./components/User/UserLogin.js";
import UserSignUp from "./components/User/UserSignUp.js";
import EmployeeLogin from "./components/Employee/EmployeeLogin";
import EmployeeSignUp from "./components/Employee/EmployeeSignUp";
import Cards from "./components/Cards/Cards.js";

export default () => (
<<<<<<< HEAD
    <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/usersignup" component={UserSignUp} />
        <Route path="/employeelogin" component={EmployeeLogin} />
        <Route path="/employeesignup" component={EmployeeSignUp} />
    </Switch>
=======
  <Switch>
    <Route exact path="/" component={Cards} />
    <Route path="/userlogin" component={UserLogin} />
    <Route path="/usersignup" component={UserSignUp} />
    <Route path="/employeelogin" component={EmployeeLogin} />
    <Route path="/employeesignup" component={EmployeeSignUp} />
  </Switch>
>>>>>>> 54b36e1b8596184651f97945ab71182ed680a432
);
