
"use client";

import { motion } from "motion/react";
import {milestones} from "@/data/career";

export default function Career() {
  return (
    <section
      id="career"
      className="relative overflow-hidden py-10"
    >
      <div className="container-shell">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-primary">
            MY CAREER PATH
          </p>

          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            My Development{" "}
            <span className="text-gradient">Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted">
            Every learning experience and project has contributed to my growth as a developer. Explore my journey from building web development fundamentals to developing full-stack applications and exploring modern technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">

          {/* Center Timeline Line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-primary via-purple-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">

            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.position === "left";

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                  }}
                  className="relative grid grid-cols-[40px_1fr] gap-5 md:grid-cols-[1fr_60px_1fr] md:gap-6"
                >

                  {/* Timeline Icon */}
                  <div className="relative z-10 flex justify-center md:col-start-2 md:row-start-1">
                    <div
                     className={`flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-background ${item.accent} shadow-[0_0_15px_rgba(34,211,238,0.2),0_0_30px_rgba(168,85,247,0.12)]`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`group min-w-0 ${
                      isLeft
                        ? "md:col-start-1 md:row-start-1 md:text-right"
                        : "md:col-start-3 md:row-start-1"
                    }`}
                  >
                    <div className={`glass-card relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-500
                          ${
                            item.accent === "text-purple-400"
                              ? "border-purple-400/25 shadow-[0_0_15px_rgba(168,85,247,0.12),0_0_35px_rgba(168,85,247,0.08)] hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3),0_0_55px_rgba(168,85,247,0.18)]"
                              : "border-cyan-400/25 shadow-[0_0_15px_rgba(34,211,238,0.12),0_0_35px_rgba(34,211,238,0.08)] hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.3),0_0_55px_rgba(34,211,238,0.18)]"
                          }
                          sm:p-7`}>

                      {/* Decorative Glow */}
                      <div
                        className={`pointer-events-none absolute -top-16 h-40 w-40 rounded-full opacity-25 blur-[65px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-70 ${
                                    isLeft ? "right-0" : "left-0"
                                  } ${item.background}`}
                      />

                      <div
                        className={`relative flex items-center gap-3 ${
                          isLeft
                            ? "md:flex-row-reverse"
                            : ""
                        }`}
                      >
                        <span
                          className={`text-sm font-bold ${item.accent}`}
                        >
                          {item.id}
                        </span>

                        <span className="h-px flex-1 bg-border" />

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${item.background} ${item.accent}`}
                        >
                          {item.subtitle}
                        </span>
                      </div>

                      <h3 className="relative mt-5 text-xl font-bold text-foreground sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="relative mt-4 text-sm leading-7 text-muted">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div
                        className={`relative mt-6 flex flex-wrap gap-2 ${
                          isLeft
                            ? "md:justify-end"
                            : ""
                        }`}
                      >
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
