import useStyles from './styles/index.styles'
import { Drawer as MuiDrawer, Typography } from '@material-ui/core'
import { memo } from 'react'

const Drawer = ({ drawerOpen = false, setDrawerOpen }) => {
    const classes = useStyles()

    const routes = {
        About: '#about',
        Projects:'#projects',
        Contact:'#contact'
    }

    return (
        <MuiDrawer anchor='left' open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
            <div className={classes.drawerItemsContainer}>

                <div className={classes.drawerTopItemContainer}>
                    <div className={classes.drawerTopItem}>
                        <span className={classes.closeIconContainer} onClick={() => { setDrawerOpen(false) }}>
                            <svg className={classes.closeIcon} viewBox="0 0 174.24 174.24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z" />
                                <path d="m120.83 53.414c-2.917-2.917-7.647-2.917-10.559 0l-23.151 23.154-23.151-23.154c-2.917-2.917-7.642-2.917-10.559 0s-2.917 7.642 0 10.559l23.151 23.153-23.152 23.154c-2.917 2.917-2.917 7.642 0 10.559 1.458 1.458 3.369 2.188 5.28 2.188s3.824-0.729 5.28-2.188l23.151-23.153 23.151 23.153c1.458 1.458 3.369 2.188 5.28 2.188s3.821-0.729 5.28-2.188c2.917-2.917 2.917-7.642 0-10.559l-23.152-23.153 23.151-23.153c2.917-2.917 2.917-7.643 0-10.56z" />
                            </svg>

                        </span>
                    </div>
                    <div className={classes.drawerSpacer} />
                </div>

                {
                    Object.entries(routes).map(([routeName, route], index) => {
                        let itemClass
                        if (index == 0) {
                            itemClass = classes.drawerItem1
                        } else if (index == 1) {
                            itemClass = classes.drawerItem2
                        } else {
                            itemClass = classes.drawerItem3
                        }

                        return (
                            <div key={index} className={`${classes.drawerItemContainer} ${itemClass}`} >
                                <a className={classes.link} href={route} onClick={() => { setDrawerOpen(false) }}>
                                    <div className={classes.drawerSpacer} />
                                    <div className={`${classes.drawerItem}`}>
                                        <Typography variant='h2'>
                                            {routeName}
                                        </Typography>
                                    </div>
                                    <div className={classes.drawerSpacer} />
                                </a>
                            </div>
                        )
                    })
                }

                <div className={classes.drawerBottomContainer}>
                    <div className={classes.drawerSpacer} />
                    <div className={classes.drawerBottomItem} />
                    <div className={classes.drawerSpacer} />
                </div>
            </div>
        </MuiDrawer>
    )
}

export default memo(Drawer)