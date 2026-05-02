import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeDScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    // ── Icosahedron mesh ──────────────────────────────────────
    const geo  = new THREE.IcosahedronGeometry(1.8, 1);

    // Solid (very low opacity fill)
    const solidMat = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.07,
      side: THREE.DoubleSide,
    });
    const solid = new THREE.Mesh(geo, solidMat);
    scene.add(solid);

    // Edge wireframe (indigo)
    const edgeGeo = new THREE.EdgesGeometry(geo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.75 });
    const edges   = new THREE.LineSegments(edgeGeo, edgeMat);
    solid.add(edges);

    // Cyan inner glow shell (slightly smaller, no fill, different hue)
    const innerGeo    = new THREE.IcosahedronGeometry(1.55, 1);
    const innerEdges  = new THREE.EdgesGeometry(innerGeo);
    const innerMat    = new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.25 });
    const innerWire   = new THREE.LineSegments(innerEdges, innerMat);
    solid.add(innerWire);

    // ── Particle field ────────────────────────────────────────
    const COUNT = 1600;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 2.8 + Math.random() * 2.2;
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const ptMat = new THREE.PointsMaterial({ color: 0x94a3b8, size: 0.025, transparent: true, opacity: 0.55 });
    const particles = new THREE.Points(ptGeo, ptMat);
    scene.add(particles);

    // ── Lights ────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const pLight1 = new THREE.PointLight(0x6366f1, 3, 12);
    pLight1.position.set(3, 3, 3);
    scene.add(pLight1);
    const pLight2 = new THREE.PointLight(0x06b6d4, 2, 10);
    pLight2.position.set(-3, -2, 2);
    scene.add(pLight2);

    // ── Mouse parallax ────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 0.6;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', onMouse);

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // ── Animation loop ────────────────────────────────────────
    const clock = new THREE.Clock();
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      solid.rotation.y = t * 0.18;
      solid.rotation.x = t * 0.09;
      particles.rotation.y = t * 0.04;

      camera.position.x += (mouse.x - camera.position.x) * 0.04;
      camera.position.y += (mouse.y - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      aria-hidden
    />
  );
}
