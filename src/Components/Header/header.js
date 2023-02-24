import React, { Component } from "react";
import "./header.css";
import Blob from "../Blob/blob";

export default class header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-text">
          <h2>Chris Sanger</h2>
          <h2>Full Stack</h2>

          <div className="glowbox">
            <h2 className="glowtext"> Developer.</h2>
          </div>
        </div>
        <div className="blob-container">
          <Blob></Blob>
        </div>
      </div>
    );
  }
}
