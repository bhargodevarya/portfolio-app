import React, { Component } from "react";
import axios from "axios";
import { getPortfolios } from "../data/data";

import Card from "react-bootstrap/Card";

export default class portfolio extends Component {
  
    processPortfolios(portfolios) {
    return portfolios.map((portfolio) => (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {portfolio.designation} at{" "}
            {portfolio.organization}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {portfolio.location}
          </Card.Subtitle>
          <Card.Text>{portfolio.shortDesc}</Card.Text>
          <Card.Link href="#">Details</Card.Link>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    console.log(this.props.portfolio[0].designation);    
    return (
      <div>
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
