import { useEffect, useRef, memo } from 'react'
import useStyles from './styles/AboutTextLarge.styles'
import AboutTextAnim from 'Assets/animations/AboutTextAnim.json.data'
import lottie from 'lottie-web'
import useIsIntersectingOnce from 'Utilities/useIsIntersectingOnce'

const AboutTextLarge = () => {
    const classes = useStyles()

    const animContainerRef = useRef(null)

    const animContainerIsIntersecting = useIsIntersectingOnce({
        rootMargin: '-10% 0px -10% 0px',
        threshold: '0.8'
    },
        animContainerRef
    )

    useEffect(() => {
        if (animContainerIsIntersecting) {
            const anim = lottie.loadAnimation({
                container: animContainerRef.current,
                renderer: 'svg',
                autoplay: false,
                loop: false,
                path: AboutTextAnim
            })


            anim.addEventListener('DOMLoaded', () => {
                setTimeout(()=>{
                    anim.play()
                },
                100)
            })

            return () => { anim.destroy() }
        }

    }, [animContainerIsIntersecting])

    return (
        <div ref={animContainerRef} className={classes.animContainer}></div>
    )
}

export default memo(AboutTextLarge)