
import {
  Code2,
  Layers3,
  Rocket,
  Laptop,
} from "lucide-react";


export const milestones = [
  {
    id: "01",
    title: "Web Development Foundations",
    subtitle: "Building the fundamentals",
    description:
      "Built a strong foundation in web development by learning HTML, CSS, and JavaScript. Developed an understanding of responsive web design, core programming concepts, and interactive user interfaces through hands-on practice.",
    technologies: ["HTML", "CSS", "JavaScript", "Sass"],
    icon: Code2,
    accent: "text-cyan-400",
    background: "bg-cyan-500/10",
    position: "left",
  },
  {
    id: "02",
    title: "Frontend Development",
    subtitle: "Building modern interfaces",
    description:
      "Expanded my frontend development skills through React and TypeScript. Gained practical experience with component-based architecture, state management, routing, and modern styling while building interactive and responsive applications.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
    ],
    icon: Layers3,
    accent: "text-purple-400",
    background: "bg-purple-500/10",
    position: "right",
  },
  {
    id: "03",
    title: "Full-Stack Project Experience",
    subtitle: "Turning ideas into applications",
    description:
      "Applied my frontend and backend knowledge to develop My Code Academy, a student and course management platform. Implemented authentication, REST APIs, database integration, and email functionality using modern web technologies.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    icon: Rocket,
    accent: "text-cyan-400",
    background: "bg-cyan-500/10",
    position: "left",
  },
  {
    id: "04",
    title: "Advancing with Next.js",
    subtitle: "Exploring modern web development",
    description:
      "Continuing to expand my frontend expertise by exploring Next.js, TypeScript, and modern application architecture. Currently applying these technologies to build a professional portfolio and strengthen my ability to develop scalable web applications.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
    ],
    icon: Laptop,
    accent: "text-purple-400",
    background: "bg-purple-500/10",
    position: "right",
  },
];
