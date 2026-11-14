
"use client";

import { useCallback, useState } from "react";
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

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="container-shell flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-bold tracking-tight"
          >
            Joseph<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
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
