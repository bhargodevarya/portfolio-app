import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
    /**
     * useState is a hook which allows functional components to play with state
     * Call it with intial state and it gives back an array of 2 elements
     * first, the state and second the function to set it.
     * 
     * Use array destructuring to access them like below
     */
    const [count, setCount] = useState(0)
    

    /**
     * Cant have normal functions here as it is a functional component.
     * Only arrow functions work here.
     */
    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    return (
        <Container>
            <Row>
                <Col style={{color:"red"}}>Github</Col>
                <Col><a style={{color:"red"}} href="https://github.com/bhargodevarya">profile</a></Col>
            </Row>
            <Row>
                <Col><img src="/github_profile_200px.svg"></img></Col>
            </Row>
        </Container>
    )
}

export default About
