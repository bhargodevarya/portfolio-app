import React, { Component } from 'react'
import getMovies from '../data/data'
import App from 'next/app'

//TODO, use bootstrap caraousel 
class Carousel extends Component {

    render() {
        console.log("In caraousel again", this.props.movies)
        return (
            <div>
                This is the caraousel
            </div>
        )
    }
}


export default Carousel
