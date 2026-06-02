import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/profile";

function Avatar() {
  return (
    <div
      className="relative grid aspect-square w-full max-w-[360px] place-items-center overflow-hidden rounded-[28px] border border-zinc-200/80 bg-gradient-to-br from-indigo-600 to-sky-500 shadow-sm"
    >
      <Image
        src="/avatar.jpeg"
        alt={`Ảnh đại diện của ${profile.name}`}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 360px"
        className="object-cover"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Sẵn sàng cho dự án mới
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium leading-7 text-zinc-600">
              {profile.role}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-700 sm:text-base sm:leading-7">
              {profile.about}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Xem dự án
              </a>
              <Link
                href={`mailto:${profile.email}?subject=Hello%20${encodeURIComponent(
                  profile.name
                )}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Gửi email
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Angular",
                "Next.js",
                "MySQL",
                "AI Agent",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
}

