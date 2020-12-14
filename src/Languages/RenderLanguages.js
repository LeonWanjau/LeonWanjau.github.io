import { gsap } from 'gsap'

export default class RenderLanguages {
    constructor(canvas, sceneBackground, THREE, SVGLoader, OrbitControls, faces, setCanvasLoaded) {
        //THREE
        this.THREE = THREE

        //SVGLoader
        this.svgLoader = new SVGLoader()

        //set canvas loaded
        this.setCanvasLoaded = setCanvasLoaded

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
        this.far = 100000
        this.camera = new this.THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
        this.camera.position.set(0, 0, 2200)

        //scene
        this.scene = new this.THREE.Scene()
        this.scene.background = new this.THREE.Color(sceneBackground)

        //ambient light
        const ambientLight = new this.THREE.AmbientLight(0xffffff)
        this.scene.add(ambientLight)

        //orbit controls
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

        //scene group
        this.sceneGroup = new this.THREE.Group()

        //faces
        this.faces = faces

        //tetrahedron properties
        this.setTetrahedronProperties()

        //extrude depth
        this.extrudeDepth = 80

        //hidden item zTranslation
        this.hiddenItemZTranslation = 5
    }

    setTetrahedronProperties() {
        //edge length
        this.edgeLength = 1500

        //face height
        this.faceHeight = Math.sqrt(Math.pow(this.edgeLength, 2) - Math.pow(this.edgeLength / 2, 2))

        //tetrahedron height
        this.tetHeight = Math.sqrt(2 / 3) * this.edgeLength

        //distance to edge
        this.distToEdge = Math.sqrt(Math.pow(this.faceHeight, 2) - Math.pow(this.tetHeight, 2))

        //bending angle
        this.bendAngle = 90 - 70.5288
    }

    loadSvg(path) {
        const promise = new Promise((resolve, reject) => {
            this.svgLoader.load(path, (data) => {
                resolve(data)
            })
        })

        return promise
    }

    async createSvg(path, classZDepth = undefined, holes = undefined, visible) {
        const svgData = await this.loadSvg(path)

        const paths = svgData.paths

        const group = new this.THREE.Group
        group.scale.y *= - 1

        paths.forEach((path) => {
            const classList = path.userData.node.classList

            const fillColor = path.userData.style.fill

            if (fillColor !== 'none') {
                const opacity = path.userData.style.fillOpacity

                const material1 = new this.THREE.MeshPhongMaterial({
                    color: new this.THREE.Color().setStyle(fillColor),
                    opacity: visible ? opacity : 0,//path.userData.style.fillOpacity,
                    transparent: true,//path.userData.style.fillOpacity < 1,
                    side: this.THREE.DoubleSide,
                    depthWrite: true,
                    shininess: 80,
                })


                const material2 = new this.THREE.MeshPhongMaterial({
                    color: new this.THREE.Color().setStyle(fillColor).addScalar(0.2),
                    opacity: visible ? opacity : 0,//path.userData.style.fillOpacity,
                    transparent: true,//path.userData.style.fillOpacity < 1,
                    side: this.THREE.DoubleSide,
                    depthWrite: true,
                })

                let shapes

                //holes
                if (holes !== undefined) {
                    shapes = path.toShapes(holes.param1, holes.param2)
                } else {
                    shapes = path.toShapes(true)
                }

                shapes.forEach((shape) => {
                    const geometry = new this.THREE.ExtrudeGeometry(shape, {
                        depth: this.extrudeDepth,
                        bevelEnabled: false,
                    })
                    geometry.computeFlatVertexNormals()

                    const mesh = new this.THREE.Mesh(geometry, [material1, material2])
                    mesh.userData = {}
                    mesh.userData.shape = shape
                    mesh.userData.opacity = opacity

                    if (classZDepth !== undefined) {
                        for (const [className, zDepth] of Object.entries(classZDepth)) {
                            classList.forEach((pathClassName) => {
                                if (pathClassName == className) {
                                    mesh.translateZ(zDepth)
                                }
                            })
                        }
                    }

                    group.add(mesh)

                })
            }
        })

        //get mesh items to center
        const box3 = new this.THREE.Box3().setFromObject(group)
        const size = new this.THREE.Vector3()
        box3.getSize(size)
        const yOffset = size.y / -2
        const xOffset = size.x / -2
        group.children.forEach((child) => {
            child.position.x = xOffset
            child.position.y = yOffset
        })

        //hide invisible elements
        if (visible == false) {
            group.scale.set(0.01, 0.01, 0.01)
            //move hidden item slightly into a visible item
            group.translateZ(this.hiddenItemZTranslation)
        }

        //move object slightly into triangle
        group.translateZ(-1)

        //move group to center of triangle
        group.translateY(-(this.faceHeight - this.tetHeight))

        return group
    }

    createFaceTriangle(color) {
        const geometry = new this.THREE.BufferGeometry()
        geometry.setAttribute('position', new this.THREE.BufferAttribute(this.getTriangleCoordinates(), 3))
        geometry.computeVertexNormals()

        const material = new this.THREE.MeshPhongMaterial({
            color: color,
            side: this.THREE.DoubleSide,
            transparent: true,
            opacity: 0.7,
            depthWrite:false,
        })

        const mesh = new this.THREE.Mesh(geometry, material)

        return mesh
    }

