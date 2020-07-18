import React, { Component } from "react";
import Typed from "typed.js/lib/typed.min.js";

export default class TypedComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("ComponentDidMount");

    const options = {
      strings: this.props.strings.split(","),
      typeSpeed: 30,
      backSpeed: 50,
      loop: true
    };

    this.typed = new Typed("#typedDiv", options);
  }

  render() {
    return (
      <div className='typedIntro'>
        <div id="typedDiv"></div>
      </div>
    );
  }
}
