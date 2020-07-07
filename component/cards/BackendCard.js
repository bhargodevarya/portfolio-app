import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class BackendCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem", backgroundColor: "grey" }}>
          <Card.Img variant="top" src="/undraw_server_cluster_jwwq.png" />
          <Card.Body>
            <Card.Title>Backend</Card.Title>
            <Card.Text>Scalabale and resillient solutions for youe evergrowing business</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
