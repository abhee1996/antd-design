
import React from 'react'
import {  Menu } from 'antd';
//import Router from './Routes';
import { Link } from 'react-router-dom';
const Navbar = ({isAuthenticated,admin}) => {
    //const [isAuthenticated, setisAuthenticated] = setState(false)
    // const authenticate= ()=>{
    //     isAuthenticated =true;
    // }
    // const getLoginStatus = ()=>{
    //     return isAuthenticated
    // }
    return (
        <>
      <Menu  className="header" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Contact</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
        <Menu.Item key="3">Services</Menu.Item>
{/*         
        {isAuthenticated ?(
        <>
        {!admin ?(
        <>
        <Menu.Item key="4"><Link to="/userprofile">Profile</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/usertable">User table</Link></Menu.Item>
        </>
        ):(
        <>
        <Menu.Item key="4"><Link to="/admindashboard">Dashboard</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/admintable">Admin Table</Link></Menu.Item>   
        </> 
         ) }
        </>
        ):(
     
            <>
            <Menu.Item key="4"><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/Register">Register</Link></Menu.Item>
            </>

        )} */}
        <Menu.Item key="4"><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/Register">Register</Link></Menu.Item>
      </Menu>
        </>
    )
}

export default Navbar
