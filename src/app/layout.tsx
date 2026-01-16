import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhinav.dev'),
  title: {
    default: 'Abhinav | Backend Engineer',
    template: '%s | Abhinav.dev'
  },
  description: 'Backend Engineer specializing in scalable distributed systems and high-performance APIs.',
  keywords: ['Backend Engineer', 'Node.js', 'TypeScript', 'System Design', 'Distributed Systems', 'Cloud Architecture'],
  authors: [{ name: 'Abhinav' }],
  creator: 'Abhinav',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhinav.dev',
    siteName: 'Abhinav.dev',
    title: 'Abhinav | Backend Engineer',
    description: 'Building scalable systems and solving complex engineering problems.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhinav | Backend Engineer',
    description: 'Building scalable systems.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-[70px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
