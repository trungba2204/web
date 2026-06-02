import type React from "react";
import { profile } from "@/lib/profile";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
      {children}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading
          eyebrow="Kỹ năng"
          title="Công nghệ & điểm mạnh"
          description="Tập trung vào backend Java/Spring Boot và frontend Angular/Next.js, kết hợp UI/UX và tư duy sản phẩm."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm lg:col-span-1">
            <div className="text-sm font-semibold text-zinc-500">Programming</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.languages.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>

            <div className="mt-6 text-sm font-semibold text-zinc-500">
              Frameworks
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.frameworks.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>

            <div className="mt-6 text-sm font-semibold text-zinc-500">
              Database
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.databases.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-zinc-500">
                Skills Description
              </div>
              <ul className="mt-4 space-y-4">
                {profile.skills.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 flex-none rounded-full bg-indigo-500" />
                    <p className="text-sm leading-7 text-zinc-700">{h}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-indigo-50 p-4 text-sm font-semibold text-indigo-900">
                Luôn ưu tiên: hiệu năng, bảo mật, và trải nghiệm người dùng.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

