
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
      "Built a strong foundation in web development through learning HTML, CSS, and JavaScript. Gained practical experience with responsive web design, programming fundamentals, and creating interactive user interfaces through hands-on projects.",
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
      "Expanded my frontend development skills through React and TypeScript. Gained practical experience with component-based architecture, state management, routing, and modern styling while developing interactive, responsive applications through hands-on projects..",
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
      "Applied my frontend and backend knowledge to develop My Code Academy, a student and course management platform. Built and integrated REST APIs, implemented authentication, connected the application to a PostgreSQL database, and integrated email functionality to support key application workflows.",
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
      "Continuing to expand my frontend expertise by learning Next.js, TypeScript, and modern application architecture. Currently applying these technologies to build a professional portfolio, deepen my understanding of modern web development practices, and develop more scalable applications.",
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
