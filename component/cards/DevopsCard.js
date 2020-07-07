import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class BackendCard extends Component {
  render() {
    return (
      <div>
        <Card id="cardId">
          <Card.Img id="beImg" variant="top" src="/undraw_version_control_9bpv.png" />
          <Card.Body>
            <Card.Title>Devops</Card.Title>
            <Card.Text>Release more often and with more ease</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
