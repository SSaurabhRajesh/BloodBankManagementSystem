import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role:'',
            firstname:'',
            middlename:'',
            lastname:'',
            username:'',
            password:'',
            gender:'',
            age:'',
            bloodgroup:'',
            address:'',
            department:'',
            number:'',
            email:'',
            subscribe:''
        }
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeMiddleNameHandler=this.changeMiddleNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeGenderHandler=this.changeGenderHandler.bind(this);
        this.changeAgeHandler=this.changeAgeHandler.bind(this);
        this.changeBloodGroupHandler=this.changeBloodGroupHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeDepartmentHandler=this.changeDepartmentHandler.bind(this);
        this.changeNumberHandler=this.changeNumberHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeSubscribeHandler=this.changeSubscribeHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
        
    }
    saveUser=(u)=>{u.preventDefault();
        let user={ role:this.state.role,firstname:this.state.firstname,middlename:this.state.middlename,lastname:this.state.lastname,username:this.state.username,password:this.state.password,gender:this.state.gender,age:this.state.age,bloodgroup:this.state.bloodgroup,address:this.state.address,department:this.state.department,number:this.state.number,email:this.state.email,subscribe:this.state.subscribe};
    console.log((JSON.stringify(user)));
    UserService.createUser(user).then(
        res =>{
            this.props.history.push('/users');
        }
    );
    }
changeRoleHandler=(event)=>{this.setState({role:event.target.value});}
changeFirstNameHandler= (event) =>{this.setState({firstname: event.target.value});}
changeMiddleNameHandler= (event) =>{this.setState({middlename: event.target.value});}
changeLastNameHandler= (event) =>{this.setState({lastname: event.target.value});}
changeUserNameHandler= (event) =>{this.setState({username: event.target.value});}
changePasswordHandler= (event) =>{this.setState({password: event.target.value});}
changeGenderHandler= (event) =>{this.setState({gender: event.target.value});}
changeAgeHandler= (event) =>{this.setState({age: event.target.value});}
changeAddressHandler= (event) =>{this.setState({address: event.target.value});}
changeBloodGroupHandler= (event) =>{this.setState({bloodgroup: event.target.value});}
changeDepartmentHandler= (event) =>{this.setState({department: event.target.value});}
changeNumberHandler= (event) =>{this.setState({number: event.target.value});}
changeEmailHandler= (event) =>{this.setState({email: event.target.value});}
changeSubscribeHandler= (event) =>{this.setState({subscribe: event.target.value});}



    render() {
        return (
            <div>
                      <div className="container">
                    <div className="row">
                        <div className="card col-md-7 offset-md-3">
                            <h3 className='text-center'>Register User</h3>
                            <div className="card-body">
                                <form onSubmit={this.saveUser}>
                                    <table className='row-md-7'>
                                        <tr>
                                            <td>
                                                <select name="Role"
                                                value={this.state.role} onChange={this.changeRoleHandler}>
                                                    <option value="User">User</option>
                                                    <option id="Government Officials" value="Government Officials">Government Officials</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Lab Assistant">Lab Assistant</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                First Name:
                                                <input type="text" name="username" id="username" required 
                                                value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                            </td>
                                            <td>
                                                Middle Name:
                                                <input type="text" name="username" id="username" required 
                                                value={this.state.middlename} onChange={this.changeMiddleNameHandler}/>
                                            </td>
                                            <td>
                                                Last Name:
                                                <input type="text" name="username" id="username" required 
                                                value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Username:
                                                <input type="text" name="username" id="username" required minlength="5" 
                                                value={this.state.username} onChange={this.changeUserNameHandler}/>
                                            </td>
                                            <td>
                                                Password:
                                                <input type="text" name="password" id="password" required minlength="5" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                            </td>
                                            <td>
                                                Gender:
                                                <br />
                                                <input type="radio" name="gender" id="Male" value={this.state.gender} onChange={this.changeGenderHandler}/>Male
                                                <input type="radio" name="gender" id="Female" value={this.state.gender} onChange={this.changeGenderHandler}/>Female
                                                <input type="radio" name="gender" id="Transgender" value={this.state.gender} onChange={this.changeGenderHandler}/>Transgender
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Age:
                                                <br />
                                                <input type="number" name="age" id="age" required 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                            </td>
                                            <td>
                                                Blood Group:
                                                <br />
                                                <select name="bloodgroup" id="bloodgroup"
                                                value={this.state.bloodgroup} onChange={this.changeBloodGroupHandler}>
                                                    <option value="A+">A+</option>
                                                    <option value="A-">A-</option>
                                                    <option value="B+">B+</option>
                                                    <option value="B-">B-</option>
                                                    <option value="AB+">AB+</option>
                                                    <option value="AB-">AB-</option>
                                                    <option value="O+">O+</option>
                                                    <option value="O-">O-</option>
                                                </select>
                                            </td>
                                            <td>
                                                Address:
                                                <br />
                                                <textarea name="address" id="address" cols="25" rows="3" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Department:
                                                <br />
                                                <input type="text" name="department" id="department" required 
                                                value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                            </td>
                                            <td>
                                                Mobile number:
                                                <br />
                                                <input type="number" name="Mobile" id="Mobile" required 
                                                value={this.state.number} onChange={this.changeNumberHandler}/>
                                            </td>
                                            <td>
                                                Email:
                                                <br />
                                                <input type="email" name="Emailid" id="Emailid" required 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Want To Subscribe:
                                                <br />
                                                <input type="radio" name="Subscribe" id="Subscribe" /><label for="Yes" value={this.state.subscribe} onChange={this.changeSubscribeHandler}>Yes</label>
                                                <input type="radio" name="Subscribe" id="Subscribe" /><label for="No" value={this.state.subscribe} onChange={this.changeSubscribeHandler}>No</label>
                                            </td>
                                            <td>
                                                <button type="reset" class="btn btn-outline-warning">Reset</button>

                                            </td>
                                            <td>
                                                <button type="submit" class="btn btn-outline-success" >SUBMIT</button>
                                            </td>
                                        </tr>

                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUserComponent;