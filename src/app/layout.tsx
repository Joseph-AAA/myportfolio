import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import CursorParticles from "@/components/effects/CursorParticles";



export const metadata: Metadata = {
  title: "Joseph | Frontend & Full-Stack Developer",
  description:
    "Portfolio of Joseph, a Frontend and Full-Stack Developer building modern web applications with React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and Prisma.",

  verification: {
    google: "X1FyQbx9gZroO39u-Sxp_tufVmFoaTb7xscE6lf_Els",
  },

  openGraph: {
    title: "Joseph | Frontend & Full-Stack Developer",
    description:
      "Explore Joseph's portfolio, featuring modern web applications built with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
    url: "https://myportfolio-dun-kappa-70.vercel.app/",
    siteName: "Joseph Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Joseph | Frontend & Full-Stack Developer",
    description:
      "Frontend and Full-Stack Developer building modern web applications with React, Next.js, TypeScript, and Node.js.",
  },
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