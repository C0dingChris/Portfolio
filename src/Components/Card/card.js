import React from "react";

export default function card(props) {
  return (
    <div class="card md:w-1/2 sm:w-80 bg-white/[.08]  shadow-xl m-3">
      <figure className="card-image">
        <img src={props.image} alt="Project" />
      </figure>
      <div className="card-body">
        <h2 class="card-title m-0">{props.name}</h2>

        <p class="text-start m-0">{props.desc}</p>
        <div className="skills-wrapper">
          <div class="badge badge-outline m-3">
            <p1>{props.skill1}</p1>
          </div>
          <div class="badge badge-outline m-3">
            <p1>{props.skill2}</p1>
          </div>
          <div class="badge badge-outline m-3">
            <p1>{props.skill3}</p1>
          </div>
          <div class="badge badge-outline m-3">
            <p1>{props.skill4}</p1>
          </div>
          <div class="badge badge-outline m-3">
            <p1>{props.skill5}</p1>
          </div>
        </div>
        <div class="card-actions justify-center">
          <a href={props.github} target="_blank" rel="noreferrer">
            <button class="btn btn-primary m-1" href={props.github}>
              Github
            </button>
          </a>
          <a href={props.link} target="_blank" rel="noreferrer">
            <button class="btn btn-primary m-1">Live</button>
          </a>
        </div>
      </div>
    </div>
  );
}
