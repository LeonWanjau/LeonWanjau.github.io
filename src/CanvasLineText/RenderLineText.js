//three
//import * as THREE from 'three'
//font
import Helvetiker from 'Assets/fonts/webgl/Helvetiker_regular.typeface.json.data'
//orbit controls
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
//svg loader
//import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'

export default class RenderLineText {
    constructor(canvas, sceneBackground,THREE,SVGLoader,setCanvasLoaded) {
        //THREE
        this.THREE = THREE

        //SVGLoader
        this.SVGLoader=SVGLoader

        //set canvas loaded
        this.setCanvasLoaded=setCanvasLoaded

        //canvas and renderer
        this.canvas = canvas
        this.renderer = new this.THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
        this.renderer.setClearColor(new this.THREE.Color(sceneBackground), 1)

        //camera
        this.fov = 45
        this.aspect = this.canvas.clientWidth / this.canvas.clientHeight
        this.near = 10
        this.far = 3000
        this.camera = new this.THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
        this.camera.position.set(0, 0, 600)

        //scene
        this.scene = new this.THREE.Scene()
        this.scene.background = new this.THREE.Color(sceneBackground) //Previous 0xf0f0f0

        //texture loader
        this.fontLoader = new this.THREE.FontLoader()

        //orbit controls
        //this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

        //stop animation
        this.stopAnimation = false

        //scene group
        this.sceneGroup = new this.THREE.Group()

        //mouse event variables
        this.mouseX = 0
        this.mouseY = 0
        this.targetRotationX = 0
        this.targetRotationY = 0

        //bound event listeners
        this.boundOnCanvasMouseEnter = this.onCanvasMouseEnter.bind(this)
        this.boundOnCanvasMouseMove = this.onCanvasMouseMove.bind(this)
        this.boundOnCanvasMouseLeave = this.onCanvasMouseLeave.bind(this)

        //clamping function
        this.clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

        //first render
        this.firstRender = true

        //starting rotations
        this.startingRotationX = -0.349066
        this.startingRotationY = -0.349066

        //temporary output
        //this.tempP=document.getElementById('temp2')
    }

    //load font
    loadFont(fontPath) {
        const promise = new Promise((resolve, reject) => {
            this.fontLoader.load(fontPath, (font) => {
                resolve(font)
            })
        })

        return promise
    }

