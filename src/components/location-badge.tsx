import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const LocationBadge: React.FC = () => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 1,
          repeat: 2,
          repeatType: "reverse",
        }}
      >
        <p className="h-4 w-4 text-primary">📍</p>
      </motion.div>
      <span>Calgary, Alberta, Canada</span>
    </motion.div>
  );
};
