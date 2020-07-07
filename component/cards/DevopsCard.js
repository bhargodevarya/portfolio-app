import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class BackendCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem", backgroundColor: "grey" }}>
          <Card.Img variant="top" src="/undraw_version_control_9bpv.svg" />
          <Card.Body>
            <Card.Title>Devops</Card.Title>
            <Card.Text>Release more often and with more ease</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
