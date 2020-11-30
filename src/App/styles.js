import { makeStyles } from '@material-ui/core/styles'
import AlegreyaRegular from 'Assets/fonts/alegreya/Alegreya-Regular.ttf'
import AlegreyaBold from 'Assets/fonts/alegreya/Alegreya-Bold.ttf'
import RobotoRegular from 'Assets/fonts/roboto/Roboto-Regular.ttf'
import RobotoBold from 'Assets/fonts/roboto/Roboto-Bold.ttf'
import {fonts} from 'Utilities/Constants'

const alegreyaRegular = {
    fontFamily: fonts.title,
    fontStyle: 'normal',
    fontWeight: 400,
    src: `url(${AlegreyaRegular})`,
}

const alegreyaBold = {
    fontFamily: fonts.title,
    fontStyle: 'normal',
    fontWeight: 800,
    src: `url(${AlegreyaBold})`
}

const robotoRegular = {
    fontFamily: fonts.body,
    fontStyle: 'normal',
    fontWeight: 400,
    src: `url(${RobotoRegular})`
}

const robotoBold = {
    fontFamily: fonts.body,
    fontStyle: 'normal',
    fontWeight: 800,
    src: `url(${RobotoBold})`
}

const useStyles = makeStyles({
    '@global': {
        ':root': {
            boxSizing: 'border-box'
        },

        '*,::before,::after': {
            boxSizing: 'inherit'
        },

        html:{
            fontSize:'16px',
            scrollBehavior:'smooth'
        },

        body: {
            margin: 0
        },

        ':target::before':{
            content:'""',
            display:'block',
            height:'calc(10vh + 10px)',
            marginTop:'-10vh',
        },

        '@font-face':
            [
                { ...alegreyaRegular },
                { ...alegreyaBold },
                { ...robotoRegular },
                { ...robotoBold }
            ],
    },

    //normal classes
    'appContainer':{
        opacity:0,
    },

    'appLoaded':{
        opacity:1,
        transition:'opacity 200ms ease-in-out'
    }
})

export default useStyles