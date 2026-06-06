import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Nivedhitha A | Full Stack Developer & DevOps Engineer",
  description:
    "Portfolio of Nivedhitha A — 7.5+ years building scalable web applications and cloud infrastructure.",
  authors: [{ name: "Nivedhitha A" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
