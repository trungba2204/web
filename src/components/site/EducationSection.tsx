import { profile } from "@/lib/profile";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EducationSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Học vấn"
          title="Bằng cấp & ghi nhận"
          description="Tóm tắt học vấn và chứng chỉ."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {profile.education.period}
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
              {profile.education.school}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              {profile.education.note}
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Chứng chỉ
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
              {profile.certificate}
            </h3>
            <div className="mt-3 rounded-2xl bg-indigo-50 p-4 text-sm font-semibold text-indigo-900">
              Định hướng phát triển kỹ năng nghề nghiệp liên tục.
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-500">
              Sáng kiến
            </div>
            <ul className="mt-4 space-y-3">
              {profile.initiatives.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
                  <span className="text-sm leading-6 text-zinc-700">{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-500">
              Sở thích
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.interests.map((x) => (
                <span
                  key={x}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700"
                >
                  {x}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-700">
              Tinh thần làm việc hiệu quả và kỷ luật được duy trì từ các hoạt động thể thao.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

