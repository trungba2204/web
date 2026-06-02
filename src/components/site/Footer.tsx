import { profile } from "@/lib/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200/70 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-900">
              {profile.name}
            </div>
            <div className="mt-1 text-xs text-zinc-600">
              © {year} • {profile.role}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "#about", label: "Giới thiệu" },
              { href: "#projects", label: "Dự án" },
              { href: "#contact", label: "Liên hệ" },
            ].map((x) => (
              <a
                key={x.href}
                href={x.href}
                className="text-xs font-semibold text-zinc-700 hover:underline"
              >
                {x.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

