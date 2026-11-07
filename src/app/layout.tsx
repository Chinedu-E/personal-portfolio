import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const baseUrl = "https://neduekeruche.me";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nedu Ekeruche | Software Engineer & Quantitative Developer",
    template: "%s | Nedu Ekeruche",
  },
  description:
    "Software engineer and quantitative developer in Toronto. Applied AI in finance — portfolio optimization and AML — with a B.Math & Statistics background. Currently specializing in FinTech at Sheridan College.",
  keywords: [
    "quantitative developer",
    "fintech",
    "portfolio optimization",
    "AML",
    "reinforcement learning",
    "graph neural networks",
    "Toronto",
    "Nedu Ekeruche",
  ],
  authors: [{ name: "Nedu Ekeruche" }],
  creator: "Nedu Ekeruche",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: baseUrl,
    siteName: "Nedu Ekeruche",
    title: "Nedu Ekeruche | Software Engineer & Quantitative Developer",
    description:
      "Software engineer and quantitative developer specializing in applied AI in finance — portfolio allocation and AML.",
  },
  twitter: {
    card: "summary",
    title: "Nedu Ekeruche | Software Engineer & Quantitative Developer",
    description:
      "Software engineer and quantitative developer specializing in applied AI in finance.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "mHEq149PPBailk9lFi9HTR_RsxT5a9NGOvvAxkqLRDM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nedu Ekeruche",
    jobTitle: "Software Engineer & Quantitative Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    email: "cekeruche@icloud.com",
    url: baseUrl,
    sameAs: [
      "https://github.com/Chinedu-E",
      "https://www.linkedin.com/in/nedu-ekeruche",
    ],
    knowsAbout: [
      "Quantitative Finance",
      "Portfolio Optimization",
      "Anti-Money Laundering",
      "Reinforcement Learning",
      "Graph Neural Networks",
      "Python",
      "PyTorch",
      "FastAPI",
      "TypeScript",
      "React",
      "Next.js",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Carleton University",
      },
      {
        "@type": "EducationalOrganization",
        name: "Sheridan College",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Machine Learning Engineer",
        recognizedBy: {
          "@type": "Organization",
          name: "Google",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "TensorFlow Developer",
        recognizedBy: {
          "@type": "Organization",
          name: "Google",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
