import { makeStyles } from '@material-ui/core/styles'

const useStyles=makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
    },

    imageContainer:{
        width:'100%',
        height:'40vh',
        position:'relative',
        overflow:'hidden',
    },

    innerImageContainer:{
        position:'absolute',
        top:0,
        left:0,
        height:'100%',
        width:'100%',
    },

    imageItem:{
        height:'100%',
        width:'100%',
    },

    imageTitle:{
        height:'10%'
    },

    image:{
        width:'100%',
        height:'90%',
    },

    selectorArea:{
        display:'flex',
        height:'10vh',
        alignItems:'center',
    },


    arrow:{
        height:'100%',
        width:'8rem',
        '& > svg':{
            width:'100%',
            height:'100%',
        }
    },

    arrowRight:{
        transform:'rotate(180deg)'
    }
})

export default useStyles