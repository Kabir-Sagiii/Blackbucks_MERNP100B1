import { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      content: "State Concept",
    };
  }
  updateState = () => {
    this.setState({
      content: "State Concept From Class Component",
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.content}</h2>
        <button onClick={this.updateState}>Change Content</button>
      </div>
    );
  }
}

export default State;