    getTriangleCoordinates() {
        const top = [0, this.faceHeight / 2, 0]
        const left = [- this.edgeLength / 2, - this.faceHeight / 2, 0]
        const right = [this.edgeLength / 2, - this.faceHeight / 2, 0]
        return new Float32Array([
            ...top, ...left, ...right
        ])
    }

    positionFace(position, face) {
        if (position == 'front' || position == 'right' || position == 'left') {
            //get right and left faces in position
            if (position == 'right') {
                face.rotateY(this.degToRad(120))
            } else if (position == 'left') {
                face.rotateY(this.degToRad(-120))
            }

            //translate to edge of bottom
            face.translateZ(this.distToEdge)
            //get bottom part aligned with bottom face
            face.translateY((this.faceHeight / 2) - (this.tetHeight / 2))
            //translateY, then rotateX, then translate back
            face.translateY(-this.faceHeight / 2)
            face.rotateX(this.degToRad(-this.bendAngle))
            face.translateY(this.faceHeight / 2)

        } else if (position == 'bottom') {
            face.rotateX(this.degToRad(-90))
            //align face to center of tetrahedron
            face.translateY((this.faceHeight / 2 - this.distToEdge))
            //translate by half tetrahedron height
            face.translateZ(- this.tetHeight / 2)
        }
    }

    async setSvgs(faceIdentifier) {
        //const group = new this.THREE.Group()
        const face = this.faces[faceIdentifier]

        let index=0
        for(const item of face.items){
            const visible = face.currentItemIndex == index ? true : false
            const svgGroup = await this.createSvg(item.path, item.classZDepth, undefined, visible)
            item.svgGroup = svgGroup
            face.group.add(item.svgGroup)
            index++
        }

        /*
        face.items.forEach(async (item, index) => {
            const visible = face.currentItemIndex == index ? true : false
            const svgGroup = await this.createSvg(item.path, item.classZDepth, undefined, visible)
            item.svgGroup = svgGroup
            face.group.add(item.svgGroup)
        })
        */
    }

    async constructScene() {
        //face1 front
        this.faces.face1.group = new this.THREE.Group()
        const face1Group = this.faces.face1.group
        //face1 triangle
        this.faces.face1.triangle = this.createFaceTriangle('blue')
        face1Group.add(this.faces.face1.triangle)
        this.positionFace('front', face1Group)
        //face1 svg's
        await this.setSvgs('face1')
        //this.faces.face1
        this.sceneGroup.add(face1Group)

        //face2 right
        this.faces.face2.group = new this.THREE.Group()
        const face2Group = this.faces.face2.group
        //face2 triangle
        this.faces.face2.triangle = this.createFaceTriangle('green')
        face2Group.add(this.faces.face2.triangle)
        this.positionFace('right', face2Group)
        this.sceneGroup.add(face2Group)

        //face3 left
        this.faces.face3.group = new this.THREE.Group()
        const face3Group = this.faces.face3.group
        //face3 triangle
        this.faces.face3.triangle = this.createFaceTriangle('purple')
        face3Group.add(this.faces.face3.triangle)
        this.positionFace('left', face3Group)
        this.sceneGroup.add(face3Group)

        //face4 bottom
        this.faces.face4.group = new this.THREE.Group
        const face4Group = this.faces.face4.group
        //face4 triangle
        this.faces.face4.triangle = this.createFaceTriangle('red')
        face4Group.add(this.faces.face4.triangle)
        this.positionFace('bottom', face4Group)
        this.sceneGroup.add(face4Group)


        this.scene.add(this.sceneGroup)

        const gridHelper = new this.THREE.GridHelper(800, 10)
        gridHelper.rotateX(this.degToRad(90))
        this.scene.add(gridHelper)

        this.animate()

        this.setCanvasLoaded(true)

        this.animateExtrusion()
    }

    changeExtrusion(depth,opacity, group) {
        group.children.forEach((mesh) => {
            mesh.geometry.dispose()
            mesh.geometry = new this.THREE.ExtrudeGeometry(mesh.userData.shape, {
                depth: depth,
                bevelEnabled: false,
            })
            /*
            mesh.material.forEach((material)=>{
                material.opacity=opacity
            })
            */
        })
    }

    animateExtrusion() {
        const group = this.faces.face1.items[0]

        const extrude = {
            depth: this.extrudeDepth,
            scale:1,
            opacity:1,
        }

        console.log(group.svgGroup)

        gsap.to(extrude,{duration:1,opacity:0,depth:0,onUpdate:()=>{this.changeExtrusion(extrude.depth,extrude.opacity,group.svgGroup)},
    onComplete:()=>{group.svgGroup.scale.set(0.01,0.01,0.01)}})
        //gsap.to(group.svgGroup.material,{duration:1,opacity:0})
    }

    animate() {
        this.render()
        window.requestAnimationFrame(this.animate.bind(this))
    }

    render() {
        this.renderer.render(this.scene, this.camera)
    }

    onWindowResize() {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    }

    degToRad(degrees) {
        return degrees * (Math.PI / 180);
    }
}