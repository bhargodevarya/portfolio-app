import React, { Component } from "react";
import Row from "react-bootstrap/Row";

/**
 * className to create the navbar using bootstrap, TODO, intial version
 */
export default class NavBar extends Component {
  render() {
    return (
      <div id="rootdiv">
        <nav className="navbar navbar-expand-lg fixed-top" id="myNavbar">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navigation-bar"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">&#9776;</span>
          </button>

          <div className="collapse navbar-collapse" id="navigation-bar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/" id="myNavItem">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact" id="myNavItem">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" id="myNavItem">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
