import { useState } from 'react'
import Button from 'react-bootstrap/Button'

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
        <div>
            This is the about page<br></br>
            <Button onClick={increment}>Increment</Button><br></br>
            <Button onClick={decrement}>Decrement</Button><br></br>
            {count}
        </div>
    )
}

export default About
