"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Creating responsive, accessible, and engaging web applications using modern frontend technologies.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Constantly expanding my technical knowledge, refining my skills, and staying up to date with modern web development practices.",
  },
  {
    icon: Rocket,
    title: "Project Driven",
    description:
      "Turning ideas into functional applications, applying technical knowledge, and solving real-world development challenges through hands-on projects.",
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
                  src="/images/JosephAAAA.png"
                  alt="Joseph - Frontend Developer"
                  width={500}
                  height={730}
                className="relative block aspect-square w-full rounded-3xl
                object-cover object-top
                transition-all duration-500
                hover:[filter:drop-shadow(0_0_12px_rgba(34,211,238,0.5))_drop-shadow(0_0_24px_rgba(99,102,241,0.4))]"
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
                  Hello! I&apos;m Joseph, a frontend developer passionate about building responsive, user-friendly, and engaging web applications.
                </p>

                <p>
                  I specialize in modern frontend technologies, including React, Next.js, TypeScript, JavaScript, and Tailwind CSS. Through hands-on projects, I{"'"}ve also gained experience with backend technologies such as Node.js, Express, Prisma, and PostgreSQL.
                </p>

                <p>
                  I enjoy solving problems, learning new technologies, and turning ideas into practical digital solutions. My goal is to create meaningful user experiences while continuously growing as a developer and expanding my skills across frontend and full-stack development.
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