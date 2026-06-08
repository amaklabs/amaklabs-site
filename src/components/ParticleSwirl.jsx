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

    // 3D Workflow Node Definition
    const NODE_COUNT = 22;
    const nodes = [];
    const labels = [
      { text: '[Trigger]', index: 0 },
      { text: '[AI Engine]', index: 3 },
      { text: '[Database Sync]', index: 6 },
      { text: '[API Gateway]', index: 9 },
      { text: '[Slack Bot]', index: 12 },
      { text: '[Email Webhook]', index: 15 },
      { text: '[Scheduler]', index: 18 }
    ];

    // Initialize nodes floating in 3D sphere space
    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 100 + Math.random() * 120; // Spread radius

      nodes.push({
        baseX: r * Math.sin(phi) * Math.cos(theta),
        baseY: (Math.random() - 0.5) * 360, // Spread vertically
        baseZ: r * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        vz: (Math.random() - 0.5) * 0.18,
        size: labels.some(l => l.index === i) ? 5 : 2,
        label: labels.find(l => l.index === i)?.text || '',
        pulseProgress: Math.random()
      });
    }

    let time = 0;
    let angleX = 0.2;
    let angleY = 0;

    const fov = 420; // 3D projection field of view

    // Main animation loop
    const animate = () => {
      time += 0.008;

      // Smooth mouse coordinates
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // Map mouse coordinates to 3D rotation offsets
      const targetAngleY = ((mouse.x / width) - 0.5) * 1.0;
      const targetAngleX = ((mouse.y / height) - 0.5) * 0.5;

      // Interpolate rotation angles
      angleY += (targetAngleY - angleY) * 0.06;
      angleX += (targetAngleX - angleX) * 0.06;

      // Clear frame with background color
      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, width, height);

      // Determine center position based on screen width
      const isMobile = width < 768;
      let centerX;
      if (isMobile) {
        centerX = width * 0.5;
      } else {
        // Centered exactly in the right column space of the 1200px container
        const containerWidth = Math.min(width, 1200);
        const leftEdge = (width - containerWidth) / 2;
        const leftColWidth = 620;
        centerX = leftEdge + leftColWidth + (containerWidth - leftColWidth) / 2;
      }
      const centerY = height * 0.5;

      // Update positions and velocities in 3D
      for (let i = 0; i < NODE_COUNT; i++) {
        const n = nodes[i];
        n.baseX += n.vx;
        n.baseY += n.vy;
        n.baseZ += n.vz;

        // Soft boundaries bounce
        const dist = Math.sqrt(n.baseX * n.baseX + n.baseY * n.baseY + n.baseZ * n.baseZ);
        if (dist > 220) {
          n.vx *= -1;
          n.vy *= -1;
          n.vz *= -1;
        }

        // Increment data flow pulse
        n.pulseProgress += 0.006;
        if (n.pulseProgress > 1) {
          n.pulseProgress = 0;
        }
      }

      // Project 3D positions to 2D
      const projected = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const n = nodes[i];

        // Apply Yaw (Y rotation)
        let x1 = n.baseX * Math.cos(angleY) - n.baseZ * Math.sin(angleY);
        let z1 = n.baseX * Math.sin(angleY) + n.baseZ * Math.cos(angleY);

        // Apply Pitch (X rotation)
        let y2 = n.baseY * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = n.baseY * Math.sin(angleX) + z1 * Math.cos(angleX);

        const scale = fov / (fov + z2);
        const sx = centerX + x1 * scale;
        const sy = centerY + y2 * scale;

        projected.push({
          x: sx,
          y: sy,
          z: z2,
          scale,
          size: n.size,
          label: n.label,
          pulseProgress: n.pulseProgress,
          originalIndex: i
        });
      }

      // Check distance in 3D to establish connections
      const connections = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.baseX - n2.baseX;
          const dy = n1.baseY - n2.baseY;
          const dz = n1.baseZ - n2.baseZ;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 150) {
            connections.push({ i, j, dist });
          }
        }
      }

      // Draw connection lines and flowing data packets
      for (let k = 0; k < connections.length; k++) {
        const conn = connections[k];
        const p1 = projected[conn.i];
        const p2 = projected[conn.j];

        // Apply fading based on 3D distance and camera depth
        const distanceAlpha = (150 - conn.dist) / 150;
        const depthAlpha = Math.max(0.02, Math.min(0.22, ((fov - p1.z) / (fov * 1.5)) * distanceAlpha));

        // Draw connections
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = `rgba(0, 223, 137, ${depthAlpha})`; // Muted green connection paths
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // Draw flowing data packets (Cyan pulses travelling down lines)
        const progress = (p1.pulseProgress + k * 0.08) % 1.0;
        const packetX = p1.x + (p2.x - p1.x) * progress;
        const packetY = p1.y + (p2.y - p1.y) * progress;

        const packetAlpha = depthAlpha * 3.5 * Math.sin(progress * Math.PI);
        ctx.fillStyle = `rgba(0, 240, 255, ${packetAlpha})`; // High-contrast glowing cyan
        ctx.beginPath();
        ctx.arc(packetX, packetY, 1.8 * p1.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Sort nodes by depth for correct ordering (back to front)
      projected.sort((a, b) => b.z - a.z);

      // Render projected node circles and tech labels
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        // Skip offscreen elements
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) continue;

        const depthAlpha = Math.max(0.08, Math.min(0.9, (fov - p.z) / (fov * 1.2)));
        const size = Math.max(1.0, p.scale * p.size);

        // Draw node base
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.label ? `rgba(0, 223, 137, ${depthAlpha})` : `rgba(255, 255, 255, ${depthAlpha * 0.4})`;
        ctx.fill();

        // Labeled nodes get a glowing cyan core
        if (p.label) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${depthAlpha})`;
          ctx.fill();

          // Render minimal text label
          ctx.font = `600 ${Math.max(8, Math.floor(9 * p.scale))}px var(--font-heading)`;
          ctx.fillStyle = `rgba(255, 255, 255, ${depthAlpha * 0.85})`;
          ctx.fillText(p.label, p.x + size + 8, p.y + 3);
        }
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
