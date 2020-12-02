import { Typography } from '@material-ui/core'
import useStyles from './styles/AboutItem.styles'
//import lottie from 'lottie-web'
//import lottie from 'lottie-web/build/player/lottie_light.min.js'
import { useEffect, useRef, memo, useState } from 'react'
import SpinningLoader from 'SharedComponents/SpinningLoader'
import { gsap } from 'gsap'

const AboutItem = ({ text = 'None', animPath = null, loop = false, func = undefined, autoplay = true,
    xsScreen = false }) => {

    const classes = useStyles()

    //const xsScreenQuery = window.matchMedia('(max-width: 600px)')

    //anim container
    const animContainerRef = useRef(null)

    //lottie library
    const lottieRef = useRef(null)
    const [lottieLoaded, setLottieLoaded] = useState(false)
    if (lottieRef.current == undefined) {
        setTimeout(() => {
            import(/* webpackChunkName: "lottie-AboutItem" */'lottie-web').then(({ default: lottieDefault }) => {
                lottieRef.current = lottieDefault
                setLottieLoaded(true)
            })
        }, 10)
    }

    //initialize animation
    const animRef = useRef(null)
    const [animLoaded, setAnimLoaded] = useState(false)
    useEffect(() => {
        if (lottieLoaded && animRef.current == null) {
            animRef.current = lottieRef.current.loadAnimation({
                container: animContainerRef.current,
                renderer: 'svg',
                autoplay: false,
                loop: loop,
                path: animPath
            })

            animRef.current.addEventListener('DOMLoaded', () => {
                setAnimLoaded(true)
            })

            return () => { animRef.current.destroy() }
        }
    }, [lottieLoaded])

    //remove fallback
    const [fallbackRemoved, setFallbackRemoved] = useState(false)
    useEffect(() => {
        if (animLoaded) {
            gsap.to(
                `.${classes.fallback}`,
                {
                    duration: 1, opacity: 0, scaleX: 0.5, scaleY: 0.5, display: 'none', ease: 'power1.inOut',
                    onComplete: () => { setFallbackRemoved(true) }
                }
            )
        }
    }, [animLoaded])

    //listen for intersections
    const textIntersectorRef = useRef(null)
    const textIsIntersecting = useIsIntersectingOnce({
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.8
    },
        textIntersectorRef, fallbackRemoved
    )

    const animIntersectorRef = useRef(null)
    const animIsIntersecting = useIsIntersectingOnce({
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.8
    },
        animIntersectorRef, fallbackRemoved
    )

    //play text entering animation on large screen
    const textContainerRef = useRef(null)
    useEffect(() => {
        if (xsScreen == false && textIsIntersecting) {
            gsap.to(
                textContainerRef.current,
                { duration: 1, opacity: 1, x: 0, ease: 'power1.inOut' }
            )
        }
    }, [textIsIntersecting, xsScreen])
    /*
    const textEnteringAnimationDone = useEnteringAnimationDone(
        textContainerRef,
        { duration: 1, opacity: 1, x: 0 },
        textIsIntersecting,
        xsScreen
    )
    */

    //play animation entering animation on large screen
    const animEnteringAnimationDone = useEnteringAnimationDone(
        animContainerRef,
        { duration: 1, opacity: 1, scaleX: 1, scaleY: 1, ease: 'power1.inOut' },
        animIsIntersecting,
    )

    //play animation
    useEffect(() => {
        if (animEnteringAnimationDone == true) {
            if (func !== undefined) {
                func(animRef.current)
            } else {
                animRef.current.play()
            }
        }
    }, [animEnteringAnimationDone])

    return (
        <div className={classes.aboutItemContainer}>

            <div ref={textIntersectorRef} className={classes.textIntersector}>
                <div
                    ref={textContainerRef}
                    className={`${classes.text}`}
                >
                    <Typography variant='h5'>
                        {text}
                    </Typography>
                </div>
            </div>

            <div ref={animIntersectorRef} className={classes.animIntersector}>
                <div className={classes.fallback}>
                    <SpinningLoader />
                </div>

                <div ref={animContainerRef} className={classes.imageContainer}>
                </div>
            </div>

        </div>
    )
}

function useIsIntersectingOnce(options, elementRef, fallbackRemoved) {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        if (fallbackRemoved == true) {
            let observer

            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true)
                        observer.disconnect()
                    }
                })
            }

            observer = new IntersectionObserver(callback, options)

            observer.observe(elementRef.current)

            return () => {
                observer.unobserve(elementRef.current)
            }
        }
    }, [fallbackRemoved])

    return isIntersecting
}

function useEnteringAnimationDone(elementRef, animation, isIntersecting) {
    const [enteringAnimationDone, setEnteringAnimationDone] = useState(false)

    useEffect(() => {
        if (isIntersecting == true) {
            const tween = gsap.to(
                elementRef.current,
                {
                    ...animation,
                    onComplete: () => { setEnteringAnimationDone(true) }
                }
            )
        }
    }, [isIntersecting])

    return enteringAnimationDone
}

export default memo(AboutItem)