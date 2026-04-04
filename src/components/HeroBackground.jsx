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
    
    // Scale for high DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Parallax target
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX - width / 2) * 0.05;
      targetY = (e.clientY - height / 2) * 0.05;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Building definitions
    const buildings = [];
    const numBuildings = window.innerWidth > 768 ? 40 : 20;

    for (let i = 0; i < numBuildings; i++) {
      buildings.push({
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: Math.random() * 60 + 20,
        height: Math.random() * 200 + 100,
        speedY: Math.random() * 0.2 + 0.05,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    // Isometric projection helpers
    const isoX = (x, y) => x - y;
    const isoY = (x, y) => (x + y) / 2;

    const drawBuilding = (b, offset) => {
      // Base coordinates
      const bx = b.x + offset.x;
      const by = b.y + offset.y;
      
      const p1x = isoX(bx, by);
      const p1y = isoY(bx, by);
      
      const p2x = isoX(bx + b.width, by);
      const p2y = isoY(bx + b.width, by);
      
      const p3x = isoX(bx + b.width, by + b.width);
      const p3y = isoY(bx + b.width, by + b.width);
      
      const p4x = isoX(bx, by + b.width);
      const p4y = isoY(bx, by + b.width);
      
      // Top coordinates
      const t1y = p1y - b.height;
      const t2y = p2y - b.height;
      const t3y = p3y - b.height;
      const t4y = p4y - b.height;

      ctx.strokeStyle = `rgba(212, 168, 83, ${b.opacity})`;
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      
      // Top face
      ctx.moveTo(p1x, t1y);
      ctx.lineTo(p2x, t2y);
      ctx.lineTo(p3x, t3y);
      ctx.lineTo(p4x, t4y);
      ctx.closePath();
      
      // Left face
      ctx.moveTo(p1x, t1y);
      ctx.lineTo(p4x, t4y);
      ctx.lineTo(p4x, p4y);
      ctx.lineTo(p1x, p1y);
      ctx.closePath();

      // Right face
      ctx.moveTo(p4x, t4y);
      ctx.lineTo(p3x, t3y);
      ctx.lineTo(p3x, p3y);
      ctx.lineTo(p4x, p4y);
      ctx.closePath();
      
      ctx.stroke();

      // Optional: Add some horizontal lines to simulate floors for taller buildings
      if (b.height > 150 && b.opacity > 0.15) {
          const floors = Math.floor(b.height / 20);
          for(let i=1; i<floors; i++) {
              const floorY = p4y - (i * 20);
              const flLeftY = p1y - (i * 20);
              const flRightY = p3y - (i * 20);
              
              ctx.beginPath();
              // Left face floor line
              ctx.moveTo(p1x, flLeftY);
              ctx.lineTo(p4x, floorY);
              // Right face floor line
              ctx.lineTo(p3x, flRightY);
              ctx.stroke();
          }
      }
    };

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth parallax easing
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      
      time += 0.2; // Slow elegant pan over time
      
      const offset = { x: mouseX + time, y: mouseY + time };

      // Sort buildings back to front for crude depth (isometric Y roughly is x+y)
      buildings.sort((a, b) => (a.x + a.y) - (b.x + b.y));

      buildings.forEach((b) => {
        // Move buildings slightly
        b.y -= b.speedY;
        b.x -= b.speedY; // move diagonally 
        
        // Wrap around gracefully
        if (b.y < -height || b.x < -width) {
          b.y = height + Math.random() * 200;
          b.x = width + Math.random() * 200;
        }

        drawBuilding(b, offset);
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
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, opacity: 0.7 }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          background: 'radial-gradient(ellipse at bottom right, rgba(212, 168, 83, 0.05), transparent 60%)',
        }}
      />
      {/* Dark vignette overlay for text legibility */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.8) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default HeroBackground;
