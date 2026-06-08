import { useEffect, useRef } from 'react';

export function ThreeCanvas({ type }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

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

    const particleCount = 40;
    const nodes = [];
    let labelNames = [];
    let labeledNodes = [0, 10, 20, 30];
    
    // Proximity thresholds and color configurations
    let proximityThreshold = 140;
    let nodeColorStr = 'rgba(0, 223, 137, '; // Green
    let pulseColorStr = 'rgba(0, 240, 255, '; // Cyan

    if (type === 'neural') {
      labelNames = ['[AI Agent]', '[LLM Engine]', '[Vector DB]', '[Prompt Cache]'];
      proximityThreshold = 140;
      nodeColorStr = 'rgba(0, 223, 137, '; // Green
      pulseColorStr = 'rgba(0, 240, 255, '; // Cyan

      // Distribute in a spherical cloud
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 90 + Math.random() * 90;
        nodes.push({
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.sin(phi) * Math.sin(theta),
          z: r * Math.cos(phi),
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.4,
          driftType: 'spherical_boundary',
          rLimit: 180,
          size: labeledNodes.includes(i) ? 4.5 : 1.8,
          label: labeledNodes.includes(i) ? labelNames[labeledNodes.indexOf(i)] : '',
          pulseProgress: Math.random()
        });
      }
    } else if (type === 'torus') {
      labelNames = ['[SaaS API]', '[Next.js Client]', '[Database Sync]', '[Edge Cache]'];
      proximityThreshold = 150;
      nodeColorStr = 'rgba(0, 240, 255, '; // Cyan
      pulseColorStr = 'rgba(0, 223, 137, '; // Green

      // Distribute along a Torus Knot curve
      const p = 2;
      const q = 3;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const theta = angle * p;
        const r = 120 + Math.cos(q * theta / p) * 32;
        const tx = r * Math.cos(theta);
        const ty = r * Math.sin(theta);
        const tz = Math.sin(q * theta / p) * 32;

        nodes.push({
          x: tx,
          y: ty,
          z: tz,
          baseX: tx,
          baseY: ty,
          baseZ: tz,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          vz: (Math.random() - 0.5) * 0.35,
          driftType: 'base_offset',
          offsetLimit: 36,
          size: labeledNodes.includes(i) ? 4.5 : 1.8,
          label: labeledNodes.includes(i) ? labelNames[labeledNodes.indexOf(i)] : '',
          pulseProgress: Math.random()
        });
      }
    } else {
      // type === 'sphere'
      labelNames = ['[iOS Client]', '[Android Client]', '[SQLite Sync]', '[Push Service]'];
      proximityThreshold = 160;
      nodeColorStr = 'rgba(0, 223, 137, '; // Green
      pulseColorStr = 'rgba(0, 240, 255, '; // Cyan

      // Distribute on surface of sphere
      const r = 150;
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        nodes.push({
          theta,
          phi,
          angularSpeedTheta: (Math.random() - 0.5) * 0.006,
          angularSpeedPhi: (Math.random() - 0.5) * 0.006,
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.sin(phi) * Math.sin(theta),
          z: r * Math.cos(phi),
          driftType: 'sphere_surface',
          rVal: r,
          size: labeledNodes.includes(i) ? 4.5 : 1.8,
          label: labeledNodes.includes(i) ? labelNames[labeledNodes.indexOf(i)] : '',
          pulseProgress: Math.random()
        });
      }
    }

    let time = 0;
    let angleX = 0.2;
    let angleY = 0;
    const fov = 420;

    const animate = () => {
      time += 0.008;

      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      const targetAngleY = ((mouse.x / width) - 0.5) * 1.0;
      const targetAngleX = ((mouse.y / height) - 0.5) * 0.5;

      angleY += (targetAngleY - angleY) * 0.06;
      angleX += (targetAngleX - angleX) * 0.06;

      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.5;

      // Update positions
      for (let i = 0; i < particleCount; i++) {
        const n = nodes[i];
        if (n.driftType === 'spherical_boundary') {
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;

          const dist = Math.sqrt(n.x*n.x + n.y*n.y + n.z*n.z);
          if (dist > n.rLimit) {
            n.vx *= -1;
            n.vy *= -1;
            n.vz *= -1;
          }
        } else if (n.driftType === 'base_offset') {
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;

          const dx = n.x - n.baseX;
          const dy = n.y - n.baseY;
          const dz = n.z - n.baseZ;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
          if (dist > n.offsetLimit) {
            n.vx *= -1;
            n.vy *= -1;
            n.vz *= -1;
          }
        } else if (n.driftType === 'sphere_surface') {
          n.theta += n.angularSpeedTheta;
          n.phi += n.angularSpeedPhi;

          if (n.phi < 0.15 || n.phi > Math.PI - 0.15) {
            n.angularSpeedPhi *= -1;
          }

          n.x = n.rVal * Math.sin(n.phi) * Math.cos(n.theta);
          n.y = n.rVal * Math.sin(n.phi) * Math.sin(n.theta);
          n.z = n.rVal * Math.cos(n.phi);
        }

        // Pulse progress
        n.pulseProgress += 0.006;
        if (n.pulseProgress > 1) {
          n.pulseProgress = 0;
        }
      }

      // Project 3D positions to 2D
      const projected = [];
      for (let i = 0; i < particleCount; i++) {
        const n = nodes[i];

        // Yaw Y
        let x1 = n.x * Math.cos(angleY) - n.z * Math.sin(angleY);
        let z1 = n.x * Math.sin(angleY) + n.z * Math.cos(angleY);

        // Pitch X
        let y2 = n.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = n.y * Math.sin(angleX) + z1 * Math.cos(angleX);

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

      // Check distance in 3D for lines connections
      const connections = [];
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dz = n1.z - n2.z;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

          if (dist < proximityThreshold) {
            connections.push({ i, j, dist });
          }
        }
      }

      // Draw connection lines and pulses
      for (let k = 0; k < connections.length; k++) {
        const conn = connections[k];
        const p1 = projected[conn.i];
        const p2 = projected[conn.j];

        const distAlpha = (proximityThreshold - conn.dist) / proximityThreshold;
        const depthAlpha = Math.max(0.02, Math.min(0.22, ((fov - p1.z) / (fov * 1.5)) * distAlpha));

        ctx.lineWidth = 0.8;
        ctx.strokeStyle = `${nodeColorStr}${depthAlpha})`;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // Glowing cyan/green data pulses traveling along lines
        const progress = (p1.pulseProgress + k * 0.08) % 1.0;
        const packetX = p1.x + (p2.x - p1.x) * progress;
        const packetY = p1.y + (p2.y - p1.y) * progress;

        const packetAlpha = depthAlpha * 3.5 * Math.sin(progress * Math.PI);
        ctx.fillStyle = `${pulseColorStr}${packetAlpha})`;
        ctx.beginPath();
        ctx.arc(packetX, packetY, 1.8 * p1.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Painter's algorithm sort
      projected.sort((a, b) => b.z - a.z);

      // Render projected node circles and Space Grotesk labels
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) continue;

        const depthAlpha = Math.max(0.08, Math.min(0.9, (fov - p.z) / (fov * 1.2)));
        const size = Math.max(1.0, p.scale * p.size);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.label ? `${nodeColorStr}${depthAlpha})` : `rgba(255, 255, 255, ${depthAlpha * 0.4})`;
        ctx.fill();

        if (p.label) {
          // Inner core glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `${pulseColorStr}${depthAlpha})`;
          ctx.fill();

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
  }, [type]);

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

export default ThreeCanvas;
