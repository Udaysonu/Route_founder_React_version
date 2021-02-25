import React, { Component, useImperativeHandle } from 'react';
import "../componentsCss/SignInUp.css"
import {BrowserRouter as Router,Link,Redirect,useHistory} from 'react-router-dom'


function SignIn (props) {
    var state = {  };	 
	var	history= useHistory()
	function callhandler()
	{
		history.push("/home")
	}
        return (<React.Fragment>

<div class="outer-r outer" >
<div class="container-r container" >
	<form  onSubmit={(e)=>{props.checkC(e,callhandler) }}>
		<h2 style={{color:'white'}}>Sign In</h2>
	<div class='input'>
		<b style={{color: "black"}}></b><input class="input_tag" name='email' placeholder="Username" type='email' />
	</div>
	<div class='input'>		 
		<b style={{color: "black"}}></b><input class="input_tag" type='password' placeholder="Password" name='password'/>
	</div>
	<div><small>Forgot Password?<a href='/user/forgot_password' style={{color:"yellow"}}> click here</a>                </small></div>

	<div><small>Don't have an account?<a  style={{color:"yellow"}}> click here</a>                </small></div>
	<div class='input'>
		<button class="submit" type='submit' class="btn_" > SignIn   </button>
	</div>
	<div style={{textAlign: 'center'}}> Or Login with<br/><a  ><h5 className="google_Auth">Google</h5></a> </div>
</form>
</div>
</div>
        </React.Fragment> );
}
 
export default SignIn;