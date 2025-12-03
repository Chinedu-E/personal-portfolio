import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Toronto Software Developer | Nedu Ekeruche",
  description: "Get in touch with Nedu Ekeruche, a software developer in Toronto. Available for freelance projects including web development, data analytics, machine learning, and automation solutions.",
  openGraph: {
    title: "Contact Toronto Software Developer",
    description: "Get in touch with Nedu Ekeruche, a software developer in Toronto. Available for freelance projects.",
    url: "https://neduekeruche.me/contact",
  },
};

export default function Contact() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://neduekeruche.me",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://neduekeruche.me/contact",
      },
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Nedu Ekeruche",
    description: "Contact page for Nedu Ekeruche, a software developer in Toronto",
    mainEntity: {
      "@type": "Person",
      name: "Nedu Ekeruche",
      email: "neduekeruche@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
