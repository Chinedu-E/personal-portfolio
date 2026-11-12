import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-ink-muted pb-16 pt-16 sm:pt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-paper-muted">
        {site.location}
      </p>
      <h1 className="mt-4 font-serif text-display text-paper">{site.name}</h1>
      <p className="mt-3 text-lg text-paper-muted">
        {site.title.split(" | ").map((part, index) => (
          <span key={part}>
            {index > 0 && " | "}
            <span className="whitespace-nowrap">{part}</span>
          </span>
        ))}
      </p>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper-muted">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <div className="mt-10 max-w-prose space-y-4 text-base text-paper/90">
        {site.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 max-w-prose text-sm text-paper-muted">
        Core interests: {site.interests.join(" · ")}
      </p>
    </section>
  );
}
