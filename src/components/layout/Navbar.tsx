
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileSidebar from "./MobileSidebar";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Detect the currently visible section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="container-shell flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="#home"
            onClick={() => setActiveSection("home")}
            className="text-2xl font-bold tracking-tight"
          >
            Joseph<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.substring(1);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() =>
                    setActiveSection(link.href.substring(1))
                  }
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-primary/20 bg-primary/10 text-primary"
                      : "border-transparent text-muted hover:border-primary/10 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
            >
              <Menu size={21} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
}
