import Head from "next/head";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MyCaraousel from "../component/MyCarousel";
import {getMovies} from "../data/data";

import MyNavBar from '../component/RBNavBar'

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
