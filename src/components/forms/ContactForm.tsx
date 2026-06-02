"use client";

import type React from "react";
import { useMemo, useState } from "react";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export default function ContactForm({
  defaultEmail,
}: {
  defaultEmail: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(defaultEmail);
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>({ status: "idle" });

  const emailValid = useMemo(() => {
    if (!email.trim()) return false;
    // Simple email check (good enough for client-side UX).
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) {
      setState({ status: "error", message: "Vui lòng nhập họ tên." });
      return;
    }
    if (!emailValid) {
      setState({ status: "error", message: "Email chưa đúng định dạng." });
      return;
    }
    if (message.trim().length < 10) {
      setState({
        status: "error",
        message: "Tin nhắn cần ít nhất 10 ký tự.",
      });
      return;
    }

    setState({ status: "submitting" });

    // No backend in this template, so we just simulate success.
    await new Promise((r) => setTimeout(r, 600));

    setState({
      status: "success",
      message: "Đã gửi (demo). Bạn có thể tích hợp API thực sự nếu cần.",
    });
    setName("");
    setMessage("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm"
    >
      <div className="text-sm font-semibold text-zinc-500">Gửi tin nhắn</div>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
        Lets talk.
      </h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-700">Họ tên</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:border-indigo-500"
            placeholder="Ví dụ: Nguyễn Minh Quân"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-700">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:border-indigo-500"
            placeholder="you@example.com"
            inputMode="email"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2">
        <span className="text-sm font-semibold text-zinc-700">Nội dung</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
          placeholder="Bạn muốn trao đổi về dự án/cơ hội công việc gì?"
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state.status === "submitting"}
          className="inline-flex h-11 items-center justify-center rounded-2xl bg-zinc-900 px-6 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
        >
          {state.status === "submitting" ? "Đang gửi..." : "Gửi"}
        </button>

        <div
          className={
            "text-sm " +
            (state.status === "error"
              ? "text-rose-600"
              : state.status === "success"
                ? "text-emerald-600"
                : "text-zinc-600")
          }
          aria-live="polite"
        >
          {state.status === "idle"
            ? "Điền đầy đủ thông tin rồi bấm Gửi."
            : state.status === "submitting"
              ? "Đang gửi..."
              : state.message}
        </div>
      </div>
    </form>
  );
}

