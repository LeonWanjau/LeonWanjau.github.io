import useStyles from './styles/AboutText3d.styles'
import {useRef,useEffect} from 'react'
import RenderAboutText from './RenderAboutText'

const AboutText3d=()=>{
    const classes=useStyles()

    const canvasRef=useRef(null)

    useEffect(()=>{
        const renderAboutText= new RenderAboutText(canvasRef.current)
        renderAboutText.constructScene()
    },[])

    return (
        <canvas ref={canvasRef} className={classes.canvas}/>
    )
}

export default AboutText3d