import { Component } from "react";
import allusers from "./allUsers.json";
export class UsersComp extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { fname: "Radha", lname: "Krishna" },
        { fname: "Raja", lname: "Ram" },
        { fname: "Krishna", lname: "Reddy" },
        { fname: "Narendra", lname: "Prasad" }
      ]
    }
  }
  render() {
    console.log(allusers)
    return <div>
<table border={2}>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </tr>
  </thead>
<tbody>
  {this.state.users.map((usr,i)=>{
return <tr key={i}>
  <td>{usr.fname} </td>
  <td>{usr.lname} </td>
</tr>
  })}
</tbody>
</table>
<hr />
<table border={1}>
<thead>
<tr>
    <th>Id</th>
  <th>Email</th>
  <th>User Name</th>
  <th>Password</th>
</tr>
</thead>
<tbody>
  {allusers.map((user,i)=>{
    return <tr key={i}>
      <td>{user.id}</td>
      <td>user.Email</td>
      <td>user.User Name</td>
      <td>user.Password</td>
    </tr>
  })}
</tbody>
</table>
    </div>
  }
}