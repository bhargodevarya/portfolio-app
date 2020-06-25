import React, { Component } from "react";
import Row from "react-bootstrap/Row";

/**
 * class to create the navbar using bootstrap, TODO, intial version
 */
export default class Bud extends Component {
  render() {
    return (
      <div id="rootdiv">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="myNavbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#" id="myNavItem" >Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#" id="myNavItem" >Contact</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#" id="myNavItem" >About</a>
              </li>
            </ul>
        </nav>
      </div>
    );
  }
}
