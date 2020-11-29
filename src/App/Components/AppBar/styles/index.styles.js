import { makeStyles } from '@material-ui/core/styles'
import AppBarBorderSvg from '../AppBarBorder.svg'
import indigo from '@material-ui/core/colors/indigo'

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
const smallAppBarClipPath=`polygon(
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
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 5%, ${indigo[200]} 40%)`,
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
        height:'100%',
        padding: '0.2em 0.8em',
        display: 'flex',
        flex: '1 1 0',
    },

    routesArea: {
        display:'none',
        marginRight:'1em',
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

    menuIcon:{
        marginTop: '0.04em',
    },

    drawerItemsContainer:{
        minWidth:'80vw',
        height:'100%',
    },

    drawerCloseIconContainer:{
        display:'flex',
        justifyContent:'flex-end',
        padding:'0.2em 0.8em'
    },

    drawerRoutesContainer:{
        padding:'0.5em 0 0 0'
    },

    drawerRouteItem:{
        padding:'0.5em'
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

    [theme.breakpoints.up('sm')]:{
        appBarContainer:{
           // clipPath: largeAppBarClipPath,
        },

        menuIconContainer:{
            display:'none',
        },

        routesArea:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center'
        },

        innerAppBarContainer:{
            justifyContent:'flex-end'
        }
    }
}))

export default useStyles