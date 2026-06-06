import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const springConfig = { damping: 25, stiffness: 280, mass: 0.6 };

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Outer ring lag effect using useSpring
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 769px)').matches);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      document.body.classList.remove('cursor-none');
      return;
    }

    document.body.classList.add('cursor-none');

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, select, textarea')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, select, textarea')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.classList.remove('cursor-none');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isDesktop, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
    </>
  );
}

export default CustomCursor;
