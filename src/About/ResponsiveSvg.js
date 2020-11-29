import { svgIds, deviceDimensions } from 'Utilities/Constants'
import useStyles from './styles/ResponsiveSvg.styles'
import { ComputerBody } from './SvgElements'
import UserIcon from 'Assets/images/user.svg'
import { useRef, useEffect, memo } from 'react'
import { gsap } from 'gsap'

const ResponsiveSvg = () => {
    const classes = useStyles()

    const deviceBodyRefs = {
        bottomPanelAndStandRef: useRef(null),
        screenAndBorderRef: useRef(null),
        deviceRef: useRef(null),
        deviceBorderRef: useRef(null),
        mobilePowerButtonRef: useRef(null)
    }

    const tabletRefs = {
        row2Col1Boxes:useRef(null)
    }

    const row2Box = 'row2Box'
    const row3Col2Box = 'row3Col2Box'
    const navBarItem = 'navBarItem'

    const tabletIds = {
        row2Col1Box: 'trow2Col1Box',
        row2Col2Box: 'trow2Col2Box'
    }

    useEffect(() => {
        const refs = {
            body: deviceBodyRefs,
            tablet: tabletRefs
        }

        for (const value of Object.values(refs)) {
            for (const [key, val] of Object.entries(value)) {
                value[key] = val.current
            }
        }

        startAnimation(refs)
    }, [])

    return (
        <ComputerBody deviceBodyRefs={deviceBodyRefs}>
            <defs>
                {/*computer*/}
                <rect id={navBarItem} className={classes.navBarItem} />

                <rect id={row2Box} className={classes.row2Box} />

                <rect id={row3Col2Box} className={classes.row3Col2Box} />

                {/*tablet*/}
                <rect id={tabletIds.row2Col1Box} className={`${classes.tablet} row2Col1Box`} />

                <rect id={tabletIds.row2Col2Box} className={`${classes.tablet} row2Col2Box`} />
            </defs>

            <rect
                id={svgIds.navBar}
                className={classes.navBar}
            />

            <use href={`#${navBarItem}`} className={classes.navItem1} />
            <use href={`#${navBarItem}`} className={classes.navItem2} />
            <use href={`#${navBarItem}`} className={classes.navItem3} />

            <rect className={classes.longRect} />

            <image className={classes.userIcon} href={UserIcon} />

            <g className={classes.computerElements}>
                <use href={`#${row2Box}`} className={classes.row2Box1} />
                <use href={`#${row2Box}`} className={classes.row2Box2} />
                <use href={`#${row2Box}`} className={classes.row2Box3} />
                <use href={`#${row2Box}`} className={classes.row2Box4} />

                <rect className={classes.row3Col1Box} />

                <rect className={`${classes.row3Col2Box} ${classes.row3Col2Box1} `} />
                <rect className={`${classes.row3Col2Box} ${classes.row3Col2Box2} `} />
                <rect className={`${classes.row3Col2Box} ${classes.row3Col2Box3} `} />
            </g>

            <g className={classes.tablet} >
                <g ref={tabletRefs.row2Col1Boxes}>
                    <use href={`#${tabletIds.row2Col1Box}`} className='row2Col1Box1' />
                    <use href={`#${tabletIds.row2Col1Box}`} className='row2Col1Box2' />
                </g>

                {/*<use href={`#${tabletIds.row2Col2Box}`} className='row2Col2Box1' />*/}

                <rect className='row2ColSeparator' />

                <g>
                    <rect className='row2Col2Box1' />
                    <rect className='row2Col2Box2' />
                </g>
                <rect className='row2Col2Box3' />
                <g>
                    <rect className='row2Col2Box4' />
                    <rect className='row2Col2Box5' />
                </g>
                <rect className='row2Col2Box6' />
            </g>
        </ComputerBody>
    )
}

const startAnimation = (refs) => {
    const totalDuration = 5
    const numberOfPhases = 3
    const phaseDuration = totalDuration / numberOfPhases

    const midpointDistance = `calc((100% - ${deviceDimensions.borderHeight}) / 2)`
    const tabletScaleFactor = 1.05

    const firstPhase = gsap.timeline({ defaults: { duration: phaseDuration, transformOrigin: '50% 50%' } })
    const firstPhaseStartLabel='start'
    firstPhase.addLabel(firstPhaseStartLabel,3)
    /*
    firstPhase.to(refs.deviceRef, { scale: 0.7, delay: 2 })
    firstPhase.to(refs.bottomPanelAndStandRef, { opacity: 0 }, '<')
    firstPhase.to(refs.deviceBorderRef, { scaleY: tabletScaleFactor, transformOrigin: '0 0' }, '<')
    firstPhase.to(refs.mobilePowerButtonRef, { opacity: 1, scale: 1.7, translateY: '0.5%', duration: phaseDuration, }, '<')
    */
    /*firstPhase.to(refs.tablet.test)*/

    const mainTimeline = gsap.timeline(/*{repeat:1,repeatDelay:0.5,yoyo:true}*/)
    mainTimeline.add(firstPhase)

}

const constructTween=(items,params,position,delay,tl)=>{
    [...items].forEach((item,index)=>{
        tl.to(item,{...params,delay:delay*index},position)
    })
}

export default memo(ResponsiveSvg)