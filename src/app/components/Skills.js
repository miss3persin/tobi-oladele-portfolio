import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Skills = ({ icon, text, hoverEffect }) => {
  return (
    <motion.div
      className="w-56 h-12 xl:w-64 x:h-14 bg-customBlue flex items-center justify-center gap-3 xl:gap-1 cursor-default" // Custom blue background
      whileHover={{
        scale: hoverEffect.scale || 1,
        rotate: hoverEffect.rotate || 0,
        boxShadow: hoverEffect.boxShadow || 'none',
        backgroundColor: hoverEffect.backgroundColor || 'none', // Fallback to customBlue if no color is provided
      }}
      whileTap={{ scale: 0.95 }} // Universal tap effect
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 10,
      }}
    >
      {icon && <span className='w-9 h-6 xl:w-10 xl:h-7 overflow-hidden flex items-center justify-center'><Image src={icon} width={1000} height={1000} className='w-full h-full object-contain'/></span>} {/* Display custom icon */}
      <p className="font-medium text-xs xl:text-sm text-black">{text}</p> {/* Dynamic text, styled */}
    </motion.div>
  );
};
