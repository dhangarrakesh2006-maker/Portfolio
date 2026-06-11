import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTopButton({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          className="scroll-top-button"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
