import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
// import background from "/aeroplane2.jpg"
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import SignIn from "./components/SignIn.js"
import SignUp from "./components/SignUp.js"
import Home from "./components/Home.js"


function App() {
  return (
   
    <React.Fragment >
     
     
      <Router>
      <NavBar/>
         <Route path="/" exact={true} render={
           ()=>{
             return <Home/>
                }} />

         <Route path="/signin" exact={true} render={
            ()=>{
             return <SignIn/>}
            }/>

         <Route path="/signup" exact={true} render={
            ()=>{
              return <SignUp/>
              }}/>

        

      </Router>
    </React.Fragment>
  );
}

export default App;
