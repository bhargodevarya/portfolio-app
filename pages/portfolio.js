import React, { Component } from "react";
import axios from "axios";
import { getPortfolios } from "../data/data";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PortFolioModal from "../component/PortFolioModal";

export default class portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      portfolio: {
        shortDesc: "",
        longDesc: "",
        org: "",
        designation: "",
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
    this.createCard = this.createCard.bind(this);
  }

  handleClick(e) {
    this.setState({ show: !this.state.show });
  }

  handleDetailsClick(d, ld, sd, o) {
    this.setState({
      show: !this.state.show,
      longDesc: ld,
      shortDesc: sd,
      org: o,
      designation: d,
    });
  }

  createCard(designation, org, location, shortDesc, longDesc) {
    return (
      <Col style={{paddingTop:'2rem'}}>
        <Card style={{ width: "18rem"}}>
          <Card.Body>
            <Card.Title>
              {designation} at {org}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {location}
            </Card.Subtitle>
            <Card.Text>{shortDesc}</Card.Text>
            <Card.Link
              href="#"
              onClick={() =>
                this.handleDetailsClick(designation, longDesc, shortDesc, org)
              }
            >
              Details
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  processPortfolios(portfolios) {
    return portfolios.map((portfolio, index) => {
      return this.createCard(
        portfolio.designation,
        portfolio.organization,
        portfolio.location,
        portfolio.shortDesc,
        portfolio.longDesc
      )
    }
    );
  }

  render() {
    return (
      <div>
        <Container fluid="md">
          <Row xs={1} md={3}>{this.processPortfolios(this.props.portfolio)}</Row>
        </Container>
        <PortFolioModal
          show={this.state.show}
          handleClick={this.handleClick}
          shortDesc={this.state.shortDesc}
          longDesc={this.state.longDesc}
          org={this.state.org}
          designation={this.state.designation}
        />
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
