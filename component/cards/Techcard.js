import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Techcard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card id="cardId">
          <Card.Img id="beImg" variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.shortDesc}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
