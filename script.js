// ==========================================
//        GLOBAL STYLE CONFIGURATION
// ==========================================

// 1. The Color of the Water (Hex Code)
const COLOR_OCEAN = 0x111111;

// 2. The Color of the Land (Hex Code)
const COLOR_LAND = 0xffffff;

// ==========================================
//      PORTFOLIO DATA (CITY IMAGES)
// ==========================================

const portfolioData = [
    {
        name: "Amsterdam, Netherlands",
        lat: 52.3676,
        lon: 4.9041,
        preview: "images/Amsterdam/Amsterdam_1.jpg",
        images: [
            "images/Amsterdam/Amsterdam_1.jpg",
            "images/Amsterdam/Amsterdam_2.jpg",
            "images/Amsterdam/Amsterdam_3.jpg",
            "images/Amsterdam/Amsterdam_4.jpg"
        ]
    },
    {
        name: "Banff, Canada",
        lat: 51.1784,
        lon: -115.5708,
        preview: "images/Banff/Banff_1.jpg",
        images: [
            "images/Banff/Banff_1.jpg",
            "images/Banff/Banff_2.jpg",
            "images/Banff/Banff_3.jpg",
            "images/Banff/Banff_4.jpg",
            "images/Banff/Banff_5.jpg",
            "images/Banff/Banff_6.jpg",
            "images/Banff/Banff_7.jpg",
            "images/Banff/Banff_8.jpg"
        ]
    },
    {
        name: "Barcelona, Spain",
        lat: 41.3902,
        lon: 2.1540,
        preview: "images/Barcelona/Barcelona_1.jpg",
        images: [
            "images/Barcelona/Barcelona_1.jpg",
            "images/Barcelona/Barcelona_2.jpg",
            "images/Barcelona/Barcelona_3.jpg"
        ]
    },
    {
        name: "Bellingen, Australia",
        lat: -30.45224,
        lon: 152.89796,
        preview: "images/Bellingen/Bellingen_1.jpg",
        images: [
            "images/Bellingen/Bellingen_1.jpg",
            "images/Bellingen/Bellingen_2.jpg",
            "images/Bellingen/Bellingen_3.jpg",
            "images/Bellingen/Bellingen_4.jpg",
            "images/Bellingen/Bellingen_5.jpg",
            "images/Bellingen/Bellingen_6.jpg"
        ]
    },
    {
        name: "Byron Bay, Australia",
        lat: -28.64306,
        lon: 153.61500,
        preview: "images/Byron_Bay/Byron_Bay_1.jpg",
        images: [
            "images/Byron_Bay/Byron_Bay_1.jpg",
            "images/Byron_Bay/Byron_Bay_2.jpg",
            "images/Byron_Bay/Byron_Bay_3.jpg",
            "images/Byron_Bay/Byron_Bay_4.jpg"
        ]
    },
    {
        name: "Chiang Mai, Thailand",
        lat: 18.7953,
        lon: 98.9986,
        preview: "images/Chiang_Mai/Chiang_Mai_1.jpg",
        images: ["images/Chiang_Mai/Chiang_Mai_1.jpg", "images/Chiang_Mai/Chiang_Mai_2.jpg", "images/Chiang_Mai/Chiang_Mai_3.jpg"]
    },
    {
        name: "Crescent Head, Australia",
        lat: -31.1887,
        lon: 152.9730,
        preview: "images/Crescent_Head/Crescent_Head_1.jpg",
        images: [
            "images/Crescent_Head/Crescent_Head_1.jpg",
            "images/Crescent_Head/Crescent_Head_2.jpg",
            "images/Crescent_Head/Crescent_Head_3.jpg",
            "images/Crescent_Head/Crescent_Head_4.jpg",
            "images/Crescent_Head/Crescent_Head_5.jpg"
        ]
    },
    {
        name: "Dubrovnik, Croatia",
        lat: 42.6507,
        lon: 18.0944,
        preview: "images/Dubrovnik/Dubrovnik_1.jpg",
        images: [
            "images/Dubrovnik/Dubrovnik_1.jpg",
            "images/Dubrovnik/Dubrovnik_2.jpg",
            "images/Dubrovnik/Dubrovnik_3.jpg",
            "images/Dubrovnik/Dubrovnik_4.jpg"
        ]
    },
    {
        name: "Florence, Italy",
        lat: 43.7696,
        lon: 11.2558,
        preview: "images/Florence/Florence_1.jpg",
        images: [
            "images/Florence/Florence_1.jpg",
            "images/Florence/Florence_2.jpg",
            "images/Florence/Florence_3.jpg",
            "images/Florence/Florence_4.jpg"
        ]
    },
    {
        name: "Holbox, Mexico",
        lat: 21.5136,
        lon: -87.2716,
        preview: "images/Holbox/Holbox_1.jpg",
        images: [
            "images/Holbox/Holbox_1.jpg",
            "images/Holbox/Holbox_2.jpg",
            "images/Holbox/Holbox_3.jpg"
        ]
    },
    {
        name: "Jerusalem, Israel",
        lat: 31.7683,
        lon: 35.2137,
        preview: "images/Jerusalem/Jerusalem_1.jpg",
        images: [
            "images/Jerusalem/Jerusalem_1.jpg",
            "images/Jerusalem/Jerusalem_2.jpg",
            "images/Jerusalem/Jerusalem_3.jpg"
        ]
    },
    {
        name: "Lucerne, Switzerland",
        lat: 47.0502,
        lon: 8.3093,
        preview: "images/Lucern/Lucern_1.jpg",
        images: [
            "images/Lucern/Lucern_1.jpg",
            "images/Lucern/Lucern_2.jpg",
            "images/Lucern/Lucern_3.jpg"
        ]
    },
    {
        name: "Madeira, Portugal",
        lat: 32.7607,
        lon: -16.9595,
        preview: "images/Madeira/Madeira_1.jpg",
        images: [
            "images/Madeira/Madeira_1.jpg",
            "images/Madeira/Madeira_2.jpg",
            "images/Madeira/Madeira_3.jpg",
            "images/Madeira/Madeira_4.jpg",
            "images/Madeira/Madeira_5.jpg",
            "images/Madeira/Madeira_6.jpg",
            "images/Madeira/Madeira_7.jpg",
            "images/Madeira/Madeira_8.jpg"
        ]
    },
    {
        name: "Mont Tremblant, Canada",
        lat: 46.11667,
        lon: -74.599998,
        preview: "images/Mont_Tremblant/Mont_Tremblant_1.jpg",
        images: [
            "images/Mont_Tremblant/Mont_Tremblant_1.jpg",
            "images/Mont_Tremblant/Mont_Tremblant_2.jpg",
            "images/Mont_Tremblant/Mont_Tremblant_3.jpg"
        ]
    },
    {
        name: "Montreal, Canada",
        lat: 45.5017,
        lon: -73.5673,
        preview: "images/Montreal/Montreal_1.jpg",
        images: [
            "images/Montreal/Montreal_1.jpg",
            "images/Montreal/Montreal_2.jpg",
            "images/Montreal/Montreal_3.jpg",
            "images/Montreal/Montreal_4.jpg",
            "images/Montreal/Montreal_6.jpg"
        ]
    },
    {
        name: "Ottawa, Canada",
        lat: 45.4215,
        lon: -75.6972,
        preview: "images/Ottowa/Ottowa_1.jpg",
        images: [
            "images/Ottowa/Ottowa_1.jpg",
            "images/Ottowa/Ottowa_2.jpg"
        ]
    },
    {
        name: "Porto, Portugal",
        lat: 41.1579,
        lon: -8.6291,
        preview: "images/Porto/Porto_1.jpg",
        images: [
            "images/Porto/Porto_1.jpg",
            "images/Porto/Porto_2.jpg",
            "images/Porto/Porto_3.jpg",
            "images/Porto/Porto_4.jpg",
            "images/Porto/Porto_5.jpg",
            "images/Porto/Porto_6.jpg"
        ]
    },
    {
        name: "Santorini, Greece",
        lat: 36.3932,
        lon: 25.4615,
        preview: "images/Santorini/Santorini_1.jpg",
        images: [
            "images/Santorini/Santorini_1.jpg",
            "images/Santorini/Santorini_2.jpg",
            "images/Santorini/Santorini_3.jpg",
            "images/Santorini/Santorini_4.jpg"
        ]
    },
    {
        name: "Sydney, Australia",
        lat: -33.8688,
        lon: 151.2093,
        preview: "images/Sydney/Sydney_1.jpg",
        images: [
            "images/Sydney/Sydney_1.jpg",
            "images/Sydney/Sydney_2.jpg",
            "images/Sydney/Sydney_3.jpg",
            "images/Sydney/Sydney_4.jpg",
            "images/Sydney/Sydney_5.jpg",
            "images/Sydney/Sydney_6.jpg",
            "images/Sydney/Sydney_7.jpg",
            "images/Sydney/Sydney_8.jpg",
            "images/Sydney/Sydney_9.jpg",
            "images/Sydney/Sydney_10.jpg"
        ]
    },
    {
        name: "Toronto, Canada",
        lat: 43.6532,
        lon: -79.3832,
        preview: "images/Toronto/Toronto_1.jpg",
        images: [
            "images/Toronto/Toronto_1.jpg",
            "images/Toronto/Toronto_2.jpg",
            "images/Toronto/Toronto_3.jpg"
        ]
    }
];

