
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
            My technical toolkit spans frontend and backend development,
            including the technologies and tools I use to build responsive
            interfaces, develop application functionality, and integrate
            complete web solutions.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <div
              className="glass-card h-full rounded-2xl border border-border p-6
                          transition-[transform,translate,border-color,box-shadow]
                          duration-500 ease-in-out
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
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="cursor-default rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        </div>
      </div>
    </section>
  );
}
