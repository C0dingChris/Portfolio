import React, { Component } from "react";
import "./about.css";
import pp from "../Assets/pp-circle.png";

export default class about extends Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
        <div className="about-wrapper">
          <div className="profile-pic-container">
            <img className="pp" src={pp} alt="Chris Sanger" />
          </div>
          <div className="about-container">
            <p>
              Full-stack developer with a passion for crafting visually stunning
              and intuitive user-interfaces.
            </p>
            <p>
              I have a proven track record over the last 3+ years of delivering
              high-quality, responsive websites and web applications.
            </p>
            <p>
              My specialism lies in front-end development. I have a deep
              understanding of leveraging React, CSS, and Java Script to create
              dynamic user interfaces that not only look great, but also provide
              seamless user experiences. Additionally, I have experience in
              Adobe Suite, which allows me to enhance the visual aspect of my
              projects.
            </p>
            <p>
              I have cross-industry design experience including automotive,
              construction and music industries. I have worked in corporate and
              freelance capacities; delivering my work in a timely manner with a
              key eye for detail. My adaptability to different project
              requirements make me a valuable asset to any team.
            </p>
            <p>
              {" "}
              In addition to my technical skills, I am a strong team player and
              excellent communicator.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
