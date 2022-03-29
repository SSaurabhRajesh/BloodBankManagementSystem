import React, { Component } from 'react';
import UserService from '../services/UserService';



class ListUsers extends Component {
  constructor(props){
    super(props)
    this.state={
      user:[]
    }
    // this.addUser=this.addUser.bind(this); 
    
  }
  componentDidMount(){
    UserService.getUsers().then((res) => {
      this.setState({user:res.data});
    });
  }
  
deluser(id){
  UserService.deluser(id).then((res) => {
   console.log(res.data)
  });
}

  render() {
    return (
      <div>
         <div>
                 <a href="CreateUserComponent"><button type="button" className="btn btn-primary">Add User</button></a>
                 </div>
       <h2 className='text-center'>Users List</h2>
               <div className='row' style={{margin :"20px"}}>
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
                       <th>Age</th>
                       <th>Department</th>
                       <th>Role</th>
                       <th>Actions</th>
                     </tr>
                   </thead>
                   <tbody>
                     {
                       this.state.user.map(
                         user=>
                         <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.fname} {user.mname} {user.lname}</td>
                           <td>{user.gender}</td>
                           <td>{user.blood_group}</td>
                           <td>{user.address}</td>
                           <td>{user.username}</td>
                           <td>{user.password}</td>
                           <td>{user.mobile}</td>
                           <td>{user.email}</td>
                           <td>{user.subscribe.toString()}</td>
                           <td>{user.age}</td>
                           <td>{user.department}</td>
                           <td>{user.role}</td>
                           <td>

                           <td><button style={{marginLeft:"10px"}} onClick={this.deluser(user.id)} className='btn btn-info'>Delete</button></td>
                           </td>
                         </tr>
                       )
                     }
                   </tbody>
                 </table>
               </div>
      </div>
    );
  }
}

export default ListUsers;