import React, { useRef, useEffect } from 'react';

const StarfieldCanvas = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let stars = [];
    
    // Налаштування повноекранного canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Перестворюємо зірки при зміні розміру
    };
    
    // Слухач для зміни розміру вікна
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Створення зірок
    function initStars() {
      stars = [];
      const starCount = Math.floor(canvas.width * canvas.height / 5000); // Кількість зірок залежно від розміру екрану
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          brightness: Math.random() * 0.5 + 0.5,
          color: getRandomStarColor(),
          trail: [] // Слід від зірки
        });
      }
    }
    
    // Отримання випадкового кольору для зірки
    function getRandomStarColor() {
      const colors = [
        'rgba(255, 255, 255, 0.8)', // Білі зірки
        'rgba(173, 216, 230, 0.8)', // Блакитні зірки
        'rgba(255, 223, 186, 0.8)', // Жовтуваті зірки
        'rgba(186, 218, 255, 0.8)'  // Голубуваті зірки
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Анімація зірок
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Оновлення та малювання кожної зірки
      stars.forEach(star => {
        // Додаємо поточну позицію до сліду (обмежуємо довжину)
        star.trail.unshift({ x: star.x, y: star.y });
        if (star.trail.length > 5) {
          star.trail.pop();
        }
        
        // Оновлюємо позицію зірки
        star.y += star.speed;
        
        // Малюємо слід (хвіст) зірки
        if (star.trail.length > 1) {
          ctx.beginPath();
          const gradient = ctx.createLinearGradient(
            star.trail[0].x, star.trail[0].y,
            star.trail[star.trail.length - 1].x, star.trail[star.trail.length - 1].y
          );
          
          // Градієнт від кольору зірки до прозорого
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
        
        // Малюємо саму зірку
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Перезапускаємо зірку зверху, якщо вона вийшла за нижню межу
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
          star.trail = []; // Очищаємо слід
        }
      });
      
      animationFrameId = requestAnimationFrame(animateStars);
    }
    
    // Запускаємо анімацію
    animateStars();
    
    // Прибирання
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
        pointerEvents: 'none' // Щоб canvas не перехоплював кліки
      }}
    />
  );
};

export default StarfieldCanvas;
