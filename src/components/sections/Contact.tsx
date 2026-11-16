
"use client";
import { useState, type SubmitEvent } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Send,

  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus(
      "The contact form is ready. Email delivery will be connected next."
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-5"
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Open to New{" "}
            <span className="text-gradient">Opportunities</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted">
           I{"'"}m open to discussing frontend and full-stack development opportunities, professional collaborations, and interesting projects. I{"'"}d be happy to connect with employers, recruiters, and fellow developers.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Let{"'"}s Build Something Great Together.
              </h3>

              <p className="mt-4 leading-8 text-muted">
                I{"'"}m eager to apply my technical skills, contribute to development teams, and take on new challenges while continuing to grow as a developer. Whether you{"'"}re looking for a developer to join your team or someone to collaborate with on a project, I{"'"}d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">

              {/* Email */}
            <a
                href="mailto:jj.joseph.aaa@gmail.com"
                aria-label="Send an email to jj.joseph.aaa@gmail.com"
                className="cursor-pointer glass-card group flex items-center gap-5 rounded-2xl border border-border p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.25),0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={23} />
                  </div>

                <div >
                  <p className="text-sm text-muted">Email</p>

                  <span
                    
                    className="mt-1 block font-medium text-foreground transition-colors hover:text-primary"
                  >
                    jj.joseph.aaa@gmail.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="glass-card group flex items-center gap-5 rounded-2xl border border-border p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.25),0_0_30px_rgba(34,211,238,0.15)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <MapPin size={23} />
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Location
                  </p>
                  <p className="mt-1 font-medium text-foreground">
                    Subang Jaya, Malaysia
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <Link
                href="https://github.com/Joseph-AAA"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex items-center gap-5 rounded-2xl border border-border p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.25),0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Image
                  src="/images/skills/github.png"
                  alt="GitHub"
                  width={35}
                  height={35}
                />
                  
                </div>

                <div className="flex-1">
                  <p className="text-sm text-muted">
                    GitHub
                  </p>
                  <p className="mt-1 font-medium text-foreground">
                    View my projects
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                />
              </Link>

            </div>

            {/* Availability */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>

              <p className="text-sm text-muted">
                Open to Frontend & Full-Stack Developer opportunities
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl border border-border p-6 shadow-sm sm:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle size={22} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Send Me a Message
                </h3>
                <p className="mt-1 text-sm text-muted">
                  I{"'"}d love to hear from you.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this regarding?"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                Send Message

                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {formStatus && (
                <p
                  role="status"
                  className="text-center text-sm text-primary"
                >
                  {formStatus}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
