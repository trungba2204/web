import { profile } from "@/lib/profile";

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="text-3xl font-semibold tracking-tight text-zinc-950">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium leading-6 text-zinc-600">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat value="3+ năm" label="Kinh nghiệm fullstack" />
          <Stat value="Java" label="Backend: Spring Boot + REST API" />
          <Stat
            value="Angular/Next.js"
            label="Frontend: UI/UX + responsive"
          />
        </div>

        {/* Small attribution to keep template clean */}
        <div className="sr-only">{profile.email}</div>
      </div>
    </section>
  );
}

