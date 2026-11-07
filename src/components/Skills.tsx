import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section className="border-b border-ink-muted py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-paper-muted">
        Skills
      </h2>

      <div className="mt-10 space-y-8">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium text-paper">{group.title}</h3>
            <p className="mt-2 text-sm text-paper-muted">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
