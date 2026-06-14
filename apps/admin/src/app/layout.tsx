import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import QueryProvider from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOOPSY Admin",
  description: "CEO Command Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" suppressHydrationWarning
   className={`${geistSans.variable} ${geistMono.variable}`}
   >

     <body
  suppressHydrationWarning
  className="bg-gray-50"
>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}