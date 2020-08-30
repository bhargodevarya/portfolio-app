import React, { Component } from 'react'
import getMovies from '../data/data'

export default class Blog extends Component {

    /**
     * Nextjs specific function that is used to populate the initial props
     * for this component. The is called from the nextjs App component
     */
    static async  getInitialProps() {
        const movies = await getMovies()
        return { movies }
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { movies } = this.props
        return (
            <div>
                this is the blog page
            </div>
        )
    }
}
