import React, { Component } from "react";
import "./header.css";
import Blob from "../Blob/blob";

export default class header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-text">
          <h1>Chris Sanger</h1>
          <h3>Full Stack Developer</h3>
          <Blob></Blob>
        </div>
      </div>
    );
  }
}
