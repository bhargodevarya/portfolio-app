import React, { Component } from 'react'
import axios from 'axios'
import {getPortfolios} from '../data/data'

export default class portfolio extends Component {
    render() {
        console.log(this.props.portfolio[0].designation)
        return (
            <div style={{color:"red"}}>
                This is the portfolio page
            </div>
        )
    }
}

export async function getStaticProps() {
    //const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
    //console.log(response)
    const portfolios = await getPortfolios()
    return {props: portfolios}
}
