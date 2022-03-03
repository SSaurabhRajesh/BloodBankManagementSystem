import React, { Component } from 'react';
import UserService from '../services/UserService';

class User extends Component {
    constructor(props){
     super(props)
         this.state={
                    id:this.props.match.params.id,
                    user:{}
       }
       
      }
      componentDidMount(){
        UserService.getUserById(this.state.id).then(res=>{
          this.setstate({user:res.data});
        })
      }

    render() {
        return (
            <div>
            <div className='card col-md-6 offset-md-3'>
              <h3 className='text-center'>Profile</h3>
              <div className='row'>
              <label>Name:</label>
                <div>{this.state.user.firstname}{this.state.user.middlename}{this.state.user.lastname}</div>
                <label>Username:</label>
                <div>{this.state.user.username}</div>
                <label>Password:</label>
                <div>{this.state.user.password}</div>
                <label>Role::</label>
                <div>{this.state.user.role}</div>
                <label>Gender:</label>
                <div>{this.state.user.gender}</div>
                <label>Age:</label>
                <div>{this.state.user.age}</div>
                <label>Blood group:</label>
                <div>{this.state.user.bloodgroup}</div>
                <label>Address:</label>
                <div>{this.state.user.address}</div>
                <label>Department:</label>
                <div>{this.state.user.department}</div>
                <label>Number:</label>
                <div>{this.state.user.number}</div>
                <label>Email:</label>
                <div>{this.state.user.email}</div>
                <label>Subscribed:</label>
                <div>{this.state.user.subscribe}</div>
                </div>
            </div>
           </div>
        );
    }
}

export default User;