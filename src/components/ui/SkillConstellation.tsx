
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";


const technologies = [
  {
    name: "React",
    x: 25,
    y: 20,
    color: "#61DAFB",
    proficiency: 85,
    image: "/images/skills/react.png",
  },
  {
    name: "Next.js",
    x: 75,
    y: 20,
    color: "#FFFFFF",
    proficiency: 75,
    image: "/images/skills/next.png",
  },
  {
    name: "TypeScript",
    x: 15,
    y: 50,
    color: "#3178C6",
    proficiency: 75,
    image: "/images/skills/typescript.png",
  },
  {
    name: "JavaScript",
    x: 85,
    y: 50,
    color: "#F7DF1E",
    proficiency: 85,
    image: "/images/skills/javascript.png",
  },
  {
    name: "Node.js",
    x: 25,
    y: 80,
    color: "#339933",
    proficiency: 70,
    image: "/images/skills/node.png",
  },
  {
    name: "Tailwind CSS",
    x: 75,
    y: 80,
    color: "#38BDF8",
    proficiency: 85,
    image: "/images/skills/tailwind.png",
  },
];

export default function SkillConstellation() {
  const [activeSkill, setActiveSkill] = useState<
    (typeof technologies)[number] | null
  >(null);

  return (
    <div className="relative mx-auto w-full max-w-[550px]">
      <div className="absolute inset-10 rounded-full bg-primary/10 blur-xl" />

      <svg
        viewBox="0 0 100 100"
        className="relative w-full overflow-visible"
        aria-label="Interactive technology skill constellation"
      >
        {/* Connecting lines */}
        {technologies.map((tech, index) => (
          <g key={`connection-${tech.name}`}>
            {/* Glowing base line */}
            <line
              x1="50"
              y1="50"
              x2={tech.x}
              y2={tech.y}
              stroke={tech.color}
              strokeWidth="1.5"
              strokeOpacity="0.18"
            />

            {/* Moving dashed line */}
            <motion.line
              x1="50"
              y1="50"
              x2={tech.x}
              y2={tech.y}
              stroke={tech.color}
              strokeWidth="1.4"
              strokeDasharray="2.5 3"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [0, -11],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3,
              }}
            />
          </g>
        ))}

        {/* Rotating dashed orbit */}
        <motion.circle
          cx="50"
          cy="50"
          r="19"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.55"
          strokeDasharray="2 2.5"
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "50px 50px" }}
        />

        {/* Second orbit */}
        <motion.circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="0.5"
          strokeOpacity="0.35"
          strokeDasharray="1 3"
          animate={{ rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "50px 50px" }}
        />

        {/* Central circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="15"
          fill="rgba(59,130,246,0.08)"
          stroke="#60A5FA"
          strokeWidth="0.7"
          animate={{
            r: [14.5, 15.5, 14.5],
            strokeOpacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

            <text
            x="50"
            y="52"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontWeight="bold"
            >
            JS
            </text>

        {/* Technology nodes */}
        {technologies.map((tech, index) => (
          <motion.g
            key={tech.name}
            style={{ cursor: "pointer" }}
            onHoverStart={() => setActiveSkill(tech)}
            onHoverEnd={() => setActiveSkill(null)}
            onTap={() =>
              setActiveSkill((current) =>
                current?.name === tech.name ? null : tech
              )
            }
            whileHover={{ scale: 1.12 }}
          >
            {/* Random glowing outer ring */}
            <motion.circle
              cx={tech.x}
              cy={tech.y}
              r="11"
              fill="none"
              stroke={tech.color}
              strokeWidth="0.8"
              animate={{
                r: [11, 13.5, 11],
                strokeOpacity: [0.15, 0.85, 0.15],
                strokeWidth: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.8,
              }}
            />

            {/* Main node circle */}
            <circle
              cx={tech.x}
              cy={tech.y}
              r="8.5"
              fill="rgba(30,41,59,0.8)"
              stroke={tech.color}
              strokeOpacity="0.65"
              strokeWidth="0.7"
            />

            {/* Node symbol */}
                <foreignObject
                    x={tech.x - 5}
                    y={tech.y - 5}
                    width="10"
                    height="10"
                    >
                    <div className="flex h-full w-full items-center justify-center">
                        <Image
                        src={tech.image}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                        />
                    </div>
                </foreignObject>
            </motion.g>
            ))}
      </svg>

      {/* Hover information box */}
        {activeSkill && (
                <motion.div
                        key={activeSkill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-none absolute z-30 min-w-36 rounded-xl border border-primary/40 bg-card/95 px-4 py-3 text-center shadow-[0_0_25px_rgba(59,130,246,0.25)] backdrop-blur-md"
                        style={{
                        left: `${activeSkill.x}%`,
                        top: `${activeSkill.y}%`,
                        transform: `translate(
                            ${activeSkill.x < 50 ? "12px" : "calc(-100% - 12px)"},
                            ${
                            activeSkill.y < 50
                                ? "8px"
                                : activeSkill.y > 50
                                ? "calc(-100% - 8px)"
                                : "-50%"
                            }
                        )`,
                        }}
                    >
                        <p className="font-bold text-foreground">
                        {activeSkill.name}
                        </p>

                        <p className="mt-1 whitespace-nowrap font-mono text-sm font-semibold text-primary">
                        {activeSkill.proficiency}% Proficiency
                        </p>
                </motion.div>
                )}
    </div>
  );
}
