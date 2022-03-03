import React, { Component } from 'react';
import LoginUserService from '../services/LoginUserService';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:''



        }
        this.usernameHandler = this.usernameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
      
    }

    Login=(u)=>{u.preventDefault();
        let login={ username:this.state.username,password:this.state.password};
    console.log((JSON.stringify(login)));
    LoginUserService.getLoginUser(login).then(
        res =>{
            this.props.history.push('/User');
        }
    );
    }

    usernameHandler = (event) => { this.setState({ username: event.target.value }); }
    passwordHandler = (event) => { this.setState({ password: event.target.value }); }
  


    render() {
        return (
            <div>
                <form onSubmit={this.Login}>
                    <div class=" card container-sm" >
                        <div class="form-group ">
                            <label for="username">Username:</label>
                            <input type="username" class="form-control" id="username" required
                                value={this.state.username} onChange={this.usernameHandler} />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" required
                                value={this.state.password} onChange={this.passwordHandler} />
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <a href="./forgotPass.html">Forgot Password?</a>
                        <a href="CreateUSerComponent">Create New Account</a>
                        <input type="submit" class="btn btn-outline-success w-25 p-4" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;