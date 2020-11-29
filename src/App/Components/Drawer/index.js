import useStyles from './styles/index.styles'
import { Drawer as MuiDrawer, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { memo, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Drawer = ({ drawerOpen = false, setDrawerOpen }) => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <MuiDrawer anchor='left' open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
            <div className={classes.drawerItemsContainer}>

                <div className={classes.drawerTopItemContainer}>
                    <div className={classes.drawerTopItem}>
                        <span onClick={() => { setDrawerOpen(false) }}>
                            <FontAwesomeIcon icon={faTimes} size='4x' color={theme.palette.primary.main} />
                        </span>
                    </div>
                    <div className={classes.drawerSpacer} />
                </div>

                {
                    ['About', 'Portfolio', 'Contacts'].map((item, index) => {
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
                                    <div className={classes.drawerSpacer} />
                                    <div className={`${classes.drawerItem}`}>
                                        <Typography variant='h2'>
                                            {item}
                                        </Typography>
                                    </div>
                                    <div className={classes.drawerSpacer} />
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