import { profile } from "@/lib/profile";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading
          eyebrow="Kinh nghiệm"
          title="Đã làm gì trong thực tế"
          description="Nơi mình tập trung: backend REST API (Java/Spring Boot) và frontend UI/UX (Angular/Next.js)."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {profile.experience.period}
              </div>
              <div className="mt-3 text-lg font-semibold text-zinc-950">
                {profile.experience.company}
              </div>
              <div className="mt-2 text-sm leading-7 text-zinc-600">
                {profile.role}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-zinc-700">
                {profile.experience.summary}
              </p>
              <ul className="mt-6 space-y-4">
                {profile.experience.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-indigo-500" />
                    <p className="text-sm leading-7 text-zinc-700">{b}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["RESTful APIs", "Spring Security", "JPA/Hibernate", "Responsive UI"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

