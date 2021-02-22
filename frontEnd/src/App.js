import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
// import background from "/aeroplane2.jpg"
import {BrowserRouter, BrowserRouter as Router,Link,Redirect,useHistory} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import SignIn from "./components/SignIn.js"
import SignUp from "./components/SignUp.js"
import Home from "./components/Home.js"
import Dashboard from "./components/dashboard.js"
import axios from 'axios';
import {browserHistory} from 'react-router'
// import { checkAuth } from '../../backEnd/controllers/userController';
class App extends Component {
       state={
      user: null,
      paths:[]
    }
   
   
 render(){


  return (
   
    <React.Fragment >

      <Router>
      <NavBar   user={[this.state.user]} logout={this.logout} />
         <Route path="/" exact={true} render={
           ()=>{
             if(this.state.user==null)
             {
               return  <SignIn checkC={this.checkCredentials}/>;
             }
             return <Home  searchhandler={this.searchhandler} paths={this.state.paths} />
                }} />
         <Route path="/dashboard" exact={true} render={
           ()=>{
             if(this.state.user==null)
             {
               return  <SignIn checkC={this.checkCredentials}/>;
             }
             return <Dashboard  searchhandler={this.searchhandler} paths={this.state.paths} />
                }} />
         <Route path="/signin" exact={true} render={
            ()=>{
              if(this.state.user!=null){
                return <Home searchhandler={this.searchhandler} paths={this.state.paths}/>
              }
             return <SignIn checkC={this.checkCredentials}/>}
            }/>

         <Route path="/signup" exact={true} render={
            ()=>{
              if(this.state.user!=null){
                return <Home searchhandler={this.searchhandler} paths={this.state.paths}/>
              }
              return <SignUp createU={this.createUser}/>
              }

              }/>

        

      </Router>
    </React.Fragment>
  )
 }


 checkCredentials=(e,cb)=>
 {
   e.preventDefault();   
  //  console.log(e.target.email.value);
    axios.post("http://localhost:8000/user/signin",{email:e.target.email.value,password:e.target.password.value}).then(res=>{
      console.log(res.data,this.state.user,"************");
      this.state.user=res.data.user;
    this.setState({})
    console.log("----------coorect")
    // cb();
    }).catch(err=>{
      console.log("error occured",err);
      return false;
    })
    
 
     
 }


  


 createUser=(e,cb)=>
 {
   e.preventDefault();
   console.log(e.target.re_password.value,"*********************************************************")

   axios.post("http://localhost:8000/user/signup",{email:e.target.email.value,
   password:e.target.password.value,
   name:e.target.name.value,
   mobile:e.target.mobile.value,
   re_password:e.target.re_password.value})
   .then(res=>{
     console.log(res.data)
    if(res.data.isavailable==true)
    {
     console.log('createduser');
       cb()
    }
 
    console.log("unable to create user");
  })

 }


 searchhandler=(e)=>
 {
  e.preventDefault();
  console.log(e.target.source.value,e.target.destination.value)
  axios.post("http://localhost:8000/algo/path",{source:e.target.source.value,destination:e.target.destination.value}).then(res=>{
  this.state.paths=res.data
  this.setState({})
  console.log(this.state.paths.length)
  })
  // console.log(e.target.source.value,e.target.destination.value)
 }
 
 logoutHandler=(e,cb)=>
 {
   console.log("logout called")
  axios.get("http://localhost:8000/user/logout").then(e=>{
  cb();
  })
 }

}
 
export default App;