import type { Metadata } from "next";
import Image from "next/image";
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

  const suffix = demo.kind === "results" ? "Results" : "Demo";

  return {
    title: `${demo.title} ${suffix}`,
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
    <main className="mx-auto max-w-3xl px-5 pb-16 pt-16 sm:pt-24">
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
        {demo.paper && (
          <a href={demo.paper} target="_blank" rel="noopener noreferrer">
            Paper
          </a>
        )}
      </div>

      {demo.summary && (
        <p className="mt-10 text-paper/90">{demo.summary}</p>
      )}

      <div className="mt-12 space-y-12">
        {demo.tables?.map((table) => (
          <section key={table.title}>
            <h2 className="font-mono text-xs uppercase tracking-widest text-paper-muted">
              {table.title}
            </h2>
            {table.caption && (
              <p className="mt-2 text-sm text-paper/90">{table.caption}</p>
            )}
            <div className="mt-4 overflow-x-auto border border-ink-muted">
              <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-ink-muted">
                    {table.headers.map((header, index) => (
                      <th
                        key={`${table.title}-h-${index}`}
                        className="whitespace-nowrap px-3 py-2 font-mono text-xs font-normal uppercase tracking-widest text-paper-muted"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr
                      key={`${table.title}-r-${rowIndex}`}
                      className="border-b border-ink-muted last:border-b-0"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`${table.title}-c-${rowIndex}-${cellIndex}`}
                          className={`whitespace-nowrap px-3 py-2 ${
                            cellIndex === 0
                              ? "text-paper/90"
                              : "text-right text-paper"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {demo.figures?.map((figure) => (
          <section key={figure.src}>
            <h2 className="font-mono text-xs uppercase tracking-widest text-paper-muted">
              {figure.title}
            </h2>
            <p className="mt-2 text-sm text-paper/90">{figure.caption}</p>
            <div className="mt-4 overflow-hidden rounded-sm border border-ink-muted bg-ink">
              <Image
                src={figure.src}
                alt={figure.alt}
                width={figure.width}
                height={figure.height}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </section>
        ))}

        {demo.clips?.map((clip) => (
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
