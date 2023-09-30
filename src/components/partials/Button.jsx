import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.4
    }
  }
};

export default function Button({
  content
}) {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover='hover'
      style={{
        display: 'flex',
        color: 'white'
      }}
    >
      {content ? content : ''}
    </motion.button>
  );
}
