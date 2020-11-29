import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import RobotoSlabBold from 'Assets/fonts/webgl/RobotoSlabBold.typeface'

export default class RenderAboutText {
    constructor(canvas) {
        //canvas and renderer
        this.canvas = canvas
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)

        //camera
        this.fov = 45
        this.aspect = this.canvas.clientWidth / this.canvas.clientHeight
        this.near = 1 //10
        this.far = 1500 //100000
        this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
        this.camera.position.set(0, 0, 400)

        //scene
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0xffffff)

        //orbit controls
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

        //font loader
        this.fontLoader = new THREE.FontLoader()

        //lights
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.09)
        dirLight.position.set(0, 0, 1).normalize()
        //dirLight.color.setHex(0x3f51b5)
        this.scene.add(dirLight)

        const pointLight = new THREE.PointLight(0xffffff, 1)
        pointLight.position.set(0, 100, 200)
        //pointLight.position.set(0, 100, 90)
        //pointLight.color.setHex(0x3f51b5)
        this.scene.add(pointLight)

        const pointLightHelper = new THREE.PointLightHelper( pointLight, 10 ,'red')
        this.scene.add( pointLightHelper )
    }

    loadFont(path) {
        const promise = new Promise((resolve, reject) => {
            this.fontLoader.load(path, (data) => {
                resolve(data)
            })
        })

        return promise
    }

    async createText(path, text) {
        const font = await this.loadFont(path)

        const geometry = new THREE.TextGeometry(text, {
            font: font,
            size: 70,
            height: 20,
            curveSegments: 4,
            bevelEnabled: true,
            bevelThickness: 2,
            bevelSize: 1.5,
            bevelSegments:5,
        })

        geometry.computeBoundingBox()
        geometry.computeVertexNormals()

        const xOffset = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
        const yOffset = -0.5 * (geometry.boundingBox.max.y - geometry.boundingBox.min.y)

        const color = 0x3f51b5

        const materials = [
            new THREE.MeshPhongMaterial({ color: color, flatShading: true }), // front
            new THREE.MeshPhongMaterial({ color: color }) // side
        ]

        const mesh = new THREE.Mesh(geometry, materials)
        mesh.position.x = xOffset
        mesh.position.y = yOffset

        return mesh
    }

    async constructScene() {
        const textGroupLeft = new THREE.Group()

        const textMeshLeftTop = await this.createText(RobotoSlabBold,'Need to turn your idea')
        textGroupLeft.add(textMeshLeftTop)
        textGroupLeft.rotateY(this.degToRad(30))

        //const textMeshLeftBottom

        this.scene.add(textGroupLeft)

        const gridHelper=new THREE.GridHelper(200,10)
        gridHelper.rotateX(this.degToRad(90))
        this.scene.add(gridHelper)

        this.animate()
    }

    animate() {
        this.render()
        requestAnimationFrame(this.animate.bind(this))
    }

    render() {
        this.renderer.render(this.scene, this.camera)
    }

    degToRad(deg) {
        return deg * (Math.PI / 180)
    }
}