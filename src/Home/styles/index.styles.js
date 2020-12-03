import { makeStyles } from '@material-ui/core/styles'

const useStyles=makeStyles({
    container:{
        opacity:0,
    },

    containerLoaded:{
        opacity:1,
        transition:'opacity 500ms ease-in-out',
    }
})

export default useStyles