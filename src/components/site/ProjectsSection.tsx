import { profile } from "@/lib/profile";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { IconLink } from "@/components/ui/Icons";

function ProjectCard({
  title,
  period,
  role,
  description,
  href,
  tags,
  bullets,
}: {
  title: string;
  period: string;
  role: string;
  description: string;
  href?: string;
  tags: string[];
  bullets?: string[];
}) {
  return (
    <article className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {period}
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h3>
          <div className="mt-1 text-sm font-medium text-zinc-600">{role}</div>
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-zinc-900 px-3 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            <IconLink className="h-4 w-4" />
            Link
          </a>
        ) : (
          <span className="inline-flex h-10 items-center rounded-xl border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-500">
            Nội bộ
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-700">{description}</p>

      {bullets?.length ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
              <span className="text-sm leading-6 text-zinc-700">{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading
          eyebrow="Dự án"
          title="Thành quả trong quá trình làm việc"
          description="Một vài dự án/nhóm công việc tiêu biểu."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {profile.projects.map((p) => (
            <div key={p.title} className="lg:col-span-1">
              <ProjectCard {...p} />
            </div>
          ))}
        </div>

        {/* Keep template clean: remove extra guidance block. */}
      </Container>
    </section>
  );
}

