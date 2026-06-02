"use client";

import { useCallback, useState } from "react";

const navItems = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#projects", label: "Dự án" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onNav = useCallback((href: string) => {
    setOpen(false);
    // With `scroll-behavior: smooth` in globals.css, anchor scroll will be smooth.
    // This handler mainly closes the mobile menu.
    void href;
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="bg-zinc-50/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/60 border-b border-zinc-200/70 dark:bg-black/40 dark:border-zinc-800/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-sm">
              <span className="text-sm font-bold leading-none">NQ</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Nguyễn Minh Quân
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-300">Software Engineer</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => onNav(item.href)}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:quannguyen092004@gmail.com"
              className="hidden rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 sm:inline-flex"
            >
              Gửi email
            </a>

            <button
              type="button"
              aria-label="Mở menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <div className="relative h-5 w-6">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full bg-zinc-800 transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full bg-zinc-800 transition-opacity ${open ? "opacity-0" : "opacity-100 translate-y-[7px]"}`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-zinc-800 transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-zinc-200/70 md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => onNav(item.href)}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-900/40"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="mailto:quannguyen092004@gmail.com"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-zinc-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Gửi email
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

