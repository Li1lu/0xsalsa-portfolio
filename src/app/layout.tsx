import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "0xSalsa Portfolio",
  description: "AI Illustrator & Video Creator portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
