import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class CloudCard extends Component {
    render() {
        return (
            <div>
                <Card id="cardId">
            <Card.Img id="beImg" variant="top" src="/undraw_going_up_ttm5.png" />
            <Card.Body>
              <Card.Title>Cloud</Card.Title>
              <Card.Text>
                Cloud solutions to help your business grow
              </Card.Text>
            </Card.Body>
          </Card>                
            </div>
        )
    }
}
