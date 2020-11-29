import useStyles from './styles/SvgElements.styles'
import { svgIds, deviceDimensions } from 'Utilities/Constants'

/*
const SvgElements = () => {
    const classes = useStyles()

    const getComputerStandPath = (start, width, height) => {
        const controlPt1 = `-${width / 4},0`
        const controlPt2 = `-${width / 8},${height / 2}`
        const controlPt3 = `${width / 2},0`
        const controlPt4 = `-${width / 8},-${height / 2}`

        const midPt1 = `-${width * 0.375},${height / 2}`
        const midPt2 = `${width * 0.375},${height / 2}`
        const midPt3 = `${width * 0.375},-${height / 2}`
        const midPt4 = `-${width * 0.375},-${height / 2}`

        const path = `M ${start.x},${start.y}
        c ${controlPt1} ${controlPt1} ${midPt1}
        c ${controlPt2} ${controlPt2} ${midPt2}
        c ${controlPt3} ${controlPt3} ${midPt3}
        c ${controlPt4} ${controlPt4} ${midPt4}
        `

        return path
    }

    const getBottomComputerPanelPath = (start, width, height, cornerRadius) => {
        const path = `M ${start.x},${start.y}
        v ${height - cornerRadius}
        a ${cornerRadius} ${cornerRadius} 0 0 0 ${cornerRadius},${cornerRadius}
        h ${width - (cornerRadius * 2)}
        a ${cornerRadius} ${cornerRadius} 0 0 0 ${cornerRadius},-${cornerRadius}
        v -${height - cornerRadius}
        z
        `
        return path
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 100 100'
            className={classes.mainContainer}
        >
            <defs>
                <rect id={svgIds.deviceBorder} className={classes.deviceBorder} />

                <rect id={svgIds.deviceScreenBackground} className={classes.deviceScreenBackground} />

                <clipPath id={svgIds.screenClip}>
                    <circle cx='50%' cy='50%' r='10%' />
                </clipPath>

                <path
                    id={svgIds.bottomComputerPanel}
                    className={classes.bottomComputerPanel}
                    d={getBottomComputerPanelPath({ x: 0, y: 65 }, 100, 15, 5)}
                />

                <path
                    id={svgIds.computerStand}
                    className={classes.computerStand}
                    d={getComputerStandPath({ x: 50, y: 80 }, 60, 20)}
                />

                <circle
                    id={svgIds.computerPowerButton}
                    className={classes.computerPowerButton}
                />
            </defs>
        </svg>
    )
}

export const SvgScreen = ({ children }) => {
    const classes = useStyles()

    return (
        <svg id={svgIds.deviceScreen} className={classes.deviceScreen}
            width='90%' height='60%' x='5%' y='5%'>
            {children}
        </svg>
    )
}
*/

export const ComputerBody = ({ children, deviceBodyRefs = {} }) => {
    const { deviceRef = null,
        bottomPanelAndStandRef = null,
        screenAndBorderRef = null,
        deviceBorderRef = null,
        mobilePowerButtonRef = null,
    } = deviceBodyRefs

    const classes = useStyles()

    const getComputerStandPath = (start, width, height) => {
        const controlPt1 = `-${width / 4},0`
        const controlPt2 = `-${width / 8},${height / 2}`
        const controlPt3 = `${width / 2},0`
        const controlPt4 = `-${width / 8},-${height / 2}`

        const midPt1 = `-${width * 0.375},${height / 2}`
        const midPt2 = `${width * 0.375},${height / 2}`
        const midPt3 = `${width * 0.375},-${height / 2}`
        const midPt4 = `-${width * 0.375},-${height / 2}`

        const path = `M ${start.x},${start.y}
        c ${controlPt1} ${controlPt1} ${midPt1}
        c ${controlPt2} ${controlPt2} ${midPt2}
        c ${controlPt3} ${controlPt3} ${midPt3}
        c ${controlPt4} ${controlPt4} ${midPt4}
        `

        return path
    }

    const getBottomComputerPanelPath = (start, width, height, cornerRadius) => {
        const path = `M ${start.x},${start.y}
        v ${height - cornerRadius}
        a ${cornerRadius} ${cornerRadius} 0 0 0 ${cornerRadius},${cornerRadius}
        h ${width - (cornerRadius * 2)}
        a ${cornerRadius} ${cornerRadius} 0 0 0 ${cornerRadius},-${cornerRadius}
        v -${height - cornerRadius}
        z
        `
        return path
    }

    return (
        <svg className={classes.computerBodyContainer} viewBox='0 0 100 100'>
            <g className={classes.device} ref={deviceRef}>
                <g className='bottomPanelAndStand' ref={bottomPanelAndStandRef}>
                    <path
                        id={svgIds.computerStand}
                        className={classes.computerStand}
                        d={getComputerStandPath({ x: 50, y: 80 }, 60, 20)}
                    />

                    <path
                        id={svgIds.bottomComputerPanel}
                        className={classes.bottomComputerPanel}
                        d={getBottomComputerPanelPath({ x: 0, y: 65 }, 100, 15, 5)}
                    />

                    <circle
                        id={svgIds.computerPowerButton}
                        className={classes.computerPowerButton}
                    />
                </g>

                <g className={'screenAndBorder'} ref={screenAndBorderRef}>
                    <rect id={svgIds.deviceBorder} className={classes.deviceBorder}
                        ref={deviceBorderRef}
                        width={deviceDimensions.borderWidth} height={deviceDimensions.borderHeight}
                    />

                    <svg id={svgIds.deviceScreen} className={classes.deviceScreen}
                        width={deviceDimensions.screenWidth} height={deviceDimensions.screenHeight} x='5%' y='5%'>
                        <g>
                            <rect id={svgIds.deviceScreenBackground} className={classes.deviceScreenBackground} />
                            {children}
                        </g>
                    </svg>

                    <g ref={mobilePowerButtonRef} className={classes.mobilePowerButtonGroup}>
                        <circle
                            className={classes.mobilePowerButton}
                        />

                        <circle 
                            className={classes.innerMobilePowerButton}
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}

/*export default SvgElements*/