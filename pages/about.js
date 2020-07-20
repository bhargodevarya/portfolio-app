import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Techcard from '../component/cards/Techcard'

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
        <Col className="techcard"><Techcard title="Backend" shortDesc="Scalabale and resillient solutions for your business" image="/undraw_server_cluster_jwwq.png" /></Col>
        <Col className="techcard"><Techcard title="Cloud" shortDesc="Cloud solutions to help your business grow" image="/undraw_going_up_ttm5.png" /></Col>
        <Col className="techcard"><Techcard title="Frontend" shortDesc="Immersive UI experience to tailormade for you" image="/undraw_experience_design_eq3j.png" /></Col>
        <Col className="techcard"><Techcard title="Devops" shortDesc="Release more often and with more ease" image="/undraw_version_control_9bpv.png" /></Col>
      </Row>
    </Container>
  );
};

export default About;
