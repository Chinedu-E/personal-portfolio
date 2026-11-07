import { otherProjects, projects, type Project } from "@/data/site";

function ProjectArticle({ project }: { project: Project }) {
  return (
    <article>
      <h3 className="font-serif text-title text-paper">{project.title}</h3>
      <p className="mt-3 text-paper-muted">{project.subhead}</p>

      {project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {project.links.map((link) => {
            const external = /^https?:\/\//.test(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      <ul className="mt-6 list-disc space-y-2 pl-5 text-paper/90">
        {project.takeaways.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="font-mono text-xs text-paper-muted">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-ink-muted py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-paper-muted">
        Projects
      </h2>

      <div className="mt-10 space-y-16">
        {projects.map((project) => (
          <ProjectArticle key={project.id} project={project} />
        ))}
      </div>

      <details className="group mt-16 border-t border-ink-muted pt-8">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-paper-muted hover:text-paper [&::-webkit-details-marker]:hidden">
          Other Projects
          <span className="font-sans text-sm normal-case tracking-normal group-open:hidden">
            Show
          </span>
          <span className="hidden font-sans text-sm normal-case tracking-normal group-open:inline">
            Hide
          </span>
        </summary>

        <div className="mt-10 space-y-16">
          {otherProjects.map((project) => (
            <ProjectArticle key={project.id} project={project} />
          ))}
        </div>
      </details>
    </section>
  );
}
