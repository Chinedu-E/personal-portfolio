import { credentials, education } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-b border-ink-muted py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-paper-muted">
        Education
      </h2>

      <ol className="mt-10 space-y-8">
        {education.map((item) => (
          <li
            key={`${item.org}-${item.period}`}
            className="grid gap-1 sm:grid-cols-[11rem_1fr]"
          >
            <p className="font-mono text-xs text-paper-muted sm:pt-1">
              {item.period}
            </p>
            <div>
              <p className="font-serif text-lg text-paper">{item.role}</p>
              <p className="text-paper-muted">{item.org}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-sm text-paper-muted">
        Credentials: {credentials.join(" · ")}
      </p>
    </section>
  );
}
