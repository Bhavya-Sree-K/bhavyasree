import { motion } from "framer-motion";

const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => (
  <span className={`glitch-wrapper ${className}`}>
    <span className="glitch-text" data-text={text}>{text}</span>
  </span>
);

export default GlitchText;
