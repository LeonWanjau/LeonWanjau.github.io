import { makeStyles } from '@material-ui/core/styles'

const largeContainerHeight = '70vh'

const useStyles = makeStyles(theme => ({
    aboutItemContainer: {
        flex: '1 1 0',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '1em',
        marginBottom: '3rem',
        width: '100%',
        backgroundColor: theme.palette.secondary[200],
        position: 'relative',
        //overflow:'hidden',
    },

    textIntersector: {
        flex: '1 1 0',
        marginBottom: '1rem',
    },

    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '1.5em 0.5em 1.5em 0.5em',
        textAlign: 'center',
        backgroundColor: theme.palette.secondary[400],
        borderRadius: '1em',
    },

    imageContainer: {
        width: '100%',
        height: '100%',
        opacity:0,
        transform:'scale(0.9)'
    },

    animIntersector: {
        width: '100%',
        height: '40vh',
        flex: '3 1 0',
        borderRadius: '0',
        position: 'relative'
    },

    fallback: {
        position: 'absolute',
        //width: '50%',
        //height: '50%',
        width:'6rem',
        height:'6rem',
        left: '50%',
        top:'50%',
        transform: 'translate(-50%,-50%)',
    },

    [theme.breakpoints.up('sm')]: {
        aboutItemContainer: {
            flex: 'none',
            position: 'relative',
            height: largeContainerHeight,
            backgroundColor: 'transparent',
            width: '100%',
            marginBottom: '5rem',
        },

        textIntersector: {
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0',
            height: `calc(0.2 * ${largeContainerHeight})`,
            maxWidth: '80%',
            position: 'absolute',
            top: '0',
            left: '5%',
            zIndex: 1,
            //overflow:'hidden',
        },

        text: {
            padding: '0 0.5em',
            borderRadius: '0.2rem',
            border: '2px solid black',
            backgroundColor: theme.palette.primary[100],
            transform: 'translate3d(-100%,0,0)',
            opacity: 0,
        },

        textIsIntersecting: {
            transform: 'translate3d(0,0,0)',
            opacity: 1,
            transition: 'transform 1000ms ease-in-out, opacity 800ms ease-in-out',
        },

        imageContainer: {
            width: `100%`,
            height: '100%',
            backgroundColor: theme.palette.secondary[200],
            paddingTop: `calc(0.1 * ${largeContainerHeight})`,
            borderRadius: '0.25em',
            border: '2px solid black',
            transform: 'scale(0.9)',
            opacity: '0',
        },

        animIsIntersecting: {
            transform: 'scale(1)',
            opacity: 1,
            transition: 'transform 1000ms ease-in-out, opacity 1000ms ease-in-out'
        },

        animIntersector: {
            flex: 'none',
            height: `calc(0.9 * ${largeContainerHeight})`,
            width: '100%',
            position: 'absolute',
            right: '0',
            bottom: '0',
            overflow: 'hidden',
        },
    },

    [theme.breakpoints.up('md')]: {
        aboutItemContainer: {
            maxWidth: '80%'
        },

        text: {
            //width:'32%',
            //height:'30%',
        },

        imageContainer: {
            //height:'80%',
            //width:'100%',
        },
    }
}))

export default useStyles