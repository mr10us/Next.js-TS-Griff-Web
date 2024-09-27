import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./index.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
const groteskDemi = localFont({
  src: "/fonts/ReformaGroteskDemi.woff2",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "GRIFF",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(ubuntu.className, groteskDemi.variable, "tracking-wider")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

