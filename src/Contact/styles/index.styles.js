import { makeStyles } from '@material-ui/core/styles'

const introductionPadding = {
    top: '4rem',
    bottom: '6rem',
    sides: '4rem'
}

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'2rem',

        opacity:0,
        transform:'translateY(10%)',
        transition:'opacity 1000ms ease-in-out,transform 1000ms ease-in-out',
    },

    mainContainerIsIntersecting:{
        opacity:1,
        transform:'translateY(0)',
    },

    introduction: {
        backgroundImage: `linear-gradient(135deg,${theme.palette.primary[200]} 30%,${theme.palette.secondary[500]} 90%)`,
        minWidth: '90vw',
        padding: `${introductionPadding.top} ${introductionPadding.sides} ${introductionPadding.bottom}`,
        borderRadius: '4px',
        border: '2px solid black',
        boxShadow: '2px 2px 4px black',
    },

    introductionText: {
        textAlign: 'center',
        textShadow: '2px 2px 2px gainsboro',
    },

    formContainer: {
        marginTop: `calc((${introductionPadding.bottom} * 0.4) * -1)`,
        padding: '2rem',
        border: '2px solid black',
        minWidth: '50vw',
        boxShadow: '2px 2px 4px black',
        backgroundColor: 'white',
        borderRadius: '4px',
    },


    emailSentText: {
        textAlign: 'center',
        padding: '1rem',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        /*
        marginTop:`calc((${introductionPadding.bottom} * 0.4) * -1)`,
        backgroundColor:'white',
        borderRadius:'4px',
        padding:'2rem',
        border:'2px solid black',
        minWidth:'40vw',
        boxShadow:'2px 2px 4px black',
        */
        //backgroundColor:'gainsboro',
        //marginTop: '2rem'

        '& > * + *': {
            marginTop: '1rem',
        }
    },

    formInput: {
        width: '100%',

        '& + &': {
            //marginTop: '1rem',
        },
    },

    formButton: {
        //marginTop: '1rem',
    },

    loaderContainer: {
        width: '2rem',
        height: '2rem',
        //marginTop:'1rem',
    },

    emailDisplay: {
        marginTop: '4rem',
    },

    emailDisplayText: {
        textAlign: 'center',
    },

    email: {
        color: theme.palette.primary[500],
        textDecoration:'underline',
        fontSize:'calc(25.6px + (44.56 - 25.6) * ((100vw - 300px) / (1366 - 300)))',

        '&:hover':{
            cursor:'pointer'
        }
    }
}))

export default useStyles