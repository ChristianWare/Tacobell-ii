import type { Metadata } from "next";
import { Inter, Mulish, Staatliches, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Script from "next/script";
import PlausibleProvider from "next-plausible";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import FinalCTA2 from "../components/FinalCTA2/FinalCTA2";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
  adjustFontFallback: false,
});

const mulish = Mulish({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--mulish",
  display: "swap",
  adjustFontFallback: false,
});

const staatliches = Staatliches({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--staatliches",
  adjustFontFallback: false,
});

const fraunces = Fraunces({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--fraunces",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <PlausibleProvider domain='eliteretreatrentals.com' />
      </head>

      <body
        className={`${inter.variable} ${staatliches.variable} ${mulish.variable} ${fraunces.variable}`}
      >
        <ScrollIndicator />
        {children}
        <FinalCTA2 />
        <Footer />
      </body>
    </html>
  );
}
