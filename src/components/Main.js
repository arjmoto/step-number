import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrea = this.handleIncrea.bind(this);
    this.handleDecrea = this.handleDecrea.bind(this);
  }

  handleIncrea() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }
  handleDecrea() {
    this.setState((state) => ({
      count: state.count - 1
    }));
  }
  render() {
    const count = this.state.count;
    return (
      <div>
        <button onClick={this.handleDecrea}>-</button>
        <span id="numberPreview"> {count} </span>
        <button onClick={this.handleIncrea}>+</button>
      </div>
    );
  }
}

export default Main;
