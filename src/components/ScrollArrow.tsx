import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollArrow() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className="flex justify-center pt-8 pb-3">
      {inView && (
        <motion.img
          src="/assets/arrow-down-straight.svg"
          alt="Scroll down"
          className="h-8 w-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
}
