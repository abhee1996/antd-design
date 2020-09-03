import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
//import AdminDashboard from '../admin/Dashboard';
import Layouts from '../Layout/Layouts';
//import AdminTable from '../admin/AdminTable';
import Profile from '../user/Profile';
//import Login from '../authentication/Login';
//import Register from '../authentication/Register';
//import PrivateRoutes from './PrivateRoutes'
//import PublicRoutes from './PublicRoutes'
//import UserTable from './../user/UserTable';

const Router =()=>{
    return(
        <>
            <Switch>
                    <Route exact path="/" component={Layouts}/>
                    {/* <Route path="/admindashboard" component={AdminDashboard} />
                    <PrivateRoutes path="/admintable" component={AdminTable} auth={auth}/> 
                    
                     <PrivateRoutes path="/usertable" component={UserTable} auth={auth}/> */}
                     <Route path="/userprofile" component={Profile} />
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Redirect to="/notfound" component={NotFound} />
            </Switch>
        </>
    )
}
export default Router



function NotFound(){
    return(
        <div>
           Page Not found
        </div>
    )
}
function Login(){
    return(
        <div>
           Page Login
        </div>
    )
}
function Register(){
    return(
        <div>
           Register Page 
        </div>
    )
}