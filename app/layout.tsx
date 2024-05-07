import localFont from "next/font/local";

import { Inter, Staatliches } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";

const inter = Inter({ subsets: ["latin"] });

const tuskerGrotesk = localFont({
  src: "../public/fonts/tuskerGrotesk.ttf",
  variable: "--tuskerGrotesk",
  display: "swap",
});

const mechsuit = localFont({
  src: "../public/fonts/Mechsuit.otf",
  variable: "--mechsuit",
  display: "swap",
});

const staatliches = Staatliches({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--staatliches",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${tuskerGrotesk.variable} ${mechsuit.variable} ${staatliches.variable}`}
      >
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}
