
"use client";

import Link from "next/link";
import { motion } from "motion/react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Joseph-AAA",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joseph-aaa-63885a426/",
  },
];

export default function Footer() {
  const currentYear = 2026;

  return (
   <footer className="relative overflow-hidden border-t border-border bg-background transition-colors duration-300">

      {/* Background Glow */}
     <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="container-shell relative px-6 py-12 sm:px-10 lg:px-0">

        {/* Main Footer Content */}
       <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-3">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="inline-block text-2xl font-bold">
              <span className="text-white">Joseph</span>
              <span className="text-cyan-400">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              Frontend Developer passionate about building
              modern, responsive, and user-friendly web applications.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
  Quick Links
</h3>

<nav className="flex flex-wrap gap-x-6 gap-y-3 md:flex-col md:gap-3">
  {navigation.map((item) => (
    <Link
      key={item.label}
      href={item.href}
    className="w-fit text-sm text-muted transition-all duration-300 hover:text-cyan-300 hover:[text-shadow:0_0_5px_rgba(34,211,238,1),0_0_12px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.7)]"
    >
      {item.label}
    </Link>
  ))}
</nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Connect With Me
            </h3>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-muted transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-muted">
            © {currentYear} Joseph. All rights reserved.
          </p>

          <Link
            href="#home"
            className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-400"
          >
            Back to top
            <span className="group flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-primary">
              ↑
            </span>
          </Link>

        </div>

      </div>
    </footer>
  );
}
