import "@/styles/globals.css";

import { Poppins, Space_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
const sansFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: "400",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "CS 321 Applications Development and Emerging Technologies",
  description:
    "This course provides an overview of the technologies, methodologies, and principles involved in developing applications using emerging technologies. The course covers fundamental concepts, techniques, and tools for developing modern applications that are scalable, secure, and responsive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${monoFont.variable} font-regular tracking-wide antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mx-auto h-auto w-[94vw] scroll-smooth sm:container">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
