import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "https://cdn.skypack.dev/three@0.152.0"

// just waiting for your beautiful creations!

// Get the container for the canvas
const container = window.document.querySelector("#scene-container")

// Create the scene
const scene = new Scene()

// Set the scene background color
scene.background = new Color("skyblue")

// Create the camera
const fov = 35
const aspect = container.clientWidth / container.clientHeight
const nearClip = 0.1
const farClip = 1000

const camera = new PerspectiveCamera(fov, aspect, nearClip, farClip)

// Every object is intially created at ( 0, 0, 0 )
// So we are going to move the camera back a bit
camera.position.set(0, 0, 10)

// Creating a visible object: Mesh
// Geometry: Shape of the object
const geometry = new BoxGeometry(2, 2, 2, 5, 5, 5)


// Material: How the object looks like
const material = new MeshBasicMaterial({ color: "red" })
// Since we created a MeshBasicMaterial, we don't need light to see.
// Almost all other materials need light to see.

// Make the material a wireframe
material.wireframe = true

const cube = new Mesh(geometry, material)

// Access the material and change its color
// cube.material.color.set("white")

// Add mesh to the scene
scene.add(cube)

// Create the renderer
const renderer = new WebGLRenderer()

// Tell the renderer the size of our scene
renderer.setSize(container.clientWidth, container.clientHeight)

// set the device pixel ratio so that the scene looks nice on high dpi screens
renderer.setPixelRatio(window.devicePixelRatio)


// The scene has been automatically saved by the rendered in a <canvas> element
// So we just need to append it to our container
container.append(renderer.domElement)


// Render the scene
renderer.render( scene, camera );

