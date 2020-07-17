import Head from "next/head";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MyCaraousel from "../component/MyCarousel";
import {getMovies} from "../data/data";

import MyNavBar from '../component/RBNavBar'

import TypedComponent from '../component/TypedComponent'

// imported to test, use in some other component
import CloudCard from '../component/cards/CloudCard'
import FrontEndCard from '../component/cards/FrontEndCard'
import BackEndCard from '../component/cards/BackendCard'
import DevopsCard from '../component/cards/DevopsCard'

const Home = (props) => {
  return (
    <div>
      {/*
      <Container>
        <Row>This is the first row</Row>
        <Row>
          <MyCaraousel movies={props.movies} />
        </Row>
      </Container>
      */}
      <TypedComponent strings="Developer, Creator, Curious"/>
      <img class="imageHome" src="/animation_4.gif"></img>
    </div>
  );
};

/**
 * Nextjs specific function that is used to populate the initial props
 * for this component. The is called from the nextjs App component
 */
Home.getInitialProps = async () => {
  console.log("hello from home");
  //This is normally a newtowk call or something similar that usually returns a Promise.
  const movies = await getMovies();
  movies.map((m) => console.log("From home ", m.name));
  //return the props directly, what ever is returned is available on props variable in the component
  return { movies };
};

export default Home;
