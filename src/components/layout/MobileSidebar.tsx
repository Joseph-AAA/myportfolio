
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileSidebar({isOpen,onClose,}: MobileSidebarProps) {

  // Close sidebar when Escape is pressed
        useEffect(() => {
            if (!isOpen) return;

            const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
            };

            window.addEventListener("keydown", handleEscape);

            return () => {
            window.removeEventListener("keydown", handleEscape);
            };
        }, [isOpen, onClose]);

  // Prevent background scrolling while sidebar is open
        useEffect(() => {
            if (!isOpen) return;

            const previousOverflow = document.body.style.overflow;

            document.body.style.overflow = "hidden";

            return () => {
            document.body.style.overflow = previousOverflow;
            };
        }, [isOpen]);

        return (
            <AnimatePresence>
            {isOpen && (
                <>
                {/* Background Overlay */}
                <motion.button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={onClose}
                    className="fixed inset-0 z-[60] cursor-default bg-black/60 backdrop-blur-sm md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />

                {/* Sidebar */}
                <motion.aside
                    id="mobile-navigation"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    className="fixed right-0 top-0 z-[70] flex h-dvh w-[80%] max-w-sm flex-col border-l border-border bg-background p-6 shadow-2xl md:hidden"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    }}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between border-b border-border pb-6">
                    <Link
                        href="#home"
                        onClick={onClose}
                        className="text-2xl font-bold"
                    >
                        Joseph<span className="text-primary">.</span>
                    </Link>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close navigation menu"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                    >
                        <X size={21} />
                    </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mt-10 flex flex-col gap-3">
                    {navLinks.map((link, index) => (
                        <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        >
                        <Link
                            href={link.href}
                            onClick={onClose}
                            className="block rounded-lg px-4 py-3 text-lg font-medium text-muted transition-colors hover:bg-card hover:text-primary"
                        >
                            {link.label}
                        </Link>
                        </motion.div>
                    ))}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="mt-auto border-t border-border pt-6">
                    <p className="text-sm text-muted">
                        Thanks for visiting my portfolio.
                    </p>
                    </div>
                </motion.aside>
                </>
            )}
            </AnimatePresence>
        );
}
