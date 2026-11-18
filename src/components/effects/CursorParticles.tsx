
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: "cyan" | "purple";
};

export default function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const particleId = useRef(0);
  const lastSpawnTime = useRef(0);
  const colorIndex = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (
          event.pointerType !== "mouse" &&
          event.pointerType !== "touch" &&
          event.pointerType !== "pen"
        ) {
          return;
        }

      // Update cursor position
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });

      const now = performance.now();

      // Limit particle creation frequency
      if (now - lastSpawnTime.current < 35) return;

      lastSpawnTime.current = now;

      const newParticle: Particle = {
        id: particleId.current++,
        x: event.clientX,
        y: event.clientY,
        color: colorIndex.current++ % 2 === 0 ? "cyan" : "purple",
      };

      setParticles((current) => [
        ...current.slice(-19),
        newParticle,
      ]);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const removeParticle = (id: number) => {
    setParticles((current) =>
      current.filter((particle) => particle.id !== id)
    );
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {/* Particle trail */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0.9,
            scale: 0.6,
          }}
          animate={{
            opacity: 0,
            scale: 1.5,
            y: -24,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          onAnimationComplete={() => removeParticle(particle.id)}
          className="absolute block h-2 w-2 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor:
              particle.color === "cyan" ? "#22D3EE" : "#A78BFA",
            boxShadow:
              particle.color === "cyan"
                ? "0 0 8px 3px rgba(34, 211, 238, 0.55)"
                : "0 0 8px 3px rgba(167, 139, 250, 0.55)",
          }}
        />
      ))}

      {/* Glowing cursor circle */}
      <motion.div
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          left: cursor.x,
          top: cursor.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          backgroundColor: "#22D3EE",
          boxShadow:
            "0 0 8px 3px rgba(34,211,238,0.65), 0 0 18px 6px rgba(167,139,250,0.35)",
        }}
      />
    </div>
  );
}
