import "./globals.css";

export const metadata = {
  title: "Sarvadnya Katode",
  description: "AI & Data Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}