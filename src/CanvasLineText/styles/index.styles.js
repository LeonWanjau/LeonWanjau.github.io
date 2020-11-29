import { makeStyles, useTheme } from '@material-ui/core/styles'
import { largeClipperHeight, smallClipperHeight } from 'Utilities/Constants'

const canvasClipPath = `polygon(
    0 0,
    0 85%,
    100% 100%,
    100% 0
)`

const useStyles = makeStyles(theme => ({
    canvas: {
        width: '100% !important',
        height: `calc(80vh + ${smallClipperHeight}) !important`,/*[`calc(${props.height} + ${props.spacerHeight})`,`!important`],*/
        display: 'block',
        //clipPath:canvasClipPath,

        [theme.breakpoints.up('sm')]: {
            height: `calc(80vh + ${largeClipperHeight}) !important`
        }
    }
})
)

export default useStyles