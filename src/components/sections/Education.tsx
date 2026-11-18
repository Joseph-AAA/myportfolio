
"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  Award,
  BookOpen,
} from "lucide-react";

const educationGroups = [
  {
    title: "Academic Qualifications",
    icon: GraduationCap,
    accent: "text-cyan-400",
    background: "bg-cyan-500/10",
    qualifications: [
      {
        title: "General Educational Development (GED)",
        description: "High School Equivalency",
      },
      {
        title: "LCCI Level 3 Diploma",
        description: "Professional Qualification",
      },
    ],
  },{
  title: "Professional Training & Certifications",
  icon: Award,
  accent: "text-purple-400",
  background: "bg-purple-500/10",
  qualifications: [
    {
      title: "JavaScript Programming & React Mastery Program",
      description: "Learnex",
    },
    {
      title: "Full-Stack Development Course",
      description: "MSquare Programming",
    },
  ],
},

    {
  title: "Self-Directed Learning & Development",
  icon: BookOpen,
  accent: "text-cyan-400",
  background: "bg-cyan-500/10",
  qualifications: [
    {
      title: "Continuous Technical Development",
      description:
        "Continuously expanding my technical skills through independent learning, hands-on projects, and guidance from experienced developers. Applying feedback and modern development practices to strengthen my coding and problem-solving abilities.",
    },
  ],
},
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-10"
    >
      <div className="container-shell">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-primary">
            MY EDUCATION
          </p>

          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Education &{" "}
            <span className="text-gradient">Qualifications</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted">
            My academic background and professional training
            have provided a foundation for continuous learning
            and development throughout my career.
          </p>
        </motion.div>

        {/* Education Cards */}
        
<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
  {educationGroups.map((group, index) => {
    const Icon = group.icon;

    return (
      <motion.div
        key={group.title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        className="h-full"
      >
        <article
          className={`glass-card group relative h-full overflow-hidden rounded-2xl border p-6
           transition-[transform,translate,border-color,box-shadow] duration-500 ease-in-out
hover:-translate-y-1
            sm:p-8
            ${
              group.accent === "text-purple-400"
                ? "border-purple-400/25 shadow-[0_0_15px_rgba(168,85,247,0.12),0_0_35px_rgba(168,85,247,0.08)] hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3),0_0_55px_rgba(168,85,247,0.18)]"
                : "border-cyan-400/25 shadow-[0_0_15px_rgba(34,211,238,0.12),0_0_35px_rgba(34,211,238,0.08)] hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.3),0_0_55px_rgba(34,211,238,0.18)]"
            }`}
        >
          {/* Decorative Glow */}
          <div
            className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-[65px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-70 ${group.background}`}
          />

          {/* Card Heading */}
          <div className="relative mb-7 flex items-center gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${group.background} ${group.accent}`}
            >
              <Icon size={25} />
            </div>

            <h3 className="text-lg font-bold text-foreground sm:text-xl">
              {group.title}
            </h3>
          </div>

          {/* Qualifications */}
          <div className="relative space-y-6">
            {group.qualifications.map((qualification) => (
              <div
                key={qualification.title}
                className="border-l-2 border-border pl-4 transition-colors duration-300 hover:border-primary"
              >
                <h4 className="font-semibold leading-6 text-foreground">
                  {qualification.title}
                </h4>

                <p className="mt-1 text-sm text-muted">
                  {qualification.description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </motion.div>
    );
  })}
</div>

      </div>
    </section>
  );
}
