'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onMouseEnterInteractive = () => {
      ring.classList.add('scale-150', 'border-brand');
      dot.classList.add('opacity-0');
    };
    const onMouseLeaveInteractive = () => {
      ring.classList.remove('scale-150', 'border-brand');
      dot.classList.remove('opacity-0');
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animFrame = requestAnimationFrame(animate);

    const interactiveEls = document.querySelectorAll('a, button, input, textarea, select, [data-cursor-hover]');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrame);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-brand pointer-events-none transition-opacity duration-200 hidden md:block"
        aria-hidden="true"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-brand/60 pointer-events-none transition-transform duration-200 hidden md:block"
        aria-hidden="true"
      />
    </>
  );
}
