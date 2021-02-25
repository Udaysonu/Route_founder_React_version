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
                <form  onSubmit={(e)=>{
                        e.preventDefault();
                       var saver=document.getElementById("cost_"+this.props.count).getAttribute('saver');
                        var cost=document.getElementById("cost_"+this.props.count).getAttribute('value');
                        var pass=document.getElementById("passengers_"+this.props.count) ;
                        var cost=parseInt(saver)*parseInt(pass.value);
                        console.log(saver,pass.value,cost)
                        e.target.totalprice=cost
                        var ans=window.confirm("The total amout payable is "+cost+ ". Are you sure you want to continue?")
                        if(!ans)
                        {
                            return;
                        }                    
                    this.props.bookingHandler(e)}} method='post'>
                 
                <select  class="input_tag pad" style={{backgroundColor:'white'}}   id={"passengers_"+this.props.count} name='passengers'>
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
                <input hidden required name="cost" saver={this.props.path.totalprice}   id={"cost_"+this.props.count}  value={this.props.path.totalprice}/>
                <button  type='submit' value={this.props.count} id={this.props.user[0]._id} class="btn btn-danger submit">Book Now!</button> 
                </form>
 
                {/* {this.props.path.waiting_time} */}
                
               
                
                
                </div>
                </div>
               
            </div>
           
        );
    }
}
 
export default SearchBlock;