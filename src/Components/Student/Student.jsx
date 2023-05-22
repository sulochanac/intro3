import { Component } from "react";
import './student.css';
import myCss from './myStudent.module.css';
export class Student extends Component{
  constructor(){
super()
  }
  render(){
    console.log(myCss)
    return <div style={{background:'blue',color:'white'}}>
<h2>Welcome to Student Component</h2>
<div>
<div id="studentDiv">
<h2>I am inside studentDiv</h2>
</div>
<div className={myCss.studentBox}>
  <h2>Welcome to Module styles.. </h2>
</div>
</div>
    </div>
  }
}