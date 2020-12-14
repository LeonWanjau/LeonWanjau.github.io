import useStyles from './styles/index.styles'
import { useState, useRef, useEffect } from 'react'
import RenderLanguages from './RenderLanguages'
import { useTheme } from '@material-ui/core/styles'

import HtmlSvg from 'Assets/images/languages/html-svg.svg'
import CssSvg from 'Assets/images/languages/css-svg.svg'
import LaravelSvg from 'Assets/images/languages/laravel-svg.svg'
import PhpSvg from 'Assets/images/languages/php.svg'
import MySqlSvg from 'Assets/images/languages/mysql.svg'
import PostGresSvg from 'Assets/images/languages/postgres.svg'

const Languages = () => {
    const classes = useStyles()

    const theme = useTheme()

    const faces = useRef({
        currentFace: 'face1',
        face1: {
            currentItemIndex: 0,
            items: [
                {
                    name: 'HTML',
                    path: HtmlSvg,
                    classZDepth: {
                        htmlNumber:20,
                        htmlRightShadow:10,
                    }
                },
                {
                    name: 'CSS',
                    path: CssSvg,
                    classZDepth: {},
                },
            ]
        },

        face2: {
            currentItemIndex: 0,
            items: [
                {
                    name: 'PHP',
                    path: PhpSvg,
                    classZDepth: {},
                },
                {
                    name: 'Laravel',
                    path: LaravelSvg,
                    classZDepth: {},
                },
            ]
        },

        face3: {
            currentItemIndex: 0,
            items: [
                {
                    name: 'MySQL',
                    path: MySqlSvg,
                    classZDepth: {},
                },
                {
                    name: 'PostGres',
                    path: PostGresSvg,
                    classZDepth: {},
                },
            ]
        },

        face4: {

        }
    })

    const [threeLoaded, setThreeLoaded] = useState(false)
    const threeRef = useRef(null)
    useEffect(() => {
        if (threeRef.current == null) {
            loadThree()
        }
    })

    async function loadThree() {
        threeRef.current = {}

        threeRef.current.THREE = await import(/* webpackChunkName: "Three" */ 'three')

        const { SVGLoader } = await import(/* webpackChunkName: "Three SVGLoader" */ 'three/examples/jsm/loaders/SVGLoader.js')
        threeRef.current.SVGLoader = SVGLoader

        const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js')
        threeRef.current.OrbitControls = OrbitControls

        setThreeLoaded(true)
    }

    const canvasRef = useRef(null)
    const [canvasLoaded, setCanvasLoaded] = useState(false)
    useEffect(() => {
        if (threeLoaded && threeRef.current !== null) {
            if (canvasRef.current !== null) {
                const renderLanguages = new RenderLanguages(canvasRef.current, theme.palette.secondary[200],
                    threeRef.current.THREE, threeRef.current.SVGLoader, threeRef.current.OrbitControls,
                    faces.current, setCanvasLoaded)

                renderLanguages.constructScene()

                const onWindowResize = () => { renderLanguages.onWindowResize }

                window.addEventListener('resize', onWindowResize, false)

                return () => {
                    window.removeEventListener('resize', onWindowResize, false)
                }
            }
        }
    }, [threeLoaded])

    //show canvas
    useEffect(() => {
        if (canvasLoaded) {
            canvasRef.current.classList.add(classes.canvasLoaded)
        }
    }, [canvasLoaded])

    return (
        <div className={classes.mainContainer}>
            <canvas ref={canvasRef} className={classes.canvas} />
        </div>
    )
}

export default Languages