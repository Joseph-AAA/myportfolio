"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "motion/react";
import { Copy, Check, ShieldCheck } from "lucide-react";
export default function Projects() {
  const [showAdminDemo, setShowAdminDemo] = useState(false);
  const [copiedField, setCopiedField] = useState("");

  const demoCredentials = {
    email: "testadmin@gmail.com",
    password: "testAdmin@19",
  };

  const copyCredential = async (
    value: string,
    field: string
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);

      window.setTimeout(() => {
        setCopiedField("");
      }, 2000);
    } catch (error) {
      console.error("Unable to copy credential:", error);
    }
  };

  return (
   <section
  id="projects"
  className="relative overflow-hidden py-5"
>
  <div className="container-shell">

        {/* Heading */}
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                My Portfolio
              </span>

              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Featured <span className="text-gradient">Projects</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                 A selection of projects demonstrating my practical experience in frontend and full-stack development, problem-solving, and building functional web applications using modern technologies.
              </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

         {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
            ease: "easeOut",
          }}
          whileHover={{ y: -8 }}
          className="group relative isolate rounded-2xl p-[1px] transition-all duration-500"
          style={
            {
              "--accent": project.accent,
            } as React.CSSProperties
          }
        >
              {/* Animated Border */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}, transparent 45%, ${project.accent})`,
                }}
              />

              {/* Card */}
           <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-lg">
                {/* Corner Glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 z-10 h-40 w-40 rounded-full opacity-0 blur-[65px] transition-opacity duration-500 group-hover:opacity-60"
                  style={{ backgroundColor: project.accent }}
                />

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#191923]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#101018]/60 to-transparent" />

                  {/* Category */}
                 <span
                    className="absolute left-4 top-4 rounded-full border px-3 py-1.5
                      text-xs font-bold tracking-wide backdrop-blur-md shadow-sm"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}CC`,
                      backgroundColor: "#111827",
                      boxShadow: `0 0 12px ${project.accent}35`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-6">

                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3
                      className="text-xl font-bold transition-colors duration-300"
                      style={{ color: project.accent }}
                    >
                      {project.title}
                    </h3>

                    <span className="text-sm text-gray-500">
                      0{project.id}
                    </span>
                  </div>

                  <p className="mb-6 min-h-[72px] text-sm leading-6 text-muted">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                       className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground transition-all duration-300 group-hover:border-primary/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
             
<div className="relative mt-auto flex flex-wrap gap-3">

  {project.liveUrl && (
    <Link
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition-all duration-300 hover:brightness-125"
      style={{
        color: project.accent,
        borderColor: `${project.accent}55`,
        backgroundColor: `${project.accent}12`,
      }}
    >
      Live Demo <span>↗</span>
    </Link>
  )}

  {project.githubUrl && (
    <Link
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
    >
      GitHub ↗
    </Link>
  )}

  {project.title === "My Code Academy" && (
    <button
      type="button"
      onClick={() => setShowAdminDemo((prev) => !prev)}
      aria-expanded={showAdminDemo}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/20"
    >
      <ShieldCheck size={17} />
      Admin Demo
    </button>
  )}

  {/* Admin Demo Popover */}
  {project.title === "My Code Academy" && showAdminDemo && (
    <div className="absolute bottom-full right-0 z-30 mb-3 w-full max-w-[320px] rounded-xl border border-cyan-400/30 bg-card p-5 shadow-xl shadow-cyan-500/10">

      <div className="mb-3 flex items-center gap-2">
        <ShieldCheck size={19} className="text-cyan-400" />

        <h4 className="font-semibold text-foreground">
          Admin Demo Access
        </h4>
      </div>

      <p className="mb-4 text-xs leading-5 text-muted">
        Use these credentials to explore the My Code Academy
        admin dashboard.
      </p>

      {/* Email */}
      <div className="mb-3">
        <label className="mb-1 block text-xs font-medium text-muted">
          Demo Email
        </label>

        <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-2.5">
          <span className="min-w-0 flex-1 truncate text-xs text-foreground">
            {demoCredentials.email}
          </span>

          <button
            type="button"
            onClick={() =>
              copyCredential(demoCredentials.email, "email")
            }
            aria-label="Copy demo email"
            className="shrink-0 text-muted transition-colors hover:text-cyan-400"
          >
            {copiedField === "email" ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="mb-1 block text-xs font-medium text-muted">
          Demo Password
        </label>

        <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-2.5">
          <span className="min-w-0 flex-1 truncate text-xs text-foreground">
            {demoCredentials.password}
          </span>

          <button
            type="button"
            onClick={() =>
              copyCredential(demoCredentials.password, "password")
            }
            aria-label="Copy demo password"
            className="shrink-0 text-muted transition-colors hover:text-cyan-400"
          >
            {copiedField === "password" ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      </div>

      <p className="text-[11px] leading-5 text-muted">
        Demo environment. Changes may be reset periodically.
      </p>

      <button
        type="button"
        onClick={() => setShowAdminDemo(false)}
        className="mt-3 w-full rounded-lg border border-red-400/20 bg-red-400/10 py-2 text-xs font-medium text-red-400 transition-all duration-300 hover:border-red-400/40 hover:bg-red-400/20 hover:text-red-300"
      >
        Close
      </button>

    </div>
  )}

</div>
                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}