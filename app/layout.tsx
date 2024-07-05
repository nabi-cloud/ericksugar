import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erick & Sugar",
  description: "We invite you to our special day on September 7, 2024",
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
