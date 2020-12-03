import { useEffect, useRef, memo, useState } from 'react'
import useStyles from './styles/AboutTextLarge.styles'
import AboutTextAnim from 'Assets/animations/AboutTextAnim.json.data'
//import lottie from 'lottie-web'
//import lottie from 'lottie-web/build/player/lottie_light.min.js'
import useConditionalIntersectingOnce from 'Utilities/useConditionalIntersectingOnce'
import SpinningLoader from 'SharedComponents/SpinningLoader'
import { gsap } from 'gsap'


const AboutTextLarge = () => {
    const classes = useStyles()

    //animation container
    const animContainerRef = useRef(null)

    //lottie library
    const lottieRef = useRef(null)
    const [lottieLoaded, setLottieLoaded] = useState(false)
    /*
    if (lottieRef.current == null) {
        setTimeout(()=>{
            import('lottie-web').then(({ default: lottieDefault }) => {
                lottieRef.current = lottieDefault
                setLottieLoaded(true)
            })
        },10)
    }
    */
    useEffect(() => {
        if (lottieRef.current == null) {
            import(/* webpackChunkName: "lottie-AboutTextLarge" */'lottie-web').then(({ default: lottieDefault }) => {
                lottieRef.current = lottieDefault
                setLottieLoaded(true)
            })
        }
    }, [])

    //initialize animation
    const animRef = useRef(null)
    const [animLoaded, setAnimLoaded] = useState(false)
    useEffect(() => {
        if (lottieLoaded && animRef.current == null) {
            animRef.current = lottieRef.current.loadAnimation({
                container: animContainerRef.current,
                renderer: 'svg',
                autoplay: false,
                loop: false,
                path: AboutTextAnim
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
            const tl = gsap.timeline({
                onComplete: () => { setFallbackRemoved(true) },
                defaults: { ease: 'power1.inOut' }
            })

            tl.to(`.${classes.fallback}`, { duration: 1, scaleX: 0.5, scaleY: 0.5, opacity: 0, display: 'none' })
        }
    }, [animLoaded])

    //listen for intersection
    const animIsIntersecting = useConditionalIntersectingOnce({
        rootMargin: '-10% 0px -10% 0px',
        threshold: '0.8'
    },
        animContainerRef,
        fallbackRemoved
    )

    //play animation
    useEffect(() => {
        if (animIsIntersecting && animRef.current !== null) {
            setTimeout(() => { animRef.current.play() }, 200)
        }
    }, [animIsIntersecting])

    return (
        <div className={classes.container}>
            <div ref={animContainerRef} className={classes.animContainer}></div>
            <div className={`${classes.fallback}`}>
                <SpinningLoader />
            </div>
        </div>
    )
}

export default memo(AboutTextLarge)