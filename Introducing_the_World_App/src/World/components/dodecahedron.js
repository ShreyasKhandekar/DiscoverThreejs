import { DodecahedronGeometry, Mesh, MeshBasicMaterial } from "three"

function createDodecahedron() {
    // Create a geometry of a dodecahedron
    const dodecahedronGeometry = new DodecahedronGeometry(2, 0)

    const material = new MeshBasicMaterial({color: "purple"})

    // Create a Mesh containing the geometry and material
    const dodecahedron = new Mesh(dodecahedronGeometry, material)


    // Move it to the left
    dodecahedron.position.x = -2

    return dodecahedron
}


export { createDodecahedron }
