import { makeStyles } from '@material-ui/core/styles'

const useStyles=makeStyles({
    container:{
        display:'flex',
        height:'40vh',
        width:'100%',
        position:'relative',
        overflow:'hidden',
    },

    animContainer:{
        width:'100%',
        height:'100%',
    },

    fallback:{
        position:'absolute',
        width:'60%',
        height:'60%',
        left:'50%',
        top:'50%',
        transform:'translate(-50%,-50%)',
        opacity:1,
    },
    /*
    removeFallback:{
        opacity:0,
        transition:'opacity 500ms ease-in-out'
    }
    */
})

export default useStyles