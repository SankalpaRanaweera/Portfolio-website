import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 25, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 25, mass: 0.5 });
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const raf = useRef(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor], input, textarea, [role='button']");
      setHovering(!!interactive);
      const l = interactive?.getAttribute("data-cursor");
      setLabel(l ?? null);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf.current);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-lime" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:flex items-center justify-center"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 2.4 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-300 ${
            hovering ? "h-12 w-12 border-lime bg-lime/10" : "h-9 w-9 border-cream/40"
          }`}
        >
          {label && (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-lime">
              {label}
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
}
