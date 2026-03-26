import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarvadnya Katode | AI Engineer & Data Enthusiast",
  description:
    "Portfolio of Sarvadnya Katode — AI Engineer, Data Enthusiast, and ML Architect based in Mumbai. Building production-grade data pipelines, machine learning models, and intelligent systems.",
  keywords: ["AI Engineer", "Data Engineer", "Machine Learning", "Portfolio", "Python", "Next.js"],
  openGraph: {
    title: "Sarvadnya Katode | AI Engineer",
    description: "Building scalable AI systems and real-world data solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-bg-deep text-text-main`}>
        {children}
      </body>
    </html>
  );
}