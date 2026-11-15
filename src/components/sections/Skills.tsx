
"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/data/skills";


export default function Skills() {
  return (
    <section
      id="skills"
      className="relative pt-8 pb-16 sm:pt-10 sm:pb-24"
    >
     
      <div className="container-shell">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-medium tracking-widest text-primary">
            MY TECHNICAL EXPERTISE
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            Technologies and tools I use to build modern,
            responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
             className="glass-card rounded-2xl border border-border p-6
  transition-all duration-500
  hover:-translate-y-1
  hover:border-primary/50
  hover:shadow-[0_0_20px_rgba(34,211,238,0.25),0_0_45px_rgba(99,102,241,0.22)]"
            >
              <h3 className="mb-3 text-xl font-bold">
                {group.title}
              </h3>

              <p className="mb-6 text-sm leading-7 text-muted">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="cursor-default rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
