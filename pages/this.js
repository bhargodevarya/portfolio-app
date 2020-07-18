import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class ThisComp extends Component {
  render() {
    return (
      <div style={{ color: "white", fontSize: "large", fontWeight: "Bold", textAlign: 'center'}}>
        Built with loads of love and the following
        <Container style={{paddingTop:'10rem'}}>
          <Row>
            <Col>
            <img
            style={{ width: "100px", paddingRight: "20px" }}
            src="/next-js-seeklogo.com.svg"
          ></img>
            </Col>
            <Col>
            <img
            style={{ width: "100px", paddingRight: "20px" }}
            src="/react.svg"
          ></img></Col>
          <Col><img
            style={{ width: "160px", paddingRight: "20px" }}
            src="/mongodb.svg"
          ></img></Col>
          <Col><img
            style={{ width: "100px", paddingRight: "20px" }}
            src="/aws.png"
          ></img></Col>
          <Col><img
            style={{ width: "140px", paddingRight: "20px" }}
            src="/nodejs.png"
          ></img></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
