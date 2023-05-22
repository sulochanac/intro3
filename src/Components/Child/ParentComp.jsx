import { Component } from "react";
import { ChildComp } from "../Child/ChildComp";

export class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      fname: "Sulochana",
    };
  }

  // State Can be Changed 
  // Props Cannot be Changed
  
  changeName = () => {
    this.setState({ fname: "Mamatha Reddy!!" });
  };
  render() {
    return (
      <div>
        <h2>Welcome to Parent Compomemt !!</h2>
        <hr />
        <ChildComp
          firstName={this.state.fname}
          handleChange={this.changeName}
        />
      </div>
    );
  }
}