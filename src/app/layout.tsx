import type { Metadata } from "next";
import { Saira } from "next/font/google";

import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // আপনি যেসব ওজন ব্যবহার করবেন
});

export const metadata: Metadata = {
  title:
    "Learn with Arif Almas — Practical Web Development & Creative Learning Resources",
  description:
    "Discover practical web development tutorials and real-world coding tips from Arif Almas. Learn by doing and grow your development skills step-by-step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} antialiased`}>{children}</body>
    </html>
  );
}
