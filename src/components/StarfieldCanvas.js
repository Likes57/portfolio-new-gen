import React, { useRef, useEffect } from 'react';

const StarfieldCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initStars();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function initStars() {
      stars = [];
      const area = window.innerWidth * window.innerHeight;
      let starCount = Math.floor(area / 6000); // зменшили густоту
      starCount = Math.min(starCount, 1200);   // обмеження по максимуму

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.8 + 0.6, // трохи більші для великих екранів
          speed: Math.random() * 0.5 + 0.1,
          color: getRandomStarColor(),
          trail: []
        });
      }
    }

    function getRandomStarColor() {
      const colors = [
        'rgba(255, 255, 255, 0.8)',
        'rgba(173, 216, 230, 0.8)',
        'rgba(255, 223, 186, 0.8)',
        'rgba(186, 218, 255, 0.8)'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function animateStars() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach(star => {
        star.trail.unshift({ x: star.x, y: star.y });
        if (star.trail.length > 5) star.trail.pop();

        star.y += star.speed;

        if (star.trail.length > 1) {
          ctx.beginPath();
          const gradient = ctx.createLinearGradient(
              star.trail[0].x, star.trail[0].y,
              star.trail[star.trail.length - 1].x, star.trail[star.trail.length - 1].y
          );
          const colorParts = star.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([.\d]+)\)/);
          if (colorParts) {
            gradient.addColorStop(0, star.color);
            gradient.addColorStop(1, `rgba(${colorParts[1]}, ${colorParts[2]}, ${colorParts[3]}, 0)`);
          } else {
            gradient.addColorStop(0, star.color);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          }

          ctx.strokeStyle = gradient;
          ctx.lineWidth = star.size / 2;
          ctx.moveTo(star.trail[0].x, star.trail[0].y);
          for (let i = 1; i < star.trail.length; i++) {
            ctx.lineTo(star.trail[i].x, star.trail[i].y);
          }
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();

        if (star.y > window.innerHeight) {
          star.y = 0;
          star.x = Math.random() * window.innerWidth;
          star.trail = [];
        }
      });

      animationFrameId = requestAnimationFrame(animateStars);
    }

    animateStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
      <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none'
          }}
      />
  );
};

export default StarfieldCanvas;
