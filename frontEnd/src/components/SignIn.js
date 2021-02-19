import React, { Component } from 'react';
import "../componentsCss/SignInUp.css"

class SignIn extends Component {
    state = {  }
    render() { 
        return (<React.Fragment>

<div class="outer-r outer" >
<div class="container-r container" >
	<form action='/user/authenticate' method='post'>
		<h2 style={{color:'white'}}>Sign In</h2>
	<div class='input'>
		<b style={{color: "black"}}></b><input class="input_tag" name='email' placeholder="Username" type='email' />
	</div>
	<div class='input'>		 
		<b style={{color: "black"}}></b><input class="input_tag" type='password' placeholder="Password" name='password'/>
	</div>
	<div><small>Forgot Password?<a href='/user/forgot_password' style={{color:"yellow"}}> click here</a>                </small></div>

	<div><small>Don't have an account?<a href='/user/signup' style={{color:"yellow"}}> click here</a>                </small></div>
	<div class='input'><button class="btn_">Signin</button></div>
	<div style={{textAlign: 'center'}}> Or Login with<br/><a href='/auth/google'><h5 className="googleAuth">Google</h5></a> </div>
</form>
</div>
</div>
        </React.Fragment> );
    }
}
 
export default SignIn;