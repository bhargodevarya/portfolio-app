import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class BackendCard extends Component {
  render() {
    return (
      <div>
        <Card id="cardId">
          <Card.Img id="beImg" variant="top" src="/undraw_server_cluster_jwwq.png"/>
          <Card.Body>
            <Card.Title>Backend</Card.Title>
            <Card.Text>Scalabale and resillient solutions for your business</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
