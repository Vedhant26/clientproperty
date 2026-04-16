import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Floating luminous particles — Apple-style subtle glow
    const particles = [];
    const numParticles = window.innerWidth > 768 ? 60 : 30;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.12,
        opacity: Math.random() * 0.35 + 0.05,
        pulseSpeed: Math.random() * 0.008 + 0.003,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Connection lines between nearby particles
    const maxDist = 140;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = width / 2;
    let targetY = height / 2;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetX - mouseX) * 0.03;
      mouseY += (targetY - mouseY) * 0.03;

      time += 1;

      // Draw ambient gradient orbs (very subtle)
      const orbGrad = ctx.createRadialGradient(
        width * 0.3, height * 0.4, 0,
        width * 0.3, height * 0.4, width * 0.5
      );
      orbGrad.addColorStop(0, 'rgba(201, 149, 43, 0.03)');
      orbGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = orbGrad;
      ctx.fillRect(0, 0, width, height);

      const orbGrad2 = ctx.createRadialGradient(
        width * 0.75, height * 0.7, 0,
        width * 0.75, height * 0.7, width * 0.4
      );
      orbGrad2.addColorStop(0, 'rgba(201, 149, 43, 0.02)');
      orbGrad2.addColorStop(1, 'transparent');
      ctx.fillStyle = orbGrad2;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p, i) => {
        // Gentle movement
        p.x += p.speedX;
        p.y += p.speedY;

        // Subtle mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.3;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Wrap around
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Pulsing opacity
        const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.5 + 0.5;
        const alpha = p.opacity * (0.5 + pulse * 0.5);

        // Draw particle with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${alpha})`;
        ctx.fill();

        // Glow effect around particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${alpha * 0.08})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < maxDist) {
            const lineAlpha = (1 - cdist / maxDist) * 0.06;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 168, 83, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      {/* Multi-layer vignette for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(201, 149, 43, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(201, 149, 43, 0.03) 0%, transparent 40%),
            linear-gradient(180deg, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.5) 50%, rgba(5,5,5,0.85) 100%)
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default HeroBackground;
