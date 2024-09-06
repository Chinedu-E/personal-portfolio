import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster"



const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
 });

export const metadata: Metadata = {
  title: "Nedu's Portfolio",
  description: "Software Developer Portfolio",

  openGraph: {
    title: "Nedu's Portfolio",
  description: "Software Developer Portfolio",
  type: "website",
    locale: 'en_US',
    siteName: "Nedu's Portfolio",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster />
        </body>
    </html>
  );
}
