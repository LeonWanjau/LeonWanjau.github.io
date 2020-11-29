import { Typography } from '@material-ui/core'
import useStyles from './styles/AboutItem.styles'
import lottie from 'lottie-web'
import { useEffect, useRef, memo, useState } from 'react'
import useIsIntersectingOnce from 'Utilities/useIsIntersectingOnce'
import clsx from 'clsx'

const AboutItem = ({ text = 'None', animPath = null, loop = false, func = undefined, autoplay = true,
    xsScreen = false }) => {

    const classes = useStyles()

    const xsScreenQuery = window.matchMedia('(max-width: 600px)')

    const textIntersectorRef = useRef(null)
    const textIsIntersecting = useIsIntersectingOnce({
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.8
    },
        textIntersectorRef
    )

    const animIntersectorRef = useRef(null)
    const animIsIntersecting = useIsIntersectingOnce({
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.8
    },
        animIntersectorRef
    )

    const animContainerRef = useRef(null)

    const animRef = useRef(null)

    useEffect(() => {
        if (animRef.current == null) {
            animRef.current = lottie.loadAnimation({
                container: animContainerRef.current,
                renderer: 'svg',
                autoplay: false,
                loop: loop,
                path: animPath
            })
        }

        const anim = animRef.current

        if (animIsIntersecting) {
            if (func !== undefined) {
                func(anim)
            } else {
                setTimeout(() => { anim.play() }, 1000)
            }
        }



        /*
        const anim = lottie.loadAnimation({
            container: animContainerRef.current,
            renderer: 'svg',
            autoplay: false,
            loop: loop,
            path: animPath
        })

        if (animIsIntersecting) {
            anim.addEventListener('DOMLoaded', () => {
                if (func !== undefined) {
                    func(anim)
                } else {
                    setTimeout(() => { anim.play() }, 1000)
                }
            })
        }

        return () => { anim.destroy() }
        */

    }, [animIsIntersecting])

    return (
        <div className={classes.aboutItemContainer}>

            <div ref={textIntersectorRef} className={classes.textIntersector}>
                <div
                    className={`${classes.text} ${textIsIntersecting ? classes.textIsIntersecting : null}`}
                >
                    <Typography variant='h5'>
                        {text}
                    </Typography>
                </div>
            </div>

            <div ref={animIntersectorRef} className={classes.animIntersector}>
                <div ref={animContainerRef} className={
                    clsx(classes.imageContainer,
                        { [classes.animIsIntersecting]: animIsIntersecting }
                    )}
                >
                </div>
            </div>
        </div>
    )
}

export default memo(AboutItem)

/*
            let reverse = true
            anim.onComplete = () => {
                if (reverse) {
                    reverse = false
                    anim.setDirection(-1)
                    anim.play()
                } else {
                    reverse = true
                    anim.setDirection(1)
                    anim.goToAndPlay(0)
                }

            }
            */