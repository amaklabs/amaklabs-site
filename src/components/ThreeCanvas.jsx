import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeCanvas({ type }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 15;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 4. Create Parent Group to allow smooth group-level rotation
    const group = new THREE.Group();
    scene.add(group);

    // 5. Mouse coordinates tracking for parallax/interaction
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      // Map screen cursor coordinates to a normalized -1 to 1 range
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Object creation based on page type
    let mainObject;
    let particles;

    if (type === 'neural') {
      // Neural network node mesh for AI workflows
      const particleCount = 60;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const velocities = [];

      for (let i = 0; i < particleCount * 3; i += 3) {
        // Random position in a sphere
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 8 * Math.cbrt(Math.random());

        positions[i] = r * Math.sin(phi) * Math.cos(theta);
        positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i + 2] = r * Math.cos(phi);

        velocities.push({
          x: (Math.random() - 0.5) * 0.05,
          y: (Math.random() - 0.5) * 0.05,
          z: (Math.random() - 0.5) * 0.05,
        });
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0x00DF89,
        size: 0.2,
        transparent: true,
        opacity: 0.8,
      });

      particles = new THREE.Points(geometry, material);
      group.add(particles);

      // Create lines connecting points
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00DF89,
        transparent: true,
        opacity: 0.15,
      });

      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array(particleCount * particleCount * 6);
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      group.add(lineMesh);

      mainObject = {
        tick: () => {
          const pos = particles.geometry.attributes.position.array;
          let lineIdx = 0;
          const linePos = lineMesh.geometry.attributes.position.array;

          // Move points
          for (let i = 0; i < particleCount; i++) {
            const idx = i * 3;
            pos[idx] += velocities[i].x;
            pos[idx + 1] += velocities[i].y;
            pos[idx + 2] += velocities[i].z;

            // Bounce back
            const r = Math.sqrt(pos[idx] ** 2 + pos[idx + 1] ** 2 + pos[idx + 2] ** 2);
            if (r > 10) {
              velocities[i].x *= -1;
              velocities[i].y *= -1;
              velocities[i].z *= -1;
            }

            // Draw lines to near points
            for (let j = i + 1; j < particleCount; j++) {
              const jdx = j * 3;
              const dx = pos[idx] - pos[jdx];
              const dy = pos[idx + 1] - pos[jdx + 1];
              const dz = pos[idx + 2] - pos[jdx + 2];
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

              if (dist < 5) {
                linePos[lineIdx] = pos[idx];
                linePos[lineIdx + 1] = pos[idx + 1];
                linePos[lineIdx + 2] = pos[idx + 2];
                linePos[lineIdx + 3] = pos[jdx];
                linePos[lineIdx + 4] = pos[jdx + 1];
                linePos[lineIdx + 5] = pos[jdx + 2];
                lineIdx += 6;
              }
            }
          }

          // Reset rest of the line positions
          for (let k = lineIdx; k < linePos.length; k++) {
            linePos[k] = 0;
          }

          particles.geometry.attributes.position.needsUpdate = true;
          lineMesh.geometry.attributes.position.needsUpdate = true;

          particles.rotation.y += 0.001;
          lineMesh.rotation.y += 0.001;
        },
        dispose: () => {
          geometry.dispose();
          material.dispose();
          lineGeometry.dispose();
          lineMaterial.dispose();
        },
      };
    } else if (type === 'torus') {
      // Torus knot for SaaS/Web database flows
      const geometry = new THREE.TorusKnotGeometry(4, 1.2, 100, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00F0FF,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });

      const torus = new THREE.Mesh(geometry, material);
      group.add(torus);

      mainObject = {
        tick: (elapsed) => {
          torus.rotation.x = elapsed * 0.15;
          torus.rotation.y = elapsed * 0.25;
        },
        dispose: () => {
          geometry.dispose();
          material.dispose();
        },
      };
    } else {
      // Floating sphere for Custom Mobile Apps
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00DF89,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });

      const sphere = new THREE.Mesh(geometry, material);
      group.add(sphere);

      // Add a small inner sphere
      const innerGeom = new THREE.IcosahedronGeometry(3, 1);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0x00F0FF,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });
      const innerSphere = new THREE.Mesh(innerGeom, innerMat);
      group.add(innerSphere);

      mainObject = {
        tick: (elapsed) => {
          sphere.rotation.y = elapsed * 0.1;
          sphere.position.y = Math.sin(elapsed) * 0.4;
          innerSphere.rotation.x = -elapsed * 0.2;
          innerSphere.rotation.y = -elapsed * 0.1;
        },
        dispose: () => {
          geometry.dispose();
          material.dispose();
          innerGeom.dispose();
          innerMat.dispose();
        },
      };
    }

    // 7. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // 8. Animation loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Apply standard procedural updates (spins, floating offsets)
      if (mainObject && mainObject.tick) {
        mainObject.tick(elapsed);
      }

      // Smoothly interpolate (lerp) current rotation to target cursor coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Adjust group yaw (Y axis) and pitch (X axis) based on mouse
      group.rotation.y = mouse.x * 0.6;
      group.rotation.x = -mouse.y * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listeners and WebGL resources to prevent memory leaks
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mainObject && mainObject.dispose) {
        mainObject.dispose();
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [type]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

export default ThreeCanvas;
