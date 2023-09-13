import { Component } from "react";
import "./Counter.css";
class Counter extends Component {
  constructor() {
    super();
    console.log("Constructor is Called");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentdidMount is called");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate is called");
    return null;
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate is called");
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("Render is called");
    const { count } = this.state;
    return (
      <div className="counterContainer">
        <h2>Count Value is : {count}</h2>
        <button onClick={this.increaseCount}>Increase Count</button>
      </div>
    );
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps is called");
    return null;
  }
}

export default Counter;
