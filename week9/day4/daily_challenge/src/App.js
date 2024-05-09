import React, { Component } from 'react';

class App extends Component {
  state = { message: '', input: '' };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      this.setState({ message: data });
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: this.state.input }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      alert(data);
    } catch (error) {
      console.error('Error sending data: ', error);
    }
  };

  render() {
    return (
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit} style={{ margin: '20px' }}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Post to Server"
            style={{ width: '200px', height: '20px', marginRight: '10px' }}
          />
          <button type="submit" style={{ width: '100px', height: '26px' }}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
