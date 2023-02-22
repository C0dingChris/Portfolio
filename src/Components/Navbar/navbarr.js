import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

export default function navbarr() {
  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <button class="btn btn-ghost">
                <Link activeClass="active" smooth spy to="home">
                  HOME
                </Link>
              </button>
            </li>
            <li>
              <button class="btn btn-ghost">
                <Link activeClass="active" smooth spy to="about">
                  ABOUT
                </Link>
              </button>
            </li>
            <li>
              <button class="btn btn-ghost">
                <Link activeClass="active" smooth spy to="projects">
                  PROJECTS
                </Link>
              </button>
            </li>
            <li>
              <button class="btn btn-ghost">
                <Link activeClass="active" smooth spy to="contact">
                  CONTACT
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
