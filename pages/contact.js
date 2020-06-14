import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {count:0}
        this.decrement = this.decrement.bind(this)
    }

    /*
    You can initiate the state like this as well, but you wont be able to use is in any advanced use cases
    state = {
         count: 0
     }     
     */

    //this.decrement = this.decrement.bind(this)

    increment = (e) => {
        //arrow functions inherit the this context from the context where they are defined
        //and therefore can be called directly from the component
        e.preventDefault()

        let currentCount = this.state.count

        //This below statement does not set the state and hence does not lead to re-render
        //this.state.count = currentCount +1

        //setState must be called to change the state and lead to a re-render
        this.setState({count: currentCount+1})
    }

    /**
     * Normal function dont the the this context. Therefore must either be binded in the constructor
     * or be called via callback function from the actual component
     */
    decrement() {
        this.setState({count: this.state.count-1})
    }
    
    render() {
        return (
            <div>
                This is the contact us page<br></br>
                <Button onClick={this.increment}>Increment</Button><br></br>
                {/* 
                if you dont want to bind in the constructor
                <Button onClick={() => this.decrement()}>Decrement</Button><br></br> 
                */}
                <Button onClick={this.decrement}>Decrement</Button><br></br>
                {this.state.count}
            </div>
        )
    }
}

export default Contact
