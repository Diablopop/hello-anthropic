import { motion } from 'framer-motion';

interface CTAProps {
  href: string;
  children: React.ReactNode;
  download?: string;
}

export default function CTA({ href, children, download }: CTAProps) {
  return (
    <motion.a
      href={href}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 border-2 border-terminal-green text-terminal-green
                 hover:bg-terminal-green hover:text-black transition-colors duration-200
                 font-terminal text-xl terminal-glow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