const corporateData = {
    name: "Corporate & Event",
    images: ["images/Corporate/Corporate_1.jpg", 
        "images/Corporate/Corporate_2.jpg", 
        "images/Corporate/Corporate_3.jpg", 
        "images/Corporate/Corporate_4.jpg", 
        "images/Corporate/Corporate_5.jpg", 
        "images/Corporate/Corporate_6.jpg", 
        "images/Corporate/Corporate_7.jpg", 
        "images/Corporate/Corporate_8.jpg", 
        "images/Corporate/Corporate_9.jpg", 
        "images/Corporate/Corporate_10.jpg",
         "images/Corporate/Corporate_11.jpg", 
         "images/Corporate/Corporate_12.jpg", 
         "images/Corporate/Corporate_13.jpg", 
         "images/Corporate/Corporate_14.jpg", 
         "images/Corporate/Corporate_15.jpg", 
         "images/Corporate/Corporate_16.jpg"]
};

const beachData = {
    name: "Beach & Surf",
    images: [
        // TODO: update these paths to your real beach images
        "images/beach/Beach_1.jpg",
        "images/beach/Beach_2.jpg",
        "images/beach/Beach_3.jpg",
        "images/beach/Beach_4.jpg",
        "images/beach/Beach_5.jpg",
        "images/beach/Beach_6.jpg",
        "images/beach/Beach_7.jpg",
        "images/beach/Beach_8.jpg",
        "images/beach/Beach_9.jpg",
        "images/beach/Beach_10.jpg",
        "images/beach/Beach_11.jpg",
        "images/beach/Beach_12.jpg",
    ]
};
    


