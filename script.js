
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let model;
const loader = new THREE.GLTFLoader();
loader.load('model.glb', function(gltf) {
    model = gltf.scene;
    model.scale.set(1, 1, 1);
    scene.add(model);
});

camera.position.z = 5;

let scale = 1;
let direction = 1;

function animate() {
    requestAnimationFrame(animate);
    if (model) {
        scale += direction * 0.0005;
        if (scale > 1.05 || scale < 0.95) direction *= -1;
        model.scale.set(scale, scale, scale);
    }
    renderer.render(scene, camera);
}
animate();
