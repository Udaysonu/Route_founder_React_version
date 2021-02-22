import React, { Component } from 'react';
import "../componentsCss/NavBar.css" 
import {BrowserRouter as Router,Link,useHistory} from 'react-router-dom'

function NavBar(props)  {
   var state = {  }
   var history=useHistory();
   function logout(e)
   {
       console.log("called")
       history.push("/signin");
   }
   
        return (  
            <React.Fragment >
            <nav class="header_nav">
                <span>goBIGgo</span>
                
                    <span class="left_nav" id="left_nv">
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                        </a>
                        <a class="nav_link" href="/user/routesearch"> 
                            <span ><Link className="hover_span"  to={'/'}>Home</Link></span> </a>
                            {props.user[0]!=null ?
                           <span> <a class="nav_link" ><span class="hover_span">Bookings</span></a>
                                                      {(props.user[0]!=null && props.user[0].email=="udaysonubakka123@gmail.com") && <a class="nav_link"><span class="hover_span btn_link_red"><Link className="hover_span" to={'/dashboard'} >Dashboard</Link></span></a>}

                            <a class="nav_link" ><span class="hover_span">Customer Care</span></a>
 
                            <a class="nav_link"  >  <span class="hover_span">{props.user[0]!=null ?props.user[0].name:"false"} Profile</span></a>

                            <a class="nav_link" type="button" ><span class="hover_span btn_link_red"  ><Link  className="hover_span">Log Out</Link></span></a>
                              </span>      :<span>
                            <a class="nav_link"><span class="hover_span btn_link_red"><Link className="hover_span" to={'/signin'} >Sign In</Link></span></a>

                            <a class="nav_link"><span class="hover_span btn_link_red"><Link className="hover_span" to={'/signup'} >Sign Up</Link></span></a>
                            </span>}
                        
                    </span>
                 
            </nav>
            </React.Fragment>
        );
        function callme()
        {
            console.log("welcome")
        }
    
}
export default NavBar;