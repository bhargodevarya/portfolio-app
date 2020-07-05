import App from 'next/app'
import Header from '../component/Header'
import NavBar from '../component/NavBar'
import MyNavBar from '../component/RBNavBar'
//import style file so that it is available to all components and pages
import styles from '../styles/styles.css'

//import bootstrap to enable it across the site
//raw bootstrap works out of the box on each component
//for using react-bootstrap import the component on the page
//import 'jquery/dist/jquery.min.js'
//import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typed.js/lib/typed.min.js'
import RBNavBar from '../component/RBNavBar'


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
                {/* <Header/> */}
                {/* Each component gets their respective props which are returned from the  
                getInitialProps function defined in that component */}
                {/* <NavBar {...pageProps}/> */}
                <RBNavBar {...pageProps}/>
                <Component {...pageProps}/>
            </div>
        )
    }

}

export default MovieApp