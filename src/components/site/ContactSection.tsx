import { profile } from "@/lib/profile";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import {
  IconFacebook,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@/components/ui/Icons";
import type React from "react";

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-700">
          {icon}
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {label}
          </div>
          <div className="mt-1 text-sm font-semibold text-zinc-900">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading
          eyebrow="Liên hệ"
          title="Sẵn sàng kết nối"
          description="Bạn có thể gửi tin nhắn trực tiếp (demo form) hoặc liên hệ qua thông tin bên cạnh."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm defaultEmail={profile.email} />
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            <ContactItem
              icon={<IconPhone className="h-5 w-5" />}
              label="SĐT"
              value={
                <a
                  className="hover:underline"
                  href={`tel:${profile.phone}`}
                >
                  {profile.phone}
                </a>
              }
            />
            <ContactItem
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
            <ContactItem
              icon={<IconMapPin className="h-5 w-5" />}
              label="Địa chỉ"
              value={<span>{profile.location}</span>}
            />

            {profile.facebookUrl ? (
              <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-700">
                    <IconFacebook className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Facebook
                    </div>
                    <a
                      className="mt-1 inline-block text-sm font-semibold text-zinc-900 hover:underline"
                      href={profile.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {new URL(profile.facebookUrl).hostname}
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

