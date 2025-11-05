import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grunt",
  description: "Grünt : Magazine et Nébuleuse culturelle, freestyles Hip Hop, Tapes d'artistes et producteur, Fournisseur de Lüv depuis 2011.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
