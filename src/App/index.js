//Regenerator Runtime
import "regenerator-runtime/runtime.js"
import React, { lazy, Suspense, useState, useEffect } from 'react'
global.React = React
import { render } from 'react-dom'
//Material UI
import { ThemeProvider } from '@material-ui/core/styles'
//Theme
import Theme from 'SharedComponents/Theme'
//Routes
import Routes from './Routes'
//Styles
import useStyles from './styles'
//Helmet
import { Helmet } from 'react-helmet'
//Tab image
import TabImage from 'Assets/images/tab-briefcase.svg'

const App = () => {
    const classes = useStyles()

    //const [windowLoaded, setWindowLoaded] = useState(false)

    /*
    useEffect(() => {
        if (document.readyState !== 'complete') {
            window.addEventListener('load', () => {
                setWindowLoaded(true)
            })
        } else {
            setWindowLoaded(true)
        }
    }, [])
    */

    return (
        <div className={`${classes.appContainer}`}>
            <Helmet>
                <title>Leon Wanjau</title>
                <link rel='icon' href={TabImage} />
            </Helmet>

            <ThemeProvider theme={Theme}>
                <Routes />
            </ThemeProvider>
        </div>
    )
}

render(
    <App />,
    document.getElementById('react-container')
)