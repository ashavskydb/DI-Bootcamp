import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  componentDidMount() {
    
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    console.log("shouldComponentUpdate: nextState.favoriteColor", nextState.favoriteColor);
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate: prevState.favoriteColor", prevState.favoriteColor);
    return prevState.favoriteColor;  
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update: snapshot", snapshot);
  }

  handleChangeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.handleChangeColor}>Change color to blue</button>
      </div>
    );
  }
}

export default Color;
