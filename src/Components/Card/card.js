import React from "react";

export default function card(props) {
  return (
    <div class="card md:w-1/2 sm:w-100 bg-white/[.15]  shadow-xl m-5">
      <figure className="card-image">
        <img src={props.image} alt="Project" />
      </figure>
      <div className="card-body">
        <h2 class="card-title">{props.name}</h2>

        <p class="text-start">{props.desc}</p>
        <div class="card-actions justify-center">
          <a href={props.github}>
            <button class="btn btn-primary" href={props.github}>
              Github
            </button>
          </a>
          <a href={props.link}>
            <button class="btn btn-primary">Live</button>
          </a>
        </div>
      </div>
    </div>
  );
}
