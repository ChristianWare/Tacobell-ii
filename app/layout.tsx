import localFont from "next/font/local";

import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";

const inter = Inter({ subsets: ["latin"] });

const tuskerGrotesk = localFont({
  src: "../public/fonts/tuskerGrotesk.ttf",
  variable: "--tuskerGrotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${tuskerGrotesk.variable}`}>
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}
