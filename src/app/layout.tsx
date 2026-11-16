import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import CursorParticles from "@/components/effects/CursorParticles";

export const metadata: Metadata = {
  title: "Joseph | Frontend Developer",
  description:
    "Personal portfolio of Joseph, a Frontend Developer specializing in React, Next.js and TypeScript.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
      >
        {children}
        <CursorParticles />
      </ThemeProvider>
      </body>
    </html>
  );
}