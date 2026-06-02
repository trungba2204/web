import type React from "react";
import { profile } from "@/lib/profile";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { IconFacebook, IconMail, IconMapPin, IconPhone } from "@/components/ui/Icons";

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-white p-4">
      <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-700">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {label}
        </div>
        <div className="mt-1 text-sm font-semibold text-zinc-900">{value}</div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading
          eyebrow="Thông tin"
          title="Giới thiệu & Mục tiêu"
          description="Tóm tắt về kinh nghiệm, định hướng phát triển nghề nghiệp và thông tin cá nhân."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">
                {profile.role}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                {profile.about}
              </p>
              <div className="mt-6 rounded-2xl bg-indigo-50 p-5">
                <div className="text-sm font-semibold text-indigo-900">
                  Mục tiêu nghề nghiệp
                </div>
                <p className="mt-2 text-sm leading-7 text-indigo-900/90">
                  {profile.objectives}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <InfoRow
              icon={<IconPhone className="h-5 w-5" />}
              label="SĐT"
              value={
                <a className="hover:underline" href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              }
            />
            <InfoRow
              icon={<IconMail className="h-5 w-5" />}
              label="Email"
              value={
                <a
                  className="hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              }
            />
            <InfoRow
              icon={<IconMapPin className="h-5 w-5" />}
              label="Địa chỉ"
              value={<span>{profile.location}</span>}
            />
            <InfoRow
              icon={<IconFacebook className="h-5 w-5" />}
              label="Facebook"
              value={
                profile.facebookUrl ? (
                  <a
                    className="hover:underline"
                    href={profile.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {new URL(profile.facebookUrl).hostname}
                  </a>
                ) : (
                  <span>—</span>
                )
              }
            />

            <InfoRow
              icon={<span className="text-base font-semibold">🎂</span>}
              label="Ngày sinh"
              value={<span>{profile.birthDate}</span>}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

