import React, { Component } from "react";
import {Link} from 'react-router';
require("./App.css");

export default class App extends Component{

  render () {
    return (
      <div>
        <h1>Welcome</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lesson">Lesson</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
