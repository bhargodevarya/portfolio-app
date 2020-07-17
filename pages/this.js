import React, { Component } from "react";

export default class ThisComp extends Component {
  render() {
    return (
      <div style={{ color: "white", fontSize: "large", fontWeight: "Bold"}}>
        Built with loads of love and the following
        <div>
          <img
            style={{ width: "100px", paddingRight: "20px" }}
            src="/next-js-seeklogo.com.svg"
          ></img>
          <img
            style={{ width: "100px", paddingRight: "20px" }}
            src="/react.svg"
          ></img>
          <img
            style={{ width: "160px", paddingRight: "20px" }}
            src="/mongodb.svg"
          ></img>
        </div>
      </div>
    );
  }
}
