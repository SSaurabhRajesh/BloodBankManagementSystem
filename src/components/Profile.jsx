import React, { Component } from 'react';
import UserService from '../services/UserService';

class Profile extends Component {
    constructor(props){
     super(props)
         this.state={
           user:[]
         }
         this.addUser=this.addUser.bind(this);
       }
       componentDidMount(){
         UserService.getUsers().then((res) => {
           this.setState({user:res.data});
         });
      }

    render() {
        return (
            <div>
            <h2 className='text-center'>Users List</h2>
            <h2>HIHIEGdg</h2>
                    {/* <div className='row'>
                    <div>
                      <button type="button" className="btn btn-primary" onClick={this.addUser}>Add User</button>
                      </div>
                      <table className='table table-striped table-bordered'>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Mobile No.</th>
                            <th>Email</th>
                            <th>Subscribed</th>
                            <th>Date of last Donation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.user.map(
                              user=>
                              <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.blood_group}</td>
                                <td>{user.address}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>{user.subscribe}</td>
                                <td>{user.ddate}</td>
                              </tr>
                            )
                          }
                        </tbody>
                      </table>
                    </div> */}
           </div>
        );
    }
}

export default Profile;