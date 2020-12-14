import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles(theme=>({
    container:{
        transform:'scale(0.6)',
        opacity:'0',

        '& + &':{
            marginTop:'2rem'
        },

    },

    containerLoaded:{
        animationName:'$showCard',
        animationDuration:'500ms',
        animationTimingFunction:'ease-in-out',
        animationFillMode:'both',
    },

    root:{
        width:'80vw',
        border:'2px solid black',
        boxShadow:'4px 4px 4px rgba(0,0,0,0.5)',
        transition:'transform 200ms ease-in-out',

        '&:hover':{
            transform:'scale(0.98) !important',
        }
    },

    media:{
        height:'40vh'
    },

    loader:{
        width:'5rem',
        height:'5rem',

        '& + &':{
            marginTop:'8rem'
        }
    },

    link:{
        textDecoration:'none',
        color:'black',
    },

    actionArea:{
        //border:'2px solid black',
    },

    '@keyframes showCard':{
        to:{
            transform:'scale(1)',
            opacity:1,
        }
    }
}))

export default useStyles