import useStyles from './styles/AboutText.styles'
import { useEffect, useRef, memo } from 'react'
import useIsIntersectingOnce from 'Utilities/useIsIntersectingOnce'
import { gsap} from 'gsap'

const TextItem = () => {
    const classes = useStyles()

    const lineContainerRef = useRef(null)
    const lineIsIntersecting = useIsIntersectingOnce({
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.5
    },
        lineContainerRef
    )
    useEffect(() => {
        if (lineIsIntersecting) {
            const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } })

            tl.to(`.${classes.line}`, { duration: 1, x: 0, skewX: '45deg', opacity: 1 })
                .to(`.${classes.primaryText}`, { duration: 1, y: 0, opacity: 1 })
                .to(`.${classes.secondaryText}`, { duration: 1, y: 0, opacity: 1 })
        }
    }, [lineIsIntersecting])

    return (

        <div className={classes.alignmentContainer} >
            <div className={classes.mainContainer}>
                <div className={`${classes.textContainer} ${classes.primaryTextContainer}`}>
                    <p className={`${classes.text} ${classes.primaryText}`}>
                        Need to turn your idea
                    <br /> into a website?
                </p>
                </div>

                <div ref={lineContainerRef} className={classes.lineContainer}>
                    <div className={classes.line} />
                </div>

                <div className={`${classes.textContainer} ${classes.secondaryTextContainer}`}>
                    <p className={`${classes.text} ${classes.secondaryText}`}>
                        I can help with that
                </p>
                </div>
            </div>
        </div>
    )
}

export default memo(TextItem)