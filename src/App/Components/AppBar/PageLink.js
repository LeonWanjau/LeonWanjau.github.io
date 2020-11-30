import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {

    const skewAmount='45deg'
    return {
        link: {
            textDecoration: 'none',
            transform:`skewX(${skewAmount})`,
            position:'relative',
            display:'flex',
            alignItems:'center',
            minWidth:'10em',
            height:'70%',

            '& + &':{
                marginLeft:'1em'
            },

            '&:hover $linkTextContainer':{
                backgroundColor:theme.palette.secondary[100],
                transform:'translate(10px,-5px)'
            },

            '&:hover $shadow':{
                backgroundColor:'black',
                transition:'background-color 300ms ease-in-out'
            },

            
            '&:active $linkTextContainer':{
                transform:'translate(0px,0px)',
                transition:'transform 50ms ease-in-out, background-color 200ms ease-in-out',
            },
            
        },

        
        linkTextContainer: {
            display: 'flex',
            justifyContent: 'center',
            width:'100%',
            height:'100%',
            alignItems:'center',
            color:'black',
            zIndex:'3',
            transition:'transform 200ms ease-in-out, background-color 200ms ease-in-out',
            backgroundColor:'transparent',

            /*
            '&:hover': {
                color:'rgba(255,255,255,0.85)',
                backgroundColor: theme.palette.primary.main,
                backgroundImage:`linear-gradient(45deg,${theme.palette.primary.main} 60%, rgba(0,0,0,0) 80%)`
                transform:`scale(0.9)`,
            },
            */
        },
        

        linkText:{
            textAlign:'center',
            color:'inherit',
            transform:`skewX(-${skewAmount})`,
            transition:'color 200ms ease-in-out',
        },

        shadow:{
            width:'100%',
            height:'100%',
            backgroundColor:'transparent',
            position:'absolute',
            transition:'background-color 100ms ease-in-out'
        },
    }
})

const PageLink = ({ path, text }) => {
    const classes = useStyles()
    
    return (
        <a href={path} className={classes.link}>

            <div className={classes.shadow}/>

            <div className={classes.linkTextContainer}>
                <Typography variant='h4' color='textPrimary' className={classes.linkText}>
                    {text}
                </Typography>
            </div>
        </a>
    )
}

export default PageLink