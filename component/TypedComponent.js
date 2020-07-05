import React, { Component } from "react";
import Typed from "typed.js/lib/typed.min.js";

export default class TypedComponent extends Component {
  componentDidMount() {
    console.log("ComponentDidMount");

    const options = {
      strings: ["Developer", "Creator", "Curious"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    this.typed = new Typed("#typedDiv", options);
  }

  render() {
    return <div id="typedDiv"></div>;
  }
}
