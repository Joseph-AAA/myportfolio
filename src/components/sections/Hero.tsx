
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import SkillConstellation from "../ui/SkillConstellation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
export default function Hero() {
  const [showIndicator, setShowIndicator] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    setShowIndicator(window.scrollY < 50);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <section
      id="home"
      className="scroll-mt-20 background-glow relative flex min-h-screen items-center overflow-hidden pb-24 pt-24 lg:pb-20"
    >
      <div className="container-shell grid items-center gap-10 py-4 lg:grid-cols-2 lg:gap-14">

        {/* LEFT: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center lg:order-1 lg:text-left"
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
              Frontend & Full-Stack Developer
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-muted lg:mx-0">
                I build responsive, user-friendly web applications using React, Next.js, and TypeScript, with practical experience in backend development using Node.js, Express.js, and PostgreSQL. I enjoy turning ideas into functional applications by combining thoughtful user experiences with reliable application functionality.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-slate-950 transition-transform hover:-translate-y-1"
              >
                View My Projects
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-semibold
                          transition-[transform,translate,border-color,color]
                          duration-500 ease-in-out
                          hover:-translate-y-1
                          hover:border-primary
                          hover:text-primary"
              >
                Let{"'"}s Build Together
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-6 lg:mt-10 lg:justify-start">
             
                {/* GitHub */}
                <Link
                  href="https://github.com/Joseph-AAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="group inline-flex rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src="/images/skills/github.png"
                    alt="GitHub"
                    width={48}
                    height={48}
                     style={{
                      width: "auto",
                      height: "40px",
                    }}
                    className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.65)]"
                  />
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/joseph-aaa-63885a426/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="group inline-flex rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src="/images/skills/LinkeIn.png"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    style={{
                      width: "auto",
                      height: "37px",
                    }}
                    className="object-contain drop-shadow-[0_0_8px_rgba(10,102,194,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(10,102,194,0.75)] "
                  />
                </Link>
                <a
                  href="/resume/Joseph-Resume.pdf"
                  download="Joseph-Resume.pdf"
                  className="group hidden items-center gap-2.5
                            rounded-lg border border-cyan-400/40
                            bg-cyan-400/5 px-3 py-2
                            text-sm font-semibold text-cyan-300
                            transition-[transform,translate,border-color,background-color,box-shadow]
                            duration-300 ease-in-out
                            hover:-translate-y-1
                            hover:border-cyan-400
                            hover:bg-cyan-400/10
                            hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  <Download
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                  <span>Download Resume</span>
              </a>

            </div>
        </motion.div>

        {/* RIGHT: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative w-full max-w-[490px]">

            {/* Glow */}
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />

            {/* Image Frame */}
            <div className="relative flex w-full items-center justify-center overflow-visible">
             
              <SkillConstellation />
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
        {showIndicator && (
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 text-muted md:block"
              >
                <ArrowDown size={22} />
              </motion.div>
            )}
    </section>
  );
}
