import type { Metadata } from "next";
import { services } from "@/data/services";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Software Development Services in Toronto | Nedu Ekeruche",
  description: "Professional software development services in Toronto including web development, data analytics, machine learning, web scraping, and automation. Custom solutions for Toronto businesses.",
  openGraph: {
    title: "Software Development Services in Toronto",
    description: "Professional software development services in Toronto including web development, data analytics, machine learning, web scraping, and automation.",
    url: "https://neduekeruche.me/services",
  },
};

export default function Services() {
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
        name: "Services",
        item: "https://neduekeruche.me/services",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Services",
    description: "Software development services offered by Nedu Ekeruche in Toronto",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: {
          "@type": "City",
          name: "Toronto",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <ServicesClient services={services} />
        </div>
      </section>
    </>
  );
}
