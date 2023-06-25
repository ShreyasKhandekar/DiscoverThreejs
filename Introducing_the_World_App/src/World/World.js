/* This world class handless all the abstraction of threejs
This class can be dropped into any webpage as a module without the webpage needing to know anything about threejs
*/

import { createCube, moveUp } from "./components/cube"
import { createDodecahedron } from "./components/dodecahedron"
import { createCamera } from "./components/camera"
import { createScene } from "./components/scene"

import { createRenderer } from "./systems/renderer"
import { Resizer } from "./systems/Resizer"


let camera;
let renderer;
let scene;


class World {
    // Create an instance of the world app
    // container is an html element in which the world app will insert the <canvas>
    constructor(container) {
        camera = createCamera()
        scene = createScene()

        const cube = createCube()
        scene.add(cube)
        const cube2 = createCube()
        scene.add(cube2)
        moveUp(cube2)
        
        const dodecahedron = createDodecahedron()
        scene.add(dodecahedron)

        renderer = createRenderer()
        container.append(renderer.domElement)
        this.resizer = new Resizer(container, camera, renderer)
    }

    // method to render the scene
    render() {
        renderer.render(scene, camera)
    }
}

export { World }
