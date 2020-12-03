//AppBar
import AppBar from 'SharedComponents/AppBar'
//CanvasLineText
import CanvasLineText from 'Components/CanvasLineText'
//React
import { Fragment, memo, useEffect, useState } from 'react'
//Background with clipper
import BackgroundWithClipper from 'SharedComponents/BackgroundWithClipper'
//Material ui
import { useTheme } from '@material-ui/core/styles'
//About section
import About from 'Components/About'
//Styles
import useStyles from './styles/index.styles'
//Fonts promise
import { fontsPromise } from 'Utilities/Constants'

const Home = () => {
    const classes = useStyles()

    const theme = useTheme()

    const contentPadding = '1em'
    const coloredBackground = theme.palette.primary.light
    const clearBackground = 'white'

    const [homeLoaded, setHomeLoaded] = useState(false)
    useEffect(() => {
        setHomeLoaded(true)
    }, [])

    const [fontsLoaded, setFontsLoaded] = useState(false)
    fontsPromise.then(() => {
        setFontsLoaded(true)
    })

    return (
        <Fragment>
            <div className={`${classes.container} ${homeLoaded && fontsLoaded ? classes.containerLoaded : null}`}>
                <AppBar />

                <CanvasLineText />


                <BackgroundWithClipper backgroundColor='white' contentPadding={contentPadding}>
                    <About />
                </BackgroundWithClipper>
            </div>
        </Fragment>
    )
}

export default memo(Home)