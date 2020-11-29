//Styles
import useStyles from './styles/index.styles.js'
//PageLink
import PageLink from './PageLink'
//Mui
import { /*Drawer as MuiDrawer,*/Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
//React
import React, { useState, useRef, useEffect } from 'react'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Drawer from 'SharedComponents/Drawer'


//AppBar Routes
const routes = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/' },
    { name: 'Contacts', path: '/' }
]

const AppBar = () => {
    const classes = useStyles()
    const theme = useTheme()

    const smallMediaQuery = window.matchMedia(theme.breakpoints.down('sm'))
    const [smallWindow, setSmallWindow] = useState(smallMediaQuery.matches)

    const menuIconRef = useRef(null)
    const [drawerOpen, setDrawerOpen] = useState(false)

    useEffect(() => {
        menuIconRef.current.addEventListener('click', () => { setDrawerOpen(true) })

    }, [])

    return (
        <React.Fragment>
            <div
                className={classes.appBarContainer}
            >
                <div className={classes.innerAppBarContainer}>
                    <span ref={menuIconRef} className={classes.menuIconContainer}>
                        <FontAwesomeIcon icon={faBars} size='3x' color='white' className={classes.menuIcon} />
                    </span>

                    <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

                        <div className={classes.routesArea}>
                            {/*<Divider orientation='vertical' />*/}
                            {
                                routes.map((route, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <PageLink text={route.name} path={route.path} 
                                            rightBorder={index==routes.length - 1}
                                            leftBorder={true}
                                            />
                                            {/*index !== routes.length - 1 ? <Divider orientation='vertical' /> : null*/}
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                </div>
            </div>
            <div></div>
        </React.Fragment>
    )
}

export default React.memo(AppBar)