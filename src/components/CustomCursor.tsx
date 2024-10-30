import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOuter = cursorOuterRef.current;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
      gsap.to(cursorOuter, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed w-3 h-3 bg-indigo-500 rounded-full pointer-events-none z-50 mix-blend-difference" />
      <div ref={cursorOuterRef} className="fixed w-8 h-8 border-2 border-indigo-300 rounded-full pointer-events-none z-50 mix-blend-difference" />
    </>
  );
};

export default CustomCursor;