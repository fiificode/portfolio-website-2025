import type React from "react";
import type { Metadata } from "next";
import PageClient from "./pageClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franklin | Portfolio",
  description: "Portfolio of Franklin Mensah, Frontend Developer from Ghana",
  keywords: ["Franklin Mensah", "Frontend Developer", "Ghana"],
  openGraph: {
    title: "Franklin | Portfolio",
    description: "Portfolio of Franklin Mensah, Frontend Developer from Ghana",
    type: "website",
    url: "https://portfolio-website-2025-delta.vercel.app",
  },
  twitter: {
    title: "Franklin | Portfolio",
    description: "Portfolio of Franklin Mensah, Frontend Developer from Ghana",
    card: "summary_large_image",
    site: "@franklin_mensah",
    creator: "@franklin_mensah",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageClient>{children}</PageClient>;
}
