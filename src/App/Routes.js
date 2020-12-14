//React
import { Suspense, lazy, memo } from 'react'
//React router
import { Route, HashRouter } from 'react-router-dom'
//Home
const Home = lazy(() => import('Components/Home'))
//import Home from 'Components/Home'

//WCR
const WCR = lazy(() => import('Components/WCR/wcr.js'))
//import WCR from 'Components/WCR/wcr.js'

//Ink
const Ink = lazy(() => import('Components/Ink/Ink.js'))
//React transition
import { CSSTransition, TransitionGroup } from 'react-transition-group'
//Scroll to top
import ScrollToTop from 'SharedComponents/ScrollToTop'
//Mui Loader
import CircularProgress from '@material-ui/core/CircularProgress'
//Mui
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    container: {
        position: 'relative'
    },

    page: {
        position: 'absolute',
        inset: 0,
    },

    pageLoader: {
        width: '4rem',
        height: '4rem',
        margin: '4rem auto',
    },

    route: {
        transition: 'opacity 1000ms ease-in-out',

        '&-appear': {
            opacity: 0,
            zIndex: 2,
        },

        '&-appear-active': {
            opacity: 1,
        },

        '&-appear-done': {
            opacity: 1,
        },

        '&-enter': {
            opacity: 0,
            zIndex: 2,
        },

        '&-enter-active': {
            opacity: 1,
        },

        '&-enter-done': {
            opacity: 1,
        },

        '&-exit': {
            opacity: 1,
        },

        '&-exit-active': {
            opacity: 0,
        },

        '&-exit-done': {
            opacity: 0,
        }
    }
})

const Routes = () => {
    const classes = useStyles()

    const routes = [
        { path: '/WombatCoffeeRoasters', Component: WCR },
        { path: ['/', '/about', '/projects','/contact'], Component: Home },
        { path: '/Ink', Component: Ink }
    ]

    return (
        <>
            <ScrollToTop />

            <div className={classes.container}>
                {
                    routes.map(({ path, Component }, index) => (
                        <Route key={index} path={path} exact>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    appear={true}
                                    timeout={1000}
                                    classNames={classes.route}
                                    unmountOnExit
                                >
                                    <div className={`${classes.page} ${classes.route}`}>
                                        <Suspense fallback={
                                            <div className={classes.pageLoader}>
                                                <CircularProgress size='100%' />
                                            </div>
                                        }>
                                            <Component />
                                        </Suspense>
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))
                }
            </div>
        </>
    )
}

//export default memo(Routes)

const Router = () => {
    return (
        <HashRouter>
            <Routes />
        </HashRouter>
    )
}

export default memo(Router)

/*
        <HashRouter>
            <Switch>
                <Route path='/WombatCoffeeRoasters'>
                    <Suspense fallback={<div>Loading</div>}>
                        <WCR />
                    </Suspense>
                </Route>
                <Route path='/'><Home /></Route>
            </Switch>
        </HashRouter>
        */