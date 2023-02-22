import React, { Component } from "react";
import "./header.css";

export default class header extends Component {
  render() {
    return (
      <div className="container-boss">
        <div className="header-wrapper">
          <h1>Chris Sanger</h1>
          <h3>Full Stack Developer</h3>
          <image src="./" />
        </div>
        <svg
          className="blob-svg"
          id="visual"
          viewBox="0 0 900 900"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(400.5505013183215 466.6233267563947)">
            <path
              d="M281.1 -269.5C350.1 -212.1 382.1 -106.1 367.2 -14.8C352.4 76.4 290.7 152.7 221.7 201.2C152.7 249.7 76.4 270.4 -12 282.4C-100.4 294.4 -200.8 297.8 -244 249.3C-287.2 200.8 -273.1 100.4 -249.4 23.7C-225.7 -53 -192.4 -106.1 -149.2 -163.4C-106.1 -220.7 -53 -282.4 26.5 -308.9C106.1 -335.4 212.1 -326.8 281.1 -269.5"
              fill="#0b3af2"
            ></path>
          </g>
        </svg>
      </div>
    );
  }
}