// ===============================================================
//                     THREE.JS SETUP
// ===============================================================

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

// OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.minDistance = 7;   // closest allowed zoom
controls.maxDistance = 25;  // furthest allowed zoom
controls.autoRotate = true;
controls.autoRotateSpeed = 0.3;

// Globe setup
const textureLoader = new THREE.TextureLoader();
const globeGroup = new THREE.Group();
scene.add(globeGroup);

// Ocean sphere
const oceanGeometry = new THREE.SphereGeometry(5, 64, 64);
const oceanMaterial = new THREE.MeshPhongMaterial({
    color: COLOR_OCEAN,
    shininess: 20
});
const oceanMesh = new THREE.Mesh(oceanGeometry, oceanMaterial);
globeGroup.add(oceanMesh);

// Land sphere overlay
const landGeometry = new THREE.SphereGeometry(5.02, 64, 64);
const landTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');

const landMaterial = new THREE.MeshLambertMaterial({
    color: COLOR_LAND,
    alphaMap: landTexture,
    transparent: true,
    opacity: 1.0,
    side: THREE.DoubleSide
});
const landMesh = new THREE.Mesh(landGeometry, landMaterial);
globeGroup.add(landMesh);

// Glow
const glowGeo = new THREE.SphereGeometry(5.2, 64, 64);
const glowMat = new THREE.MeshBasicMaterial({
    color: COLOR_LAND,
    transparent: true,
    opacity: 0.05,
    side: THREE.BackSide
});
const glow = new THREE.Mesh(glowGeo, glowMat);
scene.add(glow);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.5);
pointLight.position.set(20, 10, 20);
scene.add(pointLight);

