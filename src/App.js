import React from 'react';
import './App.less';
import Layouts from './Layout/Layouts'
//import Navbar from './routes/Navbar'
import Router from './routes/Router'

export default class App extends React.Component {
  
render() {
    return (
      <>
        {/* <Navbar/> */}
         <Router/> 
         {/* <Layouts/>  */}
     </>
  
    );
  }
}
















