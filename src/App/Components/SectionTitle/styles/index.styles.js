import { makeStyles } from '@material-ui/core/styles'

const titlePaddingTop='1rem'
const titlePaddingSides='1rem'
const clipXWidth='30%'
const titleClipPath=`polygon(
    0 0,
    0 calc(100% - ${titlePaddingTop}),
    ${clipXWidth} 100%,
    100% 100%,
    100% 0
)`

const useStyles = makeStyles(theme=>({

    titleIntersector:{
        transform:'translateX(-50%)',
        transition:'transform 500ms ease-in-out',
        display:'flex',
        marginBottom:'2rem',
        //filter:'drop-shadow(4px, 4px, 2px, rgba(0,0,0,0.5))'
    },

    titleIsIntersecting:{
        transform:'translateX(0)'
    },

    title: {
        textTransform:'uppercase',
        //color:'white',
        padding:`${titlePaddingTop} ${titlePaddingSides}`,
        borderRadius:'4px',
        clipPath:titleClipPath,
        backgroundImage:`linear-gradient(
            90deg,
            ${theme.palette.primary.main} 0%,
            rgba(0,0,0,0) 80%
        )`
    },

    [theme.breakpoints.up('sm')]:{
        titleIntersector:{
            marginBottom:'5rem'
        }
    }
}))

export default useStyles