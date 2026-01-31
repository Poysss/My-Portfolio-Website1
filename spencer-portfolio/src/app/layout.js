import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spencer Z. Nacario | Full-Stack Developer",
  description: "Portfolio of Spencer Z. Nacario - Full-Stack Developer specializing in React, Next.js, and Django",
  icons: {
    icon: [
      { url: '/logo-spencer.png' },
      { url: '/logo-spencer.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-spencer.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo-spencer.png',
    apple: '/logo-spencer.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        {children}
      </body>
    </html>
  );
}