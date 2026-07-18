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
    "Portfolio of Nivedhitha A — Full Stack Developer & DevOps Engineer with 6+ years building enterprise web apps and 2+ years of deployment on Linux and AWS.",
  authors: [{ name: "Nivedhitha A" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
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
