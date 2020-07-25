import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class ThisComp extends Component {
  render() {
    return (
      <div className="thisText">
        Built with loads of love and the following
        <Container fluid="sm">
          <Row xs={2} md={3}>
            <Col>
              <a href='http://www.nextjs.com'><img
                style={{ width: "100px", paddingRight: "20px" }}
                src="/next-js-seeklogo.com.svg"
              ></img></a>
            </Col>
            <Col>
              <a href="http://www.reactjs.org"><img
                style={{ width: "100px", paddingRight: "20px" }}
                src="/react.svg"
              ></img></a>
            </Col>
            <Col>
              <a href="https://www.mongodb.com/"><img
                style={{ width: "160px", paddingRight: "20px" }}
                src="/mongodb.svg"
              ></img></a>
            </Col>
            <Col>
              <a href="https://aws.amazon.com/"><img
                style={{ width: "100px", paddingRight: "20px" }}
                src="/aws.png"
              ></img></a>
            </Col>
            <Col>
              <a href="https://nodejs.org/en/"><img
                style={{ width: "140px", paddingRight: "20px" }}
                src="/nodejs.png"
              ></img></a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
