import { makeStyles } from '@material-ui/core/styles'
import SpinningLoaderSvg from 'Assets/images/SpinningLoader.svg'

const useStyles=makeStyles(theme=>({
    loader:{
        animationName:'$spin',
        animationDuration:'1s',
        animationTimingFunction:'linear',
        animationIterationCount:'infinite',
        width:'100%',
        height:'100%',
    },

    '@keyframes spin':{
        from:{
            transform:'rotate(0deg)'
        },
        to:{
            transform:'rotate(360deg)'
        }
    }
}))

const SpinningLoader=()=>{
    const classes=useStyles()

    return (
        <img className={classes.loader} src={SpinningLoaderSvg}>
        </img>
    )
}

export default SpinningLoader