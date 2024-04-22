import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Multimedia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to={"/Generos"} className="nav-link">
              Géneros
            </NavLink>

            <NavLink to={"/Directores"} className="nav-link">
              Directores
            </NavLink>

            <NavLink to={"/Productoras"} className="nav-link">
              Productoras
            </NavLink>

            <NavLink to={"/Tipos"} className="nav-link">
              Tipos
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
