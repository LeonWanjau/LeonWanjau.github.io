import { makeStyles } from '@material-ui/core/styles'

const topItemHeight = '10vh'
const bottomItemHeight = '10vh'
const spacerHeight = '10vh'
const drawerItems = '3'
//const drawerItemHeight=`calc((100vh - ${topItemHeight} - ${bottomItemHeight} - (${spacerHeight} * 2) - ((${spacerHeight}) * ${drawerItems})) / ${drawerItems})`
const drawerItemHeight = '15vh'
const clipPath = `polygon(0 0, 100% ${spacerHeight}, 100% 100%, 0 100%)`

const useStyles = makeStyles(theme => ({
    drawerItemsContainer: {
        minWidth: '80vw',
        height: '100%',
        overflowY: 'hidden',
    },

    drawerTopItemContainer: {
        backgroundColor: 'white',
    },

    drawerTopItem: {
        height: topItemHeight,
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0.2em 0.8em'
    },

    drawerItemContainer: {
        clipPath: clipPath,
        marginTop: `-${spacerHeight}`,
    },

    drawerItem: {
        height: drawerItemHeight,
        padding: '0.5em 0 0 1em'
    },

    drawerItem1: {
        //backgroundImage:`linear-gradient(135deg, ${theme.palette.primary[300]} 5%, ${theme.palette.primary[100]} 40%)`,
        backgroundColor: theme.palette.primary[200],
        transition: 'background-color 200ms ease-in-out',

        '&:hover': {
            backgroundColor: theme.palette.primary[500],
            cursor: 'pointer',
        },

        '&:hover $link': {
            color: 'white',
        }
    },

    drawerItem2: {
        //backgroundImage:`linear-gradient(135deg, ${theme.palette.secondary[300]} 5%, ${theme.palette.secondary[100]} 40%)`,
        backgroundColor: theme.palette.secondary[300],
        transition: 'background-color 200ms ease-in-out',

        '&:hover': {
            backgroundColor: theme.palette.secondary[900],
            cursor: 'pointer',
        },

        '&:hover $link': {
            color: 'white',
        }
    },

    drawerItem3: {
        backgroundColor: theme.palette.primary[200],
        transition: 'background-color 200ms ease-in-out',

        '&:hover': {
            backgroundColor: theme.palette.primary[500],
            cursor: 'pointer',
        },

        '&:hover $link': {
            color: 'white',
        }
    },

    drawerItemOutline: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },

    drawerSpacer: {
        height: spacerHeight,
    },

    drawerBottomContainer: {
        marginTop: `-${spacerHeight}`,
        clipPath: clipPath,
        backgroundColor: `white`
    },

    drawerBottomItem: {
        height: `calc(${bottomItemHeight})`,
    },

    closeIconContainer: {
        width: '4rem',
        height: '4rem',
        marginTop: '1rem',

        '&:hover $closeIcon': {
            fill: theme.palette.primary[900],
            transform: 'scale(0.9)',
            cursor: 'pointer',
        },

        '&:active $closeIcon': {
            transform: 'scale(0.7)'
        }
    },

    closeIcon: {
        width: '100%',
        height: '100%',
        fill: theme.palette.primary.main,
        transition: 'fill 100ms ease-in-out, transform 100ms ease-in-out'
    },

    link: {
        display: 'block',
        textDecoration: 'none',
        color: 'black',
        transition: 'color 200ms ease-in-out'
    },
}))

export default useStyles