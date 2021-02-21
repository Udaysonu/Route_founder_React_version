import React, { Component } from 'react';
class SearchBlock extends Component {
    state = {  }
    render() { 
        return (  
            <div>
               

                <div class="search_details_card">
                <div ><h3 style={{color:"red"}}>{this.props.path.paths}</h3></div>

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
                <div> <select><option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>

                </select> </div>
                <div><button class="btn">Book Now!</button></div>

                {/* {this.props.path.waiting_time} */}
                
               
                
                
                </div>
                </div>
            </div>

        );
    }
}
 
export default SearchBlock;