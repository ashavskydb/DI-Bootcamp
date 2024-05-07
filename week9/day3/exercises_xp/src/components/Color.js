import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red', show: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState.favoriteColor;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update: snapshot", snapshot);
  }

  handleChangeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.handleChangeColor}>Change color to blue</button>
        <button onClick={this.toggleShow}>Delete Header</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted.');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

export default Color;
