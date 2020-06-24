import React, { Component } from "react";
import getMovies from "../data/data";
import App from "next/app";
import Carousel from "react-bootstrap/Carousel";

class MyCarousel extends Component {

  /**
   * Takes an array of movies and create the carousel item for bootstrap
   * for each item
   * @param moviesArr 
   */
  createCaraousel(moviesArr) {
    return moviesArr.map((movie) => 
      <Carousel.Item>
        <img className="d-block w-100" src={movie.image} alt={movie.name} />
        <Carousel.Caption>
          <h3>{movie.name}</h3>
          <p>{movie.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  render() {
    console.log("In caraousel again", this.props.movies);
    const moviesArr = this.props.movies;
    return (
      <div>
        {/* This is before the caraousel */}
        <div>
          <Carousel controls={false} indicators={false}>
            {this.createCaraousel(moviesArr)}
          </Carousel>
        </div>
        {/* <div>This is after the caraousel</div> */}
      </div>
    );
  }
}

export default MyCarousel;
