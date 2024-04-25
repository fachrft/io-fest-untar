import { useEffect, useRef } from 'react';
import earth from '../../assets/3d/earth.jpg'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import vertexShader from "../../shaders/vertex.glsl";
import fragmentShader from "../../shaders/fragment.glsl";
import atmosphereVertexShader from "../../shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "../../shaders/atmosphereFragment.glsl";
import awan from '../../assets/vektor/awan.png'

const Globe = () => {
    const canvasRef = useRef(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    useEffect(() => {
        const canvas = canvasRef.current;
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setClearColor(0xffffff);
        canvas.appendChild(renderer.domElement);
        
        let loader = new THREE.TextureLoader()

        loader.load(awan, function(texture) {
            scene.background = texture
        })
        const sphere = new THREE.SphereGeometry(5, 50, 50);
        const color = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                globeTexture: { value: new THREE.TextureLoader().load(earth) },
            },
        });
        const mesh = new THREE.Mesh(sphere, color);
        scene.add(mesh);

        const atmosphere = new THREE.SphereGeometry(5, 50, 50);
        const atmosphereColor = new THREE.ShaderMaterial({
            vertexShader: atmosphereVertexShader,
            fragmentShader: atmosphereFragmentShader,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
        });
        const meshAtmosphere = new THREE.Mesh(atmosphere, atmosphereColor);
        meshAtmosphere.scale.set(1.1, 1.1, 1.1);
        scene.add(meshAtmosphere);

        const group = new THREE.Group();
        group.add(mesh);
        scene.add(group);

        // camera.position.z = 15;
        setCameraPosition();

        const orbit = new OrbitControls(camera, renderer.domElement);
        orbit.enablePan = false;
        orbit.enableZoom = false;
        orbit.update();

        window.addEventListener('resize', function() {
            let width = window.innerWidth
            let height = window.innerHeight
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix()
        })

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            mesh.rotation.y += 0.005;
        }
        animate();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        setCameraPosition();
    };

    const setCameraPosition = () => {
        if (window.innerWidth < 768) {
            camera.position.z = 18;
        } else {
            camera.position.z = 12;
        }
    };

    return <div className='h-[70vh] flex justify-between items-center overflow-hidden lg:h-[100vh]'>
        <div ref={canvasRef}></div>
    </div>;
};

export default Globe;
