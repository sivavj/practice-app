import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navigate() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand display-6 d-flex" to="/">
            <img
              src="https://img.icons8.com/bubbles/50/000000/react.png"
              alt=""
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            ></img>
            <p className="pt-3">React Route</p>
          </NavLink>
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
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      borderRadius: "5px",
                      color: isActive ? "white" : "",
                      background: isActive ? "teal" : "",
                    };
                  }}
                  to="/"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      borderRadius: "5px",
                      color: isActive ? "white" : "",
                      background: isActive ? "teal" : "",
                    };
                  }}
                  to="/posts"
                >
                  Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      borderRadius: "5px",
                      color: isActive ? "white" : "",
                      background: isActive ? "teal" : "",
                    };
                  }}
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
