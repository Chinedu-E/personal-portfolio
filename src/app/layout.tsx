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

const baseUrl = "https://neduekeruche.me";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Software Developer in Toronto | Nedu Ekeruche - Full Stack Developer",
    template: "%s | Nedu Ekeruche - Toronto Software Developer"
  },
  description: "Nedu Ekeruche is a software developer based in Toronto, specializing in full-stack web development, data analytics, and machine learning. Offering custom web solutions, mobile apps, and AI services for Toronto businesses.",
  keywords: [
    "software developer Toronto",
    "Toronto software developer",
    "full stack developer Toronto",
    "web developer Toronto",
    "software development services Toronto",
    "React developer Toronto",
    "Next.js developer Toronto",
    "Python developer Toronto",
    "TypeScript developer",
    "machine learning Toronto",
    "data analytics Toronto"
  ],
  authors: [{ name: "Nedu Ekeruche" }],
  creator: "Nedu Ekeruche",
  publisher: "Nedu Ekeruche",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Nedu Ekeruche - Toronto Software Developer",
    title: "Software Developer in Toronto | Nedu Ekeruche",
    description: "Full-stack software developer in Toronto specializing in web development, data analytics, and machine learning. Custom solutions for Toronto businesses.",
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nedu Ekeruche - Toronto Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Developer in Toronto | Nedu Ekeruche",
    description: "Full-stack software developer in Toronto specializing in web development, data analytics, and machine learning.",
    images: [`${baseUrl}/opengraph-image.jpg`],
    creator: "@neduekeruche",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "mHEq149PPBailk9lFi9HTR_RsxT5a9NGOvvAxkqLRDM",
  }
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
    jobTitle: "Software Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    email: "neduekeruche@gmail.com",
    url: baseUrl,
    sameAs: [
      "https://github.com/Chinedu-E",
      "https://www.linkedin.com/in/nedu-ekeruche",
    ],
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "Data Analytics",
      "Machine Learning",
      "AI Development",
      "Python",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Go",
      "Selenium",
      "Pandas",
      "Scikit-learn",
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "Stripe",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Carleton University",
    },
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nedu Ekeruche - Toronto Software Developer",
    url: baseUrl,
    description: "Portfolio website of Nedu Ekeruche, a software developer based in Toronto specializing in full-stack web development, data analytics, and machine learning.",
    publisher: {
      "@type": "Person",
      name: "Nedu Ekeruche",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nedu Ekeruche - Software Development Services",
    description: "Software development services in Toronto including web development, data analytics, machine learning, and automation solutions.",
    areaServed: {
      "@type": "City",
      name: "Toronto",
    },
    serviceType: [
      "Web Development",
      "Data Analytics",
      "Machine Learning",
      "Web Scraping",
      "Automation Scripts",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
