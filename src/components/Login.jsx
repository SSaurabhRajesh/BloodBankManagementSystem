import React, { Component } from 'react';
import UserService from '../services/UserService';
import { createBrowserHistory } from "history";



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
    UserService.getUserById(this.state.username).then(
        res =>{
            const history = createBrowserHistory({ window });
            this.state.history.push('/User',res.data); 
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
                        <a href="ForgotP">Forgot Password?</a>
                        <a href="CreateUSerComponent">Create New Account</a>
                        <span><input type="submit" class="btn btn-outline-success w-25 p-4" value="Submit" /></span>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;