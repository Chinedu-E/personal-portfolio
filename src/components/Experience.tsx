import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-ink-muted py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-paper-muted">
        Experience
      </h2>

      <ol className="mt-10 space-y-10">
        {experience.map((item) => (
          <li
            key={`${item.org}-${item.period}`}
            className="grid gap-1 sm:grid-cols-[11rem_1fr]"
          >
            <p className="font-mono text-xs text-paper-muted sm:pt-1">
              {item.period}
            </p>
            <div>
              <p className="font-serif text-lg text-paper">{item.role}</p>
              {item.engagements && item.engagements.length > 0 ? (
                <div className="mt-5 space-y-8">
                  {item.engagements.map((engagement) => (
                    <div key={engagement.name}>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <p className="text-paper">{engagement.name}</p>
                        {engagement.links?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                      {engagement.detail && (
                        <p className="mt-1 font-mono text-xs text-paper-muted">
                          {engagement.detail}
                        </p>
                      )}
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-paper/90">
                        {engagement.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-paper-muted">{item.org}</p>
                  {item.detail && (
                    <p className="mt-1 font-mono text-xs text-paper-muted">
                      {item.detail}
                    </p>
                  )}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-paper/90">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {item.links && item.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
