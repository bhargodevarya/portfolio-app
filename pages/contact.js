import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.decrement = this.decrement.bind(this);
  }
  /*
    You can initiate the state like this as well, but you wont be able to use is in any advanced use cases
    state = {
         count: 0
     }     
     */

  //this.decrement = this.decrement.bind(this)

  increment = (e) => {
    //arrow functions inherit the this context from the context where they are defined
    //and therefore can be called directly from the component
    e.preventDefault();

    let currentCount = this.state.count;

    //This below statement does not set the state and hence does not lead to re-render
    //this.state.count = currentCount +1

    //setState must be called to change the state and lead to a re-render
    this.setState({ count: currentCount + 1 });
  };

  /**
   * Normal function dont the the this context. Therefore must either be binded in the constructor
   * or be called via callback function from the actual component
   */
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    console.log(this.props);
    return (
      <div id="contactFormId">
        <Container id="formContainer" className="container">
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="myNavItem">Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="How should I address you?"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                  <Form.Label className="myNavItem">Subject</Form.Label>
                  <Form.Control
                    type="input"
                    placeholder="What is this about?"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  <Form.Label className="myNavItem">Thoughts</Form.Label>
                  <Form.Control style={{height:'150px'}} as='textarea' placeholder="Ok, tell me. Do leave your email address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col>
              <img
                style={{ height: "30rem", width: "45rem" }}
                src="/undraw_contact_us.svg"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
