import useStyles from './styles/index.styles'
import { Typography } from '@material-ui/core'
import useIsIntersectingOnce from 'Utilities/useIsIntersectingOnce'
import { useRef,memo } from 'react'
import {useLocation} from 'react-router-dom'

const SectionTitle = ({ text,id }) => {
    const classes = useStyles()

    const titleRef = useRef(null)
    const isIntersecting = useIsIntersectingOnce({
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.5
    },
        titleRef)

    return (
        <div ref={titleRef}>
            <a id={id} className={classes.linkActive}>
                <div className={`${classes.titleIntersector} ${isIntersecting ? classes.titleIsIntersecting : null}`}>
                    <Typography className={classes.title} variant='h2'>
                        {text}
                    </Typography>
                </div>
            </a>
        </div>
    )
}

export default memo(SectionTitle)