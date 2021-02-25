import React, { Component } from 'react';
// import "../componentsCss/all_flight_paths.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class AddPath  extends Component {
    state = {  }
    render() { 
        return ( <div style={{display: "flex" ,flexDirection:"row" ,justifyContent:"center"}}>
    
        <div style={{width:"60vw"}}>
            <h1>Add New Path +</h1>
            <form onSubmit={this.props.callback} > 
    
                <div class="form-group" >
                    <label for="formGroupExampleInput">Source Name</label>
                    <input name='source' type="text" class="form-control" id="formGroupExampleInput" placeholder="Source Name"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Destination Name</label>
                    <input name='destination' type="text" class="form-control" id="formGroupExampleInput" placeholder="Destination Name"/>
                </div>
    
                <div class="form-group">
                    <label for="formGroupExampleInput">Cost:</label>
                    <input name='cost' type="number" class="form-control" id="formGroupExampleInput" placeholder="Journey Cost"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Distance:</label>
                    <input name='distance' type="number" class="form-control" id="formGroupExampleInput" placeholder="Distance between Source and Destination"/>
                </div>
    
                <div class="form-group">
                    <label for="formGroupExampleInput">Start Time:</label>
                    <input name='start_time' type="text" class="form-control" id="formGroupExampleInput" placeholder="Start Time of Journey"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">end_time:</label>
                    <input name='end_time' type="text" class="form-control" id="formGroupExampleInput" placeholder="End Time of Journey"/>
                </div>
                <button class="btn-warning" type="submit">Submit</button>
            </form>
    
        </div>
    
    
    
    </div> );
    }
}
 
export default AddPath;