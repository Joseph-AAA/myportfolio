import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import CursorParticles from "@/components/effects/CursorParticles";

export const metadata: Metadata = {
  title: "Joseph | Frontend & Full-Stack Developer",
  description:
    "Portfolio of Joseph, a Frontend and Full-Stack Developer building modern web applications with React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and Prisma.",
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