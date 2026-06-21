import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return undefined;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return undefined;
    }

    document.body.classList.add('has-custom-cursor');

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let frameId = 0;

    const render = () => {
      ringX += (pointerX - ringX) * 0.16;
      ringY += (pointerY - ringY) * 0.16;

      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      frameId = window.requestAnimationFrame(render);
    };

    const updateVariant = (event) => {
      const interactiveTarget = event.target.closest(
        'a, button, .glass-card, .project-card, .text-link, .nav-link, [data-cursor="highlight"]',
      );
      const textInputTarget = event.target.closest('input, textarea');

      ring.classList.toggle('is-active', Boolean(interactiveTarget));
      ring.classList.toggle('is-text', Boolean(textInputTarget));
    };

    const handleMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
      updateVariant(event);
    };

    const handleDown = () => {
      dot.classList.add('is-pressed');
      ring.classList.add('is-pressed');
    };

    const handleUp = () => {
      dot.classList.remove('is-pressed');
      ring.classList.remove('is-pressed');
    };

    const handleLeave = () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    };

    const handleEnter = () => {
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
    };

    frameId = window.requestAnimationFrame(render);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', updateVariant);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    document.documentElement.addEventListener('mouseenter', handleEnter);

    return () => {
      window.cancelAnimationFrame(frameId);
      document.body.classList.remove('has-custom-cursor');
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', updateVariant);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.documentElement.removeEventListener('mouseenter', handleEnter);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
