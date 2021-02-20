import React, { Component } from 'react';
import "../componentsCss/home.css" 

class Home extends Component {
    state = {  }
    render() { 
        return ( 

<main class="full_screen">
  
  <div class='outer outer-r b-r' class='inline' style={{height:'auto'}}>
  
  <div class='container container-r b-r dd bootstrap-iso'>
   
      <form action='/algo/path' method='post'>
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
          <button  class="btn_ pad">Search</button>
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
  {/* <div id='outer2' style='height: auto;'>
  
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
    </div> */}
       {/* <%count=0%>
      <%if(locals.values){%>
      
          <%for(value of values){%>
  
            <div class="search_details_card">
              <%var intervals=all_intervals[count]%>
             
              <div class="path_div"> <%for(let i=0;i<value.length;i++){%><%=value[i]%>-<small style='color:rgb(0, 195, 255)'><%=intervals[i]%>%></small>-><%}%></div>
              <div class="details_table">
                <div> <%=locals.time[count][0]%>  <br><small>(24hr clock)</small>      </div>
                <div>    <%=locals.time[count][1]%><br><small>(24hr clock)</small>      </div>
                <div>     <%=locals.journey_time[count]%><br><small>(<%=wait_time[count]%><br>+<br><%=travel_time[count]%>)</small><br>
                  <small>(wait +fly time)</small>  </div>
                <div>   <%=locals.pric_dist[count][1]%>  KM    </div>
                <div>  Rs.  <%=locals.pric_dist[count][0]%>       </div>
                <div>    
                <form action='/booking/orderbooking' method='post'>
                  X
                  <select  class="input_tag pad" style="background-color: white;font-size: 10px;" id="passengers_<%=count%>" name='passengers'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                
                  <!-- X <%=locals.pric_dist[count][0]%> <br> -->
                  <input hidden required name="start_time" value="<%=locals.time[count][0]%>">
                  <input hidden required name="end_time" value="<%=locals.time[count][1]%>">
                  <input hidden required name="journey_time" value="<%=locals.journey_time[count]%>">
                  <input hidden required name="wait_time" value="<%=locals.wait_time[count]%>">
                  <input hidden requied name="travel_time" value="<%=locals.travel_time[count]%>">
                  <input hidden required name="user_id" value="<%=locals.user._id%>">
                  <input hidden requred  name="path" value="<%for(let i of value){%><%=i%>-><%}%>">
                  <input hidden required name='cost' id='cost_<%=count%>' saver="<%=locals.pric_dist[count][0]%>" value="<%=locals.pric_dist[count][0]%>">
                  <button  type='submit' value="<%=count%>" class="btn btn-danger submit">Book Now!</button> 
                  </form>
                   </div>
                  
                  
              
                   </div>
              </div>
            
             
  
  
         <!-- <div    class='container  full_width' style=' margin: 10px;'>
          <div id=' ' style='text-align:center;'>
             
            
             <div class=' '><b><button type="button" class="btn btn-light"><b>Path:</b></button></b>  <%for(let i of value){%>
              <div class="btn-group" role="group" aria-label="Basic example">
                <span style="border:1px double white;padding:3px">   <%=i%>     </span>
                  
                </div><svg class="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"/>
            </svg>
            <%}%><br></div><br>
  
  
  
            
  
  
  
             <div class=' '><b><button type="button" class="btn btn-light"><b>Price:</b></button></b>            <div class="btn-group" role="group" aria-label="Basic example">
              <span style="border:1px double white;padding:3px">  <%=locals.pric_dist[count][0]%>  </span>
            </div> <br></div><br>
  
  
  
  
            <div class=' '><b><button type="button" class="btn btn-light"><b>Total Journey Time:</b></button></b>            <div class="btn-group" role="group" aria-label="Basic example">
              <span style="border:1px double white;padding:3px">  <%=locals.journey_time[count]%>  </span>
            </div> <br></div><br>
            <div class=' '><b><button type="button" class="btn btn-light"><b>Total Travel Time:</b></button></b>            <div class="btn-group" role="group" aria-label="Basic example">
              <span style="border:1px double white;padding:3px">  <%=locals.travel_time[count]%>  </span>
            </div> <br></div><br>
            <div class=' '><b><button type="button" class="btn btn-light"><b>Total Waiting Time</b></button></b>            <div class="btn-group" role="group" aria-label="Basic example">
              <span style="border:1px double white;padding:3px">  <%=locals.wait_time[count]%>  </span>
            </div> <br></div><br>
            <div class=' '><b><button type="button" class="btn btn-light"><b>Start Time</b></button></b>            <div class="btn-group" role="group" aria-label="Basic example">
              <span style="border:1px double white;padding:3px">  <%=locals.time[count][0]%>  </span>
            </div> <br></div><br>
            <div class=' '><b><button type="button" class="btn btn-light"><b>Ending Time</b></button></b>            <div class="btn-group" role="group" aria-label="Basic example">
              <span style="border:1px double white;padding:3px">  <%=locals.time[count][1]%>  </span>
            </div> <br></div><br>
  
  
  
  
              <div class=' '><b> <button type="button" class="btn btn-light"><b>Distance:</b></button></b>  <div class="btn-group" role="group" aria-label="Basic example">
                  <span style="border:1px double white;padding:3px">   <%=locals.pric_dist[count][1]%>  </span>
                  
                </div> <br></div>
                <br>
                Amount: Passengers x Cost
                <form action='/booking/orderbooking' method='post'>
                  Amount:
                   <select class="input_tag pad" id="passengers" name='passengers'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                  </select> X <%=locals.pric_dist[count][0]%> <br>
                  <input hidden  name="user_id" value="<%=locals.user._id%>">
                  <input hidden  name="path" value="<%for(let i of value){%><%=i%>-><%}%>">
                  <input hidden name='cost' id='cost' value="<%=locals.pric_dist[count][0]%>">
                  <div class=' '><b> <button id="submit" type='submit' class="btn btn-danger"><b>Book Now!</b></button></b>  
                  
                  </div> <br></div>
                  
                  
              </form>
  
  
                
                
              
          </div>
           -->
        
         
      <div class='container full_width'><h1 style="text-align:center">Search for Flights</h1></div>
      
  
   */}
{/* </div> */}
  </main>
         );
    }
}
 
export default Home;