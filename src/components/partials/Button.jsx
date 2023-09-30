import { motion } from 'framer-motion';

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
  onClick,
}) {
  const handleClick = () => {
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
