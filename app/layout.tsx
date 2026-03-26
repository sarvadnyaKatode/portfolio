import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sarvadnya-katode-portfolio.vercel.app"),

  title: {
    default:
      "Sarvadnya Katode | AI Engineer | Data Enthusiast",
    template: "%s | Sarvadnya Katode",
  },

  description:
    "Sarvadnya Katode is an AI Engineer and Data Enthusiast building scalable AI systems, predictive models, and real-world data solutions.",

  keywords: [
    "Sarvadnya Katode",
    "AI Engineer",
    "Data Enthusiast",
    "Machine Learning",
    "Data Scientist",
    "Portfolio",
  ],

  authors: [{ name: "Sarvadnya Katode" }],

  openGraph: {
    title: "Sarvadnya Katode | AI Engineer",
    description:
      "Building scalable AI systems and data solutions.",
    url: "https://sarvadnya-katode-portfolio.vercel.app",
    siteName: "Sarvadnya Katode Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sarvadnya Katode | AI Engineer",
    description:
      "AI Engineer building intelligent predictive modeling and scalable systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased selection:bg-secondary/30 selection:text-primary max-w-[100vw] overflow-x-hidden`}>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sarvadnya Katode",
              jobTitle: "AI Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.linkedin.com/in/sarvadnya-katode/",
                "https://github.com/sarvadnyaKatode/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}