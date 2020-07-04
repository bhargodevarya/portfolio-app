import React, { Component } from "react";
import axios from "axios";
import { getPortfolios } from "../data/data";

import Card from "react-bootstrap/Card";

import PortFolioModal from '../component/PortFolioModal'

export default class portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      portfolio: {
          shortDesc: '',
          longDesc: '',
          org: '',
          designation:''
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleClick(e) {
    this.setState({ show: !this.state.show });
  }

  handleDetailsClick(d, ld, sd, o) {
      this.setState({show: !this.state.show, longDesc: ld, shortDesc: sd, org:o, designation:d})      
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
          <Card.Link href="#" onClick={() => this.handleDetailsClick(portfolio.designation, portfolio.longDesc, portfolio.shortDesc, portfolio.organization)}>Details</Card.Link>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    return (
      <div>
        <PortFolioModal show={this.state.show} handleClick={this.handleClick} shortDesc={this.state.shortDesc} 
        longDesc={this.state.longDesc} org={this.state.org} designation={this.state.designation}/>
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
