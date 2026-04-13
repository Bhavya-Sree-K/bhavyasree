import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.03, rotateY: 3, rotateX: -2 }}
    whileTap={{ scale: 0.97, rotateY: -2, rotateX: 2 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{ transformStyle: "preserve-3d", perspective: 800 }}
  >
    {children}
  </motion.div>
);

export default TiltCard;
