import { makeStyles } from '@material-ui/core/styles'

const innerAppBarHeight = '65%'
const appBarHeight = '10vh'
const largeAppBarClipPath = `polygon(
    0 0,
    0 ${innerAppBarHeight},
    2% 100%,
    40% 100%,
    42% ${innerAppBarHeight},
    100% ${innerAppBarHeight},
    100% 0
)`
const smallAppBarClipPath = `polygon(
    0 0,
    0 ${innerAppBarHeight},
    8% 100%,
    40% 100%,
    48% ${innerAppBarHeight},
    100% ${innerAppBarHeight},
    100% 0
)`
const zIndex = 10

const useStyles = makeStyles(theme => ({
    appBarContainer: {
        display: 'flex',
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 5%, ${theme.palette.primary[200]} 40%)`,
        height: appBarHeight,
        width: '100%',
        justifyContent: 'flex-end',
        //clipPath: smallAppBarClipPath,
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: zIndex
    },

    innerAppBarContainer: {
        //height: innerAppBarHeight,
        height: '100%',
        padding: '0.2em 0.8em',
        display: 'flex',
        flex: '1 1 0',
    },

    routesArea: {
        display: 'none',
        marginRight: '1em',
    },

    borderAppBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: appBarHeight,
        width: '100%',
        //filter: 'drop-shadow(5px 5px 0 red)',
        zIndex: zIndex,
    },

    menuIconContainer:{
        height:'95%',
        width:'3rem',
    },

    menuIcon: {
        width:'100%',
        height:'100%',
        fill:'white',
        transition:'fill 100ms ease-in-out, transform 100ms ease-in-out',

        '&:hover':{
            fill:theme.palette.secondary[500],
            transform:'scale(0.9)',
            cursor:'pointer',
        },

        '&:active':{
            transform:'scale(0.7)'
        }
    },

    drawerItemsContainer: {
        minWidth: '80vw',
        height: '100%',
    },

    drawerCloseIconContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0.2em 0.8em'
    },

    drawerRoutesContainer: {
        padding: '0.5em 0 0 0'
    },

    drawerRouteItem: {
        padding: '0.5em'
    },

    spacer: {
        height: appBarHeight
    },
    /*
    clippedBorderAppBar: {
        height: '100%',
        width: '100%',
        clipPath: appBarClipPath,
        backgroundColor: 'black',
    },

    borderAppBarDilate: {
        filter: `url(${AppBarBorderSvg}#dilate_shape)`,
    },
    */

    [theme.breakpoints.up('sm')]: {
        appBarContainer: {
            // clipPath: largeAppBarClipPath,
        },

        menuIconContainer: {
            display: 'none',
        },

        routesArea: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },

        innerAppBarContainer: {
            justifyContent: 'flex-end'
        }
    }
}))

export default useStyles