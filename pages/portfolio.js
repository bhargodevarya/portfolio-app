import React, { Component } from "react";
import axios from "axios";
import { getPortfolios } from "../data/data";

import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export default class portfolio extends Component {

  constructor(props) {
    super(props);
    this.state= {
        show: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({show: !this.state.show})
    console.log(this.state.show);
  }

  processPortfolios(portfolios) {
    return portfolios.map((portfolio) => (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {portfolio.designation} at {portfolio.organization}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {portfolio.location}
          </Card.Subtitle>
          <Card.Text>{portfolio.shortDesc}</Card.Text>
          <Card.Link href="#" onClick={this.handleClick}>
            Details
          </Card.Link>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    console.log(this.props.portfolio[0].designation);
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClick}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClick}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {this.processPortfolios(this.props.portfolio)}
      </div>
    );
  }
}

export async function getStaticProps() {
  //const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
  //console.log(response)
  const portfolios = await getPortfolios();
  return { props: portfolios };
}
