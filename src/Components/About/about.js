import React, { Component } from "react";
import "./about.css";
import pp from "../Assets/pp-circle.png";

export default class about extends Component {
  render() {
    return (
      <div>
        <div className="about-wrapper">
          <h2> </h2>
          <div className="profile-pic-container">
            <img className="pp" src={pp} alt="Chris Sanger" />
          </div>
          <div className="about-container">
            <p>
              I'm Chris, a Full-stack developer with a passion for crafting
              visually stunning and intuitive user-interfaces.
            </p>
            <br></br>
            <p>
              I have a proven track record over the last 3+ years of delivering
              high-quality, responsive websites and web applications.
            </p>
            <br></br>

            <p>
              My specialism lies in front-end development. I have a deep
              understanding of leveraging React, CSS, and Java Script to create
              dynamic user interfaces that not only look great, but also provide
              seamless user experiences. Additionally, I have experience in
              Adobe Suite, which allows me to enhance the visual aspect of my
              projects.
            </p>
            <br></br>
            <p>
              I have cross-industry design experience including automotive,
              construction and music industries. I have worked in corporate and
              freelance capacities; delivering my work in a timely manner with a
              key eye for detail. My adaptability to different project
              requirements make me a valuable asset to any team.
            </p>
            <br></br>
            <p>
              {" "}
              In addition to my technical skills, I am a strong team player and
              excellent communicator.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
