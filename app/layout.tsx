import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ScrollObserver from "./components/ScrollObserver";
import LoadingScreen from "./components/LoadingScreen";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RiBian Coffee & Tea | Live Music Everyday ♫",
  description:
    "Experience premium hand-crafted coffee & tea with live music performances every evening. Cozy ambiance, artisan beverages, and unforgettable moments at RiBian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-white">
        <LoadingScreen />
        {children}
        <ScrollObserver />
      </body>
    </html>
  );
}
