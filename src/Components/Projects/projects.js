import React, { Component } from "react";
import Card from "../Card/card";
import "./projects.css";
import projectsdata from "../../projectsdata";

function createCard(project) {
  return (
    <Card
      key={project.id}
      name={project.projectName}
      image={project.imgURL}
      desc={project.description}
      github={project.github}
      link={project.liveLink}
      skill1={project.skill1}
      skill2={project.skill2}
      skill3={project.skill3}
      skill4={project.skill4}
      skill5={project.skill5}
    />
  );
}
export default class projects extends Component {
  render() {
    return (
      <>
        <h2 className="title">Projects</h2>
        <div className="card-wrapper">
          <div className="card">{projectsdata.map(createCard)}</div>
        </div>
      </>
    );
  }
}
