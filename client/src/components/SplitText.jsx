import { motion } from 'framer-motion';

export default function SplitText({ as: Tag = 'span', className = '', delay = 0, text }) {
  return (
    <Tag className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <motion.span
        className="split-text"
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.035,
              delayChildren: delay,
            },
          },
        }}
      >
        {Array.from(text).map((character, index) => (
          <span key={`${character}-${index}`} className="split-char-wrap">
            <motion.span
              className="split-char"
              variants={{
                hidden: { y: '115%', opacity: 0 },
                visible: {
                  y: '0%',
                  opacity: 1,
                  transition: { duration: 0.55, ease: [0.18, 1, 0.32, 1] },
                },
              }}
            >
              {character === ' ' ? '\u00A0' : character}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
