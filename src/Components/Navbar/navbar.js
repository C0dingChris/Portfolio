import React, { Component } from "react";
import "./navbar.css";

export default class navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div class="navbar-start"></div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>About</a>
            </li>
            <li></li>
            <li>
              <a>Projects</a>
            </li>
            <li></li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
