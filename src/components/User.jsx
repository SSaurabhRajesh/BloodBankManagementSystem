import { Button } from 'bootstrap';
import React, { Component } from 'react';
import UserService from '../services/UserService';

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 2,
      user: []
    }

  }
  componentDidMount() {
    UserService.getUserById(this.state.id).then(res => {
      this.setState({ user: res.data });
    })
  }

  render() {
    let button;
    {
      (() => {
        let a = "ADMIN";
        let b = "USER";
        let c = "LABASSISTANT";
        console.log(this.state.user.role, a, b, c);

        if (this.state.user.role === a) {
          return (
            button = <tbody>
              <tr><a href="./Home" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Blood Stock Data</button></a> </tr>
              <tr><a href="./DonorValidationData" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Donor Validation Data</button></a> </tr>
              <tr><a href="./ListUsers" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">User Details Data</button></a> </tr>
              <tr><a href="./BloodTestLogData" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Blood Test Log Data</button></a> </tr>
            </tbody>
          )
        } else if (this.state.user.role === b) {
          return (
            button = <tbody>
              <tr><a href="./Home" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Blood Stock Data</button></a> </tr>
              <tr><a href="./DonorValidation" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Donate Blood</button></a> </tr>
              <tr><a href="./Cart" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Needed Blood</button></a> </tr>
              <tr><a href="./Certificate" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Download Blood donation Certificate</button></a> </tr>
            </tbody>

          )
        } else if (this.state.user.role === c) {
          return (
            button = <tbody>
              <tr><a href="./Home" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Blood Stock Data</button></a> </tr>
              <tr><a href="./BloodTestLog" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Blood Test Log</button></a> </tr>
            </tbody>
          )
        }
        else {
          return (
            button = <tbody>
              <tr><a href="./Home" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Blood Stock Data</button></a> </tr>
              <tr><a href="./BloodTestLogData" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Blood Test Log Data</button></a> </tr>
              <tr><a href="./BloodValidationData" class="text-decoration-none" > <button type="button" class="btn btn-primary btn-sm">Blood Validation Data</button></a> </tr>
            </tbody>
          )
        }
      })()
    }
    return (
      <div>
        <table className='card col-md-3 offset-sm-1  '>
          <tr> <td><h3>Profile</h3></td> </tr>
          <hr />
          <tr><td><div>Name: {this.state.user.fname} {this.state.user.mname} {this.state.user.lname}</div></td></tr>
          <tr><td><div>Username: {this.state.user.username}</div></td></tr>
          <tr><td><div>Password: {this.state.user.password}</div></td></tr>
          <tr><td><div>Role:{this.state.user.role}</div></td></tr>
          <tr><td><div>Gender: {this.state.user.gender}</div></td></tr>
          <tr><td><div>Age: {this.state.user.age}</div></td></tr>
          <tr><td><div>Blood group: {this.state.user.blood_group}</div></td></tr>
          <tr><td><div>Address: {this.state.user.address}</div></td></tr>
          <tr><td><div>Department: {this.state.user.department}</div></td></tr>
          <tr><td><div>Number: {this.state.user.mobile}</div></td></tr>
          <tr><td><div>Email:{this.state.user.email}</div></td></tr>
          <tr><td><div>Subscribed: {this.state.user.subscribe}</div></td></tr>
        </table>
        <table className='card justify-content-right'>
          <thead>Functionalities:</thead>
          {button}
        </table>
      </div>
    );
  }
}

export default User;