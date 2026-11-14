import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Joseph | Frontend Developer",
  description:
    "Personal portfolio of Joseph, a Frontend Developer specializing in React, Next.js and TypeScript.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}