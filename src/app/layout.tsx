import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Rich Earth | Sustainable Living & Green Technology",
  description: "High-authority insights on sustainable living, ecological agriculture, green tech, and building a richer, healthier earth for future generations.",
  keywords: ["sustainability", "green tech", "organic farming", "eco-friendly", "rich earth"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AdSense verification script placeholder */}
        <meta name="google-adsense-account" content="ca-pub-xxxxxxxxxxxxxxxx" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
