
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
  const [isTouching, setIsTouching] = useState(false);
  const [isMouseActive, setIsMouseActive] = useState(false);

  const particleId = useRef(0);
  const lastSpawnTime = useRef(0);
  const colorIndex = useRef(0);

  useEffect(() => {
    // Generate particles
    const spawnParticle = (x: number, y: number) => {
      const now = performance.now();

      if (now - lastSpawnTime.current < 35) return;

      lastSpawnTime.current = now;

      const newParticle: Particle = {
        id: particleId.current++,
        x,
        y,
        color: colorIndex.current++ % 2 === 0 ? "cyan" : "purple",
      };

      setParticles((current) => [...current.slice(-19), newParticle]);
    };

    // Desktop mouse tracking
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      setIsMouseActive(true);

      setCursor({
        x: event.clientX,
        y: event.clientY,
      });

      spawnParticle(event.clientX, event.clientY);
    };

    // Mobile touch start
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      if (!touch) return;

      lastSpawnTime.current = 0;
      setIsTouching(true);

      setCursor({
        x: touch.clientX,
        y: touch.clientY,
      });

      spawnParticle(touch.clientX, touch.clientY);
    };

    // Mobile touch movement
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;

      setCursor({
        x: touch.clientX,
        y: touch.clientY,
      });

      spawnParticle(touch.clientX, touch.clientY);
    };

    // Hide touch glow when the finger is lifted
    const handleTouchEnd = (event: TouchEvent) => {
      if (event.touches.length === 0) {
        setIsTouching(false);
      }
    };

    // Register event listeners
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
      capture: true,
    });

    document.addEventListener("touchmove", handleTouchMove, {
      passive: true,
      capture: true,
    });

    document.addEventListener("touchend", handleTouchEnd, {
      passive: true,
      capture: true,
    });

    // Cleanup event listeners
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      document.removeEventListener("touchstart", handleTouchStart, true);
      document.removeEventListener("touchmove", handleTouchMove, true);
      document.removeEventListener("touchend", handleTouchEnd, true);
    };
  }, []);

  // Remove completed particles
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
          initial={{ opacity: 0.9, scale: 0.6 }}
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

      {/* Cursor and touch glow */}
      <motion.div
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          left: cursor.x,
          top: cursor.y,
          opacity: isTouching || isMouseActive ? 1 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0.08,
          ease: "linear",
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
