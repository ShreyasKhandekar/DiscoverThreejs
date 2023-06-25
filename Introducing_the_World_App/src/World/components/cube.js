import { BoxGeometry, Mesh, MeshBasicMaterial } from "three"

function createCube() {
    // Create a geometry of a cube
    const cubeGeometry = new BoxGeometry(2, 2, 2)

    // Createa a mesh basic material
    const cubeMaterial = new MeshBasicMaterial()

    // Create a Mesh containing the geometry and material
    const cube = new Mesh(cubeGeometry, cubeMaterial)

    // Move it to the right
    cube.position.x = 2
    cube.position.y = -1

    return cube
}

function moveUp(cube) {
    cube.position.y += 2.3
}


export { createCube, moveUp }
