import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "GalleryX | Showcase Your Creativity",
  description: "GalleryX is a modern web application for artists, photographers, and creators to display their portfolios and collections in an elegant, user-friendly interface.",
  keywords: "Gallery App, Portfolio Showcase, Digital Art, Photography, Creative Collections, Online Portfolio, Art Display",
  authors: [{
    name: "Justus Kimtai",
  }],
  icons: {
    icon: "/favicon.ico",
  }
};


export default function RootLayout({
  children, modal
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased container mx-auto p-4`}
      >
        {children}
        {modal}
      </body>
    </html>
  );
}
