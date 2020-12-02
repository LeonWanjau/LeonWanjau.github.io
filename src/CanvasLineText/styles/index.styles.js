import { makeStyles, useTheme } from '@material-ui/core/styles'
import { largeClipperHeight, smallClipperHeight, appBarHeight, fonts } from 'Utilities/Constants'

const canvasClipPath = `polygon(
    0 0,
    0 85%,
    100% 100%,
    100% 0
)`

const height = '80vh'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: `calc(${height} + ${smallClipperHeight})`,/*[`calc(${props.height} + ${props.spacerHeight})`,`!important`],*/
        display: 'block',
        backgroundColor: theme.palette.secondary[200],
        position: 'relative',
        overflow: 'hidden',
        //clipPath:canvasClipPath,
    },

    canvas: {
        width: '100% !important',
        height: '100% !important',
        display: 'block',
        opacity: 0,
        transform:'scale(1.2)'
    },

    canvasLoaded: {
        opacity: 1,
        transition: 'opacity 500ms ease-in-out',
    },

    fallback: {
        position: 'absolute',
        top: appBarHeight,
        left: 0,
        height: `calc(100% - ${appBarHeight} - ${smallClipperHeight})`,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },

    removeFallback: {
        opacity: 0,
        transition: 'opacity 500ms ease-in-out',
    },

    fallbackText: {
        margin: 0,
        //fontSize:'7.5rem',
        fontSize: 'calc(57.6px + (120 - 57.6) * ((100vw - 300px) / (1366 - 300)))',
        paddingLeft: '1rem',
        fontFamily: fonts.body,
        fontWeight: 'bold',
        color: theme.palette.primary[500],
        textShadow: `1px 1px black,
        2px 2px black,
        3px 3px black
        `,
        transition: 'text-shadow 120ms ease-in-out, transform 120ms ease-in-out',

        '&:hover': {
            transform: 'translate(-3px,-3px)',
            textShadow: `1px 1px black,
        2px 2px black,
        3px 3px black,
        4px 4px black,
        5px 5px black,
        6px 6px black
        `,
        }
    },

    [theme.breakpoints.up('sm')]: {
        container: {
            height: `calc(${height} + ${largeClipperHeight}) !important`
        },

        fallback: {
            height: `calc(100% - ${appBarHeight} - ${largeClipperHeight})`,
        }
    }
})
)

export default useStyles