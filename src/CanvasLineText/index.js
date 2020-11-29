import useStyles from './styles/index.styles.js'
import { useRef, useLayoutEffect, memo, useState } from 'react'
import RenderLineText from './RenderLineText'
import { useTheme } from '@material-ui/core/styles'

const CanvasLineText = () => {
    const classes = useStyles()
    const theme = useTheme()

    const canvasRef = useRef(null)

    useLayoutEffect(() => {
        if (canvasRef.current !== null) {
            const renderLineText = new RenderLineText(canvasRef.current,
                theme.palette.secondary[100]
            )

            //renderLineText.initText(textProps)
            handleScreenChanges(renderLineText)

            const onWindowResize = () => { renderLineText.onWindowResize() }

            window.addEventListener('resize', onWindowResize, false)

            return () => { window.removeEventListener('resize', onWindowResize, false) }
        }
    }, [])

    return (
        <React.Fragment>
            <canvas ref={canvasRef} className={classes.canvas}>
            </canvas>
            {/* 
            <p id='temp2'
                style={{
                    position: 'fixed',
                    left: 0,
                    top: '50%',
                    width: '300px',
                    height: '100px',
                    border: '1px solid red',
                }}
            ></p>
            */}
        </React.Fragment>
    )
}

const handleScreenChanges = (renderObj) => {
    const extraSmallScreenQuery = window.matchMedia('(max-width: 600px)')
    const smallScreenQuery = window.matchMedia('(min-width: 600px) and (max-width: 960px)')
    const mediumScreenQuery = window.matchMedia('(min-width: 960px) and (max-width: 1280px)')
    const largeScreenQuery = window.matchMedia('(min-width: 1280px)')

    const extraSmallScreenTextProperties = {
        text: "Hello,\nI'm Leon\nand I'm a\nFullstack\nDeveloper",
        xOffset: 0,
        yOffset: 130,
        scale: 45
    }

    const smallScreenTextProperties = {
        text: "Hello,I'm Leon\nand I'm a\nFullstack\nDeveloper",
        xOffset: 0,
        yOffset: 120,
        scale: 48
    }


    const mediumScreenTextProperties = {
        text: "Hello,I'm Leon\nand I'm a\nFullstack Developer",
        xOffset: 0,
        yOffset: 110,
        scale: 52
    }

    const largeScreenTextProperties = {
        text: "Hello,I'm Leon\nand I'm a\nFullstack Developer",
        xOffset: -10,
        yOffset: 115,
        scale: 63
    }

    let textProps
    if (extraSmallScreenQuery.matches) {
        textProps = extraSmallScreenTextProperties
    } else if (smallScreenQuery.matches) {
        textProps = smallScreenTextProperties
    } else if (mediumScreenQuery.matches) {
        textProps = mediumScreenTextProperties
    } else {
        textProps = largeScreenTextProperties
    }

    renderObj.initText(textProps)

    extraSmallScreenQuery.addEventListener('change', (e) => {
        if (e.matches) {
            renderObj.initText(extraSmallScreenTextProperties)
        }
    })

    smallScreenQuery.addEventListener('change', (e) => {
        if (e.matches) {
            renderObj.initText(smallScreenTextProperties)
        }
    })

    mediumScreenQuery.addEventListener('change', (e) => {
        if (e.matches) {
            renderObj.initText(mediumScreenTextProperties)
        }
    })


    largeScreenQuery.addEventListener('change', (e) => {
        if (e.matches) {
            renderObj.initText(largeScreenTextProperties)
        }
    })
}

export default memo(CanvasLineText)