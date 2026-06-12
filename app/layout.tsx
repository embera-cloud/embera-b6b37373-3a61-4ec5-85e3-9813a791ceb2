```tsx
import type { Metadata } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: '--font-cinzel'
});

export const metadata: Metadata = {
  title: "Mystic Vault | A Roguelite Puzzle Adventure",
  description: "Delve into the Vault. Master the Combo. Survive the Dungeon. A new roguelite puzzle game for PC, iOS, Android, and Web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} bg-background font-sans text-gray-200 overflow-x-hidden`}>
        <div className="relative min-h-screen">
          <div className="absolute inset-0 -z-10 h-full w-full animated-aurora animate-aurora"></div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```