// ===============================================================
//                     MARKERS (CITY DOTS)
// ===============================================================

const markerGroup = new THREE.Group();
globeGroup.add(markerGroup);

function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));
    return new THREE.Vector3(x, y, z);
}

portfolioData.forEach((place, index) => {
    const pos = latLonToVector3(place.lat, place.lon, 5.15);

    const dotGeo = new THREE.SphereGeometry(0.07, 16, 16);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });
    const mesh = new THREE.Mesh(dotGeo, dotMat);

    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.userData = { id: index, ...place };
    markerGroup.add(mesh);

    const ringGeo = new THREE.RingGeometry(0.15, 0.2, 32);
    const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(pos.x, pos.y, pos.z);
    ring.lookAt(0, 0, 0);
    markerGroup.add(ring);
});

// ===============================================================
//                      INTERACTION
// ===============================================================

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hoveredObj = null;

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onClick);

const tooltip = document.getElementById('tooltip');
const tooltipImg = document.getElementById('tooltip-img');
const tooltipText = document.getElementById('tooltip-text');

function onMouseMove(event) {
    const rect = renderer.domElement.getBoundingClientRect();

    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    tooltip.style.left = event.clientX + 'px';
    tooltip.style.top = event.clientY + 'px';

    raycaster.setFromCamera(mouse, camera);
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

// ===============================================================
//                     SIDEBAR UI LOGIC
// ===============================================================

const sideDrawer = document.getElementById('side-drawer');
const galleryGrid = document.getElementById('gallery-grid');
const drawerTitle = document.getElementById('drawer-title');

document.getElementById('corp-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openSidebar(corporateData.name, corporateData.images);
});

document.getElementById('beach-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openSidebar(beachData.name, beachData.images);
});

function openSidebar(title, images) {
    drawerTitle.textContent = title;
    galleryGrid.innerHTML = '';

    images.forEach(src => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.onclick = () => openLightbox(src, images);
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

// ===============================================================
//                   LIGHTBOX WITH NAVIGATION
// ===============================================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentImageIndex = 0;
let currentImageList = [];

function openLightbox(src, list = []) {
    currentImageList = list;
    currentImageIndex = currentImageList.indexOf(src);

    lightboxImg.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

// Next/Previous image navigation
function nextImage() {
    if (currentImageList.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentImageList.length;
    lightboxImg.src = currentImageList[currentImageIndex];
}

function prevImage() {
    if (currentImageList.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentImageList.length) % currentImageList.length;
    lightboxImg.src = currentImageList[currentImageIndex];
}

// Keyboard navigation
window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
});

// ===============================================================
//                     ANIMATION LOOP
// ===============================================================

function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // --- DOT AUTO-SCALE (Google Maps style) ---
    // --- DOT + RING AUTO-SCALE (Google Maps style) ---
    markerGroup.children.forEach(obj => {
        const dist = camera.position.length();
        const scale = dist * 0.05;   // adjust multiplier to tune size

        // Scale DOTS
        if (obj.geometry && obj.geometry.type === "SphereGeometry") {
            obj.scale.set(scale, scale, scale);
        }

        // Scale RINGS
        if (obj.geometry && obj.geometry.type === "RingGeometry") {
            obj.scale.set(scale, scale, scale);
        }
    });
    renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
