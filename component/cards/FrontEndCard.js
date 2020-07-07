import React, { Component } from "react";
import Card from 'react-bootstrap/Card'

export default class FrontEndCard extends Component {
  render() {
    return (
      <div>
        <Card id="cardId">
          <Card.Img id="beImg" variant="top" src="/undraw_experience_design_eq3j.png" />
          <Card.Body>
            <Card.Title>Front End</Card.Title>
            <Card.Text>Immersive UI experience to tailormade for you</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
