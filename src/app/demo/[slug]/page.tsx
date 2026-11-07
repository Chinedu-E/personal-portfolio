import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectDemo, projectDemos } from "@/data/site";

type DemoPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectDemos.map((demo) => ({ slug: demo.slug }));
}

export function generateMetadata({ params }: DemoPageProps): Metadata {
  const demo = getProjectDemo(params.slug);
  if (!demo) {
    return { title: "Demo" };
  }

  return {
    title: `${demo.title} Demo`,
    description: demo.subhead,
    alternates: {
      canonical: `/demo/${demo.slug}`,
    },
  };
}

export default function DemoPage({ params }: DemoPageProps) {
  const demo = getProjectDemo(params.slug);
  if (!demo) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-5 pb-16 pt-16 sm:pt-24">
      <a
        href="/#projects"
        className="font-mono text-xs uppercase tracking-widest text-paper-muted no-underline decoration-transparent hover:text-paper hover:underline"
      >
        ← Projects
      </a>

      <h1 className="mt-8 font-serif text-title text-paper">{demo.title}</h1>
      <p className="mt-3 text-paper-muted">{demo.subhead}</p>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a href={demo.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      <div className="mt-12 space-y-12">
        {demo.clips.map((clip) => (
          <section key={clip.src}>
            <h2 className="font-mono text-xs uppercase tracking-widest text-paper-muted">
              {clip.title}
            </h2>
            <p className="mt-2 text-sm text-paper/90">{clip.caption}</p>
            <div className="mt-4 overflow-hidden rounded-sm border border-ink-muted bg-ink">
              <video
                className="aspect-video w-full bg-black"
                controls
                playsInline
                preload={clip.preload}
                poster={clip.poster}
              >
                <source src={clip.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
