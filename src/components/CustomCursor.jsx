// src/components/CustomCursor.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{ x: position.x - 12, y: position.y - 12 }} // center cursor
      transition={{ type: "spring", stiffness: 500, damping: 30, bounce: 1 }}
    />
  );
};

export default CustomCursor;
