import axios from 'axios';
import React, { Component } from 'react';
import BookingBlock from "./bookingBlock.js";
import "../componentsCss/orderDashboard.css"
class DashboardBooking extends Component {
    state = {bookings:[ ],
    token:null  }
    render() {

        return ( <div class="booking_background">
       
             {/* {this.state.bookings[0].createdAt} */}
        {this.state.bookings.map(booking=>{return <BookingBlock booking={booking}/>})}
             
    </div> );
    }
    componentDidMount=()=>{
        this.state.token = JSON.parse(window.localStorage.getItem( 'token' )) || null;
        console.log('booing dashboard mounted')
        axios.post("http://localhost:8000/book/allbooking",{ headers: {
            'Authorization':this.state.token
          }}).then(res=>{
              console.log("entered",res.data);
                this.state.bookings=res.data.bookings;
                console.log(this.state.bookings)
                this.setState({})
          }).catch(err=>console.log(err))
          
           
    }
}

export default DashboardBooking;