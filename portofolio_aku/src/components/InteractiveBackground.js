// components/InteractiveBackground.js
"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function InteractiveBackground() {
  const containerRef = useRef();

  useEffect(() => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Grid lines
    const grid = new THREE.GridHelper(50, 50, 0x00ffff, 0x00ffff);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      grid.rotation.x += 0.001;
      grid.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      containerRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
