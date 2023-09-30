import { motion } from 'framer-motion';

export default function Text({
  msg
}) {
  return (
    <motion.section
      drag
      dragListener={true}
      whileDrag={{
        scale: 1.2,
        boxShadow: '0px 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderColor: '#646cff',
        cursor: 'grabbing'
      }}
      dragConstraints={{
        top: -100,
        left: -100,
        right: 100,
        bottom: 100,
      }}
      style={{
        borderRadius: '8px',
        border: '1px solid transparent',
        padding: '0.6em 1.2em',
        fontSize: '1em',
        fontWeight: 500,
        fontFamily: 'inherit',
        backgroundColor: '#1a1a1a',
        cursor: 'grab',
        transition: 'border-color 0.25s',
      }}
    >
      {msg ? msg : ''}
    </motion.section>
  );
}
