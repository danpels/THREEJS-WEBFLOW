import './styles/style.css'
import * as THREE from 'three'
import { Scene } from 'three'

//canvas
const canvas = document.querySelector('canvas.webgl')
console.log(THREE)


//scene
const scene = new THREE.Scene()


//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
scene.add(camera)

//geometry
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshNormalMaterial()
const mesh = new THREE.Mesh( geometry, material)
scene.add(mesh)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

//animate

function animate(){
    requestAnimationFrame( animate)

    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01

    renderer.render(scene, camera)
}
animate()