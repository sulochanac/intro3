import { Component } from "react";

export class ChildComp extends Component {
  constructor() {
    super();
  }
  // Uni Directional Flow
  render() {
    return (
      <div>
        <h2>Welcome to Child Component !!</h2>
        <button onClick={this.props.handleChange}>Change Name</button>
        <h2>{this.props.firstName}</h2>
      </div>
    );
  }
}

  
  // Uni directional flow-it come data top to bottom means parent to chils
  // we can't change name here
  // changeName=()=>{
    // this.setState({firstName:"Mamatha Reddy"})
    // another way
    // {this.props.firstName = "Mamatha Reddy"}
