import { useEffect, useRef } from 'react';

function createParticles(width, height) {
  const count = Math.max(20, Math.min(48, Math.round((width * height) / 24000)));

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    radius: Math.random() * 2.2 + 1.1,
  }));
}

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return undefined;
    }

    let animationFrame = 0;
    let particles = [];

    const setSize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth || window.innerWidth;
      const height = parent?.clientHeight || window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.6);

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      particles = createParticles(width, height);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20 || particle.x > width + 20) {
          particle.vx *= -1;
        }

        if (particle.y < -20 || particle.y > height + 20) {
          particle.vy *= -1;
        }
      });

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        for (let innerIndex = index + 1; innerIndex < particles.length; innerIndex += 1) {
          const sibling = particles[innerIndex];
          const distance = Math.hypot(particle.x - sibling.x, particle.y - sibling.y);

          if (distance < 140) {
            context.strokeStyle =
              distance < 80 ? 'rgba(34, 211, 238, 0.18)' : 'rgba(168, 85, 247, 0.1)';
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(sibling.x, sibling.y);
            context.stroke();
          }
        }

        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 4,
        );
        gradient.addColorStop(0, 'rgba(125, 211, 252, 0.95)');
        gradient.addColorStop(1, 'rgba(125, 211, 252, 0)');

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = 'rgba(196, 181, 253, 0.8)';
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    setSize();
    draw();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', setSize);

      return () => {
        window.cancelAnimationFrame(animationFrame);
        window.removeEventListener('resize', setSize);
      };
    }

    const resizeObserver = new ResizeObserver(() => setSize());
    resizeObserver.observe(canvas.parentElement || document.body);
    window.addEventListener('resize', setSize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
