//AppBar
import AppBar from 'SharedComponents/AppBar'
//CanvasLineText
import CanvasLineText from 'Components/CanvasLineText'
//React
import React from 'react'
//Background with clipper
import BackgroundWithClipper from 'SharedComponents/BackgroundWithClipper'
//Material ui
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
//About section
import About from 'Components/About'

const Home = () => {
    const theme = useTheme()

    const contentPadding = '1em'
    const coloredBackground = theme.palette.primary.light
    const clearBackground = 'white'

    return (
        <React.Fragment>
            <AppBar />

            <CanvasLineText />

            <BackgroundWithClipper backgroundColor='white'contentPadding={contentPadding}>
                <About />
            </BackgroundWithClipper>

        </React.Fragment>
    )
}

export default React.memo(Home)