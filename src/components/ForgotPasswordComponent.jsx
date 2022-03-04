import React, { Component } from 'react';

class ForgotPasswordComponent extends Component {
    pop=()=>{
        alert("Username and Password is Sent to your Email");
        this.props.history.push("/Login")
    }
    render() {
        return (
            <div>
                <h4>Forgot Username or Password</h4> <hr/>
        <h6>Enter Email:</h6> <br/>
        <form onSubmit={this.pop}>
        <input type="email" name="email" id="email"/>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            </div>
        );
    }
}

export default ForgotPasswordComponent;