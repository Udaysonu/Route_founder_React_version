import React, { Component } from 'react';
class AllFlights extends Component {
    state = {  }
    render() { 
        return ( 
            
<React.Fragment>
<div class='outer outer-r b-r' class='inline' style='height:auto'>

<div class='container container-r b-r dd'>

    <form action='/dashboard/specificPath' method='post'>
        <div class='input inline inline-r '> 
          <input type="text" name="source" placeholder="Source Search"/>
        </div>
          
        <div class='input inline inline-r'>
          <input type="text" name="destination" placeholder="Destination Search"/>
        </div>
       <div class='input inline' >
        <button  class="btn_ pad"><i class='fa fa-search'></i></button>
       </div>
    </form>
    
    </div>
    

</div>

<div class="card_background">
  {/* <%for(path of paths){%> */}
    <table class="card_list">
     <form  method='post'     action="/dashboard/updatePath">
       <tr><td class="thick">Path_id</td> <td class="thin"> <input type="text" name="id" value="<%=path.id%>" readonly/></td></tr>
       <tr><td class="thick">Source:</td>             <td class="thin">  <input type='text' name='source' readonly value='<%=path.source%>'/> </td></tr>
       <tr><td class="thick">Destination:</td>        <td class="thin">  <input type='text' name='destination' readonly value='<%=path.destination%>'/> </td></tr>
       <tr><td class="thick">Cost:</td> 	            <td class="thin">   <input type='number' name='cost' required value='<%=path.cost%>'/>  </td></tr>
       <tr><td class="thick">Distance:</td>           <td class="thin">  <input type='number' name='distance' required value='<%=path.distance%>'/> </td></tr> 
       <tr><td class="thick">Start Time:</td>         <td class="thin">  <input   name='start_time' required type="text"  value="<%=path.start_time%>"/ >  </td></tr>
       <tr><td class="thick">End Time:</td>           <td class="thin">   <input   name='end_time' required type="text"  value="<%=path.end_time%>" /></td></tr>
       <tr><td class="thin" colspan="1"><button class="btn btn-Info" type="submit">Update Path</button></td> 
     
      <td class="thin"><a href="/dashboard/deletePath/<%=path.id%>">
        <button id="delete_btn"  class='btn btn-Danger'>  Delete Path </button>
      </a> </td></tr>
      </form>
    </table>
  {/* <%}%> */}
</div>
</React.Fragment>

         );
    }
}
 
export default AllFlights;