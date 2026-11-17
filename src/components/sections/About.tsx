"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend & Full-Stack Development",
    description:
      "Building responsive, user-friendly web applications and applying frontend and backend technologies to develop functional solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Actively improving my technical skills, embracing constructive feedback, and learning modern development practices to grow as a developer.",
  },
  {
    icon: Rocket,
    title: "Teamwork & Collaboration",
    description:
      "Working collaboratively, taking responsibility for assigned tasks, sharing ideas, and learning from experienced developers to achieve shared goals.",
  },
];
export default function About() {
  return (
    <section id="about" className="relative pt-8 pb-16 sm:pt-10 sm:pb-24">
      <div className="container-shell">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-medium tracking-widest text-primary">
            GET TO KNOW ME
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-20">
          {/* Sticky portrait */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-28 md:self-start"
          >
           <div className="mx-auto w-full max-w-md">
                <Image
                  src="/images/JosephAAAAA.png"
                  alt="Joseph - Frontend Developer"
                  width={500}
                  height={730}
              className="relative block aspect-square w-full rounded-3xl
                        object-cover object-top
                        transition-all duration-500
                        hover:filter-[drop-shadow(0_0_12px_rgba(34,211,238,0.5))_drop-shadow(0_0_24px_rgba(99,102,241,0.4)]"
                />
            </div>
          </motion.div>

          {/* About content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="mb-5 text-center text-2xl font-bold md:text-left">
                     My Journey in{" "}
                 <span className="text-gradient">Web Development</span>
              </h3>

             <div className="space-y-4 text-center leading-8 text-muted md:text-left">
                <p>
                  Hello! I&apos;m Joseph, a developer focused on building modern
                  web applications, with a strong foundation in frontend
                  development and practical experience in full-stack development.
                </p>

                <p>
                  I work with React, Next.js, TypeScript, and Tailwind CSS to
                  create responsive, user-friendly interfaces. My experience
                  also extends to backend development, where I&apos;ve worked
                  with Node.js, Express.js, Prisma, and PostgreSQL to build APIs,
                  integrate databases, and implement application functionality.
                </p>

                <p>
                  Through hands-on projects, I&apos;ve gained practical
                  experience developing complete applications, integrating
                  frontend and backend systems, implementing authentication,
                  and working with database-driven features.
                </p>

                <p>
                  As an aspiring developer, I value continuous learning,
                  constructive feedback, and teamwork. I&apos;m eager to learn
                  from experienced developers, contribute to shared goals,
                  take ownership of my responsibilities, and continuously
                  improve my technical skills. I believe good communication,
                  mutual respect, and a willingness to learn are essential
                to becoming a valuable team member.
              </p>
            </div>
            </motion.div>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className="glass-card flex gap-5 rounded-2xl p-5 
                              transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.25),0_0_30px_rgba(34,211,238,0.15)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">
                        {item.title}
                      </h4>

                      <p className="text-sm leading-7 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}