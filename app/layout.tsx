import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hpmarket.com'), // Replace with actual domain when known
  title: "Premium Commercial Spaces & Wholesale Shops in Central Delhi | HP Market",
  description:
    "HP Market offers premium commercial spaces, wholesale shops, and retail infrastructure with modern amenities at 1/21 Asaf Ali Road, New Delhi. A landmark commercial destination in Central Delhi.",
  keywords: ["Commercial space Central Delhi", "Wholesale shops New Delhi", "Premium office space Asaf Ali Road", "HP Market New Delhi"],
  authors: [{ name: "SAB Group" }],
  openGraph: {
    title: "Premium Commercial Spaces in Central Delhi | HP Market",
    description: "Modern commercial infrastructure and wholesale shops at Asaf Ali Road, New Delhi.",
    url: "https://hpmarket.com",
    siteName: "HP Market by SAB Group",
    images: [
      {
        url: "/images/hero/sabmarket-building.jpg",
        width: 1200,
        height: 630,
        alt: "HP Market Central Delhi Building Exterior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HP Market | Commercial Spaces in Central Delhi",
    description: "Modern commercial infrastructure and wholesale shops at Asaf Ali Road, New Delhi.",
    images: ["/images/hero/sabmarket-building.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}