import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.03, rotateY: 4, rotateX: -3 }}
    whileTap={{ scale: 0.94, rotateY: -6, rotateX: 6, rotate: -1 }}
    transition={{ type: "spring", stiffness: 350, damping: 18 }}
    style={{ transformStyle: "preserve-3d", perspective: 800 }}
  >
    {children}
  </motion.div>
);

export default TiltCard;
