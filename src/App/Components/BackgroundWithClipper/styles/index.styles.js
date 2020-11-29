import { makeStyles } from '@material-ui/core/styles'
import { largeClipperHeight, smallClipperHeight } from 'Utilities/Constants'

const triangleClipPath = `polygon(
    0 0,
    100% ,
    100% 100%
)`

const useStyles = makeStyles(theme => ({
    background: {
        backgroundColor: props => props.backgroundColor,
        backgroundImage: props => props.backgroundImg,
        marginTop: `-${smallClipperHeight}`,
        clipPath: props => props.topSpacer ? `polygon(0 0, 100% ${smallClipperHeight}, 100% 100%, 0 100%)` : 'none',

        [theme.breakpoints.up('sm')]: {
            marginTop: `-${largeClipperHeight}`,
            clipPath: props => props.topSpacer ? `polygon(0 0, 100% ${largeClipperHeight}, 100% 100%, 0 100%)` : 'none',
        }
    },

    spacer: {
        height: smallClipperHeight,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',

        [theme.breakpoints.up('sm')]: {
            height: largeClipperHeight
        }
    },

    contentContainer: props => ({
        padding: props.contentPadding
    })
})
)

export default useStyles