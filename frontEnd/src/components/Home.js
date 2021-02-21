import React, { Component } from 'react';
import "../componentsCss/home.css" 
import SearchBlock from "../components/SearchBlock"
class Home extends Component {
    state = {  }
    render() { 
        return ( 

<main class="full_screen">
  
  <div class='outer outer-r b-r' class='inline' style={{height:'auto'}}>
  
  <div class='container container-r b-r dd bootstrap-iso'>
   
      <form onSubmit={this.props.searchhandler}>
          <div class='input inline inline-r '> 
            <select required class="input_tag pad" name='source'>
              <option> Agra</option>
              <option>Amaravati</option>
              <option> Amritsar</option>
              <option> Banglore </option>
              <option>Bhopal</option>
              <option>Chennai</option>
              <option> Delhi </option>
              <option>Guwahati</option>
              <option>  Hyderabad</option>
              <option>Jaipur</option>
              <option>Kochi</option>
              <option>Mumbai</option>
              <option>Srinagar</option>
              <option>Vishakhapatanam</option>
  
          </select></div>
          
          <div class='input inline inline-r'> 
          <select required class="input_tag pad" name='destination'>
            <option> Agra</option>
            <option>Amaravati</option>
            <option> Amritsar</option>
            <option> Banglore </option>
            <option>Bhopal</option>
            <option>Chennai</option>
            <option> Delhi </option>
            <option>Guwahati</option>
            <option>  Hyderabad</option>
            <option>Jaipur</option>
            <option>Kochi</option>
            <option>Mumbai</option>
            <option>Srinagar</option>
            <option>Vishakhapatanam</option>
          </select></div>
          <br/>
  
          <div class='input inline inline-r'><span style={{color:"black"}}>Date:</span> <input required type="date" name="date" min="2020-10-15" max="2020-11-20" id="datepicker"/></div>
  
         <div class='input inline' >
          <button type="submit"  class="btn_ pad">Search</button>
         </div>
      </form>
      
      </div>
      
  
  </div>
  <div class="search_details_card sticky">
      <div class="details_table ">
        <div> Start Time         </div>
        <div>  End Time       </div>
        <div>  Travel Time      </div>
        <div>   Distance       </div>
        <div>   Cost       </div>
        <div>No of Passengers</div>
        <div>    Book Now !    </div>
      </div>
    </div>
    {this.props.paths.length!=0 && this.props.paths.map((path)=><SearchBlock path={path} />)}

  </main>
         );
    }
}
 
export default Home;