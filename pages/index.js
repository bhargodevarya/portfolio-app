import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TypedComponent from "../component/TypedComponent";

const Home = (props) => {
  return (
    <div className='homeIntroText'>
      <TypedComponent strings={props.typedText} />
      <Container>
        <Row>
          <p className="typedIntro">{props.introText}</p>
        </Row>
      </Container>
    </div>
  );
};

/**
 * Nextjs specific function that is used to populate the initial props
 * for this component. The is called from the nextjs App component
 */
Home.getInitialProps = async () => {
  console.log("hello from home");
  //This is normally a newtork call or something similar that usually returns a Promise.
  //const movies = await getMovies();
  //movies.map((m) => console.log("From home ", m.name));
  //return the props directly, what ever is returned is available on props variable in the component
  return {
    //movies,
    introText: "Welcome to my site. I hope this makes you curious. Feel free to explore and you can contact me here",
    typedText: "Backend, Frontend, And everything in between"
  };
};

export default Home;
