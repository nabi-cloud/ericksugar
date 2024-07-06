import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: {
    default: "Erick & Sugar",
    template: "%s | Erick & Sugar",
  }, 
  description: "We invite you to our special day on September 7, 2024",
  metadataBase: new URL('https://ericksugar.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
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