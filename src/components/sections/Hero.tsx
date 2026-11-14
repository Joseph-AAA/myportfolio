
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import SkillConstellation from "../ui/SkillConstellation";
export default function Hero() {
  return (
    <section
      id="home"
      className="background-glow relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="container-shell grid items-center gap-14 py-5 md:grid-cols-2">

        {/* LEFT: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <p className="mb-5 font-medium tracking-widest text-primary">
             HELLO, I{"'"}M JOSEPH
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building Digital
            <br />
            Experiences with
            <br />
            <span className="text-gradient">
              Modern Technology.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
            Frontend Developer
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-muted md:mx-0">
            I build responsive and user-friendly web applications
            using React, Next.js, TypeScript and modern web technologies.
            I enjoy turning ideas into functional digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-slate-950 transition-transform hover:-translate-y-1"
            >
              View My Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          {/* <div className="mt-10 flex justify-center gap-5 md:justify-start">
            <Link
              href="https://github.com/Joseph-AAA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-primary"
            >
             <SiGithub size={24} />
            </Link>

            <Link
              href="#"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-primary"
            >
              <LinkedInIcon size={24} />
            </Link>
          </div> */}
        </motion.div>

        {/* RIGHT: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative w-full max-w-[490px]">

            {/* Glow */}
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />

            {/* Image Frame */}
            <div className="relative flex w-full items-center justify-center overflow-visible">
              {/* <Image
                src="/images/JosephA.png"
                alt="Joseph - Frontend Developer"
                width={500}
                height={600}
                priority
                className="aspect-[5/6] w-full object-cover object-top"
              /> */}
              <SkillConstellation />
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted md:block"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
