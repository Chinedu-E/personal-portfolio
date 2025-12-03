import type { Metadata } from "next";
import { projects } from "@/data/projects";
import WorkClient from "@/components/WorkClient";

export const metadata: Metadata = {
  title: "Software Development Projects | Toronto Developer - Nedu Ekeruche",
  description: "Portfolio of software development projects by Nedu Ekeruche, a Toronto-based developer. Featuring full-stack applications, mobile apps, and web solutions including Craftha, SereinMod, Whot Online, and more.",
  openGraph: {
    title: "Software Development Projects | Toronto Developer",
    description: "Portfolio of software development projects by Nedu Ekeruche, a Toronto-based developer. Full-stack applications, mobile apps, and web solutions.",
    url: "https://neduekeruche.me/work",
  },
};

export default function Work() {
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
        name: "Work",
        item: "https://neduekeruche.me/work",
      },
    ],
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Projects",
    description: "Portfolio of software development projects by Nedu Ekeruche",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: project.category,
        url: project.live || undefined,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <WorkClient projects={projects} />
        </div>
      </section>
    </>
  );
}
