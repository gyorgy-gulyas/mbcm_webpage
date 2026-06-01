import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MBCM — Mercedes-Benz Classic Magyarország",
  description:
    "A Mercedes-Benz Classic Magyarország hivatalos klubja. Klasszikus autók, közös utak, közös történet — 2003 óta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground grain">
        {children}
      </body>
    </html>
  );
}
