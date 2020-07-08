import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CloudCard from "../component/cards/CloudCard";
import FrontEndCard from "../component/cards/FrontEndCard";
import BackEndCard from "../component/cards/BackendCard";
import DevopsCard from "../component/cards/DevopsCard";

const About = () => {
  /**
   * useState is a hook which allows functional components to play with state
   * Call it with intial state and it gives back an array of 2 elements
   * first, the state and second the function to set it.
   *
   * Use array destructuring to access them like below
   */
  const [count, setCount] = useState(0);

  /**
   * Cant have normal functions here as it is a functional component.
   * Only arrow functions work here.
   */
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Container>
      <Row>
        <Col className="techcard"><BackEndCard /></Col>
        <Col className="techcard"><FrontEndCard/></Col>
        <Col className="techcard"><DevopsCard/></Col>
        <Col className="techcard"><CloudCard/></Col>
      </Row>
    </Container>
  );
};

export default About;
