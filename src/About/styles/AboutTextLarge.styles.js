import { makeStyles } from '@material-ui/core/styles'

const useStyles=makeStyles({
    container:{
        display:'flex',
        height:'40vh',
        width:'100%',
        position:'relative'
    },

    animContainer:{
        width:'100%',
        height:'100%',
    },

    fallback:{
        position:'absolute',
        width:'100%',
        height:'100%',
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