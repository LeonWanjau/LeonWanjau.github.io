import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { memo } from 'react'

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757de8',
            main: '#3f51b5',//indigo 500
            dark: '#002984',

            [50]:'#e8eaf6',
            [100]:'#c5cae9',
            [200]:'#9fa8da',
            [300]:'#7986cb',
            [400]:'#5c6bc0',
            [500]:'#3f51b5',
            [600]:'#3949ab',
            [700]:'#303f9f',
            [800]:'#283593',
            [900]:'#1a237e',
        },
        secondary: {
            light: '#e9d46e',
            main: '#b5a33f',
            dark: '#82750a',

            [50]:'#fdfce9',
            [100]:'#faf6c8',
            [200]:'#f7f1a5',
            [300]:'#f3ec83',
            [400]:'#efe669',
            [500]:'#ebe252',
            [600]:'#dcd04c',
            [700]:'#c9ba45',
            [800]:'#b5a33f',
            [900]:'#947e35',
        }
    },

    typography: {
        fontFamily: "Roboto,Alegreya",

        h2:{
            fontFamily:'Alegreya',
            fontWeight:'bold'
        }
    },

    misc:{
        webGLSceneBackground:'#f0f0f0',
        colors:{
            analogous:{
                first:'#3f8cb5',
                second:'#683fb5'
            },
            triadic:{
                first:'#a33fb5',
                second:'#b53f51'
            }
        }
    }
})


export default responsiveFontSizes(Theme)