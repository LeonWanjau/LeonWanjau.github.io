//react
import React, { useState, useRef } from 'react'
//styles
import useStyles from './styles/index.styles'
//about item
import AboutItem from './AboutItem'
//ResponsiveAnim
import ResponsiveAnim from 'Assets/animations/ResponsiveAnim.json.data'
//ResponsiveAnimSmall
//import ResponsiveAnimSmall from 'Assets/animations/ResponsiveAnimSmall.json.data'
//PerformantAnim
import PerformantAnim from 'Assets/animations/PerformantAnim.json.data'
//EasyToUseAnim
import EasyToUseAnim from 'Assets/animations/EasyToUseAnim.json.data'
//Section Title
import SectionTitle from 'SharedComponents/SectionTitle'
//About Text
import AboutText from './AboutText'
//About Text Large
import AboutTextLarge from './AboutTextLarge'
//About Text Intro
import AboutTextIntro from './AboutTextIntro'

const About = () => {
    const classes = useStyles()

    const tempRef = useRef(null)

    const xsScreenQuery = window.matchMedia('(max-width: 600px)')
    const [xsScreen, setXsScreen] = useState(xsScreenQuery.matches)
    xsScreenQuery.addEventListener('change', (e) => {
        //check if component is still mounted
        if (tempRef.current) {
            setXsScreen(e.matches)
        }
    })

    return (
        <div ref={tempRef}>

            <SectionTitle text='About' id='about' />

            {xsScreen ? <AboutText /> : <AboutTextLarge />}

            <div className={classes.aboutItemsContainer}>
                <AboutTextIntro />

                <AboutItem title='Responsive'
                    text='I always ensure my sites adapt to any device'
                    animPath={ResponsiveAnim}
                    loop={false}
                    func={ResponsiveFunc}
                    xsScreen={xsScreen}
                />

                <AboutItem title='Performant'
                    text='Delivering performant sites is a top priority for me'
                    animPath={PerformantAnim}
                    loop={true}
                    xsScreen={xsScreen}
                />

                <AboutItem title='Easy To Use'
                    text='I ensure my user-interfaces are easy to use'
                    animPath={EasyToUseAnim}
                    loop={false}
                    autoplay={false}
                    func={EasyToUseFunc}
                    xsScreen={xsScreen}
                />
            </div>
        </div>
    )
}

function EasyToUseFunc(anim, element) {
    const start = 0
    const mid = 507
    const end = 567
    const loopDelay = 1500

    setTimeout(() => {
        //check if element is still in dom
        if (element && anim) {
            anim.playSegments([start, mid], true)
            let animAtMid = true

            const playMidToEnd = () => {
                if (element && anim) {
                    anim.playSegments([mid + 1, end], true)
                    animAtMid = false
                }
            }

            anim.addEventListener('complete', () => {
                if (element && anim) {
                    if (animAtMid) {
                        setTimeout(playMidToEnd, loopDelay)
                    } else {
                        anim.playSegments([start, mid], true)
                        animAtMid = true
                    }
                }
            })
        }
    }, 100)

}

function ResponsiveFunc(anim, element) {
    setTimeout(() => {
        if (element && anim) {
            anim.play()
            let reverse = true

            anim.onComplete = () => {
                if (element && anim) {
                    if (reverse) {
                        reverse = false
                        anim.setDirection(-1)
                        setTimeout(() => {
                            if (element && anim) {
                                anim.play()
                            }
                        }, 1000)
                    } else {
                        reverse = true
                        anim.setDirection(1)
                        setTimeout(() => {
                            if (element && anim) {
                                anim.goToAndPlay(0)
                            }
                        }, 1000)
                    }
                }
            }
        }
    }, 100)
}

export default React.memo(About)