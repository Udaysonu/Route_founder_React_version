import React, { Component } from 'react';
class SearchBlock extends Component {
    state = {  }
    render() { 
        return (  
            <div class="">
                <div class="search_details_card container container-r">
                <div ><h5 style={{color:"red",textEmphasisPosition:'center'}}>{this.props.path.paths}</h5></div>
                <div class="details_table"> 
                <div>{this.props.path.start_time}</div>
                <div>{this.props.path.end_time}</div>
                <div>{this.props.path.journey_time}<br/>(
               {this.props.path.waiting_time}+<br/>
               {this.props.path.travelling_time})<br/>
               (wait+travel)
               </div>
                <div>{this.props.path.totaldistance}</div>
                <div>Rs.{this.props.path.totalprice}</div>
                {/* <div> <select ><option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                </select> </div> */}
                <form  onSubmit={this.props.bookingHandler} method='post'>
                 
                <select  class="input_tag pad" style={{backgroundColor:'white'}} id="passengers_<%=count%>" name='passengers'>
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
              
              ---------
                <input hidden required name="start_time" value={this.props.path.start_time}/>
                <input hidden required name="end_time" value={this.props.path.end_time}/>
                <input hidden required name="journey_time" value={this.props.path.journey_time}/>
                <input hidden required name="wait_time" value={this.props.path.waiting_time}/>
                <input hidden requied name="travel_time" value={this.props.path.travelling_time}/>
                <input hidden required name="user_id" value={this.props.user[0]._id}/>
                <input hidden required  name="path" value={this.props.path.paths}/>
                <input hidden required name="cost"   value={this.props.path.totalprice}/>
                <button  type='submit' value="<%=count%>" class="btn btn-danger submit">Book Now!</button> 
                </form>
 
                {/* {this.props.path.waiting_time} */}
                
               
                
                
                </div>
                </div>
            </div>

        );
    }
}
 
export default SearchBlock;