import React from "react";
import { NewTask } from '../Components/NewTask';
import Dashboard from '../Components/Dashboard';
import { Home } from '../Components/Home';
import { Login } from '../Components/Login';
import { Signup } from '../Components/Signup';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthState } from "../auth/authState";
import { AnonRoute } from "./AnonRoute";
import { PrivateRoute } from "./PrivateRoute";
import tokenAuth from '../config/token';
import AllTasks from "../Components/AllTasks";
import PendingTasks from "../Components/PendingTasks";
import CompletedTasks from "../Components/CompletedTasks";
import Nav from '../Components/Nav'
import SideBar from '../Components/SideBar';
import ImportantTasks from "../Components/ImportantTasks";

export function BrowserRoutes() {
    const token = localStorage.getItem('token');
    if (token) tokenAuth(token)

    return (
        <Router>
            <AuthState>
                <div>
                    {
                        token ? <Nav /> : null
                    }
                    <div>

                        {
                            token ? <SideBar /> : null
                        }
                        <div>
                            <Switch>
                                <AnonRoute path="/" exact component={Home} />
                                <AnonRoute path="/signup" component={Signup} />
                                <AnonRoute path="/login" component={Login} />
                                <PrivateRoute path="/dashboard/:userId" component={Dashboard} />
                                <PrivateRoute path='/create-task/:userId' component={NewTask} />
                                <PrivateRoute path='/:userId/alltasks' component={AllTasks} />
                                <PrivateRoute path='/:userId/pendingTasks' component={PendingTasks} />
                                <PrivateRoute path='/:userId/completedTasks' component={CompletedTasks} />
                                <PrivateRoute path='/:userId/importantTasks' component={ImportantTasks} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </AuthState>
        </Router>
    )
}

export default BrowserRoutes;

