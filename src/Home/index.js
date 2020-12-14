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
//import { fontsPromise } from 'Utilities/Constants'

//Languages section 
//import Languages from 'Components/Languages'

//Projects section
//const Projects = lazy(() => import('Components/Projects'))
import Projects from 'Components/Projects'

//Contact section
import Contact from 'Components/Contact'


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

    /*
    const [fontsLoaded, setFontsLoaded] = useState(false)
    fontsPromise.then(() => {
        setFontsLoaded(true)
    })
    */

    return (
        <Fragment>
            <div className={`${classes.container} ${homeLoaded /*&& fontsLoaded*/ ? classes.containerLoaded : null}`}>
                <AppBar />

                <CanvasLineText />


                <BackgroundWithClipper backgroundColor='white' contentPadding={contentPadding}>
                    <About />
                </BackgroundWithClipper>

                {/* 
                <BackgroundWithClipper backgroundColor={theme.palette.secondary[200]} contentPadding={contentPadding}>
                    <Languages/>
                </BackgroundWithClipper>
                */}

                <BackgroundWithClipper backgroundColor={theme.palette.secondary[200]} contentPadding={contentPadding}>
                    <Projects />
                </BackgroundWithClipper>

                <BackgroundWithClipper backgroundColor='white' contentPadding={contentPadding} bottomSpacer={false}>
                    <Contact />
                </BackgroundWithClipper>
            </div>
        </Fragment>
    )
}

export default memo(Home)