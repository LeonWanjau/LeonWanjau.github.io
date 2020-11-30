//AppBar
import AppBar from 'SharedComponents/AppBar'
//CanvasLineText
import CanvasLineText from 'Components/CanvasLineText'
//React
import { Fragment,memo } from 'react'
//Background with clipper
import BackgroundWithClipper from 'SharedComponents/BackgroundWithClipper'
//Material ui
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
//About section
import About from 'Components/About'
//Styles
import useStyles from './styles/index.styles'
//Helmet
import { Helmet } from 'react-helmet'
//Tab image
import TabImage from 'Assets/images/tab-briefcase.svg'

const Home = () => {
    const classes = useStyles()

    const theme = useTheme()

    const contentPadding = '1em'
    const coloredBackground = theme.palette.primary.light
    const clearBackground = 'white'

    return (
        <Fragment>
            <Helmet>
                <title>Leon Wanjau</title>
                <link rel='icon' href={TabImage} />
            </Helmet>

            <AppBar />

            <CanvasLineText />

            <BackgroundWithClipper backgroundColor='white' contentPadding={contentPadding}>
                <About />
            </BackgroundWithClipper>
        </Fragment>
    )
}

export default memo(Home)