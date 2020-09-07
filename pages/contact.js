import React, { Component } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      message: "",
    };
    this.captureFormDetails = this.captureFormDetails.bind(this);
    this.captureName = this.captureName.bind(this);
    this.captureSubject = this.captureSubject.bind(this);
    this.captureMessage = this.captureMessage.bind(this);
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

  captureFormDetails(e) {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://n4rd4luy03.execute-api.us-east-1.amazonaws.com/Dev/contact', this.state).then(res => {
      console.log("Sent contact success", res)
      alert('I will get back to you, promise. P.S. not the javascript one.')
      this.setState({
        name: "",
        subject: "",
        message: "",
      });
    }).catch(err => {
      console.log('Error while sending contact', err)
    })
  }

  captureName(e) {
    e.preventDefault();
    this.setState({ ...this.state, name: e.target.value });
  }

  captureSubject(e) {
    e.preventDefault();
    this.setState({ ...this.state, subject: e.target.value });
  }

  captureMessage(e) {
    e.preventDefault();
    this.setState({ ...this.state, message: e.target.value });
  }

  render() {
    return (
      <div id="contactFormId">
        <Container id="formContainer" className="container">
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="myNavItem">Name</Form.Label>
                  <Form.Control
                    type="input"
                    onChange={this.captureName}
                    value={this.state.name}
                    placeholder="How should I address you"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                  <Form.Label className="myNavItem">Subject</Form.Label>
                  <Form.Control
                    type="input"
                    onChange={this.captureSubject}
                    placeholder='What is this about?'
                    value={this.state.subject}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  <Form.Label className="myNavItem">Thoughts</Form.Label>
                  <Form.Control
                    style={{ height: "150px" }}
                    as="textarea"
                    onChange={this.captureMessage}
                    placeholder="ok, tell me"
                    value={this.state.message}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={this.captureFormDetails}
                  type="button"
                >
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
