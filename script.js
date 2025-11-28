
// ==========================================
//        GLOBAL STYLE CONFIGURATION
// ==========================================

// 1. The Color of the Water (Hex Code)
// Try: 0x000000 (Pitch Black), 0x050505 (Charcoal), 0x1a2b3c (Dark Blue)
const COLOR_OCEAN = 0x111111; 

// 2. The Color of the Land/Continents (Hex Code)
// Try: 0xffffff (White), 0xeeeeee (Off-white), 0xcccccc (Light Grey)
const COLOR_LAND = 0xffffff;

// ==========================================

const portfolioData = [
    {
        name: "Tokyo, Japan",
        lat: 35.6762,
        lon: 139.6503,
        preview: "https://picsum.photos/id/1015/200/150",
        images: ["https://picsum.photos/id/1015/800/600", "https://picsum.photos/id/1016/800/600", "https://picsum.photos/id/1018/800/600"]
    },
    {
        name: "Reykjavik, Iceland",
        lat: 64.1466,
        lon: -21.9426,
        preview: "https://picsum.photos/id/1039/200/150",
        images: ["https://picsum.photos/id/1039/800/600", "https://picsum.photos/id/1040/800/600", "https://picsum.photos/id/1043/800/600"]
    },
    {
        name: "Sydney, Australia",
        lat: -33.8688,
        lon: 151.2093,
        preview: "https://picsum.photos/id/1047/200/150",
        images: ["https://picsum.photos/id/1047/800/600", "https://picsum.photos/id/1050/800/600"]
    },
    {
        name: "New York, USA",
        lat: 40.7128,
        lon: -74.0060,
        preview: "https://picsum.photos/id/1067/200/150",
        images: ["https://picsum.photos/id/1067/800/600", "https://picsum.photos/id/1076/800/600"]
    }
];

const corporateData = {
    name: "Corporate Portfolio",
    images: ["https://picsum.photos/id/1/800/600", "https://picsum.photos/id/2/800/600", "https://picsum.photos/id/3/800/600"]
};

// --- THREE.JS SETUP ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.03);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 18;
camera.position.y = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.8;

// --- THE GLOBE (Two-Layer Method) ---
const textureLoader = new THREE.TextureLoader();
const globeGroup = new THREE.Group(); // Group to hold ocean and land
scene.add(globeGroup);

// 1. OCEAN SPHERE (Base Layer)
// This is a solid colored sphere
const oceanGeometry = new THREE.SphereGeometry(5, 64, 64);
const oceanMaterial = new THREE.MeshPhongMaterial({
    color: COLOR_OCEAN,
    shininess: 20
});
const oceanMesh = new THREE.Mesh(oceanGeometry, oceanMaterial);
globeGroup.add(oceanMesh);

// 2. LAND SPHERE (Overlay Layer)
// We load a transparency map. White parts of the image become visible land.
// Black parts of the image become transparent, revealing the ocean sphere below.
const landGeometry = new THREE.SphereGeometry(5.02, 64, 64); // Slightly larger to prevent glitching

// We use a high-contrast black/white earth mask
const landTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');

const landMaterial = new THREE.MeshLambertMaterial({
    color: COLOR_LAND,
    alphaMap: landTexture, // Use the texture as transparency mask
    transparent: true,
    opacity: 1.0,
    side: THREE.DoubleSide
});
const landMesh = new THREE.Mesh(landGeometry, landMaterial);
globeGroup.add(landMesh);

// 3. Atmosphere Glow (Optional)
const glowGeo = new THREE.SphereGeometry(5.2, 64, 64);
const glowMat = new THREE.MeshBasicMaterial({
    color: COLOR_LAND, // Glow matches land color
    transparent: true,
    opacity: 0.05,
    side: THREE.BackSide
});
const glow = new THREE.Mesh(glowGeo, glowMat);
scene.add(glow);

// --- LIGHTING ---
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.5);
pointLight.position.set(20, 10, 20);
scene.add(pointLight);

// --- MARKERS ---
const markerGroup = new THREE.Group();
globeGroup.add(markerGroup); // Attach markers to the globeGroup so they spin with it

function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));
    return new THREE.Vector3(x, y, z);
}

portfolioData.forEach((place, index) => {
    const pos = latLonToVector3(place.lat, place.lon, 5.15); // Place just above land layer
    
    // Dot
    const dotGeo = new THREE.SphereGeometry(0.12, 16, 16);
    // Make dot contrasting color (Red or Inverse of Land) or just Bright White
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xff0055 }); 
    const mesh = new THREE.Mesh(dotGeo, dotMat);
    
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.userData = { id: index, ...place };
    markerGroup.add(mesh);
    
    // Ring
    const ringGeo = new THREE.RingGeometry(0.15, 0.2, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(pos.x, pos.y, pos.z);
    ring.lookAt(0,0,0);
    markerGroup.add(ring);
});

// --- INTERACTION ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hoveredObj = null;

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onClick);

const tooltip = document.getElementById('tooltip');
const tooltipImg = document.getElementById('tooltip-img');
const tooltipText = document.getElementById('tooltip-text');

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    tooltip.style.left = event.clientX + 'px';
    tooltip.style.top = event.clientY + 'px';

    raycaster.setFromCamera(mouse, camera);
    
    // Note: We are raycasting against markerGroup children
    // Since markerGroup is inside globeGroup which rotates, World Coordinates are handled automatically by Three.js
    const intersects = raycaster.intersectObjects(markerGroup.children, true);

    if (intersects.length > 0) {
        const obj = intersects[0].object;
        if (obj.geometry.type === "SphereGeometry" && obj.userData.name) {
            if (hoveredObj !== obj) {
                hoveredObj = obj;
                document.body.style.cursor = 'pointer';
                controls.autoRotate = false;
                obj.scale.set(1.5, 1.5, 1.5);
                tooltipImg.src = obj.userData.preview;
                tooltipText.textContent = obj.userData.name;
                tooltip.style.opacity = 1;
            }
        }
    } else {
        if (hoveredObj) {
            hoveredObj.scale.set(1, 1, 1);
            hoveredObj = null;
            document.body.style.cursor = 'default';
            controls.autoRotate = true;
            tooltip.style.opacity = 0;
        }
    }
}

function onClick(event) {
    if (hoveredObj) {
        openSidebar(hoveredObj.userData.name, hoveredObj.userData.images);
    }
}

// --- UI LOGIC ---
const sideDrawer = document.getElementById('side-drawer');
const galleryGrid = document.getElementById('gallery-grid');
const drawerTitle = document.getElementById('drawer-title');

document.getElementById('corp-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openSidebar(corporateData.name, corporateData.images);
});

function openSidebar(title, images) {
    drawerTitle.textContent = title;
    galleryGrid.innerHTML = '';
    images.forEach(src => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.onclick = () => openLightbox(src);
        const img = document.createElement('img');
        img.src = src;
        div.appendChild(img);
        galleryGrid.appendChild(div);
    });
    sideDrawer.classList.add('open');
    controls.autoRotate = false;
}

function closeDrawer() {
    sideDrawer.classList.remove('open');
    controls.autoRotate = true;
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});