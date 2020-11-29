import { makeStyles } from '@material-ui/core/styles'
import { fonts } from 'Utilities/Constants'
import { cutBottomLeftAndTopRight, cutBottomRightAndTopLeft } from 'Utilities/Functions'

const skew = '45deg'
const smallScreenPadding = {
    tops: '1.5rem',
    sides: '1rem',
}
const smallScreenClipWidth = '15%'

const useStyles = makeStyles(theme => ({
    alignmentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },

    mainContainer: {
        margin: '2em 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(14px 14px 2px rgba(0,0,0,1))'
        //transform:`skewX(${skew})`,
    },

    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        //padding: `${smallScreenPadding.tops} ${smallScreenPadding.sides}`,
        borderRadius: '4px',
    },

    primaryTextContainer: {
        overflow:'hidden',
        //width:'95%'
    },


    primaryText: {
        backgroundImage: `linear-gradient(135deg,
            ${theme.palette.primary[800]} 0%,
            ${theme.palette.primary[300]} 100%
            )`,
        clipPath: cutBottomLeftAndTopRight(smallScreenPadding.tops, smallScreenPadding.sides, smallScreenClipWidth),
        opacity:0,
        transform:'translateY(200%)'
    },


    secondaryTextContainer: {
        overflow:'hidden',
        width:'90%',
    },

    secondaryText:{
        backgroundImage: `linear-gradient(315deg,
            ${theme.palette.secondary[800]} 0%,
            ${theme.palette.secondary[400]} 100%
            )`,
        clipPath: cutBottomRightAndTopLeft(smallScreenPadding.tops, smallScreenPadding.sides, smallScreenClipWidth),
        opacity:0,
        transform:'translateY(-200%)'
    },

    text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 'clamp(2rem,calc(2rem + 2vw),4rem)',
        margin: 0,
        padding: `${smallScreenPadding.tops} ${smallScreenPadding.sides}`,
    },

    lineContainer: {
        width: '95%'
    },

    line: {
        height: '1em',
        width: '100%',
        transform: 'skewX(45deg)',
        backgroundColor: 'rgba(0,0,0,0.5)',
        opacity:0,
        transform:'translateX(-200%)'
    },

    //sm breakpoint
    /*
    [theme.breakpoints.up('sm')]: {
        textContainer:{
            transform:`skewX(${skew})`,
            borderRadius:'1em',
            //border:'0.25em solid black',
            //maxWidth:'80vw',
            //minWidth:'70vw',
        },

        primaryTextContainer:{
            backgroundImage:'none',
            backgroundColor:theme.palette.primary.main
        },

        secondaryTextContainer:{
            backgroundImage:'none',
            backgroundColor:theme.palette.secondary.main
        },

        text:{
            transform:`skewX(-${skew})`,
            margin:'0 1em',
            maxWidth:'60vw',
        },

        primaryText:{
            textAlign:'center',
        },

        secondaryText:{
            textAlign:'center',
        },

    },
    */

    //md breakpoint
    /*
    [theme.breakpoints.up('md')]: {

    }
    */
}))

export default useStyles