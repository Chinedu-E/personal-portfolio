import { site } from "@/data/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-paper-muted">
        Contact
      </h2>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a
          href={site.resumePath}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <p className="mt-12 text-sm text-paper-muted">
        © {year} {site.name}
      </p>
    </footer>
  );
}
