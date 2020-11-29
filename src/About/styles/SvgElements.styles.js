import {makeStyles} from '@material-ui/core/styles'

const deviceRadius=6


const useStyles=makeStyles(theme=>({
    mainContainer:{
        width:'100%',
        height:'100%',
        display:'none'
    },

    
    device:{
        /*
        transformBox:'fill-box',
        transformOrigin:'center',
        */
       /*

        '& *':{
            transformBox: 'inherit',
            transformOrigin:'inherit'
        }
        */
    },

    deviceBorder:{
        rx:deviceRadius
    },

    deviceScreenBackground:{
        width:'100%',
        height:'100%',
        fill:'mintcream',
    },

    bottomComputerPanel:{
        fill:'gainsboro'
    },

    computerStand:{
        fill:'black'
    },

    computerPowerButton:{
        fill:'black',
        r:'2.5',
        cx:'50',
        cy:'75'
    },

    mobilePowerButtonGroup:{
        opacity:0,
    },

    mobilePowerButton:{
        fill:'gainsboro',
        r:'1.25%',
        cx:'50%',
        cy:'67.5%',
    },

    innerMobilePowerButton:{
        fill:'black',
        r:'0.9%',
        cx:'50%',
        cy:'67.5%'
    },

    computerBodyContainer:{
        width:'100%',
        height:'100%'
    },
}))

export default useStyles