    //create text mesh
    createTextMesh(font, text) {
        const color = 0x006699

        const matLite = new this.THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: this.THREE.DoubleSide
        })

        const shapes = font.generateShapes(text, this.textProps.scale)

        const geometry = new this.THREE.ShapeBufferGeometry(shapes)

        geometry.computeBoundingBox()

        const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)

        geometry.translate(xMid, 0, 0)

        const textMesh = new this.THREE.Mesh(geometry, matLite)
        textMesh.position.z = - 150

        return { textMesh, shapes, xMid }
    }

    //create line mesh
    createLineMesh(shapes, xMid) {
        const color = 0x006699
        const threeColor = new this.THREE.Color(0x006699)
        const strokeWidth = 3

        const matDark = new this.THREE.MeshBasicMaterial({
            color: color,
            side: this.THREE.DoubleSide
        })

        const holeShapes = []

        for (let i = 0; i < shapes.length; i++) {
            let shape = shapes[i];

            if (shape.holes && shape.holes.length > 0) {
                for (let j = 0; j < shape.holes.length; j++) {
                    var hole = shape.holes[j];
                    holeShapes.push(hole);
                }
            }
        }

        shapes.push.apply(shapes, holeShapes)

        const style = this.SVGLoader.getStrokeStyle(strokeWidth, threeColor.getStyle())

        const lineText = new this.THREE.Group()

        for (let i = 0; i < shapes.length; i++) {
            let shape = shapes[i]

            let points = shape.getPoints()
            let geometry = this.SVGLoader.pointsToStroke(points, style)

            geometry.translate(xMid, 0, 0)

            let lineMesh = new this.THREE.Mesh(geometry, matDark)
            lineText.add(lineMesh)
        }

        return lineText
    }

    async initText(textProps) {
        //remove event listeners if any
        this.canvas.removeEventListener('mouseenter', this.boundOnCanvasMouseEnter, false)
        this.canvas.removeEventListener('mousemove', this.boundOnCanvasMouseMove, false)
        this.canvas.removeEventListener('mouseleave', this.boundOnCanvasMouseLeave, false)

        //text properties
        this.textProps = textProps

        //remove items from sceneGroup and scene
        this.sceneGroup.remove(...this.sceneGroup.children)
        this.scene.remove(...this.scene.children)

        const shapeGroup = new this.THREE.Group()

        const font = await this.loadFont(Helvetiker)

        const { textMesh, shapes, xMid } = this.createTextMesh(font, this.textProps.text)
        shapeGroup.add(textMesh)
        const lineMesh = this.createLineMesh(shapes, xMid)
        shapeGroup.add(lineMesh)

        shapeGroup.position.y = this.textProps.yOffset
        shapeGroup.position.x = this.textProps.xOffset
        this.sceneGroup.add(shapeGroup)
        this.scene.add(this.sceneGroup)

        //check if this is the first render
        if (this.firstRender == true) {
            this.sceneGroup.rotation.x = this.startingRotationX
            this.targetRotationY = this.sceneGroup.rotation.x

            //this.firstRender=false
        }

        this.animate()

        this.canvas.addEventListener('mouseenter', this.boundOnCanvasMouseEnter, false)

        if(this.firstRender==true){
            this.setCanvasLoaded(true)
            this.firstRender = false
        }
    }

    onWindowResize() {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    }

    animate() {
        if (Math.abs(this.sceneGroup.rotation.y - this.targetRotationX) > 0.01) {
            this.sceneGroup.rotation.y += (this.targetRotationX - this.sceneGroup.rotation.y) * 0.05
        }

        if (Math.abs(this.sceneGroup.rotation.x - this.targetRotationY) > 0.01) {
            this.sceneGroup.rotation.x += (this.targetRotationY - this.sceneGroup.rotation.x) * 0.05
        }

        this.render()
        requestAnimationFrame(this.animate.bind(this))
    }

    render() {

        //this.sceneGroup.rotation.y += (this.targetRotationX - this.sceneGroup.rotation.y) * 0.05
        //this.sceneGroup.rotation.x +=(this.targetRotationY - this.sceneGroup.rotation.x) * 0.05

        //this.tempP.innerHTML=`SceneGroup rotation Y: ${this.sceneGroup.rotation.y} <br/>
        //TargetRotation X: ${this.targetRotationX}
        //`

        this.renderer.render(this.scene, this.camera)
    }

    onCanvasMouseEnter(event) {
        this.targetRotationX = this.sceneGroup.rotation.y
        this.targetRotationY = this.sceneGroup.rotation.x

        this.mouseX = event.clientX
        this.mouseY = event.clientY

        this.canvas.addEventListener('mousemove', this.boundOnCanvasMouseMove, false)
        this.canvas.addEventListener('mouseleave', this.boundOnCanvasMouseLeave, false)
    }

    onCanvasMouseMove(event) {
        const previousMouseX = this.mouseX
        const previousMouseY = this.mouseY

        this.mouseX = event.clientX
        this.mouseY = event.clientY

        this.targetRotationX += (this.mouseX - previousMouseX) * 0.02
        this.targetRotationY += (this.mouseY - previousMouseY) * 0.02

        this.targetRotationX = this.clampNumber(this.targetRotationX, -0.523599, 0.523599)
        this.targetRotationY = this.clampNumber(this.targetRotationY, -0.523599, 0.523599)
    }

    onCanvasMouseLeave() {
        this.canvas.removeEventListener('mousemove', this.boundOnCanvasMouseMove, false)
        this.canvas.removeEventListener('mouseleave', this.boundOnCanvasMouseLeave, false)
    }
}