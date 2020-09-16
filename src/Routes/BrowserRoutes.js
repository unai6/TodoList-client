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


export function BrowserRoutes(props) {
    const token = localStorage.getItem('token');

    if (token) tokenAuth(token)

    return (
        <Router>
            <AuthState>
                <Switch>              
                    <AnonRoute path="/" exact component={Home} />
                    <AnonRoute path="/signup" component={Signup} />
                    <AnonRoute path="/login" component={Login} />
                    <PrivateRoute path="/dashboard/:userId" component={Dashboard} />
                    <PrivateRoute path='/create-task/:userId' component={NewTask} />
                </Switch>
            </AuthState>
        </Router>
    )
}


export default BrowserRoutes;





// import SideBar from '../Components/SideBar'

// const routes = [

//     {
//         path: "/",
//         component: Home,
//         exact: true,

//     },

//     {
//         path: "/login",
//         component: Login,
//         exact: true,

//     },
//     {
//         path: "/signup",
//         component: Signup,
//         exact: true,

//     },
//     {
//         path: "/dashboard/:userId",
//         component: Dashboard,
//         exact: true,

//     },
//     {
//         path: "/create-task/:userId",
//         component: NewTask,
//         exact: true,

//     },
// ];

// export default routes