import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CustomCursor({ isHovering }: { isHovering: boolean }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - (isHovering ? 40 : 8),
        y: mousePosition.y - (isHovering ? 40 : 8),
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    >
      <motion.div
        className="rounded-full bg-white flex items-center justify-center text-black font-medium text-sm"
        animate={{
          width: isHovering ? 60 : 16,
          height: isHovering ? 60 : 16,
        }}
        transition={{ type: 'spring', mass: 0.2, stiffness: 200, damping: 20 }}
      />
    </motion.div>
  );
}
