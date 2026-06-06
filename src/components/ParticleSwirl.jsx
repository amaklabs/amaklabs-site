import { useEffect, useRef } from 'react';

export function ParticleSwirl() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Track mouse coordinates
    let mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class
    const PARTICLE_COUNT = 650;
    const particles = [];

    // Initialize particles in a 3D double helix/wave shape
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = i * 0.07;
      const progress = i / PARTICLE_COUNT; // 0 to 1
      particles.push({
        theta,
        progress,
        // Base coordinates in 3D
        baseY: (progress - 0.5) * 450, // Height spread
        radius: 120 + Math.sin(theta * 2) * 30, // Helix radius variance
        x: 0,
        y: 0,
        z: 0,
      });
    }

    let time = 0;
    let angleX = 0.2;
    let angleY = 0;

    const fov = 420; // 3D projection field of view

    // Main animation loop
    const animate = () => {
      time += 0.015;

      // Smooth mouse coordinates
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // Map mouse coordinates to 3D rotation offsets
      const targetAngleY = ((mouse.x / width) - 0.5) * 1.2;
      const targetAngleX = ((mouse.y / height) - 0.5) * 0.6;

      // Interpolate rotation angles
      angleY += (targetAngleY - angleY) * 0.06;
      angleX += (targetAngleX - angleX) * 0.06;

      // Clear with slight alpha to create motion tail (optional, but clean black works better for performance)
      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, width, height);

      // Determine center position based on screen width
      const isMobile = width < 768;
      const centerX = isMobile ? width * 0.5 : width * 0.62;
      const centerY = height * 0.5;

      // Sort particles by depth (Z-index) to render background first (Painter's algorithm)
      const projected = [];

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];

        // Core wave formulas
        const wave = Math.sin(time * 1.5 + p.theta) * 18;
        const wave2 = Math.cos(time * 0.8 + p.theta * 0.5) * 10;

        // Helix coordinates with time-based morphing
        const px = Math.sin(p.theta + time * 0.2) * (p.radius + wave2);
        const py = p.baseY + wave;
        const pz = Math.cos(p.theta + time * 0.2) * (p.radius + wave2);

        // Apply 3D rotation on Y axis (Yaw)
        let x1 = px * Math.cos(angleY) - pz * Math.sin(angleY);
        let z1 = px * Math.sin(angleY) + pz * Math.cos(angleY);

        // Apply 3D rotation on X axis (Pitch)
        let y2 = py * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = py * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Project 3D -> 2D
        const scale = fov / (fov + z2);
        const sx = centerX + x1 * scale;
        const sy = centerY + y2 * scale;

        projected.push({
          x: sx,
          y: sy,
          z: z2,
          scale,
        });
      }

      // Sort by depth (Z coord) - back to front
      projected.sort((a, b) => b.z - a.z);

      // Draw projected particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        // Don't draw off-screen particles
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) continue;

        // Calculate opacity based on Z depth
        // Z ranges from negative (front) to positive (back)
        const depthAlpha = Math.max(0.05, Math.min(0.9, (fov - p.z) / (fov * 1.2)));

        // Outer glow style: dots in the front are larger and brighter
        const size = Math.max(0.6, p.scale * 1.6);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

        // Grayscale color: White (front) to silver/gray (back) based on depth
        const colorFactor = Math.max(0, Math.min(1, (p.z + 180) / 360));
        const val = Math.floor(255 - (255 - 140) * colorFactor);

        ctx.fillStyle = `rgba(${val}, ${val}, ${val}, ${depthAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
export default ParticleSwirl;
