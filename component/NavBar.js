import React, { Component } from "react";
import Row from "react-bootstrap/Row";

/**
 * class to create the navbar using bootstrap, TODO, intial version
 */
export default class NavBar extends Component {
  render() {
    return (
      <div id="rootdiv">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="myNavbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/" id="myNavItem" >Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/contact" id="myNavItem" >Contact</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/about" id="myNavItem" >About</a>
              </li>
            </ul>
        </nav>
      </div>
    );
  }
}
