import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles(theme=>({
    aboutItemsContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },

    explanationText:{
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        marginBottom:'1.5rem',
    },

    title:{
        marginBottom:'1.5rem',
    },

    [theme.breakpoints.up('md')]:{
        
    }
}))

export default useStyles