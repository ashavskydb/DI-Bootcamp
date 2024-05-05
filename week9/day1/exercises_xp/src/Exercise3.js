import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
  render() {
    
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return (
      <div>
         <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a Paragraph</p>
        <a href="https://www.example.com">This is a Link</a>
        <div>
          This is a Form:
          <form>
            <label>
              Enter your name:
              <input type="text" name="name" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          Here is an Image:
          <img src="logo.svg" alt="React Logo" />
        </div>
        <ul>
          This is a List:
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
