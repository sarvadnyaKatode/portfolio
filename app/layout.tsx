import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarvadnya-katode-portfolio.vercel.app"),

  title: {
    default:
      "Sarvadnya Katode | Data Engineer | Spark | AWS | Big Data | Mumbai",
    template: "%s | Sarvadnya Katode",
  },

  description:
    "Sarvadnya Katode is a Data Engineer specializing in Apache Spark, AWS, ETL pipelines, and scalable data systems. CDAC DBDA graduate based in Mumbai.",

  keywords: [
    "Sarvadnya Katode",
    "Data Engineer Mumbai",
    "Spark Developer",
    "AWS Data Engineer",
    "Big Data Engineer",
    "CDAC DBDA Data Engineer",
    "ETL Developer",
  ],

  authors: [{ name: "Sarvadnya Katode" }],

  openGraph: {
    title: "Sarvadnya Katode | Data Engineer | Spark | AWS",
    description:
      "Building scalable data systems using Spark, AWS, and cloud-native architecture.",
    url: "https://sarvadnya-katode-portfolio.vercel.app",
    siteName: "Sarvadnya Katode Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sarvadnya Katode | Data Engineer",
    description:
      "Data Engineer specializing in Spark, AWS, ETL pipelines, and scalable cloud-native systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sarvadnya Katode",
              jobTitle: "Data Engineer",
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