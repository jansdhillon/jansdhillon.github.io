import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { Socials } from "@/components/socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jan-Yaeger Dhillon",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} bg-background flex flex-col mx-auto container   h-[100dvh] md:p-10 p-10`}
      >
        {children}
      </body>
    </html>
  );
}
