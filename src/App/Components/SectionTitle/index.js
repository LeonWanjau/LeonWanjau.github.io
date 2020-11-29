import useStyles from './styles/index.styles'
import { Typography } from '@material-ui/core'
import useIsIntersectingOnce from 'Utilities/useIsIntersectingOnce'
import { useRef } from 'react'

const SectionTitle = ({ text }) => {
    const classes = useStyles()

    const titleRef = useRef(null)
    const isIntersecting = useIsIntersectingOnce({
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.5
    },
        titleRef)

    return (
        <div ref={titleRef}>
            <div className={`${classes.titleIntersector} ${isIntersecting ? classes.titleIsIntersecting : null}`}>
                <Typography className={classes.title} variant='h2'>
                    {text}
                </Typography>
            </div>
        </div>
    )
}

export default SectionTitle