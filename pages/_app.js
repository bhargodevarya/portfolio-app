import App from 'next/app'
import Header from '../component/Header'

/**
 * Nextjs component that can be used to wrap up all pages.
 * makes ot easy for global styling and also for getting global state.
 */
class MovieApp extends App {

    /**
     * Nextjs special funciton that populates the initial state.
     * This inturn calls the same function defined in other components.
     * It allows component specific state to be set.
     */
    static async getInitialProps(context) {
        const appProps = await App.getInitialProps(context)
        console.log("app props", appProps)
        return { ...appProps }
    }

    render() {

        const { Component, pageProps } = this.props

        return(
            <div>
                <Header/>
                {/* Each component gets their respective props which are returned from the  
                getInitialProps function defined in that component */}
                <Component {...pageProps}/>
            </div>
        )
    }

}

export default MovieApp