import React from 'react';
import  Dashboard  from './Components/Dashboard';
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch,  } from "react-router-dom";
import { NewTask } from './Components/NewTask';
import {Home} from './Components/Home';
import { AuthState } from "./auth/authState";
import { AnonRoute } from "./Routes/AnonRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { Login } from './Components/Login';
import {Signup} from './Components/Signup';
import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if(token) tokenAuth(token)

function App() {

  return (
    <Router>
    <AuthState>
        <Switch component={App}>
          <Route exact path='/' component={Home}/>
          <AnonRoute exact path='/signup' component={Signup} />
          <AnonRoute exact path='/login' component={Login}/>
          <PrivateRoute exact path='/dashboard/:userId' data-test='dashboard-component' component={Dashboard}/>
          <PrivateRoute exact path='/create-task/:userId' data-test='dashboard-component' component={NewTask}/>
        </Switch>
    </AuthState>
    </Router>
  );
}

export default App;
