import React, { Component } from "react";

export default class MountingPhase extends Component {
  constructor() {
    super();
    this.state = {
      favColor: "red",
      count: 10,
    };
  }
  componentDidMount() {
    console.log("ComponentDidMount invoked...");
    document.title = `Count: ${this.state.count}`;
  }
  static getDerivedStateFromProps(props, state) {
    return { favColor: props.FavCol };
  }
  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(state, props) {
    console.log(state, props);

    return null;
  }
  IncrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>
          My favColr is {this.state.favColor} Count:{this.state.count}
        </h2>
        <button onClick={this.IncrementCount}>increase</button>
      </div>
    );
  }
}
