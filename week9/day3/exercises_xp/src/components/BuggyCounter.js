import React from "react";

class BuggyCounter extends React.Component {
   constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
}

  handleClick() {
    if (this.state.counter === 5) {
      throw new Error ('I crashed!');
    }
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

    render() {
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      };
    }



export default BuggyCounter;


