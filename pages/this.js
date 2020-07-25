import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getTechnologies } from '../data/data'

export default class ThisComp extends Component {
  constructor(props) {
    super(props)
    this.techComp = this.techComp.bind(this)
  }

  techComp(technologies) {
    return technologies.map((tech) => (
      <Col>
        <a href={tech.url}>
          <img
            style={tech.style}
            src={tech.image}
          ></img>
        </a>
      </Col>
    ));
  }

  render() {
    return (
      <div className="thisText">
        Built with loads of love and the following
        <Container fluid="sm">
          <Row xs={2} md={3}>
            {this.techComp(this.props.technologies)}
          </Row>
        </Container>
      </div>
    );
  }
}

export async function getStaticProps() {
  const technologies = await getTechnologies()
  return {props: technologies}
}
