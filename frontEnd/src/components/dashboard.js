import React, { Component } from 'react';
import "../componentsCss/dashboard.css"
class Dashboard extends Component {
    state = {  }
    render() { 
        return (
            <div id="outer_screen">
               
                <div class="dashboard_control" ><a href="/dashboard/bookings"> <img class="dash_image"  src="/bookings.png"/><div class="middle"> <div class="text">Bookings</div> </div>  </a>    </div>
                <div class="dashboard_control"><a href="/cc/chatroom"><img class="dash_image" src="/chat.png"/>    <div class="middle"> <div class="text">Chat Room</div> </div>    </a></div>
                <div class="dashboard_control">   <a href="/dashboard/flightroutes"> <img class="dash_image" src="/road.png" />       <div class="middle"> <div class="text">Show Flight Paths</div> </div>         </a>   </div>
                <div class="dashboard_control">  <a href="/dashboard/allusers/"> <img class="dash_image" src="/users.png"/ >          <div class="middle"> <div class="text">Users Controller</div> </div>          </a></div>
                <div class="dashboard_control">  <a href="/dashboard/addpath"><img class="dash_image" src="/more.png"/ >         <div class="middle"> <div class="text">Add New Flight Path</div> </div>                   </a></div>
                <div class="dashboard_control">  <a href='/dashboard/update_path'><img class="dash_image" src="/loop.png" ></img>          <div class="middle"> <div class="text">Update Flight Path</div> </div></a>            </div>

            </div>
          );
    }
}
 
export default Dashboard;