import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/modules/header/header-view";
import { ThemeProvider } from "@/components/theme-provider";
import { DotPattern } from "@/components/ui/dot-pattern";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NodeSpec",
  description: "NodeSpec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider >
          <Header />
          <main className="max-w-6xl mx-auto border-x">
            <DotPattern />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
