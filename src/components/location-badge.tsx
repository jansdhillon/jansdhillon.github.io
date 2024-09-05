import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export const LocationBadge = () => {
  return (
    <Badge className="space-x-2 " variant={"secondary"}>
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 1,
        }}
      >
        <p>📍</p>
      </motion.div>
      <p>Calgary, Alberta, Canada</p>
    </Badge>
  );
};
