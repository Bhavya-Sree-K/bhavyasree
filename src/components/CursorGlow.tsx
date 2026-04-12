import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
      style={{
        transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />
    </div>
  );
};

export default CursorGlow;
