import { makeStyles } from '@material-ui/core/styles'
import { memo, useRef, useEffect } from 'react'
import useIsIntersectingOnce from 'Utilities/useIsIntersectingOnce'
import { Typography } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme=>({
    textIntersector: {
        alignSelf: 'flex-start',
        marginTop:'2rem',
        marginBottom: '2rem',
    },

    text: {
        transform: 'translateX(-500px)'
    },

    textIsIntersecting: {
        transform: 'translateX(0)',
        transition: 'transform 500ms ease-in-out'
    },

    [theme.breakpoints.up('sm')]:{
        textIntersector:{
            marginTop:'5rem',
            marginBottom: '3rem',
        }
    }
}))


const AboutTextIntro = () => {
    const classes = useStyles()


    const textIntersector = useRef(null)


    const textIsIntersecting = useIsIntersectingOnce({
        rootMargin: '0px 0px -20% 0px',
        threshold: '0.5'
    },
        textIntersector
    )


    return (

        <div ref={textIntersector} className={classes.textIntersector}>
            <Typography
                className={clsx(classes.text, { [classes.textIsIntersecting]: textIsIntersecting })}
                variant='h4'>
                Here are some of my objectives:
        </Typography>
        </div>
    )
}

export default AboutTextIntro
