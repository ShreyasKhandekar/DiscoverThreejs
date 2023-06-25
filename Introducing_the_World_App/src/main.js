import { World } from "./World/World.js"

// Main fucntion

function main() {
    // Get a reference to the container element
    const container = document.querySelector("#scene-container")

    // create a new world app, passing the container
    const world = new World(container)

    const button = document.querySelector("#start-button")
    button.addEventListener("click", () => {
        world.render()
    })
}

main()
