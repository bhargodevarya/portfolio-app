import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Caraousel from '../component/Carousel'
import getMovies from '../data/data'

const Home = (props) => {
  return (
    <div>
    {/* passing props to the Caraousel component*/}
    <Caraousel movies={props.movies}/>
    <Button>My Button</Button>
    </div>
  )
}

/**
     * Nextjs specific function that is used to populate the initial props
     * for this component. The is called from the nextjs App component
     */
Home.getInitialProps = async () => {
  console.log("hello from home")
  //This is normally a newtowk call or something similar that usually returns a Promise.
  const movies = await getMovies()
  movies.map(m => console.log("From home ", m.name))
  //return the props directly, what ever is returned is available on props variable in the component
  return { movies }
}

export default Home
