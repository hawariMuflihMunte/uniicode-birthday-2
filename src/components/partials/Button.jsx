import { motion } from 'framer-motion';
import { useState } from 'react';

const buttonVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.4
    }
  },
  clicked: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

export default function Button({
  content,
  parentRef,
  onClick,
}) {
  const handleClick = () => {
    // Hide or remove the parent component
    parentRef.current.style = 'none';
    // OR
    parentRef.current.remove();

    onClick();
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover='hover'
      style={{
        display: 'flex',
        color: 'white'
      }}
      onClick={handleClick}
    >
      {content ? content : ''}
    </motion.button>
  );
}
