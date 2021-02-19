import React, { Component } from 'react';
import "../componentsCss/NavBar.css" 
import {BrowserRouter as Router,Link} from 'react-router-dom'

class NavBar extends Component {
    state = {  }
    render(){ 
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
                            <a class="nav_link" ><span class="hover_span">Bookings</span></a>
                            <a class="nav_link" ><span class="hover_span">Customer Care</span></a>

                            <a class="nav_link"  ><img style={{width:'20px' ,height: '20px'}} src="<%=user.avatar%>"/>  <span class="hover_span">Update Profile</span></a>
                            <a class="nav_link"><span class="hover_span btn_link_red"><Link className="hover_span" to={'/signin'} >Sign In</Link></span></a>

                            <a class="nav_link"><span class="hover_span btn_link_red"><Link className="hover_span" to={'/signup'} >Sign Up</Link></span></a>
                        
                    </span>
                 
            </nav>
            </React.Fragment>
        );
    }
}
export default NavBar;