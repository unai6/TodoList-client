import React from 'react';
import  Dashboard  from './Components/Dashboard';
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch,  } from "react-router-dom";
import { NewTask } from './Components/NewTask';
import {Home} from './Components/Home';

function App() {
  return (
    <Router>
        <Switch component={App}>
          <Route exact path='/' component={Home}/>
          <Route exact path='/dashboard/:userId' data-test='dashboard-component'  component={Dashboard}/>
          <Route exact path='/create-task/:userId' data-test='dashboard-component'  component={NewTask}/>
        </Switch>

    </Router>
  );
}

export default App;
