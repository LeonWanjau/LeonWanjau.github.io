//Styles
import useStyles from './styles/index.styles.js'
//PageLink
import PageLink from './PageLink'
//React
import React, { useState, useRef, useEffect } from 'react'
//Hamburger menu svg
import MenuSvg from 'Assets/images/hamburgerMenu.svg'
import Drawer from 'SharedComponents/Drawer'


//AppBar Routes
const routes = [
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
    //{ name: 'Projects', path: '/' },
    //{ name: 'Contacts', path: '/' }
]

const AppBar = () => {
    const classes = useStyles()

    const menuIconRef = useRef(null)
    const [drawerOpen, setDrawerOpen] = useState(false)
    function openDrawer() {
        setDrawerOpen(true)
    }

    useEffect(() => {
        menuIconRef.current.addEventListener('click', openDrawer, false)

        return () => { menuIconRef.current.removeEventListener('click', openDrawer, false) }
    }, [])

    return (
        <React.Fragment>
            <div
                className={classes.appBarContainer}
            >
                <div className={classes.innerAppBarContainer}>
                    <div ref={menuIconRef} className={classes.menuIconContainer}>
                        <svg className={classes.menuIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="m21.5 24h-19c-1.379 0-2.5-1.122-2.5-2.5v-19c0-1.378 1.121-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v19c0 1.378-1.121 2.5-2.5 2.5zm-19-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z" /></g><g><path d="m16.5 8h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                            </g>
                            <g>
                                <path d="m16.5 12.5h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                            </g>
                            <g>
                                <path d="m16.5 17h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                            </g>
                        </svg>
                    </div>

                    <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

                    <div className={classes.routesArea}>
                        {/*<Divider orientation='vertical' />*/}
                        {
                            routes.map((route, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <PageLink text={route.name} path={route.path}
                                            rightBorder={index == routes.length - 1}
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