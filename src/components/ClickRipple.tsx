import { motion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const ClickRipple = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== ripple.id)), 600);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="absolute rounded-full bg-primary/30 pointer-events-none"
          style={{ left: r.x, top: r.y, width: 10, height: 10, translate: "-50% -50%" }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 15, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default ClickRipple